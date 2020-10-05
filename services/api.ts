import Axios from 'axios';
import { SUPPORT_LOGIN } from 'consts';
import { ApiComponents, CarouselComponent } from 'types/components';

const fetch = Axios.create({
  baseURL: process.env.API_URI || 'http://localhost:1337'
});

type Page = {
  Title: string,
  Slug: string,
  id: number
}
type SubItem = {
  Page: Page
}
type Item = {
  Page: Page,
  SubItems: SubItem[]
}
type ThemeSettingsApiResult = {
  Navigation: Item[],
  Logo: {
    Title: string,
    Image: {
      alternativeText: string,
      url: string
    }
  },
  ContactInfo: {
    Email: string,
    Phone: string,
    Locations: Array<{
      Address: string
    }>
  }
}
type Carousel = {
  __component: 'carousel.carousel',
  Margin: string,
  Views: Array<{
    Heading: string,
    Button: {
      Text: string,
      Color: 'Purple' | 'Yellow' | 'Green',
      Page: {
        id: number
      }
    },
    Background: {
      url: string,
      alternativeText: string
    }
  }>
}
type PagesApiResult = {
  Title: string,
  Content: Array<
    Carousel
  >
}

export const apiService = {
  paths: async () => {
    return (await fetch.get<ThemeSettingsApiResult>('/theme-settings')).data.Navigation
    .map(item => ({
      params: {
        slug: [item.Page.Slug || '']
      },
      subItems: item.SubItems.map(subitem => ({
        params: {
          slug: [item.Page.Slug || '', subitem.Page.Slug || '']
        }
      }))
    }))
    .reduce((prev, item) => [...prev, { params: item.params }, ...item.subItems], []);
  },
  theme: async () => {
    const { data: { Logo, Navigation, ContactInfo }} = await fetch.get<ThemeSettingsApiResult>('/theme-settings');
    return {
      headerProps: {
        navigation: Navigation
        .map(item => ({
          title: item.Page.Title,
          slug: `/${item.Page.Slug || ''}`,
          subnav: item.SubItems.map(subitem => ({
            title: subitem.Page.Title,
            slug: `/${item.Page.Slug || ''}/${subitem.Page.Slug || ''}`
          }))
        })),
        logo: {
          title: Logo.Title,
          image: {
            src: Logo.Image.url,
            alt: Logo.Image.alternativeText
          }
        }
      },
      footerProps: {
        supportLogin: SUPPORT_LOGIN,
        demoRequest: 'https://www.google.com',
        addresses: ContactInfo.Locations.map(location => location.Address),
        mail: ContactInfo.Email,
        phone: ContactInfo.Phone
      },
      slugsIdDict: Navigation
        .map(item => ({
        ['/' + (item.Page.Slug || '')]: item.Page.id,
        ...item.SubItems
        .map(subitem => ({
          ['/' + (item.Page.Slug || '') + '/' + (subitem.Page.Slug || '')]: subitem.Page.id,
        }))
        .reduce((prev, subitem) => ({ ...prev, ...subitem }),  {})
        }))
        .reduce((prev, item) => ({ ...prev, ...item }),  {}),
      title: Logo.Title
    };
  },
  pages: async (id: number, idSlugDict: {[x: string]: string}) => {
    const { Title, Content } = (await fetch.get<PagesApiResult>(`/pages/${id}`)).data;
    const components: ApiComponents = Content
    .map(component => {
      switch (component.__component) {
        case 'carousel.carousel':
          const carouselComponent: CarouselComponent = {
            type: 'carousel',
            props: {
              margin: component.Margin,
              views: component.Views.map(view => ({
                background: {
                  src: view.Background.url,
                  alt: view.Background.alternativeText
                },
                heading: view.Heading,
                button: {
                  text: view.Button.Text,
                  uri: idSlugDict[view.Button.Page.id],
                  color: view.Button.Color
                }
              }))
            }
          };
          return carouselComponent;
        default:
          return null;
      }
    })
    .filter(component => component);
    return {
      title: Title,
      components
    }
  }
}
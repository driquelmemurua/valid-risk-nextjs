import Axios from 'axios';
import { SUPPORT_LOGIN } from 'consts';
import { ApiComponents, CardListComponent, CarouselComponent, ContactFormComponent, HeroImageComponent, HeroWithDescriptionComponent, ImageListComponent, QuoteBlockComponent } from 'types/components';

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
  __component: 'carousel.carousel'
  id: number
  Margin: string
  Views: {
    id: number
    Heading: string
    Button: {
      Text: string
      Color: 'Purple' | 'Yellow' | 'Green'
      Page: {
        id: number
      }
    }
    Background: {
      url: string
      alternativeText: string
    }
  }[]
}
type HeroImage = {
  __component: 'hero-image.hero-image'
  id: number
  Content: string
  Margin: string
  Image: {
    url: string,
    alternativeText: string
  }
}
type CardList = {
  __component: 'cards.card-list'
  id: number
  Margin: string
  Cards: {
    id: number
    Title: string
    Icon: string
    Content: string
    Color: 'White' | 'Purple'
  }[]
}
type QuoteBlock = {
  __component: 'quote-block.quote-block'
  id: number
  Text: string
  Color: 'Purple' | 'Green' | 'Yellow'
  QuoteLink: string
  Margin: string
}
type ImageList = {
  __component: 'image-list.image-list'
  id: number
  Title: string
  TitleDrop?: string 
  Position: 'Right' | 'Left'
  Color: 'Purple' | 'Green' | 'Yellow'
  Margin: string
  Image: {
    url: string
    alternativeText: string
  }
  Item: {
    id: number
    Text: string
  }[]
}
type HeroWithDescription = {
  __component: 'hero-image.hero-with-description'
  id: number
  Heading: string
  Description: string
  Color: 'Purple' | 'Yellow' | 'Green'
  Image: {
    url: string
    alternativeText: string
  }
}
type ContactForm = {
  __component: 'form.contact-form'
  id: number
  Action: string
}
type PagesApiResult = {
  Title: string
  Content: Array<
    Carousel |
    HeroImage |
    CardList |
    QuoteBlock |
    ImageList |
    HeroWithDescription |
    ContactForm
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
            key: component.__component + component.id.toString(),
            type: 'carousel',
            props: {
              margin: component.Margin,
              views: component.Views.map(view => ({
                key: view.id.toString(),
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
        case 'cards.card-list':
          const cardListComponent: CardListComponent = {
            key: component.__component + component.id.toString(),
            type: 'cardList',
            props: {
              cards: component.Cards.map(card => ({
                key: card.id.toString(),
                title: card.Title,
                icon: card.Icon,
                content: card.Content,
                color: card.Color
              })),
              margin: component.Margin
            }
          };
          return cardListComponent;
        case 'form.contact-form':
          const contactFormComponent: ContactFormComponent = {
            key: component.__component + component.id.toString(),
            type: 'contactForm',
            props: {
              action: component.Action
            }
          };
          return contactFormComponent;
        case 'hero-image.hero-image':
          const heroImageComponent: HeroImageComponent = {
            key: component.__component + component.id.toString(),
            type: 'heroImage',
            props: {
              content: component.Content,
              image: {
                src: component.Image.url,
                alt: component.Image.alternativeText
              },
              margin: component.Margin
            }
          };
          return heroImageComponent;
        case 'hero-image.hero-with-description':
          const HeroWithDescription: HeroWithDescriptionComponent = {
            key: component.__component + component.id.toString(),
            type: 'heroWithDescription',
            props: {
              heading: component.Heading,
              description: component.Description,
              color: component.Color,
              image: {
                src: component.Image.url,
                alt: component.Image.alternativeText
              }
            }
          };
          return HeroWithDescription;
        case 'image-list.image-list':
          const imageList: ImageListComponent = {
            key: component.__component + component.id.toString(),
            type: 'imageList',
            props: {
              title: component.Title,
              position: component.Position,
              color: component.Color,
              margin: component.Margin,
              image: {
                src: component.Image.url,
                alt: component.Image.alternativeText
              },
              items: component.Item.map(item => ({
                key: item.id.toString(),
                text: item.Text
              }))
            }
          };
          return imageList;
        case 'quote-block.quote-block':
          const quoteBlock: QuoteBlockComponent = {
            key: component.__component + component.id.toString(),
            type: 'quoteBlock',
            props: {
              text: component.Text,
              color: component.Color,
              url: component.QuoteLink,
              margin: component.Margin
            }
          };
          return quoteBlock;
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
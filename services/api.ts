import Axios from 'axios';

const fetch = Axios.create({
  baseURL: process.env.API_URI || 'http://localhost:1337'
});

type Page = {
  Title: string,
  Slug: string
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
  }
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
    const { data: { Logo, Navigation }} = await fetch.get<ThemeSettingsApiResult>('/theme-settings');
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
      titles: Navigation
      .reduce((prev, item) => [
        ...prev,
        {
          title: `${Logo.Title} - ${item.Page.Title}`,
          slug: `/${item.Page.Slug || ''}`,
        },
        ...item.SubItems.map(subitem => ({
          title: `${Logo.Title} - ${subitem.Page.Title}`,
          slug: `/${item.Page.Slug || ''}/${subitem.Page.Slug || ''}`
        }))], [])
      .reduce((prev, item) => ({...prev, [item.slug]: item.title}), {})
    };
  },
}
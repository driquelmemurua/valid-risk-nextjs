import { ApiService } from "services/ApiProvider";
import { apiComponentParser } from "services/PageBuilder/apiComponentParser";
import { arrayToSlug } from "services/PageBuilder/arrayToSlug";
import { FooterProps } from "types/components/Footer";
import { HeaderProps } from "types/components/Header";
import { Page } from "types/Page";

export class PageBuilder {

  static dictionary?: NodeJS.Dict<number>;
  static async getSlugToIdDictionary(): Promise<NodeJS.Dict<number>> {
    if(!this.dictionary)
      this.dictionary = (await ApiService.getThemeSettings()).Navigation
      .reduce((prev, page) => ({
        ...prev,
        [`/${page.Page.Slug || ''}`]: page.Page.id,
        ...(page.SubItems ? page.SubItems.reduce((prev, subpage) => ({
          ...prev,
          [`/${page.Page.Slug || ''}/${subpage.Page.Slug || ''}`]: subpage.Page.id
        }), {}) : {})
      }), {});
    if(this.dictionary)
      return this.dictionary
  }

  static async getIdToSlugDictionary(): Promise<NodeJS.Dict<string>> {
    if(!this.dictionary)
      this.dictionary = (await ApiService.getThemeSettings()).Navigation
      .reduce((prev, page) => ({
        ...prev,
        [`/${page.Page.Slug || ''}`]: page.Page.id,
        ...(page.SubItems ? page.SubItems.reduce((prev, subpage) => ({
          ...prev,
          [`/${page.Page.Slug || ''}/${subpage.Page.Slug || ''}`]: subpage.Page.id
        }), {}) : {})
      }), {});
    if(this.dictionary)
      return Object.entries(this.dictionary).reduce((prev, [key, value]) => ({
        ...prev,
        [value]: key
      }), {})
  }

  static async build(arraySlug: string[]): Promise<Page> {
    const slug = arrayToSlug(arraySlug);
    const slugToIdDictionary = await this.getSlugToIdDictionary();
    const idToSlugDictionary = await this.getIdToSlugDictionary();
    const id = slugToIdDictionary[slug];
    const { Title: title, MetaDescription: description, Content } = await ApiService.getPage(id);
    const components = Content.map(component => apiComponentParser(component, idToSlugDictionary));
    return {
      title: `Valid Risk - ${title}`,
      description,
      components
    }
  }

  static async headerProps(arraySlug: string[]): Promise<HeaderProps> {
    const { Navigation, Logo } = await ApiService.getThemeSettings();
    const slug = arrayToSlug(arraySlug);

    return {
      slug,
      logo: {
        image: {
          src: Logo.Image.url,
          alt: Logo.Image.alternativeText
        },
        title: Logo.Title
      },
      navigation: Navigation.map(page => ({
        title: page.Page.Title,
        slug: `/${page.Page.Slug || ''}`,
        subnav: page.SubItems.map(subpage => ({
          title: subpage.Page.Title,
          slug: `/${page.Page.Slug || ''}/${subpage.Page.Slug || ''}`
        }))
      }))
    }
  }

  static async footerProps(): Promise<FooterProps> {
    const { ContactInfo } = await ApiService.getThemeSettings();

    return {
      supportLogin: (process.env.API_URI || 'http://localhost:1337') + '/admin',
      demoRequest: 'https://www.google.com',
      mail: ContactInfo.Email,
      phone: ContactInfo.Phone,
      addresses: ContactInfo.Locations.map(location => ({
        key: location.id.toString(),
        location: location.Address
      }))
    }
  }
}
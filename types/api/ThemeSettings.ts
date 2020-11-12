import { ApiImage } from "types/api/Image";

export type ThemeSettings = {
  Logo: {
    Image: ApiImage
    Title: string
  }
  Navigation: {
    Page: {
      id: number
      Title: string
      Slug: string
    }
    SubItems: {
      Page: {
        id: number
        Title: string
        Slug: string
      }
    }[]
  }[]
  ContactInfo: {
    Email: string
    Phone: string
    SupportContact: string
    Locations: {
      id: number
      Address: string
    }[]
    SocialNetwork: {
      Youtube: string
    }
    Products: {
      id: number
      Name: string
      Url: string
    }[]
    Services: {
      id: number
      Name: string
      Url: string
    }[]
  }
}
import { ApiImage } from "types/api/Image";

export const ApiCarouselDisc = 'carousel.carousel';
export type ApiCarouselComponent = {
  id: number
  __component: typeof ApiCarouselDisc
  Margin: string
  Views: {
    id: number
    Heading: string
    Button: {
      Text: string
      Color: 'Yellow' | 'Green' | 'Purple'
      Page: {
        id: number
      }
    }
    Background: ApiImage
  }[]
}
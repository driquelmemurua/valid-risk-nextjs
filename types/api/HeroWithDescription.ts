import { ApiImage } from "types/api/Image";

export const ApiHeroWithDescriptionDisc = 'hero-image.hero-with-description';
export type ApiHeroWithDescriptionComponent = {
  id: number
  __component: typeof ApiHeroWithDescriptionDisc
  Margin: string
  Heading: string
  Description: string
  Color: 'Purple' | 'Green' | 'Yellow'
  Image: ApiImage
}
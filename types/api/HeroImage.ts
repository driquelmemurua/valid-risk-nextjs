import { ApiImage } from "types/api/Image";

export const ApiHeroImageDisc = 'hero-image.hero-image';
export type ApiHeroImageComponent = {
  id: number
  __component: typeof ApiHeroImageDisc
  Margin: string
  Content: string
  Image: ApiImage
}
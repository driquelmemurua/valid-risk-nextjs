import { ApiImage } from "types/api/Image";

export const ApiImageListDisc = 'image-list.image-list';
export type ApiImageListComponent = {
  id: number
  __component: typeof ApiImageListDisc
  Margin: string
  Title: string
  Item: {
    id: number
    Text: string
  }[]
  Image: ApiImage
  Link: {
    Text: string
    Url: string
  }
}
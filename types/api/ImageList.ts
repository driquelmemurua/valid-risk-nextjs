import { ApiImage } from "types/api/Image";

export const ApiImageListDisc = 'image-list.image-list';
export type ApiImageListComponent = {
  id: number
  __component: typeof ApiImageListDisc
  Margin: string
  Title: string
  Position: 'Left' | 'Right'
  Color: 'Purple' | 'Yellow' | 'Green'
  TitleDrop?: string
  Item: {
    id: number
    Text: string
  }[]
  Image: ApiImage
}
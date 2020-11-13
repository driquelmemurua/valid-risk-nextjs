export const ApiListWithDescriptionDisc = 'list-with-description.list-with-description';
export type ApiListWithDescriptionComponent = {
  id: number
  __component: typeof ApiListWithDescriptionDisc
  Margin: string
  Title: string
  Item: {
    id: number
    Name: string
    Description: string
  }[]
}
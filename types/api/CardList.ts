export const ApiCardListDisc = 'cards.card-list';
export type ApiCardListComponent = {
  id: number
  __component: typeof ApiCardListDisc
  Margin: string
  Cards: {
    id: number
    Title: string
    Icon: string
    Content: string
    Color: 'White' | 'Purple'
  }[]
}
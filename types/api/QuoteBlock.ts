export const ApiQuoteBlockDisc = 'quote-block.quote-block';
export type ApiQuoteBlockComponent = {
  id: number
  __component: typeof ApiQuoteBlockDisc
  Margin: string
  Text: string
  Color: 'Purple' | 'Green' | 'Yellow'
  QuoteLink: string
}
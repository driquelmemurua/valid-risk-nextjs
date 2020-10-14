export type QuoteBlockProps = {
  text: string
  color: 'Purple' | 'Green' | 'Yellow'
  url: string
  margin: string
}
export const QuoteBlockDisc = 'QUOTE_BLOCK';
export class QuoteBlockComponent {
  readonly discriminator = QuoteBlockDisc;
  readonly key: string;
  constructor(
    key: string,
    readonly props: QuoteBlockProps
  ) {
    this.key = `quote_block-${key}`
  }
}
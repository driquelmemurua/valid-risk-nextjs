export type CardListProps = {
  cards: {
    key: string
    title: string
    icon: string
    content: string
    color: string
  }[]
  margin: string
}
export const CardListDisc = 'CARD_LIST';
export class CardListComponent {
  readonly discriminator = CardListDisc;
  constructor(
    readonly key: string,
    readonly props: CardListProps
  ) {}
}
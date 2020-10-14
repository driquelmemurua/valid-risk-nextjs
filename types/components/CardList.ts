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
  readonly key: string;
  constructor(
    key: string,
    readonly props: CardListProps
  ) {
    this.key = `card_list-${key}`
  }
}
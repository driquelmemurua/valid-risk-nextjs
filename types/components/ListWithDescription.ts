export type ListWithDescriptionProps = {
  title: string
  margin: string
  items: {
    key: string
    name: string
    description: string
  }[]
}
export const ListWithDescriptionDisc = 'LIST_WITH_DESCRIPTION';
export class ListWithDescriptionComponent {
  readonly discriminator = ListWithDescriptionDisc;
  readonly key: string;
  constructor(
    key: string,
    readonly props: ListWithDescriptionProps
  ) {
    this.key = `list_with_description-${key}`
  }
}
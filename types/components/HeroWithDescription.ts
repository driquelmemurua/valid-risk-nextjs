export type HeroWithDescriptionProps = {
  heading: string
  description: string
  color: 'Purple' | 'Yellow' | 'Green'
  image: {
    placeholder: string
    srcs: {
      url: string
      width: number
    }[]
    alt: string
  }
  margin: string
}
export const HeroWithDescriptionDisc = 'HERO_WITH_DESCRIPTION';
export class HeroWithDescriptionComponent {
  readonly discriminator = HeroWithDescriptionDisc;
  readonly key: string;
  constructor(
    key: string,
    readonly props: HeroWithDescriptionProps
  ) {
    this.key = `hero_with_description-${key}`
  }
}
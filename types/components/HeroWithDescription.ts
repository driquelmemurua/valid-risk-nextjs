export type HeroWithDescriptionProps = {
  heading: string
  description: string
  color: 'Purple' | 'Yellow' | 'Green'
  image: {
    src: string
    alt: string
  }
  margin: string
}
export const HeroWithDescriptionDisc = 'HERO_WITH_DESCRIPTION';
export class HeroWithDescriptionComponent {
  readonly discriminator = HeroWithDescriptionDisc;
  constructor(
    readonly key: string,
    readonly props: HeroWithDescriptionProps
  ) {}
}
export type HeroImageProps = {
  content: string
  image: {
    src: string
    alt: string
  }
  margin: string
}
export const HeroImageDisc = 'HERO_IMAGE';
export class HeroImageComponent {
  readonly discriminator = HeroImageDisc;
  readonly key: string;
  constructor(
    key: string,
    readonly props: HeroImageProps
  ) {
    this.key = `hero_image-${key}`
  }
}
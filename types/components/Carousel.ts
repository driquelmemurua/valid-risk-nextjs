export type CarouselProps = {
  margin: string
  views: {
    key: string
    background: {
        src: string
        alt: string
    }
    heading: string
    button: {
        text: string
        uri: string
        color: "Purple" | "Yellow" | "Green"
    }
  }[]
}
export const CarouselDisc = 'CAROUSEL';
export class CarouselComponent {
  readonly discriminator = CarouselDisc;
  readonly key: string;
  constructor(
    key: string,
    readonly props: CarouselProps
  ) {
    this.key = `carousel-${key}`
  }
}
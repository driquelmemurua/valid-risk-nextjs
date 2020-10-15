export type CarouselProps = {
  margin: string
  views: {
    key: string
    background: {
        alt: string
        lqip: string
        img: {
          small: {
            url: string
            width: number
          }
          medium: {
            url: string
            width: number
          }
          large: {
            url: string
            width: number
          }
          original: {
            url: string
            width: number
          }
        }
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
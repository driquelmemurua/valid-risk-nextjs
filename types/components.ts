const CAROUSEL = 'carousel';
export type CarouselProps = {
  margin: string;
  views: {
      background: {
          src: string;
          alt: string;
      };
      heading: string;
      button: {
          text: string;
          uri: string;
          color: "Purple" | "Yellow" | "Green";
      };
  }[];
}
export type CarouselComponent = {
  type: typeof CAROUSEL,
  props: CarouselProps
}

export type ApiComponents = Array<CarouselComponent>


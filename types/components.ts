const CAROUSEL = 'carousel';
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
export type CarouselComponent = {
  key: string
  type: typeof CAROUSEL
  props: CarouselProps
}

const CARD_LIST = 'cardList';
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
export type CardListComponent = {
  key: string
  type: typeof CARD_LIST
  props: CardListProps
}

const HERO_IMAGE = 'heroImage';
export type HeroImageProps = {
  content: string
  image: {
    src: string
    alt: string
  }
  margin: string
}
export type HeroImageComponent = {
  key: string
  type: typeof HERO_IMAGE
  props: HeroImageProps
}

const QUOTE_BLOCK = 'quoteBlock';
export type QuoteBlockProps = {
  text: string
  color: string
  url: string
  margin: string
}
export type QuoteBlockComponent = {
  key: string
  type: typeof QUOTE_BLOCK
  props: QuoteBlockProps
}
const IMAGE_LIST = 'imageList';
export type ImageListProps = {
  title: string
  titleDrop?: string
  position: 'Left' | 'Right'
  color: 'Green' | 'Purple' | 'Yellow'
  margin: string
  items: {
    key: string
    text: string
  }[]
  image: {
    src: string
    alt: string
  }
}
export type ImageListComponent = {
  key: string
  type: typeof IMAGE_LIST
  props: ImageListProps
}

const HERO_WITH_DESCRIPTION = 'heroWithDescription';
export type HeroWithDescriptionProps = {
  heading: string
  description: string
  color: 'Purple' | 'Yellow' | 'Green'
  image: {
    src: string
    alt: string
  }
}
export type HeroWithDescriptionComponent = {
  key: string
  type: typeof HERO_WITH_DESCRIPTION
  props: HeroWithDescriptionProps
}

const CONTACT_FORM = 'contactForm';
export type ContactFormProps = {
  action: string
}
export type ContactFormComponent = {
  key: string
  type: typeof CONTACT_FORM
  props: ContactFormProps
}

export type ApiComponents = Array<
  CarouselComponent |
  CardListComponent |
  HeroImageComponent |
  QuoteBlockComponent |
  ImageListComponent |
  HeroWithDescriptionComponent |
  ContactFormComponent
>

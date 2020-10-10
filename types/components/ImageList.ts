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
export const ImageListDisc = 'IMAGE_LIST';
export class ImageListComponent {
  readonly discriminator = ImageListDisc;
  constructor(
    readonly key: string,
    readonly props: ImageListProps
  ) {}
}
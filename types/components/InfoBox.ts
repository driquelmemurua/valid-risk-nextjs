export type InfoBoxProps = {
  margin: string
  title: {
    text: string
    color: 'Purple' | 'Green' | 'Yellow' | 'DarkGreen' | 'Gray'
    icon: string
  }
  content: {
    text: string
    color: 'Purple' | 'Black'
  }
  link?: {
    text: string
    uri: string
    color: 'Purple' | 'Green' | 'Yellow' | 'Gray' | 'Black'
    position: 'Left' | 'Right'
  }
}
export const InfoBoxDisc = 'INFO_BOX';
export class InfoBoxComponent {
  readonly discriminator = InfoBoxDisc;
  readonly key: string;
  constructor(
    key: string,
    readonly props: InfoBoxProps
  ) {
    this.key = `InfoBox-${key}`
  }
}
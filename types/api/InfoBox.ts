export const ApiInfoBoxDisc = 'info-box.info-box';
export type ApiInfoBoxComponent = {
  id: number
  __component: typeof ApiInfoBoxDisc
  Margin: string
  Title: {
    Title: string
    Color: 'Purple' | 'Green' | 'Yellow' | 'DarkGreen' | 'Gray'
    Icon: string
  }
  Content: {
    Text: string
    Color: 'Purple' | 'Black'
  }
  Link?: {
    Text: string
    Link: string
    Color: 'Purple' | 'Green' | 'Yellow' | 'Gray' | 'Black'
    Position: 'Left' | 'Right'
  }
}
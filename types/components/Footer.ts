export type FooterProps = {
  products: {
    key: string
    name: string
    url: string
  }[]
  services: {
    key: string
    name: string
    url: string
  }[]
  addresses: {
    key: string
    location: string
  }[]
  supportContact: string
  demoRequest: string
  mail: string
  phone: string
  youtube: string
}
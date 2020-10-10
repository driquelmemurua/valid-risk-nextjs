export type HeaderProps = {
  navigation: Array<{
    title: string,
    slug: string,
    subnav: Array<{
      title: string,
      slug: string
    }>
  }>,
  slug: string,
  logo: {
    image: {
      src: string,
      alt: string
    }
  }
}
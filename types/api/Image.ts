type formats = {
  width: number
  url: string
}

export type ApiImage = {
  url: string
  alternativeText: string
  width: number
  formats: {
    thumbnail: formats
    small?: formats
    medium?: formats
    large?: formats
  }
}
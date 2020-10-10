import { Path } from "types/Path";

type Navigation = {
  slug: string
  subnav: {
    slug: string
  }[]
}[]
export function navigationToPaths(navigation: Navigation): Path[] {
  return navigation
  .reduce((prev, path) => ([
    ...prev,
    [path.slug],
    ...(path.subnav ? path.subnav.map(subpath => [path.slug, subpath.slug]) : [])
  ]), [])
  .map(slug => ({
    params: {
      slug
    }
  }));
}
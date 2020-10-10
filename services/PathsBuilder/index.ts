import { ApiService } from "services/ApiProvider";
import { navigationToPaths } from "services/PathsBuilder/navigationToPaths";
import { Path } from "types/Path";

export class PathsBuilder {
  static async build(): Promise<Path[]> {
    const { Navigation } = await ApiService.getThemeSettings();

    const navigation =  Navigation.map(nav => ({
      slug: nav.Page.Slug || '',
      subnav: nav.SubItems.map(subitem => ({
        slug: subitem.Page.Slug || ''
      }))
    }));
    
    return navigationToPaths(navigation);
  }
}
import { ApiComponents } from "types/components";
import { Preview } from 'components/Preview';

export function useComponentParser(components: ApiComponents) {
  return components
  .map((component, index) => {
    switch (component.type) {
      case 'carousel':
        return (
          <Preview
            key={index}
            { ...component.props }
          />
        )
      default:
        null;
    }
  })
  .filter(component => component);
}
import { ApiComponents } from "types/components";
import { 
  Carousel,
  CardList,
  ContactForm,
  HeroImage,
  HeroWithDescription,
  ImageList,
  QuoteBlock
} from 'components';

export function useComponentParser(components: ApiComponents) {
  return components
  .map(component => {
    switch (component.type) {
      case 'carousel':
        return (
          <Carousel
            key={component.key}
            { ...component.props }
          />
        )
      case 'cardList':
        return (
          <CardList
            key={component.key}
            { ...component.props }
          />
        )
      case 'contactForm':
        return (
          <ContactForm
            key={component.key}
            { ...component.props }
          />
        )
      case 'heroImage':
        return (
          <HeroImage
            key={component.key}
            { ...component.props }
          />
        )
      case 'heroWithDescription':
        return (
          <HeroWithDescription
            key={component.key}
            { ...component.props }
          />
        )
      case 'imageList':
        return (
          <ImageList
            key={component.key}
            { ...component.props }
          />
        )
      case 'quoteBlock':
        return (
          <QuoteBlock
            key={component.key}
            { ...component.props }
          />
        )
      default:
        null;
    }
  })
  .filter(component => component);
}
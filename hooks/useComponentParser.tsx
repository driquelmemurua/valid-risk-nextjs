import { 
  CardList, 
  Carousel, 
  ContactForm,
  HeroImage,
  HeroWithDescription, 
  ImageList,
  InfoBox,
  QuoteBlock,
  ListWithDescription
} from "components";
import { Component } from "types/components";
import { CardListDisc } from "types/components/CardList";
import { CarouselDisc } from "types/components/Carousel";
import { ContactFormDisc } from "types/components/ContactForm";
import { HeroImageDisc } from "types/components/HeroImage";
import { HeroWithDescriptionDisc } from "types/components/HeroWithDescription";
import { ImageListDisc } from "types/components/ImageList";
import { InfoBoxDisc } from "types/components/InfoBox";
import { ListWithDescriptionDisc } from "types/components/ListWithDescription";
import { QuoteBlockDisc } from "types/components/QuoteBlock";

export function useComponentParser(components: Component[]): JSX.Element[] {
  return components.map(component => {
    switch (component.discriminator) {
      case CardListDisc:
        return (
          <CardList 
            key={component.key}
            { ...component.props } 
          />
        )
      case CarouselDisc:
        return (
          <Carousel
            key={component.key}
            { ...component.props } 
          />
        )
      case ContactFormDisc:
        return (
          <ContactForm 
            key={component.key}
            { ...component.props } 
          />
        )
      case HeroImageDisc:
        return (
          <HeroImage 
            key={component.key}
            { ...component.props } 
          />
        )
      case HeroWithDescriptionDisc:
        return (
          <HeroWithDescription 
            key={component.key}
            { ...component.props } 
          />
        )
      case ImageListDisc:
        return (
          <ImageList
            key={component.key}
            { ...component.props } 
          />
        )
      case QuoteBlockDisc:
        return (
          <QuoteBlock 
            key={component.key}
            { ...component.props } 
          />
        )
      case InfoBoxDisc:
        return (
          <InfoBox 
            key={component.key}
            { ...component.props } 
          />
        )
      case ListWithDescriptionDisc:
        return (
          <ListWithDescription 
            key={component.key}
            { ...component.props } 
          />
        )
      default:
        null;
    }
  }).filter(component => component);
}
import { CardListComponent } from "types/components/CardList";
import { CarouselComponent } from "types/components/Carousel";
import { ContactFormComponent } from "types/components/ContactForm";
import { HeroImageComponent } from "types/components/HeroImage";
import { HeroWithDescriptionComponent } from "types/components/HeroWithDescription";
import { ImageListComponent } from "types/components/ImageList";
import { QuoteBlockComponent } from "types/components/QuoteBlock";
import { InfoBoxComponent } from "types/components/InfoBox";

export type Component = (
  CardListComponent |
  CarouselComponent |
  ContactFormComponent |
  HeroImageComponent |
  HeroWithDescriptionComponent |
  ImageListComponent |
  QuoteBlockComponent |
  InfoBoxComponent
);
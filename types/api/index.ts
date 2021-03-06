import { ApiCardListComponent } from "types/api/CardList";
import { ApiCarouselComponent } from "types/api/Carousel";
import { ApiContactFormComponent } from "types/api/ContactForm";
import { ApiHeroImageComponent } from "types/api/HeroImage";
import { ApiHeroWithDescriptionComponent } from "types/api/HeroWithDescription";
import { ApiImageListComponent } from "types/api/ImageList";
import { ApiQuoteBlockComponent } from "types/api/QuoteBlock";

export type ApiComponent = (
  ApiCardListComponent |
  ApiCarouselComponent |
  ApiContactFormComponent | 
  ApiHeroImageComponent |
  ApiHeroWithDescriptionComponent |
  ApiImageListComponent |
  ApiQuoteBlockComponent
);
export type ApiPage = {
  id: number
  Title?: string
  Slug?: string
  MetaDescription?: string
  Content: ApiComponent[]
}

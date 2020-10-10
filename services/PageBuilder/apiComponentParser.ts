import { ApiComponent } from "types/api";
import { ApiCardListDisc } from "types/api/CardList";
import { ApiCarouselDisc } from "types/api/Carousel";
import { ApiContactFormDisc } from "types/api/ContactForm";
import { ApiHeroImageDisc } from "types/api/HeroImage";
import { ApiHeroWithDescriptionDisc } from "types/api/HeroWithDescription";
import { ApiImageListDisc } from "types/api/ImageList";
import { ApiQuoteBlockDisc } from "types/api/QuoteBlock";
import { Component } from "types/components";
import { CardListComponent } from "types/components/CardList";
import { CarouselComponent } from "types/components/Carousel";
import { ContactFormComponent } from "types/components/ContactForm";
import { HeroImageComponent } from "types/components/HeroImage";
import { HeroWithDescriptionComponent } from "types/components/HeroWithDescription";
import { ImageListComponent } from "types/components/ImageList";
import { QuoteBlockComponent } from "types/components/QuoteBlock";


export function apiComponentParser(component: ApiComponent, idToSlugDictionary: NodeJS.Dict<string>): Component {
  switch (component.__component) {
    case ApiCardListDisc:
      return new CardListComponent(
        component.id.toString(),
        {
          cards: component.Cards.map(card => ({
            key: card.id.toString(),
            title: card.Title,
            icon: card.Icon,
            content: card.Content,
            color: card.Color
          })),
          margin: component.Margin
        }
      );
    case ApiCarouselDisc:
      return new CarouselComponent(
        component.id.toString(),
        {
          margin: component.Margin,
          views: component.Views.map(view => ({
            key: view.id.toString(),
            background: {
              src: view.Background.url,
              alt: view.Background.alternativeText
            },
            heading: view.Heading,
            button: {
              text: view.Button.Text,
              uri: idToSlugDictionary[view.Button.Page.id],
              color: view.Button.Color,
            }
          }))
        }
      )
    case ApiContactFormDisc:
      return new ContactFormComponent(
        component.id.toString(),
        {
          margin: component.Margin,
          action: component.Action
        }
      )
    case ApiHeroImageDisc:
      return new HeroImageComponent(
        component.id.toString(),
        {
          margin: component.Margin,
          content: component.Content,
          image: {
            src: component.Image.url,
            alt: component.Image.alternativeText
          }
        }
      )
    case ApiHeroWithDescriptionDisc:
      return new HeroWithDescriptionComponent(
        component.id.toString(),
        {
          margin: component.Margin,
          heading: component.Heading,
          description: component.Description,
          color: component.Color,
          image: {
            src: component.Image.url,
            alt: component.Image.alternativeText
          },
        }
      )
    case ApiImageListDisc:
      return new ImageListComponent(
        component.id.toString(),
        {
          margin: component.Margin,
          title: component.Title,
          titleDrop: component.TitleDrop,
          position: component.Position,
          color: component.Color,
          items: component.Item.map(item => ({
            key: item.id.toString(),
            text: item.Text
          })),
          image: {
            src: component.Image.url,
            alt: component.Image.alternativeText
          }
        }
      )
    case ApiQuoteBlockDisc:
      return new QuoteBlockComponent(
        component.id.toString(),
        {
          margin: component.Margin,
          text: component.Text,
          color: component.Color,
          url: component.QuoteLink,
        }
      )
    default:
      break;
  }
}

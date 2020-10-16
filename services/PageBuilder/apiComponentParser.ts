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
            key: `card_list_card-${card.id.toString()}`,
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
            key: `carousel_view-${view.id.toString()}`,
            background: {
              alt: view.Background.alternativeText,
              placeholder: view.Background.formats.thumbnail.url,
              srcs: [
                view.Background.formats.small ? {
                  url: view.Background.formats.small.url,
                  width: view.Background.formats.small.width
                } : null,
                view.Background.formats.medium ? {
                  url: view.Background.formats.medium.url,
                  width: view.Background.formats.medium.width
                } : null,
                view.Background.formats.large ? {
                  url: view.Background.formats.large.url,
                  width: view.Background.formats.large.width
                } : null,
                {
                  url: view.Background.url,
                  width: view.Background.width
                },
              ].filter(src => src)
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
            placeholder: component.Image.formats.thumbnail.url,
            srcs: [
              component.Image.formats.small ? {
                url: component.Image.formats.small.url,
                width: component.Image.formats.small.width
              } : null,
              component.Image.formats.medium ? {
                url: component.Image.formats.medium.url,
                width: component.Image.formats.medium.width
              } : null,
              component.Image.formats.large ? {
                url: component.Image.formats.large.url,
                width: component.Image.formats.large.width
              } : null,
              {
                url: component.Image.url,
                width: component.Image.width
              },
            ].filter(src => src),
            alt: component.Image.alternativeText,
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
            placeholder: component.Image.formats.thumbnail.url,
            srcs: [
              component.Image.formats.small ? {
                url: component.Image.formats.small.url,
                width: component.Image.formats.small.width
              } : null,
              component.Image.formats.medium ? {
                url: component.Image.formats.medium.url,
                width: component.Image.formats.medium.width
              } : null,
              component.Image.formats.large ? {
                url: component.Image.formats.large.url,
                width: component.Image.formats.large.width
              } : null,
              {
                url: component.Image.url,
                width: component.Image.width
              },
            ].filter(src => src),
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
            key: `image_list_item-${item.id.toString()}`,
            text: item.Text
          })),
          image: {
            placeholder: component.Image.formats.thumbnail.url,
            srcs: [
              component.Image.formats.small ? {
                url: component.Image.formats.small.url,
                width: component.Image.formats.small.width
              } : null,
              component.Image.formats.medium ? {
                url: component.Image.formats.medium.url,
                width: component.Image.formats.medium.width
              } : null,
              component.Image.formats.large ? {
                url: component.Image.formats.large.url,
                width: component.Image.formats.large.width
              } : null,
              {
                url: component.Image.url,
                width: component.Image.width
              },
            ].filter(src => src),
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

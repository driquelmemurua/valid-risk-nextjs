import styled, { css } from 'styled-components';
import { CardListProps } from 'types/components/CardList';
import Icon from '@material-ui/core/Icon';
import { COLORS } from 'consts';

function getColors(color: 'White' | 'Purple') {
  let fontColor = '#000';
  let bgColor   = '#fff';
  let shadowColor = '#000';

  if(color === 'White') {
    bgColor = COLORS.white;
    fontColor = COLORS.primary.dark;
    shadowColor = `${ COLORS.primary.dark }66`;
  } else if(color === 'Purple') {
    bgColor = COLORS.primary.dark;
    fontColor = COLORS.white;
    shadowColor = `${ COLORS.black }80`;
  }
  return {
    fontColor,
    bgColor,
    shadowColor
  }
}

export function CardList({ cards, title, margin }: CardListProps) {
  const cardNodes = cards.map(({ key, title, icon, content, color }) => (
    <Card
      key={ key }
      { ...getColors(color) }
    >
      <IconContainer>
        <CustomIcon>
          { icon }
        </CustomIcon>
      </IconContainer>
      <Title>
        { title }
      </Title>
      <Content>
        { content }
      </Content>
    </Card>
  ));

  return (
    <Container
      style={{ margin }}
    >
      <ComponentTitle>
        { title }
      </ComponentTitle>
      <CardsContainer
        items={ cards.length }
      >
        { cardNodes }
      </CardsContainer>
    </Container>
  )
}

const CARD_WIDTH = '380px';

const ComponentTitle = styled.h2 `
  font-size: 60px;
  font-family: Roboto;
  font-weight: 400;
  color: #96859E;
  text-align: center;
  margin-block-end: 32px;
`;
const Container = styled.section `
`;
type CardsContainerProps = {
  items: number
}
const CardsContainer = styled.div<CardsContainerProps> `
  display: flex;
  box-sizing: content-box;
  justify-content: center;
  flex-wrap: wrap;
  max-width: calc(${ ({ items }) => items }*(${ CARD_WIDTH } + 4em));
  margin: auto;
  gap: 2em 32px;
  padding-inline-start: 2em;
  padding-inline-end: 2em;
`;
type CardProps = {
  fontColor: string
  bgColor: string
  shadowColor: string
}
const CardStyle = css<CardProps> `
  color: ${ ({ fontColor }) => fontColor };
  background-color: ${ ({ bgColor }) => bgColor };
  padding-block-start: 1em;
  width: ${ CARD_WIDTH };
`;
const Card = styled.div `
  ${CardStyle}
  -webkit-box-shadow: 0px 3px 12px 3px ${ ({ shadowColor }) => shadowColor };
  -moz-box-shadow:    0px 3px 12px 3px ${ ({ shadowColor }) => shadowColor };
  box-shadow:         0px 3px 12px 3px ${ ({ shadowColor }) => shadowColor };
  border: 4px solid #725A78;
`;

const IconContainer = styled.div `
  text-align: center;
  padding-block-end: 0.5em;
`;
const CustomIcon = styled(Icon) `
  font-size: 48px !important;
  color: #242B3D !important;
`;

const Title = styled.h2 `
  font-family: Montserrat;
  background-color: #7901B4;
  color: white;
  font-size: 24px;
  padding-inline-start: 0.25em;
  padding-inline-end: 0.25em;
  text-align: center;
  font-weight: normal;
  padding-block-start: 16px;
  padding-block-end: 16px;
`;

const Content = styled.p `
  font-size: 1em;
  white-space: pre-line;
  padding: 1em;
  font-family: BentonSans;
  color: #707070;
`;
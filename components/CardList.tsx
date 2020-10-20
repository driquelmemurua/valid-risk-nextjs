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

export function CardList({ cards , margin }: CardListProps) {
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
      items={ cards.length }
    >
      { cardNodes }
    </Container>
  )
}

type ContainerProps = {
  items: number
}
const Container = styled.section<ContainerProps> `
  display: flex;
  box-sizing: content-box;
  justify-content: center;
  flex-wrap: wrap;
  max-width: calc(${ ({ items }) => items }*(256px + 4em));
  gap: 2em 4em;
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
  width: 256px;
`;
const Card = styled.div `
  ${CardStyle}
  -webkit-box-shadow: 0px 3px 12px 3px ${ ({ shadowColor }) => shadowColor };
  -moz-box-shadow:    0px 3px 12px 3px ${ ({ shadowColor }) => shadowColor };
  box-shadow:         0px 3px 12px 3px ${ ({ shadowColor }) => shadowColor };
`;

const IconContainer = styled.div `
  text-align: center;
  padding-block-end: 0.5em;
`;
const CustomIcon = styled(Icon) `
  font-size: 48px !important;
`;

const Title = styled.h2 `
  font-size: 1.5em;
  padding-inline-start: 0.25em;
  padding-inline-end: 0.25em;
  font-weight: bold;
  text-align: center;
`;

const Content = styled.p `
  font-size: 1em;
  white-space: pre-line;
  padding: 1em;
  font-family: BentonSans;
`;
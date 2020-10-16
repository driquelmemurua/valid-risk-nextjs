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
  const titles = cards.map(({ key, title, color }) => (
    <Title
      key={ `title-${ key }` }
      { ...getColors(color) }
    >
      { title }
    </Title>
  ));
  const icons = cards.map(({ key, icon, color }) => (
    <IconContainer
      key={ `icon-${ key }` }
      { ...getColors(color) }
    >
      <CustomIcon
      >
        { icon }
      </CustomIcon>
    </IconContainer>
  ));
  const paragraphs = cards.map(({ key, content, color }) => (
    <Content
      key={ `content-${ key }` }
      { ...getColors(color) }
    >
      { content }
    </Content>
  ));
  
  return (
    <Container
      style={{ margin }}
      items={ cards.length }
    >
      { titles }
      { icons }
      { paragraphs }
    </Container>
  )
}

type ContainerProps = {
  items: number
}
const Container = styled.section<ContainerProps> `
  display: grid;
  grid-template-columns: repeat(${ ({ items }) => items }, 1fr);
  box-sizing: content-box;
  max-width: calc(${ ({ items }) => items }*(256px + 2em));
  gap: 0 4em;
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
  -webkit-box-shadow: -8px 0px 6px -7.5px ${ ({ shadowColor }) => shadowColor }, 8px 0px 6px -7.5px ${ ({ shadowColor }) => shadowColor };
  -moz-box-shadow:    -8px 0px 6px -7.5px ${ ({ shadowColor }) => shadowColor }, 8px 0px 6px -7.5px ${ ({ shadowColor }) => shadowColor };
  box-shadow:         -8px 0px 6px -7.5px ${ ({ shadowColor }) => shadowColor }, 8px 0px 6px -7.5px ${ ({ shadowColor }) => shadowColor };
`;

const IconContainer = styled.div `
  ${CardStyle}
  text-align: center;
  padding-block-start: 1em;
  margin-block-end: -1em;
  padding-block-end: 1em;
  margin-block-start: -1em;
`;
const CustomIcon = styled(Icon) `
  font-size: 48px !important;
`;

const Title = styled.h2 `
  ${CardStyle}
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  padding-block-start: 1em;
  padding-block-end: 0.5em;
`;

const Content = styled.p `
  ${CardStyle}
  font-size: 18px;
  white-space: pre-line;
  padding: 1em;
  -webkit-box-shadow: 0px 8px 5px 1px ${ ({ shadowColor }) => shadowColor };
  -moz-box-shadow:    0px 8px 5px 1px ${ ({ shadowColor }) => shadowColor };
  box-shadow:         0px 8px 5px 1px ${ ({ shadowColor }) => shadowColor };
`;
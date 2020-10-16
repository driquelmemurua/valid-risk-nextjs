import { useSrcset } from 'hooks/useSrcset';
import styled from 'styled-components';
import { ImageListProps } from "types/components/ImageList";
import { COLORS } from 'consts';

export function ImageList({ margin, title, titleDrop, position, color, items, image: { alt, placeholder, srcs } }: ImageListProps) {
  const src = useSrcset({ placeholder, srcs });
  
  let titleColor = '#fff';
  let blockColor = '#fff';
  if(color === 'Green'){
    titleColor = COLORS.firstComplementary.light;
    blockColor = COLORS.firstComplementary.default;
  }
  else if(color === 'Purple'){
    titleColor = COLORS.primary.light;
    blockColor = COLORS.primary.default;
  }
  else if(color === 'Yellow'){
    titleColor = COLORS.secondComplementary.dark;
    blockColor = COLORS.secondComplementary.default;
  }

  const itemNodes = items.map(({ key, text }) => (
    <Item
      key={key}
    >
      { text }
    </Item>
  ));

  return (
    <Container
      title={ alt }
      style={{ margin }}
      src={ src }
      position={ position }
    >
      <Block
        position={ position }
      >
        <Title
          color={ titleColor }
        >
          { title }
        </Title>
        <ListBlock
          color={ blockColor }
        >
          {
            titleDrop &&
            <TitleDrop>
              { titleDrop }
            </TitleDrop>
          }
          <List>
            { itemNodes }
          </List>
        </ListBlock>
      </Block>
    </Container>
  )
}

type ContainerProps = {
  src: string
  position: 'Left' | 'Right'
}
const Container = styled.section<ContainerProps>`
  background-image: url(${ ({ src }) => src });
  background-size: cover;
  height: 640px;
  display: flex;
  align-items: center;
  justify-content: ${ ({ position }) => position === 'Right' ? 'flex-end' : 'flex-start' };
`;

type BlockProps = {
  position: 'Left' | 'Right'
}
const Block = styled.div<BlockProps> `
  color: ${ COLORS.white };
  display: grid;
  grid-template-columns: ${ ({ position }) => position === 'Right' ? '2em 5fr 1fr' : '1fr 5fr 2em' };
  grid-template-rows: 3.5em 1.25em 1fr;

  & > *:nth-child(1) {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    z-index: 2;
  }
  & > *:nth-child(2) {
    grid-column: 1 / 4;
    grid-row: 2 / 4;
  }
`;

type TitleProps = {
  color: string
}
const Title = styled.h2<TitleProps> `
  font-size: 24px;
  background-color: ${ ({ color }) => color };
  padding: 24px;
`;

type ListBlockProps = {
  color: string
}
const ListBlock = styled.div<ListBlockProps> `
  background-color: ${ ({ color }) => color };
  padding-block-start: 2em;
  padding-block-end: 1em;
`;

const TitleDrop = styled.h3 `
  font-size: 18px;
  font-weight: 400;
  margin-block-end: 2em;
  padding-inline-start: 2.5em;
  width: 80%;
`;

const List = styled.ul `
  padding-inline-start: 4em;
  padding-inline-end: 1em;
`;

const Item = styled.li `
  font-size: 18px;
`;
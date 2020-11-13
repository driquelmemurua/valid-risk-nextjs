import { useSrcset } from 'hooks/useSrcset';
import styled from 'styled-components';
import { ImageListProps } from "types/components/ImageList";
import { COLORS } from 'consts';

export function ImageList({ margin, title, position, color, items, image: { alt, placeholder, srcs } }: ImageListProps) {
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
      position={ position }
    >
      <Grid>
        <Image 
          src={ src }
          alt={ alt }
        />
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
            <List>
              { itemNodes }
            </List>
          </ListBlock>
        </Block>
        
      </Grid>
    </Container>
  )
}

type ContainerProps = {
  position: 'Left' | 'Right'
}
const Container = styled.section<ContainerProps>`
`;
const Image = styled.img`
  width: 100%;
  height: auto;
`;
const Grid = styled.div`
  max-width: 1280px;
  margin: auto;
  display: grid;
  grid-template-columns: 4fr 3fr 3fr;
  grid-template-rows: 0.45fr 0.55fr;

  *:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 2;
 }
  *:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: 1 / 3;
  }
`;

type BlockProps = {
  position: 'Left' | 'Right'
}
const Block = styled.div<BlockProps> `
  height: min-content;
  color: ${ COLORS.white };
  background-color: #E9E5EB;
  padding-block-start: 32px;
  padding-block-end: 32px;
  padding-inline-start: 64px;
  padding-inline-end: 32px;
  border-radius: 1em;
`;

type TitleProps = {
  color: string
}
const Title = styled.h2<TitleProps> `
  font-size: 60px;
  font-weight: 400;
  color: #4D2DD3;
  font-family: Ubuntu;
  margin-block-end: 72px;
`;

type ListBlockProps = {
  color: string
}
const ListBlock = styled.div<ListBlockProps> `
`;

const TitleDrop = styled.h3 `
  font-size: 18px;
  font-weight: 400;
  width: 80%;
  font-family: BentonSans;`
;

const List = styled.ul `
  border-inline-start: 5px solid #33B7F1;
  padding-inline-start: 30px;
`;

const Item = styled.li `
  list-style: none;
  font-size: 18px;
  font-family: Roboto;
  color: #F2713A;
  font-size: 32px;
  line-height: 1.5em;
`;
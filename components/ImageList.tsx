import { useSrcset } from 'hooks/useSrcset';
import styled from 'styled-components';
import { ImageListProps } from "types/components/ImageList";
import { COLORS } from 'consts';

export function ImageList({ margin, title, items, link: { text, url }, image: { alt, placeholder, srcs } }: ImageListProps) {
  const src = useSrcset({ placeholder, srcs });

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
    >
      <Grid>
        <Image 
          src={ src }
          alt={ alt }
        />
        <Block>
          <Title>
            { title }
          </Title>
          <ListBlock>
            <List>
              { itemNodes }
            </List>
          </ListBlock>
          <Link
            href={ url }
          >
            { text }
          </Link>
        </Block>
      </Grid>
    </Container>
  )
}

const Container = styled.section`
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

const Block = styled.div `
  height: min-content;
  color: ${ COLORS.white };
  background-color: #E9E5EB;
  padding-block-start: 32px;
  padding-block-end: 32px;
  padding-inline-start: 64px;
  padding-inline-end: 32px;
  border-radius: 1em;
`;

const Title = styled.h2 `
  font-size: 60px;
  font-weight: 400;
  color: #4D2DD3;
  font-family: Ubuntu;
  margin-block-end: 72px;
`;

const ListBlock = styled.div `
`;

const List = styled.ul `
  border-inline-start: 5px solid #33B7F1;
  padding-inline-start: 30px;
`;

const Link = styled.a `
  background-color: #F2713A;
  font-family: Roboto;
  font-size: 32px;
  padding: 16px 64px;
  display: inline-block;
  float: right;
`;

const Item = styled.li `
  list-style: none;
  font-size: 18px;
  font-family: Roboto;
  color: #F2713A;
  font-size: 32px;
  line-height: 1.5em;
`;
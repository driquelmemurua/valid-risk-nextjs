import { COLORS, MEDIA_QUERIES } from 'consts';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import styled from 'styled-components';
import { FooterProps } from 'types/components/Footer';

export function Footer({
  supportContact,
  demoRequest,
  addresses,
  phone,
  products,
  services,
  youtube
}: FooterProps) {

  const addressNodes = addresses.map(({ location, key }) => (
    <dd 
      key={ key }
    >
      <Item
        href={ `https://maps.google.com/?q=${ location }` }
      >
        <LocationOnIcon
          style={{
            color: COLORS.footer.bullet,
            marginInlineEnd: '0.25em',
          }}
        />
        <div>
          { location }
        </div>
      </Item>
    </dd>
  ));
  const productNodes = products.map(({ name, url, key }) => (
    <dd 
      key={ key }
    >
      <Item
        href={ url }
        bullet
      >
        <div>
          { name }
        </div>
      </Item>
    </dd>
  ));
  const serviceNodes = services.map(({ name, url, key }) => (
    <dd 
      key={ key }
    >
      <Item
        href={ url }
        bullet
      >
        <div>
          { name }
        </div>
      </Item>
    </dd>
  ));

  return (
    <Container>
      <List>
        <dt>
          Products
        </dt>
        { productNodes }
      </List>
      <List>
        <dt>
          Services
        </dt>
        { serviceNodes }
      </List>
      <List>
        <dt>
          Offices
        </dt>
        { addressNodes }
      </List>
      <List>
        <dt>
          Contact Us
        </dt>
        <dd>
          <Item
            href={ demoRequest }
            bullet
          >
            <div>
              Require a demo
            </div>
          </Item>
        </dd>
        <dd>
          <Item
            href={ supportContact }
            bullet
          >
            <div>
              Support contact
            </div>
          </Item>
        </dd>
        <dd>
          <Item
            href={ `tel:${ phone }` }
            bullet
          >
            <div>
              Call us
            </div>
          </Item>
        </dd>
        <dd>
          <Item
            href={ youtube }
            bullet
          >
            <div>
              Youtube
            </div>
          </Item>
        </dd>
      </List>
    </Container>
  )
}

const Container = styled.footer `
  display: grid;
  grid-template-columns: calc(50vw - 40em) 1fr 1fr 1fr 1fr calc(50vw - 40em);
  background-color: ${ COLORS.footer.background };
  padding-inline-start: 3em;
  padding-inline-end: 3em;
  padding-block-start: 24px;
  padding-block-end: 34px;
  @media (max-width: ${ MEDIA_QUERIES.phone }) {
    padding-inline-start: 2em;
    padding-inline-end: 2em;
    padding-block-end: 1.5em;
    grid-gap: 1em 0;
  }

  & > *:nth-child(1) {
    grid-column: 2;
    @media (max-width: ${ MEDIA_QUERIES.phone }) {
      grid-column: 2 / 4;
    }
  }
  & > *:nth-child(2) {
    grid-column: 3;
    @media (max-width: ${ MEDIA_QUERIES.phone }) {
      grid-column: 2 / 4;
    }
  }
  & > *:nth-child(3) {
    grid-column: 4;
    @media (max-width: ${ MEDIA_QUERIES.phone }) {
      grid-column: 2 / 4;
    }
  }
  & > *:nth-child(4) {
    grid-column: 5;
    @media (max-width: ${ MEDIA_QUERIES.phone }) {
      grid-column: 2 / 4;
    }
  }
`;

const List = styled.dl `
  margin: 0;

  & > * {
    color: ${ COLORS.footer.item };
    margin: 0;
    margin-block-end: 30px;
  }
  & > *:first-child {
    color: #FFFFFF;
    font-family: Roboto;
    text-decoration: underline;
    font-size: 24px;
    margin-block-end: 44px;
  }
  & > *:last-child {
    margin-block-end: 0;
  }
`;

type ItemProps = {
  bullet?: boolean
}
const Item = styled.a<ItemProps> `
  display: flex;
  align-items: center;
  width: fit-content;
  font-family: Roboto;

  ${ ({ bullet }) => {
    if(bullet) {
      return `
        & > div {
          border-inline-start: 3px solid ${ COLORS.footer.bullet };
          padding-inline-start: 20px;
        }
      `;
    }
  }}
`;
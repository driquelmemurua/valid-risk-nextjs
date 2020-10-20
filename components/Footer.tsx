import { COLORS, MEDIA_QUERIES } from 'consts';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import styled from 'styled-components';
import { FooterProps } from 'types/components/Footer';

export function Footer({
  supportLogin,
  demoRequest,
  addresses,
  mail,
  phone
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
            color: COLORS.white,
            marginInlineEnd: '0.25em',
          }}
        />
        <div>
          { location }
        </div>
      </Item>
    </dd>
  ));

  return (
    <Container>
      <List>
        <dt>
          Valid Risk
        </dt>
        <dd>
          <Item 
            href={ supportLogin }
          >
            <FiberManualRecordIcon
              style={{
                color: COLORS.white,
                fontSize: 12,
                marginInlineEnd: '1em',
              }}
            />
            <div>
              Support login
            </div>
          </Item>
        </dd>
        <dd>
          <Item 
            href={ demoRequest } 
          >
            <FiberManualRecordIcon 
              style={{
                color: COLORS.white,
                fontSize: 12,
                marginInlineEnd: '1em',
              }}
            />
            <div>
              Request a demo
            </div>
          </Item>
        </dd>
      </List>
      <List>
        <dt>
          Our Location
        </dt>
        { addressNodes }
      </List>
      <List>
        <dt>
          Contact Us
        </dt>
        <dd>
          <Item
            href={ `mailto:${ mail }` }
          >
            <MailIcon
              style={{
                color: COLORS.white,
                fontSize: 22,
                marginInlineEnd: '0.5em',
              }}
            />
            <div>
              { mail }
            </div>
          </Item>
        </dd>
        <dd>
          <Item
            href={ `tel:${ phone }` }
          >
            <PhoneIcon
              style={{
                color: COLORS.white,
                fontSize: 22,
                marginInlineEnd: '0.5em',
              }}
            />
            <div>
              { phone }
            </div>
          </Item>
        </dd>
      </List>
    </Container>
  )
}

const Container = styled.footer `
  display: grid;
  grid-template-columns: calc(50vw - 40em) 1fr 1fr 1fr calc(50vw - 40em);
  background-color: ${ COLORS.black };
  padding-inline-start: 3em;
  padding-inline-end: 3em;
  padding-block-start: 1.65em;
  padding-block-end: 2.5em;
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
`;

const List = styled.dl `
  margin: 0;

  & > * {
    color: ${ COLORS.white };
    margin: 0;
    margin-block-end: 0.86em;
  }
  & > *:first-child {
    font-weight: 700;
    margin-block-end: 1.25em;
  }
  & > *:last-child {
    margin-block-end: 0;
  }
`;

const Item = styled.a `
  display: flex;
  align-items: center;
  width: fit-content;
`;
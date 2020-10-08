import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { COLORS } from 'consts';

type HeaderProps = {
  navigation: Array<{
    title: string,
    slug: string,
    subnav: Array<{
      title: string,
      slug: string
    }>
  }>,
  slug: string,
  logo: {
    title: string,
    image: {
      src: string,
      alt: string
    }
  }
}
export function Header({ navigation, slug, logo }: HeaderProps) {

  const navItems = navigation.map((item, index) => (
    <NavItem
      selected={ item.slug === slug }
      key={ index }
    >
      <Link
        href={ '/[[...slug]]' }
        as={ item.slug }
      >
        <a>
            { item.title }
        </a>
      </Link>
    </NavItem>
  ));

  return (
    <Container>
      <Logo { ...logo } />
      <Navigation>
        <NavList>
          { navItems }
        </NavList>
      </Navigation>
    </Container>
  )
}

const Container = styled.header `
  display: grid;
  position: fixed;
  min-width: fill-available;
  grid-template-columns: calc(50vw - 40em) max-content 1fr max-content calc(50vw - 40em);
  background-color: #F8F8F8;
  padding-block-start: 4em;
  padding-block-end: 2em;
  padding-inline-start: 4em;
  padding-inline-end: 4em;
  -webkit-box-shadow: 0px 6px 10px -3px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 6px 10px -3px rgba(0,0,0,0.25);
  box-shadow: 0px 6px 10px -3px rgba(0,0,0,0.25);

  & > *:nth-child(1) {
    grid-column: 2 / 3;
  }

  & > *:nth-child(2) {
    grid-column: 4 / 5;
  }
`;

const Navigation = styled.nav `
  align-self: end;
  margin-block-end: 3px;
`;

const NavList = styled.ul `
  display: flex;
  justify-content: flex-end;
  gap: 2em;
  font-size: 24px;
`;

type NavItemProps = {
  selected: boolean;
}
const NavItem = styled.li<NavItemProps> `
  list-style-type: none;
  color: ${props => props.selected ? COLORS.primary.dark : COLORS.black };
`;

type LogoProps = {
  title: string,
  image: {
    src: string,
    alt: string
  }
}
function Logo({ title, image: { src, alt }}: LogoProps) {
  
  return (
    <Link
      href={ '/[[...slug]]' }
      as='/'
    >
      <a>
        <LogoContainer>
          <LogoImage 
            src={ src }
            alt={ alt }
          />
          <LogoText>
            { title }
          </LogoText>
        </LogoContainer>
      </a>
    </Link>
  );
}
const LogoContainer = styled.div `
  display: grid;
  grid-template-columns: auto max-content;
`;
const LogoImage = styled.img `
  width: 95px;
  height: 95px;
`;
const LogoText = styled.div `
  color: ${ COLORS.primary.dark };
  font-size: 40px;
  align-self: end;
  font-weight: 200;
`;
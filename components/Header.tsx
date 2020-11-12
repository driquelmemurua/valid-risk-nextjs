import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { COLORS, MEDIA_QUERIES } from 'consts';
import { HeaderProps } from 'types/components/Header';
import MenuIcon from '@material-ui/icons/Menu';
import useWindowScroll from 'react-use/lib/useWindowScroll';

export function Header({ navigation, slug, logo }: HeaderProps) {
  const [displayNav, setDisplayNav] = useState(false);

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
      <Navigation
        displayNav={ displayNav }
      >
        <NavList>
          { navItems }
        </NavList>
      </Navigation>
      <Menu
        onClick={() => setDisplayNav(!displayNav)}
      />
      <Shadow />
    </Container>
  )
}

const Shadow = styled.div `
  -webkit-box-shadow: 0px 6px 10px -3px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 6px 10px -3px rgba(0,0,0,0.25);
  box-shadow: 0px 6px 10px -3px rgba(0,0,0,0.25);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  pointer-events: none;
`;

const Menu = styled(MenuIcon) `
  display: none !important;
  font-size: 2em !important;
  color: ${ COLORS.gray };
  @media (max-width: ${ MEDIA_QUERIES.phone }) {
    display: inline-block !important;
  }
`;

const Container = styled.header `
  z-index: 99;
  display: grid;
  position: fixed;
  min-width: fill-available;
  grid-template-columns: minmax(2em, calc(40vw - 40em)) max-content 1fr max-content minmax(2em, calc(40vw - 40em));
  background-color: #F8F8F8;
  padding-block-start: 1em;
  padding-block-end: 1em;

  & > *:nth-child(1) {
    grid-column: 2;
  }

  & > *:nth-child(2) {
    grid-column: 4;
    align-self: end;
    @media (max-width: ${ MEDIA_QUERIES.phone }) {
      grid-row: 2;
      grid-column: 1 / 6;
    }
  }

  & > *:nth-child(3) {
    grid-column: 4;
    align-self: end;
  }

  & > *:nth-child(4) {
    grid-column: 1 / 6;
    position: absolute;
  }
`;

type NavigationProps = {
  displayNav: boolean
}
const Navigation = styled.nav<NavigationProps> `
  @media (max-width: ${ MEDIA_QUERIES.phone }) {
    position: absolute;
    width: 100%;
    background-color: ${ COLORS.white };
    padding-block-start: 2em;
    padding-block-end: 1em;
    padding-inline-start: 1em;
    transition: transform 0.75s ease-in-out;
    transform: ${ ({ displayNav }) => displayNav ? 'translate(0, 100%)' : 'translate(100%, 100%)' };
  }
`;

const NavList = styled.ul `
  display: flex;
  justify-content: flex-end;
  gap: 2em;
  font-size: 13px;

  @media (max-width: ${ MEDIA_QUERIES.phone }) {
    flex-direction: column;
  }
`;

type NavItemProps = {
  selected: boolean;
}
const NavItem = styled.li<NavItemProps> `
  list-style-type: none;
  color:       ${ ({ selected }) => selected ? COLORS.primary.dark : COLORS.black };
  font-weight: ${ ({ selected }) => selected ? 'bold' : 400 };

  @media (max-width: ${ MEDIA_QUERIES.phone }) {
    padding-inline-start: 0.5em;
    border-inline-start: ${ ({ selected }) => selected ? `2px solid ${ COLORS.primary.dark }` : 0 };
  }
`;

const LOGO_SIZE = 64;
const SHRUNK_LOGO_SIZE = 32;
const DISTANCE_TO_SHRINK = 380;

type LogoProps = {
  image: {
    src: string,
    alt: string
  }
  title: string
}
function Logo({ image: { src, alt }, title }: LogoProps) {
  const { y: windowScroll } = useWindowScroll();
  const size = !Math.trunc(windowScroll / DISTANCE_TO_SHRINK) ? LOGO_SIZE : SHRUNK_LOGO_SIZE;

  return (
    <Link
      href={ '/[[...slug]]' }
      as='/'
    >
      <a>
        <LogoContainer>
          <ImageContainer
            size={size}
          >
            <LogoImage 
              src={ src }
              alt={ alt }
            />
          </ImageContainer>
          <LogoText>
            { title }
          </LogoText>
        </LogoContainer>
      </a>
    </Link>
  );
}

const LogoContainer = styled.div `
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  align-items: flex-end;

  & > *:nth-child(1) {
    grid-column: 1 / 2;
  }
  & > *:nth-child(2) {
    grid-column: 3 / 4;
  }
`;
type ImageContainerProps = {
  size: number
}
const ImageContainer = styled.div<ImageContainerProps> `
  width: ${ ({ size }) => size }px;
  transition: width 0.4s ease-in-out 0.05s;
`;
const LogoImage = styled.img `
  width: 100%;
  height: auto;
`;
const LogoText = styled.div `
  color: ${ COLORS.primary.dark };
  font-size: 1.5em;
  font-weight: 600;
`;

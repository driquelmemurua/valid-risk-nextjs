import styled, { css } from 'styled-components';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { CarouselProps } from "types/components/Carousel";
import { MEDIA_QUERIES, COLORS } from 'consts';
import { BackgroundImage } from 'components/BackgroundImage';

export function Carousel({ margin, views }: CarouselProps) {
  const [selected, setSelected] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if(containerRef){
      container.scrollTo({ behavior: 'smooth', left: container.scrollWidth*selected/views.length });
    }
  }, [selected]);

  useEffect(() => {
    const interval = setTimeout(() => {
      setSelected(selected === (views.length - 1) ? 0 : selected + 1);
    }, 10000);
    return () => clearTimeout(interval)
  }, [selected])

  const nodes = views.map(({ 
    key, 
    heading, 
    button: {
      color: colorName,
      text,
      uri
    }, 
    background: {
      srcs,
      alt,
      placeholder
    }
  }) => {
    let highlightColor = '#000';
    let buttonColor = '#000';
    if( colorName === 'Green' ) {
      highlightColor = COLORS.firstComplementary.light;
      buttonColor    = COLORS.firstComplementary.default;
    }
    else if( colorName === 'Purple' ) {
      highlightColor = COLORS.primary.light;
      buttonColor    = COLORS.primary.default;
    }
    else if( colorName === 'Yellow' ) {
      highlightColor = COLORS.secondComplementary.light;
      buttonColor    = COLORS.secondComplementary.default;
    }
    return (
      <Item
        key={ key }
      >
        <Content
          title={ alt }
          srcs={ srcs }
          placeholder={ placeholder }
        >
          <Heading
            color={ highlightColor }
          >
            { heading }
          </Heading>
          <Button
            color={ buttonColor }
          >
            <Link
              href={ '/[[...slug]]' }
              as={ uri }
            >
              { text }
            </Link>
          </Button>
        </Content>
      </Item>
    )
  })

  const dots = views.map((view, index) => (
    <Dot 
      selected={ index === selected }
      key={ `dot-${view.key}` }
      onClick={() => setSelected(index) }
    />
  ));

  return (
    <CarouselContainer
      style={{ margin }}
    >
      <LeftArrow
        onClick={() => setSelected(selected === 0 ? (views.length-1) : selected-1) } 
      />
        <CarouselItems ref={containerRef}>
          { nodes }
        </CarouselItems>
      <RightArrow
        onClick={ () => setSelected(selected === views.length-1 ? 0 : selected+1) } 
      />
      <DotsContainer>
        { dots }
      </DotsContainer>
    </CarouselContainer>
  )
}

const Content = styled(BackgroundImage) `
  padding-inline-start: 4em;
  padding-inline-end:   4em;
  padding-block-start:  6em;
  padding-block-end:  7em;
  background-size: cover;
  @media (max-width: ${ MEDIA_QUERIES.phone } ) {
    padding: 0;
  }
`

const CarouselContainer = styled.section `
  @media (max-width: ${ MEDIA_QUERIES.phone } ) {
    padding-inline-start: 0;
    padding-inline-end: 0;
  }
  position: relative;
  & > *{
    align-self: center;
  }
`;
const CarouselItems = styled.div `
  display: flex;
  align-items: center;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  pointer-events: none;

  & > * {
    min-width: 100%;
    scroll-snap-align: start;
  }
`;

type DotProps = {
  selected: boolean;
}
const Dot = styled.div<DotProps>`
  display: block-inline;
  background-color: ${ ({ selected }) => selected ? COLORS.white : 'transparent' };
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid ${ COLORS.white };
  cursor: pointer;
`;
const DotsContainer = styled.div `
  display: flex;
  gap: 1em;
  position: absolute;
  justify-content: center;
  bottom: 1em;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Item = styled.div`
  display: grid;
  & > * {
    align-self: center;
  }
`;

function Heading({ children, color }) {
  const nodes = children.split('\n').map((text, index) => (
    <HeadingLine
      key={text || index.toString()}
      isText={text ? true : false}
      color={ color }
    >
      { text || '\n' }
    </HeadingLine>
  ))
  return (
    <HeadingContainer>
      { nodes }
    </HeadingContainer>
  )
}
const HeadingContainer = styled.h2 `
  font-size: 2.5em;
  min-height: 360px;
  margin: 0;
  color: ${ COLORS.white };
`;
type HeadingLineProps = {
  isText: boolean
  color: string
}
const HeadingLine = styled.div<HeadingLineProps> `
  display: inline-block;
  white-space: pre-line;
  background-color: ${ ({ isText, color }) => isText ? `${ color }7f` : 'transparent'};
  min-height:       ${ ({ isText })        => isText ? '0'            : '1em'};
  width:            ${ ({ isText })        => isText ? 'auto'         : '100%'};
  padding:          ${ ({ isText })        => isText ? '0.25em'       : '0'};
`;

const ArrowStyle = css`
  color: #F8F8F8;
  font-size: 4em !important;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
`;
const LeftArrow = styled(ChevronLeftIcon)`
  ${ArrowStyle}
  left: 0;
`;
const RightArrow = styled(ChevronRightIcon)`
  ${ArrowStyle}
  right: 0;
`;

type ButtonProps = {
  color: string
}
const Button = styled.div<ButtonProps> `
  color: #F8F8F8;
  background-color: ${ ({ color }) => color };
  display: inline-block;
  font-size: 1.5em;
  padding-block-start: 20px;
  padding-block-end: 20px;
  padding-inline-start: 56px;
  padding-inline-end: 56px;
  cursor: pointer;
  pointer-events: all;
`;
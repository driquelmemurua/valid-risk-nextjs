import styled, { css } from 'styled-components';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { CarouselProps } from "types/components/Carousel";
import { MEDIA_QUERIES } from 'consts';

export function Carousel({ margin, views }: CarouselProps) {
  const [selected, setSelected] = useState(0);
  const [firstRender, setFirstRender] = useState(true);
  const [url, setUrl] = useState(views[0]);
  const refs = useRef<Array<HTMLDivElement>>([]);
  /*

  useEffect(() => {
    setFirstRender(false);
  }, [])

  useEffect(() => {
    const selectedRef = refs.current[selected];
    if(!firstRender && selectedRef){
      selectedRef.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      setUrl(items[selected].url);
    }
  }, [selected]);

  */

  const nodes = views.map(({ key, heading, button, background }) => (
    <Item
      key={ key }
    >
      <Content
        backgroundImage={background.src}
      >
        <Heading>{ heading }</Heading>
        <Button>{ button.text }</Button>
      </Content>
    </Item>
  ))


  return (
    <CarouselContainer>
      <LeftArrow
        onClick={() => setSelected(selected === 0 ? (views.length-1) : selected-1) } 
      />
        <CarouselItems>
          { nodes }
        </CarouselItems>
      <RightArrow
        onClick={ () => setSelected(selected === views.length-1 ? 0 : selected+1) } 
      />
    </CarouselContainer>
  )
}

const CarouselContainer = styled.section `
  background-color: #444;
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

const Item = styled.div`
  display: grid;
  & > * {
    align-self: center;
  }
`;
type ContentProps = {
  backgroundImage: string
}
const Content = styled.div<ContentProps> `
  padding-inline-start: 4em;
  padding-inline-end:   4em;
  padding-block-start:  6em;
  padding-block-end:  7em;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  @media (max-width: ${ MEDIA_QUERIES.phone } ) {
    padding: 0;
  }
`;
const Image = styled.img `
  width: 100%;
  height: auto;
`;

function Heading({ children }) {
  const nodes = children.split('\n').map((text, index) => (
    <HeadingLine
      key={text || index.toString()}
      isText={text ? true : false}
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
  margin: 0;
  color: #F8F8F8;
`;
type HeadingLineProps = {
  isText: boolean
}
const HeadingLine = styled.div<HeadingLineProps> `
  display: inline-block;
  white-space: pre-line;
  background-color: ${props => props.isText ? 'rgba(205, 181, 248, 0.5)' : 'transparent'};
  min-height:       ${props => props.isText ? '0'                        : '1em'};
  width:            ${props => props.isText ? 'auto'                     : '100%'};
  padding:          ${props => props.isText ? '0.25em'                   : '0'};
`;

const ArrowStyle = css`
  color: #F8F8F8;
  font-size: 4em !important;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
`;
const LeftArrow = styled(ChevronLeftIcon)`
  ${ArrowStyle}
  left: 0;
`;
const RightArrow = styled(ChevronRightIcon)`
  ${ArrowStyle}
  right: 0;
`;

function Button({ children }) {
  return <button></button>
}
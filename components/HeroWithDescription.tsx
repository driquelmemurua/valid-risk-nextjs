import { useSrcset } from 'hooks/useSrcset';
import styled from 'styled-components';
import { HeroWithDescriptionProps } from "types/components/HeroWithDescription";
import { COLORS } from 'consts';

export function HeroWithDescription({ margin, heading, description, color: colorName,  image: { placeholder, srcs, alt }}: HeroWithDescriptionProps) {
  const src = useSrcset({ placeholder, srcs })

  let color = '#fff';
  if(colorName === 'Purple') color = COLORS.primary.default;
  else if(colorName === 'Green') color = COLORS.firstComplementary.default;
  else if(colorName === 'Yellow') color = COLORS.secondComplementary.default;
  
  return (
    <Container
      src={ src }
      style={{ margin }}
      color={ color }
    >
      <Heading>
        { heading }
      </Heading>
      <Line 
        color={ color }
      />
      <Description
        color={ color }
      >
        { description }
      </Description>
    </Container>
  )
}

type ContainerProps = {
  src: string
  color: string
}
const Container = styled.section<ContainerProps> `
  color: ${ COLORS.white };
  background-image: url(${ ({ src }) => src });
  background-size: cover;
  height: 480px;
  display: grid;
  grid-template-rows: 100px min-content 10px 5px 26px min-content 250px;
  grid-template-columns: 2em 100px calc(450px - 2em);

  & > *:nth-child(1) {
    grid-row: 2 / 3;
    grid-column: 2 / 4;
  }
  & > *:nth-child(2) {
    grid-row: 4 / 5;
    grid-column: 2 / 3;
  }
  & > *:nth-child(3) {
    grid-row: 6 / 7;
    grid-column: 1 / 4;
  }
`;

const Heading = styled.h1 `
  font-size: 36px;
  font-weight: bold;
  text-shadow: 2px 3px 2px ${ `${ COLORS.black }BF` };
`;

type LineProps = {
  color: string
}
const Line = styled.div<LineProps> `
  background-color: ${ ({ color }) => color };
`;

type DescriptionProps = {
  color: string
}
const Description = styled.h2<DescriptionProps> `
  font-size: 18px;
  font-weight: 500;
  background-color: ${ ({ color }) => color };
  white-space: pre-line;
  padding-inline-start: 2em;
  padding-block-start: 0.5em;
  padding-block-end: 0.5em;
`;
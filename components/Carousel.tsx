import styled from 'styled-components';
import { CarouselProps } from "types/components/Carousel";
import { Preview } from './Preview';

export function Carousel(props: CarouselProps) {
  return (
    <Container>
      Carousel
      <Preview { ...props } />
    </Container>
  )
}

const Container = styled.section`
`;
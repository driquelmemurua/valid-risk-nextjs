import styled from 'styled-components';
import { HeroImageProps } from "types/components";
import { Preview } from './Preview';

export function HeroImage(props: HeroImageProps) {
  return (
    <Container>
      HeroImage
      <Preview { ...props } />
    </Container>
  )
}

const Container = styled.section`
`;
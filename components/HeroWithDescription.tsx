import styled from 'styled-components';
import { HeroWithDescriptionProps } from "types/components/HeroWithDescription";
import { Preview } from './Preview';

export function HeroWithDescription(props: HeroWithDescriptionProps) {
  return (
    <Container>
      Hero With Description
      <Preview { ...props } />
    </Container>
  )
}

const Container = styled.section`
`;
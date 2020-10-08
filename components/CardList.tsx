import styled from 'styled-components';
import { CardListProps } from "types/components";
import { Preview } from './Preview';

export function CardList(props: CardListProps) {
  return (
    <Container>
      Card List
      <Preview { ...props } />
    </Container>
  )
}

const Container = styled.section`
`;
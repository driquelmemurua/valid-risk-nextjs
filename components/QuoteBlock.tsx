import styled from 'styled-components';
import { QuoteBlockProps } from "types/components/QuoteBlock";
import { Preview } from './Preview';

export function QuoteBlock(props: QuoteBlockProps) {
  return (
    <Container>
      Quote Block
      <Preview { ...props } />
    </Container>
  )
}

const Container = styled.section`
`;
import styled from 'styled-components';
import { ImageListProps } from "types/components";
import { Preview } from './Preview';

export function ImageList(props: ImageListProps) {
  return (
    <Container>
      Image List
      <Preview { ...props } />
    </Container>
  )
}

const Container = styled.section`
`;
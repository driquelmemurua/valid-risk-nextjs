import { useSrcset } from 'hooks/useSrcset';
import styled from 'styled-components';
import { HeroImageProps } from "types/components/HeroImage";
import { COLORS } from 'consts';

export function HeroImage({ content, image: { placeholder, srcs }, margin }: HeroImageProps) {
  const src = useSrcset({ placeholder, srcs });
  return (
    <Container
      src={ src }
      style={{margin}}
    >
      <Heading>
        { content }
      </Heading>
    </Container>
  )
}

type ContainerProps = {
  src: string
}
const Container = styled.section<ContainerProps> `
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${ ({ src }) => src });
  background-size: cover;
`;

const Heading = styled.h1`
  font-size: 40px;
  color: ${ COLORS.white };
  font-weight: bold;
  text-shadow: 2px 3px 2px ${ `${ COLORS.black }BF` };
`;
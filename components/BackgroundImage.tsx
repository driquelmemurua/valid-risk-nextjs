import styled from 'styled-components';
import { useSrcset } from 'hooks/useSrcset';

export function BackgroundImage({ placeholder, srcs, sizes='100vw', children, ...rest }) {
  const src = useSrcset({ placeholder, srcs, sizes });

  return (
    <Container
      src={ src }
      {...rest}
    >
      { children }
    </Container>
  )
}

type ContainerProps = {
  src: string
}
const Container = styled.div<ContainerProps> `
  background-image: url(${ ({ src }) => src });
`;
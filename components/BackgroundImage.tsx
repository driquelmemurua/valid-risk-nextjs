import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { isImageValid } from 'utils/isImageValid';

export function BackgroundImage({ placeholder, img: { small, medium, large, original }, children, ...rest }) {
  const [src, setSrc] = useState(placeholder);
  useEffect(() => {
    const handleImageValid = (loadedSrc: string) => (setSrc(loadedSrc));
    const srcset = `${small.url} ${small.width}w, ${medium.url} ${medium.width}w, ${large.url} ${large.width}w, ${original.url} ${original.width}w`;
    isImageValid(srcset)
    .then(handleImageValid);
  }, [])
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
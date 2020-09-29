import React from 'react';
import styled from 'styled-components';

function Preview(props) {
  return (
    <Pre>
      { JSON.stringify(props, null, 2) }
    </Pre>
  )
}

const Pre = styled.pre `
  white-space: pre-wrap;
`;

export default Preview;
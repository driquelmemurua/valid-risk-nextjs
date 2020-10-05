import React from 'react';
import styled from 'styled-components';

export function Preview(props) {
  return (
    <Pre>
      { JSON.stringify(props, null, 2) }
    </Pre>
  )
}

const Pre = styled.pre `
  white-space: pre-wrap;
`;

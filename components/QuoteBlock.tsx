import styled from 'styled-components';
import { QuoteBlockProps } from "types/components/QuoteBlock";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import LaunchIcon from '@material-ui/icons/Launch';
import { COLORS } from 'consts';

export function QuoteBlock({ margin, text, color, url }: QuoteBlockProps) {
  
  let bgColor = '#fff';
  let highlightColor = '#fff';
  if(color === 'Purple') {
    bgColor = COLORS.primary.dark;
    highlightColor = `${COLORS.primary.default}80`;
  }
  else if(color === 'Green') {
    bgColor = COLORS.firstComplementary.dark;
    highlightColor = `${COLORS.firstComplementary.default}80`;
  }
  else if(color === 'Yellow') {
    bgColor = COLORS.secondComplementary.dark;
    highlightColor = `${COLORS.secondComplementary.default}80`;
  }

  const start = text.slice(0, text.indexOf('“'));
  const quote = text.slice(text.indexOf('“'), text.indexOf('”')+1);
  const end =   text.slice(text.indexOf('”')+1);

  return (
    <Container
      style={{ margin }}
      bgColor={ bgColor }
    >
      <Quote />
      <Paragraph>
        { start }
        <Highlight
          href={ url }
          color={ highlightColor }
        >
          { quote }
          <ExtLink />
        </Highlight>
        { end }
      </Paragraph>
    </Container>
  )
}

type ContainerType = {
  bgColor: string
}
const Container = styled.section <ContainerType>`
  display: grid;
  grid-template-columns: max-content 1fr;
  padding-block-start: 2em;
  padding-block-end: 2em;
  padding-inline-start: 1em;
  padding-inline-end: 1em;
  background-color: ${ ({ bgColor }) => bgColor };
  color: ${ COLORS.white };
  font-weight: bold;
`;

const Paragraph = styled.p `
  white-space: pre-line;
`;

type HighlightProps = {
  color: string
}
const Highlight = styled.a `
  background-color: ${ ({ color }) => color };
`;

const Quote = styled(FormatQuoteIcon) `
  color: ${ COLORS.white };
  font-size: 50px !important;
  margin-block-start: -14px;
`;

const ExtLink = styled(LaunchIcon) `
  color: ${ COLORS.white };
  font-size: 18px !important;
  margin-block-end: -4px;
`;
import styled from 'styled-components';
import { QuoteBlockProps } from "types/components/QuoteBlock";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import LaunchIcon from '@material-ui/icons/Launch';
import { COLORS } from 'consts';

export function QuoteBlock({ margin, text, color, url }: QuoteBlockProps) {
  
  let linkColor = '#fff';
  if(color === 'Purple') {
    linkColor = '#7901B4';
  }
  else if(color === 'Green') {
    linkColor = COLORS.firstComplementary.default;
  }
  else if(color === 'Yellow') {
    linkColor = COLORS.secondComplementary.default;
  }

  return (
    <Container
      style={{ margin }}
    >
      <Grid>
        <Quote />
        <Paragraph>
          { text }
        </Paragraph>
        <Link
          color={ linkColor }
          href={ url }
        >
          {'See more'}
        </Link>
      </Grid>
    </Container>
  )
}

const Container = styled.section`
  padding-block-start: 2em;
  padding-block-end: 2em;
  padding-inline-start: 1em;
  padding-inline-end: 1em;
  color: ${ COLORS.white };
  background: linear-gradient(90deg, #16A2B8, #725A78B0);
`;

const Grid = styled.div `
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: min-content 1fr;

  & > *:nth-child(1) {
    grid-column: 1;
  }
  & > *:nth-child(2) {
    grid-column: 2;
  }
  & > *:nth-child(3) {
    grid-row: 2;
    grid-column: 2;
  }
`;

const Quote = styled(FormatQuoteIcon) `
  color: ${ COLORS.white };
  font-size: 50px !important;
  margin-block-start: -14px;
`;

const Paragraph = styled.p `
  padding-inline-start: 1em;
  white-space: pre-line;
  font-family: Segoe UI;
  font-size: 32px;
  font-weight: 300;
`;

type LinkProps = {
  color: string
}
const Link = styled.a<LinkProps>`
  width: max-content;
  margin-block-start: 52px;
  background-color: ${ ({ color }) => color };
  padding: 20px 56px;
  color: ${ COLORS.white };
  display: inline-flex;
  font-weight: 400;
  font-size: 24px;
`;

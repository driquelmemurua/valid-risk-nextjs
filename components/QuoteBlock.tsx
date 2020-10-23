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
      <ContainerBox>
        <Paragraph>
          { start }
          { quote }
          { end }
      
        </Paragraph>
        <Link
            color={ COLORS.firstComplementary.default }>
            {'See more'}
          </Link>
      </ContainerBox>
      
    </Container>
  )
}

type ContainerType = {
  bgColor: string
}
const Container = styled.section <ContainerType>`
  display: flex;
  justify-content: center;
  padding-block-start: 2em;
  padding-block-end: 2em;
  padding-inline-start: 1em;
  padding-inline-end: 1em;
  color: ${ COLORS.white };
  background: rgb(15,19,19);
background: linear-gradient(90deg, rgba(15,19,19,1) 0%, rgba(67,85,87,1) 65%, rgba(75,95,97,1) 100%);
  font-weight: bold;

  & > *:nth-child(1) {
    grid-column: 2 / 3;
  }
  & > *:nth-child(2) {
    grid-column: 3 / 4;
  }
`;
const ContainerBox = styled.section`
  display: flex;
  flex-direction: column;

`;
const Quote = styled(FormatQuoteIcon) `
  color: ${ COLORS.white };
  font-size: 50px !important;
  margin-block-start: -14px;
`;

const Paragraph = styled.p `
  white-space: pre-line;


`;


const Link = styled.div`
  background-color: ${ ({ color }) => color };
  padding: 0.75em 2.125em;
  color: ${ COLORS.white };
  display: inline-flex;
  margin: 10px 20px 10px 20px;
`;


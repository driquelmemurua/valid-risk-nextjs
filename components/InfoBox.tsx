import { InfoBoxProps } from 'types/components/InfoBox';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';
import { COLORS } from 'consts';

export function InfoBox({
  margin,
  title,
  content,
  link
}: InfoBoxProps) {

  return (
    <Container>
      <Title>
        { title.text }
        <CustomIcon>
          { title.icon }
        </CustomIcon>
      </Title>
      <Content>
        { content.text }
      </Content>
      {
        link &&
        <Link
          position={ link.position }
          color={ COLORS.firstComplementary.default }
        >
          <a href={ link.uri} >
            { link.text }
          </a>
        </Link>
      }
    </Container>
  );
}

const Container = styled.section`
  background-color: ${ COLORS.white };
  -webkit-box-shadow: 0px 3px 6px 0px rgba(54,6,96,0.4);
  -moz-box-shadow:    0px 3px 6px 0px rgba(54,6,96,0.4);
  box-shadow:         0px 3px 6px 0px rgba(54,6,96,0.4);
  margin: 15px;
`;

const Title = styled.h2 `
  background-color: ${ COLORS.firstComplementary.default };
  color: ${ COLORS.white };
  font-weight: 600;
  font-size: 24px;
  padding: 20px;
  margin: 0 0 0 20px;
  display:inline-flex;
  align-items: center;
  justify-content: space-between;
`;
const CustomIcon = styled(Icon) `
  margin: 0 0 0 16px;
`;

const Content = styled.p `
  background-color: ${ COLORS.black };
  background: ${ COLORS.white };
  font-size: 16px;
  font-style: BentonSans;
  margin: 0 20px 0 20px;
  padding: 20px
  
`;

type LinkProps = {
  position: 'Left' | 'Right'
  color: string
}
const Link = styled.div<LinkProps> `
  background-color: ${ ({ color }) => color };
  padding: 0.75em 2.125em;
  color: ${ COLORS.white };
  display: inline-flex;
  align-items: ${ ({ position }) => (position==='Right'? 'end':'start' ) };
  margin: 10px 20px 10px 20px;
`;


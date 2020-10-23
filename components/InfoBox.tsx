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

const Container = styled.section `
`;

const Title = styled.h2 `
`;

const Content = styled.p `
  font-size: 16px;
  font-style: BentonSans;
`;

const CustomIcon = styled(Icon) `
`;

type LinkProps = {
  position: 'Left' | 'Right'
  color: string
}
const Link = styled.div<LinkProps> `
  background-color: ${ ({ color }) => color };
`;
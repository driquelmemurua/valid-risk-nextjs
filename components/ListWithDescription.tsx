import React from 'react';
import styled from 'styled-components';
import { ListWithDescriptionProps } from 'types/components/ListWithDescription';

export function ListWithDescription({
  title,
  margin,
  items
}: ListWithDescriptionProps) {

  const itemNodes = items.map(({ key, name, description }) => (
    <Item
      key={ key }
    >
      <Name>
        <Star className="fas fa-star" />
        <div>
          { name }
        </div>
      </Name>
      <Description>
        { description }
      </Description>
    </Item>
  ));

  return (
    <Section
      style={{ margin }}
    >
      <Container>
        <Title>
          { title }
        </Title>
        <ItemList>
          { itemNodes }
        </ItemList>
      </Container>
    </Section>
  )
}

const Section = styled.section `
`;

const Container = styled.div `
  max-width: 1280px;
  margin: auto;
`;

const Title = styled.h2 `
  font-style: Roboto;
  font-weight: 300;
  font-size: 60px;
  color: #707070;
  text-align: center;
  margin-block-end: 32px;
`;

const Star = styled.i `
  color: #996AF1;
  font-size: 40px;
  margin-inline-end: 25px;
`;

const ItemList = styled.div `
  display: grid;
  grid-gap: 18px;
`;

const Item = styled.div `
  display: grid;
  grid-gap: 35px;
  grid-template-columns: 0.3fr 0.7fr;
  padding-inline-start: 26px;
  padding-inline-end: 26px;
`;

const Name = styled.div `
  font-family: Montserrat;
  font-size: 32px;
  color: #FF3906;
  display: flex;
`;

const Description = styled.div `
  font-family: BentonSans;
  color: #F8F8F8;
  padding: 16px;
  background-color: #7901B4;
`;
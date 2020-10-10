import styled from 'styled-components';
import { ContactFormProps } from "types/components/ContactForm";
import { Preview } from './Preview';

export function ContactForm(props: ContactFormProps) {
  return (
    <Container>
      Contact Form
      <Preview { ...props } />
    </Container>
  )
}

const Container = styled.section`
`;
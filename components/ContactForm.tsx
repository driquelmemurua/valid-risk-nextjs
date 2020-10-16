import styled, { css } from 'styled-components';
import { ContactFormProps } from "types/components/ContactForm";
import { COLORS } from 'consts';
import SendIcon from '@material-ui/icons/Send';

export function ContactForm({ margin, action }: ContactFormProps) {
  return (
    <Container
      style={{ margin }}
    >
      <Title>
        Contact Us
      </Title>
      <Form
        id='contact-form'
        action={ action }
      >
        <Input 
          name='Name'
          placeholder='Name'
          aria-label='Name'
          type='text'
        />
        <Input 
          name='Email'
          placeholder='Email'
          aria-label='Email'
          type='email'
        />
        <Input 
          name='Subject'
          placeholder='Subject'
          aria-label='Subject'
          type='text'
          autoComplete='disable'
        />
        <TextArea 
          rows={ 8 }
          name='Message'
          placeholder='Message'
          form='contact-form'
          autoComplete='disable'
        />
      </Form>
      <Submit
        type='submit'
        form='contact-form'
      >
        Send
        <Send />
      </Submit>
    </Container>
  )
}

const Container = styled.section`
  -webkit-box-shadow: 0px 3px 6px 0px rgba(54,6,96,0.4);
  -moz-box-shadow:    0px 3px 6px 0px rgba(54,6,96,0.4);
  box-shadow:         0px 3px 6px 0px rgba(54,6,96,0.4);
  padding-block-start:  1.25em;
  padding-block-end:    0.75em;
  padding-inline-start: 1em;
  padding-inline-end:   1em;
`;

const Title = styled.h2 `
  font-size: 30px;
  font-weight: bold;
  color: ${ COLORS.primary.dark };
  margin-block-end: 1em;
`;

const Form = styled.form `
  display: grid;
  grid-gap: 1em 4em;
  grid-template-columns: 1fr 1fr;
  & > *:last-child {
    grid-column: 1 / 3;
  }
  margin-block-end: 1.75em;
`;

const InputStyle = css `
  padding: 0.5em 1em;
  border: 1.5px solid ${ COLORS.primary.dark };
`;

const Input = styled.input `
  ${InputStyle}
`;

const TextArea = styled.textarea `
  ${InputStyle}
  resize: none;
`;

const Submit = styled.button `
  background-color: ${ COLORS.firstComplementary.light };
  padding: 0.75em 2.125em;
  color: ${ COLORS.white };
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin: auto;
`;

const Send = styled(SendIcon) `
  color: ${ COLORS.white };
  font-size: 21px !important;
`;
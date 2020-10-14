export type ContactFormProps = {
  action: string
  margin: string
}
export const ContactFormDisc = 'ContactForm';
export class ContactFormComponent {
  readonly discriminator = ContactFormDisc;
  readonly key: string;
  constructor(
    key: string,
    readonly props: ContactFormProps
  ) {
    this.key = `contact_form-${key}`
  }
}

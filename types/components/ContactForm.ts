export type ContactFormProps = {
  action: string
  margin: string
}
export const ContactFormDisc = 'ContactForm';
export class ContactFormComponent {
  readonly discriminator = ContactFormDisc;
  constructor(
    readonly key: string,
    readonly props: ContactFormProps
  ) {}
}

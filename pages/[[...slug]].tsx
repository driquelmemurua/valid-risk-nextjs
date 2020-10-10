import Head from 'next/head';
import { useComponentParser } from 'hooks/useComponentParser';
import { GetStaticProps } from 'next';
import { PageBuilder } from 'services/PageBuilder';
import { PathsBuilder } from 'services/PathsBuilder';
import { Page } from 'types/Page';
import { Main, Header, Footer } from 'components';
import { HeaderProps } from 'types/components/Header';
import { FooterProps } from 'types/components/Footer';

export async function getStaticPaths() {
  return {
    paths: await PathsBuilder.build(),
    fallback: false
  };
}

export const getStaticProps:GetStaticProps = async ({ params: { slug } }) => {
  const {
    title,
    description,
    components
  // @ts-ignore
  } = await PageBuilder.build(slug);
  return {
    props:{
      page: {
        title,
        description,
        components: components.map(component => ({
          ...component
        }))
      },
      // @ts-ignore
      headerProps: await PageBuilder.headerProps(slug),
      footerProps: await PageBuilder.footerProps()
    }
  }
}

interface AppProps {
  page: Page
  headerProps: HeaderProps
  footerProps: FooterProps
}
export default function App({ page: { title, description, components }, headerProps, footerProps }: AppProps) {
  const content = useComponentParser(components);

  return (
    <>
      <Head>
        <title>{ title }</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={ description } />
      </Head>
      <Header { ...headerProps } />
      <Main>
        { content }
      </Main>
      <Footer { ...footerProps } />
    </>
  )
}

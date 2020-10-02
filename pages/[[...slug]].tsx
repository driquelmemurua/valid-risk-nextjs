import { GetStaticProps } from 'next';
import Head from 'next/head';
import { apiService } from 'services/api';
import { Header, Main, Footer } from 'components';
import { arrayToSlug } from 'utils/arrayToSlug';

export async function getStaticPaths() {
  return {
    paths: await apiService.paths(),
    fallback: false
  };
}

export const getStaticProps:GetStaticProps = async ({ params }) => {
  const { headerProps, footerProps, titles } = await apiService.theme();
  // @ts-ignore
  const slug = arrayToSlug(params.slug);
  return {
    props:{
      headerProps: {
        slug,
        ...headerProps
      },
      title: titles[slug],
      footerProps
    }
  }
}

export default function Home({
  headerProps,
  footerProps,
  title
}) {
  return (
    <>
      <Head>
        <title>{ title }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header 
        { ...headerProps } 
      />
      <Main>
        Content
      </Main>
      <Footer 
        { ...footerProps }
      />
    </>
  )
}

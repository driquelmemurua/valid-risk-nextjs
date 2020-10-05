import { GetStaticProps } from 'next';
import Head from 'next/head';
import { apiService } from 'services/api';
import { Header, Main, Footer } from 'components';
import { Preview } from 'components/Preview';
import { arrayToSlug } from 'utils/arrayToSlug';
import { useComponentParser } from 'hooks/useComponentParser';

export async function getStaticPaths() {
  return {
    paths: await apiService.paths(),
    fallback: false
  };
}

export const getStaticProps:GetStaticProps = async ({ params }) => {
  const { 
    headerProps, 
    footerProps, 
    //Dictionary KEY: slug; VALUE: id
    slugsIdDict, 
    title } = await apiService.theme();
  // @ts-ignore
  const slug = arrayToSlug(params.slug);
  const page = await apiService.pages(
    slugsIdDict[slug], 
    //Dictionary KEY: id; VALUE: slug
    Object.entries(slugsIdDict)
    .reduce((prev, [slug, id]) => ({ ...prev, [id]: slug}), {})
  );
  return {
    props:{
      headerProps: {
        slug,
        ...headerProps
      },
      footerProps,
      title: `${title} - ${page.title}`,
      components: page.components,
    }
  }
}

export default function Home({
  headerProps,
  footerProps,
  title,
  components,
}) {
  const content = useComponentParser(components);
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
        { content }
      </Main>
      <Footer 
        { ...footerProps }
      />
    </>
  )
}

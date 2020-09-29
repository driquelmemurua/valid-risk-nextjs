import { GetStaticProps } from 'next';
import Head from 'next/head';
import { apiService } from 'services/api';
import Preview from 'components/Preview';

export const getStaticProps:GetStaticProps = async () => {
  return {
    props:{
      ...await apiService.home.props()
    }
  }
}

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Valid Risk - Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Preview {...props} />
    </div>
  )
}

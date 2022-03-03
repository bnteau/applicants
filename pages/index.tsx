import type { NextPage } from 'next';
import Head from 'next/head';
import Content from '../components/Content';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className="homepage">
      <Head>
        <title>Applicants</title>
      </Head>
      <Header />
      <Content />
    </div>
  );
};

export default Home;

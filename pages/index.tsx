import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Content from '../components/Content';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

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

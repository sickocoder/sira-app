import Head from 'next/head';

import { Layout } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>SIRA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </div>
  );
}

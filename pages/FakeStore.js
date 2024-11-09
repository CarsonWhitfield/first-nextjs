import Head from 'next/head';
//import ProductTable from './ProductTable';

export default function FakeStore() {
    return (
      <div>
        <Head>
          <title>Fake Store Products</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <h1>Fake Store Products</h1>
        <ProductTable />
      </div>
    );
  }
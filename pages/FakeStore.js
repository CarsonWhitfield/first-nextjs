import Head from 'next/head';
import ProductsTable from '../components/ProductsTable';

export default function FakeStore() {
    return (
      <div>
        <Head>
          <title>Fake Store Products</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <h1>Fake Store Products</h1>
        <ProductsTable />
      </div>
    );
  }
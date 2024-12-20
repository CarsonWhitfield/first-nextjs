import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Counter from './counter';


export default function Home() {
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1 className={styles.title}>
          Carson Whitfield Welcomes <a href="https://nextjs.org">Next.js!</a>
        </h1>
         {/* Pass the button colors as props */}
      <Counter button1Color="lightblue" button2Color="lightgreen" />

        {/* Link to Fake Store page */}
        <Link href="/FakeStore" legacyBehavior>
       <a>View Fake Store Products</a>
       </Link>

       <Link href="/Github" legacyBehavior>
       <a>GitHub</a>
       </Link>
    </div>
  );
}

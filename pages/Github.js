import Head from 'next/head';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My web topic for the final project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1 className={styles.title}>
        My web topic for the final project <a href="https://github.com/CarsonWhitfield/first-nextjs.git">GitHubLink</a>
        </h1>
        
        <p className={styles.description}>
        For my final project, I am interested in exploring Distributed Denial of Service (DDoS) attacks. 
        This project will showcase the mechanisms behind DDoS attacks, their impact on network security, 
        and how they can be mitigated. I plan to build a simulation that demonstrates how these attacks 
        are carried out, using various tools and techniques, such as botnets and amplification attacks. 
        The project will also highlight defense strategies like rate limiting, traffic filtering, and using 
        content delivery networks (CDNs). The goal is to educate users on the seriousness of DDoS attacks 
        and provide insights into effective prevention methods.
      </p>
        
    </div>
  );
}
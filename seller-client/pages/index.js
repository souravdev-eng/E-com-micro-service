import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Card, Sidebar } from '../components';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Seller Dashboard</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Sidebar>
          <div className={styles.main}>
            {/* TOP header */}
            <div className={styles.headerContainer}>
              <div className={styles.nameContainer}>
                <h4 className={styles.name}>Welcome, James</h4>
                <span className={styles.time}>1 October 2022 | 11:59 AM GMT</span>
              </div>
              <div className={styles.searchContainer}>
                <Image src={'/assets/icons/Message.png'} width={24} height={24} />
                <Image src={'/assets/icons/BellA.png'} width={24} height={24} />

                <div className={styles.searchBox}>
                  <Image src={'/assets/icons/Search.png'} width={24} height={24} />
                  <input placeholder='Search' className={styles.input} />
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <Card>
                <p>Card Small</p>
              </Card>
              <Card>
                <p>Card Small</p>
              </Card>
              <Card type='mid'>
                <p>Card Mid</p>
              </Card>
              <Card type='big'>
                <p>Card Big</p>
              </Card>
              <Card type='mid'>
                <p>Card mid</p>
              </Card>
              <Card type='big'>
                <p>Card Big</p>
              </Card>
              <Card type='mid'>
                <p>Card mid</p>
              </Card>
            </div>
          </div>
        </Sidebar>
      </main>
    </div>
  );
}

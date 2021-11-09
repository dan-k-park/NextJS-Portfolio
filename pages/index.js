import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Intro from '../components/Intro'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Portfolio</title>
        <meta name="description" content="Portfolio created with NextJS" />
      </Head>

      <Intro />
    </div>
  )
}

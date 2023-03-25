import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['cyrillic'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>No Unknown</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
       <h1>No Unknown</h1>
       
      </main>
    </>
  )
}

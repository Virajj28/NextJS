import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
    <Head>
      <title>Next| Home</title>
    </Head>
    <div className="section">
      <h1>Homepage</h1>
      <p>
      Bachelor of Science in Information Technology,2021 Graduate from Mumbai who is interested in learning MERN stack.
      </p>
    </div>
    </>
  )
}

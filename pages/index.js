import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "./components/NavbarHome";
import Form from "./components/FormHome";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Voidi</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Form type="sign"/>
        <Form type="log"/>
      </main>
    </div>
  );
}

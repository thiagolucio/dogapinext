import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import ImageIntro from "../public/images/dog_love_open.gif";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dog Api Puppies</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="NextJS application using Dog API for those who want to learn NextJS and are passionate about dogs"
        />
        <meta name="keywords" content="Dog API, NextJS, Application" />
        <meta name="author" content="Thiago Lúcio Bittencourt"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>The best friend in the world</h1>
        <p>
          <Image
            src={ImageIntro}
            alt="Hero Image from Site"
            width={500}
            height={500}
            layout="intrinsic"
          />
        </p>
        <div className={styles.grid}>
            <Link href="/list" >
              <a className="button button_primary font_buttons font_dog">Come on buddy!</a>
            </Link>
        </div>        
      </main>

      <Footer />
    </div>
  );
}

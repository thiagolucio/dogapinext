import NavBar from "../components/navbar";
import Footer from "../components/footer";
import BackTop from "../components/backtop";
import VideoSession from "../components/vidsession";
import Loading from "../components/loading";

import styles from "../styles/List.module.scss";

let isLoading = false;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3001/dogs");
  const data = await res.json();
  return {
    props: {
      breeds: data,
      isLoading: true,
    },
  };
}

export default function List({ breeds }) {
  return (
    <>
      <NavBar />
      <VideoSession />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.title}>
            <h1 id="top" className="font_dog text_align_center">
              <u>Favorite Breeds</u>
            </h1>
          </div>
          <div className={styles.grid}>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {breeds.map((breed) => (
                  <div
                    className={`${styles.card} flip-vertical-left`}
                    key={breed.id}>
                    <div className={styles.card_title}>
                      <img
                        src={breed.avatar}
                        alt={breed.owner}
                        className={styles.avatar}
                      />
                      <span>{breed.owner}</span>
                    </div>
                    <div className={styles.card_image}>
                      <img
                        src={breed.url}
                        alt={breed.name}
                        className={styles.img_card}
                      />
                    </div>
                    <div className={styles.card_description}>
                      <p>{breed.description}</p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </main>
        <BackTop />
      </div>
      <Footer />
    </>
  );
}

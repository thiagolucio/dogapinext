import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

import styles from "../styles/List.module.scss";

export async function getStaticProps() {  
  const res = await fetch("http://localhost:3001/dogs");
  const data = await res.json();
  return {
    props: {
      breeds: data,
    },
  };
}

export default function List({ breeds }) {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.grid}>
            {breeds.map((breed) => (
                <div className={styles.card} key={breed.id}>
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
          </div>  
        </main>
      </div>
      <Footer />
    </>
  );
}

// import Head from "next/head";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../styles/List.module.scss";
import Image from "next/image";
import GetDogImages from "../components/getdogimages";
import GetDogNames from "../components/getdognames";

// export async function getStaticProps() {
//   console.log(process.env.API_KEY);

//   const res = await fetch(
//     "https://api.thedogapi.com/v1/breeds?api_key=ab33c535-30e6-4c5f-8f85-ba0d3604895a"
//   );
//   const data = await res.json();
//   return {
//     props: {
//       breeds: data,
//     },
//   };
// }

export default function List({ breeds }) {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <main className={styles.main}>
          <h2>Aqui vai a lista de cards dos dogs</h2>
          {/* <>
            {breeds.map((breed) => (
              <div className="card" key={breed.id}>
                <div className="card_image">
                  <Image
                    src={breed.image.url}
                    alt={breed.name}
                    className="img_fluid"
                    layout="intrinsic"
                  />
                </div>
                <div className="card_content">
                  <h3>{breed.name}</h3>
                </div>
              </div>
            ))}
          </> */}
          <GetDogImages />
          <GetDogNames />
        </main>
      </div>
      <Footer />
    </>
  );
}

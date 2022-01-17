import Image from "next/image";

export async function getStaticProps() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  return {
    props: {
      imgUrl: data
    },
  };
}

export default function GetDogImages({ imgUrl }) {
  return (
    <>
      {imgUrl.message.map((item) => (
        <Image key={item.id} src={item} alt="dog" width={250} height={250} />
      ))}
    </>
  );
}

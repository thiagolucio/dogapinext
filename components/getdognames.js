
export async function getStaticProps() {
  const res = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await res.json();
  return {
    props: {
      breeds: data.message
    },
  };
}

export default function GetDogNames({ breeds }) {
  return (
    <ul>
      {breeds.map((item) => (
          <li key={item.id}>{item}</li>
      ))}
    </ul>
  );
 };
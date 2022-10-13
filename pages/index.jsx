import Card from "../components/Card";

import styles from "../styles/Home.module.css";

import Image from "next/image";

export async function getStaticProps() {
  const api = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=150");
  const apiData = await api.json();

  apiData.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: apiData.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title}>
        <h1>
          <span>Poké</span>Next
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="Pokebola"
        />
      </div>
      <div className={styles.pokemons_container}>
        <ul>
          {pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </ul>
      </div>
    </>
  );
}

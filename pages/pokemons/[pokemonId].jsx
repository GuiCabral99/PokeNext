import Image from "next/image";
import { useRouter } from "next/router";

import styles from "../../styles/Pokemon.module.css";

export async function getStaticPaths() {
  const api = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=150");
  const apiData = await api.json();

  // params
  const paths = apiData.results.map((pokemon, index) => {
    return { params: { pokemonId: (index + 1).toString() } };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.pokemonId;

  const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokeData = await req.json();

  return {
    props: { pokemon: pokeData },
  };
}

export default function Pokemon({ pokemon }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>carregando...</div>;
  }

  return (
    <div className={styles.pokemon_container}>
      <div className={styles.title}>
        <h1>{pokemon.name}</h1>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          width="200"
          height="200"
          alt={pokemon.name}
        />
      </div>

      <div>
        <h3>Number:</h3>
        <p>#{pokemon.id}</p>
      </div>

      <div>
        <h3>Type:</h3>
        <div className={styles.poketypes}>
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className={`${styles.default_type} ${
                styles[`type_${item.type.name}`]
              }`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.pokedata}>
        <div className={styles.pokedata_height}>
          <h4>Height:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div>
          <h4>Weight:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
}

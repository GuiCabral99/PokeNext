import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Card.module.css";

export default function Card({ pokemon }) {
  return (
    <div className={styles.card}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width="300"
        height="300"
        alt={pokemon.name}
      />
      <p>#{pokemon.id}</p>
      <h3>{pokemon.name}</h3>
      <Link href="/">
        <a>Detalhes</a>
      </Link>
    </div>
  );
}

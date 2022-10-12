import Link from "next/link";
import Image from "next/image";

import style from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="Pokéball"
          className={style.image}
        />
        <h1>PokéNext</h1>
      </div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

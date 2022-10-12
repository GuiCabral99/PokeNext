import Image from "next/image";

import style from "../styles/About.module.css";

export default function About() {
  return (
    <div className={style.about}>
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni labore
        exercitationem quis quisquam amet enim dicta consectetur mollitia
        excepturi delectus officia, ducimus eum culpa consequuntur quidem.
        Itaque doloribus neque exercitationem?
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  );
}

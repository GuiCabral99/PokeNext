import Image from "next/image";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni labore
        exercitationem quis quisquam amet enim dicta consectetur mollitia
        excepturi delectus officia, ducimus eum culpa consequuntur quidem.
        Itaque doloribus neque exercitationem?
      </p>
      <div className={styles.img}>
        <Image
          src="/images/charizard.png"
          width="300"
          height="300"
          alt="Charizard"
        />
      </div>
    </div>
  );
}

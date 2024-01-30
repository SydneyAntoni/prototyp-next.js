import styles from "./page.module.css";
export default function Home() {
  return (
    <main>
      {/*Willkommens Banner*/}
      <section className={styles.containerBanner}>
        <h1 className={styles.willkommen}>bei xapling</h1>
        <h1 className={styles.willkommen}>Herzlich Willkommen</h1>

        {/*Sowas immer auslagern ins CSS. Stört den Lesefluss.*/}
        <svg
          className={styles.circleSVG}
          xmlns="http://www.w3.org/2000/svg"
          width="180"
          height="20"
        >
          <circle className={styles.circle1} />
          <circle className={styles.circle2} />
          <circle className={styles.circle3} />
          <circle className={styles.circle4} />
          <circle className={styles.circle5} />
        </svg>
      </section>
      {/*xapling Vorstellung*/}
      <section className={styles.containerColumn1}>
        <div className={styles.containerTitle1}>
          <h2 className={styles.containerInnerTitle1}>
            WE GROW <br /> SUSTAINABLE <br /> TECHNOLOGY
          </h2>
        </div>
        <div className={styles.containerText}>
          <article className={styles.containerInnerText1}>
            <p>
              xapling ist ein junges Unternehmen, im Jahr 2021 gegründet, mit
              einer großen Vision:
            </p>
            <br />
            <p>
              Durch die Erstellung von Lösungen für konforme Software- und
              Hardwareentwicklung dafür sorgen, dass Produkte und
              Dienstleistungen im Sinne der Bedürfnisse der Menschen, ihrer
              Ernährung und der Erhaltung der Erde und der Natur verwirklicht
              werden können.
            </p>
            <br />
            <p>
              Die Basis, um diesen Traum verantwortungsvoll und zuverlässig
              erfüllen zu können, bildet ein kollegiales Team mit
              Hilfsbereitschaft untereinander und mit Gerechtigkeit und Fairness
              gegenüber Kollegen, Kunden und Lieferanten.
            </p>
          </article>
        </div>
      </section>
      <section className={styles.containerColumn2}>
        <div className={styles.containerText}>
          <article className={styles.containerInnerText2}>
            <p>
              Wir bauen Produkte und Dienstleistungen im Sinne der Menschheit
              und der Erde und sorgen dafür, dass es auch andere tun.{" "}
            </p>
            <br />
            <p>
              Das machen wir durch die Erstellung von Lösungen für konforme
              Software- und Hardwareentwicklung.
            </p>
          </article>
        </div>
        <div className={styles.containerTitle2}>
          <h2 className={styles.containerInnerTitle2}>
            OUR <br />
            MISSION
          </h2>
        </div>
      </section>
      {/*Zitat*/}
      <section className={styles.zitatSection}>
        <div className={styles.containerMark}>“</div>
        <blockquote className={styles.containerZitat}>
          Man braucht kein Unternehmen mit 100 Mitarbeitern
        </blockquote>
        <blockquote className={styles.containerZitat}>
          um eine Idee zu verwirklichen.
        </blockquote>
        <cite className={styles.containerQuelle}>
          Larry Page, Mitbegründer von Google
        </cite>
      </section>
    </main>
  );
}

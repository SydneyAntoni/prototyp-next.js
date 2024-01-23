import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";
import NavItem from "@/app/components/NavItem";
import Image from "next/image";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["900", "700", "400"],
});

export const metadata: Metadata = {
  title: "xapling",
  description: "xaplings website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>xapling</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/Favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/Favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/Favicons/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/Favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={nunitoSans.className}>
        <header>
          <div className={styles.gruenerBalken}></div>
          <div className={styles.blauerBalken}></div>
          <button className={styles.buttonLogo}>
            <a href="http://localhost:3000/" className={styles.buttonLogoLink}>
              <Image
                src="/xapling-logo.svg"
                alt="xapling-logo"
                width="70"
                height="70"
              />
            </a>
          </button>
          <nav>
            <ul className={styles.containerNav}>
              <li className={styles.itemNav}>
                <NavItem name={""} />
              </li>
              <li className={styles.itemNav}>
                <NavItem name={"Portfolio"} />
              </li>
              <li className={styles.itemNav}>
                <NavItem name={"Kontakt"} />
              </li>
              <li className={styles.itemNav}>
                <NavItem name={"Social"} />
              </li>
              <li className={styles.itemNav}>
                <NavItem name={"Team"} />
              </li>
            </ul>
          </nav>
        </header>

        {children}

        <footer style={{ margin: 0 }}>
          <ul className={styles.listFooter}>
            <li className={styles.listElementImpressum}>Impressum</li>
            <li className={styles.listElementDatenschutz}>Datenschutz</li>
            <li className={styles.listElementCopyright}>
              Copyright by xapling. Alle Rechte vorbehalten.
            </li>
          </ul>
          <div className={styles.gruenerBalken}></div>
          <div className={styles.blauerBalken}></div>
        </footer>
      </body>
    </html>
  );
}

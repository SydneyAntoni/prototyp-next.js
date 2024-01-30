import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";
import NavItem from "@/app/components/NavItem";
import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import React from "react";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["900", "700", "400"],
});

export const metadata: Metadata = {
  title: "xapling",
  description: "xaplings Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // let baseSrc = "/prototyp-next.js";
  let baseSrc = "";
  return (
    <html lang="en">
      <head>
        <title>xapling</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={baseSrc + "/Favicons/apple-touch-icon.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={baseSrc + "/Favicons/favicon-32x32.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={baseSrc + "/Favicons/favicon-16x16.png"}
        />
        <link
          rel="mask-icon"
          href={baseSrc + "/Favicons/safari-pinned-tab.svg"}
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
        <base href="https://sydneyantoni.github.io/prototyp-next.js/" />
        {/*<base href="http://localhost:3000/" />*/}
      </head>
      <body className={nunitoSans.className}>
        <header>
          <div className={styles.gruenerBalken}></div>
          <div className={styles.blauerBalken}></div>
          <button className={styles.buttonLogo}>
            <a href="" className={styles.buttonLogoLink}>
              <Image
                src={baseSrc + "/xapling-logo.svg"}
                alt="xapling-logo"
                width="70"
                height="70"
              />
            </a>
          </button>
          <nav>
            <ul className={styles.containerNav}>
              <li className={styles.itemNav}>
                <NavItem name={""}>xapling</NavItem>
              </li>
              <li className={styles.itemNav}>
                <NavItem name={"Portfolio"}>Portfolio</NavItem>
              </li>
              <li className={styles.itemNav}>
                <NavItem name={"Kontakt"}>Kontakt</NavItem>
              </li>
              <li className={styles.itemNav}>
                <NavItem name={"Social"}>Social</NavItem>
              </li>
              <li className={styles.itemNav}>
                <NavItem name={"Team"}>Team</NavItem>
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

import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";
import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import React from "react";
import "dotenv/config";
import Link from "@/app/components/Link/Link";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>xapling</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={process.env.BASE_URL + "/Favicons/apple-touch-icon.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={process.env.BASE_URL + "/Favicons/favicon-32x32.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={
            process.env.NEXT_PUBLIC_BASE_URL + "/Favicons/favicon-16x16.png"
          }
        />
        <link
          rel="mask-icon"
          href={
            process.env.NEXT_PUBLIC_BASE_URL + "/Favicons/safari-pinned-tab.svg"
          }
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
        <base href={process.env.NEXT_PUBLIC_BASE_URL} />
      </head>
      <body className={nunitoSans.className}>
        <header>
          <div className={styles.xaplingBalken}>
            <div className={styles.gruenerBalken}></div>
            <div className={styles.blauerBalken}></div>
          </div>
          <button className={styles.buttonLogo}>
            <a href={"/"} className={styles.buttonLogoLink}>
              <Image
                src={process.env.NEXT_PUBLIC_BASE_URL + "/xapling-logo.svg"}
                alt="xapling-logo"
                width="70"
                height="70"
              />
            </a>
          </button>
          <nav>
            <ul className={styles.containerNav}>
              <li className={styles.itemNav}>
                <Link link={"/"}>xapling</Link>
              </li>
              <li className={styles.itemNav}>
                <Link link={"/Portfolio"}>Portfolio</Link>
              </li>
              <li className={styles.itemNav}>
                <Link link={"/Kontakt"}>Kontakt</Link>
              </li>
              <li className={styles.itemNav}>
                <Link link={"/Social"}>Social</Link>
              </li>
              <li className={styles.itemNav}>
                <Link link={"/Team"}>Team</Link>
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
          <div className={styles.xaplingBalken}>
            <div className={styles.gruenerBalken}></div>
            <div className={styles.blauerBalken}></div>
          </div>
        </footer>
      </body>
    </html>
  );
}

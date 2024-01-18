import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200;6..12,800&display=swap"
          rel={"stylesheet"}
        />

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
      <body className={inter.className}>
        <header>
          <div className={styles.gruenerBalken}></div>
          <div className={styles.blauerBalken}></div>
          <button className={styles.buttonLogo}>
            <a href="http://localhost:3000/" className={styles.buttonLogoLink}>
              <img
                src="/xapling-logo.svg"
                alt="xapling-logo"
                width="70px"
                height="70px"
              />
            </a>
          </button>
          <nav>
            <ul className={styles.containerNav}>
              <li className={styles.itemNav}>
                <a className={styles.itemNavLink} href="http://localhost:3000/">
                  Test
                </a>
              </li>
              <li className={styles.itemNav}>
                <a className={styles.itemNav} href="http://localhost:3000/">
                  Test2
                </a>
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

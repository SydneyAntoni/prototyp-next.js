"use client";
import { usePathname } from "next/navigation";
import styles from "@/app/layout.module.css";

export default function NavItem({ name }: { name: string }) {
  var currentUrl = usePathname();
  if (currentUrl === "/" + name) {
    return (
      <a
        className={styles.itemNavSelected}
        href={"http://localhost:3000/" + name}
      >
        {name === "" ? "xapling" : name}
      </a>
    );
  } else {
    return (
      <a className={styles.itemNav} href={"http://localhost:3000/" + name}>
        {name === "" ? "xapling" : name}
      </a>
    );
  }
}

"use client";
import { usePathname } from "next/navigation";
import styles from "@/app/layout.module.css";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  link: string;
}

const Link = ({ children, link }: Props) => {
  let currentUrl = usePathname();
  return (
    <a
      className={currentUrl === link ? styles.itemNavSelected : styles.itemNav}
      href={process.env.NEXT_PUBLIC_BASE_URL + link}
    >
      {children}
    </a>
  );
};

export default Link;

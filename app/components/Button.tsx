"use client";
import { usePathname } from "next/navigation";
import styles from "@/app/layout.module.css";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  link: string;
}

const Button = ({ children, link }: Props) => {
  let currentUrl = usePathname();
  return (
    <a
      className={currentUrl === link ? styles.itemNavSelected : styles.itemNav}
      href={link}
    >
      {children}
    </a>
  );
};

export default Button;

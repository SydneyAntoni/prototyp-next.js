"use client";
import { usePathname } from "next/navigation";
import styles from "@/app/layout.module.css";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  name: string;
}

const NavItem = ({ children, name }: Props) => {
  let currentUrl = usePathname();
  return (
    <a
      className={
        currentUrl === "/" + name ? styles.itemNavSelected : styles.itemNav
      }
      href={name}
    >
      {children}
    </a>
  );
};

export default NavItem;

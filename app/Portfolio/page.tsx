import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Image
      src={"/alle.png"}
      alt={"Portfolio"}
      width={"1188"}
      height={"509"}
      unoptimized={true}
      className={styles.portfolio}
    />
  );
}

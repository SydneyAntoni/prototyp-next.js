import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
	// let baseSrc = "/prototyp-next.js";
	let baseSrc = 'http://localhost:3000/';
	return (
		<Image
			src={baseSrc + '/alle.png'}
			alt={'Portfolio'}
			width={'1188'}
			height={'509'}
			unoptimized={true}
			className={styles.portfolio}
		/>
	);
}

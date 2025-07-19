import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/" className={styles.link}>Home</Link>
        </li>
        <li>
          <Link href="/contact"className={styles.link}>contact</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/products/meats">Meats</Link>
        </li>
        <li>
          <Link href="/products/vegis">Vegis</Link>
        </li>
        <li>
          <Link href="/(login)/signup">Signup</Link>
        </li>
        <li><Link href="/about/branches">branches</Link></li>
        <li><Link href="/products/vegis">Vegis</Link></li>
      </ul>

        <Link href="https://google.com" target="_blank" rel="noopener noreferrer" id={styles.specialLink}>Google</Link>
    </div>
  );
}

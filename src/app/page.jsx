import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import img1 from "../../public/next.svg";
import Button from "./(components)/Button";

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

       <div>
        <Image
           src="https://ai.google.dev/static/gemini-api/docs/images/flying-pig.png" 
           alt="Vercel Logo"
           width={500}
           height={500}
        />
        
        </div>
        <Image src={img1} alt="Vercel Logo" width={100} height={24} />
        <Button></Button>
    </div>
  );
}

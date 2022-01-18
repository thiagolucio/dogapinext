import Link from "next/link";
import Image from "next/image";
import ImageLogo from "../public/images/dod_open.gif";

import styles from '../styles/Navbar.module.scss';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo_navbar}>
        <Image
          src={ImageLogo}
          alt="Hero Image from Site"
          width={50}
          height={50}
          layout="intrinsic"
        />
        <span>My Dog</span>
      </div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="https://thiagolucio.com.br">
            <a target="_blank" rel="noopener noreferrer">
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

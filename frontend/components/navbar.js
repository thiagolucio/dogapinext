import Link from "next/link";
import Image from "next/image";
import ImageLogo from "../public/images/dod_open.gif";

export default function NavBar() {
  return (
    <nav>
      <div className="logo_navbar">
        <Image
          src={ImageLogo}
          alt="Hero Image from Site"
          width={60}
          height={60}
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

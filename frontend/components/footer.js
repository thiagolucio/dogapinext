import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Link href="https://thiagolucio.com.br">
        <a target="_blank" rel="noopener noreferrer">
          <span className="font_14px">Created by</span>
          <Image
            src="/images/author.png"
            alt="Hero Intro Dog API"
            width={100}
            height={90}
            layout="intrinsic"
          />
        </a>
      </Link>
    </footer>
  );
}

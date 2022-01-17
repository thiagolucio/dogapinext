import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li><a>List</a></li>
                <li><a>Contact</a></li>
            </ul>
        </nav>
    )
}
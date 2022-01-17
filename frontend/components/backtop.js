import Link from "next/link";

export default function BackTop() {
  return (
    <div className="back_top_button">
      <Link href="/list#top">
        <img src="/images/back_top_icon.svg" width="46" height="46" />
      </Link>
    </div>
  );
}

import Link from "next/link";

export default function MainNavigation() {
  // 1:55h i recording
  return (
    <nav>
      <ul className="flex gap-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

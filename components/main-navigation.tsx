import Link from "next/link";

export default function MainNavigation() {
  // 1:55h i recording
  return (
    <nav className="flex justify-between mx-10 text-2xl font-bold">
      <h2>Logo</h2>
      <ul className="flex gap-6">
        <li>
          <Link className="text-amber-500 hover:bg-emerald-200 p-2" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className=" text-emerald-200 hover:bg-amber-500 p-2"
            href="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

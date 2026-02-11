"use client";
import { Category } from "@/types/products";
import Link from "next/link";
import { useSearchParams, usePathname} from "next/navigation";

export default function CategoryLink({ category }: { category: Category }) {
  const searchParams = useSearchParams();

  // Reads the current URL path name after hostname/...
  const pathName = usePathname();
  console.log(pathName);

  // Allows us to change the server value, meaning we can manipulate the URL
  const params = new URLSearchParams(searchParams.toString());
  params.set("category", category.slug);

  return (
    <Link key={category.id} href={`${pathName}?${params.toString()}`}>
      {category.name}
    </Link>
  );
}

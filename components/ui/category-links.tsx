import { getCategories } from "@/data/product";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export default async function CategoryLinks() {
  const categories: Category[] = await getCategories();
  return (
    <section className="flex gap-4">
      {categories.map((c) => (
        <Link key={c.id} href={`/products?category=${c.slug}`}>
          {c.name}
        </Link>
      ))}
    </section>
  );
}

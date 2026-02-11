import { getCategories } from "@/data/product";
import { Category } from "@/types/products";
import Link from "next/link";
import CategoryLink from "./category-link";

export default async function CategoryLinks() {
  const categories: Category[] = await getCategories();

  return (
    <section className="flex gap-4">
      {categories.map((c) => (
        <CategoryLink key={c.id} category={c} />
      ))}
    </section>
  );
}

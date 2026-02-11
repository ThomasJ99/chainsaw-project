import Link from "next/link";
import { ProductCardProps } from "@/types/products";
import LikeButton from "./LikeButton";
import ImageScroll from "./image-scroll";

// My product info content thats inside a generic card-grid
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <li key={product.id} className="">
      <div className="relative group">
        <ImageScroll product={product} />
        <LikeButton pTitle={product.title} />
      </div>

      <Link href={`/products/${product.id}`}>
        <section className="pt-3 pb-5 font-semibold text-center">
          <h2 className="font-bold font-oswald">{product.title}</h2>
          <span className="block mb-2">{product.category.name}</span>
          <span>{product.price} kr</span>
        </section>
      </Link>
    </li>
  );
}

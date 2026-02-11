import Link from "next/link";
import { Product } from "@/types/products";
import LikeButton from "./LikeButton";

interface ProductCardProps {
  product: Product;
}
// My product info content thats inside a generic card-grid
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <li key={product.id} className="">
      <div className="relative">
        {product.images[0] && (
          <img
            src={product.images[0]}
            alt="temp image"
            // Anchor
            className="w-full h-120 object-cover"
            height={400}
            width={200}
          />
        )}
        <LikeButton pTitle={product.title} />
        <button>Swap image</button>
      </div>

      <Link href={`/products/${product.id}`}>
        <section className="pt-3 pb-5 font-semibold text-center">
          <h2 className="font-bold font-oswald">{product.title}</h2>
          <span className="block">{product.category.name}</span>
          <span className="">{product.price} kr</span>
        </section>
      </Link>
    </li>
  );
}

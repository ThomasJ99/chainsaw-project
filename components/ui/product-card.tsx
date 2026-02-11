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
            alt=""
            className="w-full object-cover"
            height={400}
            width={200}
          />
        )}
      <LikeButton pTitle={product.title} />
      </div>

      <Link href={`/products/${product.id}`}>
        <section className="p-5">
          <h2 className="font-bold">{product.title}</h2>
          <h3 className="opacity-80">{product.category.name}</h3>
          <p>{product.price}kr</p>
          {/* <p>{product.description}</p> */}
          {/* <p className="text-2xl">ID: {product.id}</p> */}
        </section>
      </Link>
    </li>
  );
}

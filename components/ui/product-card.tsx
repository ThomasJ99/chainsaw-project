import Link from "next/link";
import { Product } from "@/types/products";
import LikeButton from "./LikeButton";

interface ProductCardProps {
  product: Product;
}
// My product info content thats inside a generic card-grid
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <li key={product.id} className="border-2 grid grid-cols-2">
      <div>
        {product.images[0] && (
          <img
            src={product.images[0]}
            alt=""
            className="w-full h-full object-cover"
            height={200}
            width={200}
          />
        )}
      </div>
        <LikeButton pTitle={product.title} />

      <Link href={`/products/${product.id}`}>
        <section className="p-5">
          <h3 className="text-2xl">{product.title}</h3>
          <h4 className="opacity-80">{product.category.name}</h4>
          <p>{product.price}kr</p>
          <p>{product.description}</p>
          <p className="text-2xl">ID: {product.id}</p>
        </section>
      </Link>

      {/* <Image
        src={p.category.image}
        height={50}
        width={50}
        alt="Image of a product category"
      /> */}
    </li>
  );
}

import Link from "next/link";
import { Product } from "@/types/products";

interface ProductCardProps {
  p: Product;
}

export default function ProductCard({p}: ProductCardProps) {
  return (
    <li key={p.id} className="border-2 grid grid-cols-2">
      {p.images[0] && (
        <img
          src={p.images[0]}
          alt=""
          className="w-full h-full object-cover"
          height={200}
          width={200}
        />
      )}

      <Link href={`/products/${p.id}`}>
        <section className="p-5">
          <h3 className="text-2xl">{p.title}</h3>
          <h4 className="opacity-80">{p.category.name}</h4>
          <p>{p.price}kr</p>
          <p>{p.description}</p>
          <p className="text-2xl">ID: {p.id}</p>
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

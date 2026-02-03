import { Product } from "@/types/products";
import CardGrid from "@/components/ui/card-grid";
// WTH IS THIS
import { title } from "process";
import Image from "next/image";

// This is where we get the product information
async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");

    if (!response.ok) {
      throw new Error("Error, could'nt find products");
    }
    return await response.json();
  } catch (error) {
    throw new Error("Error, could'nt find products");
  }
}

// Component
// This is where we call getProducts and render out the products
export default async function productPage() {
  const data = await getProducts();
  // const cleanUrl = p.images[0].replace(/[\[\]\"]/g, "");

  // I create elements here to make my return section more clean
  const elements = data.map((p) => (
    <li key={p.id} className="border-2">
      
      <h3>{p.title}</h3>
      <h4>{p.category.name}</h4>
      <p>{p.price}kr</p>
      {/* Help */}

      {/* <Image
        src={p.images[1]}
        height={100}
        width={100}
        alt="Image of a product"
      /> */}
      <Image
        src={p.category.image}
        height={50}
        width={50}
        alt="Image of a product category"
      />
    </li>
  ));

  return (
    <section className="">
      <ul className="">
        {/* HELP */}
        <CardGrid title={title} children={elements} />
      </ul>
    </section>
  );
}

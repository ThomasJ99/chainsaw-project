import { Product } from "@/types/products";

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

  // I create elements here to make my return section more clean
  const elements = data.map((p) => (
    <li key={p.id}>
      <h3>{p.title}</h3>
      <h4>{p.category.id}</h4>
    </li>
  ));

  return (
    <section>
      <ul>{elements}</ul>
    </section>
  );
}

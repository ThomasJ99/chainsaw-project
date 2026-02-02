import { Product } from "@/types/products";

// This is where we get the product information
// export default function CardGrid({ volumes }: { volumes: Volume[] })
async function getProducts() {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");

    if (!response.ok) {
      throw new Error("Error, could'nt find products");
    }
    const data = await response.json();

    const responseData = data.map((p) => {
      return {
        id: p.id,
        title: p.title,
        slug: p.slug,
        price: p.price,
        description: p.description,
        category: {
          id: p.id,
          name: p.name,
          image: p.image,
          slug: p.slug,
        },
        images: [p.image],
      };
    });

    console.log("WDAWFD", responseData);
    return responseData;

  } catch (error) {}
}

// Component
// This is where we call getProducts and render out the products

export default async function productPage() {
  const data: Product[] = await getProducts();

  const elements = data.map(
    (p: {
      id: number;
      title: string;
      slug: string;
      price: number;
      description: string;
      category: {
        id: number;
        name: string;
        image: string;
        slug: string;
      };
      images: [string];
    }) => (
      <li key={p.id}>
        <h3>{p.title}</h3>
      </li>
    ),
  );

  return (
    <section>
      <ul>{elements}</ul>
    </section>
  );
}

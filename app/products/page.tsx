import { Product } from "@/types/products";
import CardGrid from "@/components/ui/card-grid";
import Image from "next/image";
import { Suspense } from "react";
import { getProduct } from "@/data/product";
import { redirect } from "next/navigation";

// This is where we get the product information
async function getProducts() {
  try {
    // function which contains the api json
    const data = await getProduct();

    // Check if theres the key(message) inside data
    if ("message" in data || !data) {
      throw new Error(`${data.message}, could'nt find products`);
      // console.error(data.message);
    }

    const products = data;
    return products;

    // Another fail check if using try/catch, both is probably a bit much, so either remove the if statement or this one
  } catch (error) {
    // Different ways to show error
    return "Api not working...";
    // redirect("/uykkp99uy")
    // throw new Error("Api not working...")
  }
}

// Component
// This is where we call getProducts and render out the products
export default async function productPage(params: PageProps<"/">) {
  const { limit = "12" } = await params.searchParams;
  const limitNumber = Number(Array.isArray(limit) ? limit[0] : limit);

  const data = (await getProducts()) as Product[];
  // console.log(data[1].images[0]);

  // I create elements here to make my return section more clean
  const elements = data.map((p) => (
    <li key={p.id} className="border-2 grid grid-cols-2">
      {p.images[0] && (
        <img src={p.images[0]} alt="" className="w-full h-full object-cover" />
      )}

      <section className="p-5">
        <h3 className="text-2xl">{p.title}</h3>
        <h4 className="opacity-80">{p.category.name}</h4>
        <p>{p.price}kr</p>
        <p>{p.description}</p>
      </section>

      {/* <Image
        src={p.category.image}
        height={50}
        width={50}
        alt="Image of a product category"
      /> */}
    </li>
  ));

  return (
    <section className="">
      <ul className="">
        {/* Shows the fallback if the grid and api take a lot of time to load - can show skeleton ui here */}
        <Suspense fallback={<div>loading...</div>}>
          <CardGrid children={elements} />
        </Suspense>
      </ul>
    </section>
  );
}

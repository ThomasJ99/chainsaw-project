import { Product } from "@/types/products";
import CardGrid from "@/components/ui/card-grid";
import Image from "next/image";
import { Suspense } from "react";
import { getProduct, getProducts } from "@/data/product";
import { redirect } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";


// Component
// This is where we call getProducts and render out the products
export default async function productPage(params: PageProps<"/">) {
  const { limit = "12" } = await params.searchParams;
  const limitNumber = Number(Array.isArray(limit) ? limit[0] : limit);
  // Things to do with limit, implement links/buttons that change the limit on the site -
  // -

  const products = await getProducts()
  // console.log(data[1].images[0]);

  // I create elements here to make my return section more clean
  const elements = products.map((p) => (
    // <li key={p.id} className="border-2 grid grid-cols-2">
    //   {p.images[0] && (
    //     <img src={p.images[0]} alt="" className="w-full h-full object-cover" height={200} width={200} />
    //   )}

    //   <Link href={`/products/${p.id}`}>
    //     <section className="p-5">
    //       <h3 className="text-2xl">{p.title}</h3>
    //       <h4 className="opacity-80">{p.category.name}</h4>
    //       <p>{p.price}kr</p>
    //       <p>{p.description}</p>
    //       <p className="text-2xl">ID: {p.id}</p>
    //     </section>
    //   </Link>

    //   {/* <Image
    //     src={p.category.image}
    //     height={50}
    //     width={50}
    //     alt="Image of a product category"
    //   /> */}
    // </li>
    <ProductCard key={p.title} p={p}/>
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

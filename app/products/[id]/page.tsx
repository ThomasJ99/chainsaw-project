import data from "@/data/volumes.json";

import Image from "next/image";
import { getProduct } from "@/data/product";
import { Metadata } from "next";
import notFound from "./not-found";
// From https://nextjs.org/docs/app/api-reference/file-conventions/page#reading-searchparams-and-params-in-client-components

// Puts a title on the webpage, which features the products title
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  // read route params
  const { id } = await params;
  const idNumber = Number(id);

  // fetch data
  const product = await getProduct(idNumber);

  return {
    title: `Product - ${product.title}`,
  };
}

// Content for the product
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // When this one is done, we get the id for our Promise which will give us the unique id for this product
  const { id } = await params;
  const idNumber = Number(id);
  //   const volume = data.volumes.find((volume) => volume.id === Number(id));
  const product = await getProduct(idNumber);

  // If theres no product, call the notFound function and return
  if (!product) notFound();
  //else return below..
  return (
    <main className="container mx-auto py-20">
      <article className="grid md:grid-cols-3 ">
        <div className="">
          <img className="w-full" src={""} alt=""></img>
          <h1 className="text-5xl my-5 text-center">{product.title}</h1>
          <p>{product.description}</p>
        </div>

        <div className="text-center">
          <button className="">Buy</button>
          <button>Put in cart</button>
        </div>
      </article>
    </main>
  );
}

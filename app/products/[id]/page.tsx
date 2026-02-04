import data from "@/data/volumes.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getProduct } from "@/data/product";
// From https://nextjs.org/docs/app/api-reference/file-conventions/page#reading-searchparams-and-params-in-client-components

export default async function VolumePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // When this one is done, we get the id for our Promise
  const { id } = await params;
  console.log(id)
  const idNumber = Number(id);
  //   const volume = data.volumes.find((volume) => volume.id === Number(id));
  const product = await getProduct(idNumber);
  console.log(product);

  // If theres no volume, call the notFound function and return
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

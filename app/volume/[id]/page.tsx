import data from "@/data/volumes.json";
import { notFound } from "next/navigation";
import Image from "next/image";

// From https://nextjs.org/docs/app/api-reference/file-conventions/page#reading-searchparams-and-params-in-client-components

export default async function VolumePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // When this one is done, we get the id for our Promise
  const { id } = await params;
  const volume = data.volumes.find((volume) => volume.id === Number(id));

  // If theres no volume, call the notFound function and return
  if (!volume) notFound();
  //else return below..
  return (
    <main className="container mx-auto py-20">
      <article className="grid md:grid-cols-3 ">
        <div className="">
          <Image className="w-full" src={volume.image} height={189} width={258} alt=""></Image>
          <h1 className="text-5xl my-5 text-center">{volume.volume}</h1>
          <p>{volume.description}</p>
        </div>

        <div className="text-center">
          <button className="">Buy</button>
          <button>Put in cart</button>
        </div>
      </article>
    </main>
  );
}

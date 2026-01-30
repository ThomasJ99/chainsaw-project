import data from "@/data/volumes.json";
import { notFound } from "next/navigation";

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
}

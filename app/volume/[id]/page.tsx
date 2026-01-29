import data from "@/data/volumes.json";
import { notFound } from "next/navigation";

export default async function VolumePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const volume = data.volumes.find((volume) => volume.id === Number(id));

  if (!volume) notFound();
  return (
    <main>
      {/* {volume?.volume} */}
      <article>

      </article>      
    </main>
  );
}

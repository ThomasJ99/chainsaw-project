import data from "@/data/volumes.json";
import CardGrid from "@/components/ui/card-grid";
import Hero from "@/components/ui/hero";

export default function Home() { // Search params typ 1h30 i föreläsningen
  // const volumes = data.volumes;
  // const total = data.total

  // Destructuring of const volumes = data.volumes
  const { volumes: v } = data;

  return (
    <main>
      <Hero/>

      {/* Creates a grid of cards, it imports a component using a function */}
      <CardGrid volumes={v} />
    </main>
  );
}

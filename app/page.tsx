import Image from "next/image";
import data from "@/data/volumes.json";

export default function Home() {
  // const volumes = data.volumes;
  // const total = data.total

  // Destructuring of const volumes = data.volumes
  const { volumes: volumes } = data;

  return (
    <main>
      {/* Hero */}
      <section className="py-16 px-4 bg-linear-to-b from-orange-600  via-yellow-500 to-lime-300">
        <div className="container mx-auto px-4 grid items-center lg:grid-cols-2 gap-8 font-josefin">
          <div>
            <span className="text-2xl italic font-bold">
              Immerse yourself in the world of
            </span>
            <h1 className="text-5xl font-bold leading-tight text-balance grid col-auto">
              Chainsaw Man <span>チェンソーマン</span>
            </h1>
            <p className="opacity-85">By Tatsuki Fujimoto 藤本 タツキ</p>
          </div>

          <Image
            className="border-3 border-black rounded-2xl shadow-2xl"
            src="https://boolintunes.com/wp-content/uploads/2023/01/Chainsaw-Man-Banner-1-1.png"
            alt="test"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={1500}
            height={843}
            preload={true}
            loading="eager"
          />
        </div>
      </section>

      <section className="container mx-auto">
        <h2>Manga Volumes</h2>
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(35ch,1fr))]">
          {volumes.map((volume) => (
            <li key={volume.id}>
              <Image
                /*"w-full" if I want covers to take up more space */
                className=""
                src={volume.image}
                width={180}
                height={284}
                alt={volume.volume}
              />
              <h3>{volume.volume}</h3>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

import { Volume } from "@/types/chainsaw";
import Image from "next/image";

// With props
// export default function CardGrid(props: { volumes: Volume[] }) {

// These two are the same, id argue the second (destructured) is better
// const volumes = props.volumes
// const {volumes} = props

// This function does what the above function does and the const {volumes} = props line does, but in 1 line instead
export default function CardGrid({ volumes }: { volumes: Volume[] }) {
  return (
    <section className="container mx-auto">
      <h2>Manga Volumes</h2>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(35ch,1fr))] gap-8">
        {volumes.map((volume) => (
          <li
            key={volume.id}
            className={`${volume.isLatest ? "border-2 border-red-600" : ""}`}
          >
            <Image
              className="w-full"
              src={volume.image}
              width={180}
              height={284}
              alt={`${volume.volume} of the manga series Chainsaw Man, written by Tatsuki Fujimoto`}
            />
            <div className="font-inter">
              <h3 className="text-2xl mb-4 mt-2 underline underline-offset-2 hover:text-amber-300 transition-colors">
                {volume.volume}
              </h3>
              <span>{volume.arc}</span>
              <p className="leading-relaxed">{volume.description}</p>
              <span className="block text-right text-sm text-white/70 font-light ">
                {volume.releaseDate}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

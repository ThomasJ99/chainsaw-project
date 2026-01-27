import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="py-16 px-4 bg-linear-to-b from-amber-600 via-amber-500 to-emerald-200">
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
            className="border-3 border-black "
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
      <section>YOLO</section>
    </main>
  );
}

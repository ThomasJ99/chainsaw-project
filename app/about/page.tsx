import Image from "next/image";

export default function About() {
  const title = "About Chainsaw Man";
  return (
    <main className="px-4 py-16">
      <article className="container mx-auto">
        <section>
          <h1 className="text-4xl font-bold mb-6 text-balance font-josefin text-center">
            {title}
          </h1>

          <div className="grid grid-cols-3 gap-15">
            {/* Empty element for grid structure */}
            <span></span>
            <div className="">
              <p className="mb-6">
                Chainsaw Man (Japanese: チェンソーマン, Hepburn: Chensō Man) is
                a Japanese manga series written and illustrated by Tatsuki
                Fujimoto. Its first arc was serialized in Shueisha's shōnen
                manga magazine Weekly Shōnen Jump from December 2018 to December
                2020; its second arc began serialization in Shueisha's Shōnen
                Jump+ app and website in July 2022. Its chapters have been
                collected in 22 tankōbon volumes as of September 2025.
              </p>

              <p className="mb-12">
                By December 2025, the manga had over 34 million copies in
                circulation, making it one of the best-selling manga series of
                all time. In 2021, it won the 66th Shogakukan Manga Award in the
                shōnen category and won the Harvey Award in the Best Manga
                category from 2021 to 2023. Chainsaw Man has been overall
                well-received by critics, who have praised its storytelling,
                characters, dark humor, and have particularly highlighted its
                violent scenes within the context of the story.
              </p>
            </div>

            <figure>
              <div className="pl-10">
                <Image
                  className="border-3 border-black mb-2"
                  src="https://upload.wikimedia.org/wikipedia/en/2/24/Chainsawman.jpg"
                  alt="test"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  width={252}
                  height={396}
                  preload={true}
                  loading="eager"
                />

                <figcaption>
                  <p className="max-w-1/2 inline lg-inline-none">
                    First tankōbon volume cover, featuring Denji in his
                    Devil-human hybrid form, Chainsaw Man
                  </p>
                </figcaption>
              </div>
            </figure>
          </div>
        </section>

        <section>
          <h2 className="text-4xl text-center mb-6">Overview</h2>
          <p>
            Chainsaw Man follows the story of Denji, an impoverished teenager
            who makes a contract that fuses his body with that of Pochita, the
            dog-like Chainsaw Devil, granting him the ability to transform parts
            of his body into chainsaws. Denji eventually joins the Public Safety
            Devil Hunters, a government agency focused on combating Devils
            whenever they become a threat to Japan. The second arc of the story
            focuses on Asa Mitaka, a high school student who enters into a
            contract with Yoru, the War Devil, who forces her to hunt down
            Chainsaw Man in order to reclaim what he had stolen from her.
          </p>
        </section>

        <section>
          <figure className="grid grid-cols-4">
            <Image
              className="border-3 border-black "
              src="https://static.wikia.nocookie.net/chainsaw-man/images/0/0f/Volume_01.png/revision/latest/scale-to-width-down/180?cb=20230907225315"
              alt="test"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              width={180}
              height={284}
              preload={true}
              loading="eager"
            />

            <Image
              className="border-3 border-black "
              src="https://static.wikia.nocookie.net/chainsaw-man/images/6/68/Volume_02.png/revision/latest/scale-to-width-down/180?cb=20230907225636"
              alt="test"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              width={180}
              height={284}
              preload={true}
              loading="eager"
            />

            <Image
              className="border-3 border-black "
              src="https://static.wikia.nocookie.net/chainsaw-man/images/5/5c/Volume_03.png/revision/latest?cb=20230907225801"
              alt="test"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              width={180}
              height={284}
              preload={true}
              loading="eager"
            />

            <Image
              className="border-3 border-black "
              src="https://static.wikia.nocookie.net/chainsaw-man/images/e/ef/Volume_04.png/revision/latest?cb=20230907225927"
              alt="test"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              width={180}
              height={284}
              preload={true}
              loading="eager"
            />

            <Image
              className="border-3 border-black "
              src="https://static.wikia.nocookie.net/chainsaw-man/images/c/cf/Volume_05.png/revision/latest?cb=20230907230442"
              alt="test"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              width={180}
              height={284}
              preload={true}
              loading="eager"
            />

            <Image
              className="border-3 border-black "
              src="https://static.wikia.nocookie.net/chainsaw-man/images/2/2e/Volume_06.png/revision/latest?cb=20230907230511"
              alt="test"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              width={180}
              height={284}
              preload={true}
              loading="eager"
            />

            <Image
              className="border-3 border-black "
              src="https://static.wikia.nocookie.net/chainsaw-man/images/3/36/Volume_07.png/revision/latest?cb=20230907230532"
              alt="test"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              width={180}
              height={284}
              preload={true}
              loading="eager"
            />

            <Image
              className="border-3 border-black "
              src="https://static.wikia.nocookie.net/chainsaw-man/images/1/14/Volume_08.png/revision/latest?cb=20230907230549"
              alt="test"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              width={180}
              height={284}
              preload={true}
              loading="eager"
            />

            <Image
              className="border-3 border-black "
              src="https://static.wikia.nocookie.net/chainsaw-man/images/f/f3/Volume_09.png/revision/latest?cb=20230907230647"
              alt="test"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              width={180}
              height={284}
              preload={true}
              loading="eager"
            />

            <Image
              className="border-3 border-black "
              src="https://static.wikia.nocookie.net/chainsaw-man/images/6/6b/Volume_10.png/revision/latest?cb=20230907230745"
              alt="test"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              width={180}
              height={284}
              preload={true}
              loading="eager"
            />

            <Image
              className="border-3 border-black "
              src="https://static.wikia.nocookie.net/chainsaw-man/images/1/1b/Volume_11.png/revision/latest?cb=20230907230755"
              alt="test"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              width={180}
              height={284}
              preload={true}
              loading="eager"
            />
          </figure>
        </section>
      </article>
    </main>
  );
}

import Image from "next/image";

export default function Articles() {
  return (
    <>
      <main className="h-full relative">
        <div
          className="
        absolute top-36 left-0 right-0
        flex flex-col md:flex-row gap-7 md:flex-wrap items-center justify-center"
        >
          <div className="card card-compact w-96 h-[348px] bg-primary-content shadow-xl">
            <figure>
              <Image
                width={384}
                height={200}
                src="/assets/banquise-glace-mer-arctique.jpeg"
                alt="Shoes"
                objectFit="cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Voir plus</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

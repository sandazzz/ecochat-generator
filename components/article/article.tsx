import Image from "next/image";
import Link from "next/link";

export default async function Article({ article }: any) {
  return (
    <>
      <Link className="relative" href={`/articles/${article.id}`} passHref>
        <div
          className="w-full h-72 p-2 
                flex flex-col md:flex-row items-center gap-4 relative 
                border-solid border-2 border-[#4fc3dc] rounded-lg hover:border-[#ff2d75]"
        >
          <div className="flex items-center relative w-80 md:w-96 h-64">
            <Image
              className="rounded"
              fill
              style={{
                objectFit: "cover",
              }}
              sizes="100vw "
              priority={true}
              src={article.illustration}
              alt={article.title}
            />
          </div>
          <div className="text-white w-80 md:w-96 md:h-64">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

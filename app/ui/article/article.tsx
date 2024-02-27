import Image from "next/image";
import Link from "next/link";

/*type ArticleProps  = {
  article: ArticleProps
}*/

export default async function Article({ article }: any) {
  return (
    <>
      <Link href={`/articles/${article.id}`} passHref>
        <div className="flex p-5 border-solid border-2 border-[#4fc3dc] rounded-lg text-white
        hover:border-[#ff2d75]">

          <Image
          className="rounded"
            width={384}
            height={200}
            src={article.illustration}
            alt={article.title}
            objectFit="cover"
          />

          <div className="px-4">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>

        </div>
      </Link>
    </>
  );
}

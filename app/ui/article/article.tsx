import Image from "next/image";
import Link from "next/link";

/*type ArticleProps  = {
  article: ArticleProps
}*/

export default async function Article({ article }: any) {
  return (
    <div className="card card-compact w-96 h-[348px] bg-base-100 shadow-xl">
      <figure>
        <Image
          width={384}
          height={200}
          src={article.illustration}
          alt={article.title}
          objectFit="cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{article.title}</h2>
        <p>{article.description}</p>
        <div className="card-actions justify-end">
          <Link href={`/articles/${article.id}`} passHref>
            <button className="btn btn-primary">Voir plus</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

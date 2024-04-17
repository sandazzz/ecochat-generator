import { getArticle } from "@/src/query/articles.query";
import Image from "next/image";

export default async function detailedArticles({
  params,
}: {
  params: { detailedArticle: string };
}) {
  const id: number = parseInt(params.detailedArticle);

  const article = await getArticle(id);

  return (
    <main className="h-full relative top-28 px-6 md:px-72 text-white">
      <div id="basic-information" className="flex flex-col md:flex-row w-full justify-between gap-5 mb-8">
        <div>
          <h1 className="text-3xl mb-1">{article.title}</h1>
          <p>Auteur: {article.author}</p>
          <p>
            Date de publication:{" "}
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>
          <p>Description: {article.description}</p>
        </div>

        <div className="w-80 md:w-96 h-52 relative">
          <Image
            className="rounded-md"
            fill
            style={{
              objectFit: "cover",
            }}
            sizes="100vw "
            priority={true}
            src={article.illustration}
            alt="Illustration"
          />
        </div>
      </div>

      <div id="content" className="flex flex-col gap-6">
        {article.sections.map((section: any) => (
          <div key={section.order} className="flex flex-col gap-5">
            <h2 className="text-2xl">{section.title} :</h2>
            <ul className="flex flex-col gap-2">
              {section.paragraphes.map((paragraphe: any) => (
                <li key={paragraphe.id}>{paragraphe.content}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}

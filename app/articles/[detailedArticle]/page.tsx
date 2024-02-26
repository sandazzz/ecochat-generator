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
    <main className="h-full relative">
      <div className="absolute top-36 left-0 right-0 px-6 md:px-52 text-white">
        <div
          id="main-content"
          className="flex flex-col md:flex-row w-full justify-between"
        >
          <div>
            <h1>{article.title}</h1>
            <p>Auteur: {article.author}</p>
            <p>
              Date de publication:
              {new Date(article.publishedAt).toLocaleDateString()}
            </p>
            <p>Description: {article.description}</p>
          </div>

          <Image
            width={384}
            height={200}
            objectFit="cover"
            src={article.illustration}
            alt="Illustration"
          />
        </div>

        <div id="content" className="flex flex-col gap-6">
          {article.sections.map((section: any) => (
            <div key={section.order} className="flex flex-col gap-3">
              <h2>{section.title}</h2>
              <ul>
                {section.paragraphes.map((paragraphe: any) => (
                  <li key={paragraphe.id}>{paragraphe.content}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

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
    <main className="min-h-screen bg-gradient-to-br from-[#0c192c] via-[#1a273a] to-[#273a4d] p-6 text-gray-100 md:p-20">
      <div
        id="basic-information"
        className="mb-16 flex flex-col items-center gap-12 md:flex-row md:items-start"
      >
        <div className="flex-1">
          <h1 className="mb-6 text-4xl font-bold text-white">
            {article.title}
          </h1>
          <p className="mb-4 text-lg">
            <span className="font-semibold">Author:</span> {article.author}
          </p>
          <p className="mb-4 text-lg">
            <span className="font-semibold">Published on:</span>{" "}
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>
          <p className="mb-4 text-lg">
            <span className="font-semibold">Description:</span>{" "}
            {article.description}
          </p>
        </div>

        <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-xl md:w-96">
          <Image
            className="object-cover object-center"
            fill
            src={article.illustration}
            alt="Illustration"
          />
        </div>
      </div>
      <div id="content" className="flex flex-col gap-12">
        {article.sections.map((section: any) => (
          <div key={section.order} className="flex flex-col gap-6">
            <h2 className="border-b-2 border-[#4fc3dc] pb-2 text-3xl font-semibold">
              {section.title}
            </h2>
            <ul className="flex list-inside list-disc flex-col gap-4 pl-6">
              {section.paragraphes.map((paragraphe: any) => (
                <li key={paragraphe.id} className="text-lg leading-relaxed">
                  {paragraphe.content}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}

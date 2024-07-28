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
    <main
      className="min-h-screen bg-gradient-to-br from-[#0c192c] via-[#1a273a] to-[#273a4d]
 text-gray-100 p-6 md:p-20"
    >
      <div
        id="basic-information"
        className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-16"
      >
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-6 text-white">
            {article.title}
          </h1>
          <p className="text-lg mb-4">
            <span className="font-semibold">Author:</span> {article.author}
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold">Published on:</span>{" "}
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold">Description:</span>{" "}
            {article.description}
          </p>
        </div>

        <div className="w-full md:w-96 h-64 relative rounded-lg overflow-hidden shadow-xl">
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
            <h2 className="text-3xl font-semibold pb-2 border-b-2 border-[#4fc3dc]">
              {section.title}
            </h2>
            <ul className="flex flex-col gap-4 pl-6 list-disc list-inside">
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

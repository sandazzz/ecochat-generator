import { getArticle } from "@/src/query/articles.query";
import React from "react";

export default async function detailedArticles({
  params,
}: {
  params: { detailedArticle: string };
}) {
  const id: number = parseInt(params.detailedArticle);

  const article = await getArticle(id);
  console.log(article);

  return (
    <main className="h-full relative">
      <div className="absolute top-36 left-0 right-0 px-6 md:px-52 text-white">
        {/*article.map((a: any) => (
          <div key={a.id}>
            <p>{a.title}</p>
            <p>{a.description}</p>
            <p>{a.publishedAt}</p>
          </div>
        ))*/}
        {/*<div>detailedArticles page</div>*/}
      </div>
    </main>
  );
}

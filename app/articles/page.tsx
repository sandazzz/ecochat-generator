import { getArticles } from "@/src/query/articles.query";
import Article from "../ui/article/article";

export default async function Articles() {
  const articles = await getArticles();

  return (
    <>
      <main className="h-full relative">
        <div
          className="
          absolute top-36 left-0 right-0
          flex flex-col md:flex-row gap-7 md:flex-wrap items-center justify-center"
        >
          {articles.map(
            (article: any) => (
             <Article key={article.id} article={article}></Article>
            )
          )}
        </div>
      </main>
    </>
  );
}

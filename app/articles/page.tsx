import { getArticles } from "@/src/query/articles.query";
import Article from "../ui/article/article";

export default async function Articles() {
  const articles = await getArticles();

  return (
    <>
      <main className="h-full relative">
        <div className="relative top-36 mx-auto max-w-6xl flex flex-col gap-5">
          {articles.map((article: any) => (
            <Article key={article.id} article={article}></Article>
          ))}
        </div>
      </main>
    </>
  );
}

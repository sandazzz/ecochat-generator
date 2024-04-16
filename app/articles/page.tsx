import { getArticles } from "@/src/query/articles.query";
import Article from "../ui/article/article";

export default async function Articles() {
  const articles = await getArticles();

  return (
    <main className="min-h-screen w-full">
      <div className="relative top-28 flex flex-col gap-5 items-center">
        {articles.map((article: any) => (
          <Article key={article.id} article={article}></Article>
        ))}
      </div>
    </main>
  );
}

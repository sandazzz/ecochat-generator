import { getArticles } from "@/src/query/articles.query";
import Article from "@/components/article/article";

export default async function Articles() {
  const articles = await getArticles();

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#0c192c] via-[#1a273a] to-[#273a4d] p-6 md:p-12">
      <div className="flex flex-col items-center gap-8">
        <h1 className="mb-8 text-4xl font-bold text-white">Articles</h1>
        {articles.map((article: any) => (
          <Article key={article.id} article={article}></Article>
        ))}
      </div>
    </main>
  );
}

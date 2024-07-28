import Image from "next/image";
import Link from "next/link";

export default async function Article({ article }: any) {
  return (
    <Link
      className="w-full max-w-4xl transform transition-transform hover:scale-105"
      href={`/articles/${article.id}`}
      passHref
    >
      <div className="relative w-full h-80 bg-gradient-to-r from-[#0c192c] to-[#273a4d] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <div className="absolute inset-0">
          <Image
            className="object-cover object-center w-full h-full opacity-80"
            fill
            src={article.illustration}
            alt={article.title}
          />
        </div>
        <div className="relative p-6 h-full flex flex-col justify-between bg-gradient-to-t from-black/70 via-black/50 to-transparent">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-md">
              {article.title}
            </h2>
            <p className="text-base text-white line-clamp-3 drop-shadow-sm">
              {article.description}
            </p>
          </div>
          <div className="flex justify-end">
            <span className="text-base font-semibold text-[#4fc3dc] hover:underline">
              Read more
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

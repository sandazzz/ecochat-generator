import { prisma } from "@/src/lib/prisma/prisma";
import { Prisma } from "@prisma/client";

export const getArticles = () =>
  prisma.article.findMany({
    take: 5,
  });
export type ArticleHome = Prisma.PromiseReturnType<typeof getArticles>[number];

export const getArticle = (id: number) =>
  prisma.article.findUnique({
    where: {
      id: id,
    },
    include: {
      sections: {
        include: {
          paragraphes: true,
        },
      },
    },
  });

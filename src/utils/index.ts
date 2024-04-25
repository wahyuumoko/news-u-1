import { news } from "@/types";

export const removeDuplicateData = (articles: any) => {
  if (!articles || !articles.articles) {
    return []; // Return an empty array if articles is undefined or doesn't contain articles
  }
  const randomArticle: news[] = articles?.articles;
  const filterArticles = randomArticle.filter(
    (article) => article?.source.id !== null
  );
  return filterArticles;
};

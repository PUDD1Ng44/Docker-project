import ArticleList from "@/components/ArticleList/ArticleList";
import { articleService } from "@/services/article";
import { Article } from "@/types/article";
import Head from "next/head";
import { useEffect, useState } from "react";

export async function getServerSideProps(context: any) {
  let articles = null;
  try {
    const res = await articleService.GetAll();
    articles = res.data;
  } catch (e) {
    console.error(e);
  }
  return {
    props: { articles },
  };
}

export default function Home(props: any) {
  const [articles, setArticles] = useState<Array<Article>>();

  useEffect(() => {
    setArticles(props.articles);
  }, [props.articles]);

  return (
    <>
      <Head>
        <title>UEHS Blog | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="mx-auto p-4 text-slate-800 lg:max-w-screen-xl lg:p-16">
          <ArticleList articles={articles} onLoadMore={() => {}} />
        </div>
      </main>
    </>
  );
}

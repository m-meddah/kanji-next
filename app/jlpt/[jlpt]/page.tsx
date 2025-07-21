import { Card, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Suspense } from "react";
import JLPTNotFound from "../../jlpt-not-found";
import { getKanjiByJlpt } from "@/features/dataFetch";

type JlptPageProps = {
  params: { jlpt: string };
};

export default async function JlptPage({ params }: JlptPageProps) {

  const jlptLevel = await Number(params.jlpt);
  if (isNaN(jlptLevel) || jlptLevel < 1 || jlptLevel > 5) {
    return JLPTNotFound();
  }

  const data = await getKanjiByJlpt(jlptLevel);
  

  return (
    <main className="flex flex-col gap-4 mx-4">
      <h1 className="text-2xl text-center font-bold mb-4">
        JLPT N{jlptLevel} Kanji List
      </h1>
      <ul className="list-disc list-inside">
        <Suspense
          fallback={
            [...Array(20)].map((_, index) => (
              <Card key={index} className="p-4 mb-2 animate-pulse">
                <CardTitle className="bg-gray-200 h-4 w-full"></CardTitle>
              </Card>
            ))
          }
        >
          {data.map((kanji: string) => (
            <Card key={kanji} className="p-4 mb-2">
              <Link href={`/kanji/${kanji}`}>
                <CardTitle>{kanji}</CardTitle>
              </Link>
            </Card>
          ))}
        </Suspense>
      </ul>
    </main>
  );
}

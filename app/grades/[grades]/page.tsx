import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Suspense } from "react";
import { getKanjiByGrade } from "@/features/dataFetch";
import GradeNotFound from "../../grade-not-found";

type GradePageProps = {
  params: { grades: string };
};

export default async function GradePage({ params }: GradePageProps) {
  const gradeNum = Number(params.grades);
  if (isNaN(gradeNum) || gradeNum < 1 || gradeNum > 8 || gradeNum === 7) {
    return GradeNotFound();
  }

  const data = await getKanjiByGrade(Number(params.grades));

  return (
    <main className="flex flex-col gap-4 mx-4">
      <h1 className="text-2xl text-center font-bold mb-4">
        Grade {gradeNum} Kanji List
      </h1>
      <ul className="list-disc list-inside">
        <Suspense
          fallback={[...Array(20)].map((_, index) => (
            <Card key={index} className="p-4 mb-2 animate-pulse">
              <CardTitle className="bg-gray-200 h-4 w-full"></CardTitle>
            </Card>
          ))}
        >
          {data.map((kanji: string) => (
            <Card key={kanji} className="p-4 mb-2">
              <Link href={`/kanji/${kanji}`}>
                <CardHeader>
                  <CardTitle>{kanji}</CardTitle>
                </CardHeader>
              </Link>
            </Card>
          ))}
        </Suspense>
      </ul>
    </main>
  );
}

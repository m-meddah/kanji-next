import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getKanjiDetails, getWordsByKanji } from "@/features/dataFetch";
import { Suspense } from "react";

type KanjiPageProps = {
  params: { kanji: string };
};

export default async function KanjiPage({ params }: KanjiPageProps) {
  const [kanjiData, wordData] = await Promise.all([
    getKanjiDetails(params.kanji),
    getWordsByKanji(params.kanji),
  ]);

  return (
    <main className="flex flex-col items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-9xl text-center">
            {kanjiData.kanji}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {kanjiData.kanji && (
            <div className="flex flex-row justify-between items-center">
              <p className="text-sm text-gray-500">Grade</p>
              <p className="text-lg font-semibold">{kanjiData.grade}</p>
            </div>
          )}
          {kanjiData.jlpt && (
            <div className="flex flex-row justify-between items-center">
              <p className="text-sm text-gray-500">JLPT Level</p>
              <p className="text-lg font-semibold">{kanjiData.jlpt}</p>
            </div>
          )}
          <div className="flex flex-row justify-between items-center">
            <p className="text-sm text-gray-500">Stroke Count</p>
            <p className="text-lg font-semibold">{kanjiData.stroke_count}</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-sm text-gray-500">Unicode</p>
            <p className="text-lg font-semibold">{kanjiData.unicode}</p>
          </div>
          {kanjiData.heisig_en && (
            <div className="flex flex-row justify-between items-center">
              <p className="text-sm text-gray-500">Heisig Keyword</p>
              <p className="text-lg font-semibold">{kanjiData.heisig_en}</p>
            </div>
          )}
          {kanjiData.kun_readings && (
            <div>
              <p className="text-sm text-gray-500">Kunyomi</p>
              <p className="flex flex-row text-lg font-semibold justify-end">
                {kanjiData.kun_readings.join(", ")}
              </p>
            </div>
          )}
          {kanjiData.on_readings && (
            <div>
              <p className="text-sm text-gray-500">Onyomi</p>
              <p className="flex flex-row text-lg font-semibold justify-end">
                {kanjiData.on_readings.join(", ")}
              </p>
            </div>
          )}
          {kanjiData.nanori && (
            <div>
              <p className="text-sm text-gray-500">Nanori</p>
              <p className="flex flex-row text-lg font-semibold justify-end">
                {kanjiData.name_readings.join(", ")}
              </p>
            </div>
          )}
          <div>
            <p className="text-sm text-gray-500">Meanings</p>
            <p className="flex flex-row text-lg font-semibold justify-end">
              {kanjiData.meanings.join(", ")}
            </p>
          </div>

          <div>
            <p className="text-lg text-gray-500">Words</p>
              <div className="flex flex-col">
                {wordData.map(
                  (word: {
                    variants: {
                      pronounced: string;
                      written: string;
                    }[];
                    meanings: { glosses: string[] }[];
                  }, index: number) => (
                    <div
                      key={index}
                      className="flex flex-col justify-between"
                    >
                      <div className="flex flex-row justify-between items-center">
                        <p className="text-md font-semibold">
                          {word.variants[0].written}
                        </p>
                        <p className="text-xs text-gray-500">
                          {word.variants[0].pronounced}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500">
                        {word.meanings[0].glosses.join(", ")}
                      </p>
                    </div>
                  )
                )}
              </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  Star,
  Hash,
  Palette,
  Volume2,
} from "lucide-react";
import Link from "next/link";
import { getKanjiDetails, getWordsByKanji } from "@/features/dataFetch";
import { KanjiWords } from "../../_components/KanjiWords";
import { Suspense } from "react";

type KanjiPageProps = {
  params: { kanji: string };
};

function ReadingBadge({
  reading,
  type,
}: {
  reading: string;
  type: "kun" | "on" | "nanori";
}) {
  const colorMap = {
    kun: "bg-blue-100 text-blue-800 border-blue-200",
    on: "bg-red-100 text-red-800 border-red-200",
    nanori: "bg-green-100 text-green-800 border-green-200",
  };

  return (
    <Badge variant="outline" className={`${colorMap[type]} font-mono`}>
      {reading}
    </Badge>
  );
}

export default async function KanjiPage({ params }: KanjiPageProps) {
  const [kanjiData, wordData] = await Promise.all([
    getKanjiDetails(params.kanji),
    getWordsByKanji(params.kanji),
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span>/</span>
        <Link href="/joyo" className="hover:text-foreground">
          Kanji
        </Link>
        <span>/</span>
        <span className="text-foreground">{kanjiData.kanji}</span>
      </div>

      {/* Back Button */}
      <Button variant="outline" className="mb-6 bg-transparent" asChild>
        <Link href="/joyo">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Kanji List
        </Link>
      </Button>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Kanji Display */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader className="text-center pb-4">
              <div className="text-8xl md:text-9xl font-bold text-primary mb-4">
                {kanjiData.kanji}
              </div>
              <div className="flex justify-center gap-2 flex-wrap">
                {kanjiData.grade && (
                  <Badge variant="secondary" asChild>
                    <Link href={`/grades/${kanjiData.grade}`}>
                      <GraduationCap className="w-3 h-3 mr-1" />
                      Grade {kanjiData.grade}
                    </Link>
                  </Badge>
                )}
                {kanjiData.jlpt && (
                  <Badge variant="secondary" asChild>
                    <Link href={`/jlpt/${kanjiData.jlpt}`}>
                      <Star className="w-3 h-3 mr-1" />
                      JLPT N{kanjiData.jlpt}
                    </Link>
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Basic Information */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">
                    {kanjiData.stroke_count}
                  </div>
                  <div className="text-xs text-muted-foreground">Strokes</div>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-sm font-mono text-primary">
                    {kanjiData.unicode}
                  </div>
                  <div className="text-xs text-muted-foreground">Unicode</div>
                </div>
              </div>

              {kanjiData.heisig_en && (
                <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="text-sm font-medium text-muted-foreground mb-1">
                    Heisig Keyword
                  </div>
                  <div className="text-lg font-semibold text-primary">
                    {kanjiData.heisig_en}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Meanings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Meanings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {kanjiData.meanings.map((meaning: string, index: number) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {meaning}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Readings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-primary" />
                Readings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {kanjiData.on_readings && kanjiData.on_readings.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">
                    Onyomi (音読み) - Chinese readings
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {kanjiData.on_readings.map(
                      (reading: string, index: number) => (
                        <ReadingBadge key={index} reading={reading} type="on" />
                      )
                    )}
                  </div>
                </div>
              )}

              {kanjiData.kun_readings && kanjiData.kun_readings.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">
                    Kunyomi (訓読み) - Japanese readings
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {kanjiData.kun_readings.map(
                      (reading: string, index: number) => (
                        <ReadingBadge
                          key={index}
                          reading={reading}
                          type="kun"
                        />
                      )
                    )}
                  </div>
                </div>
              )}

              {kanjiData.nanori &&
                kanjiData.name_readings &&
                kanjiData.name_readings.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">
                      Nanori (名乗り) - Name readings
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {kanjiData.name_readings.map(
                        (reading: string, index: number) => (
                          <ReadingBadge
                            key={index}
                            reading={reading}
                            type="nanori"
                          />
                        )
                      )}
                    </div>
                  </div>
                )}
            </CardContent>
          </Card>

          {/* Words using this kanji */}
          <Suspense>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hash className="w-5 h-5 text-primary" />
                  Words using this kanji ({wordData.length})
                </CardTitle>
              </CardHeader>
              <KanjiWords wordData={wordData} />
            </Card>
          </Suspense>

          {/* Study Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-primary" />
                Study Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Learning Tips</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Practice writing the kanji multiple times</li>
                    <li>• Learn the most common readings first</li>
                    <li>• Study words that use this kanji</li>
                    <li>• Create mnemonics for the meanings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Quick Facts</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Stroke Count:</span>
                      <span className="font-mono">
                        {kanjiData.stroke_count}
                      </span>
                    </div>
                    {kanjiData.grade && (
                      <div className="flex justify-between">
                        <span>School Grade:</span>
                        <span>{kanjiData.grade}</span>
                      </div>
                    )}
                    {kanjiData.jlpt && (
                      <div className="flex justify-between">
                        <span>JLPT Level:</span>
                        <span>N{kanjiData.jlpt}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Unicode:</span>
                      <span className="font-mono">{kanjiData.unicode}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Navigation to related content */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        {kanjiData.grade && (
          <Button variant="outline" asChild>
            <Link href={`/grades/${kanjiData.grade}`}>
              <GraduationCap className="w-4 h-4 mr-2" />
              More Grade {kanjiData.grade} Kanji
            </Link>
          </Button>
        )}
        {kanjiData.jlpt && (
          <Button variant="outline" asChild>
            <Link href={`/jlpt/${kanjiData.jlpt}`}>
              <Star className="w-4 h-4 mr-2" />
              More JLPT N{kanjiData.jlpt} Kanji
            </Link>
          </Button>
        )}
        <Button variant="outline" asChild>
          <Link href="/joyo">
            <BookOpen className="w-4 h-4 mr-2" />
            Browse All Kanji
          </Link>
        </Button>
      </div>
    </div>
  );
}

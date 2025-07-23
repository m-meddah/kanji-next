'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Hash } from "lucide-react";
import { useState } from "react";

function WordCard({ word }: { word: any }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <span className="text-3xl font-kanji font-bold">{word.variants[0].written}</span>
          <span className="text-sm text-muted-foreground font-kanji font-bold">{word.variants[0].pronounced}</span>
        </div>
        <p className="text-sm text-muted-foreground">{word.meanings[0].glosses.join(", ")}</p>
      </CardContent>
    </Card>
  )
}

export function KanjiWords({ wordData }: { wordData: any[] }) {

  const [showAllWords, setShowAllWords] = useState(false)

  return (
    <CardContent>
              {wordData.length > 0 ? (
                <div className="grid gap-3">
                  {(showAllWords ? wordData : wordData.slice(0, 12)).map((word: any, index: number) => (
                    <WordCard key={index} word={word} />
                  ))}
                  {wordData.length > 12 && (
                    <div className="text-center pt-4">
                      <Button variant="outline" onClick={() => setShowAllWords(!showAllWords)} >
                        {showAllWords ? "Show less words" : `Show ${wordData.length - 12} more words`}
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Hash className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No words found using this kanji</p>
                </div>
              )}
            </CardContent>
  );
}
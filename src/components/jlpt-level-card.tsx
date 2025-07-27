"use client"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { useProgress } from "@/hooks/use-progress";

interface JLPTLevel {
  link: string;
  level: string;
  kanjiCount: number;
  description: string;
  difficulty: string;
  examples: string[];
  color: string;
  topics: string[];
  studyHours: string;
  passRate: string;
  skills: string;
}

interface JLPTLevelCardProps {
  levelData: JLPTLevel;
  levelKanji?: string[];
}

export function JLPTLevelCard({ levelData, levelKanji = [] }: JLPTLevelCardProps) {
  const { learnedKanji, isAuthenticated, isLoading } = useProgress();

  // Calculate learned kanji for this specific level
  const learnedInLevel = isAuthenticated 
    ? levelKanji.filter(kanji => learnedKanji.includes(kanji)).length 
    : 0;
  const progressPercentage = levelData.kanjiCount > 0 && isAuthenticated 
    ? Math.round((learnedInLevel / levelData.kanjiCount) * 100) 
    : 0;

  return (
    <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-xs">
            {levelData.difficulty}
          </Badge>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              Pass Rate: {levelData.passRate}
            </Badge>
            <div
              className={`w-3 h-3 rounded-full ${levelData.color}`}
            ></div>
          </div>
        </div>
        <CardTitle className="text-3xl">
          JLPT {levelData.level}
          <span className="text-lg font-normal text-muted-foreground ml-2">
            ({levelData.kanjiCount} kanji)
          </span>
        </CardTitle>
        <CardDescription className="text-sm">
          {levelData.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Example Kanji */}
        <div>
          <div className="text-sm font-medium mb-2">Example Kanji:</div>
          <div className="flex gap-2 flex-wrap">
            {levelData.examples.map((kanji, index) => (
              <div
                key={index}
                className="w-10 h-10 border rounded-lg flex items-center justify-center text-lg font-kanji font-bold hover:bg-muted transition-colors"
              >
                <Link href={`/kanji/${kanji}`}>{kanji}</Link>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Topics */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <div className="text-sm font-medium mb-2">Main Topics:</div>
            <div className="flex gap-1 flex-wrap">
              {levelData.topics.map((topic, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs"
                >
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-medium mb-2 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Study Hours:
            </div>
            <div className="text-sm text-muted-foreground">
              {levelData.studyHours} hours
            </div>
          </div>
        </div>

        {/* Skills Description */}
        <div>
          <div className="text-sm font-medium mb-2">Key Skills:</div>
          <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
            {levelData.skills}
          </div>
        </div>

        {/* Progress indicator - only for authenticated users */}
        {isAuthenticated && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Completion</span>
              <span className="text-muted-foreground">
                {isLoading ? "..." : `${learnedInLevel}/${levelData.kanjiCount}`}
              </span>
            </div>
            <Progress value={isLoading ? 0 : progressPercentage} className="h-2" />
          </div>
        )}

        {/* Action Button */}
        <Button className="w-full" asChild>
          <Link href={`/jlpt/${levelData.link}`}>
            Study JLPT {levelData.level}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
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
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useProgress } from "@/hooks/use-progress";

interface GradeLevel {
  grade: number;
  kanjiCount: number;
  description: string;
  difficulty: string;
  examples: string[];
  color: string;
  topics: string[];
}

interface GradeLevelCardProps {
  gradeData: GradeLevel;
  gradeKanji?: string[];
}

export function GradeLevelCard({ gradeData, gradeKanji = [] }: GradeLevelCardProps) {
  const { learnedKanji, isAuthenticated, isLoading } = useProgress();

  // Calculate learned kanji for this specific grade
  const learnedInGrade = isAuthenticated 
    ? gradeKanji.filter(kanji => learnedKanji.includes(kanji)).length 
    : 0;
  const progressPercentage = gradeData.kanjiCount > 0 && isAuthenticated 
    ? Math.round((learnedInGrade / gradeData.kanjiCount) * 100) 
    : 0;

  return (
    <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-xs">
            {gradeData.difficulty}
          </Badge>
          <div className={`w-3 h-3 rounded-full ${gradeData.color}`}></div>
        </div>
        <CardTitle className="text-2xl">
          Grade {gradeData.grade}
          <span className="text-lg font-normal text-muted-foreground ml-2">
            ({gradeData.kanjiCount} kanji)
          </span>
        </CardTitle>
        <CardDescription className="text-sm">
          {gradeData.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Example Kanji */}
        <div>
          <div className="text-sm font-medium mb-2">Example Kanji:</div>
          <div className="flex gap-2 flex-wrap">
            {gradeData.examples.map((kanji, index) => (
              <div
                key={index}
                className="w-10 h-10 border rounded-lg flex items-center justify-center text-lg font-kanji font-bold hover:bg-muted transition-colors"
              >
                <Link href={`/kanji/${kanji}`}>
                  {kanji}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Topics */}
        <div>
          <div className="text-sm font-medium mb-2">Main Topics:</div>
          <div className="flex gap-1 flex-wrap">
            {gradeData.topics.map((topic, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {topic}
              </Badge>
            ))}
          </div>
        </div>

        {/* Progress indicator - only for authenticated users */}
        {isAuthenticated && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Completion</span>
              <span className="text-muted-foreground">
                {isLoading ? "..." : `${learnedInGrade}/${gradeData.kanjiCount}`}
              </span>
            </div>
            <Progress value={isLoading ? 0 : progressPercentage} className="h-2" />
          </div>
        )}

        {/* Action Button */}
        <Button className="w-full" asChild>
          <Link href={`/grades/${gradeData.grade}`}>
            Start Grade {gradeData.grade}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
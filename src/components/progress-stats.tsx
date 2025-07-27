"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Target } from "lucide-react"
import { useProgress } from "@/hooks/use-progress"

interface ProgressStatsProps {
  totalCount: number
  levelKanji?: string[]
  type: "jlpt" | "grade"
  level: string | number
}

export function ProgressStats({ totalCount, levelKanji = [], type, level }: ProgressStatsProps) {
  const { learnedKanji, isAuthenticated, isLoading } = useProgress()

  if (!isAuthenticated) {
    // Only show total count for non-authenticated users
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Total Kanji</span>
          </div>
          <div className="text-2xl font-bold">{totalCount}</div>
          <div className="text-xs text-muted-foreground">
            Kanji in {type === "jlpt" ? `N${level}` : `Grade ${level}`}
          </div>
        </Card>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Total Kanji</span>
          </div>
          <div className="text-2xl font-bold">{totalCount}</div>
          <div className="text-xs text-muted-foreground">
            Kanji in {type === "jlpt" ? `N${level}` : `Grade ${level}`}
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Completion</span>
          </div>
          <div className="text-2xl font-bold">...</div>
          <div className="text-xs text-muted-foreground">Loading...</div>
        </Card>
      </div>
    )
  }

  // Calculate learned kanji for this specific level
  const learnedInLevel = levelKanji.filter(kanji => learnedKanji.includes(kanji)).length
  const progressPercentage = totalCount > 0 ? Math.round((learnedInLevel / totalCount) * 100) : 0

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Total Kanji</span>
          </div>
          <div className="text-2xl font-bold">{totalCount}</div>
          <div className="text-xs text-muted-foreground">
            Kanji in {type === "jlpt" ? `N${level}` : `Grade ${level}`}
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Completion</span>
          </div>
          <div className="text-2xl font-bold">{progressPercentage}%</div>
          <div className="text-xs text-muted-foreground">
            {learnedInLevel} / {totalCount} learned
          </div>
        </Card>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2 mb-6">
        <div className="flex justify-between text-sm">
          <span>Learning Progress</span>
          <span className="text-muted-foreground">
            {learnedInLevel} / {totalCount}
          </span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>
    </>
  )
}
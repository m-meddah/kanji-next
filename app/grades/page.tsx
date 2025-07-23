import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { GraduationCap, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

// Data for each grade
const grades = [
  {
    grade: 1,
    kanjiCount: 80,
    description: "Basic kanji for everyday objects, numbers, and simple concepts",
    difficulty: "Beginner",
    examples: ["一", "二", "三", "人", "大", "小"],
    color: "bg-green-500",
    topics: ["Numbers", "Family", "Body parts", "Nature"],
  },
  {
    grade: 2,
    kanjiCount: 160,
    description: "Building on Grade 1 with more complex everyday vocabulary",
    difficulty: "Beginner",
    examples: ["時", "間", "分", "年", "月", "日"],
    color: "bg-blue-500",
    topics: ["Time", "Directions", "Animals", "Weather"],
  },
  {
    grade: 3,
    kanjiCount: 200,
    description: "Introduction to more abstract concepts and compound words",
    difficulty: "Elementary",
    examples: ["勉", "強", "宿", "題", "研", "究"],
    color: "bg-purple-500",
    topics: ["School", "Study", "Society", "Science"],
  },
  {
    grade: 4,
    kanjiCount: 202,
    description: "Advanced elementary kanji with complex meanings",
    difficulty: "Elementary",
    examples: ["都", "道", "府", "県", "議", "会"],
    color: "bg-orange-500",
    topics: ["Geography", "Government", "History", "Culture"],
  },
  {
    grade: 5,
    kanjiCount: 193,
    description: "Pre-intermediate kanji for academic and formal contexts",
    difficulty: "Intermediate",
    examples: ["政", "治", "経", "済", "統", "計"],
    color: "bg-red-500",
    topics: ["Politics", "Economics", "Statistics", "Media"],
  },
  {
    grade: 6,
    kanjiCount: 191,
    description: "Advanced elementary kanji preparing for junior high school",
    difficulty: "Intermediate",
    examples: ["憲", "法", "民", "主", "独", "立"],
    color: "bg-indigo-500",
    topics: ["Law", "Democracy", "Philosophy", "International"],
  },
]

const totalKanji = grades.reduce((sum, grade) => sum + grade.kanjiCount, 0)

export default function GradesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">
          <GraduationCap className="w-4 h-4 mr-2" />
          Japanese Elementary School System
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Learn Kanji by <span className="text-primary">Grade Level</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Follow the Japanese education system and learn kanji in the same order as Japanese students. Each grade builds
          upon the previous one, creating a solid foundation for kanji mastery.
        </p>

        {/* Stats */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{totalKanji}</div>
            <div className="text-sm text-muted-foreground">Total Kanji</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">6</div>
            <div className="text-sm text-muted-foreground">Grade Levels</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">6</div>
            <div className="text-sm text-muted-foreground">Years of Study</div>
          </div>
        </div>
      </div>

      {/* Grades Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {grades.map((gradeData) => (
          <Card key={gradeData.grade} className="relative overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="text-xs">
                  {gradeData.difficulty}
                </Badge>
                <div className={`w-3 h-3 rounded-full ${gradeData.color}`}></div>
              </div>
              <CardTitle className="text-2xl">
                Grade {gradeData.grade}
                <span className="text-lg font-normal text-muted-foreground ml-2">({gradeData.kanjiCount} kanji)</span>
              </CardTitle>
              <CardDescription className="text-sm">{gradeData.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Example Kanji */}
              <div>
                <div className="text-sm font-medium mb-2">Example Kanji:</div>
                <div className="flex gap-2 flex-wrap">
                  {gradeData.examples.map((kanji, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 border rounded-lg flex items-center justify-center text-lg font-bold hover:bg-muted transition-colors"
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

              {/* Progress indicator */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Completion</span>
                  <span className="text-muted-foreground">0/{gradeData.kanjiCount}</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>

              {/* Action Button */}
              <Button className="w-full" asChild>
                <Link href={`/grades/${gradeData.grade}`}>
                  Start Grade {gradeData.grade}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Learning Path Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            Recommended Learning Path
          </CardTitle>
          <CardDescription>Follow this systematic approach to master kanji effectively</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-primary mb-2">1</div>
              <div className="font-medium mb-1">Start Sequential</div>
              <div className="text-sm text-muted-foreground">
                Begin with Grade 1 and progress systematically through each level
              </div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-primary mb-2">2</div>
              <div className="font-medium mb-1">Practice Daily</div>
              <div className="text-sm text-muted-foreground">
                Study a few kanji each day and review previously learned characters
              </div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-primary mb-2">3</div>
              <div className="font-medium mb-1">Build Foundation</div>
              <div className="text-sm text-muted-foreground">
                Master each grade before moving to the next for solid understanding
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4 text-center">
        <Card className="p-4">
          <div className="text-2xl font-bold text-primary">80</div>
          <div className="text-sm text-muted-foreground">Grade 1 Kanji</div>
          <div className="text-xs text-muted-foreground mt-1">Easiest to learn</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold text-primary">200</div>
          <div className="text-sm text-muted-foreground">Grade 3 Kanji</div>
          <div className="text-xs text-muted-foreground mt-1">Most in one grade</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold text-primary">191</div>
          <div className="text-sm text-muted-foreground">Grade 6 Kanji</div>
          <div className="text-xs text-muted-foreground mt-1">Most advanced</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold text-primary">100%</div>
          <div className="text-sm text-muted-foreground">Coverage</div>
          <div className="text-xs text-muted-foreground mt-1">All elementary kanji</div>
        </Card>
      </div>
    </div>
  )
}

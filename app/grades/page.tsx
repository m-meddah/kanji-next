import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Star } from "lucide-react"
import { GradeLevelCard } from "@/components/grade-level-card"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Learn Kanji by Grade Level (1-6)",
  description:
    "Learn Japanese kanji following the official Japanese elementary school system. Study 2,136 Joyo kanji organized by grades 1-6, from basic characters to advanced concepts.",
  keywords: [
    "Japanese kanji by grade",
    "elementary school kanji",
    "grade 1 kanji",
    "grade 2 kanji",
    "grade 3 kanji",
    "grade 4 kanji",
    "grade 5 kanji",
    "grade 6 kanji",
    "Japanese education system",
    "Joyo kanji by grade level",
  ],
  openGraph: {
    title: "Learn Kanji by Grade Level (1-6) | KanjiMaster",
    description:
      "Learn Japanese kanji following the official Japanese elementary school system. Study 2,136 Joyo kanji organized by grades 1-6.",
    url: "https://kanjimaster.com/grades",
    images: [
      {
        url: "/og-grades.png",
        width: 1200,
        height: 630,
        alt: "Japanese Kanji by Grade Level - KanjiMaster",
      },
    ],
  },
  alternates: {
    canonical: "https://kanjimaster.com/grades",
  },
}

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
    kanjiCount: 200,
    description: "Advanced elementary kanji with complex meanings",
    difficulty: "Elementary",
    examples: ["都", "道", "府", "県", "議", "会"],
    color: "bg-orange-500",
    topics: ["Geography", "Government", "History", "Culture"],
  },
  {
    grade: 5,
    kanjiCount: 185,
    description: "Pre-intermediate kanji for academic and formal contexts",
    difficulty: "Intermediate",
    examples: ["政", "治", "経", "済", "統", "計"],
    color: "bg-red-500",
    topics: ["Politics", "Economics", "Statistics", "Media"],
  },
  {
    grade: 6,
    kanjiCount: 181,
    description: "Advanced elementary kanji preparing for junior high school",
    difficulty: "Intermediate",
    examples: ["憲", "法", "民", "主", "独", "立"],
    color: "bg-indigo-500",
    topics: ["Law", "Democracy", "Philosophy", "International"],
  },
  {
    grade: 8,
    kanjiCount: 1134,
    description: "Additional kanji learned in junior high school",
    difficulty: "Advanced",
    examples: ["論", "理", "証", "明", "解", "釈"],
    color: "bg-gray-500",
    topics: ["Logic", "Science", "Literature", "Philosophy"],
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
          <GradeLevelCard
            key={gradeData.grade}
            gradeData={gradeData}
          />
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
          <Link href="/grades/1" className="hover:underline">
          <div className="text-2xl font-bold text-primary">80</div>
          <div className="text-sm text-muted-foreground">Grade 1 Kanji</div>
          <div className="text-xs text-muted-foreground mt-1">Easiest to learn</div>
          </Link>
        </Card>
        <Card className="p-4">
          <Link href="/grades/2" className="hover:underline">
          <div className="text-2xl font-bold text-primary">200</div>
          <div className="text-sm text-muted-foreground">Grade 3 Kanji</div>
          <div className="text-xs text-muted-foreground mt-1">Most in one grade</div>
          </Link>
        </Card>
        <Card className="p-4">
          <Link href="/grades/6" className="hover:underline">
          <div className="text-2xl font-bold text-primary">181</div>
          <div className="text-sm text-muted-foreground">Grade 6 Kanji</div>
          <div className="text-xs text-muted-foreground mt-1">Most advanced</div>
          </Link>
        </Card>
        <Card className="p-4">
          <Link href="/joyo" className="hover:underline">
          <div className="text-2xl font-bold text-primary">100%</div>
          <div className="text-sm text-muted-foreground">Coverage</div>
          <div className="text-xs text-muted-foreground mt-1">All elementary kanji</div>
          </Link>
        </Card>
      </div>
    </div>
  )
}

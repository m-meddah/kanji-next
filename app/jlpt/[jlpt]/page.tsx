import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, BookOpen, Trophy, Clock, Target } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"
import JLPTNotFound from "../../jlpt-not-found"
import { getKanjiByJlpt } from "@/features/dataFetch"

type JlptPageProps = {
  params: { jlpt: string }
}

// JLPT level information data
const jlptInfo = {
  5: {
    title: "JLPT N5 Kanji",
    description: "Basic kanji for everyday situations and simple conversations",
    difficulty: "Beginner",
    topics: ["Daily life", "Time", "Family", "Basic verbs"],
    color: "bg-green-500",
    expectedCount: 103,
    studyHours: "150-300",
    passRate: "70%",
    skills: "Basic reading of hiragana, katakana, and simple kanji",
  },
  4: {
    title: "JLPT N4 Kanji",
    description: "Expanded vocabulary for practical daily communication",
    difficulty: "Elementary",
    topics: ["Work", "Shopping", "Transportation", "Health"],
    color: "bg-blue-500",
    expectedCount: 181,
    studyHours: "300-600",
    passRate: "60%",
    skills: "Understanding basic texts and everyday conversations",
  },
  3: {
    title: "JLPT N3 Kanji",
    description: "Intermediate kanji for more complex topics and situations",
    difficulty: "Intermediate",
    topics: ["Experience", "Opinions", "Abstract concepts", "Business"],
    color: "bg-yellow-500",
    expectedCount: 367,
    studyHours: "450-900",
    passRate: "45%",
    skills: "Comprehending everyday topics and expressing opinions",
  },
  2: {
    title: "JLPT N2 Kanji",
    description: "Advanced kanji for academic and professional contexts",
    difficulty: "Upper-Intermediate",
    topics: ["Politics", "Economics", "Culture", "Academic texts"],
    color: "bg-orange-500",
    expectedCount: 415,
    studyHours: "600-1200",
    passRate: "35%",
    skills: "Understanding newspapers, magazines, and complex discussions",
  },
  1: {
    title: "JLPT N1 Kanji",
    description: "Mastery level kanji for native-like comprehension",
    difficulty: "Advanced",
    topics: ["Philosophy", "Literature", "Specialized fields", "Abstract concepts"],
    color: "bg-red-500",
    expectedCount: 1235,
    studyHours: "900-1800",
    passRate: "25%",
    skills: "Native-level reading and understanding of complex materials",
  },
}

function KanjiGrid({ data }: { data: string[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
      {data.map((kanji: string) => (
        <Link key={kanji} href={`/kanji/${kanji}`}>
          <Card className="aspect-square flex items-center justify-center hover:shadow-md transition-all duration-200 hover:scale-105 cursor-pointer group">
            <CardContent className="p-0 flex items-center justify-center w-full h-full">
              <span className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">{kanji}</span>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

function KanjiGridSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
      {[...Array(20)].map((_, index) => (
        <Card key={index} className="aspect-square animate-pulse">
          <CardContent className="p-0 flex items-center justify-center w-full h-full">
            <div className="w-8 h-8 bg-gray-200 rounded"></div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default async function JlptPage({ params }: JlptPageProps) {
  const jlptLevel = Number(params.jlpt)

  if (isNaN(jlptLevel) || jlptLevel < 1 || jlptLevel > 5) {
    return JLPTNotFound()
  }

  const data = await getKanjiByJlpt(jlptLevel)
  const info = jlptInfo[jlptLevel as keyof typeof jlptInfo]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span>/</span>
        <Link href="/jlpt" className="hover:text-foreground">
          JLPT
        </Link>
        <span>/</span>
        <span className="text-foreground">N{jlptLevel}</span>
      </div>

      {/* Back Button */}
      <Button variant="outline" className="mb-6 bg-transparent" asChild>
        <Link href="/jlpt">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to JLPT Levels
        </Link>
      </Button>

      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-4 h-4 rounded-full ${info.color}`}></div>
          <Badge variant="outline">{info.difficulty}</Badge>
          <Badge variant="secondary">
            <Trophy className="w-3 h-3 mr-1" />
            Pass Rate: {info.passRate}
          </Badge>
          <Badge variant="secondary">
            <Clock className="w-3 h-3 mr-1" />
            {info.studyHours}h
          </Badge>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-4">{info.title}</h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl">{info.description}</p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Total Kanji</span>
            </div>
            <div className="text-2xl font-bold">{data.length}</div>
            <div className="text-xs text-muted-foreground">Expected: {info.expectedCount}</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Completion</span>
            </div>
            <div className="text-2xl font-bold">0%</div>
            <div className="text-xs text-muted-foreground">0 / {data.length} learned</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Pass Rate</span>
            </div>
            <div className="text-2xl font-bold">{info.passRate}</div>
            <div className="text-xs text-muted-foreground">Official statistics</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Study Time</span>
            </div>
            <div className="text-2xl font-bold">{info.studyHours}</div>
            <div className="text-xs text-muted-foreground">Recommended hours</div>
          </Card>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2 mb-6">
          <div className="flex justify-between text-sm">
            <span>Learning Progress</span>
            <span className="text-muted-foreground">0 / {data.length}</span>
          </div>
          <Progress value={0} className="h-2" />
        </div>

        {/* Skills & Topics */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Main Topics Covered</h3>
            <div className="flex gap-2 flex-wrap">
              {info.topics.map((topic, index) => (
                <Badge key={index} variant="secondary">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Skills Developed</h3>
            <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">{info.skills}</p>
          </div>
        </div>
      </div>

      {/* Navigation between levels */}
      <div className="flex justify-between items-center mb-6">
        <div>
          {jlptLevel < 5 && (
            <Button variant="outline" asChild>
              <Link href={`/jlpt/${jlptLevel + 1}`}>
                <ArrowLeft className="w-4 h-4 mr-2" />N{jlptLevel + 1}
              </Link>
            </Button>
          )}
        </div>

        <h2 className="text-2xl font-semibold">
          All N{jlptLevel} Kanji ({data.length})
        </h2>

        <div>
          {jlptLevel > 1 && (
            <Button variant="outline" asChild>
              <Link href={`/jlpt/${jlptLevel - 1}`}>
                N{jlptLevel - 1}
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Kanji Grid */}
      <Suspense fallback={<KanjiGridSkeleton />}>
        <KanjiGrid data={data} />
      </Suspense>

      {/* JLPT Test Information */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>JLPT N{jlptLevel} Test Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Test Sections:</span>
                <span className="text-sm text-muted-foreground">Language Knowledge, Reading, Listening</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Test Duration:</span>
                <span className="text-sm text-muted-foreground">
                  {jlptLevel === 1 || jlptLevel === 2 ? "170 minutes" : "140 minutes"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Passing Score:</span>
                <span className="text-sm text-muted-foreground">
                  {jlptLevel === 1 ? "100/180" : jlptLevel === 2 ? "90/180" : "95/180"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Next Test:</span>
                <span className="text-sm text-muted-foreground">July & December</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Study Strategy for N{jlptLevel}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium mb-2">Recommended Approach:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Master all kanji readings and meanings</li>
                  <li>• Practice with authentic JLPT materials</li>
                  <li>• Focus on vocabulary and grammar patterns</li>
                  <li>• Take timed practice tests regularly</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Time Allocation:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Kanji: {Math.round(Number.parseInt(info.studyHours.split("-")[0]) * 0.3)}+ hours</li>
                  <li>• Vocabulary: {Math.round(Number.parseInt(info.studyHours.split("-")[0]) * 0.3)}+ hours</li>
                  <li>• Grammar: {Math.round(Number.parseInt(info.studyHours.split("-")[0]) * 0.2)}+ hours</li>
                  <li>• Practice: {Math.round(Number.parseInt(info.studyHours.split("-")[0]) * 0.2)}+ hours</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

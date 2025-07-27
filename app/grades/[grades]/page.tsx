import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, BookOpen, GraduationCap, Search } from "lucide-react"
import Link from "next/link"
import { getKanjiByGrade } from "@/features/dataFetch"
import { AsyncKanjiGrid } from "@/components/kanji-grid-async"
import GradeNotFound from "../../grade-not-found"
import { Metadata } from "next"
import { unstable_noStore as noStore } from "next/cache"

type GradePageProps = {
  params: Promise<{ grades: string }>
}

// Grade information data
const gradeInfo = {
  1: {
    title: "Grade 1 Kanji",
    description: "Basic kanji for everyday objects, numbers, and simple concepts",
    difficulty: "Beginner",
    topics: ["Numbers", "Family", "Body parts", "Nature"],
    color: "bg-green-500",
    expectedCount: 80,
  },
  2: {
    title: "Grade 2 Kanji",
    description: "Building on Grade 1 with more complex everyday vocabulary",
    difficulty: "Beginner",
    topics: ["Time", "Directions", "Animals", "Weather"],
    color: "bg-blue-500",
    expectedCount: 160,
  },
  3: {
    title: "Grade 3 Kanji",
    description: "Introduction to more abstract concepts and compound words",
    difficulty: "Elementary",
    topics: ["School", "Study", "Society", "Science"],
    color: "bg-purple-500",
    expectedCount: 200,
  },
  4: {
    title: "Grade 4 Kanji",
    description: "Advanced elementary kanji with complex meanings",
    difficulty: "Elementary",
    topics: ["Geography", "Government", "History", "Culture"],
    color: "bg-orange-500",
    expectedCount: 202,
  },
  5: {
    title: "Grade 5 Kanji",
    description: "Pre-intermediate kanji for academic and formal contexts",
    difficulty: "Intermediate",
    topics: ["Politics", "Economics", "Statistics", "Media"],
    color: "bg-red-500",
    expectedCount: 193,
  },
  6: {
    title: "Grade 6 Kanji",
    description: "Advanced elementary kanji preparing for junior high school",
    difficulty: "Intermediate",
    topics: ["Law", "Democracy", "Philosophy", "International"],
    color: "bg-indigo-500",
    expectedCount: 191,
  },
  8: {
    title: "Grade 8 Kanji",
    description: "Additional kanji for junior high school level",
    difficulty: "Intermediate",
    topics: ["Advanced concepts", "Specialized vocabulary"],
    color: "bg-gray-500",
    expectedCount: 130,
  },
}

export async function generateMetadata({ params }: GradePageProps): Promise<Metadata> {
  const { grades } = await params
  const gradeNum = Number(grades)

  if (isNaN(gradeNum) || gradeNum < 1 || gradeNum > 8 || gradeNum === 7) {
    return {
      title: "Grade Not Found",
      description: "The requested grade level does not exist. Valid grades are 1-6 and 8.",
    }
  }

  const info = gradeInfo[gradeNum as keyof typeof gradeInfo]
  const data = await getKanjiByGrade(gradeNum)

  return {
    title: `${info.title} - ${data.length} Kanji Characters`,
    description: `Learn ${data.length} Japanese kanji characters from Grade ${gradeNum}. ${info.description} Topics include: ${info.topics.join(", ")}.`,
    keywords: [
      `grade ${gradeNum} kanji`,
      `japanese grade ${gradeNum}`,
      `elementary school kanji grade ${gradeNum}`,
      `${info.difficulty.toLowerCase()} kanji`,
      ...info.topics.map((topic) => `${topic.toLowerCase()} kanji`),
      "japanese education system",
      "joyo kanji",
    ],
    openGraph: {
      title: `${info.title} - ${data.length} Kanji Characters`,
      description: `Learn ${data.length} Japanese kanji characters from Grade ${gradeNum}. ${info.description}`,
      url: `https://kanjimaster.com/grades/${gradeNum}`,
      images: [
        {
          url: `/og-grade-${gradeNum}.png`,
          width: 1200,
          height: 630,
          alt: `Grade ${gradeNum} Japanese Kanji - KanjiMaster`,
        },
      ],
    },
    alternates: {
      canonical: `https://kanjimaster.com/grades/${gradeNum}`,
    },
  }
}

export default async function GradePage({ params }: GradePageProps) {
  // Désactiver le cache pour permettre l'affichage immédiat du header
  noStore()
  
  const { grades } = await params
  const gradeNum = Number(grades)

  if (isNaN(gradeNum) || gradeNum < 1 || gradeNum > 8 || gradeNum === 7) {
    return GradeNotFound()
  }

  const info = gradeInfo[gradeNum as keyof typeof gradeInfo]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span>/</span>
        <Link href="/grades" className="hover:text-foreground">
          Grades
        </Link>
        <span>/</span>
        <span className="text-foreground">Grade {gradeNum}</span>
      </div>

      {/* Back Button */}
      <Button variant="outline" className="mb-6 bg-transparent" asChild>
        <Link href="/grades">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Grades
        </Link>
      </Button>

      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-4 h-4 rounded-full ${info.color}`}></div>
          <Badge variant="outline">{info.difficulty}</Badge>
          <Badge variant="secondary">
            <GraduationCap className="w-3 h-3 mr-1" />
            Elementary School
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
            <div className="text-2xl font-bold">{info.expectedCount}</div>
            <div className="text-xs text-muted-foreground">Kanji in this grade</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Search className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Completion</span>
            </div>
            <div className="text-2xl font-bold">0%</div>
            <div className="text-xs text-muted-foreground">0 / {info.expectedCount} learned</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Difficulty</span>
            </div>
            <div className="text-2xl font-bold">{gradeNum}/6</div>
            <div className="text-xs text-muted-foreground">Grade level</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium">Study Time</span>
            </div>
            <div className="text-2xl font-bold">{Math.ceil(info.expectedCount / 10)}</div>
            <div className="text-xs text-muted-foreground">Days (10/day)</div>
          </Card>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2 mb-6">
          <div className="flex justify-between text-sm">
            <span>Learning Progress</span>
            <span className="text-muted-foreground">0 / {info.expectedCount}</span>
          </div>
          <Progress value={0} className="h-2" />
        </div>

        {/* Topics */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Main Topics Covered</h3>
          <div className="flex gap-2 flex-wrap">
            {info.topics.map((topic, index) => (
              <Badge key={index} variant="secondary">
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation between grades */}
      <div className="flex justify-between items-center mb-6">
        <div>
          {gradeNum > 1 && gradeNum !== 2 && (
            <Button variant="outline" asChild>
              <Link href={`/grades/${gradeNum - 1}`}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Grade {gradeNum - 1}
              </Link>
            </Button>
          )}
          {gradeNum === 2 && (
            <Button variant="outline" asChild>
              <Link href="/grades/1">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Grade 1
              </Link>
            </Button>
          )}
        </div>

        <h2 className="text-2xl font-semibold">All Kanji</h2>

        <div>
          {gradeNum < 6 && (
            <Button variant="outline" asChild>
              <Link href={`/grades/${gradeNum + 1}`}>
                Grade {gradeNum + 1}
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
            </Button>
          )}
          {gradeNum === 6 && (
            <Button variant="outline" asChild>
              <Link href="/grades/8">
                Grade 8
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Kanji Grid - chargé de manière asynchrone */}
      <AsyncKanjiGrid 
        fetchFunction={() => getKanjiByGrade(gradeNum)} 
        fallbackCount={info.expectedCount > 100 ? 100 : info.expectedCount}
      />

      {/* Study Tips */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Study Tips for Grade {gradeNum}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Recommended Approach:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Study 5-10 kanji per day</li>
                <li>• Practice writing each kanji multiple times</li>
                <li>• Learn common readings and meanings</li>
                <li>• Review previously learned kanji regularly</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Focus Areas:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {info.topics.map((topic, index) => (
                  <li key={index}>• {topic}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star, ArrowRight, Trophy, Clock } from "lucide-react"
import Link from "next/link"

// Data for each JLPT level
const jlptLevels = [
  {
    link: "5",
    level: "N5",
    kanjiCount: 79,
    description: "Basic kanji for everyday situations and simple conversations",
    difficulty: "Beginner",
    examples: ["私", "今", "何", "時", "行", "来"],
    color: "bg-green-500",
    topics: ["Daily life", "Time", "Family", "Basic verbs"],
    studyHours: "150-300",
    passRate: "70%",
    skills: "Basic reading of hiragana, katakana, and simple kanji",
  },
  {
    link: "4",
    level: "N4",
    kanjiCount: 166,
    description: "Expanded vocabulary for practical daily communication",
    difficulty: "Elementary",
    examples: ["会", "社", "電", "話", "買", "物"],
    color: "bg-blue-500",
    topics: ["Work", "Shopping", "Transportation", "Health"],
    studyHours: "300-600",
    passRate: "60%",
    skills: "Understanding basic texts and everyday conversations",
  },
  {
    link: "3",
    level: "N3",
    kanjiCount: 367,
    description: "Intermediate kanji for more complex topics and situations",
    difficulty: "Intermediate",
    examples: ["経", "験", "意", "見", "考", "方"],
    color: "bg-yellow-500",
    topics: ["Experience", "Opinions", "Abstract concepts", "Business"],
    studyHours: "450-900",
    passRate: "45%",
    skills: "Comprehending everyday topics and expressing opinions",
  },
  {
    link: "2",
    level: "N2",
    kanjiCount: 367,
    description: "Advanced kanji for academic and professional contexts",
    difficulty: "Upper-Intermediate",
    examples: ["政", "治", "経", "済", "文", "化"],
    color: "bg-orange-500",
    topics: ["Politics", "Economics", "Culture", "Academic texts"],
    studyHours: "600-1200",
    passRate: "35%",
    skills: "Understanding newspapers, magazines, and complex discussions",
  },
  {
    link: "1",
    level: "N1",
    kanjiCount: 1232,
    description: "Mastery level kanji for native-like comprehension",
    difficulty: "Advanced",
    examples: ["哲", "学", "概", "念", "抽", "象"],
    color: "bg-red-500",
    topics: ["Philosophy", "Literature", "Specialized fields", "Abstract concepts"],
    studyHours: "900-1800",
    passRate: "25%",
    skills: "Native-level reading and understanding of complex materials",
  },
]

const totalKanji = jlptLevels.reduce((sum, level) => sum + level.kanjiCount, 0)

export default function JLPTPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">
          <Trophy className="w-4 h-4 mr-2" />
          Japanese Language Proficiency Test
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Learn Kanji by <span className="text-primary">JLPT Level</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Prepare for the Japanese Language Proficiency Test with kanji organized by official JLPT levels. From beginner
          N5 to advanced N1, master the kanji you need for each certification level.
        </p>

        {/* Stats */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{totalKanji}</div>
            <div className="text-sm text-muted-foreground">Total Kanji</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">5</div>
            <div className="text-sm text-muted-foreground">JLPT Levels</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">2x</div>
            <div className="text-sm text-muted-foreground">Tests per Year</div>
          </div>
        </div>
      </div>

      {/* JLPT Levels Grid */}
      <div className="grid gap-6 lg:grid-cols-1 xl:grid-cols-2 mb-12">
        {jlptLevels.map((levelData) => (
          <Card key={levelData.level} className="relative overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="text-xs">
                  {levelData.difficulty}
                </Badge>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Pass Rate: {levelData.passRate}
                  </Badge>
                  <div className={`w-3 h-3 rounded-full ${levelData.color}`}></div>
                </div>
              </div>
              <CardTitle className="text-3xl">
                JLPT {levelData.level}
                <span className="text-lg font-normal text-muted-foreground ml-2">({levelData.kanjiCount} kanji)</span>
              </CardTitle>
              <CardDescription className="text-sm">{levelData.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Example Kanji */}
              <div>
                <div className="text-sm font-medium mb-2">Example Kanji:</div>
                <div className="flex gap-2 flex-wrap">
                  {levelData.examples.map((kanji, index) => (
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

              {/* Skills & Topics */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium mb-2">Main Topics:</div>
                  <div className="flex gap-1 flex-wrap">
                    {levelData.topics.map((topic, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
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
                  <div className="text-sm text-muted-foreground">{levelData.studyHours} hours</div>
                </div>
              </div>

              {/* Skills Description */}
              <div>
                <div className="text-sm font-medium mb-2">Key Skills:</div>
                <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">{levelData.skills}</div>
              </div>

              {/* Progress indicator */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Completion</span>
                  <span className="text-muted-foreground">0/{levelData.kanjiCount}</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>

              {/* Action Button */}
              <Button className="w-full" asChild>
                <Link href={`/jlpt/${levelData.link}`}>
                  Study JLPT {levelData.level}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Test Information Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            JLPT Test Information
          </CardTitle>
          <CardDescription>Important details about the Japanese Language Proficiency Test</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-3">Test Schedule</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Test Dates:</span>
                  <span className="text-muted-foreground">July & December</span>
                </div>
                <div className="flex justify-between">
                  <span>Registration:</span>
                  <span className="text-muted-foreground">March-April & August-September</span>
                </div>
                <div className="flex justify-between">
                  <span>Results:</span>
                  <span className="text-muted-foreground">2 months after test</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Test Structure</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Language Knowledge:</span>
                  <span className="text-muted-foreground">Vocabulary & Grammar</span>
                </div>
                <div className="flex justify-between">
                  <span>Reading:</span>
                  <span className="text-muted-foreground">Comprehension</span>
                </div>
                <div className="flex justify-between">
                  <span>Listening:</span>
                  <span className="text-muted-foreground">Audio comprehension</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Learning Strategy Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            JLPT Study Strategy
          </CardTitle>
          <CardDescription>Effective approaches for JLPT preparation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-primary mb-2">1</div>
              <div className="font-medium mb-1">Choose Your Level</div>
              <div className="text-sm text-muted-foreground">
                Start with N5 if you're a beginner, or choose based on your current ability
              </div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-primary mb-2">2</div>
              <div className="font-medium mb-1">Focus on Kanji</div>
              <div className="text-sm text-muted-foreground">
                Master the kanji for your target level before moving to the next
              </div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-primary mb-2">3</div>
              <div className="font-medium mb-1">Practice Tests</div>
              <div className="text-sm text-muted-foreground">
                Take practice tests to familiarize yourself with the format
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Level Comparison */}
      <div className="grid gap-4 md:grid-cols-5 text-center">
        {jlptLevels.map((level) => (
          <Card key={level.level} className="p-4">
            <div className="text-2xl font-bold text-primary">{level.level}</div>
            <div className="text-sm text-muted-foreground">{level.kanjiCount} kanji</div>
            <div className="text-xs text-muted-foreground mt-1">{level.passRate} pass rate</div>
          </Card>
        ))}
      </div>
    </div>
  )
}

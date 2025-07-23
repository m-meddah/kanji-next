import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, GraduationCap, Star, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Learn Japanese Kanji Systematically",
  description:
    "Master Japanese kanji with our comprehensive database of 2,136 Joyo kanji. Learn by grade level (1-6), JLPT preparation (N5-N1), or browse the complete list. Free educational resource.",
  keywords: [
    "Japanese kanji learning",
    "Joyo kanji database",
    "JLPT kanji preparation",
    "Japanese grade school kanji",
    "kanji by grade level",
    "Japanese language education",
    "free kanji resources",
    "kanji meanings and readings",
  ],
  openGraph: {
    title: "KanjiMaster - Learn Japanese Kanji Systematically",
    description:
      "Master Japanese kanji with our comprehensive database of 2,136 Joyo kanji. Learn by grade level, JLPT preparation, or browse the complete list.",
    url: "https://kanjimaster.com",
    images: [
      {
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "KanjiMaster Homepage - Japanese Kanji Learning",
      },
    ],
  },
  alternates: {
    canonical: "https://kanjimaster.com",
  },
}

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 mx-auto">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit">
                    <Zap className="w-3 h-3 mr-1" />
                    Complete Kanji Database
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Master Japanese Kanji
                    <span className="text-primary"> Systematically</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Explore and learn all Japanese kanji organized by school grade, JLPT levels, and the complete Joyo
                    kanji list. Your comprehensive resource for kanji mastery.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/grades">
                      Start Learning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/joyo">Browse All Kanji</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>2,136 Joyo Kanji</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GraduationCap className="h-4 w-4" />
                    <span>6 Grade Levels</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>5 JLPT Levels</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
                  <Card className="relative w-full max-w-sm">
                    <Link href="/kanji/学" className="block">
                    <CardHeader className="text-center">
                      <div className="text-6xl font-kanji font-bold text-primary mb-2">学</div>
                      <CardTitle>Study</CardTitle>
                      <CardDescription>Grade 1 • JLPT N5 • 8 strokes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="text-sm">
                          <span className="font-medium">Meanings:</span> study, learning, science
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Readings:</span> <span className="font-kanji">ガク</span>, <span className="font-kanji">まな-ぶ</span>
                        </div>
                      </div>
                    </CardContent>
                    </Link>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline">Features</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Learn Kanji Your Way</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Multiple pathways to explore and master Japanese kanji, organized by difficulty and educational
                  standards.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <GraduationCap className="h-10 w-10 text-primary" />
                  <CardTitle>Learn by Grade</CardTitle>
                  <CardDescription>
                    Follow the Japanese education system with kanji organized by elementary school grades 1-6.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/grade">
                      Browse Grades
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader>
                  <Star className="h-10 w-10 text-primary" />
                  <CardTitle>JLPT Levels</CardTitle>
                  <CardDescription>
                    Study kanji according to Japanese Language Proficiency Test levels N5 through N1.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/jlpt">
                      View JLPT Levels
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-primary" />
                  <CardTitle>Complete Joyo List</CardTitle>
                  <CardDescription>
                    Access all 2,136 kanji from the official Japanese Joyo kanji list in one comprehensive database.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/joyo">
                      Explore All Kanji
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary">Comprehensive Database</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Everything You Need to Learn Kanji
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our database includes detailed information for every kanji, including stroke order, readings,
                    meanings, and usage examples.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">2,136</div>
                    <div className="text-sm text-muted-foreground">Total Joyo Kanji</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">6</div>
                    <div className="text-sm text-muted-foreground">Grade Levels</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">5</div>
                    <div className="text-sm text-muted-foreground">JLPT Levels</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Coverage</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  <Card className="text-center p-4">
                    <div className="text-3xl font-kanji font-bold mb-2">水</div>
                    <div className="text-xs text-muted-foreground">Grade 1</div>
                  </Card>
                  <Card className="text-center p-4">
                    <div className="text-3xl font-kanji font-bold mb-2">火</div>
                    <div className="text-xs text-muted-foreground">Grade 1</div>
                  </Card>
                  <Card className="text-center p-4">
                    <div className="text-3xl font-kanji font-bold mb-2">木</div>
                    <div className="text-xs text-muted-foreground">Grade 1</div>
                  </Card>
                  <Card className="text-center p-4">
                    <div className="text-3xl font-kanji font-bold mb-2">金</div>
                    <div className="text-xs text-muted-foreground">Grade 1</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Start Your Kanji Journey Today
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Whether you're a beginner starting with Grade 1 kanji or preparing for JLPT N1, we have the resources
                  you need.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/grade">
                    Start with Grade 1
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/jlpt">Choose JLPT Level</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      
    </div>
  )
}

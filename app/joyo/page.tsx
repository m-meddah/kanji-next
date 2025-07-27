import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, GraduationCap, Calendar, Users, Search } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"
import { getJoyoKanji } from "@/features/dataFetch"
import { AsyncKanjiGrid } from "@/components/kanji-grid-async"
import { unstable_noStore as noStore } from "next/cache"


export default async function JoyoPage() {
  // Désactiver le cache pour permettre l'affichage immédiat du header
  noStore()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span>/</span>
        <span className="text-foreground">Joyo Kanji</span>
      </div>

      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Badge variant="secondary">
            <BookOpen className="w-3 h-3 mr-1" />
            Official List
          </Badge>
          <Badge variant="outline">
            <Calendar className="w-3 h-3 mr-1" />
            Est. 1946
          </Badge>
          <Badge variant="outline">
            <Users className="w-3 h-3 mr-1" />
            All Students
          </Badge>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Complete <span className="text-primary">Joyo Kanji</span> List
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-4xl">
          The official list of 2,136 kanji characters taught in Japanese elementary and secondary schools. These are the
          essential kanji that every Japanese student learns and forms the foundation of Japanese literacy.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Total Kanji</span>
            </div>
            <div className="text-2xl font-bold">2,136</div>
            <div className="text-xs text-muted-foreground">Official Joyo list</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Grade Levels</span>
            </div>
            <div className="text-2xl font-bold">1-6</div>
            <div className="text-xs text-muted-foreground">Elementary school</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Coverage</span>
            </div>
            <div className="text-2xl font-bold">99%</div>
            <div className="text-xs text-muted-foreground">Daily use kanji</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Last Updated</span>
            </div>
            <div className="text-2xl font-bold">2010</div>
            <div className="text-xs text-muted-foreground">Latest revision</div>
          </Card>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2 mb-8">
          <div className="flex justify-between text-sm">
            <span>Learning Progress</span>
            <span className="text-muted-foreground">0 / 2,136</span>
          </div>
          <Progress value={0} className="h-2" />
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <Card className="p-4 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              By Grade Level
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground mb-3">Study kanji in the order taught in Japanese schools</p>
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <Link href="/grades">Browse by Grade</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="p-4 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              By JLPT Level
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground mb-3">
              Organize your study by Japanese proficiency test levels
            </p>
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <Link href="/jlpt">Browse by JLPT</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="p-4 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Search className="w-5 h-5 text-primary" />
              Search Kanji
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground mb-3">Find specific kanji by reading, meaning, or radical</p>
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <Link href="/search">Search Kanji</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">All Joyo Kanji (2,136)</h2>
        <div className="flex gap-2">
          {/* <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button> */}
        </div>
      </div>

      {/* Kanji Grid - chargé de manière asynchrone */}
      <AsyncKanjiGrid 
        fetchFunction={getJoyoKanji} 
        fallbackCount={100}
      />

      {/* Information Sections */}
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <Card>
          <CardHeader>
            <CardTitle>About Joyo Kanji</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <p>
                The Joyo kanji (常用漢字) is the official list of kanji characters taught in Japanese schools.
                Established in 1946 and last updated in 2010, it contains 2,136 characters.
              </p>
              <p>
                These kanji are considered essential for functional literacy in Japanese and cover approximately 99% of
                the kanji used in newspapers, magazines, and everyday written communication.
              </p>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Key Facts:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Taught from Grade 1 through high school</li>
                  <li>• Required for Japanese citizenship test</li>
                  <li>• Foundation for JLPT kanji selection</li>
                  <li>• Used in official government documents</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Study Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <p>
                Learning all Joyo kanji is a significant undertaking that requires systematic approach and consistent
                practice over several years.
              </p>
              <div>
                <h4 className="font-medium mb-2">Recommended Study Path:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Start with Grade 1-6 kanji (1,026 characters)</li>
                  <li>• Progress to secondary school kanji (1,110 characters)</li>
                  <li>• Study 10-15 kanji per day consistently</li>
                  <li>• Review previously learned kanji regularly</li>
                  <li>• Practice reading in context with real texts</li>
                </ul>
              </div>
              <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                <p className="text-xs">
                  <strong>Estimated Time:</strong> 2-4 years of consistent daily study to master all Joyo kanji
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Grade Distribution */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Distribution by Grade Level</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { grade: "1", count: 80, color: "bg-green-500" },
              { grade: "2", count: 160, color: "bg-blue-500" },
              { grade: "3", count: 200, color: "bg-purple-500" },
              { grade: "4", count: 202, color: "bg-orange-500" },
              { grade: "5", count: 193, color: "bg-red-500" },
              { grade: "6", count: 191, color: "bg-indigo-500" },
              { grade: "Jr.High", count: 1110, color: "bg-gray-500" },
            ].map((item) => (
              <div key={item.grade} className="text-center">
                <div className={`w-full h-2 ${item.color} rounded-full mb-2`}></div>
                <div className="text-sm font-medium">Grade {item.grade}</div>
                <div className="text-xs text-muted-foreground">{item.count} kanji</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ArrowLeft, Search, BookOpen, Home, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function KanjiNotFound() {
  const popularKanji = [
    { kanji: "水", reading: "sui/mizu", meaning: "water", grade: 1 },
    { kanji: "火", reading: "ka/hi", meaning: "fire", grade: 1 },
    { kanji: "木", reading: "moku/ki", meaning: "tree", grade: 1 },
    { kanji: "金", reading: "kin/kane", meaning: "gold/money", grade: 1 },
    { kanji: "土", reading: "do/tsuchi", meaning: "earth/soil", grade: 1 },
    { kanji: "人", reading: "jin/hito", meaning: "person", grade: 1 },
    { kanji: "大", reading: "dai/ō", meaning: "big", grade: 1 },
    { kanji: "小", reading: "shō/chii", meaning: "small", grade: 1 },
  ]

  const searchTips = [
    "Make sure you're using a valid kanji character",
    "Check if the character is copied correctly",
    "Some characters might look similar but are different",
    "Try searching by reading or meaning instead",
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span>/</span>
        <Link href="/kanji" className="hover:text-foreground">
          Kanji
        </Link>
        <span>/</span>
        <span className="text-foreground">Not Found</span>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        {/* Error Icon and Message */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Kanji <span className="text-red-600">Not Found</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-2">Sorry! The kanji you're looking for doesn't exist in our database.</p>
          <p className="text-muted-foreground">
            Our database contains 2,136 Jōyō kanji taught in Japanese schools.
          </p>
        </div>

        {/* Search Tips */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              Search Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-left space-y-3">
              {searchTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">{tip}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Popular Kanji Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Search className="w-5 h-5 text-primary" />
              Try These Popular Kanji
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {popularKanji.map((item) => (
                <Link key={item.kanji} href={`/kanji/${item.kanji}`}>
                  <Card className="hover:shadow-md transition-all duration-200 hover:scale-105 cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-kanji mb-2">{item.kanji}</div>
                      <div className="text-xs text-muted-foreground mb-1">{item.reading}</div>
                      <div className="text-xs font-medium mb-2">{item.meaning}</div>
                      <Badge variant="secondary" className="text-xs">
                        Grade {item.grade}
                      </Badge>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alternative Search Methods */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <div className="font-medium">Browse by Grade</div>
                <div className="text-xs text-muted-foreground">Systematic learning</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Start with Grade 1 kanji and work your way up through the school curriculum.
            </p>
            <Button variant="outline" size="sm" asChild className="w-full">
              <Link href="/grades">Browse Grades</Link>
            </Button>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Search className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <div className="font-medium">Search by Reading</div>
                <div className="text-xs text-muted-foreground">Find by pronunciation</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Know how a kanji is pronounced? Search by its reading instead.
            </p>
            <Button variant="outline" size="sm" asChild className="w-full">
              <Link href="/readings">Browse Readings</Link>
            </Button>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" asChild>
            <Link href="/joyo">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Browse All Kanji
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/grades/1">
              <BookOpen className="w-4 h-4 mr-2" />
              Start with Grade 1
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
        </div>

        {/* Help Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              About Jōyō Kanji
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-left space-y-4">
              <div>
                <h4 className="font-medium mb-2">What are Jōyō Kanji?</h4>
                <p className="text-sm text-muted-foreground">
                  Jōyō kanji (常用漢字) are the 2,136 kanji characters designated by the Japanese Ministry of Education 
                  for daily use. These are taught in elementary and junior high schools and are considered essential 
                  for basic literacy in Japanese.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Coverage</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between">
                    <span>Elementary (Grades 1-6):</span>
                    <span className="text-muted-foreground">1,026 kanji</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Junior High (Grade 8):</span>
                    <span className="text-muted-foreground">1,110 kanji</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Not Finding a Character?</h4>
                <p className="text-sm text-muted-foreground">
                  If you can't find a specific kanji, it might not be part of the Jōyō list. Some characters are 
                  used in Japanese but are not considered essential for basic education.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Message */}
        <div className="mt-8 text-sm text-muted-foreground">
          <p>
            Still having trouble finding what you're looking for?{" "}
            <Link href="/about" className="text-primary hover:underline">
              Learn more about our database
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact us
            </Link>{" "}
            for help.
          </p>
        </div>
      </div>
    </div>
  )
}
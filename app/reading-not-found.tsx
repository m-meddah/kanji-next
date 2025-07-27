import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ArrowLeft, Volume2, BookOpen, Home, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function ReadingNotFound() {
  const popularReadings = [
    { reading: "あい", type: "kun", examples: ["愛"], meaning: "love" },
    { reading: "かん", type: "on", examples: ["感", "漢"], meaning: "feeling, Chinese" },
    { reading: "せい", type: "on", examples: ["生", "正"], meaning: "life, correct" },
    { reading: "しん", type: "on", examples: ["心", "新"], meaning: "heart, new" },
    { reading: "ひと", type: "kun", examples: ["人"], meaning: "person" },
    { reading: "みず", type: "kun", examples: ["水"], meaning: "water" },
    { reading: "でん", type: "on", examples: ["電", "田"], meaning: "electricity, field" },
    { reading: "がく", type: "on", examples: ["学", "楽"], meaning: "study, music" },
  ]

  const readingTypes = [
    {
      type: "On'yomi (音読み)",
      description: "Chinese-derived readings",
      examples: ["カン", "セイ", "シン"],
      color: "bg-blue-500",
      badge: "ON"
    },
    {
      type: "Kun'yomi (訓読み)",
      description: "Native Japanese readings",
      examples: ["あい", "ひと", "みず"],
      color: "bg-green-500",
      badge: "KUN"
    },
    {
      type: "Nanori (名乗り)",
      description: "Name readings",
      examples: ["あき", "みち", "かず"],
      color: "bg-purple-500",
      badge: "NAME"
    }
  ]

  const searchTips = [
    "Check your hiragana spelling - readings are case-sensitive",
    "Try shorter or longer versions (e.g., 'か' vs 'かん')",
    "Some readings might be written in katakana for on'yomi",
    "Consider that one kanji can have multiple readings",
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span>/</span>
        <Link href="/readings" className="hover:text-foreground">
          Readings
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
            Reading <span className="text-red-600">Not Found</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-2">Sorry! We couldn't find any kanji with that reading.</p>
          <p className="text-muted-foreground">
            Try checking the spelling or explore our collection of common readings below.
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

        {/* Reading Types Explanation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Volume2 className="w-5 h-5 text-primary" />
              Types of Readings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {readingTypes.map((type, index) => (
                <div key={index} className="text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className={`text-white ${type.color}`}>
                      {type.badge}
                    </Badge>
                    <h4 className="font-medium text-sm">{type.type}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{type.description}</p>
                  <div className="text-xs space-y-1">
                    {type.examples.map((example, i) => (
                      <div key={i} className="font-kanji bg-gray-50 px-2 py-1 rounded">
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Popular Readings Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Volume2 className="w-5 h-5 text-primary" />
              Try These Popular Readings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {popularReadings.map((item, index) => (
                <Link key={index} href={`/readings/${item.reading}`}>
                  <Card className="hover:shadow-md transition-all duration-200 hover:scale-105 cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <div className="text-lg font-kanji mb-2">{item.reading}</div>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs mb-2 ${item.type === 'on' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}
                      >
                        {item.type === 'on' ? 'ON' : 'KUN'}
                      </Badge>
                      <div className="text-xs text-muted-foreground mb-1">
                        {item.examples.map((kanji, i) => (
                          <span key={i} className="font-kanji mx-1">{kanji}</span>
                        ))}
                      </div>
                      <div className="text-xs font-medium">{item.meaning}</div>
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
                <div className="font-medium">Browse by Kanji</div>
                <div className="text-xs text-muted-foreground">Find readings within kanji</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Look up individual kanji to see all their possible readings and meanings.
            </p>
            <Button variant="outline" size="sm" asChild className="w-full">
              <Link href="/joyo">Browse Kanji</Link>
            </Button>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Volume2 className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <div className="font-medium">All Readings</div>
                <div className="text-xs text-muted-foreground">Complete reading index</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Browse our complete collection of kanji readings organized alphabetically.
            </p>
            <Button variant="outline" size="sm" asChild className="w-full">
              <Link href="/readings">All Readings</Link>
            </Button>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" asChild>
            <Link href="/readings">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Readings
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/readings/あ">
              <Volume2 className="w-4 h-4 mr-2" />
              Start with '<span className="font-kanji">あ</span>'
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
              Understanding Kanji Readings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-left space-y-4">
              <div>
                <h4 className="font-medium mb-2">Why Do Kanji Have Multiple Readings?</h4>
                <p className="text-sm text-muted-foreground">
                  Kanji were borrowed from Chinese but adapted to fit Japanese pronunciation. This resulted in 
                  two main types of readings: on'yomi (based on Chinese pronunciation) and kun'yomi (native Japanese pronunciation).
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Reading Guidelines</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5 text-xs bg-blue-50">ON</Badge>
                    <span>Used in compound words (2+ kanji together)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5 text-xs bg-green-50">KUN</Badge>
                    <span>Used when kanji stands alone or with hiragana</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5 text-xs bg-purple-50">NAME</Badge>
                    <span>Special readings used in personal names</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Search Tips</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Use hiragana for kun'yomi (e.g., <span className="font-kanji">あい, みず</span>)</li>
                  <li>• You can use katakana for on'yomi (e.g., <span className="font-kanji">カン, セイ</span>)</li>
                  <li>• Try both long and short vowels (e.g., <span className="font-kanji">かん</span> vs <span className="font-kanji">か</span>)</li>
                  <li>• Some readings may include particle sounds</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Message */}
        <div className="mt-8 text-sm text-muted-foreground">
          <p>
            Want to learn more about Japanese readings?{" "}
            <Link href="/about" className="text-primary hover:underline">
              Visit our About page
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact us
            </Link>{" "}
            for guidance.
          </p>
        </div>
      </div>
    </div>
  )
}
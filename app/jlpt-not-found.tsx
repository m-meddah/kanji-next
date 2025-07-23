import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ArrowLeft, Star, BookOpen, Home } from "lucide-react"
import Link from "next/link"

export default function JLPTNotFound() {
  const validLevels = [
    { level: "N5", description: "Beginner", color: "bg-green-500" },
    { level: "N4", description: "Elementary", color: "bg-blue-500" },
    { level: "N3", description: "Intermediate", color: "bg-yellow-500" },
    { level: "N2", description: "Upper-Intermediate", color: "bg-orange-500" },
    { level: "N1", description: "Advanced", color: "bg-red-500" },
  ]

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
        <span className="text-foreground">Not Found</span>
      </div>

      <div className="max-w-2xl mx-auto text-center">
        {/* Error Icon and Message */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            JLPT Level <span className="text-red-600">Not Found</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-2">Oops! The JLPT level you're looking for doesn't exist.</p>
          <p className="text-muted-foreground">JLPT levels range from N5 (beginner) to N1 (advanced).</p>
        </div>

        {/* Valid Levels */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              Valid JLPT Levels
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {validLevels.map((level) => (
                <Link key={level.level} href={`/jlpt/${level.level.toLowerCase().replace("n", "")}`}>
                  <Card className="hover:shadow-md transition-all duration-200 hover:scale-105 cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <div className={`w-3 h-3 rounded-full ${level.color} mx-auto mb-2`}></div>
                      <div className="font-bold text-lg">{level.level}</div>
                      <div className="text-xs text-muted-foreground">{level.description}</div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Info */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">N5</span>
              </div>
              <div>
                <div className="font-medium">Start Here</div>
                <div className="text-xs text-muted-foreground">Beginner level</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              New to Japanese? Start with N5 to learn basic kanji and vocabulary.
            </p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-sm">N1</span>
              </div>
              <div>
                <div className="font-medium">Ultimate Goal</div>
                <div className="text-xs text-muted-foreground">Advanced level</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              N1 represents near-native proficiency with complex kanji and grammar.
            </p>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" asChild>
            <Link href="/jlpt">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to JLPT Levels
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/jlpt/5">
              <Star className="w-4 h-4 mr-2" />
              Start with N5
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
              Need Help Choosing?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-left space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-0.5">
                  N5-N4
                </Badge>
                <div>
                  <div className="font-medium">Beginner</div>
                  <div className="text-sm text-muted-foreground">
                    Basic conversations, simple texts, everyday situations
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-0.5">
                  N3
                </Badge>
                <div>
                  <div className="font-medium">Intermediate</div>
                  <div className="text-sm text-muted-foreground">Complex topics, opinions, abstract concepts</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-0.5">
                  N2-N1
                </Badge>
                <div>
                  <div className="font-medium">Advanced</div>
                  <div className="text-sm text-muted-foreground">
                    Academic texts, professional contexts, native-level materials
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Message */}
        <div className="mt-8 text-sm text-muted-foreground">
          <p>
            Still having trouble? Check out our{" "}
            <Link href="/about" className="text-primary hover:underline">
              About page
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

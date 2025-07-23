import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ArrowLeft, GraduationCap, BookOpen, Home } from "lucide-react"
import Link from "next/link"

export default function GradeNotFound() {
  const validGrades = [
    { grade: "1", description: "Basic kanji", color: "bg-green-500", count: 80 },
    { grade: "2", description: "Everyday vocabulary", color: "bg-blue-500", count: 160 },
    { grade: "3", description: "Abstract concepts", color: "bg-purple-500", count: 200 },
    { grade: "4", description: "Complex meanings", color: "bg-orange-500", count: 200 },
    { grade: "5", description: "Academic contexts", color: "bg-red-500", count: 185 },
    { grade: "6", description: "Advanced elementary", color: "bg-indigo-500", count: 181 },
    { grade: "8", description: "Junior high school", color: "bg-gray-500", count: 1134 },
  ]

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
        <span className="text-foreground">Not Found</span>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        {/* Error Icon and Message */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Grade <span className="text-red-600">Not Found</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-2">Oops! The grade level you're looking for doesn't exist.</p>
          <p className="text-muted-foreground">
            Valid grades are 1-6 (elementary school) and 8 (junior high school additional kanji).
          </p>
        </div>

        {/* Valid Grades */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Valid Grade Levels
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
              {validGrades.map((grade) => (
                <Link key={grade.grade} href={`/grades/${grade.grade}`}>
                  <Card className="hover:shadow-md transition-all duration-200 hover:scale-105 cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <div className={`w-3 h-3 rounded-full ${grade.color} mx-auto mb-2`}></div>
                      <div className="font-bold text-lg">Grade {grade.grade}</div>
                      <div className="text-xs text-muted-foreground mb-1">{grade.count} kanji</div>
                      <div className="text-xs text-muted-foreground">{grade.description}</div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Info */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">1</span>
              </div>
              <div>
                <div className="font-medium">Start Here</div>
                <div className="text-xs text-muted-foreground">First grade</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Begin with Grade 1 to learn the most basic and essential kanji characters.
            </p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 font-bold text-sm">6</span>
              </div>
              <div>
                <div className="font-medium">Elementary Complete</div>
                <div className="text-xs text-muted-foreground">Sixth grade</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Grade 6 completes elementary education with advanced kanji preparation for junior high.
            </p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-bold text-sm">8</span>
              </div>
              <div>
                <div className="font-medium">Beyond Elementary</div>
                <div className="text-xs text-muted-foreground">Junior high</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Grade 8 includes additional kanji taught in junior high school level.
            </p>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" asChild>
            <Link href="/grades">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Grades
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/grades/1">
              <GraduationCap className="w-4 h-4 mr-2" />
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
              Understanding the Grade System
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-left space-y-4">
              <div>
                <h4 className="font-medium mb-2">Elementary School (Grades 1-6)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Japanese students learn 1,026 kanji during their six years of elementary school. Each grade introduces
                  new characters building upon previous knowledge.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span>Grade 1:</span>
                    <span className="text-muted-foreground">80 kanji</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Grade 2:</span>
                    <span className="text-muted-foreground">160 kanji</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Grade 3:</span>
                    <span className="text-muted-foreground">200 kanji</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Grade 4:</span>
                    <span className="text-muted-foreground">200 kanji</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Grade 5:</span>
                    <span className="text-muted-foreground">185 kanji</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Grade 6:</span>
                    <span className="text-muted-foreground">181 kanji</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-2">Why No Grade 7?</h4>
                <p className="text-sm text-muted-foreground">
                  In the Japanese education system, students move directly from Grade 6 (elementary) to junior high
                  school. Grade 8 represents additional kanji taught at the junior high level.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Message */}
        <div className="mt-8 text-sm text-muted-foreground">
          <p>
            Want to learn more about the Japanese education system?{" "}
            <Link href="/about" className="text-primary hover:underline">
              Visit our About page
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact us
            </Link>{" "}
            for more information.
          </p>
        </div>
      </div>
    </div>
  )
}

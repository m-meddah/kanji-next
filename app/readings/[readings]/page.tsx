import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Volume2, BookOpen, Search } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"
import { getKanjiByReading } from "@/features/dataFetch"

type ReadingPageProps = {
  params: { readings: string }
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

export default async function ReadingPage({ params }: ReadingPageProps) {
  const reading = decodeURIComponent(params.readings)
  const data = await getKanjiByReading(reading)

  // Determine reading type based on character range
  const getReadingType = (reading: string) => {
    const hiraganaRegex = /[\u3040-\u309F]/
    const katakanaRegex = /[\u30A0-\u30FF]/

    if (hiraganaRegex.test(reading)) return "kun"
    if (katakanaRegex.test(reading)) return "on"
    return "mixed"
  }

  const readingType = getReadingType(reading)
  const readingTypeInfo = {
    kun: { label: "Kun'yomi", description: "Japanese reading", color: "bg-blue-500" },
    on: { label: "On'yomi", description: "Chinese reading", color: "bg-red-500" },
    mixed: { label: "Mixed", description: "Mixed reading", color: "bg-purple-500" },
  }

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
        <span className="text-foreground">{reading}</span>
      </div>

      {/* Back Button */}
      <Button variant="outline" className="mb-6 bg-transparent" asChild>
        <Link href="/readings">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Reading Search
        </Link>
      </Button>

      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-4 h-4 rounded-full ${readingTypeInfo[readingType].color}`}></div>
          <Badge variant="outline">{readingTypeInfo[readingType].label}</Badge>
          <Badge variant="secondary">
            <Volume2 className="w-3 h-3 mr-1" />
            {readingTypeInfo[readingType].description}
          </Badge>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Kanji with reading <span className="text-primary font-mono">{reading}</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl">
          {data.length > 0
            ? `Found ${data.length} kanji character${data.length === 1 ? "" : "s"} with the reading "${reading}"`
            : `No kanji found with the reading "${reading}"`}
        </p>

        {/* Stats Cards */}
        {data.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Total Kanji</span>
                </div>
                <div className="text-2xl font-bold">{data.length}</div>
                <div className="text-xs text-muted-foreground">Found with this reading</div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Volume2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Reading Type</span>
                </div>
                <div className="text-2xl font-bold">{readingTypeInfo[readingType].label}</div>
                <div className="text-xs text-muted-foreground">{readingTypeInfo[readingType].description}</div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Search className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Completion</span>
                </div>
                <div className="text-2xl font-bold">0%</div>
                <div className="text-xs text-muted-foreground">0 / {data.length} learned</div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium">Characters</span>
                </div>
                <div className="text-2xl font-bold">{reading.length}</div>
                <div className="text-xs text-muted-foreground">In this reading</div>
              </Card>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2 mb-8">
              <div className="flex justify-between text-sm">
                <span>Learning Progress</span>
                <span className="text-muted-foreground">0 / {data.length}</span>
              </div>
              <Progress value={0} className="h-2" />
            </div>
          </>
        )}
      </div>

      {/* Results */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          {data.length > 0 ? `All Kanji with reading "${reading}" (${data.length})` : "No Results Found"}
        </h2>
      </div>

      {/* Kanji Grid or No Results */}
      {data.length > 0 ? (
        <Suspense fallback={<KanjiGridSkeleton />}>
          <KanjiGrid data={data} />
        </Suspense>
      ) : (
        <Card className="text-center py-12">
          <CardContent>
            <Volume2 className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <h3 className="text-xl font-semibold mb-2">No kanji found</h3>
            <p className="text-muted-foreground mb-6">
              No kanji were found with the reading "{reading}". This could mean:
            </p>
            <ul className="text-sm text-muted-foreground text-left max-w-md mx-auto space-y-1 mb-6">
              <li>• The reading might be spelled differently</li>
              <li>• It might be a less common reading</li>
              <li>• Try searching for a shorter or longer version</li>
              <li>• Check if you're using the correct kana type</li>
            </ul>
            <Button asChild>
              <Link href="/readings">
                <Search className="w-4 h-4 mr-2" />
                Try Another Search
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Study Tips */}
      {data.length > 0 && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Study Tips for "{reading}" Reading</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Learning Strategy:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Study all kanji with this reading together</li>
                  <li>• Look for patterns in meanings or radicals</li>
                  <li>• Practice writing each kanji multiple times</li>
                  <li>• Create example sentences using these kanji</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Reading Type: {readingTypeInfo[readingType].label}</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {readingType === "kun" && (
                    <>
                      <li>• This is a Japanese (kun) reading</li>
                      <li>• Often used when kanji stands alone</li>
                      <li>• May have okurigana (hiragana endings)</li>
                    </>
                  )}
                  {readingType === "on" && (
                    <>
                      <li>• This is a Chinese (on) reading</li>
                      <li>• Often used in compound words</li>
                      <li>• Usually written in katakana</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

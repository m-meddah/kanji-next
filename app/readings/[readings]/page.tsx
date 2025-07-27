import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Volume2, BookOpen, Search } from "lucide-react"
import Link from "next/link"
import { getKanjiByReading } from "@/features/dataFetch"
import { AsyncKanjiGrid } from "@/components/kanji-grid-async"
import { Metadata } from "next"
import { unstable_noStore as noStore } from "next/cache"
import ReadingNotFound from "../../reading-not-found"

type ReadingPageProps = {
  params: Promise<{ readings: string }>
}

export async function generateMetadata(
  { params }: ReadingPageProps
): Promise<Metadata> {
  const { readings } = await params
  const reading = await decodeURIComponent(readings)
  
  try {
    // Test if the reading exists by trying to fetch kanji
    await getKanjiByReading(reading)
    
    return {
      title: `Kanji with reading ${reading}`,
      description: `Explore kanji characters with the reading "${reading}"`,
      keywords: [`kanji`, `reading`, reading],
      openGraph: {
        title: `Kanji with reading ${reading}`,
        description: `Explore kanji characters with the reading "${reading}"`,
        url: `/readings/${readings}`,
      },
      alternates: {
        canonical: `https://kanjimaster.com/readings/${readings}`,
      },
    }
  } catch (error) {
    return {
      title: "Reading Not Found",
      description: "The requested reading does not exist in our database.",
    }
  }
}

export default async function ReadingPage({ params }: ReadingPageProps) {
  // Désactiver le cache pour permettre l'affichage immédiat du header
  noStore()
  
  const { readings } = await params
  const reading = await decodeURIComponent(readings)

  // Test if the reading exists
  try {
    await getKanjiByReading(reading)
  } catch (error) {
    return ReadingNotFound()
  }

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
        <span className="text-foreground font-kanji">{reading}</span>
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
          Kanji with reading <span className="text-primary font-kanji">{reading}</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl">
          Explore kanji characters with the reading "{reading}"
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Reading Type</span>
            </div>
            <div className="text-2xl font-bold">{readingTypeInfo[readingType].label}</div>
            <div className="text-xs text-muted-foreground">{readingTypeInfo[readingType].description}</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Volume2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Characters</span>
            </div>
            <div className="text-2xl font-bold">{reading.length}</div>
            <div className="text-xs text-muted-foreground">In this reading</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Search className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Search</span>
            </div>
            <div className="text-2xl font-bold">Active</div>
            <div className="text-xs text-muted-foreground">Finding matches</div>
          </Card>
        </div>
      </div>

      {/* Results */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          Kanji with reading "{reading}"
        </h2>
      </div>

      {/* Kanji Grid - chargé de manière asynchrone */}
      <AsyncKanjiGrid 
        fetchFunction={() => getKanjiByReading(reading)} 
        fallbackCount={20}
      />

      {/* Study Tips */}
      <Card className="mt-8">
          <CardHeader>
            <CardTitle>Study Tips for "<span className="font-kanji">{reading}</span>" Reading</CardTitle>
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
    </div>
  )
}

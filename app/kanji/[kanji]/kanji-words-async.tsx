import { Suspense } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Hash } from "lucide-react"
import { getWordsByKanji } from "@/features/dataFetch"
import { KanjiWords } from "../../_components/KanjiWords"
import { unstable_noStore as noStore } from "next/cache"

async function KanjiWordsContent({ kanji }: { kanji: string }) {
  // Permettre le streaming pour les mots
  noStore()
  
  try {
    const wordData = await getWordsByKanji(kanji)
    
    return (
      <>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hash className="w-5 h-5 text-primary" />
            Words using this kanji ({wordData.length})
          </CardTitle>
        </CardHeader>
        <KanjiWords wordData={wordData} />
      </>
    )
  } catch (error) {
    // Fallback en cas d'erreur
    return (
      <>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hash className="w-5 h-5 text-primary" />
            Words using this kanji
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <Hash className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Unable to load words at the moment</p>
            <p className="text-sm mt-2">Please try refreshing the page</p>
          </div>
        </CardContent>
      </>
    )
  }
}

function KanjiWordsLoading() {
  return (
    <>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Hash className="w-5 h-5 text-primary" />
          <div className="flex items-center gap-2">
            <span>Words using this kanji</span>
            <div className="h-4 w-8 bg-muted-foreground/20 rounded animate-pulse"></div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Skeleton pour les mots */}
          {[...Array(6)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-muted rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="h-8 bg-muted-foreground/20 rounded w-16"></div>
                  <div className="h-4 bg-muted-foreground/20 rounded w-20"></div>
                </div>
                <div className="h-4 bg-muted-foreground/20 rounded w-3/4"></div>
              </div>
            </div>
          ))}
          <div className="text-center">
            <div className="h-4 bg-muted-foreground/20 rounded w-32 mx-auto"></div>
          </div>
        </div>
      </CardContent>
    </>
  )
}

export function KanjiWordsAsync({ kanji }: { kanji: string }) {
  return (
    <Card>
      <Suspense fallback={<KanjiWordsLoading />}>
        <KanjiWordsContent kanji={kanji} />
      </Suspense>
    </Card>
  )
}
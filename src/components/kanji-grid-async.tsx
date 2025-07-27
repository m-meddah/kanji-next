import { Suspense } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { unstable_noStore as noStore } from "next/cache"

interface KanjiGridProps {
  data: string[]
  className?: string
}

function KanjiGrid({ data, className }: KanjiGridProps) {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 ${className || ""}`}>
      {data.map((kanji: string) => (
        <Link key={kanji} href={`/kanji/${kanji}`}>
          <Card className="aspect-square flex items-center justify-center hover:shadow-md transition-all duration-200 hover:scale-105 cursor-pointer group">
            <CardContent className="p-0 flex items-center justify-center w-full h-full">
              <span className="text-2xl md:text-3xl font-kanji font-bold group-hover:text-primary transition-colors">
                {kanji}
              </span>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

function KanjiGridSkeleton({ count = 50 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
      {[...Array(count)].map((_, index) => (
        <Card key={index} className="aspect-square animate-pulse">
          <CardContent className="p-0 flex items-center justify-center w-full h-full">
            <div className="w-8 h-8 bg-muted-foreground/20 rounded"></div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

interface AsyncKanjiGridProps {
  fetchFunction: () => Promise<string[]>
  fallbackCount?: number
  className?: string
}

async function KanjiGridContent({ fetchFunction, className }: Omit<AsyncKanjiGridProps, 'fallbackCount'>) {
  noStore()
  
  try {
    const data = await fetchFunction()
    return <KanjiGrid data={data} className={className} />
  } catch (error) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Failed to load kanji. Please try refreshing the page.</p>
      </div>
    )
  }
}

export function AsyncKanjiGrid({ fetchFunction, fallbackCount = 50, className }: AsyncKanjiGridProps) {
  return (
    <Suspense fallback={<KanjiGridSkeleton count={fallbackCount} />}>
      <KanjiGridContent fetchFunction={fetchFunction} className={className} />
    </Suspense>
  )
}

export { KanjiGrid, KanjiGridSkeleton }
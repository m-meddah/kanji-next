import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs skeleton */}
      <div className="flex items-center gap-2 text-sm mb-6">
        <div className="h-4 bg-muted-foreground/20 rounded w-12 animate-pulse"></div>
        <span>/</span>
        <div className="h-4 bg-muted-foreground/20 rounded w-16 animate-pulse"></div>
        <span>/</span>
        <div className="h-6 bg-muted-foreground/20 rounded w-8 animate-pulse"></div>
      </div>

      {/* Back Button skeleton */}
      <div className="flex items-center justify-between mb-6">
        <Button variant="outline" className="bg-transparent" disabled>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Kanji List
        </Button>
        <div className="h-9 bg-muted-foreground/20 rounded w-20 animate-pulse"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Kanji Display skeleton */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader className="text-center pb-4">
              <div className="w-32 h-32 mx-auto bg-muted-foreground/20 rounded animate-pulse mb-4"></div>
              <div className="flex justify-center gap-2 flex-wrap">
                <div className="h-6 bg-muted-foreground/20 rounded w-16 animate-pulse"></div>
                <div className="h-6 bg-muted-foreground/20 rounded w-20 animate-pulse"></div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="h-8 bg-muted-foreground/20 rounded w-8 mx-auto mb-1 animate-pulse"></div>
                  <div className="h-3 bg-muted-foreground/20 rounded w-12 mx-auto animate-pulse"></div>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="h-4 bg-muted-foreground/20 rounded w-16 mx-auto mb-1 animate-pulse"></div>
                  <div className="h-3 bg-muted-foreground/20 rounded w-12 mx-auto animate-pulse"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information skeleton */}
        <div className="lg:col-span-2 space-y-6">
          {/* Meanings skeleton */}
          <Card>
            <CardHeader>
              <div className="h-6 bg-muted-foreground/20 rounded w-24 animate-pulse"></div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="h-6 bg-muted-foreground/20 rounded w-16 animate-pulse"></div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Readings skeleton */}
          <Card>
            <CardHeader>
              <div className="h-6 bg-muted-foreground/20 rounded w-20 animate-pulse"></div>
            </CardHeader>
            <CardContent className="space-y-4">
              {[...Array(2)].map((_, index) => (
                <div key={index}>
                  <div className="h-4 bg-muted-foreground/20 rounded w-48 mb-2 animate-pulse"></div>
                  <div className="flex flex-wrap gap-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-6 bg-muted-foreground/20 rounded w-12 animate-pulse"></div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Words skeleton */}
          <Card>
            <CardHeader>
              <div className="h-6 bg-muted-foreground/20 rounded w-40 animate-pulse"></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

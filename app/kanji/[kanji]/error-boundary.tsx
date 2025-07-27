"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, Hash, RefreshCw } from "lucide-react"

interface ErrorBoundaryProps {
  error: Error & { digest?: string }
  reset: () => void
  title?: string
}

export function ErrorBoundary({ error, reset, title = "Something went wrong" }: ErrorBoundaryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Hash className="w-5 h-5 text-primary" />
          Words using this kanji
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8">
          <AlertCircle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">
            Failed to load words for this kanji. Please try again.
          </p>
          <Button onClick={reset} variant="outline" className="gap-2">
            <RefreshCw className="w-4 h-4" />
            Try again
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
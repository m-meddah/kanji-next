"use client"

import { useState, useEffect } from "react"
import { useSession } from "@/lib/auth-client"

interface ProgressData {
  learnedCount: number
  learnedKanji: string[]
}

export function useProgress() {
  const { data: session } = useSession()
  const [progress, setProgress] = useState<ProgressData>({ learnedCount: 0, learnedKanji: [] })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!session) {
      setProgress({ learnedCount: 0, learnedKanji: [] })
      setIsLoading(false)
      return
    }

    const fetchProgress = async () => {
      try {
        const response = await fetch("/api/learned-kanji")
        if (response.ok) {
          const data = await response.json()
          setProgress({
            learnedCount: data.count,
            learnedKanji: data.kanji,
          })
        }
      } catch (error) {
        console.error("Error fetching progress:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProgress()
  }, [session])

  const isKanjiLearned = (kanji: string) => {
    return progress.learnedKanji.includes(kanji)
  }

  return {
    ...progress,
    isKanjiLearned,
    isLoading,
    isAuthenticated: !!session,
  }
}
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Circle } from "lucide-react"
import { useSession } from "@/lib/auth-client"

interface LearnedButtonProps {
  kanji: string
}

export function LearnedButton({ kanji }: LearnedButtonProps) {
  const { data: session } = useSession()
  const [isLearned, setIsLearned] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!session) return

    // Check if kanji is already learned
    const checkLearned = async () => {
      try {
        const response = await fetch(`/api/learned-kanji?kanji=${encodeURIComponent(kanji)}`)
        if (response.ok) {
          const data = await response.json()
          setIsLearned(data.learned)
        }
      } catch (error) {
        console.error("Error checking learned status:", error)
      }
    }

    checkLearned()
  }, [session, kanji])

  if (!session) {
    return null
  }

  const toggleLearned = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/learned-kanji", {
        method: isLearned ? "DELETE" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ kanji }),
      })

      if (response.ok) {
        setIsLearned(!isLearned)
      } else {
        console.error("Failed to update learned status")
      }
    } catch (error) {
      console.error("Error updating learned status:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant={isLearned ? "default" : "outline"}
      size="sm"
      onClick={toggleLearned}
      disabled={isLoading}
      className="gap-2"
    >
      {isLearned ? (
        <CheckCircle className="w-4 h-4" />
      ) : (
        <Circle className="w-4 h-4" />
      )}
      {isLearned ? "Learned" : "Mark as Learned"}
    </Button>
  )
}
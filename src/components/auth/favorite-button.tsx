"use client"

import { useState } from "react"
import { useSession } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

interface FavoriteButtonProps {
  kanji: string
  className?: string
}

export function FavoriteButton({ kanji, className }: FavoriteButtonProps) {
  const { data: session } = useSession()
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  if (!session) {
    return (
      <Button
        variant="outline"
        size="sm"
        className={cn("gap-2", className)}
        onClick={() => toast.info("Please sign in to save favorite kanji")}
      >
        <Heart className="h-4 w-4" />
        Save
      </Button>
    )
  }

  const handleToggleFavorite = async () => {
    setIsLoading(true)
    try {
      // Here you would implement the API call to save/remove favorite
      // For now, we'll just simulate it
      await new Promise(resolve => setTimeout(resolve, 500))
      
      setIsFavorite(!isFavorite)
      toast.success(
        isFavorite ? "Removed from favorites" : "Added to favorites"
      )
    } catch (error) {
      toast.error("Failed to update favorites")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant={isFavorite ? "default" : "outline"}
      size="sm"
      className={cn("gap-2", className)}
      onClick={handleToggleFavorite}
      disabled={isLoading}
    >
      <Heart 
        className={cn(
          "h-4 w-4", 
          isFavorite && "fill-current"
        )} 
      />
      {isFavorite ? "Saved" : "Save"}
    </Button>
  )
}
"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Search, Volume2, BookOpen, AlertCircle, ArrowRight, GraduationCap, Star } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

// Function to validate if text contains only kana characters
function isValidKana(text: string): boolean {
  if (!text.trim()) return false
  // Hiragana: \u3040-\u309F, Katakana: \u30A0-\u30FF, Katakana extensions: \u31F0-\u31FF
  const kanaRegex = /^[\u3040-\u309F\u30A0-\u30FF\u31F0-\u31FF\u30FC\u3099\u309A]+$/
  return kanaRegex.test(text.trim())
}

export default function ReadingsPage() {
  const [reading, setReading] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!reading.trim()) {
      setError("Please enter a reading")
      return
    }

    if (!isValidKana(reading)) {
      setError("Please enter only hiragana or katakana characters")
      return
    }

    setError("")
    router.push(`/readings/${reading}`)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setReading(value)

    // Clear error when user starts typing valid kana
    if (error && (value === "" || isValidKana(value))) {
      setError("")
    }
  }

  const exampleReadings = [
    { reading: "がく", meaning: "study, learning" },
    { reading: "みず", meaning: "water" },
    { reading: "ひ", meaning: "fire, day" },
    { reading: "き", meaning: "tree, spirit" },
    { reading: "コウ", meaning: "high, school" },
    { reading: "セイ", meaning: "life, student" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span>/</span>
        <span className="text-foreground">Search by Reading</span>
      </div>

      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-2xl">
            読
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
            Search Kanji by <span className="text-primary">Reading</span>
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Find all kanji that share the same pronunciation. Enter a reading in hiragana or katakana to discover kanji
          with that specific sound.
        </p>
      </div>

      {/* Search Form */}
      <Card className="max-w-2xl mx-auto mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5 text-primary" />
            Enter Reading
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="reading">Reading (ひらがな or カタカナ)</Label>
              <Input
                id="reading"
                type="text"
                placeholder="e.g., がく, みず, コウ, セイ..."
                value={reading}
                onChange={handleInputChange}
                className={`text-lg ${error ? "border-red-500" : ""}`}
                autoComplete="off"
              />
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={!reading.trim() || !!error}>
              <Search className="w-4 h-4 mr-2" />
              Search Kanji
            </Button>
          </form>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <h4 className="font-medium mb-2 flex items-center gap-2">
              <Volume2 className="w-4 h-4" />
              Tips for searching:
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Use hiragana for kun readings (Japanese readings)</li>
              <li>• Use katakana for on readings (Chinese readings)</li>
              <li>• Enter the exact pronunciation you want to find</li>
              <li>• Both long and short vowels are supported</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Example Readings */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Popular Readings to Try</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {exampleReadings.map((example, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => {
                setReading(example.reading)
                setError("")
              }}
            >
              <Link href={`/readings/${example.reading}`} className="block h-full">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold font-mono">{example.reading}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">{example.meaning}</p>
              </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>

      {/* Information Section */}
      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>About Kanji Readings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <p>
                Japanese kanji have multiple readings, typically categorized as on'yomi (音読み) and kun'yomi (訓読み).
              </p>
              <div>
                <h4 className="font-medium mb-2">Reading Types:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>
                    • <strong>On'yomi:</strong> Chinese-derived readings (usually katakana)
                  </li>
                  <li>
                    • <strong>Kun'yomi:</strong> Native Japanese readings (usually hiragana)
                  </li>
                  <li>
                    • <strong>Nanori:</strong> Special readings used in names
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Search Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div>
                <h4 className="font-medium mb-2">Common Searches:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>
                    • <span className="font-mono">がく</span> - finds 学, 楽, etc.
                  </li>
                  <li>
                    • <span className="font-mono">コウ</span> - finds 高, 校, 工, etc.
                  </li>
                  <li>
                    • <span className="font-mono">き</span> - finds 木, 気, 来, etc.
                  </li>
                  <li>
                    • <span className="font-mono">セイ</span> - finds 生, 正, 成, etc.
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Navigation */}
      <div className="mt-12 text-center">
        <h3 className="text-lg font-semibold mb-4">Other Ways to Explore Kanji</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="outline" asChild>
            <Link href="/grades">
              <GraduationCap className="w-4 h-4 mr-2" />
              By Grade
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/jlpt">
              <Star className="w-4 h-4 mr-2" />
              By JLPT Level
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/joyo">
              <Search className="w-4 h-4 mr-2" />
              All Joyo Kanji
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

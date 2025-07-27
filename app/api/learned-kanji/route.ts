import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    })

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { kanji } = await request.json()

    if (!kanji) {
      return Response.json({ error: "Kanji is required" }, { status: 400 })
    }

    // Check if already learned
    const existing = await db.userLearnedKanji.findUnique({
      where: {
        userId_kanji: {
          userId: session.user.id,
          kanji: kanji,
        },
      },
    })

    if (existing) {
      return Response.json({ message: "Kanji already marked as learned" })
    }

    // Add to learned kanji
    await db.userLearnedKanji.create({
      data: {
        id: crypto.randomUUID(),
        userId: session.user.id,
        kanji: kanji,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    })

    return Response.json({ message: "Kanji marked as learned" })
  } catch (error) {
    console.error("Error adding learned kanji:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    })

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { kanji } = await request.json()

    if (!kanji) {
      return Response.json({ error: "Kanji is required" }, { status: 400 })
    }

    // Remove from learned kanji
    await db.userLearnedKanji.deleteMany({
      where: {
        userId: session.user.id,
        kanji: kanji,
      },
    })

    return Response.json({ message: "Kanji unmarked as learned" })
  } catch (error) {
    console.error("Error removing learned kanji:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    })

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 })
    }

    const url = new URL(request.url)
    const kanji = url.searchParams.get("kanji")

    if (kanji) {
      // Check if specific kanji is learned
      const learned = await db.userLearnedKanji.findUnique({
        where: {
          userId_kanji: {
            userId: session.user.id,
            kanji: kanji,
          },
        },
      })
      return Response.json({ learned: !!learned })
    } else {
      // Get all learned kanji for user
      const learnedKanji = await db.userLearnedKanji.findMany({
        where: {
          userId: session.user.id,
        },
        select: {
          kanji: true,
        },
      })
      return Response.json({ 
        kanji: learnedKanji.map(item => item.kanji),
        count: learnedKanji.length 
      })
    }
  } catch (error) {
    console.error("Error fetching learned kanji:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
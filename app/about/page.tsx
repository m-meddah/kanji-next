import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, GraduationCap, Star, Users, Target, Zap, Heart, Globe, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About KanjiMaster - Japanese Kanji Learning Platform",
  description:
    "Learn about KanjiMaster, your comprehensive digital companion for mastering Japanese kanji. Built with modern technology and educational best practices to make kanji learning systematic, engaging, and effective.",
  keywords: [
    "about kanjimaster",
    "japanese kanji learning platform",
    "kanji education",
    "japanese language learning",
    "educational technology",
    "kanji database",
    "japanese study tools",
    "language learning app",
  ],
  openGraph: {
    title: "About KanjiMaster - Japanese Kanji Learning Platform",
    description:
      "Learn about KanjiMaster, your comprehensive digital companion for mastering Japanese kanji. Built with modern technology and educational best practices.",
    url: "https://kanjimaster.com/about",
    images: [
      {
        url: "/og-about.png",
        width: 1200,
        height: 630,
        alt: "About KanjiMaster - Japanese Kanji Learning Platform",
      },
    ],
  },
  alternates: {
    canonical: "https://kanjimaster.com/about",
  },
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span>/</span>
        <span className="text-foreground">About</span>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-2xl">
            漢
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
            About <span className="text-primary">KanjiMaster</span>
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your comprehensive digital companion for mastering Japanese kanji. Built with modern technology and
          educational best practices to make kanji learning systematic, engaging, and effective.
        </p>
      </div>

      {/* Mission Section */}
      <Card className="mb-12">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex items-center justify-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            Our Mission
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            We believe that learning kanji should be systematic, accessible, and enjoyable. Our mission is to provide
            learners with the most comprehensive and user-friendly platform for mastering all aspects of Japanese kanji,
            from basic recognition to advanced comprehension.
          </p>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose KanjiMaster?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <GraduationCap className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Systematic Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Follow the Japanese education system with kanji organized by elementary school grades, ensuring a solid
                foundation for your learning journey.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Star className="w-10 h-10 text-primary mb-2" />
              <CardTitle>JLPT Preparation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Prepare for the Japanese Language Proficiency Test with kanji organized by official JLPT levels from N5
                to N1.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <BookOpen className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Complete Database</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Access all 2,136 Joyo kanji with detailed information including readings, meanings, stroke counts, and
                example words.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Zap className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Modern Interface</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Enjoy a clean, responsive design that works seamlessly across all devices, making learning accessible
                anywhere, anytime.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="w-10 h-10 text-primary mb-2" />
              <CardTitle>For All Levels</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Whether you're a complete beginner or preparing for advanced proficiency tests, our platform adapts to
                your learning needs.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Globe className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Always Updated</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our database follows the latest official Joyo kanji list and JLPT standards, ensuring you're learning
                the most current and relevant information.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Statistics Section */}
      <Card className="mb-12">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">By the Numbers</CardTitle>
          <p className="text-muted-foreground">Our comprehensive kanji database at a glance</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2,136</div>
              <div className="text-sm text-muted-foreground">Joyo Kanji</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-sm text-muted-foreground">Grade Levels</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-sm text-muted-foreground">JLPT Levels</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Free Access</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Learning Approach */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Learning Approach</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Evidence-Based Methods
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Our platform is built on proven educational principles and follows the official Japanese education
                system structure.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Systematic progression from simple to complex
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Multiple learning pathways (Grade, JLPT, Complete)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Comprehensive character information
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Real-world usage examples
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Built with Care
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Every aspect of KanjiMaster has been carefully designed to provide the best possible learning experience
                for Japanese language students.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-primary" />
                  Clean, distraction-free interface
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-primary" />
                  Mobile-first responsive design
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-primary" />
                  Fast, reliable performance
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-primary" />
                  Accessible to all learners
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Technology Stack */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Built with Modern Technology</CardTitle>
          <p className="text-center text-muted-foreground">
            Powered by cutting-edge web technologies for the best user experience
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="text-sm">
              Next.js 15
            </Badge>
            <Badge variant="secondary" className="text-sm">
              React
            </Badge>
            <Badge variant="secondary" className="text-sm">
              TypeScript
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Tailwind CSS
            </Badge>
            <Badge variant="secondary" className="text-sm">
              shadcn/ui
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Responsive Design
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="text-center">
        <CardContent className="py-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Kanji Journey?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of learners who are mastering Japanese kanji with our comprehensive platform. Start with
            Grade 1 basics or jump to your target JLPT level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/grades">
                Start with Grade 1
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/jlpt">Choose JLPT Level</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/joyo">Browse All Kanji</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Contact Section */}
      <div className="mt-12 text-center">
        <h3 className="text-lg font-semibold mb-2">Questions or Feedback?</h3>
        <p className="text-muted-foreground mb-4">
          We'd love to hear from you and help improve your learning experience.
        </p>
        <Button variant="outline" asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  )
}

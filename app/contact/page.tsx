import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MessageSquare, Phone, MapPin, Clock, Send, Bug, Lightbulb, Heart } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Us - Get Help & Support",
  description:
    "Get in touch with the KanjiMaster team. Contact us for support, feedback, suggestions, or questions about learning Japanese kanji. We're here to help!",
  keywords: [
    "contact kanjimaster",
    "customer support",
    "help desk",
    "feedback",
    "japanese kanji support",
    "technical support",
    "user assistance",
    "contact form",
  ],
  openGraph: {
    title: "Contact Us - Get Help & Support | KanjiMaster",
    description:
      "Get in touch with the KanjiMaster team for support, feedback, or questions about learning Japanese kanji.",
    url: "https://kanjimaster.com/contact",
    images: [
      {
        url: "/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact KanjiMaster Support Team",
      },
    ],
  },
  alternates: {
    canonical: "https://kanjimaster.com/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span>/</span>
        <span className="text-foreground">Contact</span>
      </div>

      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-2xl">
            <Mail className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
            Contact <span className="text-primary">Us</span>
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
          We'd love to hear from you! Whether you have questions, feedback, or need help with your kanji learning
          journey, our team is here to assist you.
        </p>
        <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
          <Badge variant="secondary">
            <Clock className="w-3 h-3 mr-1" />
            Response within 24 hours
          </Badge>
          <Badge variant="outline">
            <Heart className="w-3 h-3 mr-1" />
            Community Driven
          </Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Send us a Message
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Your first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Your last name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>

                {/* Subject and Category */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Question</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                        <SelectItem value="bug">Bug Report</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="educational">Educational Content</SelectItem>
                        <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="Brief description of your message" required />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Please provide as much detail as possible. If reporting a bug, include steps to reproduce the issue."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                {/* Japanese Learning Level (Optional) */}
                <div className="space-y-2">
                  <Label htmlFor="level">Your Japanese Level (Optional)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your current level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Complete Beginner</SelectItem>
                      <SelectItem value="n5">JLPT N5 Level</SelectItem>
                      <SelectItem value="n4">JLPT N4 Level</SelectItem>
                      <SelectItem value="n3">JLPT N3 Level</SelectItem>
                      <SelectItem value="n2">JLPT N2 Level</SelectItem>
                      <SelectItem value="n1">JLPT N1 Level</SelectItem>
                      <SelectItem value="native">Native/Near-Native</SelectItem>
                      <SelectItem value="teacher">Japanese Teacher</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">This helps us provide more relevant assistance</p>
                </div>

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  . We'll only use your information to respond to your inquiry.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information & FAQ */}
        <div className="space-y-6">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Email Support</h4>
                  <p className="text-sm text-muted-foreground">support@kanjimaster.com</p>
                  <p className="text-xs text-muted-foreground">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Bug className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Bug Reports</h4>
                  <p className="text-sm text-muted-foreground">bugs@kanjimaster.com</p>
                  <p className="text-xs text-muted-foreground">Technical issues & errors</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Suggestions</h4>
                  <p className="text-sm text-muted-foreground">feedback@kanjimaster.com</p>
                  <p className="text-xs text-muted-foreground">Ideas & improvements</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-sm text-muted-foreground">Global - Remote Team</p>
                  <p className="text-xs text-muted-foreground">Serving learners worldwide</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Response Time</h4>
                  <p className="text-sm text-muted-foreground">Within 24 hours</p>
                  <p className="text-xs text-muted-foreground">Monday - Friday priority</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Community */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Join Our Community
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Connect with other Japanese learners and get community support:
              </p>

              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Discord Community
                  </a>
                </Button>

                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Mail className="w-4 h-4 mr-2" />
                    Newsletter
                  </a>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                Get updates on new features, study tips, and Japanese learning resources.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-12 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>We Value Your Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Bug className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-medium mb-2">Report Issues</h4>
                <p className="text-sm text-muted-foreground">
                  Found a bug or technical problem? Let us know so we can fix it quickly.
                </p>
              </div>

              <div className="text-center">
                <Lightbulb className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-medium mb-2">Suggest Features</h4>
                <p className="text-sm text-muted-foreground">
                  Have an idea to improve KanjiMaster? We'd love to hear your suggestions.
                </p>
              </div>

              <div className="text-center">
                <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-medium mb-2">Share Your Story</h4>
                <p className="text-sm text-muted-foreground">
                  Tell us how KanjiMaster has helped you in your Japanese learning journey.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Message */}
      <div className="mt-12 text-center">
        <h3 className="text-lg font-semibold mb-2">Thank You for Using KanjiMaster!</h3>
        <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
          Your feedback and questions help us improve the platform for all Japanese learners. We're committed to
          providing the best kanji learning experience possible.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="outline" asChild>
            <Link href="/about">Learn More About Us</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/privacy">Privacy Policy</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/terms">Terms of Service</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

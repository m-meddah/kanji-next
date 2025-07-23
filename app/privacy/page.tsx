import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Eye, Lock, Users, Mail, Calendar, AlertTriangle, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Data Protection & User Privacy",
  description:
    "Learn how KanjiMaster protects your privacy and handles your data. Our comprehensive privacy policy explains data collection, usage, and your rights as a user.",
  keywords: [
    "privacy policy",
    "data protection",
    "user privacy",
    "GDPR compliance",
    "data collection",
    "cookies policy",
    "user rights",
    "data security",
  ],
  openGraph: {
    title: "Privacy Policy - Data Protection & User Privacy | KanjiMaster",
    description: "Learn how KanjiMaster protects your privacy and handles your data. GDPR compliant privacy policy.",
    url: "https://kanjimaster.com/privacy",
    images: [
      {
        url: "/og-privacy.png",
        width: 1200,
        height: 630,
        alt: "KanjiMaster Privacy Policy",
      },
    ],
  },
  alternates: {
    canonical: "https://kanjimaster.com/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span>/</span>
        <span className="text-foreground">Privacy Policy</span>
      </div>

      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-2xl">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
            Privacy <span className="text-primary">Policy</span>
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
          Your privacy is important to us. This policy explains how we collect, use, and protect your information when
          you use KanjiMaster.
        </p>
        <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
          <Badge variant="secondary">
            <Calendar className="w-3 h-3 mr-1" />
            Last updated: January 2024
          </Badge>
          <Badge variant="outline">
            <CheckCircle className="w-3 h-3 mr-1" />
            GDPR Compliant
          </Badge>
        </div>
      </div>

      {/* Quick Summary */}
      <Card className="max-w-4xl mx-auto space-y-8 mb-8 border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-primary" />
            Privacy at a Glance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-green-700">✓ What we do:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Provide free kanji learning resources</li>
                <li>• Use minimal analytics to improve the site</li>
                <li>• Protect your data with industry standards</li>
                <li>• Respect your privacy choices</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-red-700">✗ What we don't do:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Sell your personal information</li>
                <li>• Track you across other websites</li>
                <li>• Require account creation to use the site</li>
                <li>• Store sensitive personal data</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Information We Collect */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              1. Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Automatically Collected Information</h4>
              <p className="text-sm text-muted-foreground mb-3">
                When you visit KanjiMaster, we automatically collect certain information about your device and usage:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• Browser type and version</li>
                <li>• Operating system</li>
                <li>• IP address (anonymized)</li>
                <li>• Pages visited and time spent</li>
                <li>• Referring website</li>
                <li>• Device type (mobile, desktop, tablet)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Optional Information</h4>
              <p className="text-sm text-muted-foreground mb-3">
                We may collect additional information only if you choose to provide it:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• Contact information if you reach out to us</li>
                <li>• Feedback and suggestions you submit</li>
                <li>• Learning preferences (stored locally on your device)</li>
              </ul>
            </div>

            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> KanjiMaster does not require account creation. Most features are available
                without providing any personal information.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-primary" />
              2. How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              We use the collected information for the following purposes:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Service Improvement</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Analyze usage patterns to improve content</li>
                  <li>• Identify and fix technical issues</li>
                  <li>• Optimize site performance</li>
                  <li>• Understand which features are most helpful</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Communication</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Respond to your inquiries</li>
                  <li>• Send important updates (if subscribed)</li>
                  <li>• Provide technical support</li>
                  <li>• Share educational content (optional)</li>
                </ul>
              </div>
            </div>

            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-green-800">
                <strong>Legal Basis:</strong> We process your data based on legitimate interest in providing and
                improving our educational service, and with your consent where required.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Cookies and Tracking */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" />
              3. Cookies and Tracking Technologies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              We use cookies and similar technologies to enhance your experience:
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Essential Cookies</h4>
                <p className="text-sm text-muted-foreground mb-2">Required for the website to function properly:</p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Session management</li>
                  <li>• Security features</li>
                  <li>• Basic functionality</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Analytics Cookies</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Help us understand how you use the site (with your consent):
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Page views and user interactions</li>
                  <li>• Popular content and features</li>
                  <li>• Technical performance metrics</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Preference Cookies</h4>
                <p className="text-sm text-muted-foreground mb-2">Remember your choices and settings:</p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Language preferences</li>
                  <li>• Display settings</li>
                  <li>• Learning progress (stored locally)</li>
                </ul>
              </div>
            </div>

            <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-800">
                <strong>Cookie Control:</strong> You can manage cookie preferences in your browser settings. Disabling
                certain cookies may affect site functionality.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Data Sharing */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              4. Data Sharing and Third Parties
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              We do not sell, trade, or rent your personal information. We may share data only in these limited
              circumstances:
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Service Providers</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  We work with trusted third parties who help us operate the website:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Web hosting services (Vercel)</li>
                  <li>• Analytics providers (Google Analytics)</li>
                  <li>• Content delivery networks</li>
                  <li>• Email service providers (if applicable)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Legal Requirements</h4>
                <p className="text-sm text-muted-foreground">
                  We may disclose information if required by law, court order, or to protect our rights and safety.
                </p>
              </div>
            </div>

            <div className="p-3 bg-red-50 rounded-lg border border-red-200">
              <p className="text-sm text-red-800">
                <strong>No Data Sales:</strong> We never sell your personal information to advertisers, marketers, or
                other third parties.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              5. Data Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              We implement appropriate security measures to protect your information:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Technical Safeguards</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• SSL/TLS encryption for data transmission</li>
                  <li>• Secure hosting infrastructure</li>
                  <li>• Regular security updates</li>
                  <li>• Access controls and monitoring</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Organizational Measures</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Limited access to personal data</li>
                  <li>• Staff training on privacy practices</li>
                  <li>• Regular security assessments</li>
                  <li>• Incident response procedures</li>
                </ul>
              </div>
            </div>

            <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
              <p className="text-sm text-orange-800">
                <strong>Important:</strong> While we strive to protect your information, no method of transmission over
                the internet is 100% secure. Please use caution when sharing sensitive information online.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              6. Your Privacy Rights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Access and Control</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Access your personal data</li>
                  <li>• Correct inaccurate information</li>
                  <li>• Delete your data</li>
                  <li>• Restrict processing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Data Portability</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Export your data</li>
                  <li>• Transfer to another service</li>
                  <li>• Withdraw consent</li>
                  <li>• Object to processing</li>
                </ul>
              </div>
            </div>

            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Exercise Your Rights:</strong> To exercise any of these rights, please contact us using the
                information provided below. We will respond within 30 days.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Children's Privacy */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-primary" />
              7. Children's Privacy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              KanjiMaster is designed to be safe for learners of all ages, including children:
            </p>

            <ul className="text-sm text-muted-foreground space-y-2 ml-4">
              <li>• We do not knowingly collect personal information from children under 13</li>
              <li>• No account creation is required to use the educational content</li>
              <li>• We do not use targeted advertising</li>
              <li>• Parents can contact us to request deletion of any child's data</li>
            </ul>

            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-green-800">
                <strong>COPPA Compliance:</strong> If you believe we have collected information from a child under 13,
                please contact us immediately so we can delete it.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* International Users */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              8. International Users
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">KanjiMaster is available worldwide. Please note:</p>

            <ul className="text-sm text-muted-foreground space-y-2 ml-4">
              <li>• Data may be processed in countries other than your own</li>
              <li>• We comply with applicable international privacy laws</li>
              <li>• EU users have additional rights under GDPR</li>
              <li>• We use appropriate safeguards for international transfers</li>
            </ul>
          </CardContent>
        </Card>

        {/* Changes to Policy */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              9. Changes to This Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              We may update this privacy policy from time to time. When we do:
            </p>

            <ul className="text-sm text-muted-foreground space-y-2 ml-4">
              <li>• We will post the updated policy on this page</li>
              <li>• We will update the "Last updated" date</li>
              <li>• For significant changes, we may provide additional notice</li>
              <li>• Your continued use constitutes acceptance of changes</li>
            </ul>

            <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-sm text-purple-800">
                <strong>Stay Informed:</strong> We recommend reviewing this policy periodically to stay informed about
                how we protect your privacy.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              10. Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              If you have questions about this privacy policy or our data practices, please contact us:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">General Inquiries</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Email: privacy@kanjimaster.com</p>
                  <p>Response time: Within 48 hours</p>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Privacy Rights Requests</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Email: rights@kanjimaster.com</p>
                  <p>Response time: Within 30 days</p>
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <Button asChild>
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Navigation */}
      <div className="mt-12 text-center">
        <h3 className="text-lg font-semibold mb-4">Related Pages</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="outline" asChild>
            <Link href="/about">About KanjiMaster</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/terms">Terms of Service</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

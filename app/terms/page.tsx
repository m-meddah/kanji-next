import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Scale, FileText, AlertTriangle, Shield, Users, Globe, Mail, Calendar } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span>/</span>
        <span className="text-foreground">Terms of Service</span>
      </div>

      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-2xl">
            <Scale className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
            Terms of <span className="text-primary">Service</span>
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
          These terms govern your use of KanjiMaster. By using our service, you agree to these terms and conditions.
        </p>
        <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
          <Badge variant="secondary">
            <Calendar className="w-3 h-3 mr-1" />
            Effective: January 2024
          </Badge>
          <Badge variant="outline">
            <Scale className="w-3 h-3 mr-1" />
            Legally Binding
          </Badge>
        </div>
      </div>

      {/* Quick Summary */}
      <Card className="max-w-4xl mx-auto space-y-8 mb-8 border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Terms Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-green-700">✓ You can:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Use KanjiMaster for free for educational purposes</li>
                <li>• Access all kanji learning materials</li>
                <li>• Share links to specific kanji or pages</li>
                <li>• Use the content for personal study</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-red-700">✗ You cannot:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Copy or redistribute our content commercially</li>
                <li>• Use automated tools to scrape data</li>
                <li>• Attempt to hack or disrupt the service</li>
                <li>• Violate intellectual property rights</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Acceptance of Terms */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" />
              1. Acceptance of Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              By accessing and using KanjiMaster ("the Service"), you accept and agree to be bound by the terms and
              provision of this agreement.
            </p>

            <div className="space-y-3">
              <div>
                <h4 className="font-medium mb-2">Agreement to Terms</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• These terms apply to all users of the Service</li>
                  <li>• Use of the Service constitutes acceptance of these terms</li>
                  <li>• If you disagree with any part, you must not use the Service</li>
                  <li>• These terms may be updated from time to time</li>
                </ul>
              </div>
            </div>

            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Important:</strong> Please read these terms carefully before using KanjiMaster. Your continued
                use of the Service indicates your acceptance of these terms.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Description of Service */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              2. Description of Service
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              KanjiMaster is a free educational platform that provides comprehensive resources for learning Japanese
              kanji characters.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Service Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Complete database of 2,136 Joyo kanji characters</li>
                  <li>• Kanji organized by school grade levels (1-6)</li>
                  <li>• JLPT level categorization (N5-N1)</li>
                  <li>• Detailed kanji information including readings, meanings, and stroke counts</li>
                  <li>• Example words and usage contexts</li>
                  <li>• Search functionality by reading or character</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Educational Purpose</h4>
                <p className="text-sm text-muted-foreground">
                  The Service is designed for educational purposes to help users learn and understand Japanese kanji
                  characters. It follows official Japanese educational standards and JLPT requirements.
                </p>
              </div>
            </div>

            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-green-800">
                <strong>Free Service:</strong> KanjiMaster is provided free of charge as an educational resource for
                Japanese language learners worldwide.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* User Responsibilities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              3. User Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              As a user of KanjiMaster, you agree to use the Service responsibly and in accordance with these terms.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Acceptable Use</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Use the Service for legitimate educational purposes</li>
                  <li>• Respect the intellectual property rights of the content</li>
                  <li>• Do not attempt to reverse engineer or copy the Service</li>
                  <li>• Do not use automated tools to scrape or download content</li>
                  <li>• Do not interfere with the Service's operation or security</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Prohibited Activities</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Commercial redistribution of content without permission</li>
                  <li>• Attempting to hack, disrupt, or damage the Service</li>
                  <li>• Using the Service for any illegal activities</li>
                  <li>• Impersonating others or providing false information</li>
                  <li>• Violating any applicable laws or regulations</li>
                </ul>
              </div>
            </div>

            <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-800">
                <strong>Violation Consequences:</strong> Violation of these terms may result in termination of access to
                the Service and potential legal action.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              4. Intellectual Property Rights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              The content and materials on KanjiMaster are protected by intellectual property laws.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Our Content</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Website design, layout, and user interface</li>
                  <li>• Original explanations, examples, and educational materials</li>
                  <li>• Software code and technical implementation</li>
                  <li>• Compilation and organization of kanji data</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Third-Party Content</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Kanji characters are part of the Japanese writing system</li>
                  <li>• Official Joyo kanji list is published by the Japanese government</li>
                  <li>• JLPT classifications are maintained by official testing organizations</li>
                  <li>• We respect all applicable intellectual property rights</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Your Usage Rights</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Personal, non-commercial use for educational purposes</li>
                  <li>• Sharing links to specific pages or kanji</li>
                  <li>• Using content for classroom instruction (with attribution)</li>
                  <li>• Creating derivative works for personal study</li>
                </ul>
              </div>
            </div>

            <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-sm text-purple-800">
                <strong>Attribution:</strong> When sharing or referencing our content, please provide appropriate
                attribution to KanjiMaster.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Privacy and Data */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              5. Privacy and Data Protection
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Your privacy is important to us. Our data collection and usage practices are governed by our Privacy
              Policy.
            </p>

            <div className="space-y-3">
              <div>
                <h4 className="font-medium mb-2">Data Collection</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• We collect minimal data necessary for service operation</li>
                  <li>• No account creation is required for basic usage</li>
                  <li>• Analytics data helps us improve the service</li>
                  <li>• All data collection is transparent and disclosed</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Your Rights</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Access, correct, or delete your personal data</li>
                  <li>• Opt out of non-essential data collection</li>
                  <li>• Request data portability where applicable</li>
                  <li>• File complaints with relevant authorities</li>
                </ul>
              </div>
            </div>

            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Privacy Policy:</strong> For detailed information about our data practices, please review our{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-primary" />
              6. Disclaimers and Limitations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              While we strive to provide accurate and helpful content, there are important limitations to consider.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Service Availability</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• The Service is provided "as is" without warranties</li>
                  <li>• We do not guarantee uninterrupted availability</li>
                  <li>• Maintenance and updates may cause temporary downtime</li>
                  <li>• We reserve the right to modify or discontinue features</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Content Accuracy</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• We strive for accuracy but cannot guarantee error-free content</li>
                  <li>• Educational content is for informational purposes only</li>
                  <li>• Users should verify information from multiple sources</li>
                  <li>• We are not responsible for decisions based on our content</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Limitation of Liability</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• We are not liable for any indirect or consequential damages</li>
                  <li>• Our liability is limited to the maximum extent permitted by law</li>
                  <li>• Users assume responsibility for their use of the Service</li>
                  <li>• We do not guarantee specific learning outcomes</li>
                </ul>
              </div>
            </div>

            <div className="p-3 bg-red-50 rounded-lg border border-red-200">
              <p className="text-sm text-red-800">
                <strong>Educational Tool:</strong> KanjiMaster is an educational tool and supplement, not a replacement
                for formal language instruction or official study materials.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Services */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              7. Third-Party Services and Links
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              KanjiMaster may integrate with or link to third-party services and websites.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Third-Party Integrations</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Analytics services (Google Analytics)</li>
                  <li>• Hosting and content delivery services</li>
                  <li>• External APIs for kanji data</li>
                  <li>• Social media sharing features</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">External Links</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• We may link to external educational resources</li>
                  <li>• External sites have their own terms and privacy policies</li>
                  <li>• We are not responsible for third-party content or practices</li>
                  <li>• Links do not imply endorsement of external sites</li>
                </ul>
              </div>
            </div>

            <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
              <p className="text-sm text-orange-800">
                <strong>Third-Party Terms:</strong> Your use of third-party services is subject to their respective
                terms of service and privacy policies.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-primary" />
              8. Termination
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Either party may terminate this agreement under certain circumstances.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Termination by You</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• You may stop using the Service at any time</li>
                  <li>• No formal termination process is required</li>
                  <li>• You may request deletion of any personal data</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Termination by Us</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• We may terminate access for violation of these terms</li>
                  <li>• We may discontinue the Service with reasonable notice</li>
                  <li>• We may suspend access for technical or security reasons</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Effect of Termination</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Your right to use the Service ends immediately</li>
                  <li>• Provisions regarding intellectual property survive termination</li>
                  <li>• We may retain data as required by law or policy</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Governing Law */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" />
              9. Governing Law and Disputes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              These terms and any disputes arising from them are governed by applicable law.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Applicable Law</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• These terms are governed by the laws of the jurisdiction where we operate</li>
                  <li>• International users may have additional rights under local law</li>
                  <li>• EU users have rights under GDPR and applicable EU law</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Dispute Resolution</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• We encourage resolving disputes through direct communication</li>
                  <li>• Contact us first to attempt informal resolution</li>
                  <li>• Formal disputes may be subject to arbitration or court proceedings</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Changes to Terms */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              10. Changes to These Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              We may update these terms from time to time to reflect changes in our service or legal requirements.
            </p>

            <div className="space-y-3">
              <div>
                <h4 className="font-medium mb-2">Update Process</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Updated terms will be posted on this page</li>
                  <li>• The "Effective Date" will be updated</li>
                  <li>• Significant changes may be announced on the website</li>
                  <li>• Continued use constitutes acceptance of updated terms</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Your Options</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Review terms periodically for changes</li>
                  <li>• Contact us if you have questions about updates</li>
                  <li>• Stop using the Service if you disagree with changes</li>
                </ul>
              </div>
            </div>

            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-green-800">
                <strong>Stay Informed:</strong> We recommend bookmarking this page and reviewing it periodically to stay
                informed about any changes to these terms.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              11. Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              If you have questions about these terms or need to contact us regarding legal matters:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">General Questions</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Email: legal@kanjimaster.com</p>
                  <p>Response time: Within 5 business days</p>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Legal Notices</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Email: legal@kanjimaster.com</p>
                  <p>Subject: "Legal Notice - [Your Issue]"</p>
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

      {/* Acknowledgment */}
      <Card className="mt-8 border-primary/20 bg-primary/5">
        <CardContent className="py-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Acknowledgment</h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            By using KanjiMaster, you acknowledge that you have read, understood, and agree to be bound by these Terms
            of Service. If you do not agree to these terms, please do not use our service.
          </p>
          <div className="mt-4 text-xs text-muted-foreground">
            Last updated: January 2024 • Effective immediately upon posting
          </div>
        </CardContent>
      </Card>

      {/* Footer Navigation */}
      <div className="mt-12 text-center">
        <h3 className="text-lg font-semibold mb-4">Related Documents</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="outline" asChild>
            <Link href="/privacy">Privacy Policy</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about">About KanjiMaster</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

"use client";

import Header from "@/components/header";
import { FiAlertCircle, FiShield, FiCheckCircle } from "react-icons/fi";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen w-full font-sans">
      <Header />

      <section className="max-w-4xl mx-auto px-4 py-4 md:py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-oxanium text-white mb-4">
            Terms of Service
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] mx-auto mb-6"></div>
          <p className="text-[#b6c6e3] text-base md:text-lg">
            Last Updated: February 2, 2026
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-br from-[#FF3D8E] to-[#BB0051] rounded-2xl p-6 md:p-10 border-2 border-[#FF3D8E] mb-8 flex gap-4">
          <FiAlertCircle className="text-white text-4xl flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold font-oxanium text-white mb-2">
              Important Disclaimer
            </h3>
            <p className="text-white/90">
              Please read these Terms of Service carefully before using our
              platform. By accessing and using our website, you agree to be
              bound by these terms. If you do not agree with any part of these
              terms, please do not use our services.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          {/* 1. Acceptance of Terms */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6">
              1. Acceptance of Terms
            </h2>
            <p className="text-[#b6c6e3] leading-relaxed">
              By accessing and using this website and playing games on our
              platform, you acknowledge that you have read, understood, and
              agree to be bound by these Terms of Service. If you do not agree
              to these terms, you may not use our platform. We reserve the right
              to modify these terms at any time, and your continued use of our
              services constitutes your acceptance of any changes.
            </p>
          </div>

          {/* 2. Content Ownership & Attribution */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6 flex items-center gap-3">
              <FiAlertCircle className="text-[#FF3D8E]" />
              2. Content Ownership & Attribution
            </h2>
            <div className="space-y-4">
              <p className="text-[#b6c6e3] leading-relaxed">
                <strong className="text-white">Important:</strong> Our platform
                aggregates and displays games and content from multiple
                third-party sources and APIs. We do NOT own, create, or produce
                the games, graphics, sounds, code, or any other intellectual
                property featured on our platform.
              </p>

              <div className="bg-[#0a1628] rounded-lg p-4 border border-[#FF3D8E]">
                <h4 className="font-bold text-white mb-2">
                  Original Content Rights:
                </h4>
                <ul className="list-disc list-inside text-[#b6c6e3] space-y-1">
                  <li>
                    All games are owned and copyrighted by their respective
                    creators and developers
                  </li>
                  <li>
                    Game graphics, music, and audio are property of the original
                    developers
                  </li>
                  <li>
                    We act solely as an aggregator and distributor of these
                    games
                  </li>
                  <li>We respect and honor all intellectual property rights</li>
                </ul>
              </div>

              <p className="text-[#b6c6e3] leading-relaxed">
                We respect the accomplishments, creativity, and hard work of all
                game developers and creators whose work is featured on our
                platform. We acknowledge their intellectual property rights and
                provide attribution where applicable.
              </p>
            </div>
          </div>

          {/* 3. Third-Party API and Content Sources */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6">
              3. Third-Party APIs and Content Sources
            </h2>
            <p className="text-[#b6c6e3] mb-4 leading-relaxed">
              Our platform utilizes APIs and content feeds from the following
              third-party sources:
            </p>
            <ul className="list-disc list-inside text-[#b6c6e3] space-y-2 mb-4">
              <li>HTML5 Games Libraries and Repositories</li>
              <li>Paco Games Database</li>
              <li>Online Games IO Platform</li>
              <li>Other authorized game distribution networks</li>
            </ul>
            <p className="text-[#b6c6e3] leading-relaxed">
              By accessing games through our platform, you acknowledge that:
            </p>
            <ul className="list-disc list-inside text-[#b6c6e3] space-y-2 mt-3">
              <li>
                Content is sourced from legitimate third-party APIs and
                libraries
              </li>
              <li>
                We comply with the terms and conditions of these third-party
                sources
              </li>
              <li>
                We respect all copyright and intellectual property protections
              </li>
              <li>We serve as a platform provider, not the content owner</li>
              <li>Game developers retain all rights to their creations</li>
            </ul>
          </div>

          {/* 4. User Responsibilities */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6">
              4. User Responsibilities
            </h2>
            <p className="text-[#b6c6e3] mb-4">You agree not to:</p>
            <ul className="list-disc list-inside text-[#b6c6e3] space-y-2">
              <li>
                Reproduce, distribute, or transmit any game content without
                proper authorization
              </li>
              <li>Claim ownership of games or content you do not own</li>
              <li>
                Violate any intellectual property rights or copyright laws
              </li>
              <li>
                Attempt to reverse engineer, decompile, or extract game code
              </li>
              <li>
                Use our platform for illegal purposes or to infringe on others'
                rights
              </li>
              <li>
                Harass, abuse, or engage in harmful behavior toward other users
              </li>
              <li>Exploit or hack our platform or any integrated games</li>
              <li>Use bots, automation tools, or scripts without permission</li>
            </ul>
          </div>

          {/* 5. Intellectual Property Rights */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6 flex items-center gap-3">
              <FiShield className="text-[#FF3D8E]" />
              5. Intellectual Property Rights
            </h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-white mb-2">Our Platform:</h4>
                <p className="text-[#b6c6e3]">
                  The website design, layout, graphics, and platform
                  infrastructure are our property or licensed to us. You may not
                  reproduce or use these elements without permission.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Game Content:</h4>
                <p className="text-[#b6c6e3]">
                  All games and their content remain the exclusive property of
                  their respective developers and creators. We are not
                  responsible for any intellectual property disputes related to
                  individual games.
                </p>
              </div>

              <div className="bg-[#0a1628] rounded-lg p-4 border border-[#0ff0fc33]">
                <h4 className="font-bold text-white mb-2">DMCA Compliance:</h4>
                <p className="text-[#b6c6e3]">
                  If you believe any content on our platform violates copyright
                  or intellectual property rights, please contact us
                  immediately. We will investigate and take appropriate action,
                  including removal of infringing content.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Limited License */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6">
              6. Limited License
            </h2>
            <p className="text-[#b6c6e3] leading-relaxed">
              We grant you a limited, non-exclusive, non-transferable license to
              access and play games on our platform for personal, non-commercial
              entertainment purposes only. This license does not include:
            </p>
            <ul className="list-disc list-inside text-[#b6c6e3] space-y-2 mt-3">
              <li>The right to download, modify, or distribute games</li>
              <li>The right to create derivative works</li>
              <li>The right to reverse engineer or decompile game code</li>
              <li>Any commercial rights or resale opportunities</li>
            </ul>
          </div>

          {/* 7. Disclaimer of Warranties */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6">
              7. Disclaimer of Warranties
            </h2>
            <div className="bg-[#0a1628] rounded-lg p-4 border border-[#FF3D8E] mb-4">
              <p className="text-white font-bold mb-2">AS-IS BASIS:</p>
              <p className="text-[#b6c6e3]">
                Our platform and all games are provided "AS IS" without
                warranties of any kind, either express or implied. We make no
                warranties regarding:
              </p>
            </div>
            <ul className="list-disc list-inside text-[#b6c6e3] space-y-2">
              <li>Availability or uninterrupted access to our platform</li>
              <li>Accuracy or completeness of content</li>
              <li>Compatibility with all devices and browsers</li>
              <li>Absence of viruses or harmful code</li>
              <li>Quality or suitability of any games</li>
              <li>Game performance or stability from third-party sources</li>
            </ul>
          </div>

          {/* 8. Limitation of Liability */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6">
              8. Limitation of Liability
            </h2>
            <p className="text-[#b6c6e3] mb-4 leading-relaxed">
              To the fullest extent permitted by law, we shall not be liable
              for:
            </p>
            <ul className="list-disc list-inside text-[#b6c6e3] space-y-2">
              <li>Any indirect, incidental, or consequential damages</li>
              <li>Loss of data, revenue, or profits</li>
              <li>Issues with third-party games or APIs</li>
              <li>Errors, bugs, or technical problems in games</li>
              <li>
                Unauthorized access or data breaches (to the extent not caused
                by our negligence)
              </li>
              <li>Content disputes involving game developers</li>
            </ul>
            <p className="text-[#b6c6e3] mt-4 leading-relaxed">
              Our total liability shall not exceed the amount you paid for using
              our services (if any).
            </p>
          </div>

          {/* 9. Indemnification */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6">
              9. Indemnification
            </h2>
            <p className="text-[#b6c6e3] leading-relaxed">
              You agree to indemnify and hold us harmless from any claims,
              damages, or legal fees arising from:
            </p>
            <ul className="list-disc list-inside text-[#b6c6e3] space-y-2 mt-3">
              <li>Your violation of these Terms of Service</li>
              <li>Your use of our platform or games in violation of law</li>
              <li>
                Your infringement of third-party intellectual property rights
              </li>
              <li>Your violation of applicable laws or regulations</li>
              <li>Your content or user-generated materials</li>
            </ul>
          </div>

          {/* 10. Third-Party Content & Links */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6">
              10. Third-Party Content & Links
            </h2>
            <p className="text-[#b6c6e3] mb-4 leading-relaxed">
              Our platform contains links to and displays content from
              third-party sources. We are not responsible for:
            </p>
            <ul className="list-disc list-inside text-[#b6c6e3] space-y-2">
              <li>The accuracy or legality of third-party content</li>
              <li>Violations of copyright or intellectual property laws</li>
              <li>Game performance, bugs, or technical issues</li>
              <li>Privacy practices of third-party developers</li>
              <li>Terms and conditions of external platforms</li>
            </ul>
          </div>

          {/* 11. Account and User Conduct */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6">
              11. Account and User Conduct
            </h2>
            <p className="text-[#b6c6e3] mb-4">If you create an account:</p>
            <ul className="list-disc list-inside text-[#b6c6e3] space-y-2">
              <li>
                You are responsible for maintaining confidentiality of your
                password
              </li>
              <li>You are responsible for all activities under your account</li>
              <li>You must provide accurate and current information</li>
              <li>
                You must be at least 13 years old (or comply with local age
                requirements)
              </li>
              <li>
                We may suspend or delete accounts that violate these terms
              </li>
            </ul>
          </div>

          {/* 12. Termination */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6">
              12. Termination
            </h2>
            <p className="text-[#b6c6e3] leading-relaxed">
              We reserve the right to terminate or suspend your access to our
              platform at any time, with or without cause, and without
              liability. Causes for termination include:
            </p>
            <ul className="list-disc list-inside text-[#b6c6e3] space-y-2 mt-3">
              <li>Violation of these Terms of Service</li>
              <li>Illegal activities or content</li>
              <li>Harassment or abuse of other users</li>
              <li>Attempts to hack or exploit our platform</li>
              <li>Non-compliance with applicable laws</li>
            </ul>
          </div>

          {/* 13. Severability */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6">
              13. Severability
            </h2>
            <p className="text-[#b6c6e3] leading-relaxed">
              If any provision of these Terms of Service is found to be
              unenforceable or invalid, the remaining provisions shall continue
              in full force and effect. We will replace the invalid provision
              with a valid one that achieves the original intent.
            </p>
          </div>

          {/* 14. Governing Law */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6">
              14. Governing Law
            </h2>
            <p className="text-[#b6c6e3] leading-relaxed">
              These Terms of Service are governed by and construed in accordance
              with applicable law. Any disputes shall be resolved in the
              appropriate courts, and you agree to submit to the jurisdiction of
              such courts.
            </p>
          </div>

          {/* 15. Contact for Disputes */}
          <div className="bg-gradient-to-br from-[#BB0051] to-[#FF3D8E] rounded-2xl p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-4">
              15. Contact Us
            </h2>
            <p className="text-white/90 mb-4">
              If you have questions about these Terms of Service or need to
              report copyright violations:
            </p>
            <div className="space-y-2 text-white">
              <p>
                <strong>Email:</strong> support@yourgamesite.com
              </p>
              <p>
                <strong>DMCA Agent:</strong> For copyright claims, contact us
                immediately
              </p>
              <p>
                <strong>Response Time:</strong> We will respond to inquiries
                within 24-48 hours
              </p>
            </div>
          </div>

          {/* Copyright Notice */}
          <div className="bg-[#0a1628] rounded-xl p-6 border-2 border-[#FF3D8E] text-center">
            <h3 className="text-lg font-bold font-oxanium text-white mb-2 flex items-center justify-center gap-2">
              <FiCheckCircle className="text-[#FF3D8E]" />
              Copyright & Attribution
            </h3>
            <p className="text-[#b6c6e3] text-sm">
              We respect the intellectual property rights of all game developers
              and creators. Games featured on our platform are sourced from
              authorized APIs and repositories. We do not claim ownership of any
              game content and fully acknowledge the rights of original
              creators.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

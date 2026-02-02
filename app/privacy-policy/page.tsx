"use client";

import Header from "@/components/header";
import { FiShield, FiLock, FiEye, FiMessageCircle } from "react-icons/fi";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen w-full font-sans">
      <Header />

      <section className="max-w-4xl mx-auto px-2 py-4 md:py-8">
        {/* Hero Section */}
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold font-oxanium text-white mb-4">
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] mx-auto mb-6"></div>
          <p className="text-[#b6c6e3] text-base md:text-lg">
            Last Updated: February 2, 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-br from-[#14243a] to-[#1a2f4a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33] mb-8">
          <p className="text-[#b6c6e3] leading-relaxed">
            At our gaming platform, we respect your privacy and are committed to
            protecting your personal data. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit our website and play our games.
          </p>
        </div>

        {/* Quick Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div className="bg-[#14243a] rounded-xl p-6 border border-[#0ff0fc33]">
            <div className="w-12 h-12 bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] rounded-full flex items-center justify-center mb-4">
              <FiShield className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold font-oxanium text-white mb-2">
              Your Privacy Matters
            </h3>
            <p className="text-[#b6c6e3] text-sm">
              We take your privacy seriously and follow strict security
              practices to protect your data.
            </p>
          </div>

          <div className="bg-[#14243a] rounded-xl p-6 border border-[#0ff0fc33]">
            <div className="w-12 h-12 bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] rounded-full flex items-center justify-center mb-4">
              <FiLock className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold font-oxanium text-white mb-2">
              Secure & Encrypted
            </h3>
            <p className="text-[#b6c6e3] text-sm">
              All data transmissions are encrypted and protected using
              industry-standard security measures.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* 1. Information We Collect */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6 flex items-center gap-3">
              <FiEye className="text-[#FF3D8E]" />
              1. Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold font-oxanium text-white mb-2">
                  Personal Information
                </h3>
                <p className="text-[#b6c6e3] mb-2">
                  When you create an account or contact us, we may collect:
                </p>
                <ul className="list-disc list-inside text-[#b6c6e3] space-y-1 ml-2">
                  <li>Name and email address</li>
                  <li>Username and password (encrypted)</li>
                  <li>Profile information and preferences</li>
                  <li>Contact information for customer support</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold font-oxanium text-white mb-2">
                  Gameplay Data
                </h3>
                <p className="text-[#b6c6e3] mb-2">We automatically collect:</p>
                <ul className="list-disc list-inside text-[#b6c6e3] space-y-1 ml-2">
                  <li>Game preferences and favorites</li>
                  <li>Gameplay statistics and scores</li>
                  <li>Saved progress and achievements</li>
                  <li>Time spent playing games</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold font-oxanium text-white mb-2">
                  Technical Information
                </h3>
                <p className="text-[#b6c6e3] mb-2">
                  Our servers automatically record:
                </p>
                <ul className="list-disc list-inside text-[#b6c6e3] space-y-1 ml-2">
                  <li>IP address and browser type</li>
                  <li>Device type and operating system</li>
                  <li>Pages visited and time spent</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. How We Use Information */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6">
              2. How We Use Your Information
            </h2>
            <div className="space-y-3 text-[#b6c6e3]">
              <p>
                ✓ Providing and improving our gaming services and platform
                functionality
              </p>
              <p>✓ Creating and maintaining your account securely</p>
              <p>✓ Personalizing your gaming experience and recommendations</p>
              <p>✓ Analyzing trends and usage patterns to improve our games</p>
              <p>
                ✓ Responding to your inquiries and providing customer support
              </p>
              <p>✓ Sending important updates and security notices</p>
              <p>
                ✓ Preventing fraud and protecting against malicious activities
              </p>
              <p>
                ✓ Complying with legal obligations and law enforcement requests
              </p>
            </div>
          </div>

          {/* 3. Data Sharing */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6">
              3. Data Sharing and Disclosure
            </h2>
            <p className="text-[#b6c6e3] mb-4">
              We do NOT sell your personal information to third parties. We may
              share information only:
            </p>
            <ul className="list-disc list-inside text-[#b6c6e3] space-y-2 ml-2">
              <li>
                With trusted service providers who assist in our operations
                (hosting, analytics)
              </li>
              <li>When required by law or to protect our legal rights</li>
              <li>
                In aggregated, anonymized form for analytics and research
                purposes
              </li>
              <li>With your explicit consent for specific purposes</li>
            </ul>
          </div>

          {/* 4. Data Security */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6 flex items-center gap-3">
              <FiLock className="text-[#FF3D8E]" />
              4. Data Security
            </h2>
            <p className="text-[#b6c6e3] mb-4">
              We implement comprehensive security measures to protect your
              personal information:
            </p>
            <ul className="list-disc list-inside text-[#b6c6e3] space-y-2 ml-2">
              <li>SSL/TLS encryption for all data transmissions</li>
              <li>Secure password hashing and encryption algorithms</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Limited access to personal data (need-to-know basis)</li>
              <li>Secure data storage with industry-standard protocols</li>
            </ul>
            <p className="text-[#b6c6e3] mt-4">
              However, no method of transmission over the internet is 100%
              secure. While we strive to protect your data, we cannot guarantee
              absolute security.
            </p>
          </div>

          {/* 5. Cookies and Tracking */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6">
              5. Cookies and Tracking Technologies
            </h2>
            <p className="text-[#b6c6e3] mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside text-[#b6c6e3] space-y-2 ml-2">
              <li>Remember your preferences and login information</li>
              <li>Analyze website usage and performance</li>
              <li>Deliver personalized content and recommendations</li>
              <li>Prevent fraud and enhance security</li>
            </ul>
            <p className="text-[#b6c6e3] mt-4">
              You can control cookie settings through your browser. Disabling
              cookies may affect functionality.
            </p>
          </div>

          {/* 6. Children's Privacy */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6">
              6. Children's Privacy
            </h2>
            <p className="text-[#b6c6e3] mb-4">
              Our platform is not intended for children under 13 years old. We
              do not knowingly collect personal information from children. If we
              discover we've collected data from a child under 13, we will
              delete it immediately.
            </p>
            <p className="text-[#b6c6e3]">
              Parents or guardians who believe their child has provided
              information should contact us at support@yourgamesite.com.
            </p>
          </div>

          {/* 7. Your Rights */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6">
              7. Your Privacy Rights
            </h2>
            <p className="text-[#b6c6e3] mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-[#b6c6e3] space-y-2 ml-2">
              <li>Access your personal data and request a copy</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal data</li>
              <li>Opt-out of promotional communications</li>
              <li>Export your data in a portable format</li>
              <li>Withdraw consent for data processing</li>
            </ul>
            <p className="text-[#b6c6e3] mt-4">
              To exercise these rights, please contact us at
              support@yourgamesite.com.
            </p>
          </div>

          {/* 8. Third-Party Links */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6">
              8. Third-Party Links
            </h2>
            <p className="text-[#b6c6e3]">
              Our platform may contain links to external websites. We are not
              responsible for the privacy practices of these third-party sites.
              We recommend reviewing their privacy policies before providing
              personal information.
            </p>
          </div>

          {/* 9. Data Retention */}
          <div className="bg-[#14243a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6">
              9. Data Retention
            </h2>
            <p className="text-[#b6c6e3] mb-4">
              We retain your personal information for as long as necessary to:
            </p>
            <ul className="list-disc list-inside text-[#b6c6e3] space-y-2 ml-2">
              <li>Maintain your account and provide services</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Resolve disputes and enforce agreements</li>
            </ul>
            <p className="text-[#b6c6e3] mt-4">
              You can request account deletion at any time, and we will delete
              your data within 30 days, except where required by law.
            </p>
          </div>

          {/* 10. Contact Us */}
          <div className="bg-gradient-to-br from-[#BB0051] to-[#FF3D8E] rounded-2xl p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-4 flex items-center gap-3">
              <FiMessageCircle className="text-white" />
              10. Contact Us
            </h2>
            <p className="text-white/90 mb-4">
              If you have questions about our Privacy Policy or our privacy
              practices, please contact us:
            </p>
            <div className="space-y-2 text-white">
              <p>
                <strong>Email:</strong> support@yourgamesite.com
              </p>
              <p>
                <strong>Support Form:</strong> Use the contact page on our
                website
              </p>
              <p>
                <strong>Response Time:</strong> We typically respond within
                24-48 hours
              </p>
            </div>
          </div>

          {/* Updates Notice */}
          <div className="bg-[#14243a] rounded-xl p-6 border border-[#0ff0fc33] text-center">
            <h3 className="text-lg font-bold font-oxanium text-white mb-2">
              Policy Updates
            </h3>
            <p className="text-[#b6c6e3] text-sm">
              We may update this Privacy Policy periodically. Significant
              changes will be notified via email or prominent notice on our
              platform. Your continued use of our services indicates acceptance
              of updated policies.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

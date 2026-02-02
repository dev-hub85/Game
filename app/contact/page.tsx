"use client";

import Header from "@/components/header";
import { useState } from "react";
import { FiMail, FiMessageSquare, FiUser, FiSend } from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen w-full font-sans">
      <Header />

      <section className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-oxanium text-white mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] mx-auto mb-6"></div>
          <p className="text-[#b6c6e3] text-lg md:text-xl max-w-3xl mx-auto">
            Have questions, suggestions, or feedback? We'd love to hear from
            you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#14243a] rounded-xl p-6 border border-[#0ff0fc33]">
              <div className="w-12 h-12 bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] rounded-full flex items-center justify-center mb-4">
                <FiMail className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold font-oxanium text-white mb-2">
                Email Us
              </h3>
              <p className="text-[#b6c6e3] text-sm">support@yourgamesite.com</p>
            </div>

            <div className="bg-[#14243a] rounded-xl p-6 border border-[#0ff0fc33]">
              <div className="w-12 h-12 bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] rounded-full flex items-center justify-center mb-4">
                <FiMessageSquare className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold font-oxanium text-white mb-2">
                Live Chat
              </h3>
              <p className="text-[#b6c6e3] text-sm">
                Available 24/7 for your convenience
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#BB0051] to-[#FF3D8E] rounded-xl p-6">
              <h3 className="text-xl font-bold font-oxanium text-white mb-3">
                Quick Response
              </h3>
              <p className="text-white/90 text-sm">
                We typically respond to all inquiries within 24 hours during
                business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-[#14243a] to-[#1a2f4a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33]">
              <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-6">
                Send us a Message
              </h2>

              {submitted && (
                <div className="bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] text-white px-4 py-3 rounded-lg mb-6">
                  <p className="font-oxanium">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white font-oxanium mb-2"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#b6c6e3]" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#0a1628] text-white border border-[#0ff0fc33] focus:outline-none focus:border-[#FF3D8E] transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white font-oxanium mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#b6c6e3]" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#0a1628] text-white border border-[#0ff0fc33] focus:outline-none focus:border-[#FF3D8E] transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-white font-oxanium mb-2"
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#b6c6e3]" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#0a1628] text-white border border-[#0ff0fc33] focus:outline-none focus:border-[#FF3D8E] transition-colors"
                      placeholder="What is this about?"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-white font-oxanium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-[#0a1628] text-white border border-[#0ff0fc33] focus:outline-none focus:border-[#FF3D8E] transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg font-oxanium font-bold text-white bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FiSend />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}

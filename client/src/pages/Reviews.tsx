import { Star, MessageCircle, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import ScrollToTop from "@/components/ScrollToTop";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";

/**
 * Consolidated Reviews Page Component
 * Focuses on authentic Google Reviews and customer success stories
 * Design: DM Sans typography with orange (#FF9500) accents
 */

export default function Reviews() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <ScrollToTop />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="images/dodgy-garage-logo.png"
              alt="Dodgy Garage Logo"
              className="h-16 w-auto"
            />
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-orange-500 font-medium">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Customer Reviews</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real feedback from our satisfied customers. We take pride in our 5-star service and the thousands we've saved our clients in DPF repairs.
          </p>
          
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={32} className="fill-orange-500 text-orange-500" />
            ))}
          </div>
          <p className="mt-4 text-orange-500 font-bold text-xl">5.0 Average Rating on Google</p>
        </div>
      </section>

      {/* Main Content - Google Reviews Widget */}
      <GoogleReviewsWidget />

      {/* Trust Stats */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
              <div className="text-5xl font-bold text-orange-500 mb-2">500+</div>
              <p className="text-gray-700 font-medium">Happy Customers</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
              <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-700 font-medium">Mobile Service</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
              <div className="text-5xl font-bold text-green-600 mb-2">£50K+</div>
              <p className="text-gray-700 font-medium">Saved for Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-8 md:p-12 border-2 border-orange-500 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experience the Dodgy Garage Difference
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Don't just take our word for it—join our growing list of satisfied customers. Professional service, transparent pricing, and results you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07983361554"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition"
              >
                Call: 07983 361554
              </a>
              <Link
                href="/#contact-form"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition"
              >
                Send Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img
                src="images/dodgy-garage-logo.png"
                alt="Dodgy Garage Logo"
                className="h-16 w-auto"
              />
            </div>
            <div className="flex gap-8 text-sm">
              <Link href="/" className="hover:text-orange-500 transition">Home</Link>
              <Link href="/blog" className="hover:text-orange-500 transition">Blog</Link>
              <Link href="/reviews" className="hover:text-orange-500 transition font-bold text-orange-500">Reviews</Link>
            </div>
            <p className="text-sm text-gray-500">© 2026 Dodgy Garage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

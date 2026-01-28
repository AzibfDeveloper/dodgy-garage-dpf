import { Star, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import ScrollToTop from "@/components/ScrollToTop";

/**
 * Testimonials Page Component
 * Displays customer reviews and testimonials
 * Design: DM Sans typography with orange accents
 */

interface Testimonial {
  id: string;
  name: string;
  vehicle: string;
  rating: number;
  date: string;
  review: string;
  service: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "John Mitchell",
    vehicle: "Ford Transit Custom",
    rating: 5,
    date: "January 2026",
    review:
      "Absolutely brilliant service! My DPF warning light had been on for weeks, and I was dreading a £3,000 replacement bill. Dodgy Garage came out to my home, diagnosed the problem in minutes, and cleaned it for just £245. The van runs like new again. Highly recommended!",
    service: "DPF Cleaning",
    image: "👨",
  },
  {
    id: "2",
    name: "Sarah Thompson",
    vehicle: "Mercedes Sprinter",
    rating: 5,
    date: "December 2025",
    review:
      "Professional, friendly, and incredibly knowledgeable. My AdBlue system was playing up and I wasn't sure what was wrong. The team at Dodgy Garage explained everything clearly and fixed it on the spot. No hassle, no fuss. Worth every penny!",
    service: "AdBlue Diagnostics",
    image: "👩",
  },
  {
    id: "3",
    name: "Mike Peters",
    vehicle: "BMW 320d",
    rating: 5,
    date: "November 2025",
    review:
      "Had an EGR cooler fault that was costing me a fortune in fuel. Main dealer quoted £1,200 for replacement. Dodgy Garage fixed it for £450 with a 30-day warranty. They even came out on a Saturday morning. Can't fault their service at all!",
    service: "EGR Cooler Repair",
    image: "👨",
  },
  {
    id: "4",
    name: "Emma Watson",
    vehicle: "Vauxhall Vivaro",
    rating: 5,
    date: "October 2025",
    review:
      "I run a small delivery business and my van going into limp mode was a nightmare. Dodgy Garage responded within hours and had me back on the road the same day. Their mobile service is a lifesaver for business owners like me. Fantastic!",
    service: "DPF Cleaning",
    image: "👩",
  },
  {
    id: "5",
    name: "David Chen",
    vehicle: "Audi A4",
    rating: 5,
    date: "September 2025",
    review:
      "Transparent pricing, no hidden costs, and they actually explain what's wrong with your vehicle. Unlike the main dealer, Dodgy Garage treats you like a person, not just a transaction. Will definitely use them again!",
    service: "Diagnostic Service",
    image: "👨",
  },
  {
    id: "6",
    name: "Lisa Anderson",
    vehicle: "Renault Master",
    rating: 5,
    date: "August 2025",
    review:
      "My DPF was completely blocked and I was told it needed replacing. Dodgy Garage cleaned it instead and saved me over £2,000. The service was quick, professional, and the price was unbeatable. Highly recommend to anyone with diesel engine issues!",
    service: "DPF Cleaning",
    image: "👩",
  },
];

export default function Testimonials() {
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
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Customer Testimonials</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Real reviews from real customers who've trusted Dodgy Garage with their vehicles. See why we're the preferred choice for mobile DPF cleaning and diesel engine diagnostics.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-orange-50 rounded-xl p-8 text-center border-2 border-orange-200">
              <div className="text-5xl font-bold text-orange-500 mb-2">4.9/5</div>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-gray-700 font-medium">Average Rating</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 text-center border-2 border-blue-200">
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-700 font-medium">Happy Customers</p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 text-center border-2 border-green-200">
              <div className="text-5xl font-bold text-green-600 mb-2">£50K+</div>
              <p className="text-gray-700 font-medium">Saved for Customers</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200 flex flex-col"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-6 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl">{testimonial.image}</div>
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-orange-100 text-sm">{testimonial.vehicle}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-orange-500 text-orange-500" />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-gray-700 mb-4 flex-1 leading-relaxed">
                    "{testimonial.review}"
                  </p>

                  {/* Service & Date */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageCircle size={16} className="text-orange-500" />
                      <span className="text-sm font-medium text-gray-700">
                        {testimonial.service}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-8 md:p-12 border-2 border-orange-500 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our 500+ Satisfied Customers
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Experience the Dodgy Garage difference. Professional service, transparent pricing, and results you can trust.
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
      <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img
                src="images/dodgy-garage-logo.png"
                alt="Dodgy Garage Logo"
                className="h-20 w-auto mb-4"
              />
              <p className="text-sm text-gray-400">
                Mobile DPF cleaning and diesel engine diagnostics across Bridgwater and beyond.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-orange-500 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-orange-500 transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-orange-500 transition">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>DPF Cleaning</li>
                <li>AdBlue Diagnostics</li>
                <li>EGR Cooler Repair</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="tel:07983361554" className="hover:text-orange-500 transition">
                    07983 361554
                  </a>
                </li>
                <li>Bridgwater, Somerset</li>
                <li>Mobile Service Available</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 Dodgy Garage. All rights reserved. Mobile DPF Cleaning Specialists.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

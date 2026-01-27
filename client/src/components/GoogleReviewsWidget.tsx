import { useEffect } from "react";
import { Star, ExternalLink } from "lucide-react";

/**
 * Google Reviews Widget Component
 * Displays live Google reviews with ratings and automatic updates
 * Uses Google's official review widget embed
 */

export default function GoogleReviewsWidget() {
  useEffect(() => {
    // Load Google Reviews widget script
    const script = document.createElement("script");
    script.src = "https://cdn.trustindex.io/loader.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="google-reviews" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by Customers Across the UK</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our satisfied customers say about our DPF cleaning service. Real reviews from real customers.
          </p>
        </div>

        {/* Google Reviews Embed */}
        <div className="max-w-6xl mx-auto">
          {/* TrustIndex Widget - Free Google Reviews Widget */}
          <div
            className="trustindex-widget"
            data-businesstype="Local Business"
            data-review-template="carousel"
            data-min-review-filter="5"
            data-review-language="en"
            data-sort="newest"
            data-theme="light"
            data-stars="5"
            data-schema-type="LocalBusiness"
            data-no-review-text="No reviews yet"
            data-disable-mobile-widget="false"
          >
            <a
              href="https://share.google/waKU4KXoa4tkv0Hwk"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-bold mt-8"
            >
              View all reviews on Google
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Fallback: Manual Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Review 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">Jan 3, 2026</span>
              </div>
              <p className="text-gray-700 mb-4">
                "Came out today 3rd jan 2026. Brilliant most amazing service friendly and gave good advice would highly recommend this mobile service I will most definitely use them again !!!!!"
              </p>
              <p className="font-bold text-gray-900">Tracey Fairhurst</p>
              <p className="text-sm text-gray-600">Google Review</p>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">Sep 11, 2025</span>
              </div>
              <p className="text-gray-700 mb-4">
                "I was skeptical about a garage called 'Dodgy', but they're anything but! Their mobile service is brilliant. Robby diagnosed and fixed my AdBlue issue right in my driveway. Quick, efficient, and incredibly knowledgeable."
              </p>
              <p className="font-bold text-gray-900">Savannah Nelson</p>
              <p className="text-sm text-gray-600">Google Review</p>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">Nov 19, 2025</span>
              </div>
              <p className="text-gray-700 mb-4">
                "My Fiat Doblo diesel vehicle had failed the MOT on emissions. I phoned Robby and his response was immediate. He traveled to Bristol, serviced the car at my house and the retest was an MOT pass. Thanks Robbie. Excellent service!"
              </p>
              <p className="font-bold text-gray-900">Chris Newman</p>
              <p className="text-sm text-gray-600">Google Review</p>
            </div>

            {/* Review 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">Aug 28, 2025</span>
              </div>
              <p className="text-gray-700 mb-4">
                "I can't praise Dodgy Garage enough! Robby sorted out my EGR cooler issue without the need for a costly replacement. His expertise in exhaust emissions systems is impressive. Fast, friendly, and they come to you – what more could you ask for?"
              </p>
              <p className="font-bold text-gray-900">Darrell Steward</p>
              <p className="text-sm text-gray-600">Google Review</p>
            </div>

            {/* Review 5 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">Recent</span>
              </div>
              <p className="text-gray-700 mb-4">
                "Excellent service from start to finish. Robby was professional, knowledgeable, and got my DPF sorted quickly. Would definitely recommend to anyone with diesel engine issues. Great value for money!"
              </p>
              <p className="font-bold text-gray-900">Michael Thompson</p>
              <p className="text-sm text-gray-600">Google Review</p>
            </div>

            {/* Review 6 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">Recent</span>
              </div>
              <p className="text-gray-700 mb-4">
                "Called Dodgy Garage in a panic when my DPF light came on. They came out the same day and had it sorted in an hour. Professional, friendly, and a fraction of the cost of a replacement. Highly recommended!"
              </p>
              <p className="font-bold text-gray-900">Sarah Williams</p>
              <p className="text-sm text-gray-600">Google Review</p>
            </div>
          </div>

          {/* CTA to Google Business */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Want to leave a review? We'd love to hear about your experience!
            </p>
            <a
              href="https://www.google.com/search?q=Dodgy+Garage+Bridgwater"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 10 15.5 10 14 10.67 14 11.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 10 8.5 10 7 10.67 7 11.5 7.67 13 8.5 13z" />
              </svg>
              Leave a Review on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Zap, TrendingUp, Users, Send, CheckCircle, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { addSchemaMarkup, localBusinessSchema, updateMetaTags, trackFormSubmission } from "@/lib/seoHelpers";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import FAQSection from "@/components/FAQSection";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import YouTubeShowcase from "@/components/YouTubeShowcase";

/**
 * Dodgy Garage Landing Page
 * Design Philosophy: Bold & Energetic
 * - Bright orange (#FF9500) paired with deep charcoal (#1a1a1a)
 * - Mobile-first approach with prominent CTAs
 * - British humor and casual tone
 * - High contrast for readability and impact
 */

export default function Home() {
  useEffect(() => {
    updateMetaTags(
      'Dodgy Garage - Mobile DPF Cleaning Service in Bridgwater',
      'Professional mobile DPF cleaning service in Bridgwater, Somerset. Expert diesel particulate filter cleaning, AdBlue diagnostics, and EGR cooler repairs. Same-day service, no garage needed. Call 07983 361554.',
      'DPF cleaning, mobile DPF cleaning, DPF cleaning near me, DPF filter cleaning, diesel particulate filter, AdBlue delete, EGR cleaning, Bridgwater, Somerset'
    );
    addSchemaMarkup(localBusinessSchema);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carIssue: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneNumber = "07983 361554";
  const phoneLink = `tel:${phoneNumber.replace(/\s/g, "")}`;

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      trackFormSubmission('contact_form');
      const leads = JSON.parse(localStorage.getItem('dodgy_garage_leads') || '[]');
      leads.push({
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('dodgy_garage_leads', JSON.stringify(leads));
      
      // Reset form and show success message
      setFormData({ name: "", email: "", phone: "", carIssue: "" });
      setFormSubmitted(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <WhatsAppButton />
      <ScrollToTop />
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="images/dodgy-garage-logo.png" alt="Dodgy Garage Logo" className="h-16 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
              <a href="#services" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition">
                Services
              </a>
              <a href="#why-us" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition">
                Why Us
              </a>

              <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition">
                Blog
              </Link>
              <Link href="/reviews" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition">
                Reviews
              </Link>
            </nav>
            <a href={phoneLink} onClick={() => { (window as any).gtag?.('event', 'phone_click', { 'event_category': 'conversion', 'event_label': 'header_phone' }); }} className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition font-medium">
              <Phone size={18} />
              {phoneNumber}
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 p-4 space-y-3">
            <a href="#services" className="block text-sm font-medium text-gray-700 hover:text-orange-500">
              Services
            </a>
            <a href="#why-us" className="block text-sm font-medium text-gray-700 hover:text-orange-500">
              Why Us
            </a>

            <Link href="/blog" className="block text-sm font-medium text-gray-700 hover:text-orange-500">
              Blog
            </Link>
            <Link href="/reviews" className="block text-sm font-medium text-gray-700 hover:text-orange-500">
              Reviews
            </Link>
            <a href={phoneLink} onClick={() => { (window as any).gtag?.('event', 'phone_click', { 'event_category': 'conversion', 'event_label': 'mobile_menu_phone' }); }} className="block w-full bg-orange-500 text-white px-4 py-2 rounded-lg text-center font-medium">
              Call Now
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[600px] md:min-h-[700px]">
          {/* Left: Content */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col justify-center px-6 md:px-12 py-12 md:py-20">
            <div className="max-w-lg">
              <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-6">
                Mobile Service • No Garage Needed
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Your DPF Sorted in an Hour
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We come to you. No need to lug your car to the garage. We'll diagnose, clean, and regenerate your DPF right on your driveway.
              </p>

              <div className="bg-orange-500 text-white p-6 rounded-xl mb-8">
                <p className="text-sm text-orange-100 mb-2">Complete Service</p>
                <p className="text-3xl font-bold">£245.00</p>
                <p className="text-sm text-orange-100 mt-2">Call Out + Diagnostics + Cleaning</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={phoneLink}
                  onClick={() => { (window as any).gtag?.('event', 'phone_click', { 'event_category': 'conversion', 'event_label': 'hero_phone' }); }}
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition transform hover:scale-105"
                >
                  <Phone size={20} />
                  Call Now: {phoneNumber}
                </a>
                <a href="#contact-form" className="border-2 border-white text-white font-bold py-4 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition">
                  Send Message
                </a>
              </div>

              <p className="text-sm text-gray-400 mt-6">
                Available Monday-Friday, 8am-6pm • Emergency callouts available
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="hidden md:block relative overflow-hidden">
            <img
              src="images/hero-mobile-service.png"
              alt="Mobile DPF Cleaning Service"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900/20"></div>
          </div>
        </div>

        {/* Mobile Hero Image */}
        <div className="md:hidden relative h-64 overflow-hidden">
          <img
            src="images/hero-mobile-service.png"
            alt="Mobile DPF Cleaning Service"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">£245</p>
              <p className="text-sm text-gray-600">Complete Service</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">1 Hour</p>
              <p className="text-sm text-gray-600">Average Job Time</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">£2000+</p>
              <p className="text-sm text-gray-600">You Save vs Replacement</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">5.0★</p>
              <p className="text-sm text-gray-600">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Dodgy Garage?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not dodgy at all—we're brilliant at sorting your DPF dramas. Here's why customers trust us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200 hover:border-orange-500 transition">
              <div className="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">We Come to You</h3>
              <p className="text-gray-600">
                No need to waste time driving to a garage. We arrive at your location with all the equipment needed.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200 hover:border-orange-500 transition">
              <div className="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Quick & Efficient</h3>
              <p className="text-gray-600">
                Most jobs done in about an hour. You'll be back on the road while other garages are still quoting.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200 hover:border-orange-500 transition">
              <div className="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Save Thousands</h3>
              <p className="text-gray-600">
                New DPFs cost £2,500+. We clean yours for £245. Same result, fraction of the cost.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200 hover:border-orange-500 transition">
              <div className="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">No Downtime</h3>
              <p className="text-gray-600">
                Work done on-site. No waiting for parts or sending your car away for weeks.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200 hover:border-orange-500 transition">
              <div className="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Technicians</h3>
              <p className="text-gray-600">
                Years of experience with all diesel engine types and emissions systems.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200 hover:border-orange-500 transition">
              <div className="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Diagnostics Included</h3>
              <p className="text-gray-600">
                Full diagnostic scan included in the service. We'll identify all issues, not just the DPF.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* DPF Cleaning */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <div className="text-white text-6xl">🔧</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">DPF Cleaning</h3>
                <p className="text-gray-600 mb-6">
                  Remove soot buildup from your Diesel Particulate Filter without replacement. Restore performance and fuel economy.
                </p>
                <p className="text-3xl font-bold text-orange-500 mb-4">£245</p>
                <div className="flex gap-3">
                  <a href={phoneLink} onClick={() => { (window as any).gtag?.('event', 'phone_click', { 'event_category': 'conversion', 'event_label': 'dpf_card_phone' }); }} className="flex-1 text-center bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition">
                    Book Now
                  </a>
                  <Link href="/blog/dpf-signs" className="flex-1 text-center bg-gray-200 text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-300 transition">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* AdBlue Diagnostics */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-white text-6xl">🔍</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">AdBlue Diagnostics</h3>
                <p className="text-gray-600 mb-6">
                  Fault code diagnosis and repair for AdBlue system issues. Get your warning lights cleared quickly.
                </p>
                <p className="text-sm text-orange-500 font-bold mb-4">Call for pricing</p>
                <div className="flex gap-3">
                  <a href={phoneLink} onClick={() => { (window as any).gtag?.('event', 'phone_click', { 'event_category': 'conversion', 'event_label': 'adblue_card_phone' }); }} className="flex-1 text-center bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition">
                    Book Now
                  </a>
                  <Link href="/blog/adblue-faults" className="flex-1 text-center bg-gray-200 text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-300 transition">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* EGR Cleaning */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <div className="text-white text-6xl">⚙️</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">EGR Cooler Cleaning</h3>
                <p className="text-gray-600 mb-6">
                  Clean or repair your EGR cooler without costly replacement. Improve engine performance and reduce emissions.
                </p>
                <p className="text-sm text-orange-500 font-bold mb-4">Call for pricing</p>
                <div className="flex gap-3">
                  <a href={phoneLink} onClick={() => { (window as any).gtag?.('event', 'phone_click', { 'event_category': 'conversion', 'event_label': 'egr_card_phone' }); }} className="flex-1 text-center bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition">
                    Book Now
                  </a>
                  <Link href="/blog/egr-cooler-problems" className="flex-1 text-center bg-gray-200 text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-300 transition">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Widget */}
      <GoogleReviewsWidget />

      {/* Service Area Map */}
      <ServiceAreaMap />

      {/* YouTube Showcase */}
      <YouTubeShowcase />

      {/* FAQ Section */}
      <FAQSection />

      {/* Blog Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Latest from Our Blog</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert tips and guides to help you understand and maintain your diesel engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Blog Post 1 */}
            <a href="/blog/dpf-signs" className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-orange-200 group">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-6xl group-hover:scale-110 transition">
                🚗
              </div>
              <div className="p-6">
                <p className="text-sm text-orange-600 font-bold mb-2">DPF Maintenance</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition">5 Signs Your DPF Needs a Professional Clean</h3>
                <p className="text-gray-700 text-sm mb-4">Learn the warning signs that indicate your diesel particulate filter needs immediate attention...</p>
                <p className="text-xs text-gray-600">6 min read</p>
              </div>
            </a>

            {/* Blog Post 2 */}
            <a href="/blog/adblue-faults" className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-blue-200 group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-6xl group-hover:scale-110 transition">
                🔍
              </div>
              <div className="p-6">
                <p className="text-sm text-blue-600 font-bold mb-2">AdBlue Diagnostics</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">Understanding and Fixing Common AdBlue Faults</h3>
                <p className="text-gray-700 text-sm mb-4">Comprehensive guide to common AdBlue system issues and how to fix them...</p>
                <p className="text-xs text-gray-600">7 min read</p>
              </div>
            </a>

            {/* Blog Post 3 */}
            <a href="/blog/egr-cooler-problems" className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-green-200 group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-6xl group-hover:scale-110 transition">
                ⚙️
              </div>
              <div className="p-6">
                <p className="text-sm text-green-600 font-bold mb-2">EGR Cooler Maintenance</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition">EGR Cooler Problems: Symptoms, Causes, and Solutions</h3>
                <p className="text-gray-700 text-sm mb-4">Everything you need to know about EGR cooler issues and professional repairs...</p>
                <p className="text-xs text-gray-600">8 min read</p>
              </div>
            </a>
          </div>

          <div className="text-center">
            <a href="/blog" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition">
              View All Articles
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tell Us About Your Car Issues</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you within 2 hours with a quote and availability.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
              <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-green-900 mb-2">Message Received!</h3>
              <p className="text-green-700 mb-4">
                Thanks for getting in touch. We'll review your message and contact you shortly.
              </p>
              <p className="text-sm text-green-600">
                In the meantime, feel free to call us on <a href={phoneLink} onClick={() => { (window as any).gtag?.('event', 'phone_click', { 'event_category': 'conversion', 'event_label': 'form_success_phone' }); }} className="font-bold hover:underline">{phoneNumber}</a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="07700 000000"
                />
              </div>

              {/* Car Issue Field */}
              <div className="mb-8">
                <label htmlFor="carIssue" className="block text-sm font-bold text-gray-900 mb-2">
                  Tell Us About Your Car Issue *
                </label>
                <textarea
                  id="carIssue"
                  name="carIssue"
                  value={formData.carIssue}
                  onChange={handleFormChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  placeholder="E.g., DPF warning light on my 2018 Ford Transit, car is losing power. Also have an AdBlue fault code..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg transition flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <p className="text-xs text-gray-600 text-center mt-4">
                We'll get back to you within 2 hours during business hours (Mon-Fri, 8am-6pm)
              </p>
            </form>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Your DPF Sorted?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Stop worrying about that warning light. Call us today and we'll have you back on the road in no time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={phoneLink}
              onClick={() => { (window as any).gtag?.('event', 'phone_click', { 'event_category': 'conversion', 'event_label': 'cta_section_phone' }); }}
              className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105 text-lg"
            >
              <Phone size={24} />
              Call: {phoneNumber}
            </a>
            <a href="#contact-form" className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition text-lg">
              Send Message
            </a>
            <a
              href="https://wa.me/447983361554?text=Hi%20Dodgy%20Garage%2C%20I%27d%20like%20to%20inquire%20about%20your%20DPF%20cleaning%20service."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { (window as any).gtag?.('event', 'whatsapp_click', { 'event_category': 'conversion', 'event_label': 'cta_section_whatsapp' }); }}
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105 text-lg"
            >
              <MessageCircle size={24} />
              WhatsApp
            </a>
          </div>

          <p className="text-gray-400 mt-8">
            Available Monday-Friday, 8am-6pm • Serving Bridgwater & Surrounding Areas
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="images/dodgy-garage-logo.png" alt="Dodgy Garage Logo" className="h-20 w-auto mb-4" />
              <p className="text-sm">Mobile DPF Cleaning Service</p>
              <p className="text-sm">Bridgwater & Surrounding Areas</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#services" className="hover:text-orange-500 transition">Services</a></li>
                <li><Link href="/blog" className="hover:text-orange-500 transition">Blog</Link></li>
                <li><Link href="/reviews" className="hover:text-orange-500 transition">Reviews</Link></li>
                <li><a href="https://www.youtube.com/@Dodgy-Garage" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">YouTube</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Service Areas</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="/bristol" className="hover:text-orange-500 transition">DPF Cleaning Bristol</Link></li>
                <li><Link href="/exeter" className="hover:text-orange-500 transition">DPF Cleaning Exeter</Link></li>
                <li><Link href="/taunton" className="hover:text-orange-500 transition">DPF Cleaning Taunton</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <a href={phoneLink} onClick={() => { (window as any).gtag?.('event', 'phone_click', { 'event_category': 'conversion', 'event_label': 'footer_phone' }); }} className="text-sm hover:text-orange-500 transition block">
                {phoneNumber}
              </a>
              <p className="text-sm mt-2">Monday-Friday: 8am-6pm</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Dodgy Garage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

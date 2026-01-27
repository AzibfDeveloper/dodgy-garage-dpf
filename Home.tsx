import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Zap, TrendingUp, Users, Send, CheckCircle, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
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
            <img src="/images/dodgy-garage-logo.png" alt="Dodgy Garage Logo" className="h-16 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
              <a href="#services" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition">
                Services
              </a>
              <a href="#why-us" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition">
                Why Us
              </a>
              <a href="#google-reviews" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition">
                Reviews
              </a>
              <a href="/blog" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition">
                Blog
              </a>
              <a href="/testimonials" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition">
                Testimonials
              </a>
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
            <a href="#google-reviews" className="block text-sm font-medium text-gray-700 hover:text-orange-500">
              Reviews
            </a>
            <a href="/blog" className="block text-sm font-medium text-gray-700 hover:text-orange-500">
              Blog
            </a>
            <a href="/testimonials" className="block text-sm font-medium text-gray-700 hover:text-orange-500">
              Testimonials
            </a>
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
              src="/images/hero-mobile-service.png"
              alt="Mobile DPF Cleaning Service"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900/20"></div>
          </div>
        </div>

        {/* Mobile Hero Image */}
        <div className="md:hidden relative h-64 overflow-hidden">
          <img
            src="/images/hero-mobile-service.png"
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
(Content truncated due to size limit. Use line ranges to read remaining content)
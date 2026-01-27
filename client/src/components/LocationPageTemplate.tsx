import { Phone, MapPin, Clock, Zap, TrendingUp, Users, Send, CheckCircle, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import FAQSection from "@/components/FAQSection";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import YouTubeShowcase from "@/components/YouTubeShowcase";
import { updateMetaTags, addSchemaMarkup, trackFormSubmission } from "@/lib/seoHelpers";

/**
 * Location Page Template Component
 * Reusable template for location-specific landing pages (Bristol, Exeter, Taunton)
 * Each location has unique content, keywords, and local information
 */

export interface LocationPageProps {
  location: string;
  locationCode: string;
  title: string;
  metaDescription: string;
  keywords: string;
  heroHeadline: string;
  heroSubheading: string;
  serviceAreaRadius: string;
  localStats: {
    label: string;
    value: string;
  }[];
  localBenefits: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  localSchema: any;
}

export default function LocationPageTemplate(props: LocationPageProps) {
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

  // Initialize SEO for location page
  useEffect(() => {
    updateMetaTags(props.title, props.metaDescription, props.keywords);
    addSchemaMarkup(props.localSchema);
  }, [props.title, props.metaDescription, props.keywords, props.localSchema]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      trackFormSubmission(`contact_form_${props.locationCode}`);
      const leads = JSON.parse(localStorage.getItem('dodgy_garage_leads') || '[]');
      leads.push({
        ...formData,
        location: props.location,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('dodgy_garage_leads', JSON.stringify(leads));
      
      setFormData({ name: "", email: "", phone: "", carIssue: "" });
      setFormSubmitted(true);
      
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
              <a href="/" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition">
                Home
              </a>
              <a href="#services" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition">
                Services
              </a>
              <a href="#why-us" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition">
                Why Us
              </a>
              <a href="/blog" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition">
                Blog
              </a>
            </nav>
            <a href={phoneLink} onClick={() => { (window as any).gtag?.('event', 'phone_click', { 'event_category': 'conversion', 'event_label': 'location_header_phone' }); }} className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition font-medium">
              <Phone size={18} />
              {phoneNumber}
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-orange-500 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200 p-4 space-y-3">
            <a href="/" className="block text-sm font-medium text-gray-700 hover:text-orange-500">
              Home
            </a>
            <a href="#services" className="block text-sm font-medium text-gray-700 hover:text-orange-500">
              Services
            </a>
            <a href="#why-us" className="block text-sm font-medium text-gray-700 hover:text-orange-500">
              Why Us
            </a>
            <a href="/blog" className="block text-sm font-medium text-gray-700 hover:text-orange-500">
              Blog
            </a>
            <a href={phoneLink} onClick={() => { (window as any).gtag?.('event', 'phone_click', { 'event_category': 'conversion', 'event_label': 'location_mobile_menu_phone' }); }} className="block w-full bg-orange-500 text-white px-4 py-2 rounded-lg text-center font-medium">
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
                Local Service • {props.location}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {props.heroHeadline}
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                {props.heroSubheading}
              </p>

              <div className="bg-orange-500 text-white p-6 rounded-xl mb-8">
                <p className="text-sm text-orange-100 mb-2">Complete Service</p>
                <p className="text-3xl font-bold">£245.00</p>
                <p className="text-sm text-orange-100 mt-2">Call Out + Diagnostics + Cleaning</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={phoneLink}
                  onClick={() => { (window as any).gtag?.('event', 'phone_click', { 'event_category': 'conversion', 'event_label': `${props.locationCode}_hero_phone` }); }}
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
                <MapPin className="inline mr-2" size={16} />
                Serving {props.location} and surrounding areas within {props.serviceAreaRadius}
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="hidden md:flex items-center justify-center bg-gray-100">
            <img
              src="/images/hero-mobile-service.png"
              alt="Mobile DPF Cleaning Service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Local Stats */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {props.localStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us (Local Benefits) */}
      <section id="why-us" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Dodgy Garage in {props.location}?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Local expertise, professional service, and competitive pricing for {props.location} residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {props.localBenefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200 hover:border-orange-500 transition">
                <div className="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services in {props.location}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional DPF, AdBlue, and EGR solutions for {props.location} area vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* DPF Cleaning */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <div className="text-white text-6xl">🔧</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">DPF Cleaning</h3>
                <p className="text-gray-600 mb-6">
                  Professional diesel particulate filter cleaning for {props.location} vehicles. Remove soot buildup without replacement.
                </p>
                <p className="text-3xl font-bold text-orange-500 mb-4">£245</p>
                <div className="flex gap-3">
                  <a href={phoneLink} onClick={() => { (window as any).gtag?.('event', 'phone_click', { 'event_category': 'conversion', 'event_label': `${props.locationCode}_dpf_card_phone` }); }} className="flex-1 text-center bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition">
                    Book Now
                  </a>
                  <a href="/blog/dpf-signs" className="flex-1 text-center bg-gray-200 text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-300 transition">
                    Learn More
                  </a>
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
                  Expert AdBlue system diagnosis and repair for {props.location} area. Get warning lights cleared quickly.
                </p>
                <p className="text-sm text-orange-500 font-bold mb-4">Call for pricing</p>
                <div className="flex gap-3">
                  <a href={phoneLink} onClick={() => { (window as any).gtag?.('event', 'phone_click', { 'event_category': 'conversion', 'event_label': `${props.locationCode}_adblue_card_phone` }); }} className="flex-1 text-center bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition">
                    Book Now
                  </a>
                  <a href="/blog/adblue-faults" className="flex-1 text-center bg-gray-200 text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-300 transition">
                    Learn More
                  </a>
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
                  Professional EGR cooler cleaning and repair in {props.location}. Improve engine performance.
                </p>
                <p className="text-sm text-orange-500 font-bold mb-4">Call for pricing</p>
                <div className="flex gap-3">
                  <a href={phoneLink} onClick={() => { (window as any).gtag?.('event', 'phone_click', { 'event_category': 'conversion', 'event_label': `${props.locationCode}_egr_card_phone` }); }} className="flex-1 text-center bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition">
                    Book Now
                  </a>
                  <a href="/blog/egr-cooler-problems" className="flex-1 text-center bg-gray-200 text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-300 transition">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Your {props.location} DPF Sorted Today</h2>
            <p className="text-xl text-gray-300">
              Fill out the form below or call us directly. We'll get back to you within 1 hour.
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
                In the meantime, feel free to call us on <a href={phoneLink} onClick={() => { (window as any).gtag?.('event', 'phone_click', { 'event_category': 'conversion', 'event_label': `${props.locationCode}_form_success_phone` }); }} className="font-bold hover:underline">{phoneNumber}</a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 text-gray-900">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="07123 456789"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="carIssue" className="block text-sm font-bold text-gray-900 mb-2">
                  What's the issue with your vehicle? *
                </label>
                <textarea
                  id="carIssue"
                  name="carIssue"
                  value={formData.carIssue}
                  onChange={handleFormChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Tell us about your DPF, AdBlue, or EGR issue..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Your DPF Sorted in {props.location}?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Stop worrying about that warning light. Call us today and we'll have you back on the road in no time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={phoneLink}
              onClick={() => { (window as any).gtag?.('event', 'phone_click', { 'event_category': 'conversion', 'event_label': `${props.locationCode}_cta_section_phone` }); }}
              className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105 text-lg"
            >
              <Phone size={24} />
              Call: {phoneNumber}
            </a>
            <a href="#contact-form" className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition text-lg">
              Send Message
            </a>
            <a
              href="https://wa.me/447983361554?text=Hi%20Dodgy%20Garage%2C%20I%27d%20like%20to%20inquire%20about%20your%20DPF%20cleaning%20service%20in%20{props.location}."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { (window as any).gtag?.('event', 'whatsapp_click', { 'event_category': 'conversion', 'event_label': `${props.locationCode}_cta_section_whatsapp` }); }}
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105 text-lg"
            >
              <MessageCircle size={24} />
              WhatsApp
            </a>
          </div>

          <p className="text-gray-400 mt-8">
            Available Monday-Friday, 8am-6pm • Serving {props.location} & Surrounding Areas
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src="/images/dodgy-garage-logo.png" alt="Dodgy Garage Logo" className="h-20 w-auto mb-4" />
              <p className="text-sm">Mobile DPF Cleaning Service</p>
              <p className="text-sm">{props.location} & Surrounding Areas</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="text-sm space-y-2">
                <li><a href="/" className="hover:text-orange-500 transition">Home</a></li>
                <li><a href="#services" className="hover:text-orange-500 transition">Services</a></li>
                <li><a href="/blog" className="hover:text-orange-500 transition">Blog</a></li>
                <li><a href="https://www.youtube.com/@Dodgy-Garage" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">YouTube</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <a href={phoneLink} onClick={() => { (window as any).gtag?.('event', 'phone_click', { 'event_category': 'conversion', 'event_label': `${props.locationCode}_footer_phone` }); }} className="text-sm hover:text-orange-500 transition block">
                {phoneNumber}
              </a>
              <p className="text-sm mt-2">Monday-Friday: 8am-6pm</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Dodgy Garage. All rights reserved. | <a href="/" className="hover:text-orange-500">Back to Home</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

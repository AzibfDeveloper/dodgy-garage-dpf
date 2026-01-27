import { MapPin, Zap, TrendingUp, Users } from "lucide-react";
import LocationPageTemplate from "@/components/LocationPageTemplate";

/**
 * Bristol Location Landing Page
 * Optimized for Bristol-specific DPF cleaning searches
 * Keywords: DPF cleaning Bristol, mobile DPF cleaning Bristol, DPF filter Bristol, etc.
 */

export default function Bristol() {
  const bristolSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Dodgy Garage - Bristol DPF Cleaning',
    description: 'Professional mobile DPF cleaning service in Bristol. Expert diesel particulate filter cleaning, AdBlue diagnostics, and EGR cooler repairs.',
    url: 'https://dodgy-garage.manus.space/bristol',
    telephone: '07983361554',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bristol',
      addressRegion: 'Gloucestershire',
      postalCode: 'BS1',
      addressCountry: 'GB'
    },
    areaServed: {
      '@type': 'City',
      name: 'Bristol'
    },
    priceRange: '£245',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '500'
    }
  };

  const localStats = [
    { label: 'Years Serving Bristol', value: '10+' },
    { label: 'Bristol Customers', value: '200+' },
    { label: 'Average Response Time', value: '1 Hour' },
    { label: 'Customer Rating', value: '4.9★' }
  ];

  const localBenefits = [
    {
      icon: <MapPin className="text-white" size={24} />,
      title: 'Bristol-Based Service',
      description: 'We know Bristol roads and traffic patterns. Quick response times and local expertise for Bristol residents.'
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: 'Fast Bristol Turnaround',
      description: 'Most DPF jobs completed within 1 hour. Get back on Bristol roads quickly without garage delays.'
    },
    {
      icon: <TrendingUp className="text-white" size={24} />,
      title: 'Bristol Savings',
      description: 'Save £2,000+ vs replacement. Affordable DPF cleaning for Bristol drivers at just £245.'
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: 'Bristol Trusted',
      description: '200+ satisfied Bristol customers. Trusted by Bristol residents for professional, reliable service.'
    },
    {
      icon: <MapPin className="text-white" size={24} />,
      title: 'No Garage Needed',
      description: 'We come to you in Bristol. Work done on-site at your home or workplace.'
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: 'Expert Technicians',
      description: 'Certified specialists with 20+ years experience in Bristol diesel engine diagnostics and repair.'
    }
  ];

  return (
    <LocationPageTemplate
      location="Bristol"
      locationCode="bristol"
      title="DPF Cleaning Bristol - Mobile Service | Dodgy Garage"
      metaDescription="Professional mobile DPF cleaning in Bristol. Expert diesel particulate filter cleaning, AdBlue diagnostics, and EGR cooler repairs. Same-day service, £245. Call 07983 361554."
      keywords="DPF cleaning Bristol, mobile DPF cleaning Bristol, DPF filter cleaning Bristol, diesel particulate filter Bristol, DPF cleaning service Bristol, DPF specialist Bristol, AdBlue Bristol, EGR cleaning Bristol"
      heroHeadline="Your DPF Sorted in Bristol - No Garage Needed"
      heroSubheading="Professional mobile DPF cleaning service in Bristol. We come to you. Diagnose, clean, and regenerate your DPF right on your driveway. Same-day service available."
      serviceAreaRadius="15-25 miles"
      localStats={localStats}
      localBenefits={localBenefits}
      localSchema={bristolSchema}
    />
  );
}

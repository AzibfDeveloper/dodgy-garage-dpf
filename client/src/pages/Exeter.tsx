import { MapPin, Zap, TrendingUp, Users } from "lucide-react";
import LocationPageTemplate from "@/components/LocationPageTemplate";

/**
 * Exeter Location Landing Page
 * Optimized for Exeter-specific DPF cleaning searches
 * Keywords: DPF cleaning Exeter, mobile DPF cleaning Exeter, DPF filter Exeter, etc.
 */

export default function Exeter() {
  const exeterSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Dodgy Garage - Exeter DPF Cleaning',
    description: 'Professional mobile DPF cleaning service in Exeter. Expert diesel particulate filter cleaning, AdBlue diagnostics, and EGR cooler repairs.',
    url: 'https://dodgy-garage.manus.space/exeter',
    telephone: '07983361554',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Exeter',
      addressRegion: 'Devon',
      postalCode: 'EX1',
      addressCountry: 'GB'
    },
    areaServed: {
      '@type': 'City',
      name: 'Exeter'
    },
    priceRange: '£245',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '500'
    }
  };

  const localStats = [
    { label: 'Years Serving Exeter', value: '8+' },
    { label: 'Exeter Customers', value: '180+' },
    { label: 'Average Response Time', value: '1 Hour' },
    { label: 'Customer Rating', value: '4.9★' }
  ];

  const localBenefits = [
    {
      icon: <MapPin className="text-white" size={24} />,
      title: 'Exeter Local Experts',
      description: 'Serving Exeter and East Devon for years. We know the local roads and can reach you quickly.'
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: 'Fast Exeter Service',
      description: 'Most jobs completed within 1 hour. Get your vehicle back on Exeter roads without long garage waits.'
    },
    {
      icon: <TrendingUp className="text-white" size={24} />,
      title: 'Exeter Value',
      description: 'Save up to £2,000 compared to DPF replacement. Professional cleaning at just £245.'
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: 'Exeter Trusted',
      description: '180+ satisfied Exeter customers. Recommended by local residents for reliable, professional service.'
    },
    {
      icon: <MapPin className="text-white" size={24} />,
      title: 'Mobile Service',
      description: 'We come to your location in Exeter. Work done at your home, workplace, or roadside.'
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: 'Expert Team',
      description: 'Certified diesel specialists with 20+ years experience serving Exeter and Devon drivers.'
    }
  ];

  return (
    <LocationPageTemplate
      location="Exeter"
      locationCode="exeter"
      title="DPF Cleaning Exeter - Mobile Service | Dodgy Garage"
      metaDescription="Professional mobile DPF cleaning in Exeter. Expert diesel particulate filter cleaning, AdBlue diagnostics, and EGR cooler repairs. Same-day service, £245. Call 07983 361554."
      keywords="DPF cleaning Exeter, mobile DPF cleaning Exeter, DPF filter cleaning Exeter, diesel particulate filter Exeter, DPF cleaning service Exeter, DPF specialist Exeter, AdBlue Exeter, EGR cleaning Exeter"
      heroHeadline="Your DPF Sorted in Exeter - Mobile Service"
      heroSubheading="Professional mobile DPF cleaning service in Exeter. We come to you. Diagnose, clean, and regenerate your DPF right on your driveway. Same-day service available."
      serviceAreaRadius="20-30 miles"
      localStats={localStats}
      localBenefits={localBenefits}
      localSchema={exeterSchema}
    />
  );
}

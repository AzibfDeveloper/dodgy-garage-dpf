import { MapPin, Zap, TrendingUp, Users } from "lucide-react";
import LocationPageTemplate from "@/components/LocationPageTemplate";

/**
 * Taunton Location Landing Page
 * Optimized for Taunton-specific DPF cleaning searches
 * Keywords: DPF cleaning Taunton, mobile DPF cleaning Taunton, DPF filter Taunton, etc.
 */

export default function Taunton() {
  const tauntonSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Dodgy Garage - Taunton DPF Cleaning',
    description: 'Professional mobile DPF cleaning service in Taunton. Expert diesel particulate filter cleaning, AdBlue diagnostics, and EGR cooler repairs.',
    url: 'https://dodgy-garage.manus.space/taunton',
    telephone: '07983361554',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Taunton',
      addressRegion: 'Somerset',
      postalCode: 'TA1',
      addressCountry: 'GB'
    },
    areaServed: {
      '@type': 'City',
      name: 'Taunton'
    },
    priceRange: '£245',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '500'
    }
  };

  const localStats = [
    { label: 'Years Serving Taunton', value: '12+' },
    { label: 'Taunton Customers', value: '250+' },
    { label: 'Average Response Time', value: '45 mins' },
    { label: 'Customer Rating', value: '4.9★' }
  ];

  const localBenefits = [
    {
      icon: <MapPin className="text-white" size={24} />,
      title: 'Taunton-Based Service',
      description: 'Based in Somerset, serving Taunton and surrounding areas. Local knowledge and quick response times.'
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: 'Fast Taunton Response',
      description: 'Average response time just 45 minutes. Get your DPF sorted quickly without long garage waits.'
    },
    {
      icon: <TrendingUp className="text-white" size={24} />,
      title: 'Taunton Savings',
      description: 'Save £2,000+ vs DPF replacement. Professional cleaning for Taunton residents at just £245.'
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: 'Taunton Trusted',
      description: '250+ satisfied Taunton and Somerset customers. Recommended by local residents and businesses.'
    },
    {
      icon: <MapPin className="text-white" size={24} />,
      title: 'Mobile Convenience',
      description: 'We come to you in Taunton. Work done at your home, workplace, or anywhere convenient.'
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: 'Certified Experts',
      description: 'Certified diesel specialists with 20+ years experience in DPF, AdBlue, and EGR systems.'
    }
  ];

  return (
    <LocationPageTemplate
      location="Taunton"
      locationCode="taunton"
      title="DPF Cleaning Taunton - Mobile Service | Dodgy Garage"
      metaDescription="Professional mobile DPF cleaning in Taunton. Expert diesel particulate filter cleaning, AdBlue diagnostics, and EGR cooler repairs. Same-day service, £245. Call 07983 361554."
      keywords="DPF cleaning Taunton, mobile DPF cleaning Taunton, DPF filter cleaning Taunton, diesel particulate filter Taunton, DPF cleaning service Taunton, DPF specialist Taunton, AdBlue Taunton, EGR cleaning Taunton, Somerset DPF cleaning"
      heroHeadline="Your DPF Sorted in Taunton - Fast & Reliable"
      heroSubheading="Professional mobile DPF cleaning service in Taunton. We come to you. Diagnose, clean, and regenerate your DPF right on your driveway. Same-day service available."
      serviceAreaRadius="25-35 miles"
      localStats={localStats}
      localBenefits={localBenefits}
      localSchema={tauntonSchema}
    />
  );
}

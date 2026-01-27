/**
 * SEO and Schema Markup Helpers
 * Provides utilities for structured data, meta tags, and tracking
 */

export interface SchemaMarkup {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

/**
 * Local Business Schema for Dodgy Garage
 */
export const localBusinessSchema: SchemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://dodgy-garage.manus.space',
  name: 'Dodgy Garage',
  description: 'Professional mobile DPF cleaning service in Bridgwater, Somerset',
  url: 'https://dodgy-garage.manus.space',
  telephone: '07983361554',
  email: 'contact@dodgygarage.co.uk',
  image: 'https://dodgy-garage.manus.space/logo.png',
  priceRange: '£245',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bridgwater',
    addressLocality: 'Bridgwater',
    addressRegion: 'Somerset',
    postalCode: 'TA6',
    addressCountry: 'GB'
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Bridgwater'
    },
    {
      '@type': 'City',
      name: 'Bristol'
    },
    {
      '@type': 'City',
      name: 'Exeter'
    },
    {
      '@type': 'City',
      name: 'Taunton'
    },
    {
      '@type': 'City',
      name: 'Weston-super-Mare'
    },
    {
      '@type': 'City',
      name: 'Yeovil'
    },
    {
      '@type': 'Region',
      name: 'Somerset'
    }
  ],
  sameAs: [
    'https://www.youtube.com/@Dodgy-Garage',
    'https://share.google/waKU4KXoa4tkv0Hwk'
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '18:00'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '500'
  }
};

/**
 * Service Schema for DPF Cleaning
 */
export const dpfServiceSchema: SchemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'DPF Cleaning',
  description: 'Professional diesel particulate filter cleaning service',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Dodgy Garage',
    url: 'https://dodgy-garage.manus.space'
  },
  areaServed: {
    '@type': 'Region',
    name: 'Somerset, UK'
  },
  offers: {
    '@type': 'Offer',
    price: '245',
    priceCurrency: 'GBP',
    availability: 'https://schema.org/InStock'
  }
};

/**
 * Add schema markup to document head
 */
export function addSchemaMarkup(schema: SchemaMarkup): void {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

/**
 * Update page meta tags
 */
export function updateMetaTags(title: string, description: string, keywords?: string): void {
  // Update title
  document.title = title;

  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);

  // Update or create meta keywords
  if (keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);
  }

  // Update OG tags
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute('content', title);

  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (!ogDescription) {
    ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    document.head.appendChild(ogDescription);
  }
  ogDescription.setAttribute('content', description);
}

/**
 * Track conversion event in Google Analytics
 */
export function trackConversion(conversionName: string, conversionValue?: number, conversionId?: string): void {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const eventData: any = {
      'event_category': 'conversion',
      'event_label': conversionName
    };

    if (conversionValue) {
      eventData['value'] = conversionValue;
    }

    if (conversionId) {
      eventData['conversion_id'] = conversionId;
    }

    (window as any).gtag('event', conversionName, eventData);
  }
}

/**
 * Track phone click
 */
export function trackPhoneClick(phoneNumber: string): void {
  trackConversion('phone_click', undefined, 'AW-' + (window as any).PHONE_CONVERSION_ID);
  console.log('Phone click tracked:', phoneNumber);
}

/**
 * Track WhatsApp click
 */
export function trackWhatsAppClick(): void {
  trackConversion('whatsapp_click', undefined, 'AW-' + (window as any).WHATSAPP_CONVERSION_ID);
  console.log('WhatsApp click tracked');
}

/**
 * Track form submission
 */
export function trackFormSubmission(formName: string): void {
  trackConversion('form_submission', undefined, 'AW-' + (window as any).FORM_CONVERSION_ID);
  console.log('Form submission tracked:', formName);
}

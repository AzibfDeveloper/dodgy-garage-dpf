import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * FAQ Section Component
 * Collapsible accordion with common questions about DPF cleaning
 * Design: Orange (#FF9500) accent with smooth animations
 */

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "services-offered",
    question: "What services do you offer at Dodgy Garage?",
    answer:
      "At Dodgy Garage, we specialize in Diesel Particulate Filter (DPF) cleaning, AdBlue fault code diagnosis, and EGR cooler cleaning. We also handle anything related to the exhaust emissions system to ensure your diesel engine runs smoothly and efficiently.",
  },
  {
    id: "dpf-warning-light",
    question: "What should I do if I see a DPF warning light on my dashboard?",
    answer:
      "If you see a DPF warning light, it means your filter is clogged and your engine might go into 'limp-home' mode. Contact Dodgy Garage immediately. We will come to you, clean and regenerate the DPF, and reset your engine management system to clear the warning light. This service is performed on-site and typically takes about an hour.",
  },
  {
    id: "cost-comparison",
    question: "How much does it cost to clean a DPF?",
    answer:
      "Our complete service (Call Out + Diagnostics + Cleaning) is only <strong>£245.00</strong>. This is significantly cheaper than the £2,500+ often quoted by garages for a full DPF replacement. You get the same result—a working DPF—for a fraction of the price.",
  },
  {
    id: "how-long-service",
    question: "How long does the DPF cleaning process take?",
    answer:
      "The DPF cleaning and regeneration process typically takes about <strong>one hour</strong>. Our mobile service allows us to perform the cleaning on-site at your location, so you can get back on the road quickly without the need for a garage visit.",
  },
  {
    id: "maintenance-advice",
    question: "Do you offer any advice on maintaining the DPF?",
    answer:
      "Yes! After cleaning your DPF, our technicians will provide you with valuable advice on why the DPF clogged in the first place and how to best maintain it to prevent future issues. Proper maintenance can extend the life of your DPF and improve your vehicle's performance and fuel economy. Learn more in our guide: <a href='/blog/dpf-signs' className='text-orange-500 font-bold hover:underline'>5 Signs Your DPF Needs a Professional Clean</a>.",
  },
  {
    id: "all-diesel-cars",
    question: "Do you service all types of diesel vehicles?",
    answer:
      "Yes! We work on all diesel vehicles—vans, cars, 4x4s, trucks, and everything in between. We have experience with all major brands including Ford, Vauxhall, Mercedes, BMW, Audi, Volkswagen, and more. Whether it's a DPF issue, AdBlue fault, or EGR cooler problem, we've got the expertise and equipment to sort it.",
  },
  {
    id: "payment-methods",
    question: "How do I book an appointment and make a payment?",
    answer:
      "Booking is easy! You can call us directly at <strong>07983 361554</strong>, message us on WhatsApp, or use our online contact form. We accept cash, card (Visa, Mastercard, American Express), and bank transfers. Payment is due once the service is complete and your vehicle is sorted.",
  },
  {
    id: "warranty",
    question: "Is there a warranty on the cleaning service?",
    answer:
      "We stand behind our work. If your DPF warning light comes back within 30 days due to our service not being effective, we'll reclean it for free. We also provide full diagnostics to identify if there's a deeper problem (like a faulty sensor) that needs attention.",
  },
  {
    id: "emergency-service",
    question: "Can you do emergency callouts?",
    answer:
      "Absolutely! If your DPF light comes on and you need it sorted urgently, give us a call. We offer emergency callouts outside normal hours (8am-6pm Mon-Fri) for an additional fee. We'll do our best to fit you in quickly to get you back on the road.",
  },
];

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Got questions? We've answered the most common ones below. For more detailed information, check out our{" "}
            <a href="/blog" className="text-orange-500 font-bold hover:underline">
              blog articles
            </a>
            . Can't find what you're looking for?{" "}
            <a href="#contact-form" className="text-orange-500 font-bold hover:underline">
              Get in touch
            </a>
            .
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-orange-500 transition"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-4">{item.question}</h3>
                <ChevronDown
                  size={24}
                  className={`text-orange-500 flex-shrink-0 transition-transform duration-300 ${
                    expandedId === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedId === item.id && (
                <div className="px-6 py-4 bg-white border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.answer }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA after FAQ */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-8 text-center border border-orange-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
          <p className="text-gray-700 mb-6">
            Our team is ready to help. Give us a call or send a message—we'll answer any questions you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07983361554"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call: 07983 361554
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { trackWhatsAppClick } from "@/lib/seoHelpers";

/**
 * WhatsApp Chat Button Component
 * Floating button that opens WhatsApp chat with pre-filled message
 * Design: Orange (#FF9500) with smooth animations
 */

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "447983361554"; // WhatsApp format: country code + number without +
  const businessName = "Dodgy Garage";
  const defaultMessage = "Hi Dodgy Garage, I'd like to inquire about your DPF cleaning service.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-6 right-6 z-40 group"
        aria-label="Chat with us on WhatsApp"
      >
        {/* Animated Background Circle */}
        <div className="absolute inset-0 bg-green-500 rounded-full opacity-0 group-hover:opacity-20 animate-pulse transition-opacity duration-300"></div>

        {/* Main Button */}
        <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110">
          <MessageCircle className="text-white" size={28} />
        </div>

        {/* Tooltip */}
        <div
          className={`absolute right-16 bottom-4 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-all duration-300 pointer-events-none ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          }`}
        >
          Chat with us
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </a>

      {/* Mobile-optimized version */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick()}
          className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 transform active:scale-95"
        >
          <MessageCircle size={24} />
          <span className="font-bold text-sm">WhatsApp</span>
        </a>
      </div>
    </>
  );
}

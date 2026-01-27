import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Scroll to Top Button Component
 * Appears when user scrolls down and smoothly scrolls back to top
 * Positioned on the left side to avoid WhatsApp button conflict
 */

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed left-6 bottom-24 z-40 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
          aria-label="Scroll to top"
          title="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
}

import { useEffect, useRef } from "react";
import { MapPin, Phone } from "lucide-react";

/**
 * Service Area Map Component
 * Interactive map showing Dodgy Garage service coverage areas around Bridgwater
 * Uses Leaflet.js for lightweight, responsive mapping
 */

export default function ServiceAreaMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    // Dynamically load Leaflet CSS and JS
    const leafletCSS = document.createElement("link");
    leafletCSS.rel = "stylesheet";
    leafletCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
    document.head.appendChild(leafletCSS);

    const leafletScript = document.createElement("script");
    leafletScript.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
    leafletScript.async = true;

    leafletScript.onload = () => {
      if (mapContainer.current && !mapInstance.current) {
        const L = (window as any).L;

        // Initialize map centered on Bridgwater
        const map = L.map(mapContainer.current).setView([51.1289, -2.9916], 11);

        // Add OpenStreetMap tiles
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; OpenStreetMap contributors',
          maxZoom: 19,
        }).addTo(map);

        // Bridgwater center marker
        L.circleMarker([51.1289, -2.9916], {
          radius: 8,
          fillColor: "#FF9500",
          color: "#1a1a1a",
          weight: 3,
          opacity: 1,
          fillOpacity: 1,
        })
          .bindPopup("<strong>Dodgy Garage</strong><br>Bridgwater, Somerset")
          .addTo(map);

        // Service area circle (15 mile radius)
        L.circle([51.1289, -2.9916], {
          radius: 24140, // 15 miles in meters
          color: "#FF9500",
          weight: 2,
          opacity: 0.5,
          fillColor: "#FF9500",
          fillOpacity: 0.1,
        }).addTo(map);

        // Service area circle (25 mile radius)
        L.circle([51.1289, -2.9916], {
          radius: 40234, // 25 miles in meters
          color: "#FF9500",
          weight: 1,
          opacity: 0.3,
          fillColor: "#FF9500",
          fillOpacity: 0.05,
        }).addTo(map);

        // Key service locations
        const serviceLocations = [
          {
            name: "Bridgwater",
            coords: [51.1289, -2.9916],
            type: "primary",
          },
          {
            name: "Taunton",
            coords: [51.0186, -3.1037],
            type: "secondary",
          },
          {
            name: "Weston-super-Mare",
            coords: [51.3451, -2.7789],
            type: "secondary",
          },
          {
            name: "Burnham-on-Sea",
            coords: [51.2395, -2.9933],
            type: "secondary",
          },
          {
            name: "Highbridge",
            coords: [51.2095, -2.9716],
            type: "secondary",
          },
          {
            name: "Wedmore",
            coords: [51.1806, -2.8506],
            type: "secondary",
          },
          {
            name: "Glastonbury",
            coords: [51.1439, -2.7159],
            type: "secondary",
          },
          {
            name: "Street",
            coords: [51.1389, -2.7264],
            type: "secondary",
          },
        ];

        // Add location markers
        serviceLocations.forEach((location) => {
          const markerColor = location.type === "primary" ? "#FF9500" : "#4CAF50";
          const markerSize = location.type === "primary" ? 10 : 6;

          L.circleMarker(location.coords as [number, number], {
            radius: markerSize,
            fillColor: markerColor,
            color: "#1a1a1a",
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8,
          })
            .bindPopup(
              `<strong>${location.name}</strong><br><small>${location.type === "primary" ? "Primary Service Area" : "Extended Service Area"}</small>`
            )
            .addTo(map);
        });

        mapInstance.current = map;
      }
    };

    document.body.appendChild(leafletScript);

    return () => {
      // Cleanup
      if (leafletScript.parentNode) {
        leafletScript.parentNode.removeChild(leafletScript);
      }
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Service Areas We Cover</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide mobile DPF cleaning services throughout Somerset and surrounding areas. Check the map to see if we service your location.
          </p>
        </div>

        {/* Map Container */}
        <div className="max-w-5xl mx-auto mb-12">
          <div
            ref={mapContainer}
            className="w-full h-96 md:h-[500px] rounded-xl shadow-lg border-4 border-orange-500 overflow-hidden"
          />
        </div>

        {/* Service Area Info */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Primary Service Area */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border-2 border-orange-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 rounded-full bg-orange-500"></div>
              <h3 className="text-2xl font-bold text-gray-900">Primary Area</h3>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>15-mile radius from Bridgwater</strong>
            </p>
            <p className="text-gray-600 text-sm">
              Same-day service available for most locations within our primary service area. Call for availability.
            </p>
          </div>

          {/* Extended Service Area */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border-2 border-green-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 rounded-full bg-green-500"></div>
              <h3 className="text-2xl font-bold text-gray-900">Extended Area</h3>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>15-25 mile radius from Bridgwater</strong>
            </p>
            <p className="text-gray-600 text-sm">
              We can service these areas with advance notice. Travel charges may apply for locations beyond 20 miles.
            </p>
          </div>

          {/* Beyond Service Area */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border-2 border-gray-300">
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={24} className="text-gray-500" />
              <h3 className="text-2xl font-bold text-gray-900">Beyond 25 Miles?</h3>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Contact us anyway!</strong>
            </p>
            <p className="text-gray-600 text-sm">
              We occasionally service locations beyond our standard area. Call to discuss your specific location and requirements.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-5xl mx-auto mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Not sure if we cover your area?</h3>
          <p className="text-gray-300 mb-6">
            Give us a call and we'll let you know if we can help. We're happy to discuss your specific location.
          </p>
          <a
            href="tel:07983361554"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            <Phone size={20} />
            Call: 07983 361554
          </a>
        </div>
      </div>
    </section>
  );
}

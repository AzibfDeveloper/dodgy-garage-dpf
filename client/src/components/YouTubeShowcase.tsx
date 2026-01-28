import { Youtube, Play } from "lucide-react";

/**
 * YouTube Channel Showcase Component
 * Displays single video card linking to Dodgy Garage YouTube channel
 * Design: Orange (#FF9500) accent with custom thumbnail image
 */

export default function YouTubeShowcase() {
  const youtubeChannelUrl = "https://www.youtube.com/@Dodgy-Garage";

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Youtube size={40} className="text-red-500" />
            <h2 className="text-4xl md:text-5xl font-bold">Watch Our Channel</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Subscribe to Dodgy Garage for expert DPF, AdBlue, and EGR cooler tips
          </p>
        </div>

        {/* Single Video Card */}
        <div className="max-w-3xl mx-auto mb-12">
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition duration-300 transform hover:scale-105 block"
          >
            {/* Video Card Container */}
            <div 
              className="relative w-full aspect-video overflow-hidden bg-cover bg-center group-hover:brightness-75 transition duration-300"
              style={{
                backgroundImage: 'url(images/youtube-thumbnail.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >

              {/* Play Button Overlay */}
              <div 
                className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition duration-300"
                style={{
                  backgroundImage: 'url(images/youtube-thumbnail.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="bg-red-600 rounded-full p-8 opacity-100 group-hover:opacity-100 group-hover:scale-110 transition duration-300 transform">
                  <Play size={48} className="fill-white text-white" />
                </div>
              </div>

              {/* YouTube Badge */}
              <div className="absolute top-4 left-4 bg-red-600 px-4 py-2 rounded-full font-bold flex items-center gap-2">
                <Youtube size={18} />
                YouTube
              </div>
            </div>

            {/* Video Info */}
            <div className="bg-gray-800 p-8 text-center">
              <h3 className="font-bold text-2xl text-white mb-3 group-hover:text-red-500 transition">
                Visit Our YouTube Channel
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                Click to watch our latest DPF cleaning, AdBlue diagnostics, and EGR cooler repair videos
              </p>
              <div className="flex items-center justify-center gap-2 text-red-500 font-bold text-lg">
                <Youtube size={20} />
                Subscribe Now
              </div>
            </div>
          </a>
        </div>

        {/* Why Subscribe Section */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Why Subscribe?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">🎓</div>
              <div>
                <h4 className="font-bold text-white text-lg mb-2">Expert Knowledge</h4>
                <p className="text-orange-50">Learn from certified DPF specialists with 20+ years experience</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">🔧</div>
              <div>
                <h4 className="font-bold text-white text-lg mb-2">Behind-the-Scenes</h4>
                <p className="text-orange-50">See our mobile service in action and understand the process</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">💰</div>
              <div>
                <h4 className="font-bold text-white text-lg mb-2">Money-Saving Tips</h4>
                <p className="text-orange-50">Discover how to prevent expensive repairs and maintain your vehicle</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">📬</div>
              <div>
                <h4 className="font-bold text-white text-lg mb-2">Stay Updated</h4>
                <p className="text-orange-50">Get notified when we upload new videos and helpful content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

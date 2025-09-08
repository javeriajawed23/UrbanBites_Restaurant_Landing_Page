export function Gallery() {
  const images = [
    {
      src: "/dish1.webp",
      alt: "Elegant plated dish",
    },
    {
      src: "/dish2.jpeg",
      alt: "Restaurant interior",
    },
    {
      src: "/dish3.jpeg",
      alt: "Chef preparing food",
    },
    {
      src: "/dish4.jpeg",
      alt: "Gourmet appetizer",
    },
    {
      src: "/about2.jpeg",
      alt: "Dining room ambiance",
    },
    {
      src: "/dish6.jpeg",
      alt: "Wine selection",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Our <span className="text-[#004225]">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Step inside <span className="font-semibold text-[#004225]">Urban Bites</span> —
            where every corner tells a story and every dish is a piece of art.
          </p>
        </div>

        {/* Grid of images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#004225]/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <p className="text-white text-sm md:text-base p-4">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

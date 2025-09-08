import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Heart } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Award,
      title: "Award Winning",
      description: "Celebrated for modern dining and exceptional hospitality",
    },
    {
      icon: Users,
      title: "Expert Chefs",
      description: "A passionate team crafting bold flavors with finesse",
    },
    {
      icon: Clock,
      title: "Decades of Flavor",
      description: "Bringing fresh and vibrant cuisine to the city since 2000",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description:
        "Every bite at Urban Bites is infused with care and creativity",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Welcome to
              <span className="block text-[#004225]">Urban Bites</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Urban Bites, we believe dining should be more than just a meal
              — it’s an experience. Born in the heart of the city, we’ve
              reimagined casual dining with a royal green touch, offering a
              space where community, culture, and cuisine come together.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our chefs blend global inspirations with fresh, locally sourced
              ingredients to create dishes that are both comforting and
              adventurous. Whether it’s a quick lunch, a family gathering, or a
              night out with friends, Urban Bites brings people together over
              food that speaks to the soul.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-none shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-4 text-center">
                    <feature.icon className="h-8 w-8 text-[#006b3c] mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/about1.webp"
                  alt="Chef preparing food"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="/about2.jpeg"
                  alt="Restaurant interior"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="/about3.jpeg"
                  alt="Fresh ingredients"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="/about4.jpeg"
                  alt="Plated dish"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

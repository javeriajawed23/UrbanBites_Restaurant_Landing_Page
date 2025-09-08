import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Food Critic",
      content:
        "Urban Bites delivers a perfect blend of flavor and ambiance. Every dish feels fresh and masterfully prepared — a true culinary gem.",
      rating: 5,
      image: "/user1.webp",
    },
    {
      name: "Michael Chen",
      role: "Local Foodie",
      content:
        "The ideal balance of innovation and tradition. Urban Bites never fails to surprise me with its unique dishes and excellent service.",
      rating: 5,
      image: "/user2.webp",
    },
    {
      name: "Emily Rodriguez",
      role: "Business Executive",
      content:
        "An unforgettable dining experience. The elegant vibe paired with amazing food makes Urban Bites my top choice every time.",
      rating: 5,
      image: "/user3.jpeg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear directly from our valued guests about their memorable
            experiences at Urban Bites.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6 relative">
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 h-10 w-10 text-[#0B6623]/20" />

                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-[#0B6623] fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

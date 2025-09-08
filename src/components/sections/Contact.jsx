"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Reserve Your Table
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the finest urban dining with a royal touch. Book your
            spot now at <span className="text-[#004225] font-semibold">Urban Bites</span> and
            enjoy a memorable culinary journey.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-none shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004225] focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004225] focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Date, Time, Guests */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Preferred Date */}
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full h-[48px] px-4 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004225] focus:border-transparent transition-colors"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Preferred Time
                    </label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) =>
                        handleChange({ target: { name: "time", value } })
                      }
                    >
                      <SelectTrigger
                        id="time"
                        name="time"
                        className="w-full h-[48px] px-4 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004225] focus:border-transparent transition-colors"
                      >
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          "5:00 PM",
                          "5:30 PM",
                          "6:00 PM",
                          "6:30 PM",
                          "7:00 PM",
                          "7:30 PM",
                          "8:00 PM",
                          "8:30 PM",
                          "9:00 PM",
                        ].map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Number of Guests
                    </label>
                    <Select
                      value={formData.guests}
                      onValueChange={(value) =>
                        handleChange({ target: { name: "guests", value } })
                      }
                    >
                      <SelectTrigger
                        id="guests"
                        name="guests"
                        className="w-full h-[48px] px-4 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004225] focus:border-transparent transition-colors"
                      >
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5">5 Guests</SelectItem>
                        <SelectItem value="6">6 Guests</SelectItem>
                        <SelectItem value="7">7 Guests</SelectItem>
                        <SelectItem value="8">8+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004225] focus:border-transparent transition-colors"
                    placeholder="Any special dietary requirements, celebrations, or other requests..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#004225] hover:bg-[#006b3c] text-white py-6 text-lg group"
                >
                  Confirm Reservation
                  <Send className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              {/* Note */}
              <div className="mt-6 p-4 bg-[#f0f9f4] rounded-lg">
                <p className="text-sm text-[#004225]">
                  <strong>Please note:</strong> Reservations are subject to
                  availability. We’ll confirm your booking within 24 hours via
                  email or phone.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

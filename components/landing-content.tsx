"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "John Doe",
    avatar: "A",
    title: "Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "John Doe",
    avatar: "A",
    title: "Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "John Doe",
    avatar: "A",
    title: "Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "John Doe",
    avatar: "A",
    title: "Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.name}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle>
                <div>
                  <p className="text-lg"> {testimonial.name} </p>
                  <p className="text-zinc-400 text-sm"> {testimonial.title} </p>
                </div>
              </CardTitle>
              <CardContent className="px-0 pt-4">
                {testimonial.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

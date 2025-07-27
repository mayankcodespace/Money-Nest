import  { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Software Engineer",
    content: "MoneyNest has made investing so easy for me. I can now manage my stocks and mutual funds all in one place with just a few clicks.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw5fHxmaW5hbmNpYWwlMjBpbnZlc3RtZW50JTIwc3RvY2slMjBtYXJrZXQlMjBtb25leSUyMG11dHVhbCUyMGZ1bmRzJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc0OTM5Mjk3MXww&ixlib=rb-4.1.0&fit=fillmax&h=100&w=100"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Marketing Manager",
    content: "As a first time investor, I was nervous about starting my investment journey. MoneyNest's simple interface and educational content helped me understand the basics.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxMHx8ZmluYW5jaWFsJTIwaW52ZXN0bWVudCUyMHN0b2NrJTIwbWFya2V0JTIwbW9uZXklMjBtdXR1YWwlMjBmdW5kcyUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3NDkzOTI5NzF8MA&ixlib=rb-4.1.0&fit=fillmax&h=100&w=100"
  },
  {
    id: 3,
    name: "Arun Kumar",
    role: "Business Analyst",
    content: "The zero commission on equity delivery was what initially attracted me, but the seamless user experience is what keeps me using MoneyNest for all my investments.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw4fHxmaW5hbmNpYWwlMjBpbnZlc3RtZW50JTIwc3RvY2slMjBtYXJrZXQlMjBtb25leSUyMG11dHVhbCUyMGZ1bmRzJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc0OTM5Mjk3MXww&ixlib=rb-4.1.0&fit=fillmax&h=100&w=100"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-heading mb-4">What Our Users Say</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Join millions of satisfied investors who have chosen MoneyNest for their investment needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-light p-6 rounded-xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-secondary mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-heading">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
 
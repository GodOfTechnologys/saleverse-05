
import FadeIn from "../animations/FadeIn";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This POS system completely transformed our retail operations. The sleek design makes staff training a breeze, and the analytics insights have helped us optimize our inventory.",
    author: "Sarah Johnson",
    position: "Owner, Boutique Elegance",
    image: "https://placehold.co/100x100/f4f7fe/2563eb?text=SJ&font=open-sans"
  },
  {
    quote: "I've used many POS systems over the years, but this one stands out for its beautiful design and powerful features. The attention to detail is remarkable.",
    author: "Michael Chen",
    position: "Director, Urban Cafe Chain",
    image: "https://placehold.co/100x100/f4f7fe/2563eb?text=MC&font=open-sans"
  },
  {
    quote: "The real-time inventory tracking and sales reports have completely changed how we manage our business. Plus, my staff loves the intuitive interface.",
    author: "Jessica Martinez",
    position: "Manager, Artisan Crafts",
    image: "https://placehold.co/100x100/f4f7fe/2563eb?text=JM&font=open-sans"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Businesses</h2>
          <p className="text-muted-foreground text-lg">
            Discover why businesses of all sizes choose our elegant POS solution to power their operations.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn 
              key={index}
              delay={150 * index}
              className="glass-card p-6 flex flex-col h-full"
            >
              <div className="mb-4 text-primary">
                <Quote className="h-8 w-8" />
              </div>
              <p className="text-foreground mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center mt-auto">
                <div className="mr-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

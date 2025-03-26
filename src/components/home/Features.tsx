
import FadeIn from "../animations/FadeIn";
import { ShoppingCart, BarChart3, Shield, CreditCard, Users, Tag, Clock, Zap } from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Product Management",
    description: "Add, edit, and organize your products with our intuitive interface, including categories, variants, and inventory tracking."
  },
  {
    icon: Shield,
    title: "Secure Authentication",
    description: "Role-based access control system ensures that employees only have access to the features they need."
  },
  {
    icon: CreditCard,
    title: "Multiple Payment Methods",
    description: "Accept payments via credit cards, cash, or digital wallets with seamless integration and real-time processing."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Gain insights into your business performance with real-time reports and analytics dashboards."
  },
  {
    icon: Users,
    title: "Customer Management",
    description: "Track customer preferences, purchase history, and offer personalized experiences for repeat buyers."
  },
  {
    icon: Tag,
    title: "Discount & Promotions",
    description: "Create and manage promotional campaigns, discount codes, and special offers for your customers."
  },
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "All transactions and inventory changes are updated in real-time across all devices and locations."
  },
  {
    icon: Zap,
    title: "Responsive & Fast",
    description: "Designed to work flawlessly across all devices with lightning-fast performance and smooth animations."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features, Beautiful Design</h2>
          <p className="text-muted-foreground text-lg">
            Our POS system combines advanced functionality with an elegant, user-friendly interface to streamline your business operations.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeIn 
              key={index}
              delay={100 * index} 
              className="glass-card p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

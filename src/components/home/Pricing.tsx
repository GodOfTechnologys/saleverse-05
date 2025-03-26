
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FadeIn from "../animations/FadeIn";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$49",
    description: "Perfect for small businesses just getting started",
    features: [
      "Core POS functionality",
      "Product management",
      "Basic analytics",
      "Single user account",
      "Email support"
    ],
    cta: "Start Basic",
    popular: false
  },
  {
    name: "Professional",
    price: "$99",
    description: "Ideal for growing businesses with multiple staff members",
    features: [
      "All Basic features",
      "Multiple user accounts",
      "Advanced analytics",
      "Customer management",
      "Priority support",
      "Inventory alerts"
    ],
    cta: "Choose Professional",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "For established businesses with complex requirements",
    features: [
      "All Professional features",
      "Multiple locations",
      "Customization options",
      "API access",
      "Dedicated support",
      "Advanced security features",
      "Custom reporting"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your business needs. All plans include our beautifully designed POS interface.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <FadeIn key={index} delay={150 * index} className="flex flex-col h-full">
              <div 
                className={`glass-card p-6 rounded-xl h-full flex flex-col ${
                  plan.popular ? 'ring-2 ring-primary shadow-lg relative' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold py-1 px-3 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild
                  className={`rounded-lg mt-auto ${
                    plan.popular ? '' : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link to="/dashboard">{plan.cta}</Link>
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

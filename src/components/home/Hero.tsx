
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import FadeIn from "../animations/FadeIn";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-50 dark:from-blue-950/20 to-transparent -z-10"></div>
      
      {/* Background circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-100 dark:border-blue-900/30 rounded-full -z-10 opacity-60 animate-spin-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-100 dark:border-blue-900/30 rounded-full -z-10 opacity-60 animate-spin-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <FadeIn className="max-w-3xl mx-auto" duration={800}>
            <div className="inline-block mb-6 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 rounded-full">
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                The modern point of sale system
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              Elegant, Powerful, <span className="text-gradient">Point of Sale</span> for Modern Businesses
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Transform your business with our beautifully designed POS system that combines stunning visuals with powerful features.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8 h-12 rounded-full font-medium">
                <Link to="/dashboard">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 h-12 rounded-full">
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </FadeIn>
          
          {/* Key features highlight */}
          <FadeIn className="mt-12 md:mt-16" delay={300} duration={800}>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm md:text-base font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Real-time Updates</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Secure Transactions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Advanced Analytics</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Responsive Design</span>
              </div>
            </div>
          </FadeIn>
          
          {/* Hero image */}
          <FadeIn className="mt-16 md:mt-20 w-full" delay={500} duration={1000}>
            <div className="glass-card p-2 md:p-4 max-w-5xl mx-auto">
              <div className="bg-secondary/50 dark:bg-secondary/20 rounded-lg overflow-hidden">
                <img 
                  src="https://placehold.co/1200x640/f4f7fe/2563eb?text=POS+Dashboard+Preview&font=open-sans"
                  alt="POS System Dashboard Preview" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;

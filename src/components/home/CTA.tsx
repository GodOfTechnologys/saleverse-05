
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FadeIn from "../animations/FadeIn";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="glass-card max-w-5xl mx-auto overflow-hidden rounded-2xl">
          <div className="relative px-6 py-12 md:p-12 lg:p-16">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Business Today</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of businesses already using our beautifully designed POS system to streamline operations, increase sales, and deliver exceptional customer experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="px-8 h-12 rounded-full">
                  <Link to="/dashboard">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8 h-12 rounded-full">
                  <Link to="#">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTA;

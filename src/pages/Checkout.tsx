
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CreditCard, Smartphone } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const Checkout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        <div className="container mx-auto px-4 py-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto glass-card p-8 rounded-lg">
              <h1 className="text-3xl font-bold mb-6">Checkout</h1>
              
              <div className="mb-6">
                <Link to="/dashboard" className="inline-flex items-center text-primary hover:underline">
                  <ArrowLeft className="h-4 w-4 mr-1" /> Back to Dashboard
                </Link>
              </div>
              
              <p className="text-muted-foreground mb-8">
                This is a placeholder checkout page. In a real application, this would include order summary, 
                shipping details, and integrated payment processing.
              </p>
              
              <div className="space-y-4 mb-8">
                <h2 className="text-xl font-semibold">Payment Methods</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="border rounded-lg p-4 flex flex-col items-center gap-2 bg-white/50 dark:bg-white/5">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <span className="font-medium">Credit Card</span>
                  </div>
                  
                  <div className="border rounded-lg p-4 flex flex-col items-center gap-2 bg-white/50 dark:bg-white/5">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/GPay_Logo.svg/512px-GPay_Logo.svg.png" 
                        alt="GPay" className="h-6 w-6 object-contain" />
                    </div>
                    <span className="font-medium">GPay</span>
                  </div>
                  
                  <div className="border rounded-lg p-4 flex flex-col items-center gap-2 bg-white/50 dark:bg-white/5">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/PhonePe_Logo.svg/1200px-PhonePe_Logo.svg.png" 
                        alt="PhonePe" className="h-6 w-6 object-contain" />
                    </div>
                    <span className="font-medium">PhonePe</span>
                  </div>
                  
                  <div className="border rounded-lg p-4 flex flex-col items-center gap-2 bg-white/50 dark:bg-white/5">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png" 
                        alt="Paytm" className="h-6 w-6 object-contain" />
                    </div>
                    <span className="font-medium">Paytm</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button asChild>
                  <Link to="/dashboard">Back to Dashboard</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;

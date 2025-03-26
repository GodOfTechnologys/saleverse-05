
import { useEffect } from "react";
import { Link } from "react-router-dom";
import LoginForm from "@/components/auth/LoginForm";
import { ShoppingCart } from "lucide-react";

const Login = () => {
  useEffect(() => {
    document.title = "Login | PointSale";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-muted/50">
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <div className="flex items-center justify-center mb-3">
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">PointSale</h1>
              <p className="text-muted-foreground">Modern Point of Sale System</p>
            </Link>
          </div>
          
          <LoginForm />
          
          <p className="text-center text-sm text-muted-foreground mt-8">
            By signing in, you agree to our{" "}
            <a href="#" className="text-primary hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
      
      <footer className="py-4 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} PointSale. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;

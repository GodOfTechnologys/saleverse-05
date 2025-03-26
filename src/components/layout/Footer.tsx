import { Link } from "react-router-dom";
import { ShoppingCart, Facebook, Twitter, Instagram, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50 dark:bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-primary font-bold text-xl">
              <ShoppingCart className="w-6 h-6" />
              <span>PointSale</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              The most elegant point of sale system designed with modern aesthetics and powerful functionality for businesses of all sizes.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/#features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">Dashboard</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>support@pointsale.com</span>
              </li>
              <li className="text-muted-foreground">
                123 SaaS Street, App City
              </li>
              <li className="text-muted-foreground">
                CA 94107, USA
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} PointSale. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Settings } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/about", label: "About Project", icon: "ℹ️" },
    { href: "/categories", label: "Categories", icon: "📋" },
    { href: "/check-status", label: "Check Status", icon: "🔍" },
    { href: "/utilities", label: "Utilities", icon: "🛠️" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card border-b border-border shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ES</span>
            </div>
            <span className="text-foreground font-semibold text-lg">ESEP Portal</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                <span className="mr-1">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Admin Login */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-danger hover:text-danger-foreground hover:bg-danger"
            >
              <Link to="/admin">
                <User className="w-4 h-4 mr-1" />
                Admin Login
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
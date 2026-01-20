import { Search, User, ShoppingBag, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 w-full bg-header text-header-foreground z-30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">

            {/* Left: Hamburger + Brand + Nav */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden hover:text-header-foreground transition"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>

              <span className="text-sm font-semibold tracking-wide">
                SocialClaps
              </span>

              <nav className="hidden md:flex items-center gap-6 text-sm text-header-muted ml-6">
                <Link to="/" className="hover:text-header-foreground transition">
                  Home
                </Link>
                <Link to="/Contact" className="hover:text-header-foreground transition">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-5 text-header-muted text-sm">

              {/* Currency */}
              <button className="hidden sm:flex items-center gap-1 hover:text-header-foreground transition">
                USD
                <ChevronDown size={14} />
              </button>

              {/* Icons */}
              <Search className="h-4 w-4 cursor-pointer hover:text-header-foreground transition" />
              <User className="h-4 w-4 cursor-pointer hover:text-header-foreground transition" />
              <ShoppingBag className="h-4 w-4 cursor-pointer hover:text-header-foreground transition" />
            </div>
          </div>
        </div>

        {/* Bottom Gradient Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-header-border to-transparent" />
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-header text-header-foreground z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-header-border">
            <span className="text-lg font-semibold">SocialClaps</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-header-foreground transition"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex flex-col gap-1 p-4">
            <Link
              to="/"
              className="px-4 py-3 rounded-lg hover:bg-header-border transition text-header-muted hover:text-header-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="px-4 py-3 rounded-lg hover:bg-header-border transition text-header-muted hover:text-header-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>

          {/* Sidebar Footer */}
          <div className="mt-auto p-4 border-t border-header-border">
            <button className="flex items-center gap-2 px-4 py-2 w-full rounded-lg hover:bg-header-border transition text-header-muted hover:text-header-foreground">
              USD
              <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

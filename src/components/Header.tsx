import { Search, User, ShoppingBag, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-30 w-full backdrop-blur-xl bg-header/80 border-b border-header-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">

            {/* Left */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-lg hover:bg-header-border transition"
              >
                <Menu className="h-5 w-5" />
              </button>

              {/* Brand */}
              <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                SocialClaps
              </span>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-6 ml-8 text-sm text-header-muted">
                {["Home", "Contact"].map((item) => (
                  <Link
                    key={item}
                    to={item === "Home" ? "/" : "/contact"}
                    className="relative hover:text-header-foreground transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4 text-header-muted">

              {/* Currency */}
              <button className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full border border-header-border hover:bg-header-border transition text-xs">
                USD <ChevronDown size={14} />
              </button>

              {/* Icons */}
              {[Search, User, ShoppingBag].map((Icon, i) => (
                <button
                  key={i}
                  className="p-2 rounded-full hover:bg-header-border transition"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-header border-r border-header-border transform transition-transform duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">

          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6">
            <span className="text-xl font-bold">SocialClaps</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-header-border transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-2 px-4">
            {["Home", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : "/contact"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-header-muted hover:text-header-foreground hover:bg-header-border transition"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="mt-auto p-4 border-t border-header-border">
            <button className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm hover:bg-header-border transition">
              Currency
              <span className="flex items-center gap-1">
                USD <ChevronDown size={14} />
              </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;

import {
  Search,
  User,
  ShoppingBag,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-30 w-full border-b border-black/10 bg-white/40 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden rounded-xl p-2 hover:bg-black/10 transition"
              >
                <Menu className="h-5 w-5 text-black/80" />
              </button>

              {/* BRAND */}
              <span
                className="text-lg font-semibold tracking-tight
                bg-gradient-to-r from-blue-500 via-sky-400 to-yellow-400
                bg-clip-text text-transparent"
              >
                Ben10Hits
              </span>

              {/* DESKTOP NAV */}
              <nav className="ml-10 hidden md:flex items-center gap-8 text-sm">
                {["Home", "Contact"].map((item) => (
                  <Link
                    key={item}
                    to={item === "Home" ? "/" : "/contact"}
                    className="relative text-black/80 transition
                      hover:text-yellow-400
                      after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                      after:w-0 after:bg-gradient-to-r after:from-blue-400 after:to-yellow-400
                      after:transition-all hover:after:w-full"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">
              {/* Currency */}
              <button
                className="hidden sm:flex items-center gap-1 rounded-full
                border border-black/10 bg-white/60 px-3 py-1.5
                text-xs text-black/80 hover:text-yellow-400 hover:bg-black/5 transition"
              >
                USD <ChevronDown size={14} />
              </button>

              {/* ICONS */}
              {[Search, User, ShoppingBag].map((Icon, i) => (
                <button
                  key={i}
                  className="rounded-full p-2 text-black/70
                    bg-white/40 hover:bg-black/5 hover:text-yellow-400 transition"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 transform
          bg-white/70 backdrop-blur-2xl border-r border-black/10
          transition-transform duration-300 md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex h-full flex-col">

          {/* SIDEBAR HEADER */}
          <div className="flex items-center justify-between p-6">
            <span
              className="text-xl font-semibold
              bg-gradient-to-r from-blue-500 to-yellow-400
              bg-clip-text text-transparent"
            >
              Ben10Hits
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-xl p-2 hover:bg-black/10 transition"
            >
              <X className="h-5 w-5 text-black/80" />
            </button>
          </div>

          {/* NAV */}
          <nav className="flex flex-col gap-2 px-4">
            {["Home", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : "/contact"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium
                  text-black/80 hover:bg-black/5 hover:text-yellow-400 transition"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* FOOTER */}
          <div className="mt-auto border-t border-black/10 p-4">
            <button
              className="flex w-full items-center justify-between
              rounded-2xl px-4 py-3 text-sm text-black/80
              bg-white/60 hover:bg-black/5 hover:text-yellow-400 transition"
            >
              Currency
              <span className="flex items-center gap-1 text-yellow-400">
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

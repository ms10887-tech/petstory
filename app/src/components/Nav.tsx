import { Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b border-[#D8D3C9] bg-[#FAF8F4]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B8654A] text-sm text-[#FAF8F4]">
            P
          </span>
          <span className="text-lg font-semibold tracking-tight text-[#1C1B1A]">
            The Pet Story Co.
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/stories" className="nav-link">
            Stories
          </Link>
          <Link to="/faq" className="nav-link">
            FAQ
          </Link>
          <Link to="/recommend" className="nav-link">
            Recommendations
          </Link>
          <Link to="/blog" className="nav-link">
            Journal
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/links" className="nav-link">
            Links
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#1C1B1A]"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#D8D3C9] bg-[#FAF8F4] md:hidden">
          <div className="flex flex-col gap-4 px-6 py-4">
            <Link to="/stories" className="nav-link" onClick={() => setMenuOpen(false)}>
              Stories
            </Link>
            <Link to="/faq" className="nav-link" onClick={() => setMenuOpen(false)}>
              FAQ
            </Link>
            <Link to="/recommend" className="nav-link" onClick={() => setMenuOpen(false)}>
              Recommendations
            </Link>
            <Link to="/blog" className="nav-link" onClick={() => setMenuOpen(false)}>
              Journal
            </Link>
            <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link to="/links" className="nav-link" onClick={() => setMenuOpen(false)}>
              Links
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

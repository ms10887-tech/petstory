import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-[#D8D3C9] bg-[#F3EFE7]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B8654A] text-sm text-[#FAF8F4]">
                P
              </span>
              <span className="text-lg font-semibold tracking-tight text-[#1C1B1A]">
                The Pet Story Co.
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-[#5B5854]">
              Stories about dogs that teach us how to care for them better.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-[#1C1B1A]">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/stories" className="text-sm text-[#5B5854] hover:text-[#B8654A]">
                  Stories
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-[#5B5854] hover:text-[#B8654A]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/recommend" className="text-sm text-[#5B5854] hover:text-[#B8654A]">
                  Recommendations
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-[#5B5854] hover:text-[#B8654A]">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/characters" className="text-sm text-[#5B5854] hover:text-[#B8654A]">
                  Meet the characters
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-[#1C1B1A]">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/disclosure" className="text-sm text-[#5B5854] hover:text-[#B8654A]">
                  Affiliate disclosure
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-[#5B5854] hover:text-[#B8654A]">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-[#5B5854] hover:text-[#B8654A]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#D8D3C9] pt-8 md:flex-row md:items-center">
          <p className="text-xs text-[#5B5854]">
            © {new Date().getFullYear()} The Pet Story Co. All stories are fictional.
            Training advice is for educational purposes only.
          </p>
          <p className="text-xs text-[#5B5854]">
            Made with care for good dogs everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}

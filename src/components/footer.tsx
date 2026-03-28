import Link from "next/link";
import { Logo } from "@/components/logo";

const pageLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { label: "Web Design", href: "/#services" },
  { label: "Managed Hosting", href: "/pricing" },
  { label: "Ecommerce", href: "/pricing" },
  { label: "IT Consulting", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-qblack-dark text-qwhite carbon-weave">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="group inline-block text-qwhite hover:text-qyellow transition-colors">
              <Logo variant="mark" size="lg" />
            </Link>
            <p className="text-qwhite/60 text-sm mt-3 max-w-xs leading-relaxed">
              Modern websites. Built to convert. Every project handled with
              precision and care, nationwide.
            </p>
            <a
              href="mailto:hello@kptdesigns.com"
              className="text-sm text-qyellow hover:text-qyellow-light transition-colors mt-3 inline-block"
            >
              hello@kptdesigns.com
            </a>
          </div>

          {/* Pages */}
          <div>
            <span className="section-label mb-4 block">// PAGES</span>
            <nav className="flex flex-col gap-2">
              {pageLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-qwhite/60 hover:text-qwhite transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <span className="section-label mb-4 block">// SERVICES</span>
            <nav className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-qwhite/60 hover:text-qwhite transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Location */}
          <div>
            <span className="section-label mb-4 block">// CONTACT</span>
            <div className="flex flex-col gap-3 text-sm text-qwhite/60">
              <a
                href="mailto:hello@kptdesigns.com"
                className="hover:text-qwhite transition-colors"
              >
                hello@kptdesigns.com
              </a>
              <span>Nationwide</span>
              <span>Mon-Fri, 9am-6pm EST</span>
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center text-sm text-qyellow hover:text-qyellow-light transition-colors"
              >
                Start a Project &rarr;
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-qwhite/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-qwhite/40 font-mono">
            &copy; {new Date().getFullYear()} KPT Designs. All rights
            reserved.
          </p>
          <p className="text-xs text-qwhite/40 font-mono">
            Modern websites. Built to convert.
          </p>
        </div>
      </div>
    </footer>
  );
}

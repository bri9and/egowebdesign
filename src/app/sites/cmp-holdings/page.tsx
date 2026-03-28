import {
  Phone,
  Mail,
  MapPin,
  Building2,
  TrendingUp,
  Shield,
  Users,
  ArrowRight,
  Briefcase,
  Globe,
  BarChart3,
  Target,
  ChevronRight,
  Landmark,
} from "lucide-react";

export const metadata = {
  title: "CMP Holdings | Strategic Investment & Portfolio Management",
  description:
    "CMP Holdings is a diversified holding company managing a portfolio of strategic investments across real estate, technology, infrastructure, and professional services.",
};

const IMG = "/sites/cmp-holdings";

const divisions = [
  {
    icon: Building2,
    name: "Real Estate",
    label: "CMP Properties",
    description:
      "Acquisition, development, and management of commercial and residential real estate assets across key metropolitan markets. Focus on value-add repositioning and long-term capital appreciation.",
    metric: "$240M+",
    metricLabel: "Assets Under Management",
  },
  {
    icon: Globe,
    name: "Technology",
    label: "CMP Ventures",
    description:
      "Strategic investments in early-to-growth-stage technology companies. Sector focus on enterprise SaaS, cybersecurity, and data infrastructure with hands-on operational support.",
    metric: "18",
    metricLabel: "Portfolio Companies",
  },
  {
    icon: Landmark,
    name: "Infrastructure",
    label: "CMP Capital",
    description:
      "Long-duration investments in essential infrastructure including energy, transportation, and telecommunications. Targeting stable, inflation-protected cash flows with downside protection.",
    metric: "12",
    metricLabel: "Active Projects",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    label: "CMP Advisory",
    description:
      "Management consulting, M&A advisory, and operational improvement services for middle-market companies. Deep expertise in post-acquisition integration and performance optimization.",
    metric: "85+",
    metricLabel: "Engagements Completed",
  },
];

const portfolio = [
  {
    name: "Meridian Tower",
    category: "Real Estate",
    description: "Class A office complex, 420,000 sq ft",
    status: "Active",
  },
  {
    name: "Vantage Data Systems",
    category: "Technology",
    description: "Enterprise data analytics platform",
    status: "Active",
  },
  {
    name: "Keystone Energy Partners",
    category: "Infrastructure",
    description: "Regional energy distribution network",
    status: "Active",
  },
  {
    name: "Atlas Logistics Group",
    category: "Professional Services",
    description: "Supply chain optimization & consulting",
    status: "Active",
  },
  {
    name: "Harborview Residential",
    category: "Real Estate",
    description: "Luxury multifamily, 312 units",
    status: "Active",
  },
  {
    name: "ClearPath Cyber",
    category: "Technology",
    description: "Next-gen endpoint security solutions",
    status: "Active",
  },
];

const leadership = [
  {
    name: "Charles M. Preston",
    title: "Chairman & Chief Executive Officer",
    bio: "30+ years in private equity and corporate strategy. Previously Managing Director at a top-tier investment bank. Oversees all portfolio strategy and capital allocation decisions.",
  },
  {
    name: "Margaret A. Lawson",
    title: "President & Chief Operating Officer",
    bio: "Former COO of a Fortune 500 industrial conglomerate. Drives operational excellence across all divisions and leads post-acquisition integration for new portfolio companies.",
  },
  {
    name: "David R. Chen",
    title: "Chief Financial Officer",
    bio: "CPA with 20+ years in corporate finance and treasury management. Manages capital structure, investor relations, and financial reporting across the holding company.",
  },
  {
    name: "Katherine E. Brooks",
    title: "General Counsel & Secretary",
    bio: "Harvard Law. Former partner at a national law firm specializing in M&A, securities regulation, and corporate governance. Oversees all legal and compliance matters.",
  },
];

const stats = [
  { value: "$480M+", label: "Total Assets" },
  { value: "4", label: "Operating Divisions" },
  { value: "32", label: "Portfolio Companies" },
  { value: "2001", label: "Year Founded" },
];

const pf = "'Instrument Serif', 'Times New Roman', serif";
const sans = "'Inter', system-ui, -apple-system, sans-serif";

export default function CMPHoldings() {
  return (
    <div className="min-h-screen" style={{ fontFamily: sans, backgroundColor: "#FAFAFA", color: "#1A1A1A" }}>
      <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');` }} />

      {/* Header */}
      <header className="border-b" style={{ borderColor: "#E8E8E8", backgroundColor: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: "#1A1A1A" }}>
              <span className="text-white text-xs font-bold tracking-[0.15em]">CMP</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-semibold tracking-wide text-[#1A1A1A]">CMP Holdings</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium" style={{ color: "#666666" }}>
            <a href="#divisions" className="hover:text-[#1A1A1A] transition-colors">Divisions</a>
            <a href="#portfolio" className="hover:text-[#1A1A1A] transition-colors">Portfolio</a>
            <a href="#leadership" className="hover:text-[#1A1A1A] transition-colors">Leadership</a>
            <a href="#about" className="hover:text-[#1A1A1A] transition-colors">About</a>
          </nav>
          <a
            href="mailto:info@cmpholdings.net"
            className="flex items-center gap-2 text-[13px] font-medium transition-colors"
            style={{ color: "#1A1A1A" }}
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Contact Us</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#0D0D0D" }}>
        {/* Subtle geometric accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03]" style={{
          background: "radial-gradient(circle at center, #FFFFFF 0%, transparent 70%)",
        }} />
        <div className="absolute bottom-0 left-0 w-full h-px" style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
        }} />

        <div className="max-w-6xl mx-auto px-6 py-28 sm:py-36 relative">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase mb-10"
              style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}
            >
              Strategic Investment &amp; Portfolio Management
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight mb-7 text-white">
              Building Enduring Value<br />
              <span style={{ color: "rgba(255,255,255,0.35)" }}>Across Industries</span>
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl" style={{ color: "rgba(255,255,255,0.4)" }}>
              CMP Holdings is a diversified holding company with operating divisions spanning real estate, technology, infrastructure, and professional services. We acquire, build, and operate businesses for long-term value creation.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
              {stats.map((s) => (
                <div key={s.label} className="px-6 py-5 text-center" style={{ backgroundColor: "#0D0D0D" }}>
                  <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{s.value}</div>
                  <div className="text-[11px] tracking-[0.15em] uppercase mt-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Thin accent line */}
      <div className="h-px" style={{ background: "linear-gradient(90deg, #1A1A1A, #D4AF37, #1A1A1A)" }} />

      {/* Divisions */}
      <section id="divisions" className="py-24" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: "#999999" }}>
              Operating Divisions
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
              Four Pillars of Growth
            </h2>
            <p className="text-base mt-4 max-w-xl leading-relaxed" style={{ color: "#888888" }}>
              Each division operates with independent management and P&amp;L responsibility, unified by shared standards of governance and capital discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "#E8E8E8" }}>
            {divisions.map((div) => (
              <div key={div.name} className="p-8 sm:p-10 group" style={{ backgroundColor: "#FFFFFF" }}>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: "#F5F5F5" }}>
                    <div.icon className="w-5 h-5" style={{ color: "#1A1A1A" }} />
                  </div>
                  <span className="text-[11px] font-semibold tracking-[0.15em] uppercase" style={{ color: "#BBBBBB" }}>
                    {div.label}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{div.name}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#777777" }}>{div.description}</p>
                <div className="pt-5" style={{ borderTop: "1px solid #F0F0F0" }}>
                  <span className="text-2xl font-bold text-[#1A1A1A]">{div.metric}</span>
                  <span className="text-[11px] tracking-[0.1em] uppercase ml-2" style={{ color: "#AAAAAA" }}>{div.metricLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Investments */}
      <section id="portfolio" className="py-24" style={{ backgroundColor: "#F7F7F7" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: "#999999" }}>
                Portfolio
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                Select Investments
              </h2>
            </div>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: "#888888" }}>
              A representative selection of current holdings across our four operating divisions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "#E0E0E0" }}>
            {portfolio.map((item) => (
              <div
                key={item.name}
                className="p-7 group"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[10px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1"
                    style={{ backgroundColor: "#F5F5F5", color: "#888888" }}
                  >
                    {item.category}
                  </span>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#34D399" }} />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{item.name}</h3>
                <p className="text-sm" style={{ color: "#888888" }}>{item.description}</p>
                <div className="flex items-center gap-1.5 mt-5 text-[12px] font-medium" style={{ color: "#BBBBBB" }}>
                  <span>{item.status}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-24" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: "#999999" }}>
              Leadership
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
              Executive Team
            </h2>
            <p className="text-base mt-4 max-w-xl leading-relaxed" style={{ color: "#888888" }}>
              Experienced operators and investors with decades of combined expertise in building and managing diversified portfolios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="p-8 group"
                style={{ backgroundColor: "#FAFAFA", border: "1px solid #EEEEEE" }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 flex-shrink-0 flex items-center justify-center text-lg font-bold"
                    style={{ backgroundColor: "#1A1A1A", color: "#FFFFFF" }}
                  >
                    {person.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-[#1A1A1A]">{person.name}</h3>
                    <p className="text-[12px] font-medium tracking-[0.1em] uppercase mt-0.5 mb-3" style={{ color: "#AAAAAA" }}>
                      {person.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#777777" }}>{person.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
                About CMP Holdings
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
                Disciplined Capital.<br />
                <span style={{ color: "rgba(255,255,255,0.35)" }}>Patient Execution.</span>
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
                Founded in 2001, CMP Holdings has grown from a single real estate investment into a diversified holding company managing over $480 million in total assets across four operating divisions.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
                Our approach is rooted in long-term ownership. We acquire businesses with durable competitive advantages, invest in their growth, and hold them indefinitely. We do not flip assets or chase short-term returns.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                Every portfolio company benefits from shared services in finance, legal, HR, and technology &mdash; creating operating leverage that standalone businesses cannot achieve on their own.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
              {[
                { icon: Target, title: "Long-Term Focus", desc: "We acquire to hold, not to flip. Our average holding period exceeds 10 years." },
                { icon: BarChart3, title: "Operational Rigor", desc: "Centralized financial controls with decentralized operating authority." },
                { icon: Shield, title: "Risk Management", desc: "Conservative leverage targets and diversified exposure across sectors and geographies." },
                { icon: TrendingUp, title: "Value Creation", desc: "Active ownership with hands-on support for management teams in every portfolio company." },
              ].map((item) => (
                <div key={item.title} className="p-6" style={{ backgroundColor: "#0D0D0D" }}>
                  <item.icon className="w-5 h-5 mb-4" style={{ color: "rgba(255,255,255,0.25)" }} />
                  <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #E8E8E8" }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-5" style={{ color: "#999999" }}>
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A] mb-4">
            Explore Opportunities
          </h2>
          <p className="text-base max-w-lg mx-auto mb-10 leading-relaxed" style={{ color: "#888888" }}>
            Whether you are a business owner exploring succession options, an investor seeking co-investment, or a professional interested in joining our team &mdash; we welcome the conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@cmpholdings.net"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wide transition-all"
              style={{ backgroundColor: "#1A1A1A", color: "#FFFFFF" }}
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </a>
            <a
              href="mailto:info@cmpholdings.net"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wide transition-all"
              style={{ border: "1px solid #D0D0D0", color: "#1A1A1A", backgroundColor: "#FFFFFF" }}
            >
              <Mail className="w-4 h-4" />
              info@cmpholdings.net
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#0D0D0D", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                  <span className="text-white text-[10px] font-bold tracking-[0.15em]">CMP</span>
                </div>
                <span className="text-sm font-semibold text-white">CMP Holdings</span>
              </div>
              <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
                A diversified holding company building enduring value across real estate, technology, infrastructure, and professional services.
              </p>
            </div>

            {/* Divisions */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "rgba(255,255,255,0.25)" }}>
                Divisions
              </p>
              <div className="space-y-2.5">
                {divisions.map((d) => (
                  <div key={d.label} className="text-[13px]" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {d.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "rgba(255,255,255,0.25)" }}>
                Contact
              </p>
              <div className="space-y-3 text-[13px]" style={{ color: "rgba(255,255,255,0.45)" }}>
                <a href="mailto:info@cmpholdings.net" className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.25)" }} />
                  Contact Us
                </a>
                <a href="mailto:info@cmpholdings.net" className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.25)" }} />
                  info@cmpholdings.net
                </a>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "rgba(255,255,255,0.25)" }} />
                  <span>One PPG Place, Suite 3100<br />Pittsburgh, PA 15222</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-[12px]"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.2)" }}
          >
            <p>&copy; {new Date().getFullYear()} CMP Holdings. All rights reserved.</p>
            <p>
              Website by{" "}
              <a href="/" className="transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.35)" }}>
                KPT Designs
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

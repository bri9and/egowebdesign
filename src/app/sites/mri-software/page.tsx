import {
  Phone,
  Globe,
  Building2,
  BarChart3,
  Shield,
  Users,
  Layers,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Mail,
  ChevronRight,
  Zap,
  Lock,
  Cloud,
  LineChart,
  Puzzle,
  Headphones,
  Award,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "MRI Software | Real Estate Software Solutions for Innovators",
  description:
    "MRI Software delivers innovative, open and connected technology for real estate owners, operators and occupiers. 45,000+ clients across 170+ countries. Property management, investment management, and analytics platform.",
};

const IMG = "/sites/mri-software";

const sans = { fontFamily: "system-ui, -apple-system, sans-serif" } as const;

/* ── Brand Colors ── */
const C = {
  navy: "#0B1F3A",
  blue: "#1E5EF3",
  blueDark: "#1549C4",
  blueLight: "#4A7FFB",
  ice: "#F0F5FF",
  white: "#FFFFFF",
  slate: "#3D4F6B",
  ghost: "#8A99B4",
  accent: "#00D4AA",
  accentDark: "#00B894",
  grad: "linear-gradient(135deg, #1E5EF3 0%, #00D4AA 100%)",
  gradDark: "linear-gradient(135deg, #0B1F3A 0%, #162D52 100%)",
  gradHero: "linear-gradient(160deg, #0B1F3A 0%, #132B4F 40%, #1E5EF3 100%)",
} as const;

/* ── Data ── */

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Why MRI", href: "#why" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "45,000+", label: "Clients Worldwide" },
  { value: "23M", label: "Units Managed" },
  { value: "5.5M", label: "Leases Managed" },
  { value: "170+", label: "Countries" },
  { value: "400+", label: "Technology Partners" },
];

const solutions = [
  {
    icon: Building2,
    title: "Property Management",
    desc: "End-to-end platform for residential, commercial, and mixed-use property operations. Automate workflows, streamline accounting, and deliver exceptional tenant experiences.",
    products: ["Property Management X", "ManhattanONE", "AP Automation", "Vendor Pay"],
  },
  {
    icon: LineChart,
    title: "Investment Management",
    desc: "Comprehensive tools for real estate investment tracking, accounting, portfolio analytics, and valuations. Make data-driven decisions across your entire portfolio.",
    products: ["Investment Central", "Investment Accounting", "Portfolio Management", "Valuations"],
  },
  {
    icon: Users,
    title: "Leasing & Marketing",
    desc: "Attract, engage, and retain tenants with integrated CRM, prospect management, and resident engagement platforms powered by real-time market intelligence.",
    products: ["MRI Engage", "Engage CRM", "ApartmentData", "Findspace"],
  },
  {
    icon: BarChart3,
    title: "Analytics & AI",
    desc: "Turn property data into actionable insights with AI-powered analytics, customizable dashboards, and enterprise reporting across your entire real estate portfolio.",
    products: ["MRI Agora", "Insights Anywhere", "CenterStone", "Rapid Reports"],
  },
  {
    icon: Layers,
    title: "Facilities & Workplace",
    desc: "Optimize building operations, energy management, space scheduling, and workplace experiences. From visitor management to footfall analytics — all in one platform.",
    products: ["NETfacilities", "Workplace Central", "OnLocation Suite", "Energy Management"],
  },
  {
    icon: Shield,
    title: "Compliance & Screening",
    desc: "Mitigate risk with automated resident screening, identity verification, income validation, and compliance management for affordable and public housing programs.",
    products: ["CheckpointID", "Resident Screening", "Affordable Housing", "PHA Pro"],
  },
];

const whyChoose = [
  {
    icon: Puzzle,
    title: "Open & Connected",
    desc: "400+ technology partners and an open API ecosystem. Integrate with your existing tools or build custom workflows — no vendor lock-in, ever.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Platform",
    desc: "Scalable, secure, and always available. Enterprise-grade infrastructure with 99.9% uptime SLA and SOC 2 Type II certification.",
  },
  {
    icon: Zap,
    title: "AI-Powered Insights",
    desc: "MRI Agora delivers predictive analytics, automated anomaly detection, and intelligent recommendations across your entire portfolio.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    desc: "Bank-level encryption, role-based access control, multi-factor authentication, and continuous security monitoring protect your data 24/7.",
  },
  {
    icon: TrendingUp,
    title: "Proven at Scale",
    desc: "Trusted by 45,000+ clients managing 23 million units. From single-property operators to global REITs — MRI scales with you.",
  },
  {
    icon: Headphones,
    title: "World-Class Support",
    desc: "Dedicated account teams, 24/7 technical support, and a global network of implementation consultants ensure your success from day one.",
  },
];

const values = [
  { title: "Make the Pride Proud", desc: "Lead with integrity and kindness in every interaction." },
  { title: "Get It Done", desc: "Take responsibility and deliver with speed and efficiency." },
  { title: "Strive to Amaze", desc: "Pursue excellence in everything we build and deliver." },
  { title: "Be Fearless", desc: "Embrace innovation and take bold steps forward." },
  { title: "Enjoy the Ride", desc: "Find joy in the journey and embrace change together." },
];

const offices = [
  { region: "Americas", locations: ["Solon, OH (HQ)", "Atlanta, GA", "Toronto, Canada"] },
  { region: "EMEA", locations: ["London, UK", "Dublin, Ireland", "Cape Town, SA", "Dubai, UAE"] },
  { region: "APAC", locations: ["Sydney, Australia", "Singapore", "Hong Kong", "Auckland, NZ"] },
];

const contactInfo = {
  hq: "28925 Fountain Parkway, Solon, OH 44139",
  phones: [
    { label: "US / Canada Sales", number: "1-800-321-8770" },
    { label: "UK", number: "+44 20 3861 7100" },
    { label: "Australia", number: "+61 2 8915 5000" },
  ],
};

export default function MRISoftware() {
  return (
    <div className="min-h-screen bg-white" style={sans}>
      {/* ── Top Bar ── */}
      <div style={{ background: C.navy }} className="text-white/60 text-xs tracking-wide">
        <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              Solon, OH &middot; Global Headquarters
            </span>
            <span className="hidden sm:inline">&middot;</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Globe className="w-3 h-3" />
              170+ Countries
            </span>
          </div>
          <a
            href="tel:18003218770"
            className="flex items-center gap-1.5 font-semibold hover:text-white transition-colors"
            style={{ color: C.accent }}
          >
            <Phone className="w-3 h-3" />
            1-800-321-8770
          </a>
        </div>
      </div>

      {/* ── Header / Nav ── */}
      <header style={{ background: C.navy }} className="border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={`${IMG}/logo-white.svg`} alt="MRI Software" className="h-12 w-auto" />
            <div className="hidden sm:block w-px h-8 bg-white/15" />
            <span className="hidden sm:block text-white/40 text-[11px] tracking-[0.2em] uppercase">
              Real Estate Software
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[13px] text-white/70 tracking-wide">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-white px-5 py-2.5 font-semibold transition-all flex items-center gap-2 rounded-lg"
              style={{ background: C.blue }}
            >
              <Phone className="w-3.5 h-3.5" />
              Get a Demo
            </a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: C.gradHero }}>
        {/* Decorative gradient orbs */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: C.blue }}
        />
        <div
          className="absolute bottom-[-30%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{ background: C.accent }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase mb-8 px-4 py-2 rounded-full border border-white/10"
              style={{ color: C.accent }}
            >
              <Zap className="w-3.5 h-3.5" />
              Real Estate Software for Innovators
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              Transform How{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: C.grad }}
              >
                Communities
              </span>
              <br />
              Live, Work & Play
            </h1>
            <p className="text-white/55 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
              The industry&apos;s most comprehensive, flexible, open and connected technology
              platform for real estate owners, operators and occupiers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="text-white px-8 py-4 font-bold text-lg transition-all flex items-center justify-center gap-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/25"
                style={{ background: C.blue }}
              >
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#solutions"
                className="border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-8 py-4 font-semibold transition-all flex items-center justify-center gap-2 backdrop-blur-sm rounded-lg"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ background: C.navy }}>
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold tracking-tight" style={{ color: C.accent }}>
                {s.value}
              </div>
              <div className="text-white/40 text-xs tracking-[0.15em] uppercase mt-1.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Solutions ── */}
      <section id="solutions" className="py-24" style={{ background: C.ice }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-3"
              style={{ color: C.blue }}
            >
              Solutions
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: C.navy }}>
              One Platform. Every Solution.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base" style={{ color: C.ghost }}>
              From property management to investment analytics, MRI delivers the complete technology
              stack for every real estate vertical.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-8 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ background: `${C.blue}12` }}
                >
                  <s.icon className="w-6 h-6" style={{ color: C.blue }} />
                </div>
                <h3
                  className="text-xl font-bold mb-3 tracking-tight"
                  style={{ color: C.navy }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: C.ghost }}>
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.products.map((p) => (
                    <span
                      key={p}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                      style={{ background: `${C.blue}08`, color: C.blue }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform Highlight Banner ── */}
      <section className="relative overflow-hidden py-20" style={{ background: C.gradDark }}>
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: C.accent }}
        />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
                style={{ color: C.accent }}
              >
                MRI Agora
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
                AI-Powered Intelligence for Real Estate
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                MRI Agora harnesses artificial intelligence to transform raw property data into
                predictive insights, automated recommendations, and intelligent workflows that drive
                measurable results across your portfolio.
              </p>
              <div className="space-y-4">
                {[
                  "Predictive analytics across all asset classes",
                  "Automated anomaly detection and alerts",
                  "Natural language data queries",
                  "Portfolio-wide benchmarking and forecasting",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      className="w-5 h-5 shrink-0"
                      style={{ color: C.accent }}
                    />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="w-full max-w-md aspect-square rounded-2xl flex items-center justify-center relative"
                style={{ background: `${C.blue}15` }}
              >
                <div
                  className="absolute inset-4 rounded-xl border border-white/5"
                  style={{ background: `${C.navy}80` }}
                />
                <div className="relative text-center p-8">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4" style={{ color: C.accent }} />
                  <p className="text-white font-bold text-2xl mb-2">MRI Agora</p>
                  <p className="text-white/40 text-sm">
                    Intelligent analytics platform powering data-driven decisions for 45,000+ clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose MRI ── */}
      <section id="why" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-3"
              style={{ color: C.blue }}
            >
              Why MRI Software
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: C.navy }}>
              Built for Enterprise. Designed for You.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base" style={{ color: C.ghost }}>
              The flexibility to configure your way. The power to scale without limits. The
              partnership to ensure your success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, i) => (
              <div key={item.title} className="relative group">
                <div
                  className="absolute -top-2 -left-2 text-[5rem] font-bold leading-none select-none opacity-[0.04]"
                  style={{ color: C.navy }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
                    style={{ background: C.gradDark }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: C.accent }} />
                  </div>
                  <h3
                    className="text-lg font-bold mb-2 tracking-tight"
                    style={{ color: C.navy }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.ghost }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Company ── */}
      <section id="about" className="py-24" style={{ background: C.ice }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase font-semibold mb-3"
                style={{ color: C.blue }}
              >
                About MRI Software
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight mb-6"
                style={{ color: C.navy }}
              >
                Transforming Real Estate Technology Since 1971
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: C.slate }}>
                For over five decades, MRI Software has been at the forefront of real estate
                technology innovation. Headquartered in Solon, Ohio, we serve 45,000+ clients
                across 170+ countries with the industry&apos;s most comprehensive and connected
                platform.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: C.slate }}>
                Our mission is simple: give organizations the freedom to transform the way
                communities live, work and play. Through innovative, open and connected technology,
                we empower real estate owners, operators and occupiers to thrive in a rapidly
                evolving world.
              </p>
              {/* Values */}
              <div className="space-y-3">
                {values.map((v) => (
                  <div key={v.title} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: C.accent }}
                    />
                    <div>
                      <span className="font-semibold text-sm" style={{ color: C.navy }}>
                        {v.title}
                      </span>
                      <span className="text-sm" style={{ color: C.ghost }}>
                        {" "}&mdash; {v.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Global Presence */}
            <div>
              <div className="bg-white rounded-xl p-8 border border-slate-100 mb-6">
                <h3
                  className="text-lg font-bold mb-6 flex items-center gap-2"
                  style={{ color: C.navy }}
                >
                  <Globe className="w-5 h-5" style={{ color: C.blue }} />
                  Global Presence
                </h3>
                <div className="space-y-6">
                  {offices.map((o) => (
                    <div key={o.region}>
                      <p
                        className="text-xs font-semibold tracking-[0.15em] uppercase mb-2"
                        style={{ color: C.blue }}
                      >
                        {o.region}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {o.locations.map((loc) => (
                          <span
                            key={loc}
                            className="text-sm px-3 py-1.5 rounded-lg"
                            style={{
                              background: C.ice,
                              color: C.slate,
                            }}
                          >
                            {loc}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Recognition card */}
              <div
                className="rounded-xl p-8 text-white"
                style={{ background: C.gradDark }}
              >
                <Award className="w-8 h-8 mb-4" style={{ color: C.accent }} />
                <h3 className="text-lg font-bold mb-2">Industry Recognition</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Consistently recognized as a leader in real estate technology by industry analysts
                  and trade publications. Named a top workplace and trusted by the world&apos;s
                  largest property companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="contact"
        className="relative overflow-hidden py-20"
        style={{ background: C.gradHero }}
      >
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: C.accent }}
        />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">
            Ready to Transform Your Real Estate Operations?
          </h2>
          <p className="text-white/45 text-lg mb-10 max-w-2xl mx-auto">
            Join 45,000+ clients worldwide. Schedule a personalized demo and discover how MRI
            Software can elevate your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:18003218770"
              className="text-white px-10 py-4 font-bold text-lg transition-all flex items-center justify-center gap-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/25"
              style={{ background: C.blue }}
            >
              <Phone className="w-5 h-5" />
              1-800-321-8770
            </a>
            <a
              href="mailto:info@mrisoftware.com"
              className="border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-10 py-4 font-semibold transition-all flex items-center justify-center gap-2 rounded-lg"
            >
              <Mail className="w-5 h-5" />
              info@mrisoftware.com
            </a>
          </div>
          {/* Regional phones */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/40">
            {contactInfo.phones.map((p) => (
              <a
                key={p.label}
                href={`tel:${p.number.replace(/[\s()-]/g, "")}`}
                className="flex items-center gap-2 hover:text-white/70 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="font-medium text-white/55">{p.label}:</span> {p.number}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: C.navy }} className="text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <img src={`${IMG}/logo-white.svg`} alt="MRI Software" className="h-8 w-auto mb-4" />
              <p className="text-white/40 text-sm leading-relaxed mb-4">
                Innovative, open and connected technology for real estate owners, operators and
                occupiers worldwide.
              </p>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-white/30 font-semibold mb-5">
                Solutions
              </h3>
              <ul className="space-y-2.5 text-sm text-white/50">
                {solutions.map((s) => (
                  <li key={s.title}>
                    <a href="#solutions" className="flex items-center gap-1.5 hover:text-white transition-colors">
                      <ChevronRight className="w-3 h-3 opacity-40" />
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-white/30 font-semibold mb-5">
                Company
              </h3>
              <ul className="space-y-2.5 text-sm text-white/50">
                {["About Us", "Leadership", "Careers", "Partners", "News & Events"].map((item) => (
                  <li key={item}>
                    <a href="#about" className="flex items-center gap-1.5 hover:text-white transition-colors">
                      <ChevronRight className="w-3 h-3 opacity-40" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-white/30 font-semibold mb-5">
                Contact
              </h3>
              <ul className="space-y-3 text-sm text-white/50">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 shrink-0" style={{ color: `${C.accent}99` }} />
                  <a href="tel:18003218770" className="hover:text-white transition-colors">
                    1-800-321-8770
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 shrink-0" style={{ color: `${C.accent}99` }} />
                  <a
                    href="mailto:info@mrisoftware.com"
                    className="hover:text-white transition-colors"
                  >
                    info@mrisoftware.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: `${C.accent}99` }} />
                  <span>
                    28925 Fountain Parkway
                    <br />
                    Solon, OH 44139
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25">
            <p>
              &copy; {new Date().getFullYear()} MRI Software LLC. All rights reserved.
            </p>
            <p>
              Website by{" "}
              <a href="/" className="text-white/40 hover:text-white transition-colors">
                KPT Designs
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

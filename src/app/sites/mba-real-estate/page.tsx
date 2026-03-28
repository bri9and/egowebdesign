import {
  Phone,
  Building2,
  Home,
  ShieldCheck,
  MapPin,
  ChevronRight,
  Award,
  Key,
  Wrench,
  Mail,
  Quote,
  ArrowRight,
  ClipboardCheck,
  Users,
  Clock,
  Star,
  Search,
  FileText,
  Landmark,
  Sun,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "MBA Real Estate | Phoenix Property Management & Real Estate Broker",
  description:
    "Phoenix property management since 2009. Serving the greater Phoenix metro area with tenant placement, full-service management, and real estate brokerage. BBB A+ rated. Call (602) 595-9966.",
};

const IMG = "/sites/mba-real-estate";

const sans = { fontFamily: "'Inter', system-ui, sans-serif" } as const;
const serif = {
  fontFamily: "'Georgia', 'Palatino Linotype', serif",
} as const;

/* ── Color palette: Desert sage green + terra cotta ── */
const C = {
  dark: "#1B3A2D",       // deep forest green
  mid: "#2D5A45",        // sage green
  accent: "#C67B4E",     // terra cotta / copper
  accentHover: "#B56A3D",
  light: "#FAF7F2",      // warm cream
  warm: "#F0EBE1",       // sand
  text: "#2C3E35",       // dark green-gray for text
};

const services = [
  {
    icon: Home,
    title: "Residential Management",
    desc: "Complete management for single-family homes, condominiums, and townhouses. We handle everything so you can enjoy passive income without the headaches.",
  },
  {
    icon: Building2,
    title: "Multi-Family Properties",
    desc: "Specialized oversight for duplexes, triplexes, and apartment complexes. Maximizing occupancy rates and minimizing turnover across your portfolio.",
  },
  {
    icon: Key,
    title: "Tenant Placement",
    desc: "Thorough screening process including credit, criminal, and rental history checks. We find qualified tenants fast and handle all lease execution.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    desc: "24/7 emergency maintenance coordination. Routine inspections and preventive care keep your properties in top condition and protect your investment.",
  },
  {
    icon: FileText,
    title: "Accounting & Reporting",
    desc: "Transparent record keeping with detailed monthly owner statements, year-end tax documentation, and real-time access to your property financials.",
  },
  {
    icon: Landmark,
    title: "Real Estate Brokerage",
    desc: "Full-service real estate brokerage for buying and selling investment properties. Market analysis, negotiation, and closing support from licensed professionals.",
  },
];

const areas = [
  { name: "Phoenix", note: "Central corridors and historic districts" },
  { name: "Tempe", note: "University-adjacent and downtown rentals" },
  { name: "Scottsdale", note: "Upscale residential properties" },
  { name: "Mesa", note: "Family homes and growing communities" },
  { name: "Chandler", note: "Tech corridor neighborhoods" },
  { name: "Gilbert", note: "Master-planned communities" },
  { name: "Glendale", note: "Affordable residential rentals" },
  { name: "Peoria", note: "Suburban family properties" },
];

const team = [
  {
    name: "Annette D. Grant",
    role: "Managing Member & Broker",
    bio: "Annette founded MBA Real Estate in 2009 with a vision to deliver institutional-quality property management with personal attention. With decades of real estate experience, she oversees all brokerage operations and sets the standard for client service.",
  },
  {
    name: "Yaneth Ruiz",
    role: "Property Manager",
    bio: "Yaneth is the heart of day-to-day operations. Known for her responsiveness and creative problem-solving, she manages tenant relations, maintenance coordination, and ensures every property runs smoothly.",
  },
];

const testimonials = [
  {
    name: "Chantel M.",
    role: "Tenant, Phoenix",
    rating: 5,
    text: "They are great landlords who care about their tenants. Way better than any others I've dealt with in the past.",
  },
  {
    name: "Steven H.",
    role: "Property Owner",
    rating: 5,
    text: "Very professional, responsive and fair. Their record keeping was very good as was their communications.",
  },
  {
    name: "Gavin H.",
    role: "Tenant, Tempe",
    rating: 5,
    text: "We rented for four and a half years. We had zero issues, and all requests were handled quickly and fairly.",
  },
  {
    name: "Jose M.",
    role: "Property Owner, Phoenix",
    rating: 5,
    text: "Very very pleased with everything. Yaneth was always on top of everything, always willing to help out.",
  },
];

const stats = [
  { value: "16+", label: "Years in Business" },
  { value: "A+", label: "BBB Rating" },
  { value: "30+", label: "Years Combined Experience" },
  { value: "Phoenix", label: "Metro Coverage" },
];

const process = [
  {
    step: "01",
    icon: Search,
    title: "Free Market Analysis",
    desc: "We evaluate your property, analyze comparable rentals, and recommend optimal pricing to maximize returns.",
  },
  {
    step: "02",
    icon: Users,
    title: "Advertising & Showings",
    desc: "Professional marketing across top rental platforms with scheduled showings to attract qualified tenant prospects.",
  },
  {
    step: "03",
    icon: ClipboardCheck,
    title: "Screening & Approval",
    desc: "Comprehensive background checks — credit, criminal, employment, and rental history verification for every applicant.",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Ongoing Management",
    desc: "Rent collection, maintenance coordination, inspections, and transparent owner reporting — month after month.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4"
          style={{ fill: C.accent, color: C.accent }}
        />
      ))}
    </div>
  );
}

export default function MBARealEstate() {
  return (
    <div className="min-h-screen" style={{ ...sans, color: C.text }}>
      {/* ── Top Bar ── */}
      <div style={{ backgroundColor: "#142A1F" }} className="text-white/50 text-xs tracking-wide">
        <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              4700 S Mill Ave, Ste 5, Tempe, AZ 85282
            </span>
            <span className="hidden sm:inline">&middot;</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              Mon&ndash;Fri 9AM&ndash;5PM
            </span>
          </div>
          <a
            href="tel:6025959966"
            className="flex items-center gap-1.5 font-semibold transition-colors"
            style={{ color: C.accent }}
          >
            <Phone className="w-3 h-3" />(602) 595-9966
          </a>
        </div>
      </div>

      {/* ── Header / Nav ── */}
      <header
        className="border-b border-white/5"
        style={{ backgroundColor: C.dark }}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <img src={`${IMG}/logo.gif`} alt="MBA Real Estate" className="h-10 w-auto" />
              <div>
                <div className="text-white text-lg font-bold tracking-tight leading-none">
                  MBA Real Estate
                </div>
                <div
                  className="text-[10px] tracking-[0.2em] uppercase leading-none mt-1"
                  style={{ color: C.accent }}
                >
                  Property Management & Brokerage
                </div>
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[13px] text-white/60 tracking-wide">
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#process" className="hover:text-white transition-colors">
              Process
            </a>
            <a href="#areas" className="hover:text-white transition-colors">
              Areas
            </a>
            <a href="#team" className="hover:text-white transition-colors">
              Team
            </a>
            <a href="#testimonials" className="hover:text-white transition-colors">
              Reviews
            </a>
            <a
              href="tel:6025959966"
              className="px-5 py-2.5 font-semibold transition-colors flex items-center gap-2 rounded-lg"
              style={{ backgroundColor: C.accent, color: "#fff" }}
            >
              <Phone className="w-3.5 h-3.5" />
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative text-white overflow-hidden" style={{ backgroundColor: C.dark }}>
        <img
          src={`${IMG}/hero.jpg`}
          alt="Arizona residential property"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${C.dark}ee 0%, ${C.dark}88 50%, ${C.mid}66 100%)`,
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-8"
              style={{ backgroundColor: `${C.accent}22`, color: C.accent }}
            >
              <Sun className="w-3.5 h-3.5" />
              Serving Greater Phoenix Since 2009
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-tight mb-6">
              Property Management
              <br />
              That Protects Your
              <br />
              <span style={{ color: C.accent }}>Investment.</span>
            </h1>
            <p className="text-white/55 text-lg leading-relaxed max-w-lg mb-10" style={serif}>
              MBA Real Estate represents property owners across the Phoenix
              metro who expect quality tenants, transparent reporting, and
              a management team that treats your property like their own.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:6025959966"
                className="px-8 py-4 font-bold text-lg transition-colors flex items-center justify-center gap-3 rounded-lg"
                style={{ backgroundColor: C.accent, color: "#fff" }}
              >
                <Phone className="w-5 h-5" />(602) 595-9966
              </a>
              <a
                href="#services"
                className="border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-8 py-4 font-semibold transition-all flex items-center justify-center gap-2 backdrop-blur-sm rounded-lg"
              >
                Our Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ backgroundColor: C.mid }}>
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-3xl font-bold tracking-tight"
                style={{ color: C.accent }}
              >
                {s.value}
              </div>
              <div className="text-white/50 text-xs tracking-[0.15em] uppercase mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-20" style={{ backgroundColor: C.light }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-3"
              style={{ color: C.accent }}
            >
              What We Do
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: C.dark }}
            >
              Full-Service Property Management
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-base opacity-60">
              From tenant placement to real estate brokerage, every service
              your investment property needs under one roof.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="relative bg-white border p-8 overflow-hidden group hover:shadow-lg transition-all rounded-xl"
                style={{ borderColor: `${C.dark}0d` }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-t-xl"
                  style={{ backgroundColor: C.accent }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${C.dark}0d` }}
                >
                  <s.icon className="w-6 h-6" style={{ color: C.mid }} />
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: C.dark }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-3"
              style={{ color: C.accent }}
            >
              How It Works
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: C.dark }}
            >
              Our Management Process
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-base opacity-60">
              A proven four-step approach that protects your investment
              and maximizes your returns from day one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <div key={p.step} className="relative text-center group">
                {/* Connector line */}
                {i < process.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px"
                    style={{ backgroundColor: `${C.dark}15` }}
                  />
                )}
                <div className="relative inline-block mb-6">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${C.accent}15` }}
                  >
                    <p.icon className="w-8 h-8" style={{ color: C.accent }} />
                  </div>
                  <div
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: C.dark }}
                  >
                    {p.step}
                  </div>
                </div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: C.dark }}
                >
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-55 max-w-xs mx-auto">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Properties ── */}
      <section className="py-20" style={{ backgroundColor: C.warm }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-3"
              style={{ color: C.accent }}
            >
              Property Portfolio
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: C.dark }}
            >
              Properties We Manage
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-base opacity-60">
              From single-family homes to multi-family complexes across the
              Phoenix metro area.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: `${IMG}/property1.jpg`,
                title: "Modern Family Home",
                type: "Single Family",
                area: "Tempe, AZ",
                beds: 4,
                baths: 2,
              },
              {
                img: `${IMG}/property2.jpg`,
                title: "Luxury Residence",
                type: "Single Family",
                area: "Scottsdale, AZ",
                beds: 3,
                baths: 2,
              },
              {
                img: `${IMG}/property3.jpg`,
                title: "Contemporary Home",
                type: "Single Family",
                area: "Phoenix, AZ",
                beds: 3,
                baths: 2,
              },
            ].map((p) => (
              <div
                key={p.title}
                className="bg-white overflow-hidden group hover:shadow-xl transition-all rounded-xl"
                style={{ border: `1px solid ${C.dark}0a` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1.5 tracking-wide rounded-md"
                    style={{ backgroundColor: C.accent }}
                  >
                    {p.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: C.dark }}
                  >
                    {p.title}
                  </h3>
                  <p className="flex items-center gap-1.5 text-sm mb-3 opacity-50">
                    <MapPin
                      className="w-3.5 h-3.5"
                      style={{ color: `${C.accent}88` }}
                    />
                    {p.area}
                  </p>
                  <div
                    className="flex items-center gap-4 text-xs opacity-50 pt-3"
                    style={{ borderTop: `1px solid ${C.dark}0a` }}
                  >
                    <span>{p.beds} Beds</span>
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: `${C.dark}30` }}
                    />
                    <span>{p.baths} Baths</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="tel:6025959966"
              className="inline-flex items-center gap-2 font-semibold text-sm transition-colors"
              style={{ color: C.accent }}
            >
              <Phone className="w-4 h-4" />
              Call for current availability
            </a>
          </div>
        </div>
      </section>

      {/* ── Areas Served ── */}
      <section id="areas" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-3"
              style={{ color: C.accent }}
            >
              Greater Phoenix Metro
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: C.dark }}
            >
              Areas We Serve
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {areas.map((a) => (
              <div
                key={a.name}
                className="border p-6 hover:shadow-md transition-all group rounded-xl"
                style={{
                  backgroundColor: C.light,
                  borderColor: `${C.dark}0a`,
                }}
              >
                <div className="flex items-start gap-3">
                  <MapPin
                    className="w-4 h-4 mt-1 shrink-0"
                    style={{ color: C.accent }}
                  />
                  <div>
                    <h3
                      className="font-bold text-base group-hover:opacity-80 transition-opacity"
                      style={{ color: C.dark }}
                    >
                      {a.name}
                    </h3>
                    <p className="text-sm mt-1 opacity-50">{a.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Team ── */}
      <section id="team" className="py-20" style={{ backgroundColor: C.light }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase font-semibold mb-3"
                style={{ color: C.accent }}
              >
                About MBA Real Estate
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight mb-6"
                style={{ color: C.dark }}
              >
                Your Property Is
                <br />
                Our Priority
              </h2>
              <div className="space-y-4 text-sm leading-relaxed opacity-65" style={serif}>
                <p>
                  Founded in 2009, MBA Real Estate represents property owners
                  across the greater Phoenix area who demand more than just
                  a management company &mdash; they need a partner invested
                  in the success of their real estate portfolio.
                </p>
                <p>
                  With over 30 years of combined experience, our licensed
                  team provides institutional-quality property management
                  with the personal touch of a boutique firm. From tenant
                  placement to full-service management to brokerage, we
                  handle every aspect of your investment.
                </p>
                <p>
                  We use the latest technology to manage your units and
                  attract quality tenants time and again. Every property in
                  our portfolio receives a dedicated manager, transparent
                  financial reporting, and the peace of mind that your
                  asset is protected.
                </p>
              </div>
              <div className="flex flex-wrap gap-6 mt-8">
                {[
                  { icon: ShieldCheck, label: "BBB A+ Rated" },
                  { icon: Award, label: "Licensed & Bonded" },
                  { icon: Clock, label: "Est. 2009" },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-2">
                    <b.icon
                      className="w-5 h-5"
                      style={{ color: C.accent }}
                    />
                    <span
                      className="text-sm font-semibold"
                      style={{ color: C.dark }}
                    >
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={`${IMG}/about.jpg`}
                alt="MBA Real Estate office"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div
                className="absolute -bottom-6 -left-6 p-6 rounded-xl shadow-lg hidden lg:flex items-center gap-4"
                style={{ backgroundColor: C.dark }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${C.accent}22` }}
                >
                  <TrendingUp className="w-7 h-7" style={{ color: C.accent }} />
                </div>
                <div>
                  <div className="text-white font-bold text-xl">16+ Years</div>
                  <div className="text-white/50 text-xs tracking-wide">
                    Trusted in Phoenix
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Cards */}
          <div className="text-center mb-10">
            <h3
              className="text-2xl font-bold tracking-tight"
              style={{ color: C.dark }}
            >
              Meet Our Team
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((t) => (
              <div
                key={t.name}
                className="bg-white border p-8 rounded-xl hover:shadow-lg transition-all"
                style={{ borderColor: `${C.dark}0a` }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${C.accent}12` }}
                >
                  <Users className="w-7 h-7" style={{ color: C.accent }} />
                </div>
                <h4
                  className="text-lg font-bold mb-1"
                  style={{ color: C.dark }}
                >
                  {t.name}
                </h4>
                <p
                  className="text-sm font-semibold mb-4"
                  style={{ color: C.accent }}
                >
                  {t.role}
                </p>
                <p className="text-sm leading-relaxed opacity-60" style={serif}>
                  {t.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-3"
              style={{ color: C.accent }}
            >
              Client Reviews
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: C.dark }}
            >
              What Our Clients Say
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-base opacity-60">
              Real feedback from property owners and tenants across the
              Phoenix metro area.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border p-8 rounded-xl hover:shadow-md transition-all"
                style={{
                  backgroundColor: C.light,
                  borderColor: `${C.dark}08`,
                }}
              >
                <Stars count={t.rating} />
                <p
                  className="text-base leading-relaxed mt-4 mb-6 opacity-70"
                  style={serif}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <div
                  className="pt-4 flex items-center gap-3"
                  style={{ borderTop: `1px solid ${C.dark}0a` }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ backgroundColor: C.mid }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p
                      className="font-bold text-sm"
                      style={{ color: C.dark }}
                    >
                      {t.name}
                    </p>
                    <p className="text-xs mt-0.5 opacity-45">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose MBA ── */}
      <section className="py-20" style={{ backgroundColor: C.warm }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-3"
              style={{ color: C.accent }}
            >
              The MBA Advantage
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: C.dark }}
            >
              Why Property Owners Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Thorough Screening",
                desc: "Every applicant undergoes comprehensive credit, criminal, employment, and rental history checks. We protect your investment by placing quality tenants.",
              },
              {
                icon: FileText,
                title: "Transparent Reporting",
                desc: "Detailed monthly statements, year-end tax documents, and real-time access to your property financials. You always know exactly where your investment stands.",
              },
              {
                icon: Wrench,
                title: "24/7 Maintenance",
                desc: "Emergency maintenance coordination around the clock. Routine inspections and preventive care keep your property in peak condition and tenants satisfied.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center px-4">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: C.dark }}
                >
                  <item.icon
                    className="w-9 h-9"
                    style={{ color: C.accent }}
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: C.dark }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-55">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ backgroundColor: C.dark }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-8"
            style={{ backgroundColor: `${C.accent}22`, color: C.accent }}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Free, No-Obligation Consultation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Ready to Protect Your Investment?
          </h2>
          <p className="text-white/40 text-lg mb-10 max-w-lg mx-auto" style={serif}>
            Get a free market analysis and see how MBA Real Estate can
            maximize your property&apos;s potential. No pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:6025959966"
              className="inline-flex items-center gap-3 px-10 py-4 font-bold text-lg transition-colors rounded-lg"
              style={{ backgroundColor: C.accent, color: "#fff" }}
            >
              <Phone className="w-5 h-5" />(602) 595-9966
            </a>
            <a
              href="mailto:info@mba-re.com"
              className="inline-flex items-center gap-3 border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-10 py-4 font-bold text-lg transition-all rounded-lg"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
          <p className="text-white/25 text-sm mt-6">
            4700 S Mill Ave, Ste 5, Tempe, AZ 85282 &middot; Mon&ndash;Fri
            9AM&ndash;5PM
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-16 text-white" style={{ backgroundColor: "#142A1F" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-xs"
                  style={{ backgroundColor: C.accent, color: "#fff" }}
                >
                  MBA
                </div>
                <span className="text-lg font-bold tracking-tight">
                  MBA Real Estate
                </span>
              </div>
              <p className="text-white/35 text-sm leading-relaxed mb-4" style={serif}>
                Phoenix property management and real estate brokerage since
                2009. BBB A+ rated with over 30 years of combined experience.
                Serving the greater Phoenix metro area.
              </p>
              <div className="flex items-center gap-2 text-white/20 text-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Licensed &middot; Bonded &middot; Insured</span>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-white/25 font-semibold mb-5">
                Contact
              </h3>
              <ul className="space-y-3 text-sm text-white/50">
                <li className="flex items-center gap-3">
                  <Phone
                    className="w-4 h-4"
                    style={{ color: `${C.accent}88` }}
                  />
                  <a
                    href="tel:6025959966"
                    className="hover:text-white transition-colors"
                  >
                    (602) 595-9966
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone
                    className="w-4 h-4"
                    style={{ color: `${C.accent}88` }}
                  />
                  <span>Fax: (480) 658-2996</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail
                    className="w-4 h-4"
                    style={{ color: `${C.accent}88` }}
                  />
                  <a
                    href="mailto:info@mba-re.com"
                    className="hover:text-white transition-colors"
                  >
                    info@mba-re.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin
                    className="w-4 h-4 mt-0.5"
                    style={{ color: `${C.accent}88` }}
                  />
                  <span>
                    4700 S Mill Ave, Ste 5
                    <br />
                    Tempe, AZ 85282
                  </span>
                </li>
              </ul>
            </div>

            {/* Areas Served */}
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-white/25 font-semibold mb-5">
                Areas Served
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/40">
                {areas.map((a) => (
                  <span key={a.name} className="flex items-center gap-1.5">
                    <ChevronRight
                      className="w-3 h-3"
                      style={{ color: `${C.accent}55` }}
                    />
                    {a.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div
            className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/20"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <p>
              &copy; {new Date().getFullYear()} MBA Real Estate LLC. All
              rights reserved.
            </p>
            <p>
              Website by{" "}
              <a
                href="/"
                className="text-white/35 hover:text-white transition-colors"
              >
                KPT Designs
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

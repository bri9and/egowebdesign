import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Home,
  DollarSign,
  Key,
  Search,
  FileText,
  Users,
  Handshake,
  ChevronRight,
  Quote,
  Star,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Building,
} from "lucide-react";

export const metadata = {
  title: "Big Door Realty | Find Your Dream Home in Arizona",
  description:
    "Arizona real estate brokerage helping buyers, sellers, and investors find their dream homes. Flat fee listings, pre-qualification, and 100+ investor network. Call (602) 344-9790.",
};

const sans = { fontFamily: "system-ui, -apple-system, sans-serif" } as const;
const serif = {
  fontFamily: "'Georgia', 'Palatino Linotype', 'Times New Roman', serif",
} as const;

const services = [
  {
    icon: Search,
    title: "Home Search",
    desc: "Custom home searches tailored to your lifestyle, budget, and preferred Arizona neighborhoods. We find what others miss.",
  },
  {
    icon: DollarSign,
    title: "Property Valuation",
    desc: "Accurate market analysis and property valuations backed by deep local knowledge and current Arizona market data.",
  },
  {
    icon: FileText,
    title: "Flat Fee Listing",
    desc: "List your property with full MLS exposure at a flat fee. Premium service without the premium commission.",
  },
  {
    icon: Key,
    title: "Buyer Representation",
    desc: "Expert guidance through every step of the home buying process, from first showing to closing day.",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    desc: "Access to 100+ investors and strategic advice for building your real estate portfolio in Arizona's growing market.",
  },
  {
    icon: Handshake,
    title: "Pre-Qualification",
    desc: "Get pre-qualified quickly through our financing partners so you can move fast when you find the right home.",
  },
];

const team = [
  {
    name: "Richard Quintero",
    role: "Owner",
    phone: "(602) 344-9790",
    email: "[email protected]",
    img: "/sites/big-door-realty/richard-quintero.png",
    desc: "Founder and driving force behind Big Door Realty, Richard brings entrepreneurial vision and a client-first approach to Arizona real estate.",
  },
  {
    name: "Ashley Everts",
    role: "Designated Broker",
    phone: "(480) 739-3804",
    email: "[email protected]",
    img: "/sites/big-door-realty/ashley-everts.png",
    desc: "As Designated Broker, Ashley ensures every transaction meets the highest standards of professionalism and compliance.",
  },
  {
    name: "Sofia Gonzalez",
    role: "Transaction Coordinator",
    phone: "(602) 344-9790",
    email: "[email protected]",
    img: "/sites/big-door-realty/sofia-gonzalez.png",
    desc: "Sofia keeps every deal on track from contract to close, coordinating timelines and paperwork with meticulous attention to detail.",
  },
  {
    name: "Ana Garcia",
    role: "Realtor\u00AE",
    phone: "(602) 344-9790",
    email: "[email protected]",
    img: "/sites/big-door-realty/ana-garcia.png",
    desc: "A dedicated Realtor\u00AE committed to helping families find the perfect home in the Valley, Ana brings warmth and market expertise to every client relationship.",
  },
];

const testimonials = [
  {
    name: "Marcus & Elena R.",
    role: "First-Time Homebuyers, Tempe",
    text: "Big Door Realty made our first home purchase feel effortless. Richard and the team walked us through every step, found us a home under budget, and made sure we understood everything before signing. We could not be happier.",
    stars: 5,
  },
  {
    name: "David K.",
    role: "Property Investor, Scottsdale",
    text: "The flat fee listing saved me thousands on my last sale, and their investor network helped me find my next property within a week. This is the smartest real estate team I have worked with in Arizona.",
    stars: 5,
  },
  {
    name: "Jennifer & Tom W.",
    role: "Sellers, Chandler",
    text: "We listed with Big Door Realty and had multiple offers within the first weekend. Ashley and Sofia handled the entire process professionally. The communication was outstanding from start to finish.",
    stars: 5,
  },
];

const stats = [
  { value: "100+", label: "Investor Network" },
  { value: "24/7", label: "Client Support" },
  { value: "AZ", label: "Licensed Statewide" },
  { value: "Flat Fee", label: "Listing Option" },
];

const navItems = [
  "Home Search",
  "Custom Home Search",
  "Property Valuation",
  "Flat Fee Listing",
  "Pre-Qualify",
];

export default function BigDoorRealty() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]" style={serif}>
      {/* ─── Top Utility Bar ─── */}
      <div className="bg-[#1C1917] text-white/50 text-xs tracking-wide">
        <div
          className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between"
          style={sans}
        >
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              4700 S Mill Ave, Suite 5-B14, Tempe, AZ 85282
            </span>
            <span className="hidden sm:inline">&middot;</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              Mon&ndash;Fri 8AM&ndash;8PM PST
            </span>
          </div>
          <a
            href="tel:6023449790"
            className="flex items-center gap-1.5 text-[#C8A24E] font-semibold hover:text-[#d9b860] transition-colors"
          >
            <Phone className="w-3 h-3" />
            (602) 344-9790
          </a>
        </div>
      </div>

      {/* ─── Header ─── */}
      <header className="bg-[#292524] border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/sites/big-door-realty/logo.png"
              alt="Big Door Realty"
              className="h-10 w-auto"
            />
            <div className="hidden sm:block w-px h-8 bg-white/10" />
            <span
              className="hidden sm:block text-white/30 text-[11px] tracking-[0.2em] uppercase"
              style={sans}
            >
              Arizona Real Estate
            </span>
          </div>
          <nav
            className="hidden md:flex items-center gap-7 text-[13px] text-white/60 tracking-wide"
            style={sans}
          >
            <a
              href="#services"
              className="hover:text-white transition-colors"
            >
              Services
            </a>
            <a href="#team" className="hover:text-white transition-colors">
              Team
            </a>
            <a
              href="#testimonials"
              className="hover:text-white transition-colors"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="tel:6023449790"
              className="bg-[#C8A24E] hover:bg-[#b8933f] text-[#1C1917] px-5 py-2.5 font-bold transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              Get Started
            </a>
          </nav>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="relative text-white min-h-[560px] lg:min-h-[640px] flex items-center overflow-hidden">
        <img
          src="/sites/big-door-realty/hero.jpg"
          alt="Beautiful Arizona home"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917]/90 via-[#1C1917]/75 to-[#1C1917]/40" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-32 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[#C8A24E]" />
              <span
                className="text-[#C8A24E] text-xs tracking-[0.3em] uppercase font-semibold"
                style={sans}
              >
                Tempe, Arizona
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold leading-[1.08] tracking-tight mb-6"
              style={sans}
            >
              Let&rsquo;s Help You Find
              <br />
              Your{" "}
              <span
                className="italic font-normal text-[#C8A24E]"
                style={serif}
              >
                Dream Home
              </span>
            </h1>
            <p className="text-white/55 text-lg leading-relaxed max-w-lg mb-10">
              Big Door Realty is an Arizona brokerage built on personal
              service, not corporate formulas. We treat every client as an
              individual and open doors others cannot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:6023449790"
                className="bg-[#C8A24E] hover:bg-[#b8933f] text-[#1C1917] px-8 py-4 font-bold text-lg transition-colors flex items-center justify-center gap-3"
                style={sans}
              >
                <Phone className="w-5 h-5" />
                (602) 344-9790
              </a>
              <a
                href="#services"
                className="border border-white/20 hover:border-[#C8A24E]/50 text-white/70 hover:text-white px-8 py-4 font-semibold transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                style={sans}
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Strip ─── */}
      <section className="bg-[#292524]">
        <div
          className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8"
          style={sans}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[#C8A24E] text-3xl font-bold tracking-tight">
                {s.value}
              </div>
              <div className="text-white/35 text-xs tracking-[0.15em] uppercase mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Services ─── */}
      <section id="services" className="bg-[#FDFBF7] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C8A24E]" />
              <span
                className="text-[#C8A24E] text-xs tracking-[0.3em] uppercase font-semibold"
                style={sans}
              >
                What We Offer
              </span>
              <div className="w-8 h-px bg-[#C8A24E]" />
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#292524] tracking-tight"
              style={sans}
            >
              Real Estate Services
            </h2>
            <p className="text-[#292524]/50 mt-3 max-w-xl mx-auto text-base">
              Whether you are buying your first home, selling a property, or
              growing your investment portfolio, we have you covered.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-[#292524]/[0.06] p-8 group hover:border-[#C8A24E]/30 hover:shadow-lg transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-[#C8A24E] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <div className="w-12 h-12 bg-[#292524] flex items-center justify-center mb-5 group-hover:bg-[#C8A24E] transition-colors">
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <h3
                  className="text-lg font-bold text-[#292524] mb-2"
                  style={sans}
                >
                  {s.title}
                </h3>
                <p className="text-[#292524]/55 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About / Why Big Door ─── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#C8A24E]" />
                <span
                  className="text-[#C8A24E] text-xs tracking-[0.3em] uppercase font-semibold"
                  style={sans}
                >
                  About Us
                </span>
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#292524] tracking-tight mb-6"
                style={sans}
              >
                Opening Doors to
                <br />
                <span
                  className="italic font-normal text-[#C8A24E]"
                  style={serif}
                >
                  New Beginnings
                </span>
              </h2>
              <div className="space-y-4 text-[#292524]/60 text-base leading-relaxed">
                <p>
                  At Big Door Realty, we treat each customer as an individual,
                  not a number. Our team brings local Arizona expertise and a
                  personal touch that larger brokerages simply cannot match.
                </p>
                <p>
                  With access to 100+ investors and strategic partnerships
                  with EZ Loans Funding and Equity Builders Construction, we
                  offer a complete ecosystem for buyers, sellers, and
                  investors alike.
                </p>
                <p>
                  Based in Tempe with reach across the entire Valley, we
                  specialize in helping families find their dream homes and
                  helping investors build lasting wealth through Arizona
                  real estate.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { icon: Home, label: "Buyer\nServices" },
                  { icon: DollarSign, label: "Seller\nServices" },
                  { icon: Building, label: "Investor\nServices" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 bg-[#FDFBF7] border border-[#C8A24E]/20 flex items-center justify-center mb-3">
                      <item.icon className="w-6 h-6 text-[#C8A24E]" />
                    </div>
                    <span
                      className="text-[#292524] text-xs font-semibold tracking-wide whitespace-pre-line"
                      style={sans}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/sites/big-door-realty/feature.png"
                alt="Arizona real estate"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#C8A24E] text-[#1C1917] p-6 hidden lg:block">
                <div
                  className="text-4xl font-bold leading-none"
                  style={sans}
                >
                  100+
                </div>
                <div
                  className="text-xs font-semibold tracking-[0.1em] uppercase mt-1"
                  style={sans}
                >
                  Investor Network
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section id="team" className="bg-[#FDFBF7] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C8A24E]" />
              <span
                className="text-[#C8A24E] text-xs tracking-[0.3em] uppercase font-semibold"
                style={sans}
              >
                Our Team
              </span>
              <div className="w-8 h-px bg-[#C8A24E]" />
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#292524] tracking-tight"
              style={sans}
            >
              Meet the Professionals
            </h2>
            <p className="text-[#292524]/50 mt-3 max-w-xl mx-auto text-base">
              A dedicated team of Arizona real estate professionals committed
              to delivering exceptional results for every client.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-[#292524]/[0.06] overflow-hidden group hover:shadow-lg transition-all"
              >
                <div className="relative h-64 overflow-hidden bg-[#E8E4DD]">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span
                      className="inline-block bg-[#C8A24E] text-[#1C1917] text-[10px] font-bold tracking-[0.1em] uppercase px-2.5 py-1"
                      style={sans}
                    >
                      {member.role}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3
                    className="text-base font-bold text-[#292524] mb-1.5"
                    style={sans}
                  >
                    {member.name}
                  </h3>
                  <p className="text-[#292524]/50 text-sm leading-relaxed mb-4">
                    {member.desc}
                  </p>
                  <div
                    className="flex items-center gap-4 text-xs text-[#292524]/40 border-t border-[#292524]/[0.06] pt-3"
                    style={sans}
                  >
                    <a
                      href={`tel:${member.phone.replace(/\D/g, "")}`}
                      className="flex items-center gap-1 hover:text-[#C8A24E] transition-colors"
                    >
                      <Phone className="w-3 h-3" />
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section id="testimonials" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C8A24E]" />
              <span
                className="text-[#C8A24E] text-xs tracking-[0.3em] uppercase font-semibold"
                style={sans}
              >
                Client Reviews
              </span>
              <div className="w-8 h-px bg-[#C8A24E]" />
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#292524] tracking-tight"
              style={sans}
            >
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#FDFBF7] border border-[#292524]/[0.06] p-8 relative"
              >
                <Quote className="w-10 h-10 text-[#C8A24E]/20 mb-4" />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#C8A24E] fill-[#C8A24E]"
                    />
                  ))}
                </div>
                <p
                  className="text-[#292524]/70 text-base leading-relaxed mb-8 italic"
                  style={serif}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-[#292524]/[0.08] pt-4">
                  <p
                    className="font-bold text-[#292524] text-sm"
                    style={sans}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[#292524]/40 text-xs mt-0.5"
                    style={sans}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Partners ─── */}
      <section className="bg-[#FDFBF7] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <span
              className="text-[#C8A24E] text-xs tracking-[0.3em] uppercase font-semibold"
              style={sans}
            >
              Trusted Partners
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                name: "EZ Loans Funding",
                img: "/sites/big-door-realty/partner-ezloans.png",
                desc: "Personalized mortgage solutions with competitive rates and diverse loan options to help you secure your dream home.",
              },
              {
                name: "Equity Builders Construction",
                img: "/sites/big-door-realty/partner-equity-builders.png",
                desc: "Phoenix-based residential construction delivering top-of-the-line services with competitive rates and expert project management.",
              },
            ].map((p) => (
              <div
                key={p.name}
                className="bg-white border border-[#292524]/[0.06] p-6 flex items-start gap-5 hover:shadow-md transition-all"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-16 h-16 object-contain rounded shrink-0"
                />
                <div>
                  <h3
                    className="text-sm font-bold text-[#292524] mb-1"
                    style={sans}
                  >
                    {p.name}
                  </h3>
                  <p className="text-[#292524]/50 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="contact" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#292524]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#C8A24E]" />
                <span
                  className="text-[#C8A24E] text-xs tracking-[0.3em] uppercase font-semibold"
                  style={sans}
                >
                  Get In Touch
                </span>
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4"
                style={sans}
              >
                Ready to Open
                <br />
                <span
                  className="italic font-normal text-[#C8A24E]"
                  style={serif}
                >
                  Your Next Door?
                </span>
              </h2>
              <p className="text-white/45 text-lg mb-10 max-w-md">
                Whether buying, selling, or investing, our team is here to
                guide you every step of the way. Reach out today for a free
                consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:6023449790"
                  className="bg-[#C8A24E] hover:bg-[#b8933f] text-[#1C1917] px-8 py-4 font-bold text-lg transition-colors flex items-center justify-center gap-3"
                  style={sans}
                >
                  <Phone className="w-5 h-5" />
                  (602) 344-9790
                </a>
                <a
                  href="mailto:[email protected]"
                  className="border border-white/15 hover:border-[#C8A24E]/40 text-white/60 hover:text-white px-8 py-4 font-semibold transition-all flex items-center justify-center gap-2"
                  style={sans}
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </div>
            </div>
            <div
              className="bg-white/[0.04] border border-white/[0.08] p-8 backdrop-blur-sm"
              style={sans}
            >
              <h3 className="text-white font-bold text-lg mb-6">
                Office Information
              </h3>
              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C8A24E]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#C8A24E]" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs tracking-[0.1em] uppercase mb-1">
                      Address
                    </p>
                    <p className="text-white/70">
                      4700 S Mill Ave, Suite 5-B14
                      <br />
                      Tempe, AZ 85282
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C8A24E]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#C8A24E]" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs tracking-[0.1em] uppercase mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:6023449790"
                      className="text-white/70 hover:text-[#C8A24E] transition-colors"
                    >
                      (602) 344-9790
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C8A24E]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#C8A24E]" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs tracking-[0.1em] uppercase mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:[email protected]"
                      className="text-white/70 hover:text-[#C8A24E] transition-colors"
                    >
                      [email protected]
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C8A24E]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#C8A24E]" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs tracking-[0.1em] uppercase mb-1">
                      Hours
                    </p>
                    <p className="text-white/70">
                      Monday &ndash; Friday
                      <br />
                      8:00 AM &ndash; 8:00 PM PST
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-[#1C1917] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <img
                src="/sites/big-door-realty/logo.png"
                alt="Big Door Realty"
                className="h-8 w-auto mb-5 brightness-[1.2]"
              />
              <p className="text-white/35 text-sm leading-relaxed mb-4">
                Big Door Realty is an Arizona-licensed real estate brokerage
                dedicated to helping buyers, sellers, and investors navigate
                the Valley market with confidence and personal attention.
              </p>
              <div className="flex items-center gap-2 text-white/20 text-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Arizona Licensed Brokerage</span>
              </div>
            </div>
            <div>
              <h3
                className="text-xs tracking-[0.2em] uppercase text-white/25 font-semibold mb-5"
                style={sans}
              >
                Services
              </h3>
              <ul className="space-y-2.5 text-sm text-white/45" style={sans}>
                {navItems.map((item) => (
                  <li key={item}>
                    <span className="flex items-center gap-2 hover:text-white/70 transition-colors cursor-default">
                      <ChevronRight className="w-3 h-3 text-[#C8A24E]/40" />
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3
                className="text-xs tracking-[0.2em] uppercase text-white/25 font-semibold mb-5"
                style={sans}
              >
                Contact
              </h3>
              <ul className="space-y-3 text-sm text-white/45" style={sans}>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C8A24E]/50" />
                  <a
                    href="tel:6023449790"
                    className="hover:text-white transition-colors"
                  >
                    (602) 344-9790
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C8A24E]/50" />
                  <a
                    href="mailto:[email protected]"
                    className="hover:text-white transition-colors"
                  >
                    [email protected]
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C8A24E]/50 mt-0.5" />
                  <span>
                    4700 S Mill Ave, Suite 5-B14
                    <br />
                    Tempe, AZ 85282
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#C8A24E]/50" />
                  <span>Mon&ndash;Fri 8AM&ndash;8PM PST</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/20"
            style={sans}
          >
            <p>
              &copy; {new Date().getFullYear()} Big Door Realty. All rights
              reserved.
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

import { Phone, Building2, Home, ShieldCheck, MapPin, ChevronRight, Award, Key, Wrench, Mail, FileText, Quote, ArrowRight, ClipboardCheck } from "lucide-react";

export const metadata = {
  title: "John C.R. Kelly Realty | Property Management Pittsburgh, PA",
  description: "Pittsburgh property management since 1960. Multi-generational family business in Shadyside. 50+ active listings, BBB A+ rated, certified appraiser on staff. Call (412) 621-8580.",
};

const IMG = "/sites/kelly-realty";
const sans = { fontFamily: "system-ui, sans-serif" } as const;
const serif = { fontFamily: "'Georgia', 'Times New Roman', serif" } as const;

const services = [
  { num: "01", icon: Home, title: "Residential Management", desc: "Full-service residential property management across Pittsburgh's most desirable neighborhoods. Rent collection, tenant relations, and lease enforcement." },
  { num: "02", icon: Building2, title: "Commercial Management", desc: "Office, retail, and mixed-use property management with hands-on oversight and transparent owner reporting." },
  { num: "03", icon: Key, title: "Tenant Placement", desc: "Comprehensive screening, background checks, and lease execution. We fill vacancies fast with qualified tenants." },
  { num: "04", icon: Wrench, title: "In-House Maintenance", desc: "Our own maintenance team handles repairs directly. No outsourcing, no delays, no finger-pointing." },
  { num: "05", icon: FileText, title: "Property Appraisals", desc: "Certified appraiser on staff provides accurate valuations backed by decades of Pittsburgh market knowledge." },
  { num: "06", icon: ClipboardCheck, title: "Lease Management", desc: "End-to-end lease administration from drafting to renewals, ensuring compliance and protecting owner interests." },
];

const neighborhoods = [
  { name: "Shadyside", note: "Historic apartments and townhomes" },
  { name: "Squirrel Hill", note: "Family homes and duplexes" },
  { name: "Oakland", note: "University-adjacent rentals" },
  { name: "East Liberty", note: "Revitalized mixed-use properties" },
  { name: "Bloomfield", note: "Charming row houses and flats" },
  { name: "Lawrenceville", note: "Trendy lofts and renovated units" },
  { name: "Point Breeze", note: "Spacious single-family homes" },
  { name: "Highland Park", note: "Quiet residential properties" },
];

const testimonials = [
  { name: "James W.", role: "Property Owner, Oakland", text: "Kelly Realty has managed our Oakland properties for over a decade. They know the neighborhood inside and out, handle maintenance quickly, and keep our units occupied. Reliable, responsive, and professional." },
  { name: "Sarah L.", role: "Tenant, Shadyside", text: "Everything was seamless from the application process through move-in. The in-house maintenance team responds within hours, not days. This is how property management should work." },
  { name: "Richard K.", role: "Property Owner, Squirrel Hill", text: "Robert Kelly personally helped us value our portfolio. His appraiser background gave us confidence in the numbers. A trusted advisor, not just a property manager." },
];

const stats = [
  { value: "50+", label: "Active Listings" },
  { value: "60+", label: "Years in Business" },
  { value: "A+", label: "BBB Rating" },
  { value: "In-House", label: "Maintenance Team" },
];

const differentiators = [
  { icon: Wrench, title: "In-House Maintenance", desc: "Our own maintenance staff handles every repair. No third-party contractors, no scheduling delays, no markup. One call, one team, done right." },
  { icon: Award, title: "Certified Appraiser", desc: "A certified property appraiser on staff means accurate valuations, informed pricing, and market intelligence that other firms simply cannot provide." },
  { icon: ShieldCheck, title: "60+ Years Family-Owned", desc: "Founded around 1960 in Shadyside and still family-operated. Multi-generational continuity means institutional knowledge with personal accountability." },
];

export default function KellyRealty() {
  return (
    <div className="min-h-screen" style={serif}>
      {/* Top Bar */}
      <div className="bg-[#0F1E2E] text-white/60 text-xs tracking-wide">
        <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />5528 Walnut St, Pittsburgh, PA 15232
            </span>
            <span className="hidden sm:inline">&middot;</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Mail className="w-3 h-3" />info@kellyrealtyinc.com
            </span>
          </div>
          <a href="tel:4126218580" className="flex items-center gap-1.5 text-[#D4892A] font-semibold hover:text-[#e9a04a] transition-colors" style={sans}>
            <Phone className="w-3 h-3" />(412) 621-8580
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-[#162A3E] border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={`${IMG}/logo.png`} alt="John C.R. Kelly Realty" className="h-10 w-auto" />
            <div className="hidden sm:block w-px h-8 bg-white/15" />
            <span className="hidden sm:block text-white/40 text-[11px] tracking-[0.2em] uppercase" style={sans}>Property Management</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[13px] text-white/70 tracking-wide" style={sans}>
            <a href="#properties" className="hover:text-white transition-colors">Properties</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="tel:4126218580" className="bg-[#D4892A] hover:bg-[#c07a24] text-white px-5 py-2.5 font-semibold transition-colors flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* Hero — Full-width background image */}
      <section className="relative text-white min-h-[520px] lg:min-h-[600px] flex items-center">
        <img
          src={`${IMG}/hero.jpg`}
          alt="Pittsburgh skyline"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F1E2E]/75" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12 lg:gap-0 w-full">
          <div className="lg:w-[60%]">
            <p className="text-[#D4892A] text-xs tracking-[0.3em] uppercase font-semibold mb-6" style={sans}>Shadyside, Pittsburgh</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6" style={sans}>
              Professional Property<br />Management You Can<br /><span className="text-[#D4892A]">Trust.</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-lg mb-10">
              Multi-generational family business managing Pittsburgh real estate with integrity, expertise, and an in-house team that handles everything under one roof.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:4126218580" className="bg-[#D4892A] hover:bg-[#c07a24] text-white px-8 py-4 font-bold text-lg transition-colors flex items-center justify-center gap-3" style={sans}>
                <Phone className="w-5 h-5" />(412) 621-8580
              </a>
              <a href="#services" className="border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-8 py-4 font-semibold transition-all flex items-center justify-center gap-2 backdrop-blur-sm" style={sans}>
                Our Services<ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="lg:w-[40%] flex items-center justify-center relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-[#D4892A]/40 to-transparent hidden lg:block" />
            <div className="text-center lg:pl-16">
              <p className="text-[#D4892A] text-xs tracking-[0.4em] uppercase mb-3" style={sans}>Established</p>
              <div className="text-[7rem] sm:text-[9rem] font-bold leading-none tracking-tighter text-white/[0.07]" style={sans}>1960</div>
              <div className="text-white text-xl tracking-[0.15em] uppercase font-semibold -mt-12 relative" style={sans}>SINCE 1960</div>
              <div className="w-12 h-0.5 bg-[#D4892A] mx-auto mt-4 mb-4" />
              <p className="text-white/50 text-sm">Three generations of Pittsburgh<br />real estate professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#0F1E2E]">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8" style={sans}>
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[#D4892A] text-3xl font-bold tracking-tight">{s.value}</div>
              <div className="text-white/40 text-xs tracking-[0.15em] uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="bg-[#F8F6F3] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#D4892A] text-xs tracking-[0.3em] uppercase font-semibold mb-3" style={sans}>Current Listings</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#162A3E] tracking-tight" style={sans}>Featured Properties</h2>
            <p className="text-[#162A3E]/50 mt-3 max-w-xl mx-auto text-base">
              Quality apartments in Pittsburgh&apos;s most sought-after East End neighborhoods.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: `${IMG}/property1.jpg`, title: "Shadyside 2BR Apartment", beds: 2, baths: 1, price: "$1,450/mo", address: "Walnut St, Shadyside" },
              { img: `${IMG}/property2.jpg`, title: "East Liberty Renovated Unit", beds: 1, baths: 1, price: "$1,100/mo", address: "Penn Ave, East Liberty" },
              { img: `${IMG}/property3.jpg`, title: "Squirrel Hill Duplex", beds: 3, baths: 1, price: "$1,750/mo", address: "Murray Ave, Squirrel Hill" },
            ].map((p) => (
              <div key={p.title} className="bg-white border border-[#162A3E]/8 overflow-hidden group hover:shadow-lg transition-all">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#D4892A] text-white text-xs font-bold px-3 py-1.5 tracking-wide" style={sans}>
                    {p.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#162A3E] mb-2" style={sans}>{p.title}</h3>
                  <p className="flex items-center gap-1.5 text-[#162A3E]/50 text-sm mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#D4892A]/60" />{p.address}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[#162A3E]/50 border-t border-[#162A3E]/8 pt-3" style={sans}>
                    <span>{p.beds} Bed{p.beds > 1 ? "s" : ""}</span>
                    <span className="w-1 h-1 rounded-full bg-[#162A3E]/20" />
                    <span>{p.baths} Bath</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="tel:4126218580" className="inline-flex items-center gap-2 text-[#D4892A] font-semibold text-sm hover:text-[#c07a24] transition-colors" style={sans}>
              <Phone className="w-4 h-4" />Call for current availability
            </a>
          </div>
        </div>
      </section>

      {/* Neighborhoods We Serve */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#D4892A] text-xs tracking-[0.3em] uppercase font-semibold mb-3" style={sans}>Pittsburgh Neighborhoods</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#162A3E] tracking-tight" style={sans}>Neighborhoods We Serve</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {neighborhoods.map((n) => (
              <div key={n.name} className="bg-[#F8F6F3] border border-[#162A3E]/8 p-6 hover:border-[#D4892A]/30 hover:shadow-md transition-all group">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D4892A] mt-1 shrink-0" />
                  <div>
                    <h3 className="text-[#162A3E] font-bold text-base group-hover:text-[#D4892A] transition-colors" style={sans}>{n.name}</h3>
                    <p className="text-[#162A3E]/50 text-sm mt-1">{n.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — Numbered Grid */}
      <section id="services" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#D4892A] text-xs tracking-[0.3em] uppercase font-semibold mb-3" style={sans}>What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#162A3E] tracking-tight" style={sans}>Full-Service Property Management</h2>
            <p className="text-[#162A3E]/50 mt-3 max-w-xl mx-auto text-base">
              From tenant placement to property appraisals, every service under one roof with one accountable team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.num} className="relative bg-[#F8F6F3] border border-[#162A3E]/5 p-8 overflow-hidden group hover:border-[#D4892A]/20 transition-all">
                <span className="absolute top-3 right-4 text-[5rem] font-bold leading-none text-[#162A3E]/[0.04] select-none" style={sans}>{s.num}</span>
                <div className="relative">
                  <div className="w-10 h-10 bg-[#162A3E] flex items-center justify-center mb-5 group-hover:bg-[#D4892A] transition-colors">
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#162A3E] mb-2" style={sans}>{s.title}</h3>
                  <p className="text-[#162A3E]/55 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kelly Realty */}
      <section id="about" className="bg-[#F8F6F3] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#D4892A] text-xs tracking-[0.3em] uppercase font-semibold mb-3" style={sans}>Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#162A3E] tracking-tight" style={sans}>The Kelly Difference</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item) => (
              <div key={item.title} className="text-center px-4">
                <div className="w-20 h-20 bg-[#162A3E] flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-9 h-9 text-[#D4892A]" />
                </div>
                <h3 className="text-xl font-bold text-[#162A3E] mb-3" style={sans}>{item.title}</h3>
                <p className="text-[#162A3E]/55 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#D4892A] text-xs tracking-[0.3em] uppercase font-semibold mb-3" style={sans}>Client Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#162A3E] tracking-tight" style={sans}>Trusted by Property Owners</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#F8F6F3] border border-[#162A3E]/5 p-8">
                <Quote className="w-8 h-8 text-[#D4892A]/30 mb-4" />
                <p className="text-[#162A3E]/75 text-base leading-relaxed mb-8 italic" style={serif}>&ldquo;{t.text}&rdquo;</p>
                <div className="border-t border-[#162A3E]/10 pt-4">
                  <p className="font-bold text-[#162A3E] text-sm" style={sans}>{t.name}</p>
                  <p className="text-[#162A3E]/40 text-xs mt-0.5" style={sans}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#162A3E] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4" style={sans}>Ready to Work With a Team You Can Trust?</h2>
          <p className="text-white/45 text-lg mb-10 max-w-lg mx-auto">
            Schedule a consultation to discuss your property management needs. No obligation, no pressure.
          </p>
          <a href="tel:4126218580" className="inline-flex items-center gap-3 bg-[#D4892A] hover:bg-[#c07a24] text-white px-10 py-4 font-bold text-lg transition-colors" style={sans}>
            <Phone className="w-5 h-5" />(412) 621-8580
          </a>
          <p className="text-white/30 text-sm mt-5" style={sans}>5528 Walnut St, Shadyside &middot; Mon&ndash;Fri 9AM&ndash;5PM</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F1E2E] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <img src={`${IMG}/logo.png`} alt="John C.R. Kelly Realty" className="h-9 w-auto mb-4" />
              <p className="text-white/40 text-sm leading-relaxed mb-4">
                John C.R. Kelly Realty. Multi-generational family business providing professional property management in Pittsburgh since 1960. BBB A+ rated. Certified appraiser on staff.
              </p>
              <div className="flex items-center gap-2 text-white/25 text-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Licensed &middot; Bonded &middot; Insured</span>
              </div>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-white/30 font-semibold mb-5" style={sans}>Contact</h3>
              <ul className="space-y-3 text-sm text-white/55" style={sans}>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#D4892A]/60" />
                  <a href="tel:4126218580" className="hover:text-white transition-colors">(412) 621-8580</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#D4892A]/60" />
                  <a href="mailto:info@kellyrealtyinc.com" className="hover:text-white transition-colors">info@kellyrealtyinc.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D4892A]/60 mt-0.5" />
                  <span>5528 Walnut St<br />Pittsburgh, PA 15232</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-white/30 font-semibold mb-5" style={sans}>Neighborhoods Served</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/45" style={sans}>
                {neighborhoods.map((n) => (
                  <span key={n.name} className="flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-[#D4892A]/40" />{n.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25" style={sans}>
            <p>&copy; {new Date().getFullYear()} John C.R. Kelly Realty. All rights reserved.</p>
            <p>Website by{" "}<a href="/" className="text-white/40 hover:text-white transition-colors">KPT Designs</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

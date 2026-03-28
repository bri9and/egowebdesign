import { Phone, Mail, MapPin, Shield, ShieldCheck, Users, Search, FileCheck, ChevronRight, Quote, Building2, Truck, HardHat, Tractor, Stethoscope, Laptop, GraduationCap, UtensilsCrossed, Landmark, Heart, ArrowRight, CheckCircle2, Clock } from "lucide-react";

export const metadata = {
  title: "LeBaron Carroll | Business Insurance Brokers — Mesa, AZ",
  description: "Take control and rethink the way you buy insurance. LeBaron Carroll has helped thousands of companies gain control of their business insurance. Offices in Mesa AZ, Logan UT, and Lehi UT. Call 480-834-9315.",
};

const IMG = "/sites/lebaron-carroll";

const serif = { fontFamily: "'Georgia', 'Times New Roman', serif" } as const;
const sans = { fontFamily: "system-ui, -apple-system, sans-serif" } as const;

/* ── Colors ──
   Navy:       #1B2A4A
   Deep Navy:  #0F1A33
   Ivory:      #FAF8F5
   Warm Ivory: #F5F1EC
   Gold:       #C5A059
   Light Gold: #D4B36A
   Burgundy:   #6B2D3E (accent)
*/

const solutions = [
  {
    num: "01",
    icon: FileCheck,
    title: "Control the Narrative",
    desc: "We help your business qualify for the lowest rates by presenting a compelling story to underwriters — demonstrating your risk reduction efforts and earning every available discount.",
  },
  {
    num: "02",
    icon: Shield,
    title: "Sustainable Safety Culture",
    desc: "With 60+ years of experience, we build leadership-driven safety programs that reduce claims frequency and severity — moving your organization from reactive to sustainable.",
  },
  {
    num: "03",
    icon: Search,
    title: "Identify Hidden Risks",
    desc: "Our proprietary assessment uncovers coverage gaps and vulnerable areas before they become costly surprises. Comprehensive analysis with customized recommendations.",
  },
];

const insuranceProducts = [
  { icon: Building2, name: "Commercial Property" },
  { icon: ShieldCheck, name: "General Liability" },
  { icon: Truck, name: "Commercial Auto" },
  { icon: Laptop, name: "Cyber Insurance" },
  { icon: Users, name: "Workers Compensation" },
  { icon: Landmark, name: "Directors & Officers" },
  { icon: FileCheck, name: "Professional Liability" },
  { icon: Shield, name: "Commercial Umbrella" },
];

const industries = [
  { icon: HardHat, name: "Construction" },
  { icon: Tractor, name: "Agriculture" },
  { icon: Building2, name: "Real Estate" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Laptop, name: "Technology" },
  { icon: GraduationCap, name: "Education" },
  { icon: UtensilsCrossed, name: "Restaurant" },
  { icon: Truck, name: "Transportation" },
  { icon: Heart, name: "Human Services" },
  { icon: Landmark, name: "Manufacturing" },
];

const riskServices = [
  "Safety Training & OSHA-Authorized Programs",
  "Site & Facility Visits",
  "Consulting & Compliance",
  "E-Mod Management",
  "Claim Management",
  "Mock DOT Inspections",
  "Jobsite Accident Assistance",
  "Toolbox Topics & Resources",
];

const team = [
  { name: "Milo LeBaron", title: "Chairman of the Board", img: `${IMG}/team-milo.jpg` },
  { name: "Micah Rogers", title: "President", img: `${IMG}/team-micah.jpg` },
  { name: "Cassandra Craig", title: "Chief Operating Officer", img: `${IMG}/team-cassandra.jpg` },
  { name: "Steven Clouse", title: "Chief Experience Officer", img: `${IMG}/team-steven.jpg` },
];

const testimonials = [
  {
    quote: "I feel in control of my insurance. And if I'm not in control of it, I know they are.",
    name: "S. Kasallis",
    role: "Business Owner",
  },
  {
    quote: "There is a genuine caring that we feel from them. We had an emergency and our agent stepped in with very little notice.",
    name: "C. Chambers",
    role: "Business Owner",
  },
  {
    quote: "I definitely feel like I am in control of my insurance, but that is a direct result of LeBaron and Carroll's willingness to educate me.",
    name: "J. Burrell",
    role: "Business Owner",
  },
  {
    quote: "It's the visibility and communication. I don't get surprised. I know what to expect.",
    name: "Bruce Johansson",
    role: "Business Owner",
  },
];

const offices = [
  { city: "Mesa, Arizona", phone: "480-834-9315", phonePlain: "4808349315", address: "1350 E. Southern Ave, Mesa, AZ 85204" },
  { city: "North Logan, Utah", phone: "435-799-8505", phonePlain: "4357998505", address: "2050 N. Main St. Suite 1, North Logan, UT 84341" },
  { city: "Lehi, Utah", phone: "801-609-6088", phonePlain: "8016096088", address: "2183 W. Main St, Lehi, UT 84043" },
];

const stats = [
  { value: "60+", label: "Years Experience" },
  { value: "3", label: "Office Locations" },
  { value: "1000s", label: "Companies Served" },
  { value: "24/7", label: "Claims Support" },
];

export default function LeBaronCarroll() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]" style={serif}>
      {/* ── Top Bar ── */}
      <div className="bg-[#0F1A33] text-white/50 text-xs tracking-wide">
        <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-5" style={sans}>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />Mesa, AZ &middot; Logan, UT &middot; Lehi, UT
            </span>
            <span className="hidden sm:inline">&middot;</span>
            <a href="mailto:info@lebaroncarroll.com" className="hidden sm:flex items-center gap-1.5 hover:text-white/70 transition-colors">
              <Mail className="w-3 h-3" />info@lebaroncarroll.com
            </a>
          </div>
          <a href="tel:4808349315" className="flex items-center gap-1.5 text-[#C5A059] font-semibold hover:text-[#D4B36A] transition-colors" style={sans}>
            <Phone className="w-3 h-3" />(480) 834-9315
          </a>
        </div>
      </div>

      {/* ── Header / Nav ── */}
      <header className="bg-[#1B2A4A] border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={`${IMG}/logo-white.png`} alt="LeBaron Carroll" className="h-8 brightness-110" />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[13px] text-white/65 tracking-wide" style={sans}>
            <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
            <a href="#coverage" className="hover:text-white transition-colors">Coverage</a>
            <a href="#team" className="hover:text-white transition-colors">Leadership</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="bg-[#C5A059] hover:bg-[#b8933f] text-white px-5 py-2.5 font-semibold transition-colors flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />Get a Quote
            </a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative bg-[#1B2A4A] text-white overflow-hidden">
        {/* Decorative swirl */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
          <img src={`${IMG}/swirl-line.svg`} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-16 w-full">
          <div className="lg:w-[58%]">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-[#C5A059]" />
              <p className="text-[#C5A059] text-xs tracking-[0.35em] uppercase font-semibold" style={sans}>Business Insurance Brokers</p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] tracking-tight mb-7" style={sans}>
              Take Control and<br />Rethink the Way You<br /><span className="text-[#C5A059]">Buy Insurance.</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-lg mb-10" style={serif}>
              LeBaron Carroll has helped thousands of companies across the country gain control of their business insurance. We simplify the process, understand your needs, and stay ahead of your coverage requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:4808349315" className="bg-[#C5A059] hover:bg-[#b8933f] text-white px-8 py-4 font-bold text-lg transition-colors flex items-center justify-center gap-3" style={sans}>
                <Phone className="w-5 h-5" />(480) 834-9315
              </a>
              <a href="#solutions" className="border border-white/15 hover:border-[#C5A059]/50 text-white/60 hover:text-white px-8 py-4 font-semibold transition-all flex items-center justify-center gap-2 backdrop-blur-sm" style={sans}>
                Our Approach<ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="lg:w-[42%] flex items-center justify-center relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-[#C5A059]/30 to-transparent hidden lg:block" />
            <div className="text-center lg:pl-12">
              <p className="text-[#C5A059] text-xs tracking-[0.4em] uppercase mb-4" style={sans}>Established</p>
              <div className="text-[6.5rem] sm:text-[8rem] font-bold leading-none tracking-tighter text-white/[0.05]" style={sans}>60+</div>
              <div className="text-white text-xl tracking-[0.15em] uppercase font-semibold -mt-10 relative" style={sans}>YEARS OF TRUST</div>
              <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-5 mb-5" />
              <p className="text-white/40 text-sm">Protecting businesses across<br />Arizona, Utah, and beyond</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-[#0F1A33]">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8" style={sans}>
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[#C5A059] text-3xl font-bold tracking-tight">{s.value}</div>
              <div className="text-white/35 text-xs tracking-[0.15em] uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Solutions ── */}
      <section id="solutions" className="bg-[#FAF8F5] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#C5A059] text-xs tracking-[0.3em] uppercase font-semibold mb-3" style={sans}>Our Approach</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A] tracking-tight" style={sans}>
              Three Pillars of Smarter Insurance
            </h2>
            <p className="text-[#1B2A4A]/50 mt-3 max-w-xl mx-auto text-base">
              We go beyond simply placing policies. Our proven framework helps you lower premiums, reduce risk, and gain true control.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <div key={s.num} className="relative bg-white border border-[#1B2A4A]/8 p-8 overflow-hidden group hover:border-[#C5A059]/30 hover:shadow-lg transition-all">
                <span className="absolute top-3 right-4 text-[5rem] font-bold leading-none text-[#1B2A4A]/[0.03] select-none" style={sans}>{s.num}</span>
                <div className="relative">
                  <div className="w-12 h-12 bg-[#1B2A4A] flex items-center justify-center mb-5 group-hover:bg-[#C5A059] transition-colors duration-300">
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1B2A4A] mb-3" style={sans}>{s.title}</h3>
                  <p className="text-[#1B2A4A]/55 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Insurance Coverage ── */}
      <section id="coverage" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#C5A059] text-xs tracking-[0.3em] uppercase font-semibold mb-3" style={sans}>Coverage</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A] tracking-tight" style={sans}>
              Comprehensive Insurance Products
            </h2>
            <p className="text-[#1B2A4A]/50 mt-3 max-w-xl mx-auto text-base">
              From general liability to specialized captive programs, we provide coverage tailored to your industry.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {insuranceProducts.map((p) => (
              <div key={p.name} className="bg-[#FAF8F5] border border-[#1B2A4A]/6 p-6 text-center group hover:border-[#C5A059]/25 hover:shadow-md transition-all">
                <p.icon className="w-7 h-7 text-[#1B2A4A]/60 mx-auto mb-3 group-hover:text-[#C5A059] transition-colors" />
                <p className="text-[#1B2A4A] font-semibold text-sm" style={sans}>{p.name}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#1B2A4A]/40 text-sm mt-6" style={sans}>
            Plus: Employee Benefits, Life Insurance, Bonds, Personal Lines, Agricultural &amp; Farm Coverage, and more.
          </p>
        </div>
      </section>

      {/* ── Industries Served ── */}
      <section className="bg-[#FAF8F5] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#C5A059] text-xs tracking-[0.3em] uppercase font-semibold mb-3" style={sans}>Industries</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A] tracking-tight" style={sans}>
              Industries We Serve
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-white border border-[#1B2A4A]/6 p-5 flex items-center gap-3 group hover:border-[#C5A059]/25 transition-all">
                <ind.icon className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span className="text-[#1B2A4A] text-sm font-semibold" style={sans}>{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Risk Management ── */}
      <section className="bg-[#1B2A4A] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-[#C5A059]" />
                <p className="text-[#C5A059] text-xs tracking-[0.3em] uppercase font-semibold" style={sans}>Risk Management</p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-5" style={sans}>
                Beyond the Policy
              </h2>
              <p className="text-white/45 text-base leading-relaxed mb-8">
                Insurance is just the beginning. Our dedicated risk management team provides hands-on safety training, compliance consulting, and proactive claim management to reduce your total cost of risk.
              </p>
              <a href="tel:4808349315" className="inline-flex items-center gap-3 bg-[#C5A059] hover:bg-[#b8933f] text-white px-7 py-3.5 font-semibold transition-colors" style={sans}>
                <Phone className="w-4 h-4" />Schedule a Risk Assessment
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {riskServices.map((svc) => (
                <div key={svc} className="flex items-start gap-3 bg-white/[0.04] border border-white/[0.06] px-5 py-4 hover:bg-white/[0.07] transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] mt-0.5 shrink-0" />
                  <span className="text-white/70 text-sm" style={sans}>{svc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership Team ── */}
      <section id="team" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#C5A059] text-xs tracking-[0.3em] uppercase font-semibold mb-3" style={sans}>Leadership</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A] tracking-tight" style={sans}>
              Our Leadership Team
            </h2>
            <p className="text-[#1B2A4A]/50 mt-3 max-w-xl mx-auto text-base">
              Experienced professionals dedicated to helping businesses take control of their insurance.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative w-36 h-36 mx-auto mb-5 overflow-hidden bg-[#F5F1EC]">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C5A059] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
                <h3 className="text-[#1B2A4A] font-bold text-base" style={sans}>{member.name}</h3>
                <p className="text-[#C5A059] text-xs tracking-wide mt-1 font-semibold" style={sans}>{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="bg-[#FAF8F5] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#C5A059] text-xs tracking-[0.3em] uppercase font-semibold mb-3" style={sans}>Client Voices</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A] tracking-tight" style={sans}>
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-[#1B2A4A]/6 p-8">
                <Quote className="w-8 h-8 text-[#C5A059]/25 mb-4" />
                <p className="text-[#1B2A4A]/75 text-base leading-relaxed mb-8 italic" style={serif}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-[#1B2A4A]/8 pt-4">
                  <p className="font-bold text-[#1B2A4A] text-sm" style={sans}>{t.name}</p>
                  <p className="text-[#1B2A4A]/40 text-xs mt-0.5" style={sans}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1B2A4A] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <img src={`${IMG}/swirl-line.svg`} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4" style={sans}>
            Ready to Take Control of Your Insurance?
          </h2>
          <p className="text-white/40 text-lg mb-10 max-w-lg mx-auto">
            Schedule a consultation with one of our advisors. No obligation, no high-pressure sales — just an honest conversation about your coverage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:4808349315" className="inline-flex items-center gap-3 bg-[#C5A059] hover:bg-[#b8933f] text-white px-10 py-4 font-bold text-lg transition-colors" style={sans}>
              <Phone className="w-5 h-5" />(480) 834-9315
            </a>
            <a href="mailto:info@lebaroncarroll.com" className="inline-flex items-center gap-3 border border-white/15 hover:border-[#C5A059]/50 text-white/60 hover:text-white px-10 py-4 font-semibold transition-all" style={sans}>
              <Mail className="w-5 h-5" />Email Us
            </a>
          </div>
          <p className="text-white/25 text-sm mt-6" style={sans}>
            <Clock className="w-3.5 h-3.5 inline-block mr-1.5 -mt-0.5" />24-Hour Claims Line: <a href="tel:8668081321" className="text-[#C5A059]/70 hover:text-[#C5A059] transition-colors">(866) 808-1321</a>
          </p>
        </div>
      </section>

      {/* ── Contact / Offices ── */}
      <section id="contact" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#C5A059] text-xs tracking-[0.3em] uppercase font-semibold mb-3" style={sans}>Locations</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A] tracking-tight" style={sans}>
              Our Offices
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div key={office.city} className="bg-[#FAF8F5] border border-[#1B2A4A]/6 p-8 text-center hover:border-[#C5A059]/25 hover:shadow-md transition-all">
                <MapPin className="w-6 h-6 text-[#C5A059] mx-auto mb-4" />
                <h3 className="text-[#1B2A4A] font-bold text-lg mb-2" style={sans}>{office.city}</h3>
                <p className="text-[#1B2A4A]/50 text-sm mb-4">{office.address}</p>
                <a href={`tel:${office.phonePlain}`} className="inline-flex items-center gap-2 text-[#C5A059] font-semibold text-sm hover:text-[#b8933f] transition-colors" style={sans}>
                  <Phone className="w-4 h-4" />{office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#0F1A33] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <img src={`${IMG}/logo-white.png`} alt="LeBaron Carroll" className="h-7 brightness-110 mb-5" />
              <p className="text-white/35 text-sm leading-relaxed mb-4">
                Your business insurance broker. Helping thousands of companies across the country gain control of their insurance with a proven approach to lower premiums, reduce risk, and protect what matters.
              </p>
              <div className="flex items-center gap-2 text-white/20 text-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Independent Insurance Agency</span>
              </div>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-white/25 font-semibold mb-5" style={sans}>Contact</h3>
              <ul className="space-y-3 text-sm text-white/50" style={sans}>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C5A059]/50" />
                  <a href="tel:4808349315" className="hover:text-white transition-colors">(480) 834-9315</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C5A059]/50" />
                  <a href="tel:8668081321" className="hover:text-white transition-colors">(866) 808-1321 — 24hr</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C5A059]/50" />
                  <a href="mailto:info@lebaroncarroll.com" className="hover:text-white transition-colors">info@lebaroncarroll.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C5A059]/50 mt-0.5" />
                  <span>1350 E. Southern Ave<br />Mesa, AZ 85204</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-white/25 font-semibold mb-5" style={sans}>Solutions</h3>
              <ul className="space-y-2.5 text-sm text-white/40" style={sans}>
                {["Control the Narrative", "Sustainable Safety Culture", "Identify Hidden Risks", "Risk Management Services", "Insurance Products", "Employee Benefits"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-[#C5A059]/35" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/20" style={sans}>
            <p>&copy; {new Date().getFullYear()} LeBaron Carroll. All rights reserved.</p>
            <p>Website by{" "}<a href="/" className="text-white/35 hover:text-white transition-colors">KPT Designs</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

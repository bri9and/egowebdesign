import { Phone, Mail, MapPin, Globe, Plane, Car, Shield, ChevronRight, Star, Clock, Users, Award, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Vitesse Worldwide | Premier Chauffeured Transportation & Private Aircraft Charter",
  description:
    "Luxury chauffeured ground transportation, private aircraft charter, and executive protection across 111 countries and 1,000+ cities worldwide. Since 1987. Call (800) 637-3373.",
};

const IMG = "/sites/vitesse-worldwide";

const services = [
  {
    icon: Plane,
    title: "Aircraft Charter",
    description: "Private jet and helicopter charters with no upfront investment, no membership fees, and no annual commitment. Instant quotes, empty-leg savings of 25-50%, and global coverage across 111 countries.",
    features: ["Private Jets & Helicopters", "Instant Charter Quotes", "Empty Leg Savings", "Group Charters"],
  },
  {
    icon: Car,
    title: "Ground Transportation",
    description: "Professional chauffeured service in luxury sedans, SUVs, Sprinter vans, limousines, and motor coaches. PAX-certified chauffeurs, real-time tracking, and a mobile app for seamless booking.",
    features: ["Luxury Sedans & SUVs", "Executive Sprinter Vans", "Motor Coaches (up to 55 pax)", "Mobile App Booking"],
  },
  {
    icon: Shield,
    title: "Executive Protection",
    description: "Discreet security personnel with credentials from the U.S. Secret Service, Navy SEALs, Israeli Secret Service, and NYPD Anti-Terrorism. Armed agents, armored vehicles, and threat intelligence.",
    features: ["Armed Security Details", "Armored Vehicles", "Threat Intelligence", "Event Security"],
  },
];

const stats = [
  { value: "111+", label: "Countries" },
  { value: "1,000+", label: "Cities Worldwide" },
  { value: "38+", label: "Years of Excellence" },
  { value: "400+", label: "Years Combined Experience" },
];

const fleet = [
  { type: "Luxury Sedans", desc: "Mercedes S-Class, BMW 7 Series" },
  { type: "Premium SUVs", desc: "Cadillac Escalade, Suburban" },
  { type: "Sprinter Vans", desc: "Executive 10-passenger" },
  { type: "Executive Vans", desc: "12-15 passenger capacity" },
  { type: "Mini Coaches", desc: "24-31 passenger luxury" },
  { type: "Motor Coaches", desc: "49-55 passenger full-size" },
];

const leadership = [
  { name: "Shawn Abaspor", title: "President & CEO" },
  { name: "Csilla Stekler", title: "Chief Financial Officer" },
  { name: "Dana Griffin", title: "Chief Operational Officer" },
  { name: "Mary Thompson", title: "EVP Global Sales" },
  { name: "Jeff Conly", title: "SVP Operations" },
  { name: "Kamran Khalaj", title: "SVP Operations" },
  { name: "Roy Barnes", title: "SVP Business Development" },
];

const testimonials = [
  {
    quote: "I have never worked with a better bunch of people. Very professional and detailed. They exceed expectations on every trip.",
    author: "Corporate Travel Manager",
    company: "Fortune 500 Client",
    stars: 5,
  },
  {
    quote: "The team exceeded my expectations. They went above and beyond to help my clients and were always available via phone and email, including weekends, after hours, and during holidays.",
    author: "Travel Agency President",
    company: "Luxury Travel Agency",
    stars: 5,
  },
  {
    quote: "We have used this vendor exclusively for 16 years across many of our clients and each engagement is more successful than the last.",
    author: "Senior Vice President",
    company: "Travel Management Company",
    stars: 5,
  },
  {
    quote: "Best transportation company I have used. The chauffeurs are very professional and friendly. Everything runs like clockwork.",
    author: "Verified Client",
    company: "Yelp Review",
    stars: 5,
  },
];

const awards = [
  { year: "2020", title: "Business Travel Service Award", org: "Global Business Travel Association" },
  { year: "2017", title: "Best in Private Air & Ground Transportation", org: "Industry Recognition" },
  { year: "2016", title: "Best in Private Air & Ground Transportation", org: "Industry Recognition" },
  { year: "Ongoing", title: "Ensemble Annual Supplier Award", org: "Ensemble Travel Group" },
];

const offices = [
  { city: "Stamford, CT", address: "25 Crescent Street, Suite 100", label: "East Coast HQ" },
  { city: "Phoenix, AZ", address: "4600 E Washington St, Suite 300", label: "West Coast Office" },
];

const sf = "'Inter', sans-serif";
const hf = "'Playfair Display', serif";

export default function VitesseWorldwide() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: sf }}>
      <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');` }} />

      {/* Top utility bar */}
      <div className="bg-[#0A1628] text-white/60 text-xs py-2 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3 h-3" /> 111 Countries &middot; 1,000+ Cities
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3 h-3" /> 24/7 Global Operations
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:reservations@vitesseworldwide.com" className="hover:text-[#4A90D9] transition-colors hidden sm:flex items-center gap-1.5">
              <Mail className="w-3 h-3" /> reservations@vitesseworldwide.com
            </a>
            <a href="tel:8006373373" className="hover:text-[#4A90D9] transition-colors flex items-center gap-1.5">
              <Phone className="w-3 h-3" /> (800) 637-3373
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#0D1B2A] sticky top-0 z-50 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <img src={`${IMG}/logo-white.png`} alt="Vitesse Worldwide" width={180} height={44} className="h-8 w-auto" />
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#global" className="hover:text-white transition-colors">Global Reach</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#fleet" className="hover:text-white transition-colors">Fleet</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a href="tel:8006373373" className="bg-[#4A90D9] hover:bg-[#3A7BC8] text-white px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-colors rounded-sm">
            Reserve Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-[#0D1B2A] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={`${IMG}/charter-quote.jpg`} alt="Private jet charter" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A] via-[#0D1B2A]/90 to-[#0D1B2A]/60" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="text-[#4A90D9] text-xs font-semibold tracking-widest uppercase mb-6" style={{ letterSpacing: "0.3em" }}>
              Since 1987 &middot; Global Excellence
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6" style={{ fontFamily: hf }}>
              Elevate Your Journey<br />
              <span className="text-[#4A90D9] italic font-normal">Worldwide</span>
            </h1>
            <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
              Premier chauffeured transportation, private aircraft charter, and executive protection — exceeding expectations across 111 countries and 1,000+ cities.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href="tel:8006373373" className="bg-[#4A90D9] hover:bg-[#3A7BC8] text-white px-8 py-4 text-sm font-semibold tracking-wider uppercase transition-colors flex items-center gap-2 rounded-sm">
                <Phone className="w-4 h-4" /> (800) 637-3373
              </a>
              <a href="mailto:reservations@vitesseworldwide.com" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 text-sm font-semibold tracking-wider uppercase transition-colors flex items-center gap-2 rounded-sm">
                Request a Quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Stats overlay */}
          <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-sm overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#0D1B2A]/80 backdrop-blur-sm px-6 py-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: hf }}>{s.value}</div>
                <div className="text-[10px] tracking-widest uppercase text-white/40 mt-1.5" style={{ letterSpacing: "0.15em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 sm:py-24 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#4A90D9] text-xs font-semibold tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>Our Services</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D1B2A]" style={{ fontFamily: hf }}>
              A 360&deg; Approach to Travel
            </h2>
            <p className="text-[#0D1B2A]/50 text-sm mt-4 max-w-lg mx-auto">
              Discretion, efficiency, and personalized attention to detail — by land and by air.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div key={svc.title} className="bg-white border border-[#0D1B2A]/8 p-8 sm:p-10 group hover:border-[#4A90D9]/30 hover:shadow-lg transition-all duration-300 rounded-sm">
                <div className="w-14 h-14 bg-[#4A90D9]/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#4A90D9]/15 transition-colors">
                  <svc.icon className="w-7 h-7 text-[#4A90D9]" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-3" style={{ fontFamily: hf }}>{svc.title}</h3>
                <p className="text-[#0D1B2A]/55 text-sm leading-relaxed mb-6">{svc.description}</p>
                <ul className="space-y-2">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#0D1B2A]/70">
                      <ChevronRight className="w-3.5 h-3.5 text-[#4A90D9]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section id="global" className="py-20 sm:py-24 bg-[#0D1B2A] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#4A90D9] text-xs font-semibold tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>Global Coverage</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ fontFamily: hf }}>
                One Call. <span className="text-[#4A90D9] italic">Any City.</span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                From New York to Tokyo, London to Dubai — Vitesse operates across 111 countries with a network of 600+ vetted affiliates. Whether you need a sedan in Shanghai or a security detail in S&atilde;o Paulo, one reservation handles it all.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "North America", detail: "Full coverage, all major cities" },
                  { label: "Europe", detail: "Pan-European service network" },
                  { label: "Middle East", detail: "Dubai, Riyadh, Doha, Tel Aviv" },
                  { label: "Asia Pacific", detail: "Tokyo, Singapore, Hong Kong, Sydney" },
                ].map((region) => (
                  <div key={region.label} className="border border-white/10 rounded-sm p-4">
                    <h4 className="text-sm font-semibold text-white mb-1">{region.label}</h4>
                    <p className="text-xs text-white/40">{region.detail}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Globe className="w-5 h-5 text-[#4A90D9]" />
                <span>600+ vetted global affiliates &middot; 24/7 dispatch &middot; Real-time flight tracking</span>
              </div>
            </div>
            <div className="relative">
              <img src={`${IMG}/cities-map.jpg`} alt="Vitesse Worldwide global coverage map — 1,000+ cities across 111 countries" className="w-full rounded-sm shadow-2xl" />
              <div className="absolute inset-0 rounded-sm ring-1 ring-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* About / History */}
      <section id="about" className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <p className="text-[#4A90D9] text-xs font-semibold tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-6" style={{ fontFamily: hf }}>
                Redefining Executive Travel Since 1987
              </h2>
              <div className="space-y-4 text-[#0D1B2A]/60 text-sm leading-relaxed">
                <p>
                  <span className="text-4xl font-bold float-left mr-3 mt-1 leading-[0.85] text-[#4A90D9]" style={{ fontFamily: hf }}>I</span>
                  n 1987, Shawn Abaspor founded what would become Vitesse Worldwide with a single conviction: that executive travel should be seamless, secure, and exceptional — everywhere in the world. The name <em>Vitesse</em>, French for &ldquo;speed,&rdquo; was chosen to convey a brand built on efficiency and urgency.
                </p>
                <p>
                  What began as a luxury limousine service has evolved into a global travel management company serving high-net-worth individuals, Fortune 500 executives, and entertainment industry clients across six continents. With bicoastal headquarters in Stamford, Connecticut and Phoenix, Arizona, and a network of over 600 vetted affiliates, Vitesse delivers a 360-degree approach to travel: chauffeured ground transportation, private aircraft charter, and elite executive protection.
                </p>
                <p>
                  &ldquo;We&rsquo;re not just a limousine company,&rdquo; says Abaspor. &ldquo;We&rsquo;re an executive travel management company.&rdquo; That philosophy — and the team&rsquo;s combined 400+ years of experience in ground transportation, aviation, executive protection, and hospitality — has earned Vitesse the trust of the world&rsquo;s most discerning travelers for nearly four decades.
                </p>
              </div>

              {/* Mission values */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                {["Integrity", "Reliability", "Discretion", "Excellence"].map((v) => (
                  <div key={v} className="text-center py-4 border border-[#0D1B2A]/8 rounded-sm">
                    <span className="text-xs font-semibold tracking-widest uppercase text-[#0D1B2A]/70" style={{ letterSpacing: "0.1em" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-[#F7F9FC] border border-[#0D1B2A]/8 rounded-sm p-8">
                <h3 className="text-lg font-bold text-[#0D1B2A] mb-6" style={{ fontFamily: hf }}>Leadership Team</h3>
                <div className="space-y-4">
                  {leadership.map((person) => (
                    <div key={person.name} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#0D1B2A]/5 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-[#4A90D9]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#0D1B2A]">{person.name}</p>
                        <p className="text-xs text-[#0D1B2A]/45">{person.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards */}
              <div className="mt-6 bg-[#F7F9FC] border border-[#0D1B2A]/8 rounded-sm p-8">
                <h3 className="text-lg font-bold text-[#0D1B2A] mb-6 flex items-center gap-2" style={{ fontFamily: hf }}>
                  <Award className="w-5 h-5 text-[#4A90D9]" /> Awards
                </h3>
                <div className="space-y-3">
                  {awards.map((a) => (
                    <div key={a.title + a.year} className="border-l-2 border-[#4A90D9]/30 pl-4">
                      <p className="text-sm font-medium text-[#0D1B2A]">{a.title}</p>
                      <p className="text-xs text-[#0D1B2A]/40">{a.org} &middot; {a.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="py-20 sm:py-24 bg-[#F7F9FC] border-y border-[#0D1B2A]/8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#4A90D9] text-xs font-semibold tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>The Fleet</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A]" style={{ fontFamily: hf }}>
              Every Vehicle for Every Occasion
            </h2>
            <p className="text-[#0D1B2A]/50 text-sm mt-4 max-w-lg mx-auto">
              All chauffeurs undergo background checks and are PAX certified — the gold standard for customer service and driver safety.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fleet.map((v) => (
              <div key={v.type} className="bg-white border border-[#0D1B2A]/8 px-6 py-5 flex items-center gap-4 rounded-sm hover:border-[#4A90D9]/30 transition-colors">
                <div className="w-11 h-11 bg-[#4A90D9]/8 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Car className="w-5 h-5 text-[#4A90D9]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#0D1B2A]">{v.type}</h4>
                  <p className="text-xs text-[#0D1B2A]/45 mt-0.5">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-[#0D1B2A]/35 text-xs">
              Exotic vehicles, stretch limousines, and specialty requests available &mdash; contact us for custom fleet arrangements.
            </p>
          </div>
        </div>
      </section>

      {/* Technology banner */}
      <section className="py-14 bg-[#0D1B2A] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#4A90D9] text-xs font-semibold tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>Technology</p>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: hf }}>
                Book, Track, Travel
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Advanced dispatch systems with FlightView software linked to FAA data. Real-time reservation tracking, online account management, and our mobile app for iOS and Android — book, price, track your driver, and pay from anywhere.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Real-Time Tracking", "FlightView Integration", "iOS & Android App", "Online Portal"].map((t) => (
                  <span key={t} className="text-xs border border-white/15 text-white/60 px-3 py-1.5 rounded-sm">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <img src={`${IMG}/mobile-app.png`} alt="Vitesse Worldwide mobile app for iOS and Android" className="h-72 w-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#4A90D9] text-xs font-semibold tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>Client Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A]" style={{ fontFamily: hf }}>
              Trusted by the World&rsquo;s Most Demanding Travelers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="border border-[#0D1B2A]/8 bg-[#F7F9FC] p-8 rounded-sm relative">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#4A90D9] text-[#4A90D9]" />
                  ))}
                </div>
                <blockquote className="text-[#0D1B2A]/70 text-sm leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="border-t border-[#0D1B2A]/8 pt-4">
                  <p className="text-sm font-semibold text-[#0D1B2A]">{t.author}</p>
                  <p className="text-xs text-[#0D1B2A]/40">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={`${IMG}/empty-legs.jpg`} alt="Private jet interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0D1B2A]/85" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative text-white">
          <p className="text-[#4A90D9] text-xs font-semibold tracking-widest uppercase mb-6" style={{ letterSpacing: "0.3em" }}>Ready to Travel?</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: hf }}>
            Your Journey Begins with One Call
          </h2>
          <p className="text-white/50 text-base max-w-lg mx-auto mb-10">
            Whether you need a sedan to the airport or a G650 across the Atlantic, our team is standing by 24 hours a day, 7 days a week.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:8006373373" className="bg-[#4A90D9] hover:bg-[#3A7BC8] text-white px-10 py-4 text-sm font-semibold tracking-wider uppercase transition-colors flex items-center gap-2 rounded-sm">
              <Phone className="w-4 h-4" /> (800) 637-3373
            </a>
            <a href="mailto:reservations@vitesseworldwide.com" className="border border-white/25 hover:border-white/50 text-white px-10 py-4 text-sm font-semibold tracking-wider uppercase transition-colors flex items-center gap-2 rounded-sm">
              <Mail className="w-4 h-4" /> Email Reservations
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 sm:py-24 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#4A90D9] text-xs font-semibold tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>Contact Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A]" style={{ fontFamily: hf }}>
              Two Coasts. One Standard.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {offices.map((office) => (
              <div key={office.city} className="bg-white border border-[#0D1B2A]/8 p-8 rounded-sm text-center">
                <div className="w-12 h-12 bg-[#4A90D9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-5 h-5 text-[#4A90D9]" />
                </div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[#4A90D9] mb-2" style={{ letterSpacing: "0.15em" }}>{office.label}</p>
                <h4 className="text-lg font-bold text-[#0D1B2A]" style={{ fontFamily: hf }}>{office.city}</h4>
                <p className="text-sm text-[#0D1B2A]/50 mt-1">{office.address}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-10 text-sm text-[#0D1B2A]/60">
            <a href="tel:8006373373" className="flex items-center gap-2 hover:text-[#4A90D9] transition-colors">
              <Phone className="w-4 h-4 text-[#4A90D9]" /> (800) 637-3373
            </a>
            <a href="mailto:reservations@vitesseworldwide.com" className="flex items-center gap-2 hover:text-[#4A90D9] transition-colors">
              <Mail className="w-4 h-4 text-[#4A90D9]" /> reservations@vitesseworldwide.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1628] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <img src={`${IMG}/logo-white.png`} alt="Vitesse Worldwide" width={160} height={39} className="h-7 w-auto mb-4 opacity-70" />
              <p className="text-white/35 text-sm leading-relaxed mt-3">
                Premier chauffeured transportation, private aircraft charter, and executive protection across 111 countries. Exceeding expectations since 1987.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs tracking-widest uppercase text-white/30 mb-5" style={{ letterSpacing: "0.2em" }}>Services</h4>
              <div className="space-y-2.5 text-sm text-white/50">
                <p className="flex items-center gap-2"><Plane className="w-3.5 h-3.5 text-[#4A90D9]" /> Aircraft Charter</p>
                <p className="flex items-center gap-2"><Car className="w-3.5 h-3.5 text-[#4A90D9]" /> Ground Transportation</p>
                <p className="flex items-center gap-2"><Shield className="w-3.5 h-3.5 text-[#4A90D9]" /> Executive Protection</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs tracking-widest uppercase text-white/30 mb-5" style={{ letterSpacing: "0.2em" }}>Contact</h4>
              <div className="space-y-3 text-sm text-white/50">
                <a href="tel:8006373373" className="flex items-center gap-2 hover:text-[#4A90D9] transition-colors">
                  <Phone className="w-4 h-4 text-[#4A90D9]" /> (800) 637-3373
                </a>
                <a href="mailto:reservations@vitesseworldwide.com" className="flex items-center gap-2 hover:text-[#4A90D9] transition-colors">
                  <Mail className="w-4 h-4 text-[#4A90D9]" /> reservations@vitesseworldwide.com
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#4A90D9] mt-0.5 flex-shrink-0" />
                  <span>25 Crescent St, Suite 100<br />Stamford, CT 06906</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#4A90D9] mt-0.5 flex-shrink-0" />
                  <span>4600 E Washington St, Suite 300<br />Phoenix, AZ 85034</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/8 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/20">
            <p>&copy; {new Date().getFullYear()} Vitesse Worldwide. All rights reserved.</p>
            <p>
              Website by{" "}
              <a href="/" className="text-white/35 hover:text-[#4A90D9] transition-colors">
                KPT Designs
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

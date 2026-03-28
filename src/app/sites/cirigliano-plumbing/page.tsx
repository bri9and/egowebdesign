import {
  Phone,
  Wrench,
  Droplets,
  ShieldCheck,
  Clock,
  Star,
  MapPin,
  Flame,
  Construction,
  Award,
  CheckCircle,
  Pipette,
  Shovel,
  PhoneCall,
  Search,
  Hammer,
  ThumbsUp,
} from "lucide-react";

export const metadata = {
  title: "Cirigliano Plumbing | South Hills Pittsburgh, PA",
  description:
    "Family-owned plumbing since 2014. 24/7 emergency service, drain cleaning, trenchless sewer repair. Serving South Hills Pittsburgh. Call (412) 618-1031.",
};

const services = [
  {
    icon: Wrench,
    title: "Emergency Repairs",
    desc: "Burst pipes, major leaks, plumbing emergencies handled fast. Available 24/7 — no answering service.",
  },
  {
    icon: Droplets,
    title: "Drain Cleaning",
    desc: "Clogged drains and sewer backups cleared with hydro-jetting. Camera diagnostics included.",
  },
  {
    icon: Flame,
    title: "Water Heaters",
    desc: "Tank and tankless installation, repair, and replacement. All major brands, gas line connections.",
  },
  {
    icon: Construction,
    title: "Trenchless Sewer",
    desc: "Advanced trenchless technology — repair or replace sewer lines with minimal excavation.",
  },
  {
    icon: Pipette,
    title: "Piping & Repiping",
    desc: "From small repairs to whole-house repiping. Copper, PEX, and gas line installation.",
  },
  {
    icon: Shovel,
    title: "Sewer Lines",
    desc: "Sewer laterals, septic systems, full sewer line replacement. Residential and light commercial.",
  },
];

const testimonials = [
  {
    name: "Mike T.",
    location: "Pleasant Hills",
    text: "Stephen came out on a Sunday night when our basement was backing up. Had the problem diagnosed and fixed within two hours. No runaround, no upsell — just honest work.",
  },
  {
    name: "Angela R.",
    location: "Bethel Park",
    text: "We needed a full sewer line replacement and were quoted insane prices by two other companies. Cirigliano did the whole job trenchless — our yard looks untouched. Half the price, twice the professionalism.",
  },
  {
    name: "Dave M.",
    location: "Mt. Lebanon",
    text: "Stephen replaced our water heater and re-ran the gas line in one day. Clean work, fair price, showed up when he said he would. We won't call anyone else.",
  },
];

const serviceAreas = [
  "Pleasant Hills", "Bethel Park", "Mt. Lebanon", "Upper St. Clair",
  "South Park", "Jefferson Hills", "Whitehall", "Brentwood",
  "Baldwin", "Castle Shannon", "Dormont", "Brookline",
  "Finleyville", "Peters Township", "West Mifflin", "Clairton",
  "Carrick", "Beechview",
];

const steps = [
  { icon: PhoneCall, label: "Call Stephen", detail: "Direct line, no call center" },
  { icon: Search, label: "Assess", detail: "On-site diagnosis with camera" },
  { icon: Hammer, label: "Fix", detail: "Quality repair, fair price" },
  { icon: ThumbsUp, label: "Done", detail: "Clean up and warranty" },
];

export default function CiriglianoPlumbing() {
  const pipePattern = `repeating-linear-gradient(
    0deg,
    transparent 0px, transparent 58px,
    rgba(199,91,57,0.04) 58px, rgba(199,91,57,0.04) 60px,
    transparent 60px, transparent 120px
  ), repeating-linear-gradient(
    90deg,
    transparent 0px, transparent 58px,
    rgba(199,91,57,0.04) 58px, rgba(199,91,57,0.04) 60px,
    transparent 60px, transparent 120px
  )`;

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', system-ui, sans-serif", backgroundImage: pipePattern, backgroundColor: "#1A1A2E" }}>
      <style>{`
        @keyframes emergency-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(199,91,57,0.5); }
          50% { box-shadow: 0 0 0 14px rgba(199,91,57,0); }
        }
        @keyframes copper-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .pulse-ring { animation: emergency-pulse 2s ease-in-out infinite; }
        .copper-glow { animation: copper-glow 3s ease-in-out infinite; }
        .snap-strip { scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; }
        .snap-strip > * { scroll-snap-align: start; }
        .timeline-dot::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 48px;
          bottom: -32px;
          width: 2px;
          background: rgba(199,91,57,0.25);
        }
        .timeline-dot:last-child::before { display: none; }
      `}</style>

      {/* Header */}
      <header className="border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src="/sites/cirigliano/logo.png"
              alt="Cirigliano Plumbing logo — plumber mascot holding wrench"
              className="h-10 w-auto"
            />
          </div>
          <a href="tel:4126181031" className="pulse-ring flex items-center gap-2 bg-[#C75B39] text-white px-5 py-2 rounded font-bold text-sm tracking-wide">
            <Phone className="w-4 h-4" />
            (412) 618-1031
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #16213E 40%, #0F3460 70%, #1A1A2E 100%)" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #C75B39 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-[#C75B39]/30 rounded-full px-4 py-1.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#C75B39] copper-glow" />
                <span className="text-[#C75B39] text-xs font-mono uppercase tracking-widest">24/7 Emergency Service</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-6">
                Your Pipe Burst.<br />
                <span className="text-[#C75B39]">Stephen&rsquo;s Already En Route.</span>
              </h1>

              <p className="text-white/50 text-lg sm:text-xl max-w-lg mb-10 leading-relaxed">
                Owner-operated. No dispatchers, no call centers, no corporate runaround. One master plumber serving Pittsburgh&rsquo;s South Hills since 2014.
              </p>

              <a
                href="tel:4126181031"
                className="pulse-ring inline-flex items-center gap-3 bg-[#C75B39] hover:bg-[#b04e30] text-white px-10 py-5 rounded-lg font-black text-2xl tracking-tight transition-colors"
              >
                <Phone className="w-7 h-7" />
                (412) 618-1031
              </a>
              <p className="text-white/30 text-sm mt-4 font-mono">Stephen answers &mdash; day or night</p>
            </div>

            {/* Hero image — team in front of truck */}
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/sites/cirigliano/team.jpg"
                  alt="Cirigliano Plumbing crew standing in front of their work truck"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                  <span className="bg-[#C75B39] text-white text-xs font-bold px-3 py-1 rounded-full">Family Owned</span>
                  <span className="bg-white/10 backdrop-blur text-white text-xs px-3 py-1 rounded-full">Since 2014</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-16 pt-8 border-t border-white/5">
            {[
              { icon: ShieldCheck, label: "PA #PA109697" },
              { icon: Award, label: "BBB A+ Rated" },
              { icon: ShieldCheck, label: "$1M Insured" },
              { icon: Clock, label: "15+ Years" },
            ].map((b) => (
              <span key={b.label} className="flex items-center gap-2 text-white/40 text-sm">
                <b.icon className="w-4 h-4 text-[#C75B39]" />
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20" style={{ backgroundColor: "#E8E4DD", backgroundImage: pipePattern.replace(/0\.04/g, "0.06") }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">
            <div>
              <p className="text-[#C75B39] font-mono text-xs tracking-[0.2em] uppercase mb-2">Services</p>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A2E] tracking-tight mb-4">What We Fix</h2>
              <p className="text-[#1A1A2E]/50 text-sm leading-relaxed">From emergency calls at midnight to full sewer line replacements, the Cirigliano crew handles it all.</p>
            </div>
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-[#1A1A2E]/10 shadow-lg">
              <img
                src="/sites/cirigliano/crew-work.jpg"
                alt="Cirigliano crew members working on a sewer line job in neon safety shirts"
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>
          </div>
        </div>
        <div className="snap-strip flex gap-5 overflow-x-auto px-4 sm:px-6 pb-4" style={{ scrollPaddingLeft: "1rem" }}>
          <div className="shrink-0 w-[max(0px,calc((100vw-72rem)/2+0.5rem))]" />
          {services.map((s) => (
            <div key={s.title} className="shrink-0 w-72 bg-[#1A1A2E] rounded-xl p-7 border border-white/5 group hover:border-[#C75B39]/30 transition-colors">
              <div className="w-11 h-11 rounded-lg bg-[#C75B39]/10 flex items-center justify-center mb-5 group-hover:bg-[#C75B39]/20 transition-colors">
                <s.icon className="w-5 h-5 text-[#C75B39]" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
          <div className="shrink-0 w-4" />
        </div>
      </section>

      {/* WHY US — with van image */}
      <section id="about" className="py-20 bg-[#1A1A2E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#C75B39] font-mono text-xs tracking-[0.2em] uppercase mb-2">Why Cirigliano</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">Built on Reputation</h2>
            <p className="text-white/40 max-w-lg mx-auto">Stephen left big plumbing to do things right. No middleman means better work at a fair price.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/sites/cirigliano/van.jpg"
                alt="Cirigliano Plumbing branded Ram ProMaster van with navy and lime green wrap"
                className="w-full h-72 sm:h-80 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { num: "15+", label: "Years Experience", sub: "Founded 2014" },
                { num: "$1M", label: "Insured Coverage", sub: "Full protection" },
                { num: "24/7", label: "Emergency Line", sub: "Owner answers" },
                { num: "A+", label: "BBB Rating", sub: "Zero complaints" },
              ].map((stat) => (
                <div key={stat.label} className="border border-white/5 rounded-xl p-6 hover:border-[#C75B39]/20 transition-colors">
                  <div className="text-3xl sm:text-4xl font-black text-[#C75B39] mb-1">{stat.num}</div>
                  <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
                  <div className="text-white/30 text-xs font-mono">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE FAMILY */}
      <section className="py-20" style={{ backgroundColor: "#E8E4DD" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#C75B39] font-mono text-xs tracking-[0.2em] uppercase mb-2">About</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A2E] tracking-tight mb-4">Meet the Family Behind the Work</h2>
            <p className="text-[#1A1A2E]/50 max-w-lg mx-auto">Cirigliano Plumbing is more than a business — it&rsquo;s a family operation built on trust and craftsmanship.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden border border-[#1A1A2E]/10 shadow-lg relative group">
              <img
                src="/sites/cirigliano/team.jpg"
                alt="The Cirigliano Plumbing team standing together in front of their work truck"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/80 via-[#1A1A2E]/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-white font-bold text-xl mb-1">The Crew</h3>
                <p className="text-white/60 text-sm">Experienced professionals who show up on time and do the job right.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#1A1A2E]/10 shadow-lg relative group">
              <img
                src="/sites/cirigliano/family.jpeg"
                alt="Stephen Cirigliano with his wife and three daughters"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/80 via-[#1A1A2E]/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-white font-bold text-xl mb-1">The Ciriglianos</h3>
                <p className="text-white/60 text-sm">Stephen, his wife, and their three daughters. Family values drive every job.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-[#1A1A2E]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <p className="text-[#C75B39] font-mono text-xs tracking-[0.2em] uppercase mb-2 text-center">Process</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-14 text-center">How It Works</h2>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={step.label} className="timeline-dot relative flex items-start gap-6">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#1A1A2E] border-2 border-[#C75B39] flex items-center justify-center relative z-10">
                  <step.icon className="w-5 h-5 text-[#C75B39]" />
                </div>
                <div className="pt-1">
                  <span className="text-[#C75B39] font-mono text-xs tracking-widest uppercase">Step {i + 1}</span>
                  <h3 className="text-white font-bold text-xl">{step.label}</h3>
                  <p className="text-white/50 text-sm">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20" style={{ backgroundColor: "#E8E4DD" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#C75B39] font-mono text-xs tracking-[0.2em] uppercase mb-2">Reviews</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A2E] tracking-tight mb-12">Straight From Our Customers</h2>

          <style>{`
            .t-radio { display: none; }
            .t-slide { display: none; }
            #t0:checked ~ .t-wrap .t-s0,
            #t1:checked ~ .t-wrap .t-s1,
            #t2:checked ~ .t-wrap .t-s2 { display: block; }
            .t-dot { width: 10px; height: 10px; border-radius: 50%; border: 2px solid rgba(199,91,57,0.4); cursor: pointer; transition: background 0.2s; }
            #t0:checked ~ .t-wrap .t-d0,
            #t1:checked ~ .t-wrap .t-d1,
            #t2:checked ~ .t-wrap .t-d2 { background: #C75B39; border-color: #C75B39; }
          `}</style>

          <input type="radio" name="testimonial" id="t0" className="t-radio" defaultChecked />
          <input type="radio" name="testimonial" id="t1" className="t-radio" />
          <input type="radio" name="testimonial" id="t2" className="t-radio" />

          <div className="t-wrap">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`t-slide t-s${i}`}>
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-[#C75B39] fill-[#C75B39]" />
                  ))}
                </div>
                <blockquote className="text-[#1A1A2E]/80 text-lg sm:text-xl leading-relaxed italic mb-8 max-w-2xl mx-auto">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="text-[#1A1A2E] font-bold">{t.name}</div>
                <div className="text-[#1A1A2E]/40 text-sm flex items-center justify-center gap-1.5 mt-1">
                  <MapPin className="w-3 h-3" />
                  {t.location}
                </div>
              </div>
            ))}

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <label key={i} htmlFor={`t${i}`} className={`t-dot t-d${i}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section id="areas" className="py-20 bg-[#1A1A2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#C75B39] font-mono text-xs tracking-[0.2em] uppercase mb-2">Coverage</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-10">South Hills Pittsburgh</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {serviceAreas.map((area) => (
              <span key={area} className="bg-white/5 text-white/70 text-sm px-4 py-2 rounded-full border border-white/5 hover:border-[#C75B39]/30 transition-colors">
                {area}
              </span>
            ))}
          </div>
          <p className="text-white/30 text-sm mt-6">Don&rsquo;t see your area? Call us &mdash; we likely cover it.</p>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16 bg-[#C75B39] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/sites/cirigliano/van.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">Plumbing Emergency?</h2>
          <p className="text-white/70 text-lg mb-8">Skip the call center. Talk to the plumber who&rsquo;ll do the work.</p>
          <a href="tel:4126181031" className="inline-flex items-center gap-3 bg-[#1A1A2E] hover:bg-[#12122a] text-white px-10 py-4 rounded-lg font-black text-xl transition-colors">
            <Phone className="w-6 h-6" />
            (412) 618-1031
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111128] text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="/sites/cirigliano/logo.png"
                  alt="Cirigliano Plumbing logo"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-5">
                Family-owned and operated by Stephen Cirigliano. Serving Pittsburgh&rsquo;s South Hills with honest, quality plumbing since 2014.
              </p>
              <div className="space-y-2 text-sm text-white/60">
                <a href="tel:4126181031" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[#C75B39]" />
                  (412) 618-1031
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#C75B39] mt-0.5" />
                  <span>623 Torwood Lane, Pittsburgh, PA 15236</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-white/30 mb-4">Hours &amp; Credentials</h3>
              <div className="space-y-2 text-sm text-white/60 mb-5">
                <div className="flex justify-between"><span>Mon &ndash; Fri</span><span className="text-white/80">7 AM &ndash; 6 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="text-white/80">8 AM &ndash; 2 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-white/80">By Appointment</span></div>
                <p className="text-[#C75B39] font-semibold text-xs pt-1">24/7 Emergency Line Always Open</p>
              </div>
              <div className="space-y-1.5 text-sm text-white/50">
                <div className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#C75B39]" />PA License #PA109697</div>
                <div className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#C75B39]" />Allegheny County #04065</div>
                <div className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#C75B39]" />BBB A+ Rated</div>
                <div className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#C75B39]" />Insured Up to $1M</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <p>&copy; {new Date().getFullYear()} Cirigliano Plumbing LLC. All rights reserved.</p>
            <p>Website by <a href="/" className="text-white/40 hover:text-white transition-colors">KPT Designs</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import {
  Phone,
  Star,
  MapPin,
  Award,
  CheckCircle,
  ShieldCheck,
  Clock,
  Droplets,
  Flame,
  Wind,
  Building2,
  Wrench,
  AlertTriangle,
  Users,
  Zap,
  Shield,
  ThumbsUp,
  BadgeCheck,
} from "lucide-react";

export const metadata = {
  title: "SERVPRO of Phoenix | 24/7 Water, Fire & Mold Restoration — Phoenix, AZ",
  description:
    "SERVPRO of Phoenix — 24/7 emergency water damage restoration, fire damage cleanup, mold remediation, and storm recovery. IICRC-certified technicians. Locally owned by Jason Wolfswinkel. Call (480) 503-2090.",
};

const IMG = "/sites/servpro-phoenix";

const PHONE = "(480) 503-2090";
const PHONE_RAW = "4805032090";

const services = [
  {
    icon: Droplets,
    title: "Water Damage Restoration",
    desc: "24/7 emergency water extraction, structural drying, and complete restoration. Advanced moisture detection locates hidden damage before it spreads. We restore your property to pre-loss condition.",
    color: "#0077B6",
  },
  {
    icon: Flame,
    title: "Fire & Smoke Damage",
    desc: "Comprehensive fire damage cleanup, soot removal, smoke odor elimination, and structural reconstruction. We handle everything from board-up to final restoration.",
    color: "#E85D04",
  },
  {
    icon: Wind,
    title: "Mold Remediation",
    desc: "Certified mold inspection, containment, removal, and prevention. Our IICRC-trained specialists eliminate mold at the source and restore healthy indoor air quality.",
    color: "#2D6A4F",
  },
  {
    icon: AlertTriangle,
    title: "Storm & Disaster Recovery",
    desc: "Monsoon flooding, wind damage, roof leaks — we respond immediately to any storm emergency. Full damage assessment, water removal, and reconstruction services.",
    color: "#7B2CBF",
  },
  {
    icon: Building2,
    title: "Commercial Services",
    desc: "Minimize business downtime with our commercial restoration team. We serve offices, retail, warehouses, and multi-unit properties with rapid-response emergency service.",
    color: "#1B4332",
  },
  {
    icon: Wrench,
    title: "Construction & Reconstruction",
    desc: "Full-service general contracting for damage reconstruction. From drywall and flooring to complete rebuilds — licensed contractor ROC# 309973.",
    color: "#6C584C",
  },
];

const whyUs = [
  { icon: Clock, title: "24/7 Emergency Response", desc: "Day or night, weekends and holidays — we answer every call and dispatch technicians immediately." },
  { icon: BadgeCheck, title: "IICRC Certified", desc: "All technicians are IICRC-certified in water, fire, and mold restoration to industry standards." },
  { icon: Users, title: "Locally Owned Since 2016", desc: "Jason Wolfswinkel and Nicole Baird — Phoenix natives with 30+ years combined restoration experience." },
  { icon: Shield, title: "Insurance Specialists", desc: "We work directly with your insurance company, handling paperwork and claims to streamline your recovery." },
  { icon: Zap, title: "Advanced Equipment", desc: "Industrial-grade extractors, dehumidifiers, air scrubbers, and thermal imaging for thorough restoration." },
  { icon: ThumbsUp, title: "4.8-Star Rating", desc: "140+ verified reviews. Trusted by Phoenix homeowners, businesses, and insurance adjusters." },
];

const testimonials = [
  {
    name: "Kristine K.",
    location: "Phoenix, AZ",
    text: "Quick to return calls, very knowledgeable. They walked us through every step of the water damage restoration. Our home was back to normal faster than we expected.",
    rating: 5,
  },
  {
    name: "Jerry D.",
    location: "Phoenix, AZ",
    text: "Had a serious mold issue in our rental property. SERVPRO resolved it quickly and professionally. The team was thorough with containment and remediation. Highly recommend.",
    rating: 5,
  },
  {
    name: "Kelly G.",
    location: "Phoenix, AZ",
    text: "Quick water extraction after a pipe burst at our business. They had us reopened the same day. The commercial team knew exactly what to do and moved fast.",
    rating: 5,
  },
  {
    name: "Jodi Q.",
    location: "Paradise Valley, AZ",
    text: "Skilled, experienced, and fast. Fire damage cleanup was handled professionally from start to finish. They coordinated with our insurance and made the whole process painless.",
    rating: 5,
  },
  {
    name: "Jacob M.",
    location: "Phoenix, AZ",
    text: "Arrived quickly after monsoon flooding damaged our garage and first floor. The crew worked nonstop to extract water and set up drying equipment. Excellent work.",
    rating: 5,
  },
  {
    name: "Joel B.",
    location: "Phoenix, AZ",
    text: "Saved us before the holidays. A water heater burst flooded our kitchen. SERVPRO had a crew out within the hour and handled everything. We couldn't be more grateful.",
    rating: 5,
  },
];

const serviceAreas = [
  "Phoenix", "Paradise Valley", "Scottsdale", "Desert Ridge", "Anthem",
  "Carefree", "Deer Valley", "Moon Valley", "Tatum Ranch", "Dove Valley Ranch",
  "Lone Mountain", "Lookout Mountain", "Uptown Phoenix", "Grayhawk", "DC Ranch",
  "Sonoran Foothills", "Tramonto", "Terravita", "Litchfield Park",
];

const specialtyServices = [
  "Carpet & Upholstery Cleaning",
  "HVAC & Duct Cleaning",
  "Biohazard Cleanup",
  "Sewage & Waste Removal",
  "Contents Restoration",
  "Document & Electronics Recovery",
  "Odor Removal & Deodorization",
  "Board-Up & Tarp Services",
];

/* ── Color Palette ──
   Primary Dark:    #0D2818  (deep forest green)
   Primary Green:   #1B5E20  (SERVPRO-inspired green)
   Accent Amber:    #F59E0B  (emergency amber/orange)
   Accent Orange:   #EA580C  (CTA orange)
   Light BG:        #F8FAF5  (warm off-white)
   White:           #FFFFFF
*/

export default function ServproPhoenix() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* ═══ EMERGENCY TOP BAR ═══ */}
      <div style={{ background: "#EA580C" }} className="text-white text-center py-2 px-4">
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider">
          <AlertTriangle className="w-4 h-4 animate-pulse" />
          <span>24/7 Emergency Response — Water, Fire &amp; Storm Damage</span>
          <AlertTriangle className="w-4 h-4 animate-pulse" />
        </div>
      </div>

      {/* ═══ HEADER ═══ */}
      <header style={{ background: "#0D2818" }} className="text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <img src={`${IMG}/logo.png`} alt="SERVPRO of Phoenix" className="h-10 w-auto" />
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/60">of Phoenix</div>
            </div>
            <div className="flex items-center gap-4">
              <nav className="hidden lg:flex items-center gap-5 text-xs uppercase tracking-wider font-semibold text-white/70">
                {[["Services","services"],["Why Us","why-us"],["Process","process"],["Areas","areas"],["Reviews","reviews"],["Contact","contact"]].map(([label, id]) => (
                  <a key={id} href={`#${id}`} className="hover:text-[#F59E0B] transition-colors">
                    {label}
                  </a>
                ))}
              </nav>
              <div className="hidden md:flex lg:hidden items-center gap-2 text-xs text-white/60">
                <MapPin className="w-3.5 h-3.5" style={{ color: "#F59E0B" }} />
                7600 N 15th St #150B, Phoenix, AZ
              </div>
              <a
                href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 font-bold text-sm uppercase tracking-wider transition-opacity hover:opacity-90 rounded"
                style={{ background: "#EA580C", letterSpacing: "0.08em" }}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">{PHONE}</span>
                <span className="sm:hidden">Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden py-20 sm:py-28 text-white" style={{ background: "#0D2818" }}>
        {/* Background image overlay */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url(${IMG}/team-action.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(13,40,24,0.95) 0%, rgba(13,40,24,0.8) 100%)" }} />
        {/* Diagonal accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10" style={{ background: "linear-gradient(135deg, transparent 50%, #F59E0B 50%)" }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-bold uppercase tracking-[0.2em]" style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.3)" }}>
                <Clock className="w-3.5 h-3.5" />
                Faster to Any Size Disaster
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05] mb-6">
                Phoenix&rsquo;s Trusted
                <br />
                <span style={{ color: "#F59E0B" }}>Restoration Experts</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/60 max-w-xl mb-8 leading-relaxed">
                Water damage. Fire damage. Mold. Storm recovery. When disaster strikes your Phoenix property,
                SERVPRO responds immediately with IICRC-certified technicians and advanced equipment.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="inline-flex items-center gap-3 px-8 py-4 font-bold text-lg uppercase tracking-wider transition-all hover:scale-105 rounded"
                  style={{ background: "#EA580C", letterSpacing: "0.08em" }}
                >
                  <Phone className="w-5 h-5" />
                  {PHONE}
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-8 py-4 font-bold text-sm uppercase tracking-wider border-2 transition-colors hover:bg-white/10 rounded"
                  style={{ borderColor: "#F59E0B", color: "#F59E0B" }}
                >
                  <Wrench className="w-4 h-4" />
                  Our Services
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 hidden lg:block">
              <img
                src={`${IMG}/service-truck.jpg`}
                alt="SERVPRO emergency response vehicle"
                className="rounded-lg shadow-2xl w-80 h-56 object-cover"
                style={{ border: "3px solid rgba(245,158,11,0.3)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section style={{ background: "#F59E0B" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-black/10">
          {[
            { value: "24/7", label: "Emergency Response" },
            { value: "30+", label: "Years Experience" },
            { value: "4.8★", label: "Google Rating" },
            { value: "140+", label: "5-Star Reviews" },
          ].map((s) => (
            <div key={s.label} className="py-6 text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#0D2818]">{s.value}</div>
              <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#0D2818]/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="py-20" style={{ background: "#F8FAF5" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-3xl font-black uppercase text-[#0D2818] mb-2" style={{ letterSpacing: "0.15em" }}>
            Restoration Services
          </h2>
          <p className="text-center text-sm text-[#0D2818]/50 uppercase tracking-[0.15em] mb-4">
            Comprehensive Property Damage Recovery
          </p>
          <div className="w-16 h-1 mx-auto mb-12" style={{ background: "#F59E0B" }} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white border border-[#0D2818]/8 p-8 hover:border-[#0D2818]/20 transition-all hover:shadow-lg group">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ background: `${s.color}15` }}>
                  <s.icon className="w-6 h-6" style={{ color: s.color }} />
                </div>
                <h3 className="font-bold uppercase tracking-wider text-sm text-[#0D2818] mb-3">{s.title}</h3>
                <p className="text-[#0D2818]/55 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          {/* Specialty services row */}
          <div className="mt-10 p-6 bg-white border border-[#0D2818]/8">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#0D2818]/40 mb-4 text-center">Additional Specialty Services</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {specialtyServices.map((svc) => (
                <span key={svc} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full" style={{ background: "#0D281808", color: "#0D2818", border: "1px solid #0D281815" }}>
                  <CheckCircle className="w-3 h-3" style={{ color: "#1B5E20" }} />
                  {svc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EMERGENCY CTA BAND ═══ */}
      <section className="py-10" style={{ background: "#EA580C" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wider">Water Emergency?</h2>
            <p className="text-white/80 text-sm mt-1">Don&rsquo;t wait — water damage gets worse every minute. Call now for immediate dispatch.</p>
          </div>
          <a
            href={`tel:${PHONE_RAW}`}
            className="inline-flex items-center gap-3 bg-white px-8 py-4 font-black text-lg uppercase tracking-wider rounded transition-all hover:scale-105 shrink-0"
            style={{ color: "#EA580C" }}
          >
            <Phone className="w-5 h-5" />
            {PHONE}
          </a>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section id="why-us" className="py-20" style={{ background: "#0D2818" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-3xl font-black uppercase text-white mb-2" style={{ letterSpacing: "0.15em" }}>
            Why Choose SERVPRO of Phoenix
          </h2>
          <p className="text-center text-sm uppercase tracking-[0.15em] mb-4" style={{ color: "#F59E0B" }}>
            Locally Owned &bull; Jason Wolfswinkel &amp; Nicole Baird
          </p>
          <div className="w-16 h-1 mx-auto mb-14" style={{ background: "#F59E0B" }} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="p-6 border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <item.icon className="w-5 h-5" style={{ color: "#F59E0B" }} />
                  <h3 className="font-bold uppercase tracking-wider text-sm text-white">{item.title}</h3>
                </div>
                <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Team highlight */}
          <div className="mt-14 flex flex-col sm:flex-row items-center gap-8 p-8 border border-white/10">
            <div className="flex -space-x-3 shrink-0">
              {["owner-jason.jpg", "team-nicole.jpg", "team-chris.jpg"].map((img, i) => (
                <img
                  key={img}
                  src={`${IMG}/${img}`}
                  alt="SERVPRO team member"
                  className="w-16 h-16 rounded-full object-cover border-2"
                  style={{ borderColor: "#0D2818", zIndex: 3 - i }}
                />
              ))}
            </div>
            <div>
              <h3 className="font-bold uppercase tracking-wider text-sm text-white mb-2">
                Meet Your Restoration Team
              </h3>
              <p className="text-white/45 text-sm leading-relaxed max-w-xl">
                Led by owner Jason Wolfswinkel with nearly three decades of restoration experience since 1997,
                and General Manager Nicole Baird, our team of 15+ IICRC-certified technicians is ready to respond
                to any property emergency in the greater Phoenix area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RESTORATION PROCESS ═══ */}
      <section id="process" className="py-20" style={{ background: "#F8FAF5" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-3xl font-black uppercase text-[#0D2818] mb-2" style={{ letterSpacing: "0.15em" }}>
            Our Restoration Process
          </h2>
          <p className="text-center text-sm text-[#0D2818]/50 uppercase tracking-[0.15em] mb-4">
            From Emergency Call to Full Recovery
          </p>
          <div className="w-16 h-1 mx-auto mb-14" style={{ background: "#F59E0B" }} />
          <div className="space-y-0">
            {[
              { step: "01", title: "Emergency Contact", desc: "Call our 24/7 line. We gather details about your situation and dispatch a team immediately — typically within 1-2 hours." },
              { step: "02", title: "Inspection & Assessment", desc: "Our certified technicians assess the full extent of damage using thermal imaging and moisture detection equipment. We document everything for your insurance." },
              { step: "03", title: "Water Extraction & Containment", desc: "Industrial-grade pumps and extractors remove standing water. For fire or mold situations, we establish containment to prevent further spread." },
              { step: "04", title: "Drying & Dehumidification", desc: "Professional drying equipment — air movers, dehumidifiers, and air scrubbers — thoroughly dry your property. We monitor moisture levels daily." },
              { step: "05", title: "Cleaning & Sanitizing", desc: "We clean, sanitize, and deodorize all affected areas and contents. Antimicrobial treatments prevent mold growth." },
              { step: "06", title: "Restoration & Reconstruction", desc: "From minor repairs to full reconstruction — as a licensed general contractor, we restore your property to its pre-damage condition." },
            ].map((item, i) => (
              <div key={item.step} className="flex gap-6 sm:gap-10 py-8" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(13,40,24,0.08)" }}>
                <div className="shrink-0 w-16 sm:w-20 text-right">
                  <span className="text-3xl sm:text-4xl font-black" style={{ color: "#F59E0B", fontFamily: "'Georgia', serif" }}>
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-wider text-sm text-[#0D2818] mb-2">{item.title}</h3>
                  <p className="text-[#0D2818]/50 text-sm leading-relaxed max-w-xl">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICE AREA ═══ */}
      <section id="areas" className="py-16" style={{ background: "white" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#0D2818] mb-2" style={{ letterSpacing: "0.15em" }}>
            Service Area
          </h2>
          <p className="text-sm text-[#0D2818]/50 uppercase tracking-[0.15em] mb-8">
            Greater Phoenix &bull; Maricopa County &bull; North Valley
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 text-xs uppercase tracking-wider font-bold border"
                style={{ borderColor: "#0D281820", color: "#0D2818", background: "#F8FAF5" }}
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-xs text-[#0D2818]/40 uppercase tracking-wider mt-6">
            Don&rsquo;t see your area? Call us &mdash; we serve most of Maricopa County.
          </p>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section id="reviews" className="py-20" style={{ background: "#F8FAF5" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-3xl font-black uppercase text-[#0D2818] mb-2" style={{ letterSpacing: "0.15em" }}>
            Customer Reviews
          </h2>
          <p className="text-center text-sm text-[#0D2818]/50 uppercase tracking-[0.15em] mb-4">
            4.8 out of 5 Stars &bull; 140+ Verified Reviews
          </p>
          <div className="w-16 h-1 mx-auto mb-12" style={{ background: "#F59E0B" }} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-[#0D2818]/8 p-7 flex flex-col hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B]" style={{ color: "#F59E0B" }} />
                  ))}
                </div>
                <p className="text-[#0D2818]/60 text-sm leading-relaxed flex-1 mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-[#0D2818]/8 pt-4">
                  <div className="font-bold uppercase tracking-wider text-xs text-[#0D2818]">{t.name}</div>
                  <div className="text-xs text-[#0D2818]/40 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EMERGENCY CTA ═══ */}
      <section id="contact" className="py-16 text-center text-white" style={{ background: "linear-gradient(135deg, #EA580C 0%, #C2410C 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-bold uppercase tracking-[0.2em]" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
            <AlertTriangle className="w-3.5 h-3.5" />
            24/7 Emergency Dispatch
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-wider mb-3">
            Disaster Won&rsquo;t Wait.
            <br />
            Neither Do We.
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Water, fire, mold, storm — whatever the emergency, our team is standing by to respond immediately.
            Free estimates. Insurance assistance. Complete restoration.
          </p>
          <a
            href={`tel:${PHONE_RAW}`}
            className="inline-flex items-center gap-3 bg-white px-10 py-5 font-black text-xl uppercase tracking-wider rounded transition-all hover:scale-105"
            style={{ color: "#EA580C" }}
          >
            <Phone className="w-6 h-6" />
            {PHONE}
          </a>
          <p className="text-white/50 text-xs uppercase tracking-widest mt-6">
            Jason Wolfswinkel &bull; SERVPRO of Phoenix &bull; Here to Help&reg; 24/7
          </p>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ background: "#0D2818" }} className="text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Company */}
            <div>
              <div className="mb-4">
                <div className="text-xl font-black uppercase tracking-wider">SERVPRO</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">of Phoenix</div>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Locally owned and operated by Jason Wolfswinkel and Nicole Baird since 2016.
                Cleaning. Restoration. Construction. Serving the greater Phoenix area with 24/7 emergency response.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" style={{ color: "#F59E0B" }} />
                <span className="text-xs text-white/40">General Contractor License ROC# 309973</span>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4" style={{ color: "#F59E0B" }}>
                Emergency Contact
              </h3>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" style={{ color: "#F59E0B" }} />
                  <a href={`tel:${PHONE_RAW}`} className="hover:text-white transition-colors font-bold">{PHONE}</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5" style={{ color: "#F59E0B" }} />
                  <span>7600 N 15th St #150B<br />Phoenix, AZ 85020</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4" style={{ color: "#F59E0B" }} />
                  <span>24/7 Emergency Service<br />Available 365 Days a Year</span>
                </li>
              </ul>
            </div>

            {/* Credentials */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4" style={{ color: "#F59E0B" }}>
                Credentials
              </h3>
              <ul className="space-y-2 text-sm text-white/60">
                {[
                  "IICRC Certified Technicians",
                  "Licensed General Contractor",
                  "BBB Accredited Business",
                  "Fully Insured & Bonded",
                  "Insurance Claim Specialists",
                ].map((cred) => (
                  <li key={cred} className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5" style={{ color: "#F59E0B" }} />
                    {cred}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30 uppercase tracking-wider">
            <p>&copy; {new Date().getFullYear()} SERVPRO of Phoenix. All rights reserved.</p>
            <p>
              Website by{" "}
              <a href="/" className="text-white/50 hover:text-white transition-colors">
                Ego Web Design
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

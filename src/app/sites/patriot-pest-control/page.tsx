import {
  Phone,
  Star,
  MapPin,
  Award,
  CheckCircle,
  ShieldCheck,
  FileCheck,
  AlertTriangle,
  Target,
  Clock,
  Crosshair,
  FileText,
} from "lucide-react";

export const metadata = {
  title: "Patriot Pest Control | Duquesne, PA — Military Precision Pest Elimination",
  description:
    "Family-owned pest control in Greater Pittsburgh since 1995. Termite treatment, bed bug heat treatment, rodent control, wildlife removal, VA/FHA mortgage inspections. BBB A+ rated. Call (412) 461-1234.",
};

const threats = [
  { name: "Termites", img: "termites.jpg", severity: "red" as const, desc: "Silent structural destroyers — act fast" },
  { name: "Bed Bugs", img: "bedbugs.jpg", severity: "red" as const, desc: "Heat treatment required for elimination" },
  { name: "Rodents", img: "mouse.jpg", severity: "red" as const, desc: "Disease carriers, rapid breeders" },
  { name: "Cockroaches", img: "cockroach.jpg", severity: "yellow" as const, desc: "Resilient invaders, contaminate food" },
  { name: "Spiders", img: "spider.jpg", severity: "green" as const, desc: "Mostly harmless, some venomous species" },
  { name: "Ants", img: "ants.jpg", severity: "yellow" as const, desc: "Colony infestations spread quickly" },
];

const missions = [
  {
    num: "01",
    title: "Termite Elimination",
    desc: "Complete termite detection, treatment, and prevention. We locate colonies, apply targeted treatment, and establish perimeter defense to protect your structure long-term.",
  },
  {
    num: "02",
    title: "Bed Bug Heat Treatment",
    desc: "Industrial heat treatment raises interior temperatures to lethal levels for bed bugs at all life stages. No chemicals, no residue — total elimination in a single deployment.",
  },
  {
    num: "03",
    title: "Rodent Exclusion & Control",
    desc: "Comprehensive rodent elimination: seal all entry points, deploy targeted control measures, remove the population. We prevent re-entry with structural fortification.",
  },
  {
    num: "04",
    title: "Ant & Cockroach Suppression",
    desc: "Colony-targeted treatment for carpenter ants, pavement ants, German cockroaches, and all common species. We trace the source and eliminate the entire colony structure.",
  },
  {
    num: "05",
    title: "Humane Wildlife Removal",
    desc: "Licensed humane trapping and relocation for squirrels, raccoons, opossums, and birds. We clear the animals, repair damage, and seal access points to prevent return.",
  },
  {
    num: "06",
    title: "VA/FHA Mortgage Inspections",
    desc: "Certified WDI/NPMA-33 inspections for VA, FHA, and conventional real estate transactions. Fast turnaround for closings — trusted by lenders and realtors across the region.",
  },
];

const testimonials = [
  {
    name: "Karen S.",
    location: "McKeesport, PA",
    text: "Jim and his team handled our termite inspection for our home sale. Report was done fast, completely professional, and the buyers' lender accepted it immediately. Made the closing seamless.",
    rating: 5,
  },
  {
    name: "Tom R.",
    location: "Irwin, PA",
    text: "Had a serious rodent problem in our basement. Patriot sealed every entry point, set up control measures, and followed up twice. Haven't seen a single mouse since. These guys are thorough.",
    rating: 5,
  },
  {
    name: "Linda M.",
    location: "North Versailles, PA",
    text: "Patriot has handled our rental properties for years. Whether it's mice, roaches, or carpenter ants, Jim's team takes care of it fast. Reliable, fair pricing, and they know exactly what they're doing.",
    rating: 5,
  },
];

const severityColor = { green: "#4ADE80", yellow: "#FACC15", red: "#EF4444" };
const severityLabel = { green: "Common", yellow: "Moderate", red: "Severe" };

export default function PatriotPestControl() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* ═══ HEADER ═══ */}
      <header style={{ background: "#0B1D3A" }} className="text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-3">
            <img
              src="/sites/patriot-pest/logo.png"
              alt="Patriot Pest Control"
              className="h-12 sm:h-14 w-auto"
            />
            <a
              href="tel:4124611234"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 font-bold text-sm uppercase tracking-wider transition-opacity hover:opacity-90"
              style={{ background: "#B22234", letterSpacing: "0.08em" }}
            >
              <Phone className="w-4 h-4" />
              (412) 461-1234
            </a>
          </div>
        </div>
      </header>

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden py-24 sm:py-32 text-white text-center" style={{ background: "#0B1D3A" }}>
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          {/* Real logo */}
          <img
            src="/sites/patriot-pest/logo.png"
            alt="Patriot Pest Control"
            className="mx-auto mb-8 h-20 sm:h-24 w-auto"
          />
          <p className="uppercase text-xs font-bold tracking-[0.3em] mb-4" style={{ color: "#C8A951" }}>
            Family-Owned &bull; Jim Davin &bull; 30+ Years of Service
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05] mb-6">
            Military Precision
            <br />
            <span style={{ color: "#C8A951" }}>Pest Elimination</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Defending Greater Pittsburgh homes and businesses since 1995.
            BBB A+ rated. No contracts required. VA/FHA inspection specialists.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:4124611234"
              className="inline-flex items-center gap-3 px-8 py-4 font-bold text-lg uppercase tracking-wider transition-opacity hover:opacity-90"
              style={{ background: "#B22234", letterSpacing: "0.08em" }}
            >
              <Phone className="w-5 h-5" />
              (412) 461-1234
            </a>
            <a
              href="#missions"
              className="inline-flex items-center gap-2 px-8 py-4 font-bold text-sm uppercase tracking-wider border-2 transition-colors hover:bg-white/10"
              style={{ borderColor: "#C8A951", color: "#C8A951" }}
            >
              <Target className="w-4 h-4" />
              View Operations
            </a>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section style={{ background: "#C8A951" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-black/10">
          {[
            { value: "30+", label: "Years Active" },
            { value: "10K+", label: "Homes Protected" },
            { value: "A+", label: "BBB Rating" },
            { value: "24/7", label: "Emergency Response" },
          ].map((s) => (
            <div key={s.label} className="py-6 text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#0B1D3A]">{s.value}</div>
              <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#0B1D3A]/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ THREAT ASSESSMENT ═══ */}
      <section className="py-20" style={{ background: "#F5F5F0" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-3xl font-black uppercase text-[#0B1D3A] mb-2" style={{ letterSpacing: "0.2em" }}>
            Threat Assessment
          </h2>
          <p className="text-center text-sm text-[#0B1D3A]/50 uppercase tracking-[0.15em] mb-12">
            Common pest threats in the Greater Pittsburgh area
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {threats.map((t) => (
              <div key={t.name} className="bg-white border border-[#0B1D3A]/10 overflow-hidden hover:border-[#0B1D3A]/30 transition-colors">
                <img
                  src={`/sites/patriot-pest/${t.img}`}
                  alt={t.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="font-bold uppercase tracking-wider text-sm text-[#0B1D3A]">{t.name}</div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: severityColor[t.severity] }} />
                      <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: severityColor[t.severity] }}>
                        {severityLabel[t.severity]}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-[#0B1D3A]/50 leading-relaxed">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MISSION BRIEFINGS (SERVICES) ═══ */}
      <section id="missions" className="py-20" style={{ background: "#0B1D3A" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-3xl font-black uppercase text-white mb-2" style={{ letterSpacing: "0.2em" }}>
            Mission Briefings
          </h2>
          <p className="text-center text-sm uppercase tracking-[0.15em] mb-14" style={{ color: "#C8A951" }}>
            Service Operations &mdash; Patriot Pest Control
          </p>
          <div className="space-y-0">
            {missions.map((m, i) => (
              <div key={m.num} className="flex gap-6 sm:gap-10 py-8" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.08)" }}>
                <div className="shrink-0 w-16 sm:w-20 text-right">
                  <span className="text-3xl sm:text-4xl font-black" style={{ color: "#C8A951", fontFamily: "'Georgia', serif" }}>
                    {m.num}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Crosshair className="w-4 h-4" style={{ color: "#B22234" }} />
                    <h3 className="font-bold uppercase tracking-wider text-white text-sm sm:text-base">
                      Mission {m.num}: {m.title}
                    </h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed max-w-xl">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VA/FHA MORTGAGE INSPECTION CALLOUT ═══ */}
      <section className="py-16" style={{ background: "#F5F5F0" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative border-2 p-8 sm:p-12" style={{ borderColor: "#C8A951", background: "white" }}>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: "#0B1D3A", margin: "-1px" }} />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: "#0B1D3A", margin: "-1px" }} />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: "#0B1D3A", margin: "-1px" }} />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: "#0B1D3A", margin: "-1px" }} />

            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="w-6 h-6" style={{ color: "#C8A951" }} />
              <span className="text-xs uppercase tracking-[0.25em] font-bold" style={{ color: "#C8A951" }}>
                Official Certification
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0B1D3A] mb-4" style={{ letterSpacing: "0.1em", fontFamily: "'Georgia', serif" }}>
              VA / FHA Mortgage Inspections
            </h3>
            <div className="w-16 h-0.5 mb-6" style={{ background: "#B22234" }} />
            <p className="text-[#0B1D3A]/70 leading-relaxed mb-6 max-w-2xl">
              Patriot Pest Control is a certified provider of WDI/NPMA-33 wood-destroying insect inspections
              for VA, FHA, and conventional mortgage transactions. We deliver fast-turnaround reports accepted
              by lenders and realtors across Pennsylvania. Buying, selling, or refinancing &mdash; we handle the
              inspection so your closing stays on schedule.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              {["VA Loans", "FHA Loans", "Conventional Loans", "NPMA-33 Certified", "Fast Turnaround"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-[#0B1D3A]/80">
                  <CheckCircle className="w-4 h-4" style={{ color: "#C8A951" }} />
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-[#0B1D3A]/10 flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#0B1D3A]/40" />
              <span className="text-xs text-[#0B1D3A]/40 uppercase tracking-wider">
                Schedule your inspection: (412) 461-1234
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMMENDATIONS (TESTIMONIALS) ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-3xl font-black uppercase text-[#0B1D3A] mb-2" style={{ letterSpacing: "0.2em" }}>
            Commendations
          </h2>
          <p className="text-center text-sm text-[#0B1D3A]/50 uppercase tracking-[0.15em] mb-12">
            Reports from protected homeowners
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="border-2 border-[#0B1D3A]/10 p-8 flex flex-col">
                <div className="text-center mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#0B1D3A]/30 mb-3">
                    Letter of Commendation
                  </div>
                  <div className="w-12 h-px mx-auto" style={{ background: "#C8A951" }} />
                </div>
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C8A951]" style={{ color: "#C8A951" }} />
                  ))}
                </div>
                <p className="text-[#0B1D3A]/60 text-sm leading-relaxed text-center flex-1 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-[#0B1D3A]/10 pt-4 text-center">
                  <div className="font-bold uppercase tracking-wider text-sm text-[#0B1D3A]">{t.name}</div>
                  <div className="text-xs text-[#0B1D3A]/40 flex items-center justify-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICE AREA ═══ */}
      <section className="py-16" style={{ background: "#F5F5F0" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#0B1D3A] mb-2" style={{ letterSpacing: "0.2em" }}>
            Area of Operations
          </h2>
          <p className="text-sm text-[#0B1D3A]/50 uppercase tracking-[0.15em] mb-8">
            Greater Pittsburgh &bull; Allegheny County &bull; Westmoreland County
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Duquesne", "McKeesport", "White Oak", "North Versailles", "Irwin",
              "Greensburg", "Monroeville", "Pittsburgh", "West Mifflin", "Clairton",
              "Elizabeth", "Munhall", "Homestead", "Penn Hills", "Plum",
            ].map((area) => (
              <span
                key={area}
                className="px-4 py-2 text-xs uppercase tracking-wider font-bold border"
                style={{ borderColor: "#0B1D3A20", color: "#0B1D3A", background: "white" }}
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-xs text-[#0B1D3A]/40 uppercase tracking-wider mt-6">
            Don&rsquo;t see your area? Call &mdash; we likely cover it.
          </p>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="py-16 text-center text-white" style={{ background: "#B22234" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <img
            src="/sites/patriot-pest/no-pest.png"
            alt="No pests allowed"
            className="mx-auto mb-6 w-20 h-20 object-contain drop-shadow-lg"
          />
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-wider mb-3">
            Deploy Patriot
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            30+ years defending Pittsburgh. Family-owned, no contracts, BBB A+ rated. Free estimates for all services.
          </p>
          <a
            href="tel:4124611234"
            className="inline-flex items-center gap-3 bg-white px-10 py-4 font-black text-xl uppercase tracking-wider transition-opacity hover:opacity-90"
            style={{ color: "#B22234" }}
          >
            <Phone className="w-6 h-6" />
            (412) 461-1234
          </a>
          <p className="text-white/40 text-xs uppercase tracking-widest mt-5">
            Jim Davin &bull; Duquesne, PA &bull; Available 24/7 for Emergencies
          </p>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ background: "#0B1D3A" }} className="text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Company */}
            <div>
              <div className="mb-4">
                <img
                  src="/sites/patriot-pest/logo.png"
                  alt="Patriot Pest Control"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Family-owned by Jim Davin. Defending Greater Pittsburgh homes and businesses from pests since 1995. BBB A+ rated, no-contract options available.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4" style={{ color: "#C8A951" }}>
                Contact HQ
              </h3>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" style={{ color: "#C8A951" }} />
                  <a href="tel:4124611234" className="hover:text-white transition-colors">(412) 461-1234</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5" style={{ color: "#C8A951" }} />
                  <span>Duquesne, PA<br />Allegheny County</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4" style={{ color: "#C8A951" }} />
                  <span>Mon&ndash;Fri 8 AM &ndash; 5 PM</span>
                </li>
              </ul>
            </div>

            {/* Credentials */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4" style={{ color: "#C8A951" }}>
                Credentials
              </h3>
              <ul className="space-y-2 text-sm text-white/60">
                {[
                  "PA Dept. of Agriculture Licensed",
                  "BBB A+ Rated",
                  "NPMA Member",
                  "Fully Insured",
                  "WDI/NPMA-33 Certified",
                ].map((cred) => (
                  <li key={cred} className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5" style={{ color: "#C8A951" }} />
                    {cred}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30 uppercase tracking-wider">
            <p>&copy; {new Date().getFullYear()} Patriot Pest Control. All rights reserved.</p>
            <p>
              Website by{" "}
              <a href="/" className="text-white/50 hover:text-white transition-colors">
                KPT Designs
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

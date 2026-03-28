import { Phone, Home, ShieldCheck, Star, MapPin, Award, CheckCircle,
  Users, Building2, PaintBucket, Ruler, Fence, Compass, FileCheck, HardHat, Key,
} from "lucide-react";

export const metadata = {
  title: "D'n A Custom Home Builders | Pittsburgh, PA Custom Homes",
  description:
    "Custom home building in Greater Pittsburgh. BuildZoom Top 15% in PA. BBB A+ rated. Design-build, additions, remodeling, owner-builder program. Call (412) 487-6655.",
};

const services = [
  {
    icon: Home,
    title: "Fully Custom Homes",
    description:
      "Design-build from concept to completion. Every detail is custom to your vision — no cookie-cutter plans, no compromises. Your dream home, built exactly as you imagine it.",
  },
  {
    icon: Users,
    title: "Owner-Builder Program",
    description:
      "Act as your own general contractor with D'n A's expert guidance at every step. Save significantly while maintaining professional oversight and quality construction.",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description:
      "Professional commercial construction services for businesses across Greater Pittsburgh. Quality craftsmanship scaled for commercial projects of any size.",
  },
  {
    icon: Ruler,
    title: "Home Additions",
    description:
      "Bedrooms, bathrooms, decks, garages — seamlessly integrated with your existing home. Engineered to match your architecture and exceed structural standards.",
  },
  {
    icon: PaintBucket,
    title: "Kitchen & Bath Remodeling",
    description:
      "Complete kitchen and bathroom renovations from layout redesign to finish work. Custom cabinetry, tile, fixtures, and high-end finishes throughout.",
  },
  {
    icon: Fence,
    title: "Design-Build Services",
    description:
      "One team from blueprint to finished build. Architecture, engineering, permitting, and construction managed under one roof for a seamless experience.",
  },
];

const testimonials = [
  {
    name: "Sarah K.",
    location: "Lawrenceville",
    text: "They listen to what you really want. The team stayed within our budget, delivered a quality build, and finished on schedule. You can tell they take pride in every detail.",
  },
  {
    name: "Jim & Laura P.",
    location: "Squirrel Hill",
    text: "On-site almost every day. No shortcuts, no surprises. Every subcontractor was managed personally and the craftsmanship shows. This is how home building should be done.",
  },
  {
    name: "The Hendersons",
    location: "Cranberry Township",
    text: "The owner-builder program saved us thousands. They guided us through every step — permits, scheduling, inspections — and we ended up with a better home for less money.",
  },
];

const processSteps = [
  { icon: Compass, label: "Design", desc: "Custom plans tailored to your vision and site" },
  { icon: FileCheck, label: "Permit", desc: "We handle all permits and approvals" },
  { icon: HardHat, label: "Build", desc: "Expert construction with daily oversight" },
  { icon: Key, label: "Deliver", desc: "Walk through your finished dream home" },
];

const portfolio = [
  {
    src: "/sites/dna-homes/farmhouse.jpg",
    alt: "White farmhouse-style custom home by D'n A Custom Home Builders",
    label: "Custom Farmhouse",
  },
  {
    src: "/sites/dna-homes/greatroom.png",
    alt: "Great room interior with vaulted ceiling built by D'n A Custom Home Builders",
    label: "Great Room",
  },
  {
    src: "/sites/dna-homes/basement-bar.png",
    alt: "Finished basement bar area by D'n A Custom Home Builders",
    label: "Basement Bar",
  },
  {
    src: "/sites/dna-homes/theater.png",
    alt: "Home theater and bar by D'n A Custom Home Builders",
    label: "Home Theater",
  },
];

export default function DNACustomHomes() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* Header */}
      <header className="bg-white border-b border-[#E3EBF5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <img
                src="/sites/dna-homes/logo.png"
                alt="D'n A Custom Home Builders logo"
                className="w-11 h-11 rounded-full object-cover"
              />
              <div>
                <div className="text-lg font-bold text-[#1C1C1C] tracking-tight leading-tight">
                  D&rsquo;n A Custom
                </div>
                <div className="text-[11px] text-[#1C1C1C]/50 tracking-[0.2em] uppercase">
                  Home Builders
                </div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1C1C1C]/70">
              <a href="#portfolio" className="hover:text-[#B87333] transition-colors">
                Our Work
              </a>
              <a href="#services" className="hover:text-[#B87333] transition-colors">
                Services
              </a>
              <a href="#owner-builder" className="hover:text-[#B87333] transition-colors">
                Owner-Builder
              </a>
              <a href="#testimonials" className="hover:text-[#B87333] transition-colors">
                Reviews
              </a>
              <a
                href="tel:4124876655"
                className="text-white px-5 py-2.5 rounded font-semibold transition-colors flex items-center gap-2"
                style={{ backgroundColor: "#B87333" }}
              >
                <Phone className="w-4 h-4" />
                (412) 487-6655
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero — Full-width image with overlay */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/sites/dna-homes/completed-home.png"
            alt="Custom two-story brick and stone home built by D'n A Custom Home Builders in Pittsburgh"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/85 via-[#1C1C1C]/60 to-[#1C1C1C]/30" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-8"
              style={{ backgroundColor: "#B87333", color: "white" }}
            >
              <Award className="w-4 h-4" />
              BuildZoom Top 15% of PA Contractors
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6 text-white">
              Custom Homes
              <br />
              Built from{" "}
              <span style={{ color: "#B87333" }}>Your Blueprint</span>
            </h1>

            <p className="text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
              Design-build custom homes in Greater Pittsburgh. From first sketch to
              final walkthrough &mdash; one team, one vision, zero compromises.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="tel:4124876655"
                className="inline-flex items-center gap-3 text-white px-8 py-4 rounded font-bold text-lg transition-all hover:opacity-90"
                style={{ backgroundColor: "#B87333" }}
              >
                <Phone className="w-5 h-5" />
                (412) 487-6655
              </a>
              <div className="flex items-center gap-2 text-white/50 text-sm py-4">
                <MapPin className="w-4 h-4" />
                3519 Millvale Ave, Pittsburgh, PA 15213
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="border-y border-[#E3EBF5]" style={{ backgroundColor: "white" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E3EBF5]">
            {[
              { value: "Top 15%", label: "BuildZoom PA Ranking" },
              { value: "A+", label: "BBB Rating" },
              { value: "15+", label: "Years in Business" },
              { value: "100%", label: "Custom Builds" },
            ].map((stat) => (
              <div key={stat.label} className="py-8 px-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#1C1C1C] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[#1C1C1C]/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Our Work */}
      <section id="portfolio" className="py-20 sm:py-24" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#B87333" }}>
              Our Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] tracking-tight">
              Homes We&rsquo;ve Built
            </h2>
            <p className="text-[#1C1C1C]/50 mt-3 max-w-lg mx-auto">
              Every project is fully custom &mdash; designed and built to our clients&rsquo; exact vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {portfolio.map((item) => (
              <div key={item.label} className="group relative rounded-lg overflow-hidden bg-[#1C1C1C]">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1C1C1C]/80 to-transparent p-6">
                  <p className="text-white font-bold text-lg">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Build — Process Steps */}
      <section id="process" className="py-20 sm:py-24" style={{ backgroundColor: "white" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#B87333" }}>
              How We Build
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] tracking-tight">
              From Concept to Completion
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 max-w-4xl mx-auto">
            {processSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-0 flex-1">
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-full border-2 flex items-center justify-center mb-3 relative"
                    style={{ borderColor: "#B87333", backgroundColor: "white" }}
                  >
                    <span className="text-xs font-bold absolute -top-2 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: "#B87333" }}>
                      {i + 1}
                    </span>
                    <step.icon className="w-6 h-6" style={{ color: "#B87333" }} />
                  </div>
                  <h3 className="font-bold text-[#1C1C1C] text-sm mb-1">{step.label}</h3>
                  <p className="text-xs text-[#1C1C1C]/50 max-w-[140px]">{step.desc}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div
                    className="hidden md:block flex-1 mx-4"
                    style={{
                      borderTop: "2px dashed #B87333",
                      opacity: 0.4,
                      minWidth: "40px",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — 2-column cards */}
      <section id="services" className="py-20 sm:py-24" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#B87333" }}>
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] tracking-tight">
              What We Build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-lg bg-white border border-[#E3EBF5] hover:border-[#B87333]/30 transition-colors"
                style={{ borderLeft: "4px solid #B87333" }}
              >
                <div className="flex items-start gap-4">
                  <service.icon className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: "#B87333" }} />
                  <div>
                    <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[#1C1C1C]/60 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner-Builder Program — Feature Block */}
      <section
        id="owner-builder"
        className="py-20 sm:py-24 relative overflow-hidden"
        style={{ backgroundColor: "#F5F5F0" }}
      >
        {/* Subtle blueprint grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#E3EBF5 0.5px, transparent 0.5px), linear-gradient(90deg, #E3EBF5 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
            opacity: 0.5,
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div
              className="rounded-lg p-10 sm:p-14 border"
              style={{ backgroundColor: "white", borderColor: "#B87333" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#B87333" }}
                >
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#B87333" }}>
                    Our Differentiator
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1C]">
                    Owner-Builder Program
                  </h2>
                </div>
              </div>

              <p className="text-[#1C1C1C]/70 leading-relaxed mb-8 text-lg">
                Want to be your own general contractor? Our Owner-Builder Program puts
                you in the driver&rsquo;s seat. You manage the build with D&rsquo;n A&rsquo;s
                expert guidance at every step &mdash; from permits and scheduling to
                inspections and subcontractor management.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {[
                  { title: "You Lead", desc: "Act as general contractor on your own build" },
                  { title: "We Guide", desc: "Professional oversight at every critical step" },
                  { title: "You Save", desc: "Significant cost savings without sacrificing quality" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#B87333" }} />
                    <div>
                      <p className="font-bold text-[#1C1C1C] text-sm">{item.title}</p>
                      <p className="text-[#1C1C1C]/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="tel:4124876655"
                className="inline-flex items-center gap-2 text-white px-6 py-3 rounded font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "#B87333" }}
              >
                <Phone className="w-4 h-4" />
                Ask About Owner-Builder
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 sm:py-24" style={{ backgroundColor: "white" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#B87333" }}>
              Client Reviews
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] tracking-tight">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-lg p-8 border border-[#E3EBF5]"
                style={{
                  borderTop: "4px solid #B87333",
                  backgroundColor: "#FAFAFA",
                }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B87333]" style={{ color: "#B87333" }} />
                  ))}
                </div>
                <p className="text-[#1C1C1C]/70 leading-relaxed mb-6 text-sm">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-[#E3EBF5] pt-4">
                  <p className="font-bold text-[#1C1C1C] text-sm">{t.name}</p>
                  <p className="text-[#1C1C1C]/40 text-xs flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] tracking-tight mb-4">
            Ready to Build?
          </h2>
          <p className="text-[#1C1C1C]/60 text-lg mb-8 max-w-xl mx-auto">
            Every project starts with a conversation. Tell us your vision and
            we&rsquo;ll show you how to make it real.
          </p>
          <a
            href="tel:4124876655"
            className="inline-flex items-center gap-3 text-white px-10 py-4 rounded font-bold text-lg transition-all hover:opacity-90"
            style={{ backgroundColor: "#B87333" }}
          >
            <Phone className="w-5 h-5" />
            (412) 487-6655
          </a>
          <p className="text-[#1C1C1C]/40 text-sm mt-4">
            Greater Pittsburgh &middot; Allegheny County &middot; Free Consultation
          </p>
        </div>
      </section>

      <footer style={{ backgroundColor: "#F0F0F0" }} className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/sites/dna-homes/logo.png"
                  alt="D'n A Custom Home Builders logo"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <div className="text-base font-bold text-[#1C1C1C] leading-tight">
                    D&rsquo;n A Custom Home Builders
                  </div>
                  <div className="text-[10px] text-[#1C1C1C]/40 tracking-[0.15em] uppercase">
                    DBA of DNA Construction Inc.
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#1C1C1C]/50 leading-relaxed max-w-md mb-4">
                Custom home building in Greater Pittsburgh. Design-build from concept
                to completion &mdash; everything we build is completely custom to you.
                BBB A+ rated. BuildZoom Top 15% of PA contractors.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-[#1C1C1C]/40">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> BBB A+ Rated
                </span>
                <span className="flex items-center gap-1">
                  <Award className="w-3 h-3" /> BuildZoom Top 15%
                </span>
              </div>
            </div>

            {/* Right */}
            <div className="md:text-right">
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1C1C1C]/40 mb-4">
                Contact
              </h3>
              <div className="space-y-2 text-sm text-[#1C1C1C]/60">
                <p>
                  <a href="tel:4124876655" className="hover:text-[#B87333] transition-colors font-semibold">
                    (412) 487-6655
                  </a>
                </p>
                <p>3519 Millvale Ave</p>
                <p>Pittsburgh, PA 15213</p>
                <p className="text-[#1C1C1C]/40 text-xs mt-3">
                  Serving Greater Pittsburgh &amp; Allegheny County
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#1C1C1C]/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#1C1C1C]/35">
            <p>
              &copy; {new Date().getFullYear()} D&rsquo;n A Custom Home Builders, Inc. All rights reserved.
            </p>
            <p>
              Website by{" "}
              <a href="/" className="text-[#1C1C1C]/50 hover:text-[#B87333] transition-colors">
                KPT Designs
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

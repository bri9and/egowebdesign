import {
  Phone,
  Zap,
  ShieldCheck,
  Clock,
  Star,
  MapPin,
  Award,
  CheckCircle,
  AlertTriangle,
  BatteryCharging,
  Home,
  Plug,
  Building2,
  BadgeCheck,
  Cable,
} from "lucide-react";

export const metadata = {
  title: "Nicholas Electric Co. | Pittsburgh Old-Home Electrical Specialists",
  description:
    "Pittsburgh's old-home electrical specialists since 1978. Knob & tube rewiring, EV charger installation, panel upgrades. BBB A+ rated, zero complaints. Call (412) 276-2550.",
};

const IMG = "/sites/nicholas-electric";

const services = [
  {
    icon: AlertTriangle,
    title: "Knob & Tube Rewiring",
    description:
      "Pittsburgh's knob & tube rewiring specialists. Complete removal and modern rewiring with a Certificate of Inspection. Protect your old home and satisfy your insurer.",
  },
  {
    icon: BatteryCharging,
    title: "EV Charger Installation",
    description:
      "Certified installation for Tesla, ChargePoint, and all major EV brands. Level 2 home charging stations wired to code with proper permitting.",
  },
  {
    icon: Zap,
    title: "Panel Upgrades",
    description:
      "150\u2013200 amp service upgrades and breaker panel installation. Free whole-home surge protection included with every panel purchase.",
  },
  {
    icon: Home,
    title: "Whole-House Rewiring",
    description:
      "Complete rewiring for Pittsburgh's older homes. Dedicated circuits, GFCI outlets, and modern wiring for kitchen and bathroom remodels \u2014 all to code.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description:
      "Electrical emergencies don't wait, and neither do we. Round-the-clock emergency response across Pittsburgh and southwestern PA.",
  },
  {
    icon: Building2,
    title: "Commercial Electrical",
    description:
      "Full electrical for commercial storefronts, office fit-outs, and tenant improvements. Licensed for commercial and residential projects.",
  },
];

const testimonials = [
  {
    name: "Sarah K.",
    location: "Squirrel Hill",
    text: "They rewired our entire 1920s home in three days \u2014 clean work, no surprises on the bill. Our insurance company was thrilled.",
  },
  {
    name: "Brian D.",
    location: "Lawrenceville",
    text: "Had three quotes for knob and tube removal. Nicholas Electric came in at half the price and finished ahead of schedule. Can't recommend them enough.",
  },
  {
    name: "Jen & Mark P.",
    location: "Monroeville",
    text: "Installed our Tesla charger \u2014 clean conduit run, dedicated 60-amp circuit, everything permitted and inspected. Done in one day.",
  },
];

const credentials = [
  { icon: ShieldCheck, label: "PA License #PA007159" },
  { icon: Award, label: "BBB A+ Rated", image: `${IMG}/bbb.png` },
  { icon: BadgeCheck, label: "Insured to $2M" },
  { icon: CheckCircle, label: "Zero Complaints" },
  { icon: Star, label: "BuildZoom Score: 95" },
  { icon: Cable, label: "45+ Years Experience" },
];

export default function NicholasElectric() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        backgroundColor: "#0A0A12",
        color: "#E0E0E0",
      }}
    >
      {/* Header */}
      <header
        className="border-b"
        style={{ borderColor: "#2A2A3E", backgroundColor: "#0A0A12" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img
              src={`${IMG}/logo.png`}
              alt="Nicholas Electric Co."
              className="h-10 w-auto"
            />
          </div>
          <a
            href="tel:4122762550"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all"
            style={{
              backgroundColor: "transparent",
              color: "#FFB800",
              border: "1px solid #FFB800",
              boxShadow: "0 0 12px rgba(255,184,0,0.15)",
            }}
          >
            <Phone className="w-4 h-4" />
            (412) 276-2550
          </a>
        </div>
      </header>

      {/* Hero with real background image */}
      <section
        className="relative overflow-hidden py-24 sm:py-32"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10,10,18,0.92) 45%, rgba(10,10,18,0.55)), url(${IMG}/hero.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Amber glow accent */}
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10"
          style={{ backgroundColor: "#FFB800" }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase mb-8"
              style={{
                border: "1px solid #2A2A3E",
                color: "#FFB800",
                backgroundColor: "rgba(30,30,46,0.85)",
              }}
            >
              <Zap className="w-3.5 h-3.5" />
              Pittsburgh&rsquo;s Old-Home Specialists
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6">
              <span style={{ color: "#FFB800" }}>Wiring Pittsburgh</span>
              <br />
              <span style={{ color: "#FFFFFF" }}>Since 1978</span>
            </h1>

            <p className="text-lg sm:text-xl mb-10 max-w-xl leading-relaxed" style={{ color: "#C0C0D0" }}>
              Founded by John Nicholas. 45+ years of electrical-only focus.
              From knob &amp; tube rewiring to EV charger installation &mdash;
              one trade, mastered completely.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="tel:4122762550"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-bold text-lg transition-all"
                style={{
                  backgroundColor: "#FFB800",
                  color: "#0A0A12",
                  boxShadow: "0 0 30px rgba(255,184,0,0.3), 0 0 60px rgba(255,184,0,0.1)",
                }}
              >
                <Phone className="w-5 h-5" />
                Call (412) 276-2550
              </a>
              <span className="flex items-center gap-2 text-sm py-4" style={{ color: "#909090" }}>
                <Clock className="w-4 h-4" />
                Free estimates &middot; 24/7 emergency line
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" style={{ backgroundColor: "#0E0E1A" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#FFB800" }}>
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              What We Do Best
            </h2>
          </div>

          <div className="space-y-6">
            {services.map((service, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={service.title}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                >
                  <div
                    className={`md:col-span-2 flex ${isEven ? "md:order-1 md:justify-end" : "md:order-2 md:justify-start"} justify-center`}
                  >
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "#1E1E2E", border: "1px solid #2A2A3E" }}
                    >
                      <service.icon className="w-7 h-7" style={{ color: "#FFB800" }} />
                    </div>
                  </div>
                  <div
                    className={`md:col-span-10 rounded-xl p-6 ${isEven ? "md:order-2" : "md:order-1 md:text-right"}`}
                    style={{ backgroundColor: "#1E1E2E", border: "1px solid #2A2A3E" }}
                  >
                    <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#8888A0" }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Old Home Expertise with knob-tube photo */}
      <section className="py-20" style={{ backgroundColor: "#0A0A12" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ backgroundColor: "#1E1E2E", border: "1px solid #2A2A3E" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Photo */}
              <div className="lg:col-span-2 relative min-h-[280px]">
                <img
                  src={`${IMG}/knob-tube.jpg`}
                  alt="Knob and tube wiring removal by Nicholas Electric"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to right, transparent 60%, #1E1E2E)" }}
                />
              </div>
              {/* Content */}
              <div className="lg:col-span-3 p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-2">
                  <Plug className="w-6 h-6" style={{ color: "#FFB800" }} />
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#FFB800" }}>
                    Specialty
                  </p>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                  Old Home Expertise
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Knob & Tube Wiring",
                      desc: "Complete removal and replacement of pre-1940s knob & tube wiring. Certificate of Inspection provided for insurance compliance.",
                    },
                    {
                      title: "Aluminum Wiring",
                      desc: "Safe remediation of 1960s\u201370s aluminum branch circuits. We install approved connectors or fully rewire to eliminate fire risk.",
                    },
                    {
                      title: "Cloth-Insulated Wiring",
                      desc: "Replacement of deteriorated cloth-sheathed wiring found in mid-century Pittsburgh homes. Modern NM cable upgrades throughout.",
                    },
                    {
                      title: "Fuse Box Upgrades",
                      desc: "Replace outdated fuse panels with modern 200-amp breaker boxes. Surge protection included with every panel installation.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle className="w-5 h-5" style={{ color: "#FFB800" }} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#8888A0" }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20" style={{ backgroundColor: "#0E0E1A" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#FFB800" }}>
              Our Team
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              The Crew Behind the Work
            </h2>
            <p className="text-base mt-4 max-w-xl mx-auto" style={{ color: "#8888A0" }}>
              Family-owned and operated since 1978. Every job is managed by a
              licensed master electrician.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #2A2A3E" }}>
              <img
                src={`${IMG}/team1.jpg`}
                alt="Nicholas Electric team"
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #2A2A3E" }}>
              <img
                src={`${IMG}/team2.jpg`}
                alt="Nicholas Electric crew at work"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: "#0A0A12" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#FFB800" }}>
              Reviews
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              What Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl p-6 flex flex-col justify-between"
                style={{
                  backgroundColor: "#1E1E2E",
                  border: "1px solid #2A2A3E",
                  borderBottom: "3px solid #FFB800",
                  boxShadow: "0 4px 20px rgba(255,184,0,0.06)",
                }}
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFB800]" style={{ color: "#FFB800" }} />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "#C0C0D0" }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div className="pt-4" style={{ borderTop: "1px solid #2A2A3E" }}>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs flex items-center gap-1 mt-0.5" style={{ color: "#606080" }}>
                    <MapPin className="w-3 h-3" />
                    {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensed & Certified with BBB badge */}
      <section className="py-14" style={{ backgroundColor: "#0E0E1A", borderTop: "1px solid #2A2A3E", borderBottom: "1px solid #2A2A3E" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase mb-8" style={{ color: "#FFB800" }}>
            Licensed &amp; Certified
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {credentials.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-2.5 px-5 py-3 rounded-lg text-sm font-medium"
                style={{ backgroundColor: "#1E1E2E", border: "1px solid #2A2A3E", color: "#C0C0D0" }}
              >
                {c.image ? (
                  <img src={c.image} alt={c.label} className="h-8 w-auto" />
                ) : (
                  <c.icon className="w-4 h-4" style={{ color: "#FFB800" }} />
                )}
                {c.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#0A0A12" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3" style={{ color: "#FFB800" }}>
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 max-w-lg mx-auto" style={{ color: "#8888A0" }}>
            Free estimates. Upfront pricing. 45+ years of trusted electrical
            work across Pittsburgh.
          </p>
          <a
            href="tel:4122762550"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-lg font-bold text-xl transition-all"
            style={{
              backgroundColor: "transparent",
              color: "#FFB800",
              border: "2px solid #FFB800",
              boxShadow: "0 0 24px rgba(255,184,0,0.2), 0 0 48px rgba(255,184,0,0.08)",
            }}
          >
            <Phone className="w-6 h-6" />
            (412) 276-2550
          </a>
          <p className="text-sm mt-4" style={{ color: "#606080" }}>
            Available 24/7 for emergencies
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#0A0A12", borderTop: "1px solid #2A2A3E" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-sm" style={{ color: "#8888A0" }}>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" style={{ color: "#FFB800" }} />
                <a href="tel:4122762550" className="hover:text-white transition-colors">
                  (412) 276-2550
                </a>
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: "#FFB800" }} />
                Pittsburgh, PA
              </span>
            </div>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" style={{ color: "#FFB800" }} />
              24/7 Emergency Service
            </span>
          </div>
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-2 py-4 text-xs"
            style={{ borderTop: "1px solid #1E1E2E", color: "#606080" }}
          >
            <p>&copy; {new Date().getFullYear()} Nicholas Electric Co. All rights reserved.</p>
            <p>
              Website by{" "}
              <a href="/" className="transition-colors hover:text-white" style={{ color: "#8888A0" }}>
                KPT Designs
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

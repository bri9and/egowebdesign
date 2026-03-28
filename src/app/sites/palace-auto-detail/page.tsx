import {
  Phone,
  Star,
  MapPin,
  Shield,
  Droplets,
  Sparkles,
  Car,
  CheckCircle,
  Clock,
  Award,
  Paintbrush,
  Lightbulb,
  Wind,
  Wrench,
  Truck,
  ChevronRight,
} from "lucide-react";

export const metadata = {
  title: "Palace Auto Detail | Premium Ceramic Coating & Car Detailing in Tempe, AZ",
  description:
    "Expert mobile car detailing and ceramic coating in Tempe, AZ. Paint correction, full interior detail, wash & wax. 100% satisfaction guarantee. Call (480) 378-9493.",
};

const IMG = "/sites/palace-auto-detail";

const services = [
  {
    icon: Sparkles,
    title: "Ceramic Coating",
    description:
      "Long-lasting UV, rain, and dirt protection with a hydrophobic finish that keeps your paint looking showroom-fresh for years.",
  },
  {
    icon: Paintbrush,
    title: "Paint Correction",
    description:
      "Multi-stage correction that removes scratches, swirls, and oxidation to restore your paint to a mirror-like finish.",
  },
  {
    icon: Car,
    title: "Full Interior Detail",
    description:
      "Deep cleaning that eliminates stains, pet hair, and blemishes from every surface. Leather conditioning, carpet extraction, and dashboard restoration.",
  },
  {
    icon: Droplets,
    title: "Wash & Wax",
    description:
      "Thorough hand wash to remove contaminants followed by a premium protective wax layer for a deep, lasting shine.",
  },
  {
    icon: Wind,
    title: "Odor Removal",
    description:
      "Complete elimination of pet, food, and smoke odors using professional-grade ozone treatment and deep-cleaning techniques.",
  },
  {
    icon: Lightbulb,
    title: "Headlight Restoration",
    description:
      "Professional wet sanding and polishing to restore yellowed, hazy headlights to crystal-clear factory condition.",
  },
  {
    icon: Wrench,
    title: "Engine Bay Cleaning",
    description:
      "Safe degreasing and detailing of your engine bay. Removes grime and buildup for a clean, well-maintained look under the hood.",
  },
  {
    icon: Truck,
    title: "Paint Overspray Removal",
    description:
      "Expert surface smoothing and restoration to remove unwanted paint overspray without damaging your vehicle's finish.",
  },
];

const packages = [
  {
    name: "Premium Wash",
    price: "From $50",
    description: "Quality hand wash using professional tools and premium products",
    features: [
      "Exterior hand wash",
      "Wheel & tire cleaning",
      "Window cleaning",
      "Tire dressing",
    ],
    popular: false,
  },
  {
    name: "Mini Interior Detail",
    price: "From $150",
    description: "Quick maintenance touch-up to keep your interior fresh between full details",
    features: [
      "Vacuum & wipe down",
      "Dashboard cleaning",
      "Window cleaning",
      "Air freshener",
      "Door jamb wipe",
    ],
    popular: false,
  },
  {
    name: "Full Detail",
    price: "From $350",
    description: "Complete interior and exterior restoration for a like-new finish",
    features: [
      "Full exterior wash & clay bar",
      "One-step paint correction",
      "Interior deep clean",
      "Leather conditioning",
      "Engine bay cleaning",
      "Tire & trim dressing",
    ],
    popular: true,
  },
  {
    name: "Ceramic Coating",
    price: "From $800",
    description: "The ultimate paint protection with multi-year durability",
    features: [
      "Multi-stage paint correction",
      "Surface decontamination",
      "Ceramic coating application",
      "Hydrophobic protection",
      "UV & chemical resistance",
      "2-5 year warranty",
    ],
    popular: false,
  },
];

const testimonials = [
  {
    name: "Charles Liston",
    text: "Results speak for themselves \u2014 my van looks better than it has in years. The attention to detail is unmatched and the mobile service is incredibly convenient.",
    rating: 5,
  },
  {
    name: "Eric Petronella",
    text: "Charlie is a true professional. Very thorough in his work and takes genuine pride in every vehicle he touches. Highly recommend Palace Auto Detail to anyone.",
    rating: 5,
  },
  {
    name: "John Short",
    text: "Great promotion and remarkable service. The ceramic coating on my truck looks absolutely stunning. Strongly recommend him to anyone looking for quality detailing.",
    rating: 5,
  },
];

const gallery = [
  { src: `${IMG}/hero-amg.jpg`, alt: "Mercedes-AMG detailed by Palace Auto Detail", label: "Mercedes-AMG" },
  { src: `${IMG}/lamborghini.jpg`, alt: "Lamborghini Urus ceramic coated by Palace Auto Detail", label: "Lamborghini Urus" },
  { src: `${IMG}/blue-tesla.jpg`, alt: "Tesla with ceramic coating by Palace Auto Detail", label: "Tesla" },
  { src: `${IMG}/truck.jpg`, alt: "Truck detailed by Palace Auto Detail", label: "Truck Detail" },
  { src: `${IMG}/ford-truck.jpg`, alt: "Ford truck after detailing by Palace Auto Detail", label: "Ford Truck" },
  { src: `${IMG}/volkswagen.jpg`, alt: "Volkswagen detailed by Palace Auto Detail", label: "Volkswagen" },
];

/* ─── Colors ─── */
const C = {
  black: "#0A0A0A",
  dark: "#111111",
  card: "#1A1A1A",
  gold: "#C9A84C",
  goldLight: "#E0C872",
  goldDark: "#A68A3A",
  white: "#FFFFFF",
  gray: "#888888",
  grayLight: "#AAAAAA",
  grayDark: "#333333",
  border: "#2A2A2A",
};

export default function PalaceAutoDetail() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", backgroundColor: C.black, color: C.white }}>

      {/* ── Header / Nav ── */}
      <header style={{ backgroundColor: C.black, borderBottom: `1px solid ${C.border}` }} className="sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <img
                src={`${IMG}/logo.png`}
                alt="Palace Auto Detail logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <div className="text-lg font-bold tracking-tight leading-tight" style={{ color: C.white }}>
                  Palace Auto Detail
                </div>
                <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: C.gold }}>
                  Tempe, Arizona
                </div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-7 text-sm font-medium" style={{ color: C.grayLight }}>
              <a href="#services" className="transition-colors hover:text-white">Services</a>
              <a href="#gallery" className="transition-colors hover:text-white">Gallery</a>
              <a href="#packages" className="transition-colors hover:text-white">Packages</a>
              <a href="#testimonials" className="transition-colors hover:text-white">Reviews</a>
              <a
                href="tel:4803789493"
                className="px-5 py-2.5 rounded font-semibold text-sm transition-all hover:opacity-90 flex items-center gap-2"
                style={{ backgroundColor: C.gold, color: C.black }}
              >
                <Phone className="w-4 h-4" />
                (480) 378-9493
              </a>
            </nav>

            {/* Mobile phone button */}
            <a
              href="tel:4803789493"
              className="md:hidden px-4 py-2 rounded font-semibold text-sm flex items-center gap-2"
              style={{ backgroundColor: C.gold, color: C.black }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${IMG}/hero-amg.jpg`}
            alt="Premium car detailing by Palace Auto Detail in Tempe, Arizona"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${C.black}ee 0%, ${C.black}cc 40%, ${C.black}88 70%, ${C.black}44 100%)`,
            }}
          />
          {/* Gold accent line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[2px]"
            style={{ background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)` }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-40">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.15em] uppercase mb-8 border"
              style={{ borderColor: C.gold, color: C.gold }}
            >
              <Shield className="w-3.5 h-3.5" />
              100% Satisfaction Guarantee
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6">
              Premium Mobile
              <br />
              <span style={{ color: C.gold }}>Auto Detailing</span>
            </h1>

            <p className="text-lg sm:text-xl mb-10 max-w-xl leading-relaxed" style={{ color: C.grayLight }}>
              Expert ceramic coating, paint correction, and full detailing
              delivered to your door in Tempe and the greater Phoenix area.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="tel:4803789493"
                className="inline-flex items-center gap-3 px-8 py-4 rounded font-bold text-lg transition-all hover:opacity-90"
                style={{ backgroundColor: C.gold, color: C.black }}
              >
                <Phone className="w-5 h-5" />
                (480) 378-9493
              </a>
              <a
                href="#packages"
                className="inline-flex items-center gap-2 px-8 py-4 rounded font-bold text-lg border transition-all hover:bg-white/5"
                style={{ borderColor: C.border, color: C.white }}
              >
                View Packages
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center gap-6 mt-10 text-sm" style={{ color: C.gray }}>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: C.gold }} />
                Tempe, AZ &amp; Surrounding Areas
              </span>
              <span className="flex items-center gap-2">
                <Car className="w-4 h-4" style={{ color: C.gold }} />
                Mobile Service
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Row ── */}
      <section style={{ backgroundColor: C.dark, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { value: "100%", label: "Satisfaction Guarantee" },
              { value: "Mobile", label: "We Come to You" },
              { value: "5\u2605", label: "Customer Reviews" },
              { value: "Pro", label: "Trained Technicians" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="py-8 px-6 text-center"
                style={{ borderRight: i < 3 ? `1px solid ${C.border}` : "none" }}
              >
                <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: C.gold }}>
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[0.15em]" style={{ color: C.gray }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-20 sm:py-28" style={{ backgroundColor: C.black }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: C.gold }}>
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              What We Do
            </h2>
            <p className="mt-4 max-w-lg mx-auto" style={{ color: C.gray }}>
              From quick washes to complete paint correction and ceramic coating &mdash; every service is tailored to your vehicle&rsquo;s needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-lg transition-all hover:translate-y-[-2px]"
                style={{
                  backgroundColor: C.card,
                  border: `1px solid ${C.border}`,
                }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${C.gold}15` }}
                >
                  <service.icon className="w-5 h-5" style={{ color: C.gold }} />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: C.white }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: C.gray }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="gallery" className="py-20 sm:py-28" style={{ backgroundColor: C.dark }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: C.gold }}>
              Our Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Recent Projects
            </h2>
            <p className="mt-4 max-w-lg mx-auto" style={{ color: C.gray }}>
              Every vehicle gets the royal treatment. From daily drivers to exotics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((item) => (
              <div
                key={item.label}
                className="group relative rounded-lg overflow-hidden"
                style={{ border: `1px solid ${C.border}` }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                  style={{ background: `linear-gradient(to top, ${C.black}cc 0%, transparent 50%)` }}
                >
                  <div className="p-5">
                    <p className="font-bold text-white text-sm">{item.label}</p>
                    <p className="text-xs" style={{ color: C.gold }}>Palace Auto Detail</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages / Pricing ── */}
      <section id="packages" className="py-20 sm:py-28" style={{ backgroundColor: C.black }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: C.gold }}>
              Packages
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Detailing Packages
            </h2>
            <p className="mt-4 max-w-lg mx-auto" style={{ color: C.gray }}>
              Every estimate is tailored to your vehicle. Prices vary by size, condition, and add-ons.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="rounded-lg p-6 flex flex-col relative"
                style={{
                  backgroundColor: C.card,
                  border: pkg.popular ? `2px solid ${C.gold}` : `1px solid ${C.border}`,
                }}
              >
                {pkg.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase"
                    style={{ backgroundColor: C.gold, color: C.black }}
                  >
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-bold mb-1" style={{ color: C.white }}>
                  {pkg.name}
                </h3>
                <p className="text-2xl font-bold mb-3" style={{ color: C.gold }}>
                  {pkg.price}
                </p>
                <p className="text-sm mb-5 leading-relaxed" style={{ color: C.gray }}>
                  {pkg.description}
                </p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm" style={{ color: C.grayLight }}>
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: C.gold }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:4803789493"
                  className="block text-center py-3 rounded font-semibold text-sm transition-all hover:opacity-90"
                  style={{
                    backgroundColor: pkg.popular ? C.gold : "transparent",
                    color: pkg.popular ? C.black : C.gold,
                    border: pkg.popular ? "none" : `1px solid ${C.gold}`,
                  }}
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Why Palace ── */}
      <section className="py-20 sm:py-28 relative overflow-hidden" style={{ backgroundColor: C.dark }}>
        {/* Subtle diagonal accent */}
        <div
          className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, ${C.gold} 0, ${C.gold} 1px, transparent 0, transparent 50%)`,
            backgroundSize: "20px 20px",
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: C.gold }}>
                About Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Why Choose Palace?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: C.grayLight }}>
                Palace Auto Detail brings professional-grade detailing directly to your driveway. Our trained
                technicians arrive with a fully equipped mobile unit &mdash; water, power, and premium products
                &mdash; so your vehicle gets showroom results without leaving home.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: C.gray }}>
                We serve Tempe, Chandler, Phoenix, Gilbert, Scottsdale, Mesa, and Paradise Valley.
                Every service comes with our performance-based money-back guarantee &mdash; if you&rsquo;re not
                satisfied, you don&rsquo;t pay.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Car, text: "Mobile service \u2014 we come to you" },
                  { icon: Shield, text: "100% satisfaction guarantee" },
                  { icon: Award, text: "Trained professional technicians" },
                  { icon: Clock, text: "Fully equipped mobile unit" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${C.gold}15` }}
                    >
                      <item.icon className="w-4 h-4" style={{ color: C.gold }} />
                    </div>
                    <span className="text-sm" style={{ color: C.grayLight }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={`${IMG}/detail-work.jpg`}
                alt="Palace Auto Detail professional ceramic coating application"
                className="rounded-lg w-full aspect-[4/3] object-cover"
                style={{ border: `1px solid ${C.border}` }}
              />
              {/* Floating accent card */}
              <div
                className="absolute -bottom-6 -left-4 sm:-left-8 rounded-lg p-5 shadow-2xl"
                style={{ backgroundColor: C.card, border: `1px solid ${C.gold}` }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: C.gold }}
                  >
                    <Shield className="w-6 h-6" style={{ color: C.black }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: C.white }}>Money-Back Guarantee</p>
                    <p className="text-xs" style={{ color: C.gray }}>Performance-based promise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="py-20 sm:py-28" style={{ backgroundColor: C.black }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: C.gold }}>
              Reviews
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-lg p-8 relative"
                style={{
                  backgroundColor: C.card,
                  borderTop: `3px solid ${C.gold}`,
                  border: `1px solid ${C.border}`,
                  borderTopColor: C.gold,
                  borderTopWidth: "3px",
                }}
              >
                {/* Gold quote mark */}
                <div
                  className="absolute top-4 right-5 text-5xl font-serif leading-none opacity-20"
                  style={{ color: C.gold }}
                >
                  &ldquo;
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4" style={{ color: C.gold, fill: C.gold }} />
                  ))}
                </div>
                <p className="leading-relaxed mb-6 text-sm" style={{ color: C.grayLight }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ borderTop: `1px solid ${C.border}` }} className="pt-4">
                  <p className="font-bold text-sm" style={{ color: C.white }}>{t.name}</p>
                  <p className="text-xs" style={{ color: C.gray }}>Verified Customer</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area ── */}
      <section className="py-16" style={{ backgroundColor: C.dark, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-2" style={{ color: C.gold }}>
                Service Area
              </p>
              <p className="text-sm" style={{ color: C.grayLight }}>
                Proudly serving the greater Phoenix metro area
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Tempe", "Chandler", "Phoenix", "Gilbert", "Scottsdale", "Mesa", "Paradise Valley"].map((city) => (
                <span
                  key={city}
                  className="px-4 py-2 rounded-full text-xs font-medium"
                  style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, color: C.grayLight }}
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 sm:py-32 relative overflow-hidden" style={{ backgroundColor: C.black }}>
        {/* Radial gold glow */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            background: `radial-gradient(ellipse at center, ${C.gold} 0%, transparent 70%)`,
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.15em] uppercase mb-8 border"
            style={{ borderColor: C.gold, color: C.gold }}
          >
            <Car className="w-3.5 h-3.5" />
            Mobile Service Available
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Ready for a{" "}
            <span style={{ color: C.gold }}>Showroom Finish</span>?
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: C.gray }}>
            Book your detail today. We bring the equipment, the products, and
            the expertise directly to your door.
          </p>

          <a
            href="tel:4803789493"
            className="inline-flex items-center gap-3 px-10 py-5 rounded font-bold text-lg transition-all hover:opacity-90"
            style={{ backgroundColor: C.gold, color: C.black }}
          >
            <Phone className="w-5 h-5" />
            (480) 378-9493
          </a>

          <p className="text-sm mt-6" style={{ color: C.grayDark }}>
            Tempe &middot; Chandler &middot; Phoenix &middot; Scottsdale &middot; Free Estimates
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.dark, borderTop: `1px solid ${C.border}` }} className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={`${IMG}/logo.png`}
                  alt="Palace Auto Detail logo"
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <div className="text-base font-bold leading-tight" style={{ color: C.white }}>
                    Palace Auto Detail
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase" style={{ color: C.gold }}>
                    Ceramic Coating &amp; Car Detailing
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed max-w-md mb-4" style={{ color: C.gray }}>
                Professional mobile auto detailing in Tempe, AZ and the greater Phoenix area.
                Ceramic coating, paint correction, full details, and more &mdash; delivered to your driveway
                with a 100% satisfaction guarantee.
              </p>
              <div className="flex flex-wrap gap-4 text-xs" style={{ color: C.grayDark }}>
                <span className="flex items-center gap-1">
                  <Shield className="w-3 h-3" style={{ color: C.gold }} /> Satisfaction Guaranteed
                </span>
                <span className="flex items-center gap-1">
                  <Car className="w-3 h-3" style={{ color: C.gold }} /> Fully Mobile
                </span>
              </div>
            </div>

            {/* Right */}
            <div className="md:text-right">
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: C.grayDark }}>
                Contact
              </h3>
              <div className="space-y-2 text-sm" style={{ color: C.grayLight }}>
                <p>
                  <a href="tel:4803789493" className="font-semibold transition-colors" style={{ color: C.gold }}>
                    (480) 378-9493
                  </a>
                </p>
                <p>Tempe, AZ</p>
                <p>Serving Tempe, Chandler, Phoenix, Gilbert,</p>
                <p>Scottsdale, Mesa &amp; Paradise Valley</p>
              </div>
            </div>
          </div>

          <div
            className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
            style={{ borderTop: `1px solid ${C.border}`, color: C.grayDark }}
          >
            <p>&copy; {new Date().getFullYear()} Palace Auto Detail. All rights reserved.</p>
            <p>
              Website by{" "}
              <a href="/" className="transition-colors hover:text-white" style={{ color: C.gray }}>
                KPT Designs
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

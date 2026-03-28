import {
  Phone,
  Star,
  MapPin,
  Clock,
  Award,
  CheckCircle,
  Shield,
  Heart,
  Gem,
  Truck,
  FileText,
  Users,
  Mail,
  ChevronRight,
  Compass,
} from "lucide-react";

export const metadata = {
  title: "Edgewood Monuments | Your Memories, Our Craft",
  description:
    "Family-owned since 1975. Custom granite headstones, monuments, and memorials. Third-generation craftsmanship trusted by thousands. Call (800) 990-0523 for a free consultation.",
};

const IMG = "/sites/edgewood-monuments";

const services = [
  {
    icon: Gem,
    title: "Custom Granite Headstones",
    description:
      "Premium monument-grade granite, hand-selected for durability and beauty. Upright, slant, flat, and pillow styles — each designed to honor a life uniquely lived.",
    image: `${IMG}/upright-headstone.png`,
  },
  {
    icon: Award,
    title: "In-House Engraving",
    description:
      "Expert artisans hand-engrave every memorial in our own facility. Unlimited design revisions until you are completely satisfied with the tribute.",
    image: `${IMG}/granite.jpg`,
  },
  {
    icon: Truck,
    title: "Delivery & Installation",
    description:
      "Professional installation crews handle every placement with care. We coordinate with cemeteries, secure permits, and ensure proper foundation setting.",
    image: `${IMG}/sumner-showroom.webp`,
  },
  {
    icon: FileText,
    title: "Cemetery Coordination",
    description:
      "We navigate cemetery rules, handle all paperwork, and manage approvals — so you never have to worry about regulations during a difficult time.",
    image: null,
  },
];

const headstoneStyles = [
  {
    name: "Upright",
    description: "The classic and most popular monument style, standing tall as a lasting tribute.",
    image: `${IMG}/upright-headstone.png`,
  },
  {
    name: "Slant",
    description: "An angled face for elegant readability, combining tradition with a modern touch.",
    image: `${IMG}/slant-headstone.png`,
  },
  {
    name: "Flat",
    description: "Level with the ground, offering a clean and understated memorial presence.",
    image: `${IMG}/flat-headstone.png`,
  },
  {
    name: "Pillow",
    description: "A gently raised marker with a slightly tilted face, graceful and timeless.",
    image: `${IMG}/pillow-headstone.png`,
  },
];

const testimonials = [
  {
    name: "Margaret T.",
    location: "Sumner, WA",
    text: "From our very first phone call, the team at Edgewood treated us like family. The headstone they crafted for my husband is more beautiful than I ever imagined. Every detail was perfect.",
  },
  {
    name: "David & Karen L.",
    location: "Bellevue, WA",
    text: "They handled everything — the cemetery paperwork, the design, the installation. During the hardest time of our lives, they made this one part easy. We are forever grateful.",
  },
  {
    name: "Robert M.",
    location: "Beaverton, OR",
    text: "Three generations of craftsmanship really shows. The granite quality is outstanding, and the engraving is incredibly detailed. A truly fitting tribute to my mother.",
  },
];

const locations = [
  { city: "Sumner, WA", phone: "(253) 286-7791" },
  { city: "Bellevue, WA", phone: "(425) 224-6620" },
  { city: "Beaverton, OR", phone: "(503) 444-6070" },
  { city: "Los Angeles, CA", phone: "(213) 566-8048" },
  { city: "Las Vegas, NV", phone: "(702) 903-7436" },
];

const processSteps = [
  {
    step: "01",
    title: "Free Consultation",
    description:
      "Schedule a complimentary phone or showroom consultation. We listen to your vision and guide you through options with compassion.",
  },
  {
    step: "02",
    title: "Design & Approval",
    description:
      "Our designers create a custom proof for your review. Unlimited revisions — we refine until every detail is exactly right.",
  },
  {
    step: "03",
    title: "Crafting & Engraving",
    description:
      "Expert artisans sculpt and engrave your memorial in premium granite. Every piece is made in-house with meticulous care.",
  },
  {
    step: "04",
    title: "Delivery & Installation",
    description:
      "Our crew handles cemetery coordination, permits, and professional installation. Typical timeline: 2 to 7 months from approval.",
  },
];

export default function EdgewoodMonuments() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        backgroundColor: "#FAF8F5",
        color: "#3A3631",
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "#2C2825",
          borderBottom: "3px solid #8B7355",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img
              src={`${IMG}/logo.svg`}
              alt="Edgewood Monuments"
              className="h-10 w-auto"
            />
          </div>
          <div className="flex items-center gap-4">
            <span
              className="hidden sm:flex items-center gap-2 text-sm"
              style={{ color: "#C4B9A8" }}
            >
              <Clock className="w-4 h-4" style={{ color: "#8B7355" }} />
              Mon-Sat 9-5 &middot; Sun 11-3
            </span>
            <a
              href="tel:8009900523"
              className="flex items-center gap-2 px-5 py-2.5 rounded font-semibold text-sm transition-all"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                backgroundColor: "#8B7355",
                color: "#FFFFFF",
              }}
            >
              <Phone className="w-4 h-4" />
              (800) 990-0523
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden py-28 sm:py-36"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(44,40,37,0.93) 40%, rgba(44,40,37,0.6)), url(${IMG}/hero.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Warm accent glow */}
        <div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.07]"
          style={{ backgroundColor: "#8B7355" }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-[0.15em] uppercase mb-8"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 600,
                border: "1px solid rgba(139,115,85,0.4)",
                color: "#D4C5AE",
                backgroundColor: "rgba(44,40,37,0.7)",
              }}
            >
              <Heart className="w-3.5 h-3.5" />
              Family-Owned Since 1975
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              <span style={{ color: "#D4C5AE" }}>Your Memories,</span>
              <br />
              <span style={{ color: "#FFFFFF" }}>Our Craft</span>
            </h1>

            <p
              className="text-lg sm:text-xl mb-10 max-w-xl leading-relaxed"
              style={{ color: "#B8ADA0" }}
            >
              Three generations of master craftsmen dedicated to honoring
              the people you love. Premium granite memorials, designed
              with compassion and built to endure for centuries.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="tel:8009900523"
                className="inline-flex items-center gap-3 px-8 py-4 rounded font-bold text-lg transition-all"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  backgroundColor: "#8B7355",
                  color: "#FFFFFF",
                  boxShadow: "0 4px 20px rgba(139,115,85,0.35)",
                }}
              >
                <Phone className="w-5 h-5" />
                Free Consultation
              </a>
              <a
                href="mailto:sales@edgewoodmonuments.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded font-bold text-lg transition-all"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  backgroundColor: "transparent",
                  color: "#D4C5AE",
                  border: "1px solid rgba(139,115,85,0.5)",
                }}
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section
        style={{
          backgroundColor: "#2C2825",
          borderBottom: "1px solid rgba(139,115,85,0.3)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3 text-sm" style={{ color: "#C4B9A8" }}>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-[#D4A853]" style={{ color: "#D4A853" }} />
              4.9 Stars &middot; 200+ Reviews
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" style={{ color: "#8B7355" }} />
              MBNA Certified
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" style={{ color: "#8B7355" }} />
              Thousands of Families Served
            </span>
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4" style={{ color: "#8B7355" }} />
              50+ Years Experience
            </span>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.2em] uppercase mb-3"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 600,
                color: "#8B7355",
              }}
            >
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "#2C2825" }}>
              A Compassionate Process
            </h2>
            <p className="text-base mt-4 max-w-xl mx-auto" style={{ color: "#7A746C" }}>
              We guide you through every step, handling the details so you can focus on what matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{
                    backgroundColor: "#2C2825",
                    color: "#D4C5AE",
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                  }}
                >
                  {item.step}
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#2C2825" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7A746C" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Headstone Styles */}
      <section className="py-20" style={{ backgroundColor: "#F0EDE8" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.2em] uppercase mb-3"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 600,
                color: "#8B7355",
              }}
            >
              Memorial Styles
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "#2C2825" }}>
              Crafted in Premium Granite
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {headstoneStyles.map((style) => (
              <div
                key={style.name}
                className="rounded-lg overflow-hidden"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E0D9CF",
                  boxShadow: "0 2px 12px rgba(44,40,37,0.06)",
                }}
              >
                <div className="h-56 flex items-center justify-center p-4" style={{ backgroundColor: "#F7F5F1" }}>
                  <img
                    src={style.image}
                    alt={`${style.name} headstone`}
                    className="max-h-48 w-auto object-contain"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1" style={{ color: "#2C2825" }}>
                    {style.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#7A746C" }}>
                    {style.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.2em] uppercase mb-3"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 600,
                color: "#8B7355",
              }}
            >
              What We Offer
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "#2C2825" }}>
              Complete Monument Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-lg p-7 flex gap-5"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E0D9CF",
                  boxShadow: "0 2px 12px rgba(44,40,37,0.06)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#2C2825" }}
                >
                  <service.icon className="w-6 h-6" style={{ color: "#D4C5AE" }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#2C2825" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#7A746C" }}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Heritage */}
      <section className="py-20" style={{ backgroundColor: "#2C2825" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-xs tracking-[0.2em] uppercase mb-3"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 600,
                  color: "#8B7355",
                }}
              >
                Our Heritage
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight mb-6"
                style={{ color: "#FAF8F5" }}
              >
                Three Generations of
                <br />
                Master Craftsmanship
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#B8ADA0" }}>
                <p>
                  Since 1975, Edgewood Monuments has been a family-owned cornerstone of the
                  memorial industry. What began as a small workshop has grown into a trusted
                  name serving thousands of families across the nation.
                </p>
                <p>
                  Now in our third generation, we bring over 50 years of accumulated wisdom
                  to every memorial we create. We use only premium monument-grade granite — no
                  cheap fillers, no shortcuts. Every piece is crafted in-house by artisans who
                  understand that their work will stand for more than a century.
                </p>
                <p>
                  We believe the process of choosing a memorial should bring comfort, not
                  stress. That is why we handle everything: design consultation, cemetery
                  approvals, permits, engraving, delivery, and installation.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <img
                  src={`${IMG}/mbna-logo.png`}
                  alt="Monument Builders of North America"
                  className="h-10 w-auto opacity-70"
                />
                <img
                  src={`${IMG}/pnmba-logo.png`}
                  alt="Pacific Northwest Monument Builders Association"
                  className="h-10 w-auto opacity-70"
                />
              </div>
            </div>

            <div className="relative">
              <img
                src={`${IMG}/memorial-scene.jpg`}
                alt="Memorial headstone in a peaceful cemetery setting"
                className="rounded-lg w-full object-cover"
                style={{
                  maxHeight: "480px",
                  border: "2px solid rgba(139,115,85,0.3)",
                }}
              />
              <div
                className="absolute -bottom-6 -left-6 rounded-lg px-6 py-4 hidden lg:block"
                style={{
                  backgroundColor: "#8B7355",
                  color: "#FFFFFF",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
                }}
              >
                <p
                  className="text-3xl font-bold"
                  style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  50+
                </p>
                <p className="text-sm" style={{ color: "#E8DFD0" }}>Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: "#F0EDE8" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.2em] uppercase mb-3"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 600,
                color: "#8B7355",
              }}
            >
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "#2C2825" }}>
              Trusted by Families Nationwide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-lg p-7 flex flex-col justify-between"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E0D9CF",
                  borderTop: "4px solid #8B7355",
                  boxShadow: "0 2px 12px rgba(44,40,37,0.06)",
                }}
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#D4A853]"
                        style={{ color: "#D4A853" }}
                      />
                    ))}
                  </div>
                  <p
                    className="text-sm leading-relaxed mb-6 italic"
                    style={{ color: "#5A554E" }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div
                  className="pt-4"
                  style={{ borderTop: "1px solid #E0D9CF" }}
                >
                  <p className="font-bold text-sm" style={{ color: "#2C2825" }}>
                    {t.name}
                  </p>
                  <p
                    className="text-xs flex items-center gap-1 mt-0.5"
                    style={{ color: "#9A9389" }}
                  >
                    <MapPin className="w-3 h-3" />
                    {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom Locations */}
      <section className="py-20" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.2em] uppercase mb-3"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 600,
                color: "#8B7355",
              }}
            >
              Visit Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "#2C2825" }}>
              Showroom Locations
            </h2>
            <p className="text-base mt-4 max-w-lg mx-auto" style={{ color: "#7A746C" }}>
              Five locations across the West Coast. Walk in or schedule a private consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {locations.map((loc) => (
              <div
                key={loc.city}
                className="rounded-lg p-6 flex items-center justify-between"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E0D9CF",
                }}
              >
                <div className="flex items-center gap-3">
                  <Compass className="w-5 h-5 flex-shrink-0" style={{ color: "#8B7355" }} />
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#2C2825" }}>
                      {loc.city}
                    </p>
                    <a
                      href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`}
                      className="text-sm hover:underline"
                      style={{ color: "#8B7355" }}
                    >
                      {loc.phone}
                    </a>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4" style={{ color: "#C4B9A8" }} />
              </div>
            ))}

            {/* Primary address card */}
            <div
              className="rounded-lg p-6"
              style={{
                backgroundColor: "#2C2825",
                border: "1px solid rgba(139,115,85,0.3)",
              }}
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#8B7355" }} />
                <div>
                  <p className="font-bold text-sm" style={{ color: "#FAF8F5" }}>
                    Headquarters
                  </p>
                  <p className="text-sm mt-1" style={{ color: "#B8ADA0" }}>
                    13704 24th St E, Suite A107
                    <br />
                    Sumner, WA 98372
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{
          backgroundColor: "#2C2825",
          backgroundImage: "radial-gradient(circle at 30% 50%, rgba(139,115,85,0.12) 0%, transparent 60%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-8 h-8 mx-auto mb-6" style={{ color: "#8B7355" }} />
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ color: "#FAF8F5" }}
          >
            Honor Their Memory
          </h2>
          <p
            className="text-lg mb-8 max-w-lg mx-auto leading-relaxed"
            style={{ color: "#B8ADA0" }}
          >
            Let us craft a lasting tribute that reflects the life and love
            of someone irreplaceable. Free consultations. Payment plans available.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8009900523"
              className="inline-flex items-center gap-3 px-10 py-4 rounded font-bold text-xl transition-all"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                backgroundColor: "#8B7355",
                color: "#FFFFFF",
                boxShadow: "0 4px 24px rgba(139,115,85,0.4)",
              }}
            >
              <Phone className="w-6 h-6" />
              (800) 990-0523
            </a>
            <a
              href="mailto:sales@edgewoodmonuments.com"
              className="inline-flex items-center gap-3 px-10 py-4 rounded font-bold text-lg transition-all"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                backgroundColor: "transparent",
                color: "#D4C5AE",
                border: "1px solid rgba(139,115,85,0.5)",
              }}
            >
              <Mail className="w-5 h-5" />
              sales@edgewoodmonuments.com
            </a>
          </div>

          <p className="text-sm mt-6" style={{ color: "#7A746C" }}>
            Monday &ndash; Saturday: 9 AM &ndash; 5 PM &middot; Sunday: 11 AM &ndash; 3 PM
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#1E1B18",
          borderTop: "3px solid #8B7355",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-sm"
            style={{ color: "#9A9389" }}
          >
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" style={{ color: "#8B7355" }} />
                <a
                  href="tel:8009900523"
                  className="hover:text-white transition-colors"
                >
                  (800) 990-0523
                </a>
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" style={{ color: "#8B7355" }} />
                <a
                  href="mailto:sales@edgewoodmonuments.com"
                  className="hover:text-white transition-colors"
                >
                  sales@edgewoodmonuments.com
                </a>
              </span>
            </div>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" style={{ color: "#8B7355" }} />
              Sumner, WA &middot; Bellevue &middot; Beaverton &middot; LA &middot; Las Vegas
            </span>
          </div>
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-2 py-4 text-xs"
            style={{ borderTop: "1px solid #2C2825", color: "#6A645E" }}
          >
            <p>
              &copy; {new Date().getFullYear()} Edgewood Monuments. All
              rights reserved.
            </p>
            <p>
              Website by{" "}
              <a
                href="/"
                className="transition-colors hover:text-white"
                style={{ color: "#9A9389" }}
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

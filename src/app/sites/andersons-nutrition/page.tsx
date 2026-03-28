import {
  Phone,
  Mail,
  MapPin,
  Leaf,
  Heart,
  Brain,
  Scale,
  Users,
  Activity,
  Building2,
  Monitor,
  Star,
  ChevronRight,
  CalendarCheck,
} from "lucide-react";

export const metadata = {
  title: "Anderson's Nutrition | Dietitian Nutritionist — Making One Change at a Time",
  description:
    "Registered Dietitian Nutritionists in Scottsdale, Tempe, Gilbert AZ and Downingtown, Wayne PA. Nutrition counseling, meal planning, metabolic testing, mental health counseling. Insurance accepted. Call (602) 770-7611.",
};

const services = [
  {
    icon: Leaf,
    title: "Nutrition Counseling",
    desc: "One-on-one sessions with a Registered Dietitian Nutritionist to build a personalized plan. We address weight management, chronic conditions, food sensitivities, and more.",
  },
  {
    icon: Scale,
    title: "Meal Planning Program",
    desc: "Structured, sustainable meal plans tailored to your lifestyle, preferences, and health goals. No fad diets — just real food that works.",
  },
  {
    icon: Brain,
    title: "Mental Health Counseling",
    desc: "Addressing the emotional relationship with food. Our counselors help with disordered eating, stress eating, and building a healthy mindset around nutrition.",
  },
  {
    icon: Activity,
    title: "Metabolic Testing",
    desc: "FDA-approved metabolic testing equipment reveals your unique calorie needs. Stop guessing and start fueling your body based on real data.",
  },
  {
    icon: Heart,
    title: "Exercise & Fitness Programs",
    desc: "Complementary fitness guidance designed to work alongside your nutrition plan. Movement that supports your health goals, not just calories burned.",
  },
  {
    icon: Building2,
    title: "Corporate Wellness",
    desc: "Bring nutrition education to your workplace. Lunch-and-learns, wellness challenges, and group programs that improve employee health and productivity.",
  },
  {
    icon: Users,
    title: "Group Support & Classes",
    desc: "Community-driven nutrition education and support groups. Learn alongside others, share wins, and stay accountable on your journey.",
  },
  {
    icon: Monitor,
    title: "Virtual Counseling",
    desc: "Convenient telehealth nutrition sessions from anywhere. Same expert guidance, same personalized care — from the comfort of your home.",
  },
];

const testimonials = [
  {
    name: "Jane",
    quote:
      "I feel empowered after talking with my dietitian. After 40 years overweight, I now have hope for healthy weight loss.",
  },
  {
    name: "Monica",
    quote:
      "Fad diets no longer worked. My nutritionist taught me that balancing food and portion control enables healthy, lasting results.",
  },
  {
    name: "Harry",
    quote:
      "Great advice and coaching — no more pre-diabetes, 30 pounds lost.",
  },
  {
    name: "John",
    quote:
      "Triglycerides dropped from 204 to 61; A1c improved from 7.6 to 5.9.",
  },
];

const locations = [
  "Scottsdale, AZ",
  "Tempe, AZ",
  "Gilbert, AZ",
  "Downingtown, PA",
  "Wayne, PA",
  "Virtual / Telehealth",
];

const results = [
  { value: "30+", label: "Pounds Lost" },
  { value: "100%", label: "Insurance Often Covered" },
  { value: "5+", label: "Locations Nationwide" },
  { value: "12", label: "Fixes Wellness Plan" },
];

const IMG = "/sites/andersons-nutrition";

/* ── Color Palette ──
   Vibrant Green:   #2D8C3C (primary)
   Dark Green:      #1A5C27 (deep accents)
   Citrus Orange:   #E8872D (CTA, highlights)
   Warm Orange:     #D4732A (hover)
   Clean White:     #FFFFFF (backgrounds)
   Off-White:       #F7FAF5 (section alternation)
   Earth Brown:     #3D2E1E (footer, text weight)
   Charcoal:        #2A2A2A (body text)
   Light Sage:      #E8F0E3 (card backgrounds)
*/

export default function AndersonsNutrition() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        backgroundColor: "#FFFFFF",
        color: "#2A2A2A",
      }}
    >
      {/* === NAV === */}
      <nav
        className="sticky top-0 z-50 px-4 py-3"
        style={{
          backgroundColor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(45,140,60,0.12)",
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={`${IMG}/logo.png`}
              alt="Anderson's Nutrition logo"
              className="h-10 w-auto"
            />
            <div>
              <p
                className="text-sm font-bold tracking-wide"
                style={{ color: "#1A5C27" }}
              >
                Anderson&rsquo;s Nutrition
              </p>
              <p
                className="text-[10px] tracking-[0.15em] uppercase"
                style={{ color: "#2D8C3C" }}
              >
                Making One Change at a Time
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-5 text-xs font-semibold tracking-widest uppercase" style={{ color: "#2D8C3C", letterSpacing: "0.08em" }}>
            {[["Services","services"],["About","about"],["Reviews","testimonials"],["Locations","locations"]].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="hover:text-[#E8872D] transition-colors">{label}</a>
            ))}
          </div>
          <a
            href="tel:6027707611"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase transition-all"
            style={{
              backgroundColor: "#E8872D",
              color: "#FFFFFF",
              borderRadius: "6px",
            }}
          >
            <Phone className="w-3.5 h-3.5" />
            (602) 770-7611
          </a>
        </div>
      </nav>

      {/* === HERO === */}
      <section
        className="relative flex items-center justify-center px-4"
        style={{
          minHeight: "92vh",
          background:
            "linear-gradient(135deg, #F7FAF5 0%, #E8F0E3 30%, #FFFFFF 70%, #FFF8F0 100%)",
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-[0.07]"
          style={{ backgroundColor: "#2D8C3C" }}
        />
        <div
          className="absolute bottom-32 left-8 w-48 h-48 rounded-full opacity-[0.05]"
          style={{ backgroundColor: "#E8872D" }}
        />
        <div
          className="absolute top-40 left-20 w-20 h-20 rounded-full opacity-[0.06]"
          style={{ backgroundColor: "#2D8C3C" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: "#2D8C3C" }}
            >
              Registered Dietitian Nutritionists
            </p>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight"
              style={{ color: "#1A5C27" }}
            >
              Making One
              <br />
              Change at
              <br />
              <span style={{ color: "#E8872D" }}>a Time</span>
            </h1>

            <p
              className="text-base sm:text-lg mt-6 max-w-md leading-relaxed"
              style={{ color: "#4A5A42" }}
            >
              Expert nutrition counseling backed by science, covered by insurance.
              In-person across Arizona &amp; Pennsylvania, or from anywhere via
              telehealth.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="tel:6027707611"
                className="inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold tracking-wide uppercase transition-all"
                style={{
                  backgroundColor: "#E8872D",
                  color: "#FFFFFF",
                  borderRadius: "8px",
                  boxShadow: "0 4px 14px rgba(232,135,45,0.35)",
                }}
              >
                <Phone className="w-4 h-4" />
                Schedule Today
              </a>
              <a
                href="mailto:info@andersonsnutrition.com"
                className="inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold tracking-wide uppercase transition-all"
                style={{
                  backgroundColor: "transparent",
                  color: "#2D8C3C",
                  borderRadius: "8px",
                  border: "2px solid #2D8C3C",
                }}
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>

            <p
              className="mt-6 text-xs flex items-center gap-2"
              style={{ color: "#6B7A63" }}
            >
              <Heart className="w-3.5 h-3.5" style={{ color: "#E8872D" }} />
              Medical insurance accepted &mdash; typically 100% covered
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div
              className="overflow-hidden"
              style={{ borderRadius: "24px" }}
            >
              <img
                src={`${IMG}/hero.png`}
                alt="Nutrition counseling session — healthy food and dietitian consultation"
                className="w-full h-auto"
                style={{
                  filter: "brightness(1.02) saturate(1.1)",
                }}
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -left-4 px-5 py-3 flex items-center gap-2"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                border: "1px solid rgba(45,140,60,0.12)",
              }}
            >
              <Leaf
                className="w-5 h-5"
                style={{ color: "#2D8C3C" }}
              />
              <div>
                <p
                  className="text-xs font-bold"
                  style={{ color: "#1A5C27" }}
                >
                  12 Fixes Plan
                </p>
                <p
                  className="text-[10px]"
                  style={{ color: "#6B7A63" }}
                >
                  Wellness program
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div
            className="w-px h-10"
            style={{ backgroundColor: "rgba(45,140,60,0.2)" }}
          />
          <ChevronRight
            className="w-4 h-4 rotate-90"
            style={{ color: "rgba(45,140,60,0.3)" }}
          />
        </div>
      </section>

      {/* === RESULTS BAR === */}
      <section
        className="py-12 px-4"
        style={{
          backgroundColor: "#1A5C27",
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
          {results.map((r) => (
            <div key={r.label} className="text-center">
              <p
                className="text-3xl sm:text-4xl font-extrabold"
                style={{ color: "#FFFFFF" }}
              >
                {r.value}
              </p>
              <p
                className="text-xs tracking-[0.2em] uppercase mt-1"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {r.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* === SERVICES === */}
      <section id="services" className="py-20 sm:py-28 px-4" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
              style={{ color: "#E8872D" }}
            >
              Our Programs
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight"
              style={{ color: "#1A5C27" }}
            >
              Services &amp; Programs
            </h2>
            <p
              className="mt-4 text-base max-w-xl mx-auto leading-relaxed"
              style={{ color: "#6B7A63" }}
            >
              Comprehensive nutrition care from Registered Dietitian
              Nutritionists. Every plan is personalized, science-backed, and
              designed for lasting results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="p-6 transition-all"
                style={{
                  backgroundColor: "#F7FAF5",
                  borderRadius: "12px",
                  border: "1px solid rgba(45,140,60,0.08)",
                }}
              >
                <div
                  className="w-11 h-11 flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: "rgba(45,140,60,0.1)",
                    borderRadius: "10px",
                  }}
                >
                  <s.icon className="w-5 h-5" style={{ color: "#2D8C3C" }} />
                </div>
                <h3
                  className="text-sm font-bold tracking-wide mb-2"
                  style={{ color: "#1A5C27" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "#6B7A63" }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === ABOUT === */}
      <section
        id="about"
        className="py-20 sm:py-28 px-4"
        style={{ backgroundColor: "#F7FAF5" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div
                className="overflow-hidden"
                style={{ borderRadius: "16px", aspectRatio: "3/4" }}
              >
                <img
                  src={`${IMG}/virtual-counseling.png`}
                  alt="Virtual nutrition counseling session"
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(1.02) saturate(1.05)" }}
                />
              </div>
              <div
                className="overflow-hidden mt-8"
                style={{ borderRadius: "16px", aspectRatio: "3/4" }}
              >
                <img
                  src={`${IMG}/cancer-nutrition.png`}
                  alt="Nutritionist helping patient with specialized dietary needs"
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(1.02) saturate(1.05)" }}
                />
              </div>
            </div>
          </div>

          <div>
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
              style={{ color: "#E8872D" }}
            >
              About Us
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6"
              style={{ color: "#1A5C27" }}
            >
              Your Partner in
              <br />
              Lasting Health
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "#4A5A42" }}
            >
              Anderson&rsquo;s Nutrition is a team of Registered Dietitian
              Nutritionists dedicated to helping you achieve lasting health
              through personalized, evidence-based care. We believe real change
              happens one step at a time &mdash; no fad diets, no quick fixes,
              just sustainable nutrition that fits your life.
            </p>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "#4A5A42" }}
            >
              With offices in Arizona and Pennsylvania, plus full virtual
              services, we make expert nutrition care accessible wherever you
              are. Most medical insurance plans cover our services &mdash;
              often at 100%.
            </p>

            <div className="flex flex-wrap gap-3">
              {["En Espa\u00f1ol", "Telehealth", "Insurance Accepted", "12 Fixes Plan"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-semibold"
                    style={{
                      backgroundColor: "rgba(45,140,60,0.1)",
                      color: "#2D8C3C",
                      borderRadius: "6px",
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* === METABOLIC TESTING FEATURE === */}
      <section
        className="py-20 sm:py-24 px-4"
        style={{
          backgroundColor: "#1A5C27",
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(45,140,60,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(232,135,45,0.15) 0%, transparent 50%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <Activity
            className="w-10 h-10 mx-auto mb-6"
            style={{ color: "#E8872D" }}
          />
          <h2
            className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: "#FFFFFF" }}
          >
            FDA-Approved Metabolic Testing
          </h2>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Stop guessing your calorie needs. Our metabolic testing uses
            FDA-approved equipment to precisely measure your resting metabolic
            rate &mdash; the foundation for a nutrition plan that actually works
            for your unique body.
          </p>
          <a
            href="tel:6027707611"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-all"
            style={{
              backgroundColor: "#E8872D",
              color: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
            }}
          >
            <CalendarCheck className="w-4 h-4" />
            Book Your Test
          </a>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section id="testimonials" className="py-20 sm:py-28 px-4" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
              style={{ color: "#E8872D" }}
            >
              Real Results
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight"
              style={{ color: "#1A5C27" }}
            >
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-8"
                style={{
                  backgroundColor: "#F7FAF5",
                  borderRadius: "16px",
                  borderLeft: "4px solid #2D8C3C",
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      style={{ color: "#E8872D", fill: "#E8872D" }}
                    />
                  ))}
                </div>
                <p
                  className="text-sm sm:text-base leading-relaxed italic mb-4"
                  style={{ color: "#4A5A42" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p
                  className="text-xs font-bold tracking-[0.2em] uppercase"
                  style={{ color: "#2D8C3C" }}
                >
                  &mdash; {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === LOCATIONS === */}
      <section
        id="locations"
        className="py-16 sm:py-20 px-4"
        style={{ backgroundColor: "#F7FAF5" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "#E8872D" }}
          >
            Find Us
          </p>
          <h2
            className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-8"
            style={{ color: "#1A5C27" }}
          >
            Locations
          </h2>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {locations.map((loc) => (
              <div
                key={loc}
                className="flex items-center gap-2 px-5 py-3"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "10px",
                  border: "1px solid rgba(45,140,60,0.12)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <MapPin
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#2D8C3C" }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: "#2A2A2A" }}
                >
                  {loc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section
        className="py-20 sm:py-24 px-4"
        style={{
          background:
            "linear-gradient(135deg, #E8872D 0%, #D4732A 50%, #C66525 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: "#FFFFFF" }}
          >
            Ready to Make Your First Change?
          </h2>
          <p
            className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Take the first step toward lasting health. Schedule a consultation
            with a Registered Dietitian Nutritionist today &mdash; most insurance
            plans cover 100% of the cost.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:6027707611"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-wide uppercase transition-all"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#D4732A",
                borderRadius: "8px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
              }}
            >
              <Phone className="w-4 h-4" />
              (602) 770-7611
            </a>
            <a
              href="mailto:info@andersonsnutrition.com"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-wide uppercase transition-all"
              style={{
                backgroundColor: "transparent",
                color: "#FFFFFF",
                borderRadius: "8px",
                border: "2px solid rgba(255,255,255,0.5)",
              }}
            >
              <Mail className="w-4 h-4" />
              info@andersonsnutrition.com
            </a>
          </div>

          <p
            className="mt-8 text-xs tracking-[0.15em]"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Online scheduling available &bull; Se habla espa&ntilde;ol &bull;
            Insurance verification offered
          </p>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer
        className="py-12 px-4"
        style={{
          backgroundColor: "#3D2E1E",
          borderTop: "4px solid #2D8C3C",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
            {/* Brand */}
            <div>
              <img
                src={`${IMG}/logo-small.png`}
                alt="Anderson's Nutrition"
                className="h-8 w-auto mb-3 brightness-200"
              />
              <p
                className="text-xs leading-relaxed"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Dietitian Nutritionist &mdash; Making One Change at a Time.
                Personalized nutrition care across Arizona, Pennsylvania, and
                telehealth nationwide.
              </p>
            </div>

            {/* Contact */}
            <div>
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Contact
              </p>
              <div className="space-y-2">
                <a
                  href="tel:6027707611"
                  className="flex items-center gap-2 text-xs transition-colors"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  <Phone className="w-3 h-3" />
                  (602) 770-7611
                </a>
                <a
                  href="mailto:info@andersonsnutrition.com"
                  className="flex items-center gap-2 text-xs transition-colors"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  <Mail className="w-3 h-3" />
                  info@andersonsnutrition.com
                </a>
              </div>
            </div>

            {/* Locations */}
            <div>
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Locations
              </p>
              <div className="space-y-1">
                {locations.map((loc) => (
                  <p
                    key={loc}
                    className="flex items-center gap-2 text-xs"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    <MapPin className="w-3 h-3 shrink-0" />
                    {loc}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            <p>
              &copy; {new Date().getFullYear()} Anderson&rsquo;s Nutrition. All
              rights reserved.
            </p>
            <p>
              Website by{" "}
              <a
                href="/"
                className="transition-colors"
                style={{ color: "rgba(255,255,255,0.55)" }}
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

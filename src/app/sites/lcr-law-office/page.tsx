import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Scale,
  Shield,
  Heart,
  Users,
  FileText,
  Gavel,
  Quote,
  ChevronRight,
  Award,
  Star,
  ArrowRight,
  Briefcase,
  BookOpen,
  Landmark,
  Stamp,
  Brain,
  CheckCircle,
  Building,
} from "lucide-react";

export const metadata = {
  title:
    "The Law Offices of La-Zondra C. Randolph, P.A. | Orlando Family & Business Law Attorney",
  description:
    "Aggressive legal representation in Family Law, Personal Injury, Estate Planning, Business Law, and more. Serving Central Florida from Orlando. Call (407) 628-0054.",
};

const IMG = "/sites/lcr-law-office";

const practiceAreas = [
  {
    icon: Heart,
    title: "Family Law",
    description:
      "Divorce, child custody, adoption, paternity, and all matters involving family relationships. We fight to protect what matters most to you.",
  },
  {
    icon: Shield,
    title: "Personal Injury",
    description:
      "Every variety of injury to a person's body, emotions, or reputation. We pursue maximum compensation for the harm you have suffered.",
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description:
      "Comprehensive arrangement for the management and transfer of your assets during your lifetime and after your death. Wills, trusts, and advance directives.",
  },
  {
    icon: Users,
    title: "Guardianship",
    description:
      "Legal authority over an adult or child who cannot make safe and sound decisions. We guide you through this sensitive process with care.",
  },
  {
    icon: Landmark,
    title: "Probate",
    description:
      "Court-supervised identification and gathering of a deceased person's assets, payment of debts, and distribution to rightful beneficiaries.",
  },
  {
    icon: Briefcase,
    title: "Business Law",
    description:
      "Rules, regulations, and principles governing business activities. Formation, contracts, compliance, and dispute resolution for your enterprise.",
  },
  {
    icon: Brain,
    title: "Intellectual Property",
    description:
      "Strategic protection for entrepreneurs, innovators, and businesses. Trademarks, copyrights, and safeguarding your creative and commercial assets.",
  },
  {
    icon: Stamp,
    title: "Notary Public",
    description:
      "Verification of documents regarding financial transactions, estates, deeds, and powers-of-attorney. Professional notarization services.",
  },
];

const testimonials = [
  {
    quote:
      "La-Zondra Randolph paid very close attention to all of the details of my case and was able to provide me with great advice with my family legal matters. I felt heard and represented every step of the way.",
    name: "Eatonville Resident",
    detail: "Family Law Client",
    stars: 5,
  },
  {
    quote:
      "The Law Office of La-Zondra Randolph definitely took care of me and my legal situation. They were thorough, communicative, and genuinely invested in getting the best outcome for my case.",
    name: "Orlando Resident",
    detail: "Civil Litigation Client",
    stars: 5,
  },
  {
    quote:
      "Attorney Randolph's background and passion for community service really set her apart. She treated my case with the same urgency and dedication that she brings to everything she does.",
    name: "Central Florida Client",
    detail: "Estate Planning Client",
    stars: 5,
  },
];

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "8", label: "Practice Areas" },
  { value: "500+", label: "Clients Served" },
  { value: "100%", label: "Dedication" },
];

const credentials = [
  { label: "J.D.", value: "Juris Doctor" },
  { label: "Florida Bar", value: "Admitted June 2012" },
  { label: "Bar #", value: "96950" },
  { label: "Status", value: "Member in Good Standing" },
];

const whyUs = [
  {
    icon: CheckCircle,
    title: "Aggressive Advocacy",
    description:
      "We go the extra mile on every case, fighting relentlessly for your rights and the outcome you deserve.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    description:
      "Every client receives individualized service. We take time to understand your unique situation and goals.",
  },
  {
    icon: Award,
    title: "Community Commitment",
    description:
      "Founder of The LCR Project, a 501(c)(3) nonprofit serving disadvantaged individuals and families in Central Florida.",
  },
  {
    icon: Scale,
    title: "Comprehensive Knowledge",
    description:
      "From family law to business disputes to intellectual property, our breadth of practice means one firm handles all your needs.",
  },
];

/* Color tokens — charcoal + copper */
const C = {
  bg: "#1A1714",
  bgAlt: "#221F1A",
  bgCard: "#2A2620",
  copper: "#C27840",
  copperLight: "#D4945C",
  copperDark: "#A0603A",
  cream: "#F5EDE3",
  creamMuted: "rgba(245,237,227,0.6)",
  creamFaint: "rgba(245,237,227,0.35)",
  creamGhost: "rgba(245,237,227,0.12)",
  border: "rgba(194,120,64,0.2)",
  borderFaint: "rgba(245,237,227,0.06)",
};

const ff = "'Playfair Display', Georgia, serif";
const fs = "system-ui, -apple-system, sans-serif";

export default function LCRLawOffice() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: C.bg, color: C.cream }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap');
            .lcr-copper-glow { box-shadow: 0 0 60px rgba(194, 120, 64, 0.12), 0 0 120px rgba(194, 120, 64, 0.06); }
            .lcr-card { background: linear-gradient(135deg, rgba(194, 120, 64, 0.06), rgba(194, 120, 64, 0.02)); border: 1px solid rgba(194, 120, 64, 0.12); transition: all 0.3s ease; }
            .lcr-card:hover { border-color: rgba(194, 120, 64, 0.3); box-shadow: 0 8px 32px rgba(194, 120, 64, 0.08); transform: translateY(-2px); }
            .lcr-divider { background: linear-gradient(90deg, transparent, rgba(194, 120, 64, 0.3), transparent); height: 1px; }
            .lcr-copper-text { background: linear-gradient(135deg, #D4945C, #C27840, #A0603A); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
            .lcr-accent-bar { width: 48px; height: 3px; background: linear-gradient(90deg, #C27840, #D4945C); }
          `,
        }}
      />

      {/* Top Bar */}
      <div
        className="text-xs tracking-wide"
        style={{ backgroundColor: C.bgAlt, color: C.creamFaint, fontFamily: fs }}
      >
        <div className="max-w-6xl mx-auto px-6 py-2.5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" style={{ color: C.copper }} />
              815 N. Magnolia Suite 300, Orlando, FL 32803
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3 h-3" style={{ color: C.copper }} />
              Mon&ndash;Fri 9AM&ndash;5PM
            </span>
          </div>
          <a
            href="tel:4076280054"
            className="flex items-center gap-1.5 font-semibold transition-colors hover:brightness-125"
            style={{ fontFamily: fs, color: C.copper }}
          >
            <Phone className="w-3 h-3" />
            (407) 628-0054
          </a>
        </div>
      </div>

      {/* Navigation */}
      <header
        className="border-b sticky top-0 z-50 backdrop-blur-xl"
        style={{ backgroundColor: `${C.bg}ee`, borderColor: C.borderFaint }}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={`${IMG}/logo.png`}
              alt="LCR Law Office"
              className="h-12 w-auto object-contain"
            />
          </div>
          <nav
            className="hidden md:flex items-center gap-8 text-[13px] tracking-wide"
            style={{ fontFamily: fs, color: C.creamMuted }}
          >
            <a href="#practice-areas" className="hover:text-white transition-colors">
              Practice Areas
            </a>
            <a href="#attorney" className="hover:text-white transition-colors">
              Attorney
            </a>
            <a href="#why-us" className="hover:text-white transition-colors">
              Why Us
            </a>
            <a href="#testimonials" className="hover:text-white transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <a
              href="tel:4076280054"
              className="px-5 py-2.5 font-semibold transition-all flex items-center gap-2 rounded hover:brightness-110"
              style={{ backgroundColor: C.copper, color: C.bg }}
            >
              <Phone className="w-3.5 h-3.5" /> Free Consultation
            </a>
          </nav>
          {/* Mobile CTA */}
          <a
            href="tel:4076280054"
            className="md:hidden px-4 py-2 text-xs font-bold tracking-wider uppercase rounded flex items-center gap-2"
            style={{ backgroundColor: C.copper, color: C.bg }}
          >
            <Phone className="w-3.5 h-3.5" /> Call
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(170deg, ${C.bg} 0%, ${C.bgAlt} 100%)` }}
      >
        {/* Decorative elements */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04]"
          style={{ background: `radial-gradient(circle, ${C.copper}, transparent 70%)` }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-[0.03]"
          style={{ background: `radial-gradient(circle, ${C.copperLight}, transparent 70%)` }}
        />

        <div className="max-w-6xl mx-auto px-6 py-24 sm:py-32 lg:py-40 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="lcr-accent-bar mb-6" />
              <p
                className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
                style={{ fontFamily: fs, color: C.copper }}
              >
                Orlando &middot; Central Florida
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6"
                style={{ fontFamily: ff }}
              >
                Aggressively Going
                <br />
                the Extra Mile to{" "}
                <span className="lcr-copper-text italic">
                  Protect You.
                </span>
              </h1>
              <p
                className="text-lg leading-relaxed max-w-lg mb-10"
                style={{ color: C.creamMuted }}
              >
                Serving Central Florida in Family Law, Personal Injury, Estate
                Planning, Business Law, and Intellectual Property. Superior
                attention and service in every case.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a
                  href="tel:4076280054"
                  className="px-8 py-4 font-bold text-lg transition-all flex items-center justify-center gap-3 hover:brightness-110 rounded"
                  style={{ fontFamily: fs, backgroundColor: C.copper, color: C.bg }}
                >
                  <Phone className="w-5 h-5" /> (407) 628-0054
                </a>
                <a
                  href="#practice-areas"
                  className="border px-8 py-4 font-semibold transition-all flex items-center justify-center gap-2 backdrop-blur-sm rounded"
                  style={{
                    fontFamily: fs,
                    borderColor: C.creamGhost,
                    color: C.creamMuted,
                  }}
                >
                  Our Practice <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Attorney Image */}
            <div className="relative hidden lg:block">
              <div
                className="rounded-2xl overflow-hidden lcr-copper-glow"
                style={{ border: `1px solid ${C.border}` }}
              >
                <img
                  src={`${IMG}/attorney.png`}
                  alt="La-Zondra C. Randolph, Esq."
                  className="w-full h-[550px] object-cover object-top"
                />
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `linear-gradient(to top, ${C.bg}, transparent 50%)`,
                  }}
                />
              </div>
              {/* Floating credential card */}
              <div
                className="absolute bottom-8 left-8 right-8 backdrop-blur-xl rounded-xl p-5"
                style={{
                  background: `${C.bg}dd`,
                  border: `1px solid ${C.border}`,
                }}
              >
                <p className="font-bold text-lg" style={{ fontFamily: ff }}>
                  La-Zondra C. Randolph, Esq.
                </p>
                <p className="text-xs mt-1" style={{ color: C.copper, fontFamily: fs }}>
                  Florida Bar #96950 &middot; Admitted 2012
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ backgroundColor: C.bgAlt, borderTop: `1px solid ${C.borderFaint}` }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x" style={{ borderColor: C.borderFaint }}>
              {stats.map((s) => (
                <div key={s.label} className="py-6 text-center" style={{ borderColor: C.borderFaint }}>
                  <div
                    className="text-3xl font-bold tracking-tight"
                    style={{ color: C.copper, fontFamily: ff }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-xs tracking-[0.15em] uppercase mt-1"
                    style={{ color: C.creamFaint, fontFamily: fs }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="lcr-divider" />

      {/* Practice Areas */}
      <section id="practice-areas" className="py-24 relative overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{ background: `radial-gradient(circle, ${C.copper}, transparent 70%)` }}
        />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="lcr-accent-bar mx-auto mb-4" />
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ letterSpacing: "0.3em", color: C.copper, fontFamily: fs }}
            >
              Areas of Practice
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: ff }}
            >
              Comprehensive Legal{" "}
              <span className="lcr-copper-text italic">Solutions</span>
            </h2>
            <p
              className="text-sm mt-4 max-w-xl mx-auto leading-relaxed"
              style={{ color: C.creamFaint }}
            >
              Broad expertise across multiple practice areas, providing
              personalized and strategic legal solutions tailored to your unique
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {practiceAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.title} className="lcr-card rounded-xl p-7 group">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                    style={{
                      background: `linear-gradient(135deg, rgba(194,120,64,0.15), rgba(194,120,64,0.05))`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: C.copper }} />
                  </div>
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ fontFamily: ff }}
                  >
                    {area.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: C.creamFaint }}
                  >
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="lcr-divider" />

      {/* Attorney Bio */}
      <section
        id="attorney"
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: C.bgAlt }}
      >
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Image column */}
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl overflow-hidden lcr-copper-glow"
                style={{ border: `1px solid ${C.border}` }}
              >
                <img
                  src={`${IMG}/attorney.png`}
                  alt="La-Zondra C. Randolph, Esq."
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Credentials */}
              <div
                className="mt-6 rounded-xl overflow-hidden"
                style={{ border: `1px solid ${C.border}` }}
              >
                {credentials.map((c, i) => (
                  <div
                    key={c.label}
                    className="flex items-center justify-between px-6 py-3.5"
                    style={{
                      borderBottom:
                        i < credentials.length - 1
                          ? `1px solid ${C.borderFaint}`
                          : "none",
                    }}
                  >
                    <span
                      className="text-xs tracking-[0.15em] uppercase font-semibold"
                      style={{ color: C.copper, fontFamily: fs }}
                    >
                      {c.label}
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: C.creamMuted, fontFamily: fs }}
                    >
                      {c.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio content */}
            <div className="lg:col-span-3">
              <div className="lcr-accent-bar mb-4" />
              <p
                className="text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: C.copper, fontFamily: fs }}
              >
                Meet Your Attorney
              </p>
              <h2
                className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
                style={{ fontFamily: ff }}
              >
                La-Zondra C.{" "}
                <span className="lcr-copper-text italic">Randolph, Esq.</span>
              </h2>

              <div
                className="space-y-5 text-[15px] leading-relaxed"
                style={{ color: C.creamMuted }}
              >
                <p>
                  La-Zondra C. Randolph is the founder and managing attorney of
                  The Law Offices of La-Zondra C. Randolph, P.A. With a practice
                  spanning family law, personal injury, estate planning, business
                  law, and intellectual property, she provides comprehensive legal
                  counsel to individuals and businesses across Central Florida.
                </p>
                <p>
                  Admitted to the Florida Bar in 2012, Attorney Randolph brings a
                  unique combination of legal acumen and community-centered values
                  to every case. She is known for her aggressive advocacy, meticulous
                  attention to detail, and unwavering commitment to achieving optimal
                  results for her clients.
                </p>
                <p>
                  Her dedication to justice extends well beyond the courtroom. In
                  2014, she founded the Love, Compassion, and Resolve Project, Inc.
                  (The LCR Project) &mdash; a 501(c)(3) nonprofit corporation
                  dedicated to providing services to socially and economically
                  disadvantaged individuals and families in Central Florida.
                </p>
                <p>
                  Attorney Randolph handles matters in business law, civil
                  litigation, employee benefits, estate planning, family law,
                  guardianship, mediation, personal injury, and probate &mdash;
                  ensuring that her clients have access to broad legal expertise
                  under one roof.
                </p>
              </div>

              {/* LCR Project callout */}
              <div
                className="mt-10 rounded-xl p-6"
                style={{
                  background: `linear-gradient(135deg, rgba(194,120,64,0.08), rgba(194,120,64,0.03))`,
                  border: `1px solid ${C.border}`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `rgba(194,120,64,0.15)` }}
                  >
                    <Heart className="w-5 h-5" style={{ color: C.copper }} />
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-base mb-1"
                      style={{ fontFamily: ff }}
                    >
                      The LCR Project
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: C.creamFaint }}>
                      Love, Compassion, and Resolve. A 501(c)(3) nonprofit
                      founded by Attorney Randolph in 2014, dedicated to
                      providing vital services to disadvantaged individuals and
                      families throughout Central Florida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="lcr-divider" />

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="lcr-accent-bar mx-auto mb-4" />
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: C.copper, fontFamily: fs }}
            >
              The LCR Difference
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: ff }}
            >
              Why Clients{" "}
              <span className="lcr-copper-text italic">Choose Us</span>
            </h2>
            <p
              className="text-sm mt-4 max-w-xl mx-auto leading-relaxed"
              style={{ color: C.creamFaint }}
            >
              Superior attention and service through effectively understanding
              each and every case to achieve our client&rsquo;s optimal results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="lcr-card rounded-xl p-8 flex gap-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, rgba(194,120,64,0.15), rgba(194,120,64,0.05))`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: C.copper }} />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ fontFamily: ff }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: C.creamFaint }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="lcr-divider" />

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: C.bgAlt }}
      >
        <div
          className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{ background: `radial-gradient(circle, ${C.copper}, transparent 70%)` }}
        />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="lcr-accent-bar mx-auto mb-4" />
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: C.copper, fontFamily: fs }}
            >
              Client Testimonials
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: ff }}
            >
              Trusted by Those{" "}
              <span className="lcr-copper-text italic">We Serve</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="lcr-card rounded-xl p-8 flex flex-col"
              >
                <Quote
                  className="w-8 h-8 mb-5 opacity-30"
                  style={{ color: C.copper }}
                />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      style={{ color: C.copper, fill: C.copper }}
                    />
                  ))}
                </div>
                <blockquote
                  className="text-[15px] leading-relaxed italic flex-1"
                  style={{ fontFamily: ff, color: C.creamMuted }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div
                  className="mt-6 pt-5"
                  style={{ borderTop: `1px solid ${C.borderFaint}` }}
                >
                  <p className="font-semibold text-sm" style={{ fontFamily: ff }}>
                    {t.name}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: C.creamFaint, fontFamily: fs }}
                  >
                    {t.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="lcr-divider" />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            background: `radial-gradient(ellipse at center, ${C.copper}, transparent 70%)`,
          }}
        />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <div
            className="lcr-card rounded-2xl p-12 sm:p-16 lcr-copper-glow"
          >
            <Scale className="w-10 h-10 mx-auto mb-6" style={{ color: C.copper }} />
            <h2
              className="text-3xl sm:text-5xl font-bold mb-4"
              style={{ fontFamily: ff }}
            >
              Protect Your Future.{" "}
              <span className="lcr-copper-text italic">Call Today.</span>
            </h2>
            <p
              className="text-sm max-w-md mx-auto mb-10 leading-relaxed"
              style={{ color: C.creamFaint }}
            >
              Don&rsquo;t face your legal challenges alone. Attorney Randolph
              and her team are ready to provide the aggressive representation
              you need. Schedule your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:4076280054"
                className="px-8 py-4 font-bold text-lg transition-all flex items-center justify-center gap-3 hover:brightness-110 rounded"
                style={{ backgroundColor: C.copper, color: C.bg, fontFamily: fs }}
              >
                <Phone className="w-5 h-5" /> (407) 628-0054
              </a>
              <span className="text-xs" style={{ color: C.creamFaint }}>
                Free initial consultation
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="lcr-divider" />

      {/* Contact / Footer */}
      <footer
        id="contact"
        style={{ backgroundColor: C.bgAlt, borderTop: `1px solid ${C.borderFaint}` }}
      >
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <img
                src={`${IMG}/logo.png`}
                alt="LCR Law Office"
                className="h-10 w-auto object-contain mb-4 opacity-80"
              />
              <p className="text-sm leading-relaxed" style={{ color: C.creamFaint }}>
                The Law Offices of La-Zondra C. Randolph, P.A. &mdash;
                providing aggressive, personalized legal representation to
                individuals and businesses across Central Florida.
              </p>
              <div className="flex items-center gap-4 mt-5">
                <a
                  href="https://www.facebook.com/LCRLegal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:brightness-125"
                  style={{ color: C.creamFaint }}
                >
                  <Building className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/lcrlegal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:brightness-125"
                  style={{ color: C.creamFaint }}
                >
                  <BookOpen className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com/LCR_Legal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:brightness-125"
                  style={{ color: C.creamFaint }}
                >
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h4
                className="text-xs tracking-[0.2em] uppercase mb-5"
                style={{ color: C.creamFaint, fontFamily: fs, letterSpacing: "0.2em" }}
              >
                Contact
              </h4>
              <div className="space-y-4 text-sm">
                <a
                  href="tel:4076280054"
                  className="flex items-center gap-3 transition-colors hover:brightness-125"
                  style={{ color: C.creamMuted }}
                >
                  <Phone className="w-4 h-4" style={{ color: C.copper }} />
                  (407) 628-0054
                </a>
                <div className="flex items-center gap-3" style={{ color: C.creamMuted }}>
                  <Mail className="w-4 h-4" style={{ color: C.copper }} />
                  <span>Contact via website form</span>
                </div>
                <div className="flex items-start gap-3" style={{ color: C.creamMuted }}>
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: C.copper }} />
                  <span>
                    815 N. Magnolia Suite 300
                    <br />
                    Orlando, FL 32803
                  </span>
                </div>
                <div className="flex items-center gap-3" style={{ color: C.creamMuted }}>
                  <Clock className="w-4 h-4" style={{ color: C.copper }} />
                  <span>Mon&ndash;Fri &middot; 9:00 AM &ndash; 5:00 PM</span>
                </div>
              </div>
            </div>

            {/* Practice Areas Quick Links */}
            <div>
              <h4
                className="text-xs tracking-[0.2em] uppercase mb-5"
                style={{ color: C.creamFaint, fontFamily: fs, letterSpacing: "0.2em" }}
              >
                Practice Areas
              </h4>
              <div className="space-y-2.5 text-sm">
                {practiceAreas.slice(0, 6).map((area) => (
                  <a
                    key={area.title}
                    href="#practice-areas"
                    className="flex items-center gap-2 transition-colors hover:brightness-125"
                    style={{ color: C.creamMuted }}
                  >
                    <ChevronRight className="w-3 h-3" style={{ color: C.copper }} />
                    {area.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div
            className="mt-12 pt-8 text-[11px] leading-relaxed"
            style={{
              borderTop: `1px solid ${C.borderFaint}`,
              color: C.creamFaint,
              fontFamily: fs,
            }}
          >
            <p>
              The information provided on this website is offered for
              informational purposes only. It is not offered as, and does not
              constitute, legal advice. An attorney-client relationship is not
              established by visiting this site or sending email. Visitors are
              encouraged to contact a lawyer for specific advice.
            </p>
          </div>

          {/* Copyright */}
          <div
            className="mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
            style={{
              borderTop: `1px solid ${C.borderFaint}`,
              color: C.creamFaint,
              fontFamily: fs,
            }}
          >
            <p>
              &copy; {new Date().getFullYear()} The Law Offices of La-Zondra C.
              Randolph, P.A. All rights reserved.
            </p>
            <p>
              Website by{" "}
              <a
                href="/"
                className="transition-colors hover:brightness-125"
                style={{ color: C.creamMuted }}
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

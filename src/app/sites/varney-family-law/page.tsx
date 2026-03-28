import { Phone, MapPin, Mail, Clock, Scale, Shield, Heart, Users, FileText, Gavel, Quote, ChevronRight, Award, BookOpen, Star, ArrowRight, ShieldCheck, Baby, Home } from "lucide-react";

export const metadata = {
  title: "Varney Family Law | Family Law Attorney Mesa, AZ",
  description: "Experienced Mesa family law attorney Deborah Varney. Over 30 years handling divorce, custody, grandparent rights, orders of protection, and all family court matters. Call (480) 838-2400.",
};

const serif = { fontFamily: "'Georgia', 'Times New Roman', serif" } as const;
const sans = { fontFamily: "system-ui, -apple-system, sans-serif" } as const;

const IMG = "/sites/varney-family-law";

const practiceAreas = [
  { icon: Scale, title: "Divorce & Dissolution", desc: "Strategic representation through every phase of divorce proceedings. Property division, spousal maintenance, and complex asset cases handled with precision and care." },
  { icon: Users, title: "Child Custody", desc: "Advocating for parenting arrangements that serve the best interests of your children. Legal and physical custody, parenting plans, and custody modifications." },
  { icon: Heart, title: "Grandparent Rights", desc: "Protecting the vital bond between grandparents and grandchildren. Visitation rights and custody petitions under Arizona family law." },
  { icon: Shield, title: "Orders of Protection", desc: "Immediate legal protection from domestic violence and threats. Emergency filings and representation in protective order hearings." },
  { icon: Baby, title: "Paternity & Support", desc: "Establishing legal parentage and securing fair child support arrangements. Modifications, enforcement, and arrearages." },
  { icon: FileText, title: "Pre-Nuptial Agreements", desc: "Thoughtful prenuptial agreements that protect both parties. Clear, enforceable contracts drafted before marriage." },
  { icon: Gavel, title: "Juvenile & DCS Cases", desc: "Defense in juvenile court matters involving the Department of Child Safety. Termination of parental rights cases and dependency proceedings." },
  { icon: Home, title: "Relocation Cases", desc: "Navigating the legal complexities when a parent needs to move. Court approval for relocation and opposition filings." },
];

const credentials = [
  { label: "J.D.", value: "Arizona State University, 1993" },
  { label: "M.S.W.", value: "Florida State University, 1981" },
  { label: "B.A.", value: "University of Iowa, 1978" },
  { label: "Licensed", value: "State Bar of Arizona" },
];

const testimonials = [
  { name: "Sarah M.", stars: 5, text: "Deborah is very experienced when it comes to family law. She worked diligently and thoroughly during the most difficult time in my life. She doesn't sugar coat anything — she's a straight shooter who tells you exactly where you stand." },
  { name: "Michael R.", stars: 5, text: "Deborah was a great choice to help me through my divorce. She was always prepared, gave excellent advice from the start, and fought hard for a fair outcome. I've referred several people to her firm since then." },
  { name: "Jennifer T.", stars: 5, text: "From the first five minutes, it was clear Deborah knows exactly what she's talking about. She was brutally honest and direct, which is exactly what I needed. Her representation on the stand was exceptional." },
  { name: "David L.", stars: 5, text: "After ten years of fighting a custody battle, I finally found an attorney who truly understood the system. Deborah's background in social work gives her an edge that other lawyers simply don't have." },
];

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "1993", label: "Practicing Since" },
  { value: "4.5", label: "Client Rating" },
  { value: "1000+", label: "Cases Handled" },
];

const awards = [
  "Avvo Client's Choice Award",
  "Avvo Top Contributor Award",
  "Notable Peer Recognition — 2021",
  "30+ Years Arizona Bar Member",
];

export default function VarneyFamilyLaw() {
  return (
    <div className="min-h-screen" style={serif}>
      {/* Top Bar */}
      <div className="text-xs tracking-wide" style={{ backgroundColor: "#0C1B2E", color: "rgba(255,255,255,0.55)" }}>
        <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />1845 S Dobson Rd, Suite 209, Mesa, AZ 85202
            </span>
            <span className="hidden sm:inline">&middot;</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3 h-3" />Mon&ndash;Fri 8:30 AM &ndash; 5:00 PM
            </span>
          </div>
          <a href="tel:4808382400" className="flex items-center gap-1.5 font-semibold hover:text-white transition-colors" style={{ ...sans, color: "#C9A84C" }}>
            <Phone className="w-3 h-3" />(480) 838-2400
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="border-b" style={{ backgroundColor: "#122240", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={`${IMG}/logo.png`} alt="Varney Family Law" className="h-10 w-auto" />
            <div className="hidden sm:block w-px h-8" style={{ backgroundColor: "rgba(255,255,255,0.12)" }} />
            <div className="hidden sm:block">
              <div className="text-white text-xl font-bold tracking-tight" style={sans}>
                VARNEY<span style={{ color: "#C9A84C" }}> LAW</span>
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase" style={{ ...sans, color: "rgba(255,255,255,0.35)" }}>Family Law Attorney</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wide" style={{ ...sans, color: "rgba(255,255,255,0.6)" }}>
            <a href="#practice-areas" className="hover:text-white transition-colors">Practice Areas</a>
            <a href="#attorney" className="hover:text-white transition-colors">Attorney</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="tel:4808382400" className="text-white px-5 py-2.5 font-semibold transition-colors flex items-center gap-2" style={{ backgroundColor: "#C9A84C" }}>
              <Phone className="w-3.5 h-3.5" />Free Consultation
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative text-white min-h-[540px] lg:min-h-[620px] flex items-center">
        <img
          src={`${IMG}/hero.jpg`}
          alt="Family law and justice"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(12,27,46,0.92) 0%, rgba(18,34,64,0.85) 50%, rgba(12,27,46,0.80) 100%)" }} />
        <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5" style={{ backgroundColor: "#C9A84C" }} />
              <p className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ ...sans, color: "#C9A84C" }}>Mesa, Arizona Family Law</p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.12] tracking-tight mb-6" style={sans}>
              Protecting What<br />Matters Most &mdash;<br /><span style={{ color: "#C9A84C" }}>Your Family.</span>
            </h1>
            <p className="text-lg leading-relaxed max-w-lg mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
              Over 30 years of dedicated family law experience. A former social worker who understands the human side of every case. Straightforward counsel when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:4808382400" className="text-white px-8 py-4 font-bold text-lg transition-all flex items-center justify-center gap-3 hover:brightness-110" style={{ ...sans, backgroundColor: "#C9A84C" }}>
                <Phone className="w-5 h-5" />(480) 838-2400
              </a>
              <a href="#practice-areas" className="border px-8 py-4 font-semibold transition-all flex items-center justify-center gap-2 backdrop-blur-sm hover:text-white" style={{ ...sans, borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}>
                View Practice Areas<ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: "#0C1B2E" }}>
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8" style={sans}>
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold tracking-tight" style={{ color: "#C9A84C" }}>{s.value}</div>
              <div className="text-xs tracking-[0.15em] uppercase mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-20" style={{ backgroundColor: "#FAFAF7" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-0.5" style={{ backgroundColor: "#C9A84C" }} />
              <p className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ ...sans, color: "#C9A84C" }}>How We Help</p>
              <div className="w-8 h-0.5" style={{ backgroundColor: "#C9A84C" }} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ ...sans, color: "#122240" }}>Practice Areas</h2>
            <p className="mt-3 max-w-2xl mx-auto text-base" style={{ color: "rgba(18,34,64,0.5)" }}>
              Comprehensive family law representation covering every aspect of Arizona family court &mdash; from divorce to custody to protective orders.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {practiceAreas.map((area) => (
              <div key={area.title} className="bg-white border p-7 group hover:shadow-lg transition-all" style={{ borderColor: "rgba(18,34,64,0.08)" }}>
                <div className="w-12 h-12 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform" style={{ backgroundColor: "#122240" }}>
                  <area.icon className="w-6 h-6" style={{ color: "#C9A84C" }} />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ ...sans, color: "#122240" }}>{area.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(18,34,64,0.55)" }}>{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attorney Bio */}
      <section id="attorney" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo Side */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={`${IMG}/attorney.png`}
                  alt="Deborah Varney, Family Law Attorney"
                  className="w-full max-w-md mx-auto lg:mx-0"
                  style={{ filter: "grayscale(15%)" }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full max-w-md border-2" style={{ borderColor: "#C9A84C", opacity: 0.2 }} />
            </div>

            {/* Bio Side */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5" style={{ backgroundColor: "#C9A84C" }} />
                <p className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ ...sans, color: "#C9A84C" }}>Your Attorney</p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2" style={{ ...sans, color: "#122240" }}>Deborah Varney</h2>
              <p className="text-sm tracking-[0.15em] uppercase mb-6" style={{ ...sans, color: "rgba(18,34,64,0.4)" }}>Family Law Attorney &middot; Mesa, AZ</p>

              <div className="space-y-4 text-base leading-relaxed" style={{ color: "rgba(18,34,64,0.65)" }}>
                <p>
                  Deborah Varney has been practicing family law in Mesa since 1993, bringing over three decades of courtroom experience to every case. Her unique background &mdash; ten years as a licensed social worker before attending law school &mdash; gives her rare insight into the dynamics of families in crisis.
                </p>
                <p>
                  This combination of legal expertise and human understanding means Deborah doesn&apos;t just see the legal issues &mdash; she sees the people behind them. She is known for her direct, no-nonsense approach: clients trust her because she tells them exactly where they stand and fights relentlessly for the outcomes they deserve.
                </p>
                <p>
                  Deborah handles all aspects of Arizona family law including divorce, custody, grandparent rights, orders of protection, paternity, juvenile and DCS cases, prenuptial agreements, and relocation matters.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {credentials.map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <BookOpen className="w-4 h-4 mt-1 shrink-0" style={{ color: "#C9A84C" }} />
                    <div>
                      <p className="font-bold text-sm" style={{ ...sans, color: "#122240" }}>{c.label}</p>
                      <p className="text-xs" style={{ color: "rgba(18,34,64,0.45)" }}>{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Awards */}
              <div className="mt-8 flex flex-wrap gap-3">
                {awards.map((a) => (
                  <span key={a} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border" style={{ ...sans, borderColor: "rgba(201,168,76,0.3)", color: "#C9A84C", backgroundColor: "rgba(201,168,76,0.05)" }}>
                    <Award className="w-3 h-3" />{a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Work Background Callout */}
      <section className="py-16" style={{ backgroundColor: "#122240" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-10 h-10 mx-auto mb-6" style={{ color: "#C9A84C" }} />
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4" style={sans}>
              A Social Worker&apos;s Heart. A Litigator&apos;s Edge.
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Before becoming an attorney, Deborah spent a decade as a licensed social worker. That experience gives her a depth of understanding about family dynamics, child welfare, and the emotional realities of family court that most attorneys simply do not possess. When your family&apos;s future is at stake, you want someone who fights smart &mdash; and understands why it matters.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20" style={{ backgroundColor: "#FAFAF7" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-0.5" style={{ backgroundColor: "#C9A84C" }} />
              <p className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ ...sans, color: "#C9A84C" }}>Client Testimonials</p>
              <div className="w-8 h-0.5" style={{ backgroundColor: "#C9A84C" }} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ ...sans, color: "#122240" }}>What Our Clients Say</h2>
            <p className="mt-3 max-w-xl mx-auto text-base" style={{ color: "rgba(18,34,64,0.5)" }}>
              Honest reviews from real clients who trusted us with their most important family matters.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border p-8" style={{ borderColor: "rgba(18,34,64,0.06)" }}>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#C9A84C" }} />
                  ))}
                </div>
                <Quote className="w-7 h-7 mb-3" style={{ color: "rgba(201,168,76,0.25)" }} />
                <p className="text-base leading-relaxed mb-6 italic" style={{ color: "rgba(18,34,64,0.7)" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t pt-4" style={{ borderColor: "rgba(18,34,64,0.08)" }}>
                  <p className="font-bold text-sm" style={{ ...sans, color: "#122240" }}>{t.name}</p>
                  <p className="text-xs mt-0.5" style={{ ...sans, color: "rgba(18,34,64,0.35)" }}>Verified Client</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Varney */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-0.5" style={{ backgroundColor: "#C9A84C" }} />
              <p className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ ...sans, color: "#C9A84C" }}>Why Varney Law</p>
              <div className="w-8 h-0.5" style={{ backgroundColor: "#C9A84C" }} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ ...sans, color: "#122240" }}>The Varney Difference</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "30+ Years in Family Court", desc: "Practicing exclusively in Arizona family law since 1993. Deep knowledge of local judges, procedures, and case strategies that only decades of experience can provide." },
              { icon: Heart, title: "Social Work Background", desc: "A decade of social work experience before law school. Deborah understands the emotional and psychological dynamics of family cases at a level most attorneys cannot match." },
              { icon: Scale, title: "Straight-Talking Advocacy", desc: "No sugar coating, no false promises. Deborah tells you exactly where you stand, builds a clear strategy, and fights relentlessly for the best possible outcome." },
            ].map((item) => (
              <div key={item.title} className="text-center px-4">
                <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "#122240" }}>
                  <item.icon className="w-9 h-9" style={{ color: "#C9A84C" }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ ...sans, color: "#122240" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(18,34,64,0.55)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="relative py-20">
        <img
          src={`${IMG}/courthouse.jpg`}
          alt="Arizona courthouse"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(12,27,46,0.95) 0%, rgba(18,34,64,0.90) 100%)" }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5" style={{ backgroundColor: "#C9A84C" }} />
                <p className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ ...sans, color: "#C9A84C" }}>Get In Touch</p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4" style={sans}>
                Your Family Deserves an<br />Experienced Advocate.
              </h2>
              <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
                Schedule a consultation to discuss your case. Deborah will give you an honest assessment of your situation and a clear path forward.
              </p>
              <a href="tel:4808382400" className="inline-flex items-center gap-3 text-white px-10 py-4 font-bold text-lg transition-all hover:brightness-110" style={{ ...sans, backgroundColor: "#C9A84C" }}>
                <Phone className="w-5 h-5" />(480) 838-2400
              </a>
            </div>
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Office Address", value: "1845 S Dobson Rd, Suite 209\nMesa, AZ 85202" },
                { icon: Phone, label: "Phone", value: "(480) 838-2400", href: "tel:4808382400" },
                { icon: Clock, label: "Office Hours", value: "Monday \u2013 Friday\n8:30 AM \u2013 5:00 PM" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-5 border" style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.03)" }}>
                  <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(201,168,76,0.15)" }}>
                    <item.icon className="w-5 h-5" style={{ color: "#C9A84C" }} />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase mb-1" style={{ ...sans, color: "rgba(255,255,255,0.35)" }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white font-semibold text-base hover:underline" style={sans}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold text-base whitespace-pre-line" style={sans}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-16" style={{ backgroundColor: "#0C1B2E" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={`${IMG}/logo.png`} alt="Varney Family Law" className="h-8 w-auto" />
                <div className="text-lg font-bold tracking-tight" style={sans}>
                  VARNEY<span style={{ color: "#C9A84C" }}> LAW</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                The Law Offices of Deborah Varney, LLC. Providing experienced, compassionate family law representation in Mesa and throughout the East Valley since 1993.
              </p>
              <div className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Licensed &middot; State Bar of Arizona</span>
              </div>
            </div>

            {/* Practice Areas */}
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-5" style={{ ...sans, color: "rgba(255,255,255,0.3)" }}>Practice Areas</h3>
              <ul className="space-y-2.5 text-sm" style={{ ...sans, color: "rgba(255,255,255,0.45)" }}>
                {practiceAreas.slice(0, 6).map((a) => (
                  <li key={a.title} className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3" style={{ color: "rgba(201,168,76,0.4)" }} />{a.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-5" style={{ ...sans, color: "rgba(255,255,255,0.3)" }}>Contact</h3>
              <ul className="space-y-3 text-sm" style={{ ...sans, color: "rgba(255,255,255,0.5)" }}>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4" style={{ color: "rgba(201,168,76,0.6)" }} />
                  <a href="tel:4808382400" className="hover:text-white transition-colors">(480) 838-2400</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5" style={{ color: "rgba(201,168,76,0.6)" }} />
                  <span>1845 S Dobson Rd, Suite 209<br />Mesa, AZ 85202</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4" style={{ color: "rgba(201,168,76,0.6)" }} />
                  <span>Mon&ndash;Fri 8:30 AM &ndash; 5:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ ...sans, borderColor: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.25)" }}>
            <p>&copy; {new Date().getFullYear()} Law Offices of Deborah Varney, LLC. All rights reserved.</p>
            <p>Website by{" "}<a href="/" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>KPT Designs</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

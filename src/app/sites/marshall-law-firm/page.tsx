import { Phone, MapPin, Mail, Clock, Scale, Shield, Heart, Users, FileText, Gavel, Quote, ChevronRight, Award, BookOpen, Star, ArrowRight, ShieldCheck, Baby, Briefcase, Building2, HandHelping } from "lucide-react";

export const metadata = {
  title: "The Marshall Law Firm, PLLC | Family Law Attorney Houston, TX",
  description: "Impactful advocacy, trial ready. Desirée Flye Marshall provides aggressive family law representation in Houston, TX — divorce, child custody, CPS defense, adoption, and protective orders. Call 346-425-0435.",
};

const serif = { fontFamily: "'Georgia', 'Times New Roman', serif" } as const;
const sans = { fontFamily: "system-ui, -apple-system, sans-serif" } as const;

const IMG = "/sites/marshall-law-firm";

const practiceAreas = [
  { icon: Scale, title: "Divorce", desc: "Strategic and aggressive representation through contested and uncontested divorce proceedings. Property division, spousal support, and complex asset litigation." },
  { icon: Users, title: "Child Custody & Support", desc: "Relentless advocacy for custody arrangements that protect your children. Modifications, enforcement, and support calculations handled with precision." },
  { icon: Baby, title: "Adoption", desc: "Guiding families through every step of the adoption process. Stepparent adoptions, agency placements, and private adoption proceedings." },
  { icon: Shield, title: "CPS Defense", desc: "Aggressive defense against Department of Family and Protective Services investigations. Protecting parental rights when they are under attack." },
  { icon: ShieldCheck, title: "Protective Orders", desc: "Swift legal action to secure protective orders for victims of domestic violence. Emergency filings and hearing representation." },
  { icon: Gavel, title: "Family Law Appeals", desc: "Challenging unfavorable rulings with thorough appellate advocacy. Preserving your rights through the appeals process." },
  { icon: FileText, title: "Enforcement Actions", desc: "Enforcing court orders when the other party refuses to comply. Contempt motions, wage garnishments, and compliance filings." },
  { icon: Building2, title: "Probate & Estate Planning", desc: "Limited probate and estate planning services to protect your family's future. Wills, trusts, and asset protection strategies." },
];

const credentials = [
  { label: "J.D.", value: "Thurgood Marshall School of Law, 2006" },
  { label: "B.A.", value: "Clark-Atlanta University, 2003" },
  { label: "Licensed", value: "State Bar of Texas, 2006" },
  { label: "Bar No.", value: "24052160" },
];

const testimonials = [
  { name: "Marcus W.", stars: 5, text: "Desirée Marshall fought for my family when no one else would take my case. She is personable, calms your worries without sugarcoating the issues, and clearly put significant time into reviewing my records and developing a strategy. I cannot recommend her enough." },
  { name: "Tanya R.", stars: 5, text: "The entire staff at The Marshall Law Firm is very professional, thorough, timely, and helpful. They are also caring and compassionate. Desirée helped me navigate a CPS situation that felt impossible, and she got the results we needed." },
  { name: "James D.", stars: 5, text: "Desirée is the best attorney I have ever worked with. She is very patient and attentive to her clients' issues. She was always available when I needed her and obtained a court date quickly. Her dedication to my custody case made all the difference." },
  { name: "LaTasha B.", stars: 5, text: "Excellent firm — everyone is helpful, friendly, and always available when you need something. Desirée demonstrated an incredible ability to decipher complex backgrounds and develop winning strategies. She provided the highest level of service." },
];

const stats = [
  { value: "19+", label: "Years Experience" },
  { value: "2006", label: "Practicing Since" },
  { value: "5.0", label: "Client Rating" },
  { value: "Harris", label: "County & Beyond" },
];

const caseResults = [
  { outcome: "Full Custody Awarded", type: "Child Custody", desc: "Secured full custody for a father facing an aggressive opposition, with supervised visitation terms protecting the children." },
  { outcome: "CPS Case Dismissed", type: "CPS Defense", desc: "Achieved complete dismissal of DFPS allegations, reuniting a mother with her three children after a prolonged investigation." },
  { outcome: "Favorable Property Split", type: "Divorce", desc: "Negotiated a 70/30 property division in favor of our client, including the family home and retirement accounts." },
  { outcome: "Protective Order Granted", type: "Protective Orders", desc: "Obtained an emergency protective order within 24 hours, ensuring the safety of a mother and her two children." },
  { outcome: "Adoption Finalized", type: "Adoption", desc: "Successfully completed a contested stepparent adoption, overcoming objections and securing permanent legal parental rights." },
  { outcome: "Appeal Overturned", type: "Family Law Appeal", desc: "Reversed an unfavorable trial court ruling on custody modification, resulting in a new hearing and favorable outcome." },
];

// Deep crimson (#8B1A1A) + charcoal (#1A1A1A) + amber accent (#D4A853)
const C = {
  black: "#0D0D0D",
  charcoal: "#1A1A1A",
  darkGray: "#2A2A2A",
  crimson: "#8B1A1A",
  crimsonDark: "#6B1414",
  crimsonLight: "#A52525",
  amber: "#D4A853",
  amberLight: "#E8C87A",
  ivory: "#FAFAF6",
  warmWhite: "#F5F2ED",
} as const;

export default function MarshallLawFirm() {
  return (
    <div className="min-h-screen" style={serif}>
      {/* Top Bar */}
      <div className="text-xs tracking-wide" style={{ backgroundColor: C.black, color: "rgba(255,255,255,0.50)" }}>
        <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />1001 Texas Ave, Suite 240, Houston, TX 77002
            </span>
            <span className="hidden sm:inline">&middot;</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Mail className="w-3 h-3" />mlfservice@marshalllawfirmtx.com
            </span>
          </div>
          <a href="tel:3464250435" className="flex items-center gap-1.5 font-semibold hover:text-white transition-colors" style={{ ...sans, color: C.amber }}>
            <Phone className="w-3 h-3" />346-425-0435
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="border-b" style={{ backgroundColor: C.charcoal, borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={`${IMG}/logo.jpg`} alt="The Marshall Law Firm, PLLC" className="h-12 w-auto" />
            <div className="hidden sm:block w-px h-8" style={{ backgroundColor: "rgba(255,255,255,0.12)" }} />
            <div className="hidden sm:block">
              <div className="text-white text-xl font-bold tracking-tight" style={sans}>
                MARSHALL<span style={{ color: C.crimsonLight }}> LAW</span>
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase" style={{ ...sans, color: "rgba(255,255,255,0.35)" }}>Family Law &middot; Houston, TX</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wide" style={{ ...sans, color: "rgba(255,255,255,0.6)" }}>
            <a href="#practice-areas" className="hover:text-white transition-colors">Practice Areas</a>
            <a href="#attorney" className="hover:text-white transition-colors">Attorney</a>
            <a href="#results" className="hover:text-white transition-colors">Results</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="tel:3464250435" className="text-white px-5 py-2.5 font-semibold transition-colors flex items-center gap-2" style={{ backgroundColor: C.crimson }}>
              <Phone className="w-3.5 h-3.5" />Free Consultation
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative text-white min-h-[540px] lg:min-h-[620px] flex items-center">
        <img
          src={`${IMG}/about.jpg`}
          alt="The Marshall Law Firm - Impactful Advocacy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, rgba(13,13,13,0.94) 0%, rgba(139,26,26,0.75) 50%, rgba(13,13,13,0.88) 100%)` }} />
        <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5" style={{ backgroundColor: C.amber }} />
              <p className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ ...sans, color: C.amber }}>Houston, Texas Family Law</p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.12] tracking-tight mb-6" style={sans}>
              Impactful Advocacy.<br />
              <span style={{ color: C.amber }}>Trial Ready.</span>
            </h1>
            <p className="text-lg leading-relaxed max-w-lg mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
              The Marshall Law Firm is rooted in family law advocacy. Over 19 years of relentless representation in Harris County and throughout Greater Houston. When your family&apos;s future is on the line, you need a fighter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:3464250435" className="text-white px-8 py-4 font-bold text-lg transition-all flex items-center justify-center gap-3 hover:brightness-110" style={{ ...sans, backgroundColor: C.crimson }}>
                <Phone className="w-5 h-5" />346-425-0435
              </a>
              <a href="#practice-areas" className="border px-8 py-4 font-semibold transition-all flex items-center justify-center gap-2 backdrop-blur-sm hover:text-white" style={{ ...sans, borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}>
                View Practice Areas<ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: C.black }}>
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8" style={sans}>
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold tracking-tight" style={{ color: C.amber }}>{s.value}</div>
              <div className="text-xs tracking-[0.15em] uppercase mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-20" style={{ backgroundColor: C.ivory }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-0.5" style={{ backgroundColor: C.crimson }} />
              <p className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ ...sans, color: C.crimson }}>How We Fight For You</p>
              <div className="w-8 h-0.5" style={{ backgroundColor: C.crimson }} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ ...sans, color: C.charcoal }}>Practice Areas</h2>
            <p className="mt-3 max-w-2xl mx-auto text-base" style={{ color: "rgba(26,26,26,0.5)" }}>
              Comprehensive family law representation covering every facet of Texas family court &mdash; from divorce to custody to CPS defense and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {practiceAreas.map((area) => (
              <div key={area.title} className="bg-white border p-7 group hover:shadow-lg transition-all" style={{ borderColor: "rgba(26,26,26,0.08)" }}>
                <div className="w-12 h-12 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform" style={{ backgroundColor: C.charcoal }}>
                  <area.icon className="w-6 h-6" style={{ color: C.crimsonLight }} />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ ...sans, color: C.charcoal }}>{area.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(26,26,26,0.55)" }}>{area.desc}</p>
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
                  alt="Desirée Flye Marshall, Founding Attorney"
                  className="w-full max-w-md mx-auto lg:mx-0"
                  style={{ filter: "grayscale(10%)" }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full max-w-md border-2" style={{ borderColor: C.crimson, opacity: 0.2 }} />
            </div>

            {/* Bio Side */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5" style={{ backgroundColor: C.crimson }} />
                <p className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ ...sans, color: C.crimson }}>Founding Attorney</p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2" style={{ ...sans, color: C.charcoal }}>Desir&eacute;e Flye Marshall</h2>
              <p className="text-sm tracking-[0.15em] uppercase mb-6" style={{ ...sans, color: "rgba(26,26,26,0.4)" }}>Family Law Trial Attorney &middot; Houston, TX</p>

              <div className="space-y-4 text-base leading-relaxed" style={{ color: "rgba(26,26,26,0.65)" }}>
                <p>
                  Licensed to practice law since 2006, Desir&eacute;e Marshall has built a reputation for diligent and reliable representation in the most complex family law matters. After graduating from Thurgood Marshall School of Law, she worked as an Oil and Gas attorney before founding her own criminal law and family law firm in 2011.
                </p>
                <p>
                  Desir&eacute;e began her practice taking on complex family law matters that other attorneys turned away. For nearly two decades, she has regularly litigated family cases and cases involving the Department of Family and Protective Services, gaining vast knowledge of jury and bench trials as a solo practitioner in Harris County, Texas.
                </p>
                <p>
                  Known for her fierce advocacy and trial-ready approach, Desir&eacute;e serves families across Greater Houston and the surrounding counties with the aggressive, compassionate representation they deserve.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {credentials.map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <BookOpen className="w-4 h-4 mt-1 shrink-0" style={{ color: C.crimson }} />
                    <div>
                      <p className="font-bold text-sm" style={{ ...sans, color: C.charcoal }}>{c.label}</p>
                      <p className="text-xs" style={{ color: "rgba(26,26,26,0.45)" }}>{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Affiliations */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "State Bar of Texas",
                  "Fort Bend County Bar Association",
                  "Harris County Family Court",
                  "Trial-Ready Litigator",
                ].map((a) => (
                  <span key={a} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border" style={{ ...sans, borderColor: `rgba(139,26,26,0.25)`, color: C.crimson, backgroundColor: `rgba(139,26,26,0.04)` }}>
                    <Award className="w-3 h-3" />{a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advocacy Callout */}
      <section className="py-16" style={{ backgroundColor: C.charcoal }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Gavel className="w-10 h-10 mx-auto mb-6" style={{ color: C.amber }} />
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4" style={sans}>
              When Others Won&apos;t Take Your Case &mdash; We Will.
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              The Marshall Law Firm was built on taking the cases other attorneys turn away. Complex custody battles, aggressive CPS defense, high-conflict divorces &mdash; these are the cases that define our practice. We don&apos;t shy away from a fight. We prepare for trial from day one, because that&apos;s how you win.
            </p>
          </div>
        </div>
      </section>

      {/* Case Results */}
      <section id="results" className="py-20" style={{ backgroundColor: C.ivory }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-0.5" style={{ backgroundColor: C.crimson }} />
              <p className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ ...sans, color: C.crimson }}>Proven Track Record</p>
              <div className="w-8 h-0.5" style={{ backgroundColor: C.crimson }} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ ...sans, color: C.charcoal }}>Representative Results</h2>
            <p className="mt-3 max-w-xl mx-auto text-base" style={{ color: "rgba(26,26,26,0.5)" }}>
              Every case is different. These results illustrate the kind of aggressive, effective advocacy our clients receive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {caseResults.map((r) => (
              <div key={r.outcome} className="bg-white border p-7" style={{ borderColor: "rgba(26,26,26,0.08)" }}>
                <div className="text-xs tracking-[0.15em] uppercase font-semibold mb-2" style={{ ...sans, color: C.crimson }}>{r.type}</div>
                <h3 className="text-lg font-bold mb-3" style={{ ...sans, color: C.charcoal }}>{r.outcome}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(26,26,26,0.55)" }}>{r.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs mt-8 italic" style={{ color: "rgba(26,26,26,0.35)" }}>
            *Past results do not guarantee future outcomes. Every case is unique and evaluated on its own merits.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-0.5" style={{ backgroundColor: C.crimson }} />
              <p className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ ...sans, color: C.crimson }}>Client Testimonials</p>
              <div className="w-8 h-0.5" style={{ backgroundColor: C.crimson }} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ ...sans, color: C.charcoal }}>What Our Clients Say</h2>
            <p className="mt-3 max-w-xl mx-auto text-base" style={{ color: "rgba(26,26,26,0.5)" }}>
              Real words from real families we have fought for.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="border p-8" style={{ borderColor: "rgba(26,26,26,0.06)", backgroundColor: C.ivory }}>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: C.amber }} />
                  ))}
                </div>
                <Quote className="w-7 h-7 mb-3" style={{ color: "rgba(139,26,26,0.2)" }} />
                <p className="text-base leading-relaxed mb-6 italic" style={{ color: "rgba(26,26,26,0.7)" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t pt-4" style={{ borderColor: "rgba(26,26,26,0.08)" }}>
                  <p className="font-bold text-sm" style={{ ...sans, color: C.charcoal }}>{t.name}</p>
                  <p className="text-xs mt-0.5" style={{ ...sans, color: "rgba(26,26,26,0.35)" }}>Verified Client</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Marshall */}
      <section className="py-20" style={{ backgroundColor: C.warmWhite }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-0.5" style={{ backgroundColor: C.crimson }} />
              <p className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ ...sans, color: C.crimson }}>Why Marshall Law</p>
              <div className="w-8 h-0.5" style={{ backgroundColor: C.crimson }} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ ...sans, color: C.charcoal }}>The Marshall Difference</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Gavel, title: "Trial-Ready From Day One", desc: "Every case is prepared as if it is going to trial. That level of preparation drives better settlements and stronger courtroom outcomes. We do not bluff — we build cases that win." },
              { icon: HandHelping, title: "We Take the Hard Cases", desc: "Complex custody, contested CPS investigations, high-conflict divorces — these are the cases that define The Marshall Law Firm. When others say no, we say bring it." },
              { icon: Briefcase, title: "19+ Years of Tenacity", desc: "Nearly two decades of courtroom experience in Harris County and surrounding jurisdictions. Deep knowledge of local judges, procedures, and the strategies that move the needle." },
            ].map((item) => (
              <div key={item.title} className="text-center px-4">
                <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: C.charcoal }}>
                  <item.icon className="w-9 h-9" style={{ color: C.crimsonLight }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ ...sans, color: C.charcoal }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(26,26,26,0.55)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="relative py-20">
        <div className="absolute inset-0" style={{ backgroundColor: C.charcoal }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${C.black} 0%, ${C.crimsonDark} 50%, ${C.black} 100%)`, opacity: 0.6 }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5" style={{ backgroundColor: C.amber }} />
                <p className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ ...sans, color: C.amber }}>Get In Touch</p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4" style={sans}>
                Your Family Deserves a<br />Fearless Advocate.
              </h2>
              <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
                Schedule a consultation to discuss your case. Desir&eacute;e will give you an honest assessment of your situation and a clear, aggressive path forward.
              </p>
              <a href="tel:3464250435" className="inline-flex items-center gap-3 text-white px-10 py-4 font-bold text-lg transition-all hover:brightness-110" style={{ ...sans, backgroundColor: C.crimson }}>
                <Phone className="w-5 h-5" />346-425-0435
              </a>
            </div>
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Office Address", value: "1001 Texas Avenue, Suite 240\nHouston, Texas 77002" },
                { icon: Phone, label: "Phone", value: "346-425-0435", href: "tel:3464250435" },
                { icon: Phone, label: "Fax", value: "(281) 605-5813" },
                { icon: Mail, label: "Email", value: "mlfservice@marshalllawfirmtx.com", href: "mailto:mlfservice@marshalllawfirmtx.com" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-5 border" style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.03)" }}>
                  <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(139,26,26,0.3)" }}>
                    <item.icon className="w-5 h-5" style={{ color: C.amber }} />
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
      <footer className="text-white py-16" style={{ backgroundColor: C.black }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={`${IMG}/logo.jpg`} alt="The Marshall Law Firm" className="h-10 w-auto" />
                <div className="text-lg font-bold tracking-tight" style={sans}>
                  MARSHALL<span style={{ color: C.crimsonLight }}> LAW</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                The Marshall Law Firm, PLLC. Providing aggressive, trial-ready family law representation in Houston and throughout Greater Houston since 2011.
              </p>
              <div className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Licensed &middot; State Bar of Texas &middot; Bar No. 24052160</span>
              </div>
            </div>

            {/* Practice Areas */}
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-5" style={{ ...sans, color: "rgba(255,255,255,0.3)" }}>Practice Areas</h3>
              <ul className="space-y-2.5 text-sm" style={{ ...sans, color: "rgba(255,255,255,0.45)" }}>
                {practiceAreas.slice(0, 6).map((a) => (
                  <li key={a.title} className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3" style={{ color: "rgba(139,26,26,0.6)" }} />{a.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-5" style={{ ...sans, color: "rgba(255,255,255,0.3)" }}>Contact</h3>
              <ul className="space-y-3 text-sm" style={{ ...sans, color: "rgba(255,255,255,0.5)" }}>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4" style={{ color: "rgba(139,26,26,0.6)" }} />
                  <a href="tel:3464250435" className="hover:text-white transition-colors">346-425-0435</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4" style={{ color: "rgba(139,26,26,0.6)" }} />
                  <span>Fax: (281) 605-5813</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4" style={{ color: "rgba(139,26,26,0.6)" }} />
                  <a href="mailto:mlfservice@marshalllawfirmtx.com" className="hover:text-white transition-colors">mlfservice@marshalllawfirmtx.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5" style={{ color: "rgba(139,26,26,0.6)" }} />
                  <span>1001 Texas Ave, Suite 240<br />Houston, TX 77002</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ ...sans, borderColor: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.25)" }}>
            <p>&copy; {new Date().getFullYear()} The Marshall Law Firm, PLLC. All rights reserved.</p>
            <p>Website by{" "}<a href="/" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>KPT Designs</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

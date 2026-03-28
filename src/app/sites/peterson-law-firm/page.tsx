import { Phone, MapPin, Mail, Clock, Scale, Shield, Heart, Users, FileText, Gavel, Quote, Award, BookOpen, Star, ArrowRight, ChevronRight, Briefcase, HandCoins, Baby, Home, UserCheck, MessageCircle, CheckCircle } from "lucide-react";

export const metadata = {
  title: "The Peterson Law Firm | Family Law & Bankruptcy Attorney Tempe, AZ",
  description: "Personalized. Accessible. Effective. Attorney Stuart J. Peterson provides direct, one-on-one representation in family law and bankruptcy cases across Tempe, Mesa, Gilbert, Chandler, and the East Valley. Call (480) 509-7733.",
};

const serif = { fontFamily: "'Georgia', 'Times New Roman', serif" } as const;
const sans = { fontFamily: "system-ui, -apple-system, sans-serif" } as const;

const IMG = "/sites/peterson-law-firm";

/* ── Colors: Deep Teal + Warm White + Soft Gold accent ── */
const C = {
  teal: "#1A5C5C",
  tealDark: "#0F3D3D",
  tealDeep: "#0A2E2E",
  cream: "#FAF8F5",
  warmWhite: "#FEFDFB",
  gold: "#D4A843",
  goldSoft: "rgba(212,168,67,0.12)",
  text: "#2C2C2C",
  textMuted: "rgba(44,44,44,0.6)",
  textLight: "rgba(44,44,44,0.45)",
  border: "rgba(26,92,92,0.1)",
};

const practiceAreas = [
  { icon: Scale, title: "Divorce", desc: "Strategic guidance through every phase of dissolution. Property division, spousal maintenance, and contested matters resolved with care." },
  { icon: Users, title: "Child Custody", desc: "Advocating for parenting arrangements that serve your children's best interests. Legal custody, physical custody, and parenting plans." },
  { icon: Baby, title: "Child Support", desc: "Enforcement and modification of child support orders. Ensuring fair financial arrangements that protect your children's welfare." },
  { icon: Heart, title: "Spousal Support", desc: "Establishing or modifying spousal maintenance. Navigating the financial complexities of post-divorce support obligations." },
  { icon: Home, title: "Property Division", desc: "Equitable division of marital assets including real estate, retirement accounts, business interests, and complex holdings." },
  { icon: Clock, title: "Parenting Time", desc: "Establishing and modifying visitation schedules. Focused on creating stable, meaningful time with both parents." },
  { icon: Shield, title: "Domestic Violence", desc: "Protective orders and legal representation for victims of domestic violence. Safety-first approach to every case." },
  { icon: Gavel, title: "Modification of Orders", desc: "When circumstances change, court orders can be modified. Child custody, support, and parenting time adjustments." },
  { icon: FileText, title: "Pre & Post-Marital Agreements", desc: "Carefully drafted agreements that protect both parties. Clear, enforceable contracts tailored to your situation." },
  { icon: Briefcase, title: "Chapter 7 Bankruptcy", desc: "Fresh start through Chapter 7 liquidation. Eliminate qualifying debts and protect exempt assets under Arizona law." },
  { icon: HandCoins, title: "Chapter 13 Bankruptcy", desc: "Structured repayment plans that let you keep your property while catching up on debts over three to five years." },
];

const credentials = [
  { label: "J.D.", value: "Arizona State University, 2012" },
  { label: "B.S.", value: "Brigham Young University, 2008" },
  { label: "Bar", value: "State of Arizona" },
  { label: "Federal", value: "U.S. District Court, Arizona" },
];

const associations = [
  "State Bar of Arizona, Family Law Section",
  "Arizona Bankruptcy American Inn of Court (2014-Present)",
  "Arizona Consumer Bankruptcy Counsel (2015-Present)",
  "Former Committee Member, AZ Bar Unauthorized Practice of Law Committee (2014-2017)",
];

const testimonials = [
  { name: "Sonali Shah", stars: 5, text: "Mr. Peterson helped me the whole way including the appearance in court. He is very professional and also reasonable with his fees. I would recommend Mr. Stuart Peterson and his law firm to everyone." },
  { name: "Sally M.", stars: 5, text: "Stuart's legal expertise along with his reassuring manner helped me to cope, prepare for and eventually reach a discharge. He made the entire process manageable during an incredibly stressful time." },
  { name: "Desiree L.", stars: 5, text: "Stuart's excellent knowledge of the law helped me to make the best decision for my family's needs. He took the time to explain every option and never made me feel rushed or pressured." },
  { name: "Janine S.", stars: 5, text: "Thank you Stuart for helping individuals such as myself. You were a pleasure to work with. Your compassion and professionalism made all the difference during a very difficult chapter." },
  { name: "Joanne M.", stars: 5, text: "Very responsive. Stuart always returned my calls promptly and kept me informed every step of the way. Reasonable and affordable! I highly recommend The Peterson Law Firm." },
  { name: "Dawn E.", stars: 5, text: "Very professional, responsive, always quick to respond to any questions. Stuart truly cares about his clients and their outcomes. Definitely recommend him for any family law needs." },
];

const stats = [
  { value: "4.7", label: "Google Rating" },
  { value: "144+", label: "Client Reviews" },
  { value: "2012", label: "Practicing Since" },
  { value: "100%", label: "Direct Attorney Access" },
];

const awards = [
  "National Advocates Top 40",
  "American Institute of Family Law Attorneys",
  "Avvo Top Family Law Attorney",
  "Expertise.com Recognition",
];

const serviceAreas = [
  "Tempe", "Gilbert", "Mesa", "Chandler", "Queen Creek", "Phoenix", "Scottsdale", "East Valley",
];

const whyChoose = [
  { icon: UserCheck, title: "Direct Attorney Access", desc: "You work directly with Stuart on every aspect of your case. No hand-offs to paralegals or associates. Your attorney knows your name, your story, and your goals." },
  { icon: MessageCircle, title: "Personalized Attention", desc: "You are not simply another case number. This is your case and your life. Stuart treats every client's situation with the individual attention it deserves." },
  { icon: CheckCircle, title: "Bankruptcy + Family Law", desc: "Stuart's dual expertise means he understands the financial complexities that other family law attorneys miss. Complex asset cases, debt division, and fresh starts." },
];

export default function PetersonLawFirm() {
  return (
    <div className="min-h-screen" style={serif}>
      {/* Top Bar */}
      <div className="text-xs tracking-wide" style={{ backgroundColor: C.tealDeep, color: "rgba(255,255,255,0.55)" }}>
        <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />4700 S. Mill Avenue, Suite 2, Tempe, AZ 85282
            </span>
            <span className="hidden sm:inline">&middot;</span>
            <a href="mailto:speterson@thepetersonlawfirm.com" className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3 h-3" />speterson@thepetersonlawfirm.com
            </a>
          </div>
          <a href="tel:4805097733" className="flex items-center gap-1.5 font-semibold hover:text-white transition-colors" style={{ ...sans, color: C.gold }}>
            <Phone className="w-3 h-3" />(480) 509-7733
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="border-b" style={{ backgroundColor: C.tealDark, borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={`${IMG}/logo.png`} alt="The Peterson Law Firm" className="h-10 w-auto" style={{ filter: "brightness(1.1)" }} />
            <div className="hidden sm:block w-px h-8" style={{ backgroundColor: "rgba(255,255,255,0.12)" }} />
            <div className="hidden sm:block">
              <div className="text-white text-xl font-bold tracking-tight" style={sans}>
                THE PETERSON<span style={{ color: C.gold }}> LAW FIRM</span>
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase" style={{ ...sans, color: "rgba(255,255,255,0.35)" }}>Family Law &amp; Bankruptcy</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wide" style={{ ...sans, color: "rgba(255,255,255,0.6)" }}>
            <a href="#practice-areas" className="hover:text-white transition-colors">Practice Areas</a>
            <a href="#attorney" className="hover:text-white transition-colors">Attorney</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="tel:4805097733" className="text-white px-5 py-2.5 font-semibold transition-colors flex items-center gap-2 rounded-sm" style={{ backgroundColor: C.gold }}>
              <Phone className="w-3.5 h-3.5" />Free Consultation
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative text-white min-h-[540px] lg:min-h-[620px] flex items-center">
        <img
          src={`${IMG}/hero-bg.jpg`}
          alt="Professional law office"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${C.tealDeep}ee 0%, ${C.tealDark}dd 50%, ${C.tealDeep}cc 100%)` }} />
        <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5" style={{ backgroundColor: C.gold }} />
              <p className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ ...sans, color: C.gold }}>Tempe, Arizona</p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.12] tracking-tight mb-6" style={sans}>
              Personalized.<br />Accessible.<br /><span style={{ color: C.gold }}>Effective.</span>
            </h1>
            <p className="text-lg leading-relaxed max-w-lg mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
              Your case is not a number. Attorney Stuart J. Peterson provides direct, one-on-one representation in family law and bankruptcy matters across the East Valley. Every client works directly with their attorney &mdash; no hand-offs, no runaround.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:4805097733" className="text-white px-8 py-4 font-bold text-lg transition-all flex items-center justify-center gap-3 hover:brightness-110 rounded-sm" style={{ ...sans, backgroundColor: C.gold }}>
                <Phone className="w-5 h-5" />(480) 509-7733
              </a>
              <a href="#practice-areas" className="border px-8 py-4 font-semibold transition-all flex items-center justify-center gap-2 backdrop-blur-sm hover:text-white rounded-sm" style={{ ...sans, borderColor: "rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)" }}>
                View Practice Areas<ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: C.tealDeep }}>
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8" style={sans}>
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold tracking-tight" style={{ color: C.gold }}>{s.value}</div>
              <div className="text-xs tracking-[0.15em] uppercase mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-20" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-0.5" style={{ backgroundColor: C.gold }} />
              <p className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ ...sans, color: C.teal }}>How We Help</p>
              <div className="w-8 h-0.5" style={{ backgroundColor: C.gold }} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ ...sans, color: C.tealDark }}>Practice Areas</h2>
            <p className="mt-3 max-w-2xl mx-auto text-base" style={{ color: C.textMuted }}>
              Comprehensive representation in family law and consumer bankruptcy. Serving Tempe, Mesa, Gilbert, Chandler, and the greater East Valley.
            </p>
          </div>

          {/* Family Law Section */}
          <div className="mb-6">
            <h3 className="text-sm tracking-[0.2em] uppercase font-semibold mb-5 flex items-center gap-2" style={{ ...sans, color: C.teal }}>
              <Scale className="w-4 h-4" /> Family Law
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {practiceAreas.slice(0, 9).map((area) => (
                <div key={area.title} className="bg-white border p-7 group hover:shadow-lg transition-all rounded-sm" style={{ borderColor: C.border }}>
                  <div className="w-11 h-11 flex items-center justify-center mb-5 rounded-sm group-hover:scale-105 transition-transform" style={{ backgroundColor: C.teal }}>
                    <area.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-base font-bold mb-2" style={{ ...sans, color: C.tealDark }}>{area.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: C.textMuted }}>{area.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bankruptcy Section */}
          <div className="mt-10">
            <h3 className="text-sm tracking-[0.2em] uppercase font-semibold mb-5 flex items-center gap-2" style={{ ...sans, color: C.teal }}>
              <Briefcase className="w-4 h-4" /> Bankruptcy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {practiceAreas.slice(9).map((area) => (
                <div key={area.title} className="bg-white border p-7 group hover:shadow-lg transition-all rounded-sm" style={{ borderColor: C.border }}>
                  <div className="w-11 h-11 flex items-center justify-center mb-5 rounded-sm group-hover:scale-105 transition-transform" style={{ backgroundColor: C.teal }}>
                    <area.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-base font-bold mb-2" style={{ ...sans, color: C.tealDark }}>{area.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: C.textMuted }}>{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ backgroundColor: C.tealDark }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-0.5" style={{ backgroundColor: C.gold }} />
              <p className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ ...sans, color: C.gold }}>The Peterson Difference</p>
              <div className="w-8 h-0.5" style={{ backgroundColor: C.gold }} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white" style={sans}>Why Clients Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChoose.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "rgba(212,168,67,0.15)" }}>
                  <item.icon className="w-7 h-7" style={{ color: C.gold }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3" style={sans}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attorney Bio */}
      <section id="attorney" className="py-20" style={{ backgroundColor: C.warmWhite }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Photo Side */}
            <div className="lg:col-span-2 relative">
              <div className="relative z-10">
                <img
                  src={`${IMG}/share-thumbnail.jpg`}
                  alt="Attorney Stuart J. Peterson"
                  className="w-full max-w-sm mx-auto lg:mx-0 rounded-sm shadow-lg"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full max-w-sm border-2 rounded-sm" style={{ borderColor: C.gold, opacity: 0.2 }} />
              {/* Awards below photo */}
              <div className="mt-10 flex flex-wrap gap-2">
                {awards.map((a) => (
                  <span key={a} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border rounded-sm" style={{ ...sans, borderColor: "rgba(26,92,92,0.2)", color: C.teal, backgroundColor: "rgba(26,92,92,0.04)" }}>
                    <Award className="w-3 h-3" />{a}
                  </span>
                ))}
              </div>
            </div>

            {/* Bio Side */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5" style={{ backgroundColor: C.gold }} />
                <p className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ ...sans, color: C.teal }}>Your Attorney</p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2" style={{ ...sans, color: C.tealDark }}>Stuart J. Peterson</h2>
              <p className="text-sm tracking-[0.15em] uppercase mb-6" style={{ ...sans, color: C.textLight }}>Principal Attorney &middot; Tempe, AZ</p>

              <div className="space-y-4 text-base leading-relaxed" style={{ color: C.textMuted }}>
                <p>
                  Stuart J. Peterson founded The Peterson Law Firm with a clear vision: to create an attorney-client relationship where clients are never intimidated to ask questions or feel bullied into a position. Every client meets directly with Stuart to discuss their case and goals &mdash; because your case deserves your attorney&apos;s undivided attention.
                </p>
                <p>
                  Stuart&apos;s first position out of law school focused on consumer bankruptcy, where he spearheaded hundreds of cases within his first year of practice. This deep bankruptcy expertise gives him a unique advantage in family law matters involving complex financial issues &mdash; high-asset divorces, business valuations, retirement account divisions, and debt allocation.
                </p>
                <p>
                  Today, Stuart&apos;s dual practice in family law and bankruptcy allows him to see the complete financial picture in every case. Whether navigating a contested divorce, establishing custody arrangements, or helping a family achieve a fresh start through bankruptcy, Stuart brings both legal acumen and genuine compassion to the work.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {credentials.map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <BookOpen className="w-4 h-4 mt-1 shrink-0" style={{ color: C.teal }} />
                    <div>
                      <p className="font-bold text-sm" style={{ ...sans, color: C.tealDark }}>{c.label}</p>
                      <p className="text-xs" style={{ color: C.textLight }}>{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Professional Associations */}
              <div className="mt-8">
                <h3 className="text-sm font-bold mb-3" style={{ ...sans, color: C.tealDark }}>Professional Associations</h3>
                <ul className="space-y-2">
                  {associations.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm" style={{ color: C.textMuted }}>
                      <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: C.teal }} />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-16 relative">
        <img
          src={`${IMG}/why-choose-bg.jpg`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${C.tealDeep}f0 0%, ${C.tealDark}e8 100%)` }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-10 h-10 mx-auto mb-6" style={{ color: C.gold, opacity: 0.5 }} />
            <blockquote className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 leading-snug" style={sans}>
              You are not simply another case number. This is your case and your life.
            </blockquote>
            <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Stuart Peterson believes every client deserves an attorney who listens, explains, and fights for the best possible outcome &mdash; with compassion and without judgment.
            </p>
            <div className="mt-8">
              <a href="tel:4805097733" className="inline-flex items-center gap-3 text-white px-8 py-4 font-bold text-lg transition-all hover:brightness-110 rounded-sm" style={{ ...sans, backgroundColor: C.gold }}>
                <Phone className="w-5 h-5" />Schedule Your Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-0.5" style={{ backgroundColor: C.gold }} />
              <p className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ ...sans, color: C.teal }}>Client Reviews</p>
              <div className="w-8 h-0.5" style={{ backgroundColor: C.gold }} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ ...sans, color: C.tealDark }}>What Our Clients Say</h2>
            <p className="mt-3 max-w-xl mx-auto text-base" style={{ color: C.textMuted }}>
              4.7 stars from 144+ Google reviews. Real feedback from real clients who trusted us with their cases.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border p-7 rounded-sm hover:shadow-md transition-shadow" style={{ borderColor: C.border }}>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: C.gold }} />
                  ))}
                </div>
                <Quote className="w-6 h-6 mb-3" style={{ color: C.teal, opacity: 0.2 }} />
                <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "rgba(44,44,44,0.7)" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t pt-4" style={{ borderColor: C.border }}>
                  <p className="font-bold text-sm" style={{ ...sans, color: C.tealDark }}>{t.name}</p>
                  <p className="text-xs mt-0.5" style={{ ...sans, color: C.textLight }}>Verified Client</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-6" style={{ ...sans, color: C.tealDark }}>Serving the East Valley</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span key={area} className="px-4 py-2 text-sm font-medium border rounded-sm" style={{ ...sans, borderColor: C.border, color: C.teal, backgroundColor: "rgba(26,92,92,0.03)" }}>
                <MapPin className="w-3 h-3 inline mr-1.5" style={{ color: C.gold }} />{area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-20" style={{ backgroundColor: C.tealDark }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: CTA */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5" style={{ backgroundColor: C.gold }} />
                <p className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ ...sans, color: C.gold }}>Get Started Today</p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4" style={sans}>
                Free Case Evaluation
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
                Whether you are facing a divorce, custody dispute, or considering bankruptcy, Stuart Peterson is ready to listen and help you understand your options. Contact us today for a free, confidential consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:4805097733" className="text-white px-8 py-4 font-bold text-lg transition-all flex items-center justify-center gap-3 hover:brightness-110 rounded-sm" style={{ ...sans, backgroundColor: C.gold }}>
                  <Phone className="w-5 h-5" />(480) 509-7733
                </a>
                <a href="tel:4805223844" className="border px-8 py-4 font-semibold transition-all flex items-center justify-center gap-2 hover:text-white rounded-sm" style={{ ...sans, borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.65)" }}>
                  <Phone className="w-4 h-4" />(480) 522-3844
                </a>
              </div>
            </div>

            {/* Right: Contact Info */}
            <div className="space-y-6">
              <div className="border rounded-sm p-6" style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.03)" }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(212,168,67,0.15)" }}>
                    <MapPin className="w-5 h-5" style={{ color: C.gold }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm mb-1" style={sans}>Office Location</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                      4700 S. Mill Avenue, Suite 2<br />Tempe, AZ 85282
                    </p>
                  </div>
                </div>
              </div>
              <div className="border rounded-sm p-6" style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.03)" }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(212,168,67,0.15)" }}>
                    <Phone className="w-5 h-5" style={{ color: C.gold }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm mb-1" style={sans}>Phone</h3>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                      <a href="tel:4805097733" className="hover:text-white transition-colors">(480) 509-7733</a>
                      <br />
                      <a href="tel:4805223844" className="hover:text-white transition-colors">(480) 522-3844</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="border rounded-sm p-6" style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.03)" }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(212,168,67,0.15)" }}>
                    <Mail className="w-5 h-5" style={{ color: C.gold }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm mb-1" style={sans}>Email</h3>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                      <a href="mailto:speterson@thepetersonlawfirm.com" className="hover:text-white transition-colors">speterson@thepetersonlawfirm.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: C.tealDeep }}>
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src={`${IMG}/logo.png`} alt="The Peterson Law Firm" className="h-8 w-auto" style={{ filter: "brightness(1.1)" }} />
              <div className="w-px h-6" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
              <span className="text-sm font-semibold text-white" style={sans}>The Peterson Law Firm</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-xs" style={{ ...sans, color: "rgba(255,255,255,0.35)" }}>
              <span>&copy; {new Date().getFullYear()} The Peterson Law Firm. All rights reserved.</span>
              <span className="hidden sm:inline">&middot;</span>
              <span>
                Website by{" "}
                <a href="/" className="underline hover:text-white transition-colors" style={{ color: C.gold }}>
                  KPT Designs
                </a>
              </span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t text-center" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <p className="text-xs" style={{ ...sans, color: "rgba(255,255,255,0.25)" }}>
              The information on this website is for general informational purposes only. Nothing on this site should be construed as legal advice or as creating an attorney-client relationship. Contact the firm for a consultation regarding your specific legal matter.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

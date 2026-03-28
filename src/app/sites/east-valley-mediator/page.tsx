import { Phone, Mail, MapPin, Clock, Scale, Handshake, Shield, Building2, Home, GraduationCap, Users, Heart, Star, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "East Valley Mediator | Divorce & Business Mediation | Gilbert, AZ",
  description:
    "Professional mediation services in Gilbert, Arizona. Specializing in high-conflict divorce, business disputes, and family mediation. 30+ years experience. Free consultation. Call (480) 788-4187.",
};

const IMG = "/sites/east-valley-mediator";

const services = [
  {
    icon: "Scale",
    title: "Divorce Mediation",
    description:
      "Navigate high-conflict divorce with experienced guidance. We help both parties reach fair agreements on custody, support, and asset division — without the courtroom.",
  },
  {
    icon: "Building2",
    title: "Business Disputes",
    description:
      "Resolve contractual disagreements, partnership conflicts, and small business lockout situations through structured negotiation that preserves professional relationships.",
  },
  {
    icon: "Home",
    title: "Real Estate & Tenant Disputes",
    description:
      "Leverage decades of real estate expertise to mediate property disputes, tenant issues, easement negotiations, and commercial lease conflicts.",
  },
  {
    icon: "Users",
    title: "Post-Divorce Modifications",
    description:
      "Life changes after divorce. We help families renegotiate custody arrangements, child support, visitation schedules, and other post-decree matters.",
  },
  {
    icon: "GraduationCap",
    title: "Education Advocacy",
    description:
      "Protect your child's educational rights. We advocate for special education needs including 504 plans, IEPs, gifted services, and school placement decisions.",
  },
  {
    icon: "Heart",
    title: "Family & Post-Adoption",
    description:
      "Sensitive mediation for post-adoption disputes, special needs family matters, and complex family situations requiring compassionate, informed guidance.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Free Consultation",
    description:
      "Schedule a no-obligation conversation to discuss your situation. We listen carefully to understand the full picture before recommending a path forward.",
  },
  {
    step: "02",
    title: "Case Assessment",
    description:
      "We evaluate the specifics of your dispute, identify the key issues, and create a tailored mediation plan designed to reach resolution efficiently.",
  },
  {
    step: "03",
    title: "Mediation Sessions",
    description:
      "Guided discussions in a neutral, supportive environment where both parties work together to find common ground and craft their own agreement.",
  },
  {
    step: "04",
    title: "Resolution & Agreement",
    description:
      "Once both parties reach consensus, we document the agreement in a clear, comprehensive format ready for legal review and implementation.",
  },
];

const testimonials = [
  {
    quote:
      "PK and her staff were top notch. I'm truly thankful for how she was able to walk us through this very stressful time in our lives. If you need any type of mediation, please use PK.",
    name: "Satisfied Client",
    detail: "Divorce Mediation",
  },
  {
    quote:
      "I just want to take the opportunity to thank PK and Nikki for all of their help. They were very responsive, thorough and helped work through the situation in a professional way. They made the process much easier than I thought it would be.",
    name: "Grateful Client",
    detail: "Business Dispute Resolution",
  },
  {
    quote:
      "All you need to do is shake PK's hand and you'll instantly feel comfortable. She is warm and caring and a wonderful listener. She truly understands what you're going through.",
    name: "Family Client",
    detail: "Family Mediation",
  },
  {
    quote:
      "PK provided a wonderful mediation service during my divorce. She was relatable and understanding of our situation. I would highly recommend East Valley Mediator to anyone going through a difficult time.",
    name: "Divorce Client",
    detail: "Divorce Mediation",
  },
];

const credentials = [
  "Professional Mediation Certificate — Lakewood University",
  "Paralegal Diploma — Lakewood University",
  "Mediation Advisory Board Member — Lakewood University",
  "30+ Years Contract Negotiation Experience",
  "12+ Years High-Conflict Mediation",
  "Bilingual — Fluent in English & Spanish",
  "Founder, Laloboy Foundation",
  "Legislative Advocate — Arizona HB2459",
];

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "80%", label: "Success Rate" },
  { value: "1000+", label: "Cases Resolved" },
  { value: "Free", label: "Consultation" },
];

const iconMap: Record<string, typeof Phone> = {
  Scale,
  Building2,
  Home,
  Users,
  GraduationCap,
  Heart,
};

const ff = "'DM Serif Display', serif";
const fs = "'Inter', sans-serif";

export default function EastValleyMediator() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]" style={{ fontFamily: fs }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap');
            .evm-accent { color: #8B7355; }
            .evm-accent-bg { background-color: #8B7355; }
            .evm-olive { color: #5C6B54; }
            .evm-olive-bg { background-color: #5C6B54; }
            .evm-warm { background: linear-gradient(135deg, #F5F0E8, #EDE8DD); }
            .evm-card { background: white; border: 1px solid #E8E2D8; transition: all 0.3s ease; }
            .evm-card:hover { border-color: #C4B99A; box-shadow: 0 8px 32px rgba(139, 115, 85, 0.08); transform: translateY(-2px); }
            .evm-divider { background: linear-gradient(90deg, transparent, #C4B99A, transparent); height: 1px; }
            .evm-gradient-text { background: linear-gradient(135deg, #5C6B54, #8B7355); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
            .evm-hero-overlay { background: linear-gradient(135deg, rgba(92, 107, 84, 0.92), rgba(70, 82, 64, 0.88)); }
            .evm-section-alt { background: #F0EBE3; }
            .evm-process-line { position: absolute; left: 24px; top: 48px; bottom: 0; width: 2px; background: linear-gradient(to bottom, #C4B99A, transparent); }
          `,
        }}
      />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#FAF8F5]/90 border-b border-[#E8E2D8]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={`${IMG}/logo.png`} alt="East Valley Mediator" className="h-10 w-auto" />
            <div>
              <span
                className="text-[#2C2C2C] text-sm font-semibold tracking-wide block leading-tight"
                style={{ fontFamily: ff }}
              >
                East Valley Mediator
              </span>
              <span className="text-[#8B7355] text-[10px] tracking-widest uppercase" style={{ letterSpacing: "0.15em" }}>
                Gilbert, Arizona
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-5 text-xs tracking-widest uppercase text-[#8B7355]" style={{ letterSpacing: "0.1em" }}>
              {[["Services","services"],["Process","process"],["About","about"],["Testimonials","testimonials"]].map(([label, id]) => (
                <a key={id} href={`#${id}`} className="hover:text-[#5C6B54] transition-colors">{label}</a>
              ))}
            </nav>
            <a
              href="tel:+14807884187"
              className="hidden sm:flex md:hidden items-center gap-2 text-[#5C6B54] hover:text-[#8B7355] transition-colors text-sm font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              (480) 788-4187
            </a>
            <a
              href="tel:+14807884187"
              className="evm-olive-bg text-white px-5 py-2 text-xs font-semibold tracking-widest uppercase rounded-full transition-all hover:opacity-90 hover:shadow-lg hover:shadow-[#5C6B54]/15"
              style={{ letterSpacing: "0.1em" }}
            >
              Free Consult
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 evm-hero-overlay" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
              <Handshake className="w-4 h-4 text-[#D4C5A9]" />
              <span className="text-white/70 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>
                Professional Dispute Resolution
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-normal leading-[1.05] text-white mb-6"
              style={{ fontFamily: ff }}
            >
              Finding Common
              <br />
              Ground,{" "}
              <span className="italic text-[#D4C5A9]">Together</span>
            </h1>

            <p className="text-white/60 text-base sm:text-lg max-w-lg mb-10 leading-relaxed">
              Guiding families and businesses through their most difficult disputes with 30+ years of
              negotiation expertise. Because resolution should not require a courtroom.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="tel:+14807884187"
                className="bg-[#D4C5A9] text-[#2C2C2C] px-8 py-4 text-sm font-semibold tracking-widest uppercase rounded-full transition-all hover:bg-[#C4B599] flex items-center gap-2"
                style={{ letterSpacing: "0.12em" }}
              >
                <Phone className="w-4 h-4" /> Free Consultation
              </a>
              <a
                href="#services"
                className="border border-white/25 hover:border-[#D4C5A9]/50 text-white/80 hover:text-white px-8 py-4 text-sm tracking-widest uppercase rounded-full transition-all flex items-center gap-2"
                style={{ letterSpacing: "0.12em" }}
              >
                Our Services <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden max-w-2xl">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/5 backdrop-blur-sm px-6 py-5 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#D4C5A9]" style={{ fontFamily: ff }}>
                  {s.value}
                </div>
                <div className="text-[10px] tracking-widest uppercase text-white/40 mt-1" style={{ letterSpacing: "0.15em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="evm-accent text-xs tracking-widest uppercase mb-4"
              style={{ letterSpacing: "0.3em" }}
            >
              Areas of Practice
            </p>
            <h2 className="text-3xl sm:text-5xl text-[#2C2C2C]" style={{ fontFamily: ff }}>
              Mediation Services <span className="italic evm-gradient-text">That Resolve</span>
            </h2>
            <p className="text-[#6B6B6B] text-sm mt-4 max-w-lg mx-auto leading-relaxed">
              From high-conflict divorce to complex business disputes, PK Jordan and her team bring
              decades of hands-on negotiation experience to every case.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Scale;
              return (
                <div key={service.title} className="evm-card rounded-2xl p-8 group">
                  <div className="w-12 h-12 rounded-xl bg-[#5C6B54]/8 flex items-center justify-center mb-5 group-hover:bg-[#5C6B54]/12 transition-colors">
                    <Icon className="w-5 h-5 text-[#5C6B54]" />
                  </div>
                  <h3
                    className="text-xl text-[#2C2C2C] mb-3"
                    style={{ fontFamily: ff }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[#7A7A7A] text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#8B7355] text-sm font-medium">
              Se habla espa&ntilde;ol &middot; Bilingual mediation services available
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="evm-divider" />

      {/* The Process */}
      <section id="process" className="py-24 evm-section-alt">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p
                className="evm-accent text-xs tracking-widest uppercase mb-4"
                style={{ letterSpacing: "0.3em" }}
              >
                How It Works
              </p>
              <h2
                className="text-3xl sm:text-5xl text-[#2C2C2C] leading-tight mb-6"
                style={{ fontFamily: ff }}
              >
                A Clear Path to{" "}
                <span className="italic evm-gradient-text">Resolution</span>
              </h2>
              <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4">
                Mediation puts you in control. Instead of leaving critical life decisions to a judge,
                both parties work together to craft an agreement that works for everyone — with an
                80% success rate and a fraction of the cost of litigation.
              </p>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                PK listens to what a client is not saying. That attention to detail, combined with
                three decades of negotiation experience, is why families and businesses across the
                East Valley trust her to guide them through their most difficult moments.
              </p>
            </div>

            <div className="space-y-0">
              {processSteps.map((step, i) => (
                <div key={step.step} className="relative pl-16 pb-10">
                  {i < processSteps.length - 1 && <div className="evm-process-line" />}
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-[#5C6B54] flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{step.step}</span>
                  </div>
                  <h3
                    className="text-lg text-[#2C2C2C] mb-2 pt-2"
                    style={{ fontFamily: ff }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#7A7A7A] text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="evm-divider" />

      {/* About / Credentials */}
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-[#5C6B54]/10">
                <img
                  src={`${IMG}/pk-jordan-lakewood.jpg`}
                  alt="PK Jordan — Founder of East Valley Mediator"
                  className="w-full h-[480px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/60 via-transparent to-transparent rounded-3xl" />
              </div>
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl border border-[#E8E2D8] rounded-2xl p-5 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full evm-olive-bg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[#2C2C2C] font-semibold text-sm" style={{ fontFamily: ff }}>
                      Paolla &ldquo;PK&rdquo; Jordan
                    </p>
                    <p className="text-[#8B7355] text-xs">Founder &amp; Lead Mediator</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div>
              <p
                className="evm-accent text-xs tracking-widest uppercase mb-4"
                style={{ letterSpacing: "0.3em" }}
              >
                Your Mediator
              </p>
              <h2
                className="text-3xl sm:text-5xl text-[#2C2C2C] leading-tight mb-6"
                style={{ fontFamily: ff }}
              >
                Meet PK{" "}
                <span className="italic evm-gradient-text">Jordan</span>
              </h2>
              <div className="space-y-4 text-[#6B6B6B] text-sm leading-relaxed">
                <p>
                  Paolla &ldquo;PK&rdquo; Jordan has been a business owner and contract negotiator
                  for over 30 years across Arizona and Oregon. She founded East Valley Mediator in
                  2010 and has spent more than 12 years specializing in high-conflict divorce and
                  business disputes.
                </p>
                <p>
                  It was PK&rsquo;s own divorce in 2005 that ignited her passion for mediation. As a
                  pro se litigant for five years, she experienced firsthand the obstacles families
                  face when navigating the legal system. Her landmark case, <em>Jordan v. Rea</em>,
                  reached the Arizona Court of Appeals and set a precedent that continues to protect
                  families across the state today.
                </p>
                <p>
                  Beyond mediation, PK serves on the Mediation Advisory Board at Lakewood University,
                  coaches new mediators nationwide through Your Mediator Coach, and founded the
                  Laloboy Foundation to provide free counseling stipends to families in need.
                </p>
              </div>

              {/* Credentials grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {credentials.map((c) => (
                  <div key={c} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#5C6B54] mt-0.5 flex-shrink-0" />
                    <span className="text-[#5C5C5C] text-xs leading-relaxed">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="evm-divider" />

      {/* Testimonials */}
      <section id="testimonials" className="py-24 evm-section-alt">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="evm-accent text-xs tracking-widest uppercase mb-4"
              style={{ letterSpacing: "0.3em" }}
            >
              Client Stories
            </p>
            <h2 className="text-3xl sm:text-5xl text-[#2C2C2C]" style={{ fontFamily: ff }}>
              Trusted by Families{" "}
              <span className="italic evm-gradient-text">&amp; Businesses</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="evm-card rounded-2xl p-8 flex flex-col">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#8B7355] fill-[#8B7355]" />
                  ))}
                </div>
                <blockquote
                  className="text-[#4A4A4A] text-sm leading-relaxed italic flex-1"
                  style={{ fontFamily: ff }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 pt-5 border-t border-[#E8E2D8]">
                  <p className="text-[#2C2C2C] font-semibold text-sm">{t.name}</p>
                  <p className="text-[#8B7355] text-xs mt-0.5">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="evm-divider" />

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 evm-hero-overlay" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <Handshake className="w-12 h-12 text-[#D4C5A9] mx-auto mb-6" />
          <h2
            className="text-3xl sm:text-5xl text-white mb-4"
            style={{ fontFamily: ff }}
          >
            Ready to Find{" "}
            <span className="italic text-[#D4C5A9]">Common Ground?</span>
          </h2>
          <p className="text-white/60 text-sm max-w-md mx-auto mb-10 leading-relaxed">
            Your first consultation is free. Call PK today to discuss your situation and learn how
            mediation can help you move forward — with less cost, less conflict, and more control.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+14807884187"
              className="bg-[#D4C5A9] text-[#2C2C2C] px-8 py-4 text-sm font-semibold tracking-widest uppercase rounded-full transition-all hover:bg-[#C4B599] flex items-center gap-2"
              style={{ letterSpacing: "0.12em" }}
            >
              <Phone className="w-4 h-4" /> (480) 788-4187
            </a>
            <a
              href="mailto:evmpkjordan@gmail.com"
              className="border border-white/25 hover:border-[#D4C5A9]/50 text-white/80 hover:text-white px-8 py-4 text-sm tracking-widest uppercase rounded-full transition-all flex items-center gap-2"
              style={{ letterSpacing: "0.12em" }}
            >
              <Mail className="w-4 h-4" /> Email PK
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] border-t border-[#3A3A3A]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={`${IMG}/logo.png`} alt="East Valley Mediator" className="h-10 w-auto brightness-200" />
                <div>
                  <h3 className="text-lg font-semibold text-white" style={{ fontFamily: ff }}>
                    East Valley Mediator
                  </h3>
                  <p className="text-white/30 text-xs">Dispute Resolution &middot; Gilbert, AZ</p>
                </div>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mt-4">
                Guiding families and businesses through divorce, post-divorce, and commercial
                disputes with over 30 years of professional negotiation experience.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-xs tracking-widest uppercase text-white/30 mb-5"
                style={{ letterSpacing: "0.2em" }}
              >
                Contact
              </h4>
              <div className="space-y-3 text-sm">
                <a
                  href="tel:+14807884187"
                  className="flex items-center gap-3 text-white/50 hover:text-[#D4C5A9] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#5C6B54]" />
                  (480) 788-4187
                </a>
                <a
                  href="mailto:evmpkjordan@gmail.com"
                  className="flex items-center gap-3 text-white/50 hover:text-[#D4C5A9] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#5C6B54]" />
                  evmpkjordan@gmail.com
                </a>
                <div className="flex items-start gap-3 text-white/50">
                  <MapPin className="w-4 h-4 text-[#5C6B54] mt-0.5" />
                  <span>
                    428 S Gilbert Rd, Bldg 3
                    <br />
                    Ste 109A, Gilbert, AZ 85296
                  </span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4
                className="text-xs tracking-widest uppercase text-white/30 mb-5"
                style={{ letterSpacing: "0.2em" }}
              >
                Office Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-white/50">Monday &ndash; Friday</span>
                  <span className="flex items-center gap-2 text-[#D4C5A9]">
                    <Clock className="w-3.5 h-3.5" />
                    9:00 AM &ndash; 5:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/50">Saturday &ndash; Sunday</span>
                  <span className="text-white/30">Closed</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-[#D4C5A9] text-xs font-semibold mb-1">Free Consultation</p>
                <p className="text-white/40 text-xs leading-relaxed">
                  Call or email to schedule your no-obligation consultation. Se habla espa&ntilde;ol.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/20">
            <p>&copy; {new Date().getFullYear()} East Valley Mediator. All rights reserved.</p>
            <p>
              Website by{" "}
              <a href="/" className="text-white/30 hover:text-[#D4C5A9] transition-colors">
                KPT Designs
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

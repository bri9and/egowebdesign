import { Phone, MapPin, Mail, Clock, Heart, Shield, Brain, Users, Anchor, Waves, MessageCircle, ChevronRight, Leaf, Sun } from "lucide-react";

export const metadata = {
  title: "The Harbor Counseling | Therapy & Counseling in Tempe, AZ",
  description:
    "Licensed counseling in Tempe, Arizona. Individual, couples, and family therapy for anxiety, depression, trauma, and more. Sliding scale available. Call (602) 567-7895.",
};

const IMG = "/sites/harbor-counseling";

/* ─── Colors ─── */
const C = {
  teal:     "#4A7C7E",
  tealDk:   "#2E5A5C",
  tealDeep: "#1D3E40",
  sage:     "#7A9E7E",
  sageLt:   "#A8C5AB",
  sand:     "#F5EDE3",
  sandLt:   "#FAF6F0",
  warmWht:  "#FDFBF8",
  ocean:    "#5B9EA6",
  cream:    "#EDE5D8",
  bark:     "#8B7355",
  text:     "#2C3E3F",
  textMd:   "#4A6163",
  textLt:   "#6B8A8D",
};

/* ─── Clinicians ─── */
const clinicians = [
  {
    name: "Benjamin Meyer",
    credential: "LPC",
    title: "Licensed Professional Counselor — Owner",
    photo: `${IMG}/ben.jpg`,
    bio: "Benjamin founded The Harbor Counseling with a mission to empower individuals and couples through evidence-based, trauma-informed care. With deep roots in philosophy, Freudian psychodynamic psychotherapy, and Lacanian psychoanalysis, he brings a uniquely thoughtful approach to every session.",
    specialties: ["Anxiety & Depression", "Trauma & PTSD", "Relationship Conflict", "Couples Therapy"],
    certifications: ["EMDR Trained", "C-PD Certified", "Gottman Level 1", "DBT Trained", "Resiliency Training"],
    hours: "Mon–Fri 10am–6pm · Mon & Wed 7–9pm · Sat Telehealth",
    accepting: true,
  },
  {
    name: "Lisa Thompson",
    credential: "LAC",
    title: "Licensed Associate Counselor",
    photo: `${IMG}/lisa.jpg`,
    bio: "Lisa brings extensive behavioral health experience working with clients from diverse backgrounds and life circumstances. Using a strength-based, person-centered approach, she creates a supportive and nonjudgmental environment where clients feel safe to explore and grow.",
    specialties: ["CBT & DBT", "EMDR", "Motivational Interviewing", "Adults 18+"],
    certifications: ["In-network: Aetna, Cigna, BCBS"],
    hours: "Tue & Thu 6–8pm · Sat by Appointment",
    accepting: true,
  },
  {
    name: "Kara Brei",
    credential: "LAC",
    title: "Licensed Associate Counselor",
    photo: `${IMG}/kara.jpg`,
    bio: "Kara has been practicing since 2008, with experience spanning youth behavioral interventions, luxury rehab settings, and intensive outpatient programs. She is LGBTQ-affirming, neurodivergent-affirming, and brings a trauma-informed, existential lens to her work.",
    specialties: ["Substance Use & Addiction", "Codependency & Attachment", "LGBTQIA+ Affirming", "Narrative & Expressive Arts"],
    certifications: ["BA Interdisciplinary Performance Art (ASU)", "MA Counseling (NAU)"],
    hours: "Not currently accepting new clients",
    accepting: false,
  },
];

/* ─── Services ─── */
const specialties = [
  { icon: Brain, label: "Anxiety & Depression" },
  { icon: Heart, label: "Trauma & PTSD" },
  { icon: Users, label: "Couples & Family Therapy" },
  { icon: Shield, label: "EMDR Therapy" },
  { icon: Leaf, label: "DBT & CBT" },
  { icon: MessageCircle, label: "Gottman Method" },
  { icon: Sun, label: "Addiction & Codependency" },
  { icon: Waves, label: "LGBTQIA+ Affirming" },
];

const issuesTreated = [
  "Anxiety", "Depression", "PTSD", "OCD", "Bipolar Disorder",
  "Borderline Personality Disorder", "Eating Disorders", "Domestic Abuse",
  "Narcissistic Abuse", "Codependency", "Addiction", "Insomnia",
  "Anger Management", "Self-Esteem", "Social Anxiety", "Relationship Conflict",
  "Men\u2019s Issues", "LGBTQ+ Concerns",
];

/* ─── Rates ─── */
const rates = [
  { type: "Initial Assessment", price: "$185", note: "Individuals, couples, or families" },
  { type: "Individual Session", price: "$155", note: "Ongoing 50-minute sessions" },
  { type: "Couples / Family Session", price: "$165", note: "Ongoing 50-minute sessions" },
  { type: "Sliding Scale", price: "$100", note: "Income-based — see below" },
];

/* ─── Insurance ─── */
const insurance = [
  "United (Optum)", "Anthem", "Blue Cross Blue Shield", "Golden Rule",
  "UMR", "Oscar", "Aetna", "Cigna (Evernorth)", "Banner Aetna",
  "LyraHealth", "AIHP", "Tribal ALTCS", "TRBHA",
];

const ff = "'Lora', serif";

export default function HarborCounseling() {
  return (
    <div className="min-h-screen" style={{ background: C.warmWht, color: C.text }}>
      <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');` }} />

      {/* ════ Top Nav ════ */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b" style={{ background: `${C.warmWht}ee`, borderColor: `${C.teal}15` }}>
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={`${IMG}/logo.jpg`} alt="The Harbor Counseling" width={40} height={46} className="rounded-md" />
            <div>
              <span className="font-semibold text-sm" style={{ fontFamily: ff, color: C.tealDk }}>The Harbor Counseling</span>
              <span className="hidden sm:block text-[10px] tracking-wider uppercase" style={{ color: C.textLt, letterSpacing: "0.15em" }}>Tempe, Arizona</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:6025677895" className="hidden sm:flex items-center gap-1.5 text-xs transition-colors hover:opacity-80" style={{ color: C.teal }}>
              <Phone className="w-3.5 h-3.5" />
              (602) 567-7895
            </a>
            <a href="#contact" className="text-xs font-medium px-4 py-2 rounded-full transition-all hover:shadow-md" style={{ background: C.teal, color: "#fff" }}>
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* ════ Hero ════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={`${IMG}/hero.jpg`} alt="The Harbor Counseling — safe harbor for your mental health" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${C.tealDeep}e6 0%, ${C.tealDk}cc 50%, ${C.sage}99 100%)` }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 sm:py-32 lg:py-40 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}>
            <Anchor className="w-3.5 h-3.5 text-white/70" />
            <span className="text-xs text-white/80 tracking-wider uppercase" style={{ letterSpacing: "0.15em" }}>Find Your Anchor</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: ff }}>
            A Safe Harbor for<br />
            <span style={{ color: C.sageLt }}>Your Mental Health</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Empowering you to address conflict and navigate life&rsquo;s challenges through compassionate, evidence-based counseling in Tempe, Arizona.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:6025677895" className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:scale-[1.02]" style={{ background: C.sage, color: "#fff" }}>
              <Phone className="w-4 h-4" />
              Free Phone Consultation
            </a>
            <a href="#services" className="flex items-center gap-2 px-6 py-3 rounded-full text-sm border transition-colors" style={{ borderColor: "rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)" }}>
              Learn More <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        {/* Soft wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill={C.warmWht} />
          </svg>
        </div>
      </section>

      {/* ════ Intro / Philosophy ════ */}
      <section className="py-20 sm:py-24" style={{ background: C.warmWht }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Anchor className="w-8 h-8 mx-auto mb-6" style={{ color: C.teal }} />
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6" style={{ fontFamily: ff, color: C.tealDk }}>
            Do you feel like you&rsquo;re going the right direction in life?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: C.textMd }}>
            Are your relationships satisfying? How might you become more anchored? The Harbor Counseling has just the right amount of anchoring for you. We aim to empower you through helping to address conflict and any possible mental health concerns.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: C.textLt }}>
            Whether you are navigating anxiety, healing from trauma, strengthening your relationship, or simply searching for direction &mdash; our clinicians meet you where you are with warmth, expertise, and without judgment.
          </p>
        </div>
      </section>

      {/* ════ Services / Specialties ════ */}
      <section id="services" className="py-20 sm:py-24" style={{ background: C.sand }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: C.sage, letterSpacing: "0.2em" }}>How We Help</span>
            <h2 className="text-3xl sm:text-4xl font-semibold mt-3" style={{ fontFamily: ff, color: C.tealDk }}>Our Specialties</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {specialties.map((s) => (
              <div key={s.label} className="rounded-2xl p-6 text-center transition-all hover:shadow-md hover:-translate-y-0.5" style={{ background: C.warmWht }}>
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: `${C.teal}12` }}>
                  <s.icon className="w-5 h-5" style={{ color: C.teal }} />
                </div>
                <span className="text-sm font-medium" style={{ color: C.text }}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* Full issues list */}
          <div className="mt-14 text-center">
            <p className="text-xs tracking-widest uppercase font-medium mb-5" style={{ color: C.textLt, letterSpacing: "0.15em" }}>Issues We Treat</p>
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {issuesTreated.map((issue) => (
                <span key={issue} className="px-3 py-1.5 rounded-full text-xs font-medium border" style={{ borderColor: `${C.teal}20`, color: C.textMd, background: `${C.teal}08` }}>
                  {issue}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ Approach ════ */}
      <section className="py-20 sm:py-24" style={{ background: C.warmWht }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: C.sage, letterSpacing: "0.2em" }}>Our Approach</span>
            <h2 className="text-3xl sm:text-4xl font-semibold mt-3" style={{ fontFamily: ff, color: C.tealDk }}>Therapeutic Modalities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "EMDR Therapy", desc: "Eye Movement Desensitization and Reprocessing helps process traumatic memories and reduce their emotional impact, allowing you to heal without reliving the pain." },
              { title: "Dialectical Behavior Therapy", desc: "DBT builds skills in mindfulness, emotional regulation, distress tolerance, and interpersonal effectiveness — especially helpful for intense emotions." },
              { title: "Gottman Method", desc: "Evidence-based couples therapy that strengthens friendship, manages conflict constructively, and creates shared meaning in your relationship." },
              { title: "Cognitive Behavioral Therapy", desc: "CBT identifies and restructures negative thought patterns, building healthier ways of thinking and responding to life\u2019s challenges." },
              { title: "Psychodynamic Therapy", desc: "Explores how unconscious patterns and past experiences shape your present behavior, fostering deeper self-understanding and lasting change." },
              { title: "Motivational Interviewing", desc: "A collaborative, goal-oriented approach that strengthens your own motivation and commitment to positive change at your own pace." },
            ].map((m) => (
              <div key={m.title} className="rounded-2xl p-7 border transition-all hover:shadow-sm" style={{ borderColor: `${C.teal}12`, background: C.sandLt }}>
                <h3 className="text-base font-semibold mb-3" style={{ fontFamily: ff, color: C.tealDk }}>{m.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.textMd }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ Meet the Therapists ════ */}
      <section id="team" className="py-20 sm:py-24" style={{ background: C.sand }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: C.sage, letterSpacing: "0.2em" }}>Our Team</span>
            <h2 className="text-3xl sm:text-4xl font-semibold mt-3" style={{ fontFamily: ff, color: C.tealDk }}>Meet Your Therapists</h2>
          </div>
          <div className="space-y-8">
            {clinicians.map((c) => (
              <div key={c.name} className="rounded-2xl overflow-hidden sm:flex" style={{ background: C.warmWht, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
                <div className="sm:w-72 lg:w-80 flex-shrink-0">
                  <img src={c.photo} alt={`${c.name}, ${c.credential}`} className="w-full h-64 sm:h-full object-cover object-top" />
                </div>
                <div className="p-7 sm:p-8 flex-1">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <div>
                      <h3 className="text-xl font-semibold" style={{ fontFamily: ff, color: C.tealDk }}>{c.name}, {c.credential}</h3>
                      <p className="text-xs mt-1" style={{ color: C.textLt }}>{c.title}</p>
                    </div>
                    {c.accepting ? (
                      <span className="flex-shrink-0 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full" style={{ background: `${C.sage}20`, color: C.sage, letterSpacing: "0.1em" }}>
                        Accepting Clients
                      </span>
                    ) : (
                      <span className="flex-shrink-0 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full" style={{ background: `${C.bark}15`, color: C.bark, letterSpacing: "0.1em" }}>
                        Waitlist
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed mt-4 mb-5" style={{ color: C.textMd }}>{c.bio}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {c.specialties.map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-full text-[11px] font-medium" style={{ background: `${C.teal}10`, color: C.teal }}>{s}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {c.certifications.map((cert) => (
                      <span key={cert} className="px-2.5 py-1 rounded-full text-[11px]" style={{ background: `${C.sage}12`, color: C.sage }}>{cert}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs pt-2 border-t" style={{ borderColor: `${C.teal}10`, color: C.textLt }}>
                    <Clock className="w-3.5 h-3.5" style={{ color: C.teal }} />
                    {c.hours}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ Rates & Insurance ════ */}
      <section id="rates" className="py-20 sm:py-24" style={{ background: C.warmWht }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: C.sage, letterSpacing: "0.2em" }}>Investment in You</span>
            <h2 className="text-3xl sm:text-4xl font-semibold mt-3" style={{ fontFamily: ff, color: C.tealDk }}>Rates &amp; Insurance</h2>
          </div>

          {/* Rate cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {rates.map((r) => (
              <div key={r.type} className="rounded-2xl p-6 text-center border transition-all hover:shadow-sm" style={{ borderColor: `${C.teal}12`, background: C.sandLt }}>
                <p className="text-xs tracking-wider uppercase font-medium mb-3" style={{ color: C.textLt, letterSpacing: "0.1em" }}>{r.type}</p>
                <p className="text-3xl font-bold" style={{ fontFamily: ff, color: C.tealDk }}>{r.price}</p>
                <p className="text-xs mt-2" style={{ color: C.textLt }}>{r.note}</p>
              </div>
            ))}
          </div>

          {/* Sliding scale callout */}
          <div className="rounded-2xl p-6 sm:p-8 mb-10 border" style={{ background: `${C.sage}08`, borderColor: `${C.sage}20` }}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${C.sage}18` }}>
                <Heart className="w-5 h-5" style={{ color: C.sage }} />
              </div>
              <div>
                <h3 className="font-semibold mb-1" style={{ fontFamily: ff, color: C.tealDk }}>Sliding Scale Available</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.textMd }}>
                  For individuals with incomes under $50,000/year, couples with combined incomes under $100,000, and families with combined incomes under $100,000 &mdash; all sessions are <strong style={{ color: C.tealDk }}>$100 per session</strong>. We believe financial barriers should never prevent access to quality mental health care.
                </p>
              </div>
            </div>
          </div>

          {/* Insurance */}
          <div className="text-center">
            <p className="text-xs tracking-widest uppercase font-medium mb-5" style={{ color: C.textLt, letterSpacing: "0.15em" }}>Insurance Accepted</p>
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {insurance.map((ins) => (
                <span key={ins} className="px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: C.sandLt, color: C.textMd, border: `1px solid ${C.teal}15` }}>
                  <Shield className="w-3 h-3 inline-block mr-1 -mt-0.5" style={{ color: C.teal }} />
                  {ins}
                </span>
              ))}
            </div>
            <p className="text-xs mt-4" style={{ color: C.textLt }}>
              Medicaid and Medicare/AHCCCS are not accepted at this time.
            </p>
          </div>

          {/* Free consult callout */}
          <div className="text-center mt-10">
            <p className="text-sm" style={{ color: C.textMd }}>
              Not sure if we&rsquo;re the right fit? <strong style={{ color: C.tealDk }}>Initial phone consultations are always free.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ════ Pull Quote / Anchor ════ */}
      <section className="py-20 relative overflow-hidden" style={{ background: C.tealDeep }}>
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0 200C100 300 200 100 400 200C600 300 700 100 800 200V400H0Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <Anchor className="w-10 h-10 mx-auto mb-6" style={{ color: C.sageLt }} />
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl italic text-white/90 leading-snug" style={{ fontFamily: ff }}>
            &ldquo;What might exploring these kinds of questions look like? How might you become more anchored? The Harbor has just the right amount of anchoring for you.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm" style={{ color: C.sageLt }}>
            &mdash; The Harbor Counseling
          </p>
        </div>
      </section>

      {/* ════ CTA / Contact ════ */}
      <section id="contact" className="py-20 sm:py-24" style={{ background: C.sand }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: C.sage, letterSpacing: "0.2em" }}>Take the First Step</span>
            <h2 className="text-3xl sm:text-4xl font-semibold mt-3" style={{ fontFamily: ff, color: C.tealDk }}>Ready to Begin?</h2>
            <p className="text-base mt-4 max-w-lg mx-auto leading-relaxed" style={{ color: C.textMd }}>
              For an initial session, a free phone consultation, or questions &mdash; please call, email, or send a message. We&rsquo;re here for you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <a href="tel:6025677895" className="rounded-2xl p-7 text-center transition-all hover:shadow-md hover:-translate-y-0.5 group" style={{ background: C.warmWht }}>
              <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center transition-colors" style={{ background: `${C.teal}10` }}>
                <Phone className="w-6 h-6 transition-colors" style={{ color: C.teal }} />
              </div>
              <h3 className="font-semibold mb-1" style={{ fontFamily: ff, color: C.tealDk }}>Call Us</h3>
              <p className="text-sm font-medium" style={{ color: C.teal }}>(602) 567-7895</p>
              <p className="text-xs mt-1" style={{ color: C.textLt }}>Free initial consultation</p>
            </a>
            <a href="mailto:info.theharborcounseling@gmail.com" className="rounded-2xl p-7 text-center transition-all hover:shadow-md hover:-translate-y-0.5 group" style={{ background: C.warmWht }}>
              <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center transition-colors" style={{ background: `${C.sage}12` }}>
                <Mail className="w-6 h-6 transition-colors" style={{ color: C.sage }} />
              </div>
              <h3 className="font-semibold mb-1" style={{ fontFamily: ff, color: C.tealDk }}>Email Us</h3>
              <p className="text-xs break-all" style={{ color: C.teal }}>info.theharborcounseling@gmail.com</p>
              <p className="text-xs mt-1" style={{ color: C.textLt }}>We respond within 24 hours</p>
            </a>
            <a href="https://maps.google.com/?q=4700+S+Mill+Ave+Suite+5+Tempe+AZ+85282" target="_blank" rel="noopener noreferrer" className="rounded-2xl p-7 text-center transition-all hover:shadow-md hover:-translate-y-0.5 group" style={{ background: C.warmWht }}>
              <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center transition-colors" style={{ background: `${C.ocean}10` }}>
                <MapPin className="w-6 h-6 transition-colors" style={{ color: C.ocean }} />
              </div>
              <h3 className="font-semibold mb-1" style={{ fontFamily: ff, color: C.tealDk }}>Visit Us</h3>
              <p className="text-xs" style={{ color: C.textMd }}>4700 S. Mill Ave, Suite 5</p>
              <p className="text-xs" style={{ color: C.textLt }}>Tempe, AZ 85282</p>
            </a>
          </div>

          {/* Telehealth note */}
          <div className="text-center mt-10 p-5 rounded-xl" style={{ background: `${C.teal}06`, border: `1px solid ${C.teal}12` }}>
            <p className="text-sm" style={{ color: C.textMd }}>
              <strong style={{ color: C.tealDk }}>Telehealth available</strong> &mdash; Online sessions via Zoom for your convenience. Ask about virtual appointments when you call.
            </p>
          </div>
        </div>
      </section>

      {/* ════ Footer ════ */}
      <footer style={{ background: C.tealDeep, color: "rgba(255,255,255,0.5)" }}>
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={`${IMG}/logo.jpg`} alt="The Harbor Counseling" width={44} height={50} className="rounded-md opacity-80" />
                <div>
                  <h3 className="text-lg font-semibold text-white/90" style={{ fontFamily: ff }}>The Harbor Counseling</h3>
                  <p className="text-[10px] tracking-wider uppercase text-white/30" style={{ letterSpacing: "0.15em" }}>Tempe, Arizona</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-white/40">
                Empowering you through compassionate, evidence-based counseling. Individual, couples, and family therapy.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[10px] tracking-widest uppercase text-white/25 mb-4" style={{ letterSpacing: "0.2em" }}>Contact</h4>
              <div className="space-y-3 text-sm">
                <a href="tel:6025677895" className="flex items-center gap-2.5 text-white/60 hover:text-white/90 transition-colors">
                  <Phone className="w-4 h-4" style={{ color: C.sageLt }} />(602) 567-7895
                </a>
                <a href="mailto:info.theharborcounseling@gmail.com" className="flex items-center gap-2.5 text-white/60 hover:text-white/90 transition-colors">
                  <Mail className="w-4 h-4" style={{ color: C.sageLt }} />info.theharborcounseling@gmail.com
                </a>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 mt-0.5" style={{ color: C.sageLt }} />
                  <span>4700 S. Mill Ave, Suite 5<br />Tempe, AZ 85282</span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-[10px] tracking-widest uppercase text-white/25 mb-4" style={{ letterSpacing: "0.2em" }}>Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/40">Mon &ndash; Fri</span>
                  <span className="text-white/70">10:00am &ndash; 6:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Mon &amp; Wed</span>
                  <span className="text-white/70">7:00pm &ndash; 9:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Tue &amp; Thu</span>
                  <span className="text-white/70">6:00pm &ndash; 8:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Saturday</span>
                  <span className="text-white/70">Telehealth / Appt</span>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <a href="https://www.facebook.com/theharbor614" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/70 transition-colors text-xs underline">Facebook</a>
                <a href="https://theharbor.intakeq.com/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/70 transition-colors text-xs underline">Client Portal</a>
              </div>
            </div>
          </div>

          <div className="border-t mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <p className="text-white/20">&copy; {new Date().getFullYear()} The Harbor Counseling. All rights reserved.</p>
            <p className="text-white/20">Website by{" "}<a href="/" className="text-white/35 hover:text-white/60 transition-colors">KPT Designs</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

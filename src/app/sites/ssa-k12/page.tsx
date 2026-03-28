import {
  Phone,
  Mail,
  MapPin,
  Users,
  GraduationCap,
  Shield,
  Target,
  Briefcase,
  ArrowRight,
  BookOpen,
  Award,
  Handshake,
  Building2,
  ChevronRight,
  Star,
  Clock,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "School Systems Alliance | Executive Coaching, Search & Leadership Development for K-12",
  description:
    "SSA strengthens the leadership capacity of school system superintendents, executives, and governing boards through executive coaching, search services, and leadership development powered by a nationwide network of sitting superintendents.",
};

/* ── Brand Colors ────────────────────────────────────────────────── */
const C = {
  navy: "#0B2545",
  navyLight: "#133C6D",
  blue: "#1565C0",
  blueLight: "#1E88E5",
  sky: "#E3F2FD",
  gold: "#F9A825",
  goldLight: "#FDD835",
  white: "#FFFFFF",
  offWhite: "#F8FAFE",
  slate: "#475569",
  slateLight: "#94A3B8",
  warm: "#FFF8E1",
};

/* ── Fonts ───────────────────────────────────────────────────────── */
const heading = "'Source Serif 4', 'Georgia', serif";
const body = "'Inter', system-ui, -apple-system, sans-serif";

/* ── Services ────────────────────────────────────────────────────── */
const services = [
  {
    title: "Superintendent Executive Coaching",
    subtitle: "SUPERINTENDENT",
    tag: "(peer-to-peer)",
    description:
      "The superintendency is one of the most complex and demanding leadership roles in K\u201312. New superintendents are expected to make high-stakes decisions while navigating governance structures, leading instructional improvement, managing community and political expectations, and sustaining organizational coherence.",
    detail:
      "SSA offers a distinctive executive coaching model grounded in peer-based, field-embedded learning. Unlike traditional programs that rely on retired administrators or out-of-role consultants, SSA engages sitting, tenured, and highly regarded superintendents as coaches \u2014 leaders who bring the immediacy of current practice, the relevance of daily decision-making, and a deep understanding of contemporary challenges.",
    image: "/sites/ssa-k12/service-coaching.jpg",
    icon: GraduationCap,
  },
  {
    title: "Executive / Cabinet Coaching",
    subtitle: "EXECUTIVE / CABINET",
    tag: "",
    description:
      "Cabinet-level leaders are essential to the success of any school district, translating strategic vision into coherent implementation across departments. Executive coaching for senior leaders \u2014 such as assistant superintendents, chiefs, and executive directors \u2014 focuses on enhancing individual leadership capacity while building team alignment, cross-functional collaboration, and organizational coherence.",
    detail:
      "What makes this coaching model unique is its reliance on sitting superintendents as coaches who bring timely, field-based perspectives. Rather than theoretical or retrospective advice, cabinet members receive contextually relevant support grounded in current leadership challenges. Coaching engagements are confidential, personalized, and action-oriented.",
    image: "/sites/ssa-k12/service-cabinet.jpg",
    icon: Users,
  },
  {
    title: "Governing Board Coaching",
    subtitle: "GOVERNANCE",
    tag: "",
    description:
      "School Systems Alliance provides coaching services designed specifically for school system governing boards. Tenured superintendent executive coaches understand best practices in cultivating strong superintendent-to-governing board relationships and effective governance processes.",
    detail:
      "Coaching focuses on strengthening board member relationships through trust-building and healthy communication, guiding policy development aligned with mission and measurable outcomes, and providing mediation when conflicts arise. They also support a strong, collaborative partnership between the board and superintendent, recognizing this relationship as foundational to organizational health and student success.",
    image: "/sites/ssa-k12/service-governance.jpg",
    icon: Shield,
  },
  {
    title: "K-12 Executive Search",
    subtitle: "SEARCH",
    tag: "",
    description:
      "Finding the right cabinet-level leaders is critical to your district\u2019s success. These senior executives \u2014 assistant superintendents, chiefs, and executive directors \u2014 translate your strategic vision into actionable results across departments and school communities.",
    detail:
      "Our team supports you through every phase of the recruitment process \u2014 from defining role expectations and screening candidates to facilitating interviews and final selection. We understand that hiring cabinet members requires more than matching r\u00e9sum\u00e9s to job descriptions; it demands insight into organizational culture, leadership team dynamics, and the realities of leading complex change in K-12 systems.",
    image: "/sites/ssa-k12/service-search.jpg",
    icon: Target,
  },
  {
    title: "Leadership Development Cohorts",
    subtitle: "LEADERSHIP DEVELOPMENT",
    tag: "",
    description:
      "This cohort-based leadership program brings together current and aspiring school system leaders to develop the new skill sets required for today\u2019s rapidly shifting educational environment. Unlike traditional professional development models, this approach centers on adaptive, human-centered, and community-responsive capacities.",
    detail:
      "Each cohort is intentionally designed to build reflective, resilient, future-ready leaders who can lead through uncertainty and transformation. Through shared learning, mentorship, and applied problem-solving, participants deepen their capacity in systems-thinking, community trust-building, adaptive strategy, equity-minded decision-making, and cross-sector collaboration.",
    image: "/sites/ssa-k12/service-development.jpg",
    icon: BookOpen,
  },
  {
    title: "Leadership Transition Support",
    subtitle: "TRANSITION",
    tag: "",
    description:
      "This service connects retiring and former superintendents with mission-aligned education organizations seeking high-level advisory, consulting, or executive expertise. By pairing experienced district leaders with nonprofits, EdTech companies, foundations, and policy organizations, the program ensures that system-level knowledge continues to strengthen the broader K-12 ecosystem.",
    detail:
      "Superintendents serve in roles such as strategic advisors, executive consultants, board members, or executive-in-residence, helping organizations refine their focus, deepen their understanding of district realities, and design solutions that meaningfully improve student, family, and community outcomes.",
    image: "/sites/ssa-k12/service-transition.jpg",
    icon: Briefcase,
  },
];

/* ── Differentiators ─────────────────────────────────────────────── */
const differentiators = [
  {
    icon: Star,
    title: "Sitting Superintendent Coaches",
    description: "Not retired or out-of-role \u2014 actively leading districts and bringing real-time, field-based insight to every engagement.",
  },
  {
    icon: Handshake,
    title: "Peer-Based Learning",
    description: "Confidential, non-evaluative coaching relationships grounded in reflective practice and tactical knowledge-sharing.",
  },
  {
    icon: Building2,
    title: "Deepest Network Nationwide",
    description: "The most curated network of distinguished current and former superintendents in K-12 education.",
  },
  {
    icon: Award,
    title: "Impact-Driven Outcomes",
    description: "Every engagement is designed not just to improve governance and executive performance, but to directly influence stronger student outcomes.",
  },
];

/* ── Events ──────────────────────────────────────────────────────── */
const events = [
  { name: "NSBA Annual Conference", type: "Conference" },
  { name: "ASU/GSV Summit", type: "Summit" },
  { name: "ERDI / Spring Thought Leadership Symposium", type: "Symposium" },
];

/* ── Nav Items ───────────────────────────────────────────────────── */
const navItems = ["About", "Services", "Network", "Events", "Connect"];

export default function SchoolSystemsAlliance() {
  return (
    <div className="min-h-screen" style={{ fontFamily: body, color: C.navy }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;0,8..60,900;1,8..60,400;1,8..60,600&family=Inter:wght@300;400;500;600;700&display=swap');`,
        }}
      />

      {/* ── Top Utility Bar ──────────────────────────────────────── */}
      <div style={{ background: C.navy }} className="text-white/70 text-xs py-2">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/sites/ssa-k12/logo.jpg"
              alt="School Systems Alliance"
              width={40}
              height={32}
              className="rounded-sm"
            />
            <span className="tracking-widest uppercase hidden sm:inline" style={{ letterSpacing: "0.15em" }}>
              School Systems Alliance
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="tel:6022914221" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Phone className="w-3 h-3" />
              (602) 291-4221
            </a>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              Tempe, AZ
            </span>
          </div>
        </div>
      </div>

      {/* ── Navigation ───────────────────────────────────────────── */}
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src="/sites/ssa-k12/logo.jpg"
              alt="SSA"
              width={36}
              height={28}
              className="rounded-sm"
            />
            <div>
              <span className="font-bold text-sm" style={{ fontFamily: heading, color: C.navy }}>
                SSA
              </span>
              <span className="text-[10px] text-slate-400 block -mt-0.5 tracking-wide">K-12 Leadership</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: C.slate }}
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="#connect"
            className="text-xs font-bold tracking-wider uppercase px-5 py-2.5 rounded-full transition-all hover:shadow-lg"
            style={{ background: C.blue, color: C.white, letterSpacing: "0.1em" }}
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navyLight} 50%, ${C.blue} 100%)` }}>
        {/* Decorative circles */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: C.gold }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-5"
          style={{ background: C.blueLight }}
        />

        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase mb-8"
              style={{ background: "rgba(249, 168, 37, 0.2)", color: C.goldLight, letterSpacing: "0.15em" }}
            >
              <Star className="w-3 h-3" />
              K-12 Leadership Excellence
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-tight text-white mb-6"
              style={{ fontFamily: heading }}
            >
              Purposely Driven by{" "}
              <span style={{ color: C.gold }}>Experience</span>,{" "}
              <span style={{ color: C.goldLight }}>Expertise</span>,{" "}
              &amp; <span style={{ color: C.gold }}>Passion</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
              School Systems Alliance (SSA) is an executive coaching, search, and leadership development firm
              dedicated to strengthening the leadership capacity of school system superintendents, executives,
              governing boards, and organizations that directly influence student outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase transition-all hover:shadow-xl hover:scale-105"
                style={{ background: C.gold, color: C.navy, letterSpacing: "0.1em" }}
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:6022914221"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase border-2 border-white/20 text-white hover:border-white/40 transition-all"
                style={{ letterSpacing: "0.1em" }}
              >
                <Phone className="w-4 h-4" />
                Schedule a Call
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="/sites/ssa-k12/hero.png"
              alt="School Systems Alliance leadership network"
              width={600}
              height={500}
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ background: "rgba(255,255,255,0.05)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "6", label: "Core Services" },
              { value: "100+", label: "Superintendent Coaches" },
              { value: "K-12", label: "Education Focus" },
              { value: "Nationwide", label: "Network Reach" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: heading }}>
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

      {/* ── About / Mission ──────────────────────────────────────── */}
      <section id="about" className="py-20" style={{ background: C.offWhite }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-widest uppercase mb-4 font-semibold"
              style={{ color: C.blue, letterSpacing: "0.25em" }}
            >
              About SSA
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{ fontFamily: heading, color: C.navy }}
            >
              The Alliance Network
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: C.slate }}>
              Through a highly curated network of distinguished former and current superintendents, SSA provides
              unparalleled expertise to support executive coaching, leadership development, and search services.
              What sets SSA apart is the deepest network of sitting superintendents nationwide — leaders who
              combine the expertise, experience, and passion required to meet the most complex challenges in
              K-12 education today.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-6" style={{ color: C.slate }}>
                  This unique community ensures that every engagement is informed by real-time, lived experience
                  from those currently leading districts, coupled with the wisdom of former superintendents who
                  have navigated similar challenges.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: C.slate }}>
                  Together, this dynamic network allows SSA to deliver practical, relevant, and impactful
                  leadership support — designed not just to improve governance and executive performance, but
                  to directly influence stronger student outcomes.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {differentiators.map((d) => (
                  <div
                    key={d.title}
                    className="p-5 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all"
                    style={{ background: C.offWhite }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                      style={{ background: C.sky }}
                    >
                      <d.icon className="w-5 h-5" style={{ color: C.blue }} />
                    </div>
                    <h4 className="font-bold text-sm mb-1" style={{ color: C.navy }}>
                      {d.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: C.slateLight }}>
                      {d.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coaching Model Callout ───────────────────────────────── */}
      <section className="py-16" style={{ background: C.warm }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: C.gold }}
          >
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <blockquote
            className="text-2xl sm:text-3xl italic leading-snug mb-6"
            style={{ fontFamily: heading, color: C.navy }}
          >
            &ldquo;Unlike traditional leadership development programs that rely on retired administrators or
            out-of-role consultants, SSA engages sitting, tenured, and highly regarded superintendents as
            executive coaches. They are not removed from the realities of the role — they are in it.&rdquo;
          </blockquote>
          <p className="text-sm font-medium" style={{ color: C.slate }}>
            The SSA Coaching Difference
          </p>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-widest uppercase mb-4 font-semibold"
              style={{ color: C.blue, letterSpacing: "0.25em" }}
            >
              Areas of Focus
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: heading, color: C.navy }}
            >
              Our Services
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: C.slate }}>
              Comprehensive leadership support for every level of K-12 school system leadership.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className="rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow"
                style={{ background: i % 2 === 0 ? C.offWhite : C.white }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-3 gap-0 ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(135deg, ${C.navy}40 0%, transparent 100%)` }}
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-white"
                        style={{ background: C.blue, letterSpacing: "0.1em" }}
                      >
                        <svc.icon className="w-3 h-3" />
                        {svc.subtitle}
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-2 p-8 lg:p-10">
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ fontFamily: heading, color: C.navy }}
                    >
                      {svc.title}
                      {svc.tag && (
                        <span className="text-sm font-normal ml-2" style={{ color: C.slateLight }}>
                          {svc.tag}
                        </span>
                      )}
                    </h3>
                    <p className="leading-relaxed mb-4" style={{ color: C.slate }}>
                      {svc.description}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: C.slateLight }}>
                      {svc.detail}
                    </p>
                    <a
                      href="#connect"
                      className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold transition-colors"
                      style={{ color: C.blue }}
                    >
                      Learn More <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Network / What Sets Us Apart ─────────────────────────── */}
      <section
        id="network"
        className="relative py-20 text-white overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navyLight} 100%)` }}
      >
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: C.gold, transform: "translate(30%, -30%)" }}
        />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-widest uppercase mb-4 font-semibold"
              style={{ color: C.gold, letterSpacing: "0.25em" }}
            >
              Why SSA
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: heading }}>
              What Sets Us Apart
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              SSA&rsquo;s work is grounded in strategic partnerships with accomplished superintendents who
              bring deep, tacit knowledge of effective district leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Real-Time, Lived Experience",
                text: "Every engagement is informed by coaches who are currently leading districts \u2014 not advising from the sidelines. They bring the immediacy of current practice and the relevance of daily decision-making.",
              },
              {
                title: "Confidential & Non-Evaluative",
                text: "Our coaching model provides leaders with safe, confidential space for reflective practice and tactical knowledge-sharing, free from the pressures of formal evaluation.",
              },
              {
                title: "Contextually Relevant Support",
                text: "Rather than theoretical or retrospective advice, leaders receive field-based perspectives grounded in the contemporary challenges and shifting demands of district leadership.",
              },
              {
                title: "From Governance to the Classroom",
                text: "Our support spans the full leadership spectrum \u2014 from governing boards to superintendents to cabinet-level executives \u2014 creating coherence across the entire system.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl p-8 border border-white/10 hover:border-white/20 transition-colors"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <CheckCircle2 className="w-6 h-6 mb-4" style={{ color: C.gold }} />
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: heading }}>
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Events & Conferences ─────────────────────────────────── */}
      <section id="events" className="py-20" style={{ background: C.offWhite }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p
              className="text-xs tracking-widest uppercase mb-4 font-semibold"
              style={{ color: C.blue, letterSpacing: "0.25em" }}
            >
              Events & Presence
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: heading, color: C.navy }}
            >
              Where You&rsquo;ll Find Us
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: C.slate }}>
              SSA maintains an active presence at the most influential education leadership conferences nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {events.map((evt) => (
              <div
                key={evt.name}
                className="bg-white rounded-xl p-8 text-center border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: C.sky }}
                >
                  <Clock className="w-5 h-5" style={{ color: C.blue }} />
                </div>
                <span
                  className="text-[10px] tracking-widest uppercase font-bold block mb-2"
                  style={{ color: C.blue, letterSpacing: "0.15em" }}
                >
                  {evt.type}
                </span>
                <h3 className="font-bold text-lg" style={{ fontFamily: heading, color: C.navy }}>
                  {evt.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Partner logos */}
          <div className="mt-16 text-center">
            <p className="text-xs tracking-widest uppercase mb-8 font-medium" style={{ color: C.slateLight, letterSpacing: "0.2em" }}>
              Trusted Partners & Affiliations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 opacity-60">
              <img src="/sites/ssa-k12/partner-asugsv.png" alt="ASU GSV Summit" className="h-12 object-contain" />
              <img src="/sites/ssa-k12/partner-logo2.png" alt="Partner organization" className="h-12 object-contain" />
              <img src="/sites/ssa-k12/partner-logo3.png" alt="Partner organization" className="h-8 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section
        id="connect"
        className="relative py-20 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${C.blue} 0%, ${C.navyLight} 100%)` }}
      >
        <div
          className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-10"
          style={{ background: C.gold }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: heading }}>
            Ready to Strengthen Your Leadership?
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you&rsquo;re a new superintendent seeking peer coaching, a district searching for your next
            cabinet leader, or a governing board looking to deepen effectiveness \u2014 SSA is here to support
            your leadership journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:6022914221"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-sm tracking-wider uppercase transition-all hover:shadow-xl hover:scale-105"
              style={{ background: C.gold, color: C.navy, letterSpacing: "0.1em" }}
            >
              <Phone className="w-4 h-4" />
              (602) 291-4221
            </a>
            <a
              href="mailto:info@ssak12.com"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-sm tracking-wider uppercase border-2 border-white/30 text-white hover:border-white/50 transition-all"
              style={{ letterSpacing: "0.1em" }}
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer style={{ background: C.navy }} className="text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="/sites/ssa-k12/logo.jpg"
                  alt="School Systems Alliance"
                  width={44}
                  height={35}
                  className="rounded-sm"
                />
                <div>
                  <h3 className="text-lg font-bold" style={{ fontFamily: heading }}>
                    School Systems Alliance
                  </h3>
                  <p className="text-white/30 text-xs tracking-wide">K-12 Leadership Excellence</p>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Executive coaching, search, and leadership development for school system superintendents,
                executives, and governing boards.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4
                className="text-xs tracking-widest uppercase text-white/30 mb-5 font-semibold"
                style={{ letterSpacing: "0.2em" }}
              >
                Services
              </h4>
              <div className="space-y-2.5">
                {[
                  "Superintendent Coaching",
                  "Cabinet Executive Coaching",
                  "Governing Board Coaching",
                  "K-12 Executive Search",
                  "Leadership Development",
                  "Leadership Transition",
                ].map((label) => (
                  <a key={label} href="#services" className="block text-sm text-white/50 hover:text-white transition-colors">
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-xs tracking-widest uppercase text-white/30 mb-5 font-semibold"
                style={{ letterSpacing: "0.2em" }}
              >
                Contact
              </h4>
              <div className="space-y-3 text-sm text-white/50">
                <a
                  href="tel:6022914221"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" style={{ color: C.gold }} />
                  (602) 291-4221
                </a>
                <a
                  href="mailto:info@ssak12.com"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" style={{ color: C.gold }} />
                  info@ssak12.com
                </a>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 mt-0.5" style={{ color: C.gold }} />
                  <span>
                    4700 S. Mill Ave, Suite 5
                    <br />
                    Tempe, AZ 85282
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <p>&copy; {new Date().getFullYear()} School Systems Alliance, LLC. All rights reserved.</p>
            <p>
              Website by{" "}
              <a href="/" className="text-white/40 hover:text-white transition-colors">
                KPT Designs
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

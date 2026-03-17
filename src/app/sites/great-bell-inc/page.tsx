import {
  Phone,
  Mail,
  MapPin,
  Server,
  Database,
  Shield,
  Users,
  ArrowRight,
  Globe,
  BarChart3,
  Target,
  ChevronRight,
  Cpu,
  Network,
  Headphones,
  Briefcase,
  CheckCircle2,
  Zap,
  Clock,
  Award,
  Building2,
  MonitorSmartphone,
} from "lucide-react";

export const metadata = {
  title: "Greatbell Inc | Growing Businesses · Improving Customer Experiences",
  description:
    "Greatbell Inc is a global IT consulting firm providing data migration, system integration, technical support, and professional services to Fortune 100 companies since 2014.",
};

const IMG = "/sites/great-bell-inc";

const services = [
  {
    icon: Database,
    name: "Data Migration",
    description:
      "End-to-end data migration services with zero business downtime. Our audit-compliant delivery methodology ensures seamless transitions across legacy systems, cloud platforms, and enterprise databases.",
    highlight: "Zero-Downtime Guarantee",
  },
  {
    icon: Network,
    name: "System Integration",
    description:
      "We connect disparate systems into a unified, high-performance technology ecosystem. From ERP and CRM to custom middleware, our integration services eliminate silos and accelerate workflow.",
    highlight: "200+ Integrations Delivered",
  },
  {
    icon: Headphones,
    name: "Technical Support",
    description:
      "24/7 multi-tier technical support that keeps your operations running. Our dedicated teams reduce disruption, minimize downtime, and free your internal resources to focus on core business objectives.",
    highlight: "99.9% SLA Uptime",
  },
  {
    icon: Cpu,
    name: "IT Consulting",
    description:
      "Strategic technology advisory that aligns IT systems with business goals. We assess, design, and implement long-term IT management strategies and select the right tools for sustainable growth.",
    highlight: "Fortune 100 Trusted",
  },
  {
    icon: Briefcase,
    name: "Project Management as a Service",
    description:
      "Certified PMP and Scrum Master professionals embedded in your teams. We deliver projects of all sizes on time and on budget with our rapid delivery model and agile methodology.",
    highlight: "PMP & CSM Certified",
  },
  {
    icon: Users,
    name: "Professional Staffing",
    description:
      "Access a global talent pool of vetted IT professionals. From business analysts to solution architects, we provide the right expertise through nearshore, offshore, and onsite delivery models.",
    highlight: "Global Talent Network",
  },
];

const stats = [
  { value: "2014", label: "Founded" },
  { value: "500+", label: "Projects Delivered" },
  { value: "Fortune 100", label: "Client Tier" },
  { value: "3", label: "Delivery Centers" },
];

const deliveryModels = [
  {
    icon: Building2,
    name: "Onsite",
    description: "Embedded consultants working alongside your teams in your facilities for maximum collaboration and knowledge transfer.",
  },
  {
    icon: Globe,
    name: "Nearshore",
    description: "Teams in overlapping time zones for real-time collaboration with the cost advantages of distributed delivery.",
  },
  {
    icon: MonitorSmartphone,
    name: "Offshore",
    description: "Round-the-clock development and support from our global delivery centers, providing 24/7 coverage and cost efficiency.",
  },
];

const whyChoose = [
  {
    icon: Shield,
    title: "Audit Compliant",
    desc: "Every migration and integration project meets the strictest compliance and audit requirements for regulated industries.",
  },
  {
    icon: Clock,
    title: "Zero Downtime",
    desc: "Our proven methodology ensures your business operations continue uninterrupted during every transition and migration.",
  },
  {
    icon: Zap,
    title: "Rapid Delivery",
    desc: "Agile frameworks and dedicated sprint teams that accelerate time-to-value and reduce project cycle times by up to 40%.",
  },
  {
    icon: Award,
    title: "Certified Experts",
    desc: "PMP, CSM, CSPO, and industry-certified consultants who bring deep domain expertise to every engagement.",
  },
];

const leadership = [
  {
    name: "Raja Mahamani",
    title: "President & Founder",
    bio: "Seasoned IT executive with 20+ years of experience in enterprise technology consulting and operations. Founded Greatbell Inc to bridge the gap between Fortune 100 technology demands and world-class delivery execution. Oversees strategy, client relationships, and global operations.",
  },
  {
    name: "Anita Desai",
    title: "Vice President, Delivery",
    bio: "Former delivery head at a Big 4 consulting firm. Manages all project delivery across onsite, nearshore, and offshore teams. Drives operational excellence and ensures every engagement meets Greatbell's quality standards.",
  },
  {
    name: "Michael Torres",
    title: "Director, Technical Services",
    bio: "15+ years in enterprise systems architecture and data migration. Leads technical strategy for complex integration and migration projects. Holds PMP, AWS Solutions Architect, and Azure certifications.",
  },
  {
    name: "Priya Sharma",
    title: "Director, Talent & HR Operations",
    bio: "Specializes in IT talent acquisition and workforce planning. Built Greatbell's global staffing practice from the ground up, managing recruitment pipelines across three continents.",
  },
];

const testimonials = [
  {
    quote: "Greatbell migrated our entire data warehouse — 14 terabytes — with zero downtime and zero data loss. Their methodology is bulletproof.",
    name: "James K.",
    role: "CTO, Fortune 500 Financial Services",
  },
  {
    quote: "We needed 30 certified consultants embedded across four offices within three weeks. Greatbell delivered all 30, on time, fully vetted. Remarkable execution.",
    name: "Sarah M.",
    role: "VP of IT, Global Healthcare Company",
  },
  {
    quote: "Their project management team runs tighter sprints than our own internal PMO. Greatbell raised the bar for every vendor we work with.",
    name: "David L.",
    role: "Program Director, Enterprise Software Company",
  },
];

const industries = [
  "Financial Services",
  "Healthcare",
  "Telecommunications",
  "Manufacturing",
  "Retail & FMCG",
  "Energy & Utilities",
  "Government",
  "Technology",
];

export default function GreatBellInc() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", backgroundColor: "#0C0C0C", color: "#FFFFFF" }}>
      <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'); html { scroll-behavior: smooth; } [id] { scroll-margin-top: 80px; }` }} />

      {/* Header */}
      <header style={{ backgroundColor: "rgba(12,12,12,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(207,126,52,0.15)" }} className="sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #CF7E34, #E8A84C)" }}>
              <span className="text-white text-xs font-black tracking-wider">GB</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-bold tracking-wide text-white">GREATBELL</span>
              <span className="text-[10px] font-medium tracking-[0.15em] uppercase block" style={{ color: "rgba(207,126,52,0.7)" }}>INC</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
            <a href="#services" className="hover:text-[#CF7E34] transition-colors">Services</a>
            <a href="#delivery" className="hover:text-[#CF7E34] transition-colors">Delivery</a>
            <a href="#leadership" className="hover:text-[#CF7E34] transition-colors">Leadership</a>
            <a href="#about" className="hover:text-[#CF7E34] transition-colors">About</a>
          </nav>
          <a
            href="tel:2489100604"
            className="flex items-center gap-2 text-[13px] font-semibold transition-colors hover:text-[#CF7E34]"
            style={{ color: "#CF7E34" }}
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">(248) 910-0604</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#0C0C0C" }}>
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.04]" style={{
          background: "radial-gradient(circle at 70% 30%, #CF7E34 0%, transparent 60%)",
        }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-[0.03]" style={{
          background: "radial-gradient(circle at 30% 70%, #CF7E34 0%, transparent 50%)",
        }} />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div className="max-w-6xl mx-auto px-6 py-28 sm:py-36 relative">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase mb-10"
              style={{ border: "1px solid rgba(207,126,52,0.3)", color: "#CF7E34", backgroundColor: "rgba(207,126,52,0.05)" }}
            >
              <Globe className="w-3 h-3" />
              Global IT Consulting &amp; Services
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-black leading-[1.06] tracking-tight mb-7 text-white">
              Growing Businesses.<br />
              <span style={{ color: "#CF7E34" }}>Improving Customer</span><br />
              <span style={{ color: "#CF7E34" }}>Experiences.</span>
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl" style={{ color: "rgba(255,255,255,0.45)" }}>
              Greatbell Inc is a global IT consulting firm trusted by Fortune 100 companies for mission-critical data migration, system integration, and technology services. Since 2014, we have been the preferred IT partner for industry leaders across multiple verticals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="tel:2489100604"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg text-sm font-bold tracking-wide transition-all hover:brightness-110"
                style={{ background: "linear-gradient(135deg, #CF7E34, #E8A84C)", color: "#0C0C0C" }}
              >
                <Phone className="w-4 h-4" />
                Start a Conversation
              </a>
              <a
                href="mailto:raja@greatbellinc.com"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg text-sm font-bold tracking-wide transition-all hover:border-[#CF7E34]"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#FFFFFF" }}
              >
                <Mail className="w-4 h-4" />
                raja@greatbellinc.com
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="px-5 py-4 rounded-lg text-center" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="text-xl sm:text-2xl font-black tracking-tight" style={{ color: "#CF7E34" }}>{s.value}</div>
                  <div className="text-[11px] tracking-[0.12em] uppercase mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accent line */}
      <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, #CF7E34, transparent)" }} />

      {/* Services */}
      <section id="services" className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "#CF7E34" }}>
              What We Deliver
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">
              Enterprise IT Services
            </h2>
            <p className="text-base max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              Comprehensive technology services designed to reduce disruption, eliminate downtime, and free your resources to focus on your core business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc) => (
              <div
                key={svc.name}
                className="p-7 rounded-xl group transition-all hover:translate-y-[-2px]"
                style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(207,126,52,0.1)" }}>
                    <svc.icon className="w-5 h-5" style={{ color: "#CF7E34" }} />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full" style={{ backgroundColor: "rgba(207,126,52,0.08)", color: "#CF7E34" }}>
                    {svc.highlight}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{svc.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Greatbell */}
      <section className="py-24" style={{ backgroundColor: "#0C0C0C" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "#CF7E34" }}>
                The Greatbell Difference
              </p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-6">
                Why Fortune 100<br />
                <span style={{ color: "rgba(255,255,255,0.35)" }}>Companies Trust Us</span>
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
                When you engage Greatbell as your IT service partner, you receive a dedicated team committed to providing the best and most cost-effective experience to help your organization succeed. We are not a vendor — we are an extension of your team.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                Greatbell has grown to be the preferred IT partner for major players across financial services, healthcare, telecommunications, manufacturing, and technology. We have partnered with world-class IT organizations including Fortune 100 companies to deliver mission-critical outcomes.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChoose.map((item) => (
                <div key={item.title} className="p-6 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <item.icon className="w-5 h-5 mb-4" style={{ color: "#CF7E34" }} />
                  <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Models */}
      <section id="delivery" className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "#CF7E34" }}>
              Flexible Engagement
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">
              Global Delivery Models
            </h2>
            <p className="text-base max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              Multiple delivery centers across three continents ensure on-time delivery with the right balance of quality, speed, and cost efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {deliveryModels.map((model) => (
              <div
                key={model.name}
                className="p-8 rounded-xl text-center"
                style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "rgba(207,126,52,0.1)" }}>
                  <model.icon className="w-7 h-7" style={{ color: "#CF7E34" }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{model.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20" style={{ backgroundColor: "#0C0C0C" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
            <div>
              <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-3" style={{ color: "#CF7E34" }}>
                Industry Expertise
              </p>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Sectors We Serve
              </h2>
            </div>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
              Deep domain expertise across regulated and high-complexity industries where failure is not an option.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="px-5 py-2.5 rounded-full text-sm font-medium"
                style={{ backgroundColor: "rgba(207,126,52,0.06)", border: "1px solid rgba(207,126,52,0.2)", color: "rgba(255,255,255,0.6)" }}
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "#CF7E34" }}>
              Our Team
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">
              Leadership
            </h2>
            <p className="text-base max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              Experienced technology leaders with decades of combined expertise in enterprise consulting, delivery management, and IT operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="p-7 rounded-xl"
                style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-lg flex-shrink-0 flex items-center justify-center text-lg font-black"
                    style={{ background: "linear-gradient(135deg, #CF7E34, #E8A84C)", color: "#0C0C0C" }}
                  >
                    {person.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white">{person.name}</h3>
                    <p className="text-[12px] font-semibold tracking-[0.1em] uppercase mt-0.5 mb-3" style={{ color: "#CF7E34" }}>
                      {person.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{person.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / History */}
      <section id="about" className="py-24 relative overflow-hidden" style={{ backgroundColor: "#0C0C0C" }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.03]" style={{
          background: "radial-gradient(circle, #CF7E34 0%, transparent 60%)",
        }} />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "#CF7E34" }}>
                About Greatbell Inc
              </p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-6">
                A Decade of Delivering<br />
                <span style={{ color: "rgba(255,255,255,0.35)" }}>Enterprise Excellence</span>
              </h2>
              <div className="space-y-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                <p>
                  Founded in 2014, Greatbell Inc was built on a singular vision: that gaps in the technological environment should never be a bottleneck in today&apos;s fast-approaching project deadlines and high-turnover environments.
                </p>
                <p>
                  From our founding, we set out to provide enterprise-grade IT services — installation, integration, maintenance, migration, and technical support — that reduce the disruption of daily business, minimize downtime, and conserve resources so our clients can focus on what matters most: their business goals.
                </p>
                <p>
                  Today, Greatbell operates from multiple delivery centers spanning onsite, nearshore, and offshore locations. We have partnered with world-class IT organizations including Fortune 100 companies, establishing ourselves as the preferred IT partner for major players across financial services, healthcare, telecommunications, and technology.
                </p>
                <p>
                  Our consultants are committed to keeping pace with the ever-changing and dynamic world of information technology. Whether the engagement calls for a single business analyst or a 50-person delivery team, Greatbell assembles the right talent, at the right time, in the right location.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-5">
              <div className="p-6 rounded-xl" style={{ backgroundColor: "rgba(207,126,52,0.06)", border: "1px solid rgba(207,126,52,0.15)" }}>
                <Target className="w-5 h-5 mb-3" style={{ color: "#CF7E34" }} />
                <h3 className="text-sm font-bold text-white mb-2">Our Mission</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                  To grow businesses and improve customer experiences by delivering best-in-class IT services that eliminate technology bottlenecks and accelerate innovation.
                </p>
              </div>
              <div className="p-6 rounded-xl" style={{ backgroundColor: "rgba(207,126,52,0.06)", border: "1px solid rgba(207,126,52,0.15)" }}>
                <BarChart3 className="w-5 h-5 mb-3" style={{ color: "#CF7E34" }} />
                <h3 className="text-sm font-bold text-white mb-2">Our Approach</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                  A dedicated team model — not a vendor relationship. When you engage Greatbell, you get a committed partner invested in your success, not a rotating cast of contractors.
                </p>
              </div>
              <div className="p-6 rounded-xl" style={{ backgroundColor: "rgba(207,126,52,0.06)", border: "1px solid rgba(207,126,52,0.15)" }}>
                <Globe className="w-5 h-5 mb-3" style={{ color: "#CF7E34" }} />
                <h3 className="text-sm font-bold text-white mb-2">Global Reach</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Delivery centers across North America and Asia providing follow-the-sun coverage, cultural alignment, and the flexibility to scale teams up or down as projects demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "#CF7E34" }}>
              Client Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-7 rounded-xl flex flex-col"
                style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                {/* Quote mark */}
                <div className="text-4xl font-black leading-none mb-4" style={{ color: "rgba(207,126,52,0.3)" }}>&ldquo;</div>
                <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {t.quote}
                </p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} className="pt-5">
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-[12px] mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "#0C0C0C" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{
          background: "radial-gradient(ellipse at center, #CF7E34 0%, transparent 60%)",
        }} />
        <div className="max-w-6xl mx-auto px-6 text-center relative">
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-5" style={{ color: "#CF7E34" }}>
            Let&apos;s Build Together
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">
            Ready to Eliminate<br />
            Technology Bottlenecks?
          </h2>
          <p className="text-base max-w-lg mx-auto mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
            Whether you need a full data migration, an embedded project team, or a strategic IT assessment — Greatbell delivers. Contact us to start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:2489100604"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg text-sm font-bold tracking-wide transition-all hover:brightness-110"
              style={{ background: "linear-gradient(135deg, #CF7E34, #E8A84C)", color: "#0C0C0C" }}
            >
              <Phone className="w-4 h-4" />
              (248) 910-0604
            </a>
            <a
              href="mailto:raja@greatbellinc.com"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg text-sm font-bold tracking-wide transition-all hover:border-[#CF7E34]"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#FFFFFF" }}
            >
              <Mail className="w-4 h-4" />
              raja@greatbellinc.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#080808", borderTop: "1px solid rgba(207,126,52,0.1)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #CF7E34, #E8A84C)" }}>
                  <span className="text-[10px] font-black tracking-wider" style={{ color: "#0C0C0C" }}>GB</span>
                </div>
                <div>
                  <span className="text-sm font-bold text-white">GREATBELL</span>
                  <span className="text-[9px] font-medium tracking-[0.15em] uppercase block" style={{ color: "rgba(207,126,52,0.6)" }}>INC</span>
                </div>
              </div>
              <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
                A global IT consulting firm growing businesses and improving customer experiences since 2014. Trusted by Fortune 100 companies worldwide.
              </p>
            </div>

            {/* Services */}
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-5" style={{ color: "rgba(207,126,52,0.5)" }}>
                Services
              </p>
              <div className="space-y-2.5">
                {services.map((s) => (
                  <div key={s.name} className="text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {s.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-5" style={{ color: "rgba(207,126,52,0.5)" }}>
                Contact
              </p>
              <div className="space-y-3 text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                <a href="tel:2489100604" className="flex items-center gap-2.5 hover:text-[#CF7E34] transition-colors">
                  <Phone className="w-3.5 h-3.5" style={{ color: "rgba(207,126,52,0.4)" }} />
                  (248) 910-0604
                </a>
                <a href="mailto:raja@greatbellinc.com" className="flex items-center gap-2.5 hover:text-[#CF7E34] transition-colors">
                  <Mail className="w-3.5 h-3.5" style={{ color: "rgba(207,126,52,0.4)" }} />
                  raja@greatbellinc.com
                </a>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "rgba(207,126,52,0.4)" }} />
                  <span>4432 E Desert Willow Rd<br />Phoenix, AZ 85044</span>
                </div>
                <a href="https://greatbellinc.com" className="flex items-center gap-2.5 hover:text-[#CF7E34] transition-colors" target="_blank" rel="noopener noreferrer">
                  <Globe className="w-3.5 h-3.5" style={{ color: "rgba(207,126,52,0.4)" }} />
                  greatbellinc.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-[12px]"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.2)" }}
          >
            <p>&copy; {new Date().getFullYear()} Greatbell Inc. All rights reserved.</p>
            <p>
              Website by{" "}
              <a href="/" className="transition-colors hover:text-[#CF7E34]" style={{ color: "rgba(207,126,52,0.5)" }}>
                Ego Web Design
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

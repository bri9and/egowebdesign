import {
  Phone,
  Mail,
  MapPin,
  Scale,
  Shield,
  Heart,
  Car,
  Users,
  Gavel,
  Star,
  Quote,
  ChevronRight,
  Clock,
  Award,
  BookOpen,
  Briefcase,
  ArrowRight,
  Baby,
  Home,
  FileText,
  UserCheck,
  HandCoins,
} from "lucide-react";

export const metadata = {
  title:
    "Arizona Law Group | Divorce Lawyer & Family Law Attorneys | Phoenix AZ",
  description:
    "Facing legal challenges? Arizona Law Group provides experienced family law, criminal defense, and personal injury representation across the Phoenix metro area. 200+ years combined experience, 10,000+ cases. Call (602) 562-2222.",
};

const IMG = "/sites/arizona-law-group";

/* ── Color Palette: Arizona Desert ── */
const colors = {
  terracotta: "#C2553A",
  terracottaDark: "#A34430",
  sand: "#F5E6D3",
  sandLight: "#FBF5ED",
  cream: "#FFFAF4",
  deepSky: "#1B3A5C",
  deepSkyDark: "#122840",
  copper: "#B87333",
  sage: "#7A8B6F",
  warmGray: "#6B5E54",
  charcoal: "#2D2520",
  white: "#FFFFFF",
} as const;

const sans = { fontFamily: "system-ui, -apple-system, sans-serif" } as const;
const serif = {
  fontFamily: "'Georgia', 'Palatino Linotype', 'Times New Roman', serif",
} as const;

/* ── Practice Areas ── */
const practiceAreas = [
  {
    icon: Heart,
    title: "Family Law",
    desc: "Divorce, child custody, child support, spousal maintenance, paternity, and adoption. We protect what matters most during life's most difficult transitions.",
    items: [
      "Divorce & Legal Separation",
      "Child Custody & Visitation",
      "Child Support",
      "Spousal Maintenance",
      "Paternity",
      "Adoption",
      "Military Divorce",
      "High Net-Worth Divorce",
      "Father's Rights",
      "Post-Judgment Modifications",
    ],
  },
  {
    icon: Shield,
    title: "Criminal Defense",
    desc: "Aggressive defense against misdemeanor and felony charges. We fight to protect your rights, your freedom, and your future in every courtroom across Arizona.",
    items: [
      "DUI Defense",
      "Drug Offenses",
      "Assault & Battery",
      "Theft Crimes",
      "Domestic Violence Defense",
      "White Collar Crimes",
    ],
  },
  {
    icon: Car,
    title: "Personal Injury",
    desc: "When negligence causes harm, we pursue the full compensation you deserve. Car accidents, slip-and-fall, medical malpractice, and more.",
    items: [
      "Car Accidents",
      "Truck Accidents",
      "Motorcycle Accidents",
      "Slip & Fall",
      "Medical Malpractice",
      "Wrongful Death",
    ],
  },
];

/* ── Family Law Sub-Services ── */
const familyLawServices = [
  {
    icon: Scale,
    title: "Divorce",
    desc: "Strategic guidance through contested and uncontested divorce proceedings.",
  },
  {
    icon: Baby,
    title: "Child Custody",
    desc: "Protecting parental rights and your children's best interests.",
  },
  {
    icon: HandCoins,
    title: "Child Support",
    desc: "Ensuring fair financial support arrangements for your children.",
  },
  {
    icon: Home,
    title: "Asset Division",
    desc: "Equitable division of marital property, debts, and assets.",
  },
  {
    icon: UserCheck,
    title: "Father's Rights",
    desc: "Advocating for fathers seeking custody, visitation, and equal treatment.",
  },
  {
    icon: FileText,
    title: "Post-Judgment Modifications",
    desc: "Modifying existing orders when circumstances change.",
  },
];

/* ── Attorneys ── */
const attorneys = [
  {
    name: "Scott David Stewart",
    role: "Founder",
    img: `${IMG}/stewart.jpg`,
    desc: "Visionary founder of Arizona Law Group, Scott built the firm on a foundation of client-first advocacy and aggressive yet compassionate legal representation across family, criminal, and personal injury law.",
  },
  {
    name: "Amy Dohrendorf",
    role: "Attorney Manager",
    img: `${IMG}/dohrendorf.jpg`,
    desc: "As Attorney Manager, Amy ensures seamless case management and team coordination, keeping the firm running at peak efficiency for every client.",
  },
  {
    name: "Melissa Kleminski Bower",
    role: "Partner",
    img: `${IMG}/bower.jpg`,
    desc: "A skilled litigator and partner, Melissa brings tenacious advocacy and meticulous preparation to complex family law and divorce cases.",
  },
  {
    name: "Robert C. Howard, Jr.",
    role: "Attorney",
    img: `${IMG}/howard.jpg`,
    desc: "Robert combines deep legal knowledge with genuine client care, earning a reputation for thorough preparation and strong courtroom results.",
  },
  {
    name: "Jennifer Mihalovich",
    role: "Partner",
    img: `${IMG}/mihalovich.jpg`,
    desc: "As a partner, Jennifer leads with empathy and sharp legal acumen, guiding clients through high-stakes family law matters with confidence.",
  },
  {
    name: "Fred Ruotolo",
    role: "Partner",
    img: `${IMG}/ruotolo.jpg`,
    desc: "Fred is a seasoned partner whose strategic thinking and courtroom presence deliver outstanding outcomes for clients facing serious legal challenges.",
  },
  {
    name: "Colin Bell",
    role: "Attorney",
    img: `${IMG}/bell.jpg`,
    desc: "Colin is recognized for his professional, courteous approach and his dedication to restoring stability and fairness for every client he represents.",
  },
  {
    name: "Nichole Oblinger",
    role: "Attorney",
    img: `${IMG}/oblinger.jpg`,
    desc: "Nichole brings a detail-oriented and compassionate approach to family law, ensuring clients feel supported through every stage of their case.",
  },
  {
    name: "PJ Judd",
    role: "Attorney",
    img: `${IMG}/judd.jpg`,
    desc: "PJ is a dedicated advocate who combines thorough legal research with a relentless commitment to achieving the best possible outcome.",
  },
  {
    name: "Patricia Lenzner",
    role: "Attorney",
    img: `${IMG}/lenzner.jpg`,
    desc: "Patricia draws on extensive experience to guide clients through challenging legal situations with clarity, patience, and practical solutions.",
  },
  {
    name: "Max Hanson",
    role: "Attorney",
    img: `${IMG}/hanson.png`,
    desc: "Max brings fresh perspective and sharp analytical skills to every case, delivering innovative legal strategies for modern challenges.",
  },
  {
    name: "Gary Rohlwing",
    role: "Attorney",
    img: `${IMG}/rohlwing.jpg`,
    desc: "Gary is a trusted advocate whose client-focused approach and legal expertise make him a valuable asset in both the courtroom and at the negotiation table.",
  },
];

/* ── Office Locations ── */
const offices = [
  {
    city: "Phoenix",
    address: "202 E Earll Dr, Ste 160, Phoenix, AZ 85012",
    phone: "(602) 548-3400",
  },
  {
    city: "Scottsdale",
    address: "14362 N. Frank Lloyd Wright Blvd., Suite #2136, Scottsdale, AZ 85260",
    phone: "(480) 425-1400",
  },
  {
    city: "Chandler",
    address: "1490 S. Price Rd Suite 118, Chandler, AZ 85286",
    phone: "(480) 813-4800",
  },
  {
    city: "Gilbert",
    address: "1166 E Warner Rd, Suite 101, Gilbert, AZ 85296",
    phone: "(480) 409-0440",
  },
  {
    city: "Glendale",
    address: "20325 N 51st Ave, Ste 134, Glendale, AZ 85308",
    phone: "(623) 815-4700",
  },
  {
    city: "Mesa",
    address: "2929 N Power Rd, Ste C9, Mesa, AZ 85215",
    phone: "(480) 491-0109",
  },
  {
    city: "Peoria",
    address: "14050 N 83rd Ave Ste 290, Peoria, AZ 85381",
    phone: "(623) 561-8200",
  },
  {
    city: "Avondale",
    address: "12725 W Indian School Rd, E-101-102, Avondale, AZ 85392",
    phone: "(623) 979-2100",
  },
  {
    city: "Surprise",
    address: "15331 W Bell Rd #212, Surprise, AZ 85374",
    phone: "(623) 263-1000",
  },
  {
    city: "Tempe",
    address: "4700 S Mill Ave, Ste 5, Tempe, AZ 85282",
    phone: "(480) 420-0502",
  },
];

/* ── Testimonials ── */
const testimonials = [
  {
    name: "P.O.",
    source: "Google Review",
    text: "My experience with this firm was very professional and courteous. They were certainly patient and understanding and, most importantly, helpful.",
    stars: 5,
  },
  {
    name: "J.P.",
    source: "Google Review",
    text: "I think I smiled for the first time in two years... I saw my son for two hours tonight, and I'm still in shock.",
    stars: 5,
  },
  {
    name: "R.L.",
    source: "Google Review",
    text: "My attorney was Colin Bell. He was very helpful with resolving my case and restoring my situation almost back to normal.",
    stars: 5,
  },
  {
    name: "D.K.",
    source: "Google Review",
    text: "Excellent group. Knowledgeable and friendly. I worked with Melissa Bower and her team.",
    stars: 5,
  },
  {
    name: "Stephanie",
    source: "Google Review",
    text: "I worked with Howard and his team and recommend them to anyone. Hailie was quick to respond to any questions. Howard is genuine, knowledgeable and upfront with all outcomes.",
    stars: 5,
  },
  {
    name: "George R.",
    source: "Google Review",
    text: "Fernando took the time to actually listen and give real advice to me. It was a very nice balance. If I need any further legal help, this is where I will go.",
    stars: 5,
  },
];

/* ── Stats ── */
const stats = [
  { value: "200+", label: "Years Combined Experience" },
  { value: "10,000+", label: "Successful Cases" },
  { value: "10", label: "Valley Offices" },
  { value: "4.8", label: "Star Rating (400+ Reviews)" },
];

/* ── Nav Links ── */
const navLinks = [
  { label: "Practice Areas", href: "#practice-areas" },
  { label: "About", href: "#about" },
  { label: "Attorneys", href: "#attorneys" },
  { label: "Locations", href: "#locations" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function ArizonaLawGroupPage() {
  return (
    <div style={{ ...sans, color: colors.charcoal, background: colors.cream }}>
      {/* ── Header / Nav ── */}
      <header
        style={{ background: colors.deepSky }}
        className="sticky top-0 z-50 shadow-lg"
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={`${IMG}/logo-white.svg`}
              alt="Arizona Law Group"
              className="h-10 md:h-12 w-auto"
            />
            <div>
              <h1
                className="text-lg md:text-xl font-bold leading-tight"
                style={{ ...serif, color: colors.white }}
              >
                Arizona Law Group
              </h1>
              <p
                className="text-xs hidden sm:block"
                style={{ color: colors.sand }}
              >
                Divorce &amp; Family Law Attorneys
              </p>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium hover:opacity-80 transition-opacity"
                style={{ color: colors.sand }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="tel:+16025622222"
            className="flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm transition-all hover:brightness-110"
            style={{ background: colors.terracotta, color: colors.white }}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">(602) 562-2222</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${colors.deepSkyDark} 0%, ${colors.deepSky} 50%, ${colors.terracottaDark} 100%)`,
          minHeight: "600px",
        }}
      >
        {/* Desert pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, ${colors.copper} 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${colors.terracotta} 0%, transparent 50%)`,
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 lg:py-36 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{
                background: `${colors.copper}30`,
                color: colors.copper,
                border: `1px solid ${colors.copper}50`,
              }}
            >
              <Award className="w-4 h-4" />
              200+ Years Combined Experience
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ ...serif, color: colors.white }}
            >
              Facing Legal Challenges?{" "}
              <span style={{ color: colors.copper }}>
                Peace of Mind Starts Here.
              </span>
            </h2>
            <p
              className="text-lg md:text-xl leading-relaxed mb-8"
              style={{ color: colors.sand, opacity: 0.9 }}
            >
              With our careful guidance, you will begin making substantive plans
              for a better tomorrow. Trusted by 10,000+ clients across the
              Phoenix Valley.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+16025622222"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold text-lg transition-all hover:brightness-110"
                style={{ background: colors.terracotta, color: colors.white }}
              >
                <Phone className="w-5 h-5" />
                Free Consultation
              </a>
              <a
                href="#practice-areas"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold text-lg transition-all hover:opacity-90"
                style={{
                  background: "transparent",
                  color: colors.white,
                  border: `2px solid ${colors.copper}`,
                }}
              >
                Our Practice Areas
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{ border: `4px solid ${colors.copper}40` }}
            >
              <img
                src={`${IMG}/content-01.jpg`}
                alt="Arizona Law Group attorney"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -left-6 p-4 rounded-xl shadow-lg"
              style={{ background: colors.white }}
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5"
                      fill={colors.copper}
                      style={{ color: colors.copper }}
                    />
                  ))}
                </div>
                <span
                  className="text-sm font-bold"
                  style={{ color: colors.charcoal }}
                >
                  4.8/5
                </span>
              </div>
              <p className="text-xs mt-1" style={{ color: colors.warmGray }}>
                400+ Google Reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ background: colors.deepSkyDark }}>
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="text-3xl md:text-4xl font-bold"
                style={{ ...serif, color: colors.copper }}
              >
                {s.value}
              </p>
              <p
                className="text-sm mt-1"
                style={{ color: colors.sand, opacity: 0.8 }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Practice Areas ── */}
      <section id="practice-areas" className="py-20" style={{ background: colors.cream }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-2"
              style={{ color: colors.terracotta }}
            >
              How We Help
            </p>
            <h3
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ ...serif, color: colors.deepSky }}
            >
              Practice Areas
            </h3>
            <p
              className="max-w-2xl mx-auto text-lg"
              style={{ color: colors.warmGray }}
            >
              Arizona Law Group provides comprehensive legal representation
              across three core practice areas, serving families and individuals
              throughout the Phoenix Valley.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {practiceAreas.map((pa) => (
              <div
                key={pa.title}
                className="rounded-xl p-8 transition-all hover:shadow-xl"
                style={{
                  background: colors.white,
                  border: `1px solid ${colors.sand}`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
                  style={{ background: `${colors.terracotta}15` }}
                >
                  <pa.icon
                    className="w-7 h-7"
                    style={{ color: colors.terracotta }}
                  />
                </div>
                <h4
                  className="text-xl font-bold mb-3"
                  style={{ ...serif, color: colors.deepSky }}
                >
                  {pa.title}
                </h4>
                <p className="mb-5" style={{ color: colors.warmGray, lineHeight: 1.7 }}>
                  {pa.desc}
                </p>
                <ul className="space-y-2">
                  {pa.items.slice(0, 6).map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: colors.charcoal }}
                    >
                      <ChevronRight
                        className="w-3.5 h-3.5 flex-shrink-0"
                        style={{ color: colors.copper }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Family Law Detail Section ── */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(180deg, ${colors.sandLight} 0%, ${colors.cream} 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-2"
              style={{ color: colors.terracotta }}
            >
              Our Core Focus
            </p>
            <h3
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ ...serif, color: colors.deepSky }}
            >
              Family Law Services
            </h3>
            <p
              className="max-w-2xl mx-auto text-lg"
              style={{ color: colors.warmGray }}
            >
              Navigating family legal matters requires sensitivity, experience,
              and unwavering advocacy. We handle every aspect of Arizona family
              law.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {familyLawServices.map((s) => (
              <div
                key={s.title}
                className="flex items-start gap-4 p-6 rounded-lg transition-all hover:shadow-md"
                style={{
                  background: colors.white,
                  border: `1px solid ${colors.sand}`,
                }}
              >
                <div
                  className="w-11 h-11 rounded-md flex items-center justify-center flex-shrink-0"
                  style={{ background: `${colors.deepSky}10` }}
                >
                  <s.icon
                    className="w-5 h-5"
                    style={{ color: colors.deepSky }}
                  />
                </div>
                <div>
                  <h5
                    className="font-bold mb-1"
                    style={{ color: colors.deepSky }}
                  >
                    {s.title}
                  </h5>
                  <p className="text-sm" style={{ color: colors.warmGray, lineHeight: 1.6 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-20" style={{ background: colors.cream }}>
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-2"
              style={{ color: colors.terracotta }}
            >
              About the Firm
            </p>
            <h3
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ ...serif, color: colors.deepSky }}
            >
              Fighting for Arizona Families Since Day One
            </h3>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: colors.warmGray }}
            >
              Arizona Law Group was founded by Scott David Stewart with a simple
              mission: provide accessible, aggressive, and compassionate legal
              representation to families and individuals across the Phoenix
              Valley. Today, our team of 12+ attorneys operates from 10 offices,
              making experienced legal counsel just minutes away for every
              Arizonan.
            </p>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: colors.warmGray }}
            >
              We limit our caseloads deliberately so every client gets the
              focused attention they deserve. With 200+ years of combined
              experience and over 10,000 successful cases, our track record
              speaks for itself. When your future is on the line, Arizona Law
              Group stands beside you.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Briefcase, text: "Limited Caseloads" },
                { icon: Users, text: "Client-Focused" },
                { icon: Award, text: "Award-Winning" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: `${colors.deepSky}10`,
                    color: colors.deepSky,
                  }}
                >
                  <item.icon className="w-4 h-4" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden shadow-xl"
              style={{ border: `3px solid ${colors.copper}30` }}
            >
              <img
                src={`${IMG}/content-03.jpg`}
                alt="Arizona Law Group - Family legal support"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl flex flex-col items-center justify-center shadow-lg"
              style={{ background: colors.terracotta }}
            >
              <span
                className="text-3xl font-bold"
                style={{ ...serif, color: colors.white }}
              >
                10K+
              </span>
              <span className="text-xs" style={{ color: colors.sand }}>
                Cases Won
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Attorneys ── */}
      <section
        id="attorneys"
        className="py-20"
        style={{
          background: `linear-gradient(180deg, ${colors.deepSky} 0%, ${colors.deepSkyDark} 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-2"
              style={{ color: colors.copper }}
            >
              Meet Our Team
            </p>
            <h3
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ ...serif, color: colors.white }}
            >
              Our Attorneys
            </h3>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: colors.sand, opacity: 0.85 }}>
              A dedicated team of legal professionals committed to achieving the
              best possible outcome for every client.
            </p>
          </div>
          {/* Founder - featured card */}
          <div
            className="rounded-2xl p-8 mb-10 grid md:grid-cols-[280px_1fr] gap-8 items-center"
            style={{
              background: `${colors.white}10`,
              border: `1px solid ${colors.copper}30`,
              backdropFilter: "blur(8px)",
            }}
          >
            <img
              src={attorneys[0].img}
              alt={attorneys[0].name}
              className="w-full h-72 md:h-64 object-cover object-[50%_15%] rounded-xl"
            />
            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                style={{
                  background: `${colors.copper}30`,
                  color: colors.copper,
                }}
              >
                {attorneys[0].role}
              </span>
              <h4
                className="text-2xl font-bold mb-3"
                style={{ ...serif, color: colors.white }}
              >
                {attorneys[0].name}
              </h4>
              <p
                className="text-base leading-relaxed"
                style={{ color: colors.sand, opacity: 0.9 }}
              >
                {attorneys[0].desc}
              </p>
            </div>
          </div>
          {/* Partners */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {attorneys.slice(1, 6).map((a) => (
              <div
                key={a.name}
                className="rounded-xl overflow-hidden transition-all hover:scale-[1.02]"
                style={{
                  background: `${colors.white}08`,
                  border: `1px solid ${colors.white}15`,
                }}
              >
                <img
                  src={a.img}
                  alt={a.name}
                  className="w-full h-64 object-cover object-[50%_15%]"
                />
                <div className="p-5">
                  <span
                    className="text-xs font-medium uppercase tracking-wider"
                    style={{ color: colors.copper }}
                  >
                    {a.role}
                  </span>
                  <h5
                    className="text-lg font-bold mt-1 mb-2"
                    style={{ ...serif, color: colors.white }}
                  >
                    {a.name}
                  </h5>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: colors.sand, opacity: 0.8 }}
                  >
                    {a.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Associate Attorneys */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {attorneys.slice(6).map((a) => (
              <div
                key={a.name}
                className="rounded-xl overflow-hidden transition-all hover:scale-[1.02]"
                style={{
                  background: `${colors.white}08`,
                  border: `1px solid ${colors.white}15`,
                }}
              >
                <img
                  src={a.img}
                  alt={a.name}
                  className="w-full h-64 object-cover object-[50%_15%]"
                />
                <div className="p-5">
                  <span
                    className="text-xs font-medium uppercase tracking-wider"
                    style={{ color: colors.copper }}
                  >
                    {a.role}
                  </span>
                  <h5
                    className="text-lg font-bold mt-1 mb-2"
                    style={{ ...serif, color: colors.white }}
                  >
                    {a.name}
                  </h5>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: colors.sand, opacity: 0.8 }}
                  >
                    {a.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Areas / Locations ── */}
      <section id="locations" className="py-20" style={{ background: colors.sandLight }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-2"
              style={{ color: colors.terracotta }}
            >
              10 Offices Across Arizona
            </p>
            <h3
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ ...serif, color: colors.deepSky }}
            >
              Serving the Entire Phoenix Valley
            </h3>
            <p
              className="max-w-2xl mx-auto text-lg"
              style={{ color: colors.warmGray }}
            >
              With offices in every major city across the Valley, experienced
              legal counsel is always close to home.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {offices.map((o) => (
              <div
                key={o.city}
                className="rounded-lg p-5 text-center transition-all hover:shadow-lg hover:-translate-y-1"
                style={{
                  background: colors.white,
                  border: `1px solid ${colors.sand}`,
                }}
              >
                <MapPin
                  className="w-6 h-6 mx-auto mb-3"
                  style={{ color: colors.terracotta }}
                />
                <h5
                  className="font-bold text-lg mb-2"
                  style={{ color: colors.deepSky }}
                >
                  {o.city}
                </h5>
                <p
                  className="text-xs mb-3 leading-relaxed"
                  style={{ color: colors.warmGray }}
                >
                  {o.address}
                </p>
                <a
                  href={`tel:${o.phone.replace(/[^+\d]/g, "")}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
                  style={{ color: colors.terracotta }}
                >
                  <Phone className="w-3.5 h-3.5" />
                  {o.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="py-20" style={{ background: colors.cream }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-2"
              style={{ color: colors.terracotta }}
            >
              Client Stories
            </p>
            <h3
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ ...serif, color: colors.deepSky }}
            >
              What Our Clients Say
            </h3>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6"
                  fill={colors.copper}
                  style={{ color: colors.copper }}
                />
              ))}
            </div>
            <p className="text-lg font-medium" style={{ color: colors.warmGray }}>
              4.8 out of 5 stars from 400+ reviews
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl p-7 transition-all hover:shadow-lg"
                style={{
                  background: colors.white,
                  border: `1px solid ${colors.sand}`,
                }}
              >
                <Quote
                  className="w-8 h-8 mb-4"
                  style={{ color: `${colors.copper}40` }}
                />
                <p
                  className="text-base leading-relaxed mb-5"
                  style={{ ...serif, color: colors.charcoal, fontStyle: "italic" }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="font-bold text-sm"
                      style={{ color: colors.deepSky }}
                    >
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: colors.warmGray }}>
                      {t.source}
                    </p>
                  </div>
                  <div className="flex">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4"
                        fill={colors.copper}
                        style={{ color: colors.copper }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="contact"
        className="py-20"
        style={{
          background: `linear-gradient(135deg, ${colors.terracotta} 0%, ${colors.terracottaDark} 50%, ${colors.deepSky} 100%)`,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Gavel
            className="w-12 h-12 mx-auto mb-6"
            style={{ color: colors.copper }}
          />
          <h3
            className="text-3xl md:text-4xl font-bold mb-5"
            style={{ ...serif, color: colors.white }}
          >
            Ready to Fight for Your Future?
          </h3>
          <p
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: colors.sand, opacity: 0.9 }}
          >
            Whether you are facing a divorce, criminal charges, or an injury
            case, our attorneys are ready to listen and fight for you. Contact us
            today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="tel:+16025622222"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg"
              style={{ background: colors.white, color: colors.terracotta }}
            >
              <Phone className="w-6 h-6" />
              (602) 562-2222
            </a>
            <a
              href="#locations"
              className="inline-flex items-center gap-2 px-8 py-5 rounded-lg font-bold text-lg transition-all hover:opacity-90"
              style={{
                background: "transparent",
                color: colors.white,
                border: `2px solid ${colors.white}`,
              }}
            >
              <MapPin className="w-5 h-5" />
              Find an Office Near You
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm" style={{ color: colors.sand, opacity: 0.8 }}>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Consultations Available Now
            </span>
            <span className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Free Case Evaluation
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Confidential &amp; No Obligation
            </span>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: colors.deepSkyDark }}>
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Firm Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={`${IMG}/logo-white.svg`}
                  alt="Arizona Law Group"
                  className="h-9 w-auto"
                />
                <h4
                  className="text-lg font-bold"
                  style={{ ...serif, color: colors.white }}
                >
                  Arizona Law Group
                </h4>
              </div>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: colors.sand, opacity: 0.7 }}
              >
                Divorce Lawyer &amp; Family Law Attorneys serving the entire
                Phoenix metropolitan area with 10 convenient office locations.
              </p>
              <a
                href="tel:+16025622222"
                className="flex items-center gap-2 text-base font-bold hover:underline"
                style={{ color: colors.copper }}
              >
                <Phone className="w-4 h-4" />
                (602) 562-2222
              </a>
            </div>
            {/* Practice Areas */}
            <div>
              <h5
                className="text-sm font-semibold uppercase tracking-wider mb-4"
                style={{ color: colors.copper }}
              >
                Practice Areas
              </h5>
              <ul className="space-y-2">
                {["Family Law", "Criminal Defense", "Personal Injury", "Divorce", "Child Custody", "DUI Defense"].map(
                  (area) => (
                    <li key={area}>
                      <a
                        href="#practice-areas"
                        className="text-sm hover:underline flex items-center gap-2"
                        style={{ color: colors.sand, opacity: 0.7 }}
                      >
                        <ChevronRight className="w-3 h-3" />
                        {area}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            {/* Offices Quick List */}
            <div>
              <h5
                className="text-sm font-semibold uppercase tracking-wider mb-4"
                style={{ color: colors.copper }}
              >
                Office Locations
              </h5>
              <ul className="space-y-2">
                {offices.slice(0, 6).map((o) => (
                  <li key={o.city}>
                    <a
                      href={`tel:${o.phone.replace(/[^+\d]/g, "")}`}
                      className="text-sm hover:underline flex items-center gap-2"
                      style={{ color: colors.sand, opacity: 0.7 }}
                    >
                      <MapPin className="w-3 h-3" />
                      {o.city} &mdash; {o.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderColor: `${colors.white}15` }}
          >
            <p className="text-xs" style={{ color: colors.sand, opacity: 0.5 }}>
              &copy; {new Date().getFullYear()} Arizona Law Group. All rights
              reserved.
            </p>
            <p className="text-xs" style={{ color: colors.sand, opacity: 0.5 }}>
              Website by{" "}
              <a href="/" className="underline hover:opacity-80">
                KPT Designs
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

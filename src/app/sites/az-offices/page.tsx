import {
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  Wifi,
  Coffee,
  Printer,
  Users,
  Building2,
  Monitor,
  Shield,
  CheckCircle,
  ChevronRight,
  Briefcase,
  CalendarDays,
  DoorOpen,
  Landmark,
  Sparkles,
  ParkingCircle,
  UtensilsCrossed,
  Lock,
  Presentation,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "AZOffices | Executive Offices, Virtual Offices & Meeting Rooms — Phoenix, Tempe & Gilbert, AZ",
  description:
    "AZOffices — premium executive offices, virtual offices, coworking, and meeting rooms across Phoenix, Tempe, and Gilbert, Arizona. All-inclusive pricing from $69/mo. No deposits, no credit checks, same-day move-in. Call (480) 750-0077.",
};

const IMG = "/sites/az-offices";

const PHONE = "(480) 750-0077";
const PHONE_RAW = "4807500077";
const PHONE_TOLL = "(800) 931-0399";
const PHONE_TOLL_RAW = "8009310399";
const EMAIL = "Leasing@azoffices.com";

/* ── Color Palette ──
   Charcoal:       #1C1C1E  (primary dark)
   Deep Navy:      #0F172A  (footer/dark sections)
   Electric Blue:  #2563EB  (primary accent)
   Light Blue:     #3B82F6  (secondary accent)
   Sky:            #DBEAFE  (light tint)
   Off-White:      #F8FAFC  (backgrounds)
   White:          #FFFFFF
   Orange Pop:     #F97316  (CTA accent)
*/

const locations = [
  {
    name: "Mill Ave Plaza — Tempe",
    address: "4700 S Mill Ave",
    city: "Tempe, AZ 85282",
    desc: "Between US-60 Freeway and Baseline Rd. Close access to ASU, Sky Harbor Airport, and abundant retail. Executive offices for 1-10 persons, conference rooms, and large training center.",
    features: ["1-10 Person Offices", "Training Center", "Full-Time Receptionist", "Multiple Conference Rooms"],
    img: `${IMG}/office-4.jpg`,
  },
  {
    name: "Heritage Court — Gilbert",
    address: "207 N Gilbert Rd, Suite 001",
    city: "Gilbert, AZ 85234",
    desc: "On Gilbert Road near Elliot Rd in historic downtown Gilbert. Walking distance to shops and restaurants. 3 conference rooms, break room, and full-time receptionist.",
    features: ["1-4 Person Offices", "3 Conference Rooms", "Break Room", "Full-Time Receptionist"],
    img: `${IMG}/office-3.jpg`,
  },
  {
    name: "Weldon — Phoenix",
    address: "67 E Weldon Ave, Suite 200",
    city: "Phoenix, AZ 85012",
    desc: "Central Phoenix location near Camelback corridor. Professional office environment with modern amenities and easy freeway access throughout the Valley.",
    features: ["Executive Suites", "Meeting Rooms", "Virtual Office", "24/7 Access"],
    img: `${IMG}/office-2.jpg`,
  },
];

const packages = [
  {
    name: "Virtual Office",
    price: "$69",
    period: "/mo",
    desc: "Professional business address without the overhead",
    features: [
      "Prestigious AZ business address",
      "Mail handling & forwarding",
      "Use of conference rooms (hourly)",
      "Business phone line available",
      "Company lobby signage",
      "No credit check or deposit",
    ],
    popular: false,
    accent: "#2563EB",
  },
  {
    name: "Executive Office",
    price: "$525",
    period: "/mo",
    desc: "Private furnished office — move in today",
    features: [
      "Fully furnished private office",
      "1-4 person capacity",
      "All utilities included",
      "High-speed internet & Wi-Fi",
      "Full-time receptionist",
      "Conference room access",
      "Kitchen & break room",
      "24/7 secure building access",
    ],
    popular: true,
    accent: "#F97316",
  },
  {
    name: "Meeting Rooms",
    price: "$35",
    period: "/hr",
    desc: "Professional spaces for 6 to 24 people",
    features: [
      "Boardroom-style seating (10-seat)",
      "Large training center (24-seat)",
      "TV/monitor & whiteboard",
      "High-speed Wi-Fi",
      "Catering available",
      "Flexible hourly booking",
    ],
    popular: false,
    accent: "#2563EB",
  },
];

const amenities = [
  { icon: Wifi, label: "High-Speed Wi-Fi", desc: "CAT 6 cabling, enterprise-grade internet" },
  { icon: Coffee, label: "Kitchen & Coffee", desc: "Fully-equipped break room with coffee" },
  { icon: Printer, label: "Print / Scan / Copy", desc: "Shared business center equipment" },
  { icon: Users, label: "Full-Time Receptionist", desc: "Professional front desk staff" },
  { icon: Monitor, label: "TV & Presentation", desc: "Monitors and whiteboards in meeting rooms" },
  { icon: ParkingCircle, label: "Secure Parking", desc: "On-site parking with 24/7 access" },
  { icon: Lock, label: "24/7 Security", desc: "CCTV monitoring, intruder detection" },
  { icon: UtensilsCrossed, label: "Catering Available", desc: "Local restaurant partnerships" },
  { icon: Mail, label: "Mail Services", desc: "Professional mail handling & forwarding" },
  { icon: Shield, label: "Janitorial Service", desc: "Regular commercial cleaning" },
  { icon: Building2, label: "Lobby Signage", desc: "Company branding in shared areas" },
  { icon: Sparkles, label: "Modern Remodel", desc: "Contemporary design with natural light" },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Startup Founder",
    location: "Tempe, AZ",
    text: "The Mill Ave location is perfect for our growing team. We started with a 2-person office and expanded to a 6-person suite seamlessly. The receptionist and conference rooms make us look way more established than we are.",
    rating: 5,
  },
  {
    name: "David R.",
    role: "Attorney",
    location: "Gilbert, AZ",
    text: "Heritage Court in downtown Gilbert gives our law practice the professional image we need. Walking distance to the courthouse and great restaurants for client lunches. The all-inclusive pricing makes budgeting easy.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    role: "Consultant",
    location: "Phoenix, AZ",
    text: "I run my consulting business with just a virtual office and book meeting rooms when I need them. At $69 a month for a real business address plus mail handling, it is unbeatable. Clients are always impressed when we meet in person.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    role: "Real Estate Agent",
    location: "Tempe, AZ",
    text: "Same-day move-in, no credit check, no deposit — I was up and running the day I signed. The training center is great for hosting seminars and the staff treats every one of my clients like VIPs.",
    rating: 5,
  },
  {
    name: "Amy K.",
    role: "Financial Advisor",
    location: "Gilbert, AZ",
    text: "Moved from a traditional lease and cut my overhead by 40%. Everything is included — internet, utilities, cleaning, receptionist. I just show up and focus on my clients. Best business decision I have made.",
    rating: 5,
  },
  {
    name: "Carlos V.",
    role: "Tech Entrepreneur",
    location: "Phoenix, AZ",
    text: "We use meeting rooms across all three locations depending on where our clients are. The booking process is simple and the spaces are always clean, professional, and well-equipped. Highly recommend AZOffices.",
    rating: 5,
  },
];

const processSteps = [
  { step: "01", title: "Choose Your Space", desc: "Browse virtual offices, executive suites, or meeting rooms across our Tempe, Gilbert, and Phoenix locations." },
  { step: "02", title: "Tour & Apply", desc: "Schedule a tour or apply online. No credit checks, no deposits. All-inclusive pricing with no hidden fees." },
  { step: "03", title: "Move In Same Day", desc: "Sign your agreement and move into your fully furnished office immediately. We handle the rest." },
];

export default function AZOffices() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* ═══ TOP BAR ═══ */}
      <div style={{ background: "#0F172A" }} className="text-white py-2 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <a href={`tel:${PHONE_RAW}`} className="flex items-center gap-1.5 hover:text-blue-300 transition-colors">
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">{PHONE}</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a href={`mailto:${EMAIL}`} className="hidden sm:flex items-center gap-1.5 hover:text-blue-300 transition-colors">
              <Mail className="w-3 h-3" />
              {EMAIL}
            </a>
          </div>
          <div className="flex items-center gap-1.5 font-medium" style={{ color: "#F97316" }}>
            <Sparkles className="w-3 h-3" />
            No Deposits &bull; No Credit Checks &bull; Same-Day Move-In
          </div>
        </div>
      </div>

      {/* ═══ HEADER ═══ */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-4">
            <div>
              <div className="text-2xl font-black tracking-tight" style={{ color: "#1C1C1E" }}>
                AZ<span style={{ color: "#2563EB" }}>OFFICES</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-gray-400 -mt-0.5">
                Executive &bull; Virtual &bull; Meeting Rooms
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
              <a href="#spaces" className="hover:text-gray-900 transition-colors">Spaces</a>
              <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#amenities" className="hover:text-gray-900 transition-colors">Amenities</a>
              <a href="#locations" className="hover:text-gray-900 transition-colors">Locations</a>
              <a href="#reviews" className="hover:text-gray-900 transition-colors">Reviews</a>
            </nav>
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-white font-bold text-sm rounded-lg transition-all hover:scale-105"
              style={{ background: "#2563EB" }}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{PHONE}</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </header>

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden" style={{ background: "#1C1C1E" }}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${IMG}/office-7.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(28,28,30,0.92) 0%, rgba(15,23,42,0.88) 100%)" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-bold uppercase tracking-[0.15em]"
                style={{ background: "rgba(37,99,235,0.15)", color: "#60A5FA", border: "1px solid rgba(37,99,235,0.3)" }}
              >
                <Building2 className="w-3.5 h-3.5" />
                Est. 2002 &bull; 4 East Valley Locations
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-6">
                Your Business.
                <br />
                <span style={{ color: "#2563EB" }}>Your Office.</span>
                <br />
                <span className="text-white/40 text-3xl sm:text-4xl lg:text-5xl">Zero Hassle.</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/50 max-w-xl mb-8 leading-relaxed">
                All-inclusive executive offices, virtual offices, and meeting rooms across Phoenix, Tempe, and Gilbert.
                Move in today — no deposits, no credit checks, no long-term contracts.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-lg rounded-lg transition-all hover:scale-105"
                  style={{ background: "#F97316" }}
                >
                  <Phone className="w-5 h-5" />
                  Schedule a Tour
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 px-8 py-4 font-bold text-sm uppercase tracking-wider border-2 rounded-lg transition-colors hover:bg-white/5"
                  style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}
                >
                  View Pricing
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 hidden lg:block">
              <div className="relative">
                <img
                  src={`${IMG}/office-4.jpg`}
                  alt="AZOffices premium lobby with modern seating and chandelier lighting"
                  className="rounded-2xl shadow-2xl w-[420px] h-[300px] object-cover"
                  style={{ border: "2px solid rgba(255,255,255,0.1)" }}
                />
                <div
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl px-5 py-3 shadow-xl flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#DBEAFE" }}>
                    <DoorOpen className="w-5 h-5" style={{ color: "#2563EB" }} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Same-Day Move-In</div>
                    <div className="text-xs text-gray-500">Fully furnished &amp; ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section style={{ background: "#2563EB" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/15">
          {[
            { value: "20+", label: "Years in Business" },
            { value: "4", label: "AZ Locations" },
            { value: "$69", label: "Virtual Office / Mo" },
            { value: "5.0", label: "Google Rating" },
          ].map((s) => (
            <div key={s.label} className="py-6 text-center">
              <div className="text-3xl sm:text-4xl font-black text-white">{s.value}</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.15em] font-bold text-white/60 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ WORKSPACE TYPES ═══ */}
      <section id="spaces" className="py-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-bold mb-3" style={{ color: "#2563EB" }}>
              Flexible Workspace Solutions
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
              Spaces That Work for You
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From a professional mailing address to a fully-furnished corner office — we have the right
              workspace at the right price for every stage of your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Landmark,
                title: "Virtual Offices",
                desc: "Professional business address, mail handling, and conference room access without the cost of physical space. Perfect for remote businesses.",
                img: `${IMG}/office-1.jpg`,
                price: "From $69/mo",
              },
              {
                icon: Briefcase,
                title: "Executive Offices",
                desc: "Private, fully-furnished offices for 1-10 people. All-inclusive pricing covers utilities, internet, receptionist, and more. Move in today.",
                img: `${IMG}/office-7.jpg`,
                price: "From $525/mo",
              },
              {
                icon: Presentation,
                title: "Meeting Rooms",
                desc: "Professional boardrooms and a 24-seat training center with A/V equipment, whiteboards, and catering options. Book by the hour.",
                img: `${IMG}/office-5.jpg`,
                price: "From $35/hr",
              },
            ].map((space) => (
              <div
                key={space.title}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={space.img}
                    alt={space.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur rounded-full text-xs font-bold text-gray-900">
                      <space.icon className="w-3.5 h-3.5" style={{ color: "#2563EB" }} />
                      {space.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{space.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{space.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery strip */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { img: `${IMG}/office-2.jpg`, alt: "Modern reception desk" },
              { img: `${IMG}/office-3.jpg`, alt: "Comfortable lounge area" },
              { img: `${IMG}/office-6.jpg`, alt: "Training center classroom" },
              { img: `${IMG}/office-1.jpg`, alt: "Building exterior" },
            ].map((photo) => (
              <div key={photo.alt} className="h-32 rounded-xl overflow-hidden">
                <img src={photo.img} alt={photo.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-bold mb-3" style={{ color: "#2563EB" }}>
              Transparent All-Inclusive Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
              One Price. Everything Included.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              No hidden fees, no surprise charges. Utilities, internet, cleaning, receptionist, and building
              access are all included in one flat monthly rate.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="relative rounded-2xl p-8 flex flex-col transition-all hover:shadow-xl"
                style={{
                  border: pkg.popular ? `2px solid ${pkg.accent}` : "2px solid #E5E7EB",
                  background: pkg.popular ? "#FFFBF5" : "white",
                }}
              >
                {pkg.popular && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider"
                    style={{ background: "#F97316" }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{pkg.name}</h3>
                  <p className="text-sm text-gray-500">{pkg.desc}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-black text-gray-900">{pkg.price}</span>
                  <span className="text-gray-500 text-sm">{pkg.period}</span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: pkg.accent }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-lg font-bold text-sm transition-all hover:scale-[1.02]"
                  style={{
                    background: pkg.popular ? pkg.accent : "transparent",
                    color: pkg.popular ? "white" : pkg.accent,
                    border: pkg.popular ? "none" : `2px solid ${pkg.accent}`,
                  }}
                >
                  <Phone className="w-4 h-4" />
                  Get Started
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">
            All prices are starting rates. Final pricing depends on office size, location, and term length.
            Contact us for a custom quote.
          </p>
        </div>
      </section>

      {/* ═══ CTA BAND ═══ */}
      <section className="py-12" style={{ background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Ready to See Your New Office?</h2>
            <p className="text-white/70 text-sm mt-1">
              Tour any of our 4 East Valley locations &mdash; walk in or schedule ahead.
            </p>
          </div>
          <a
            href={`tel:${PHONE_RAW}`}
            className="inline-flex items-center gap-3 bg-white px-8 py-4 font-black text-lg rounded-lg transition-all hover:scale-105 shrink-0"
            style={{ color: "#2563EB" }}
          >
            <Phone className="w-5 h-5" />
            Book a Tour
          </a>
        </div>
      </section>

      {/* ═══ AMENITIES ═══ */}
      <section id="amenities" className="py-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-bold mb-3" style={{ color: "#2563EB" }}>
              Everything You Need to Succeed
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
              All-Inclusive Amenities
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Every office comes loaded with the tools and services your business needs. No extra charges, no
              nickel-and-diming.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {amenities.map((a) => (
              <div
                key={a.label}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                  style={{ background: "#DBEAFE" }}
                >
                  <a.icon className="w-5 h-5" style={{ color: "#2563EB" }} />
                </div>
                <h3 className="font-bold text-sm text-gray-900 mb-1">{a.label}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-bold mb-3" style={{ color: "#2563EB" }}>
              Simple &amp; Fast
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
              Move In 3 Easy Steps
            </h2>
          </div>
          <div className="space-y-0">
            {processSteps.map((item, i) => (
              <div
                key={item.step}
                className="flex gap-6 sm:gap-10 py-8"
                style={{ borderTop: i === 0 ? "none" : "1px solid #E5E7EB" }}
              >
                <div className="shrink-0 w-16 sm:w-20 text-right">
                  <span className="text-4xl sm:text-5xl font-black" style={{ color: "#2563EB", opacity: 0.2 }}>
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xl">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LOCATIONS ═══ */}
      <section id="locations" className="py-20" style={{ background: "#0F172A" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-bold mb-3" style={{ color: "#60A5FA" }}>
              Convenient East Valley Locations
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              Find Your Perfect Location
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto">
              Three premier locations across Phoenix, Tempe, and Gilbert — each with easy freeway access,
              nearby dining, and all the amenities your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all group"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={loc.img}
                    alt={loc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-1">{loc.name}</h3>
                  <div className="flex items-start gap-2 text-white/50 text-sm mb-3">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#60A5FA" }} />
                    <span>{loc.address}<br />{loc.city}</span>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed mb-4">{loc.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {loc.features.map((f) => (
                      <span
                        key={f}
                        className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full"
                        style={{ background: "rgba(96,165,250,0.1)", color: "#60A5FA", border: "1px solid rgba(96,165,250,0.2)" }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-4 text-white/40 text-sm">
              <a href={`tel:${PHONE_RAW}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" style={{ color: "#60A5FA" }} />
                {PHONE}
              </a>
              <span className="text-white/20">|</span>
              <a href={`tel:${PHONE_TOLL_RAW}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" style={{ color: "#60A5FA" }} />
                Toll-Free: {PHONE_TOLL}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.2em] font-bold mb-3" style={{ color: "#2563EB" }}>
                Established 2002
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-6">
                Arizona&rsquo;s Trusted Workspace Provider
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Since 2002, AZOffices has been providing Arizona businesses with premium workspace solutions at
                  all-inclusive prices. We opened our first location in downtown Gilbert in 2007 and have since
                  expanded to four convenient East Valley locations.
                </p>
                <p>
                  Our philosophy is simple: give businesses a professional, fully-furnished environment with
                  everything included in one flat rate. No deposits, no credit checks, no long-term contracts. Just
                  show up and focus on what you do best.
                </p>
                <p>
                  From solo entrepreneurs and freelancers to law firms and tech companies, our spacious, recently
                  remodeled offices serve businesses of every size. Our full-time receptionists, modern conference
                  rooms, and attentive on-site management ensure you always make the right impression.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                {[
                  { icon: CalendarDays, label: "Est. 2002" },
                  { icon: Building2, label: "4 Locations" },
                  { icon: Users, label: "100+ Businesses" },
                  { icon: Star, label: "5.0 Google" },
                ].map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "#DBEAFE" }}>
                    <badge.icon className="w-4 h-4" style={{ color: "#2563EB" }} />
                    <span className="text-sm font-bold text-gray-800">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 w-full lg:w-[380px]">
              <div className="grid grid-cols-2 gap-3">
                <img src={`${IMG}/office-2.jpg`} alt="Reception area" className="rounded-xl h-40 object-cover w-full" />
                <img src={`${IMG}/office-5.jpg`} alt="Conference room" className="rounded-xl h-40 object-cover w-full" />
                <img src={`${IMG}/office-6.jpg`} alt="Training center" className="rounded-xl h-40 object-cover w-full col-span-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section id="reviews" className="py-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-bold mb-3" style={{ color: "#2563EB" }}>
              What Our Members Say
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
              Trusted by Arizona Businesses
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" style={{ color: "#F59E0B" }} />
              ))}
            </div>
            <p className="text-gray-500 text-sm">5.0 out of 5 stars on Google</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-all flex flex-col"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" style={{ color: "#F59E0B" }} />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-bold text-sm text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                  <div className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-20 text-center text-white" style={{ background: "linear-gradient(135deg, #1C1C1E 0%, #0F172A 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-bold uppercase tracking-[0.15em]"
            style={{ background: "rgba(249,115,22,0.15)", color: "#F97316", border: "1px solid rgba(249,115,22,0.3)" }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Same-Day Move-In Available
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Your New Office
            <br />
            <span style={{ color: "#2563EB" }}>Is Waiting.</span>
          </h2>
          <p className="text-white/50 mb-8 max-w-lg mx-auto leading-relaxed">
            No deposits. No credit checks. No long-term contracts. Just all-inclusive, premium workspace
            in Arizona&rsquo;s best locations. Tour today and move in tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-flex items-center gap-3 px-10 py-5 font-black text-lg rounded-lg transition-all hover:scale-105"
              style={{ background: "#F97316", color: "white" }}
            >
              <Phone className="w-5 h-5" />
              {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 px-8 py-5 font-bold text-sm rounded-lg border-2 transition-colors hover:bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}
            >
              <Mail className="w-4 h-4" />
              {EMAIL}
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-white/30 text-xs uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              Tempe
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              Gilbert
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              Phoenix
            </span>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ background: "#0F172A" }} className="text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="mb-4">
                <div className="text-2xl font-black tracking-tight">
                  AZ<span style={{ color: "#2563EB" }}>OFFICES</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 mt-0.5">
                  Executive &bull; Virtual &bull; Meeting Rooms
                </div>
              </div>
              <p className="text-white/35 text-sm leading-relaxed">
                Premium all-inclusive workspace solutions across Arizona&rsquo;s East Valley since 2002.
              </p>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4" style={{ color: "#60A5FA" }}>
                Locations
              </h3>
              <ul className="space-y-3 text-sm text-white/50">
                <li>
                  <div className="font-medium text-white/70">Tempe — Mill Ave Plaza</div>
                  <div>4700 S Mill Ave, Tempe, AZ 85282</div>
                </li>
                <li>
                  <div className="font-medium text-white/70">Gilbert — Heritage Court</div>
                  <div>207 N Gilbert Rd #001, Gilbert, AZ 85234</div>
                </li>
                <li>
                  <div className="font-medium text-white/70">Phoenix — Weldon</div>
                  <div>67 E Weldon Ave #200, Phoenix, AZ 85012</div>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4" style={{ color: "#60A5FA" }}>
                Services
              </h3>
              <ul className="space-y-2 text-sm text-white/50">
                {[
                  "Executive Offices",
                  "Virtual Offices",
                  "Meeting Rooms",
                  "Training Center",
                  "Mail Handling",
                  "Receptionist Services",
                ].map((svc) => (
                  <li key={svc} className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3" style={{ color: "#60A5FA" }} />
                    {svc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4" style={{ color: "#60A5FA" }}>
                Contact
              </h3>
              <ul className="space-y-3 text-sm text-white/50">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" style={{ color: "#60A5FA" }} />
                  <a href={`tel:${PHONE_RAW}`} className="hover:text-white transition-colors font-medium">{PHONE}</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" style={{ color: "#60A5FA" }} />
                  <a href={`tel:${PHONE_TOLL_RAW}`} className="hover:text-white transition-colors">Toll-Free: {PHONE_TOLL}</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" style={{ color: "#60A5FA" }} />
                  <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4" style={{ color: "#60A5FA" }} />
                  <span>Mon-Tue, Fri-Sun: 8am-5pm</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25 uppercase tracking-wider">
            <p>&copy; {new Date().getFullYear()} AZOffices. All rights reserved.</p>
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

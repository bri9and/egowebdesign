import {
  Phone,
  MapPin,
  Mail,
  Star,
  Shield,
  Sparkles,
  Building2,
  Clock,
  Leaf,
  Award,
  CheckCircle,
  ArrowRight,
  Droplets,
  SprayCan,
  HardHat,
  Users,
  GraduationCap,
} from "lucide-react";

export const metadata = {
  title: "Western Cleaning Solutions | Commercial & Residential Cleaning | Tempe, AZ",
  description:
    "BBB A+ rated commercial cleaning in Tempe, Arizona. Eco-friendly janitorial, carpet cleaning, pressure washing, floor waxing, and COVID disinfection. Green Business Bureau certified. Call (602) 515-6767.",
};

const IMG = "/sites/western-cleaning-solutions";

const services = [
  {
    name: "Office Cleaning",
    desc: "Daily and recurring office sanitation — workstations, break rooms, restrooms, and common areas maintained to the highest standard. Your employees deserve a spotless environment.",
    icon: "Building2",
  },
  {
    name: "Carpet Cleaning",
    desc: "Deep extraction carpet cleaning that removes embedded dirt, allergens, and stains. We restore your carpets to like-new condition using eco-friendly, non-toxic solutions.",
    icon: "Sparkles",
  },
  {
    name: "Pressure Washing",
    desc: "High-pressure exterior cleaning for sidewalks, parking lots, building facades, and storefronts. We remove years of buildup and restore your property's curb appeal.",
    icon: "Droplets",
  },
  {
    name: "Strip & Wax Floors",
    desc: "Professional floor stripping and waxing for VCT, tile, and hard surfaces. Multiple coats of commercial-grade finish for a mirror-like shine that lasts.",
    icon: "SprayCan",
  },
  {
    name: "Day Porter Services",
    desc: "On-site porters handle continuous facility maintenance throughout the day — keeping lobbies, restrooms, and high-traffic areas pristine during business hours.",
    icon: "Users",
  },
  {
    name: "Window Cleaning",
    desc: "Interior and exterior window cleaning for commercial properties. Streak-free results using professional-grade equipment and biodegradable cleaning agents.",
    icon: "Sparkles",
  },
  {
    name: "Post-Construction Cleaning",
    desc: "Comprehensive post-construction cleanup — dust removal, debris clearing, surface polishing, and final detail cleaning so your new space is move-in ready.",
    icon: "HardHat",
  },
  {
    name: "COVID-19 Disinfection",
    desc: "EPA-approved disinfection protocols using hospital-grade products. Electrostatic spraying and surface treatment to eliminate pathogens and keep your facility safe.",
    icon: "Shield",
  },
];

const industries = [
  { name: "Banks & Financial", icon: "Building2" },
  { name: "Hotels & Hospitality", icon: "Building2" },
  { name: "Schools & Education", icon: "GraduationCap" },
  { name: "Retail & Stores", icon: "Building2" },
  { name: "Restaurants", icon: "Building2" },
  { name: "Medical Offices", icon: "Shield" },
];

const whyChooseUs = [
  {
    title: "BBB A+ Rated",
    desc: "Accredited by the Better Business Bureau since 2019 with an A+ rating. Verified for reliability, efficiency, and customer satisfaction.",
    icon: "Award",
  },
  {
    title: "Green Business Certified",
    desc: "Certified by the Green Business Bureau for eco-friendly practices. We use only all-natural, organic cleaning products that protect people and the planet.",
    icon: "Leaf",
  },
  {
    title: "Fully Insured & Bonded",
    desc: "Complete liability coverage and bonding for your peace of mind. Every team member is background-checked, trained, and accountable.",
    icon: "Shield",
  },
  {
    title: "7+ Years of Service",
    desc: "Serving the Valley of the Sun since 2019. Trusted by banks, hotels, schools, and retail chains across the state of Arizona.",
    icon: "Clock",
  },
];

const serviceAreas = [
  "Tempe",
  "Phoenix",
  "Scottsdale",
  "Mesa",
  "Chandler",
  "Gilbert",
  "Glendale",
  "Peoria",
  "Surprise",
  "Avondale",
  "Goodyear",
  "Buckeye",
];

const testimonials = [
  {
    name: "Maria T.",
    role: "Office Manager",
    text: "Western Cleaning Solutions has been handling our office for over two years. Every morning we walk into a spotless workspace. Their team is professional, thorough, and always on time. We have never had to ask them to redo anything.",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Hotel General Manager",
    text: "We switched to WCS for our hotel common areas and the difference was immediate. Their eco-friendly products leave everything smelling fresh without harsh chemical odors. Our guests have noticed the improvement.",
    rating: 5,
  },
  {
    name: "Sandra L.",
    role: "School Administrator",
    text: "Finding a cleaning company that uses safe, non-toxic products was essential for our school. Western Cleaning Solutions checked every box — Green Business certified, reliable scheduling, and their porters are fantastic with our staff.",
    rating: 5,
  },
  {
    name: "David R.",
    role: "Property Manager",
    text: "I manage twelve commercial properties across the Valley and WCS handles all of them. Their consistency across locations is remarkable. Valeria and her team truly care about the quality of their work.",
    rating: 5,
  },
];

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Building2,
  Sparkles,
  Droplets,
  SprayCan,
  Users,
  HardHat,
  Shield,
  Award,
  Leaf,
  Clock,
  GraduationCap,
};

const inter = "'Inter', sans-serif";

export default function WesternCleaningSolutions() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: inter }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');`,
        }}
      />

      {/* Top utility bar */}
      <div className="bg-[#0B2545] text-white/80 text-xs py-2.5">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="tel:6025156767"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3" />
              (602) 515-6767
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              Tempe, AZ
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-1.5 text-emerald-300">
              <Leaf className="w-3 h-3" />
              Green Business Certified
            </span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5 text-amber-300">
              <Award className="w-3 h-3" />
              BBB A+
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src={`${IMG}/logo.png`}
              alt="Western Cleaning Solutions"
              width={44}
              height={46}
              className="rounded"
            />
            <div>
              <div className="text-[#0B2545] font-bold text-sm leading-tight tracking-tight">
                Western Cleaning
              </div>
              <div className="text-[#0B2545]/50 text-[10px] font-medium tracking-widest uppercase">
                Solutions
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#0B2545]/70 font-medium">
            <a href="#services" className="hover:text-[#1976D2] transition-colors">
              Services
            </a>
            <a href="#why-us" className="hover:text-[#1976D2] transition-colors">
              Why Us
            </a>
            <a href="#areas" className="hover:text-[#1976D2] transition-colors">
              Service Areas
            </a>
            <a href="#reviews" className="hover:text-[#1976D2] transition-colors">
              Reviews
            </a>
          </div>
          <a
            href="tel:6025156767"
            className="bg-[#1976D2] hover:bg-[#1565C0] text-white px-5 py-2.5 text-xs font-bold tracking-wider uppercase rounded transition-colors flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Free Quote</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B2545]">
        <img
          src={`${IMG}/hero.jpg`}
          alt="Professional commercial cleaning team at work"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545] via-[#0B2545]/90 to-[#0B2545]/60" />

        <div className="max-w-6xl mx-auto px-6 relative py-24 sm:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide">
              <Leaf className="w-3.5 h-3.5" />
              ECO-FRIENDLY CLEANING
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
              A Cleaner Space.
              <br />
              <span className="text-[#64B5F6]">A Healthier Arizona.</span>
            </h1>

            <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
              Commercial and residential cleaning powered by all-natural,
              eco-friendly products. Trusted by banks, hotels, schools, and
              businesses across the Valley of the Sun.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="tel:6025156767"
                className="bg-[#1976D2] hover:bg-[#1565C0] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase rounded transition-colors flex items-center gap-2.5"
                style={{ letterSpacing: "0.12em" }}
              >
                <Phone className="w-4 h-4" />
                Get a Free Quote
              </a>
              <a
                href="#services"
                className="border border-white/20 hover:border-white/40 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase rounded transition-colors flex items-center gap-2.5"
                style={{ letterSpacing: "0.12em" }}
              >
                Our Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10">
              {[
                { value: "A+", label: "BBB Rating" },
                { value: "5.0", label: "Google Rating" },
                { value: "7+", label: "Years in Business" },
                { value: "100%", label: "Eco-Friendly" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-white">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/40 font-medium tracking-wide uppercase mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client logos / trust strip */}
      <div className="bg-[#F8FAFB] border-y border-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {industries.map((ind) => {
            const Icon = iconMap[ind.icon] || Building2;
            return (
              <div key={ind.name} className="flex items-center gap-2 text-[#0B2545]/30">
                <Icon className="w-5 h-5" />
                <span className="text-xs font-semibold tracking-wider uppercase">
                  {ind.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Services */}
      <section id="services" className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#1976D2] text-xs font-bold tracking-widest uppercase">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] mt-3 tracking-tight">
              Professional Cleaning Services
            </h2>
            <p className="text-[#0B2545]/50 text-base mt-4 max-w-xl mx-auto leading-relaxed">
              From daily janitorial to specialized deep cleaning, we deliver
              spotless results using eco-friendly products that are safe for your
              team, your customers, and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => {
              const Icon = iconMap[svc.icon] || Sparkles;
              return (
                <div
                  key={svc.name}
                  className="group border border-gray-100 rounded-lg p-6 hover:border-[#1976D2]/30 hover:shadow-lg hover:shadow-[#1976D2]/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#E3F2FD] flex items-center justify-center mb-4 group-hover:bg-[#1976D2] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#1976D2] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B2545] mb-2">
                    {svc.name}
                  </h3>
                  <p className="text-[#0B2545]/50 text-sm leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About / Mission — image + text */}
      <section className="py-20 sm:py-24 bg-[#F8FAFB]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={`${IMG}/team1.jpg`}
                alt="Western Cleaning Solutions team member"
                className="w-full h-56 object-cover rounded-lg"
              />
              <img
                src={`${IMG}/team2.jpg`}
                alt="Western Cleaning Solutions crew"
                className="w-full h-56 object-cover rounded-lg mt-8"
              />
              <img
                src={`${IMG}/team3.jpg`}
                alt="Western Cleaning Solutions at work"
                className="w-full h-56 object-cover rounded-lg"
              />
              <img
                src={`${IMG}/team4.jpg`}
                alt="Western Cleaning Solutions team"
                className="w-full h-56 object-cover rounded-lg mt-8"
              />
            </div>
            <div>
              <span className="text-[#1976D2] text-xs font-bold tracking-widest uppercase">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] mt-3 tracking-tight leading-tight">
                Built on Trust.
                <br />
                Powered by Green.
              </h2>
              <p className="text-[#0B2545]/60 text-base mt-6 leading-relaxed">
                Western Cleaning Solutions was founded in 2019 by Valeria
                Alvarez with a clear mission: build a reliable, trustworthy
                cleaning team that brings excellent eco-friendly products and
                services to every city in Arizona.
              </p>
              <p className="text-[#0B2545]/60 text-base mt-4 leading-relaxed">
                Today we are proud to be certified by the Green Business Bureau
                as an environmentally conscious business that uses only organic
                products for the protection of our ecosystem. From banks and
                hotels to schools and retail stores, we deliver consistent,
                high-quality cleaning that our clients count on every day.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: "Green Business Bureau Certified", icon: Leaf },
                  { label: "BBB A+ Accredited Since 2019", icon: Award },
                  { label: "All-Natural Products Only", icon: Sparkles },
                  { label: "Background-Checked Teams", icon: Shield },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-2.5">
                    <item.icon className="w-4 h-4 text-[#1976D2] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#0B2545]/70 font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="tel:6025156767"
                className="inline-flex items-center gap-2.5 bg-[#1976D2] hover:bg-[#1565C0] text-white px-7 py-3.5 text-sm font-bold tracking-wider uppercase rounded mt-8 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Talk to Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#1976D2] text-xs font-bold tracking-widest uppercase">
              The WCS Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] mt-3 tracking-tight">
              Why Arizona Businesses Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => {
              const Icon = iconMap[item.icon] || CheckCircle;
              return (
                <div
                  key={item.title}
                  className="text-center p-8 rounded-lg bg-[#F8FAFB] border border-gray-100"
                >
                  <div className="w-14 h-14 rounded-full bg-[#E3F2FD] flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6 text-[#1976D2]" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B2545] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#0B2545]/50 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certification badges strip */}
      <div className="bg-[#0B2545] py-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap items-center justify-center gap-10">
          <img
            src={`${IMG}/bbb.png`}
            alt="BBB A+ Accredited Business"
            className="h-16 sm:h-20 object-contain opacity-80"
          />
          <img
            src={`${IMG}/green-cert.png`}
            alt="Green Business Bureau Certified"
            className="h-16 sm:h-20 object-contain opacity-80"
          />
          <img
            src={`${IMG}/carpet-badge.png`}
            alt="Professional Carpet Cleaning Certified"
            className="h-16 sm:h-20 object-contain opacity-80"
          />
        </div>
      </div>

      {/* Service Areas */}
      <section id="areas" className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#1976D2] text-xs font-bold tracking-widest uppercase">
                Service Area
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] mt-3 tracking-tight leading-tight">
                Serving the Entire
                <br />
                Valley of the Sun
              </h2>
              <p className="text-[#0B2545]/60 text-base mt-5 leading-relaxed">
                Western Cleaning Solutions proudly serves commercial and
                residential clients throughout the Phoenix metropolitan area.
                Our goal is to bring reliable, eco-friendly facility services to
                every city in Arizona.
              </p>
              <div className="flex items-start gap-3 mt-6 p-4 bg-[#E3F2FD] rounded-lg">
                <MapPin className="w-5 h-5 text-[#1976D2] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-bold text-[#0B2545]">
                    Headquarters
                  </div>
                  <div className="text-sm text-[#0B2545]/60 mt-0.5">
                    4700 S Mill Ave, Suite B6
                    <br />
                    Tempe, AZ 85282
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-3">
                {serviceAreas.map((area, i) => (
                  <div
                    key={area}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition-colors ${
                      i === 0
                        ? "bg-[#1976D2] border-[#1976D2] text-white"
                        : "bg-white border-gray-100 text-[#0B2545] hover:border-[#1976D2]/30"
                    }`}
                  >
                    <CheckCircle
                      className={`w-3.5 h-3.5 flex-shrink-0 ${
                        i === 0 ? "text-white/70" : "text-[#1976D2]"
                      }`}
                    />
                    <span className="text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#0B2545]/40 text-xs mt-4 text-center">
                Don&apos;t see your city? Call us — we likely serve your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-20 sm:py-24 bg-[#F8FAFB]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#1976D2] text-xs font-bold tracking-widest uppercase">
              Client Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] mt-3 tracking-tight">
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center gap-1.5 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-amber-400 fill-amber-400"
                />
              ))}
              <span className="text-[#0B2545]/50 text-sm font-medium ml-2">
                5.0 on Google (21 reviews)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white border border-gray-100 rounded-lg p-7 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-[#0B2545]/70 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#E3F2FD] flex items-center justify-center">
                    <span className="text-[#1976D2] text-xs font-bold">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0B2545]">
                      {t.name}
                    </div>
                    <div className="text-xs text-[#0B2545]/40">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <img
          src={`${IMG}/covid.jpg`}
          alt="Professional cleaning in action"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0B2545]/90" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <Sparkles className="w-10 h-10 text-[#64B5F6] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready for a Spotless Space?
          </h2>
          <p className="text-white/60 text-lg mt-5 max-w-lg mx-auto leading-relaxed">
            Get a free, no-obligation quote for your commercial or residential
            cleaning needs. Eco-friendly products. Reliable teams. Guaranteed
            satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="tel:6025156767"
              className="bg-[#1976D2] hover:bg-[#1565C0] text-white px-10 py-4 text-sm font-bold tracking-widest uppercase rounded transition-colors flex items-center gap-2.5"
              style={{ letterSpacing: "0.12em" }}
            >
              <Phone className="w-4 h-4" />
              (602) 515-6767
            </a>
            <a
              href="tel:4803872327"
              className="border border-white/30 hover:border-white/50 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase rounded transition-colors flex items-center gap-2.5"
              style={{ letterSpacing: "0.12em" }}
            >
              <Phone className="w-4 h-4" />
              (480) 387-2327
            </a>
          </div>
          <p className="text-white/30 text-xs mt-6 tracking-wide">
            Monday &ndash; Friday &middot; 8:00 AM &ndash; 5:00 PM MST
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#071B33] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company info */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img
                  src={`${IMG}/logo.png`}
                  alt="Western Cleaning Solutions"
                  width={40}
                  height={42}
                  className="rounded opacity-80"
                />
                <div>
                  <div className="font-bold text-base leading-tight">
                    Western Cleaning Solutions
                  </div>
                  <div className="text-white/30 text-[10px] tracking-widest uppercase mt-0.5">
                    Eco-Friendly Commercial Cleaning
                  </div>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Bringing reliable, eco-friendly cleaning services to every city
                in Arizona. Green Business Bureau certified. BBB A+ accredited
                since 2019.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs tracking-widest uppercase text-white/30 mb-5 font-bold">
                Contact
              </h4>
              <div className="space-y-3 text-sm">
                <a
                  href="tel:6025156767"
                  className="flex items-center gap-2.5 text-white/60 hover:text-[#64B5F6] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#64B5F6]" />
                  (602) 515-6767
                </a>
                <a
                  href="tel:4803872327"
                  className="flex items-center gap-2.5 text-white/60 hover:text-[#64B5F6] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#64B5F6]" />
                  (480) 387-2327
                </a>
                <a
                  href="mailto:info@westerncleaningsolutions.com"
                  className="flex items-center gap-2.5 text-white/60 hover:text-[#64B5F6] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#64B5F6]" />
                  info@westerncleaningsolutions.com
                </a>
                <div className="flex items-start gap-2.5 text-white/60">
                  <MapPin className="w-4 h-4 text-[#64B5F6] mt-0.5" />
                  <span>
                    4700 S Mill Ave, Suite B6
                    <br />
                    Tempe, AZ 85282
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-white/60">
                  <Clock className="w-4 h-4 text-[#64B5F6]" />
                  Mon&ndash;Fri &middot; 8:00 AM &ndash; 5:00 PM MST
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs tracking-widest uppercase text-white/30 mb-5 font-bold">
                Services
              </h4>
              <div className="grid grid-cols-1 gap-2 text-sm text-white/50">
                {services.map((svc) => (
                  <span key={svc.name} className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-[#64B5F6]/50" />
                    {svc.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <p>
              &copy; {new Date().getFullYear()} Western Cleaning Solutions LLC.
              All rights reserved.
            </p>
            <p>
              Website by{" "}
              <a
                href="/"
                className="text-white/40 hover:text-[#64B5F6] transition-colors"
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

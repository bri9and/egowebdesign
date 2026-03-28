import {
  Phone, Shield, ShieldCheck, Clock, Star,
  MapPin, Award, CheckCircle, Droplets, Wrench, CloudLightning, Quote, Home,
} from "lucide-react";

export const metadata = {
  title: "Zeke & Son Roofing | Three Generations Since 1949 | Kennedy TWP, PA",
  description:
    "Family-owned roofing since 1949. 75+ years, 3 generations of the Zahniser family. Shingle, flat, slate & rubber roofing, gutters, storm damage. BBB A+ rated. Serving Greater Pittsburgh. Call (412) 264-8345.",
};

const services = [
  { icon: Home, title: "Shingle Roofing", desc: "Complete shingle installations and replacements with premium materials and manufacturer-backed warranties. The backbone of residential roofing done right." },
  { icon: Shield, title: "Flat Roofing (Commercial)", desc: "Durable commercial flat roof systems built to withstand Pittsburgh weather. Expert installation for businesses, warehouses, and multi-unit properties." },
  { icon: Star, title: "Slate Roofing", desc: "Specialty slate roof repair and installation preserving the character of Pittsburgh's historic homes. True craftsmanship passed down through three generations." },
  { icon: Droplets, title: "Rubber Roofing", desc: "EPDM rubber roofing systems for long-lasting, weather-tight protection. Ideal for low-slope and flat roof applications on homes and commercial buildings." },
  { icon: Wrench, title: "Repairs & Maintenance", desc: "Roof leak repairs, preventive maintenance, and seasonal inspections. Fast response to keep small problems from becoming costly emergencies." },
  { icon: CloudLightning, title: "Storm Damage & Insurance", desc: "Storm damage assessment, emergency tarping, and full insurance claim assistance. We work directly with your insurer to restore your roof fast." },
];

const timeline = [
  { era: "1949", title: "Zeke Sr. Founds the Company", desc: "Zeke Zahniser Sr. starts a roofing company in Kennedy Township with a truck, a ladder, and a handshake. Word-of-mouth builds a reputation that lasts decades." },
  { era: "1970s\u201380s", title: "The Sons Join the Trade", desc: "Zeke's sons grow up on rooftops and officially join the business, expanding into commercial flat roofing and growing the crew across Pittsburgh's western suburbs." },
  { era: "2000s\u2013Now", title: "Grandsons Continue the Legacy", desc: "The third generation of Zahnisers carries the family name forward with modern materials, the same honest craftsmanship, and a 75+ year track record." },
];

const areas = ["Kennedy TWP", "Robinson", "Moon", "Coraopolis", "Sewickley", "Bridgeville", "Carnegie", "Oakdale", "North Fayette", "South Fayette", "Crafton", "Greater Pittsburgh"];

const projects = [
  { src: "/sites/zeke-son/project1.jpg", alt: "Completed residential roof replacement", label: "Residential Re-Roof" },
  { src: "/sites/zeke-son/project2.jpg", alt: "Commercial flat roofing project", label: "Commercial Flat Roof" },
  { src: "/sites/zeke-son/project3.jpg", alt: "Storm damage roof repair", label: "Storm Damage Repair" },
];

const V = "'Vollkorn', serif";

export default function ZekeSonRoofing() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Open Sans', 'Inter', system-ui, sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Open+Sans:wght@400;500;600;700&display=swap');` }} />

      {/* Header */}
      <header className="bg-[#2C2C2C] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <img
              src="/sites/zeke-son/logo.png"
              alt="Zeke & Son Roofing logo"
              className="h-12 w-auto"
            />
            <div>
              <div className="text-lg font-bold tracking-tight" style={{ fontFamily: V }}>Zeke &amp; Son Roofing</div>
              <div className="text-[10px] text-[#fbe434] tracking-[0.2em] uppercase">Est. 1949 &middot; Kennedy TWP</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/80">
              <a href="#heritage" className="hover:text-[#fbe434] transition-colors">Heritage</a>
              <a href="#services" className="hover:text-[#fbe434] transition-colors">Services</a>
              <a href="#work" className="hover:text-[#fbe434] transition-colors">Our Work</a>
              <a href="#awards" className="hover:text-[#fbe434] transition-colors">Awards</a>
              <a href="#testimonials" className="hover:text-[#fbe434] transition-colors">Reviews</a>
            </nav>
            <a href="tel:4122648345" className="bg-[#fbe434] text-[#2C2C2C] px-5 py-2.5 rounded font-bold text-sm hover:bg-[#e8d22e] transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(412) 264-8345</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero: Full-width background image */}
      <section
        className="relative text-white py-24 sm:py-32 lg:py-40"
        style={{
          backgroundImage: "url('/sites/zeke-son/slide1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#2C2C2C]/75" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#fbe434] text-sm font-semibold tracking-[0.25em] uppercase mb-4">Three Generations of Craftsmanship</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] mb-6 text-white" style={{ fontFamily: V }}>
              Pittsburgh&rsquo;s Oldest<br />Family Roofing<br /><span className="text-[#fbe434]">Company</span>
            </h1>
            <p className="text-white/70 text-lg mb-8 max-w-md leading-relaxed">
              Zeke Zahniser Sr. started this company in 1949. His sons expanded it. His grandsons carry it forward today. 75+ years of protecting Pittsburgh homes.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href="tel:4122648345" className="bg-[#fbe434] text-[#2C2C2C] px-8 py-4 font-bold text-lg rounded hover:bg-[#e8d22e] transition-colors flex items-center gap-3">
                <Phone className="w-5 h-5" />(412) 264-8345
              </a>
              <span className="text-white/50 text-sm flex items-center gap-2 mt-3 sm:mt-0 sm:self-center">
                <Clock className="w-4 h-4" />Free Estimates
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Three Generations Timeline */}
      <section id="heritage" className="bg-[#FAF8F5] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#8B7355] text-sm font-semibold tracking-[0.2em] uppercase mb-2">Our Heritage</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C]" style={{ fontFamily: V }}>Three Generations Strong</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px" style={{ backgroundColor: "#fbe434" }} />
            <div className="space-y-12">
              {timeline.map((entry, i) => (
                <div key={i} className="relative flex items-start gap-6 sm:gap-8">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-[#2C2C2C]" style={{ border: "3px solid #fbe434" }}>
                      <span className="text-[#fbe434] text-[10px] sm:text-xs font-bold leading-tight text-center" style={{ fontFamily: V }}>{entry.era}</span>
                    </div>
                  </div>
                  <div className="pt-1 sm:pt-3">
                    <h3 className="text-xl font-bold text-[#2C2C2C] mb-1" style={{ fontFamily: V }}>{entry.title}</h3>
                    <p className="text-[#2C2C2C]/60 leading-relaxed">{entry.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#8B7355] text-sm font-semibold tracking-[0.2em] uppercase mb-2">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C]" style={{ fontFamily: V }}>Roofing Services</h2>
            <p className="text-[#2C2C2C]/50 mt-3 max-w-xl mx-auto">From a single repair to a full commercial roof, every job gets 75 years of family expertise behind it.</p>
          </div>
          <div className="space-y-5">
            {services.map((svc) => (
              <div key={svc.title} className="flex items-start gap-5 p-6 rounded-lg bg-[#FAF8F5] hover:bg-[#f3f0ea] transition-colors" style={{ borderLeft: "3px solid #fbe434" }}>
                <div className="flex-shrink-0 w-12 h-12 rounded bg-[#2C2C2C] flex items-center justify-center">
                  <svc.icon className="w-6 h-6 text-[#fbe434]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2C2C2C] mb-1" style={{ fontFamily: V }}>{svc.title}</h3>
                  <p className="text-[#2C2C2C]/55 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Gallery */}
      <section id="work" className="bg-[#FAF8F5] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#8B7355] text-sm font-semibold tracking-[0.2em] uppercase mb-2">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C]" style={{ fontFamily: V }}>Our Work</h2>
            <p className="text-[#2C2C2C]/50 mt-3 max-w-xl mx-auto">Real projects from real Pittsburgh homes and businesses. Every roof built to last.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <div key={proj.label} className="group rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={proj.src}
                    alt={proj.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4" style={{ borderTop: "3px solid #fbe434" }}>
                  <h3 className="font-bold text-[#2C2C2C]" style={{ fontFamily: V }}>{proj.label}</h3>
                  <p className="text-[#2C2C2C]/40 text-sm mt-0.5">Kennedy TWP &amp; Greater Pittsburgh</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="bg-[#2C2C2C] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#fbe434] text-sm font-semibold tracking-[0.2em] uppercase mb-2">Recognition</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: V }}>Earned, Not Given</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="w-40 h-40 rounded-full flex flex-col items-center justify-center mx-auto mb-4" style={{ border: "3px solid #fbe434", backgroundColor: "rgba(251,228,52,0.08)" }}>
                <Award className="w-10 h-10 text-[#fbe434] mb-1" />
                <span className="text-[#fbe434] text-2xl font-extrabold" style={{ fontFamily: V }}>#1</span>
                <span className="text-white/60 text-[10px] uppercase tracking-widest">Fan Favorite</span>
              </div>
              <h3 className="text-white font-bold text-lg" style={{ fontFamily: V }}>Pittsburgh Post-Gazette</h3>
              <p className="text-white/50 text-sm mt-1">2018 Fan Favorites &mdash; 1st Place Winner</p>
            </div>
            <div className="hidden md:block w-px h-32 bg-white/10" />
            <div className="text-center">
              <div className="w-40 h-40 rounded-full flex flex-col items-center justify-center mx-auto mb-4" style={{ border: "3px solid #fbe434", backgroundColor: "rgba(251,228,52,0.08)" }}>
                <ShieldCheck className="w-10 h-10 text-[#fbe434] mb-1" />
                <span className="text-[#fbe434] text-2xl font-extrabold" style={{ fontFamily: V }}>A+</span>
                <span className="text-white/60 text-[10px] uppercase tracking-widest">BBB Rated</span>
              </div>
              <h3 className="text-white font-bold text-lg" style={{ fontFamily: V }}>Better Business Bureau</h3>
              <p className="text-white/50 text-sm mt-1">A+ Accredited &mdash; Trusted for Decades</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section id="testimonials" className="bg-[#FAF8F5] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-10 h-10 text-[#fbe434] mx-auto mb-6" />
          <blockquote className="text-xl sm:text-2xl text-[#2C2C2C] font-medium leading-relaxed mb-6" style={{ fontFamily: V }}>
            &ldquo;Three generations and counting. They replaced our whole roof in a single day. The crew showed up on time, worked clean, and the new roof looks incredible. You can see why this family has been in business for 75 years.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-[#fbe434] fill-[#fbe434]" />)}
          </div>
          <p className="text-[#8B7355] font-semibold">Jim K.</p>
          <p className="text-[#2C2C2C]/40 text-sm flex items-center justify-center gap-1"><MapPin className="w-3 h-3" /> Greater Pittsburgh</p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#8B7355] text-sm font-semibold tracking-[0.2em] uppercase mb-2">Coverage</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C] mb-8" style={{ fontFamily: V }}>Serving Greater Pittsburgh Since 1949</h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {areas.map((a) => (
              <span key={a} className="px-4 py-2 rounded-full text-sm font-medium text-[#2C2C2C] bg-[#FAF8F5]" style={{ border: "1px solid #e8e4dd" }}>{a}</span>
            ))}
          </div>
          <p className="text-[#2C2C2C]/40 text-sm mt-6">Don&rsquo;t see your area? Call us &mdash; we likely cover it.</p>
        </div>
      </section>

      {/* CTA with background image */}
      <section
        className="relative py-20"
        style={{
          backgroundImage: "url('/sites/zeke-son/slide3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#fbe434]/90" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C] mb-3" style={{ fontFamily: V }}>Ready to Talk Roofing?</h2>
          <p className="text-[#2C2C2C]/60 text-lg mb-8 max-w-lg mx-auto">75+ years. Three generations. Free estimates. Call the family Pittsburgh trusts.</p>
          <a href="tel:4122648345" className="inline-flex items-center gap-3 bg-[#2C2C2C] text-[#fbe434] px-10 py-4 rounded font-bold text-xl hover:bg-[#1a1a1a] transition-colors">
            <Phone className="w-6 h-6" />(412) 264-8345
          </a>
          <p className="text-[#2C2C2C]/40 text-sm mt-4">3344 Glenmawr Ave, Kennedy TWP, PA 15136</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FAF8F5] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10">
            <div className="max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/sites/zeke-son/logo.png"
                  alt="Zeke & Son Roofing logo"
                  className="h-10 w-auto"
                />
                <h3 className="text-lg font-bold text-[#2C2C2C]" style={{ fontFamily: V }}>Zeke &amp; Son Roofing</h3>
              </div>
              <p className="text-[#2C2C2C]/50 text-sm leading-relaxed">Family-owned and operated since 1949. Three generations of the Zahniser family protecting Pittsburgh homes with honest work and quality materials.</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8B7355] mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#8B7355]" /><a href="tel:4122648345" className="hover:text-[#2C2C2C] transition-colors">(412) 264-8345</a></li>
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-[#8B7355] mt-0.5" /><span>3344 Glenmawr Ave<br />Kennedy TWP, PA 15136</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8B7355] mb-3">Hours</h4>
              <ul className="space-y-1.5 text-sm text-[#2C2C2C]/70">
                <li className="flex justify-between gap-6"><span>Mon &ndash; Fri</span><span className="text-[#2C2C2C]/90 font-medium">9 AM &ndash; 5 PM</span></li>
                <li className="flex justify-between gap-6"><span>Sat &ndash; Sun</span><span className="text-[#2C2C2C]/90 font-medium">By Appointment</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8B7355] mb-3">Credentials</h4>
              <ul className="space-y-1.5 text-sm text-[#2C2C2C]/70">
                <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#8B7355]" />BBB A+ Rated</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#8B7355]" />Fully Insured</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#8B7355]" />Post-Gazette #1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#2C2C2C]/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#2C2C2C]/30">
            <p>&copy; {new Date().getFullYear()} Zeke &amp; Son Roofing. All rights reserved.</p>
            <p>Website by{" "}<a href="/" className="text-[#8B7355] hover:text-[#2C2C2C] transition-colors">KPT Designs</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

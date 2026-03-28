import { Phone, MapPin, Mail, Flag, Building2, FerrisWheel, Waves, Factory, Utensils, GraduationCap, Clock } from "lucide-react";

export const metadata = {
  title: "Grand View Golf Club | The Monster on the Mon | North Braddock, PA",
  description:
    "Public 18-hole golf course perched above the Monongahela River. Par 70-71, 160-foot cliff drops, Pittsburgh skyline views. Green fees from $25. Call (412) 351-5390.",
};

const signatureHoles = [
  { hole: 14, par: 3, title: "The Cliff Drop", description: "Stand on the edge of the world and swing. The tee box sits 160 feet above the green — a sheer vertical drop that swallows 15,000 balls a year. There is no bailout, no layup, no second chance. You either carry the cliff or you donate to the mountain.", stat: "160-ft elevation drop" },
  { hole: 15, par: 4, title: "The Bowling Alley", description: "A narrow 365-yard corridor flanked by cliff faces and natural waterfalls. The fairway funnels your drive toward a green perched at the edge of the hillside. Miss right and the ball cascades down the rock face with the water.", stat: "Cliff waterfalls line the fairway" },
  { hole: 18, par: 5, title: "The Closer", description: "542 yards of finishing drama. Two lakes guard the approach to an infinity-pool green that appears to float above the Mon Valley. Reach it in two and you are a legend. Three-putt and the lakes have the last laugh.", stat: "542 yds, two lakes, infinity green" },
  { hole: 9, par: 3, title: "The Short Fuse", description: "At 123 yards it is the shortest hole on the course — and one of the most deceptive. A tight pin placement on a small, elevated green punishes anything less than a precise iron. The scorecard giveth, the green taketh away.", stat: "123 yds — shortest on the course" },
];

const rates = [
  { category: "Weekday", eighteen: "$25", nine: "$16" },
  { category: "Weekend", eighteen: "$29", nine: "$20" },
  { category: "Senior 62+ (Mon-Fri)", eighteen: "$23", nine: "$14" },
  { category: "Junior 12-17", eighteen: "$19", nine: "$10" },
  { category: "Early Bird (Mon-Fri before 9 AM)", eighteen: "$10", nine: "—" },
];

const cartAndExtras = [
  { label: "Cart — 18 Holes", price: "$16" },
  { label: "Cart — 9 Holes", price: "$10" },
  { label: "Club Rental", price: "$15" },
  { label: "Lesson w/ Josh Houser (45 min)", price: "$50" },
];

const coursePhotos = [
  { src: "/sites/grand-view/course1.jpg", alt: "Grand View Golf Club — fairway view" },
  { src: "/sites/grand-view/course2.jpg", alt: "Grand View Golf Club — scenic overlook" },
  { src: "/sites/grand-view/course3.jpg", alt: "Grand View Golf Club — green and hillside" },
  { src: "/sites/grand-view/course4.jpg", alt: "Grand View Golf Club — Mon Valley panorama" },
];

const pf = "'Playfair Display', serif";

export default function GrandViewGolf() {
  return (
    <div className="min-h-screen bg-[#FAF5EB]">
      <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');` }} />

      {/* Top bar with logo */}
      <div className="bg-[#1B4332] text-white/70 text-xs py-2">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/sites/grand-view/logo.png" alt="Grand View Golf Club" width={60} height={36} className="opacity-80" />
            <span className="tracking-widest uppercase hidden sm:inline" style={{ letterSpacing: "0.2em" }}>
              Est. 1996 &middot; North Braddock, Pennsylvania
            </span>
          </div>
          <a href="tel:4123515390" className="hover:text-[#C9A84C] transition-colors flex items-center gap-1.5">
            <Phone className="w-3 h-3" />
            (412) 351-5390
          </a>
        </div>
      </div>

      {/* Hero — hole14.jpg background */}
      <section className="relative text-white pt-20 pb-24 overflow-hidden">
        <img src="/sites/grand-view/hole14.jpg" alt="Hole #14 — The Cliff Drop at Grand View Golf Club" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[#1B4332]/30" />

        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <img src="/sites/grand-view/logo.png" alt="Grand View Golf Club" width={150} height={90} className="mx-auto mb-6 drop-shadow-lg" />
          <p className="text-[#C9A84C] text-sm tracking-widest uppercase mb-6" style={{ letterSpacing: "0.3em" }}>
            Grand View Golf Club Presents
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-[6.5rem] font-black leading-[0.9] tracking-tight mb-4" style={{ fontFamily: pf }}>
            THE MONSTER<br />
            <span className="text-[#C9A84C] italic font-normal text-5xl sm:text-6xl lg:text-7xl">on the Mon</span>
          </h1>
          <p className="text-white/60 text-sm max-w-md mx-auto mt-6 mb-10 leading-relaxed">
            160 acres above the Monongahela River. Cliff-drop par 3s, steel mill symphonies, and skyline panoramas you will not find anywhere else in American golf.
          </p>

          {/* Stats bar */}
          <div className="inline-flex items-stretch divide-x divide-white/10 border border-white/20 rounded-sm bg-black/30 backdrop-blur-sm" style={{ fontFamily: pf }}>
            {[{ label: "Par", value: "70-71" }, { label: "Yards", value: "6,111" }, { label: "Slope", value: "130" }, { label: "SI Rating", value: "8.2 / 10" }].map((s) => (
              <div key={s.label} className="px-6 sm:px-8 py-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-[10px] tracking-widest uppercase text-white/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:4123515390" className="bg-[#C9A84C] hover:bg-[#b8963e] text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-4 h-4" /> Book a Tee Time
            </a>
            <span className="text-white/40 text-xs flex items-center gap-1.5">
              <MapPin className="w-3 h-3" /> 1000 Clubhouse Drive, North Braddock, PA 15104
            </span>
          </div>
        </div>
      </section>

      {/* Credits bar */}
      <div className="bg-[#2D5016] text-white/70 text-center py-3 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>
        Designed by Ferdinand Garbin, ASGCA &middot; Owned by Bob Beam &middot; Managed by Ryan Schillinger
      </div>

      {/* Photo Gallery — 2x2 */}
      <section className="py-20 bg-white border-b border-[#1B4332]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>The Course</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1B4332]" style={{ fontFamily: pf }}>160 Acres Above the Mon</h2>
            <p className="text-[#1B4332]/50 text-sm mt-3 max-w-lg mx-auto">
              Cliff edges, river bends, and steel mill smoke — every hole has a view you will remember longer than the score.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coursePhotos.map((photo) => (
              <div key={photo.src} className="overflow-hidden group">
                <img src={photo.src} alt={photo.alt} width={1200} height={675} className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Holes */}
      <section className="py-20 bg-[#FAF5EB]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>The Holes</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1B4332]" style={{ fontFamily: pf }}>Signature Holes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {signatureHoles.map((hole) => (
              <div key={hole.hole} className="border border-[#1B4332]/15 bg-white p-8 sm:p-10 relative group hover:border-[#C9A84C]/40 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-6xl font-black text-[#1B4332]/10 leading-none block" style={{ fontFamily: pf }}>#{hole.hole}</span>
                    <span className="text-xs tracking-widest uppercase text-[#C9A84C] font-bold mt-1 block" style={{ letterSpacing: "0.2em" }}>Par {hole.par}</span>
                  </div>
                  <Flag className="w-5 h-5 text-[#1B4332]/20 mt-2" />
                </div>
                <h3 className="text-xl font-bold text-[#1B4332] mb-3" style={{ fontFamily: pf }}>{hole.title}</h3>
                <p className="text-[#1B4332]/60 text-sm leading-relaxed mb-5">{hole.description}</p>
                <div className="border-t border-[#1B4332]/10 pt-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#2D5016]" style={{ letterSpacing: "0.15em" }}>{hole.stat}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#1B4332]/40 text-sm mt-8 italic">Over 15,000 balls are lost to cliff drop-offs each season.</p>
        </div>
      </section>

      {/* The Views — pull quote */}
      <section className="py-20 bg-white border-y border-[#1B4332]/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-8" style={{ letterSpacing: "0.3em" }}>The Views</p>
          <blockquote className="text-3xl sm:text-4xl lg:text-[2.6rem] italic text-[#1B4332] leading-snug max-w-4xl mx-auto" style={{ fontFamily: pf }}>
            &ldquo;You can see the Pittsburgh skyline, hear steel being made at the mill below, and watch the rollercoasters run at Kennywood &mdash; all from the same fairway.&rdquo;
          </blockquote>
          <p className="text-[#1B4332]/40 text-sm mt-6">Sports Illustrated &mdash; 8.2 out of 10</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 max-w-2xl mx-auto">
            {[{ icon: Building2, label: "Pittsburgh Skyline" }, { icon: Factory, label: "Edgar Thomson Steel Works" }, { icon: FerrisWheel, label: "Kennywood Park" }, { icon: Waves, label: "Mon River" }].map((v) => (
              <div key={v.label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#1B4332]/5 flex items-center justify-center">
                  <v.icon className="w-5 h-5 text-[#1B4332]/50" />
                </div>
                <span className="text-xs text-[#1B4332]/60 font-medium text-center">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates */}
      <section className="py-20 bg-[#FAF5EB]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3" style={{ letterSpacing: "0.3em" }}>Green Fees</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1B4332]" style={{ fontFamily: pf }}>The Scorecard</h2>
            <p className="text-[#1B4332]/50 text-sm mt-3">Premium views, public prices. GPS-equipped carts available every round.</p>
          </div>
          <div className="border border-[#1B4332]/15 bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1B4332] text-white">
                  <th className="text-left py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>Category</th>
                  <th className="text-center py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>18 Holes</th>
                  <th className="text-center py-3 px-5 font-bold tracking-wider uppercase text-xs" style={{ letterSpacing: "0.1em" }}>9 Holes</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((r, i) => (
                  <tr key={r.category} className={i % 2 === 0 ? "bg-[#FAF5EB]/60" : "bg-white"}>
                    <td className="py-3 px-5 text-[#1B4332] font-medium">{r.category}</td>
                    <td className="py-3 px-5 text-center text-[#1B4332] font-bold">{r.eighteen}</td>
                    <td className="py-3 px-5 text-center text-[#1B4332] font-bold">{r.nine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {cartAndExtras.map((item) => (
              <div key={item.label} className="border border-[#1B4332]/10 bg-white py-4 px-4 text-center">
                <div className="text-xl font-bold text-[#1B4332]" style={{ fontFamily: pf }}>{item.price}</div>
                <div className="text-[10px] tracking-widest uppercase text-[#1B4332]/40 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#1B4332]/30 text-xs mt-6 tracking-wide">Season passes available &mdash; call the pro shop for details.</p>
        </div>
      </section>

      {/* Asti's Restaurant — bar.jpg background */}
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/sites/grand-view/bar.jpg" alt="Asti's Italian Steakhouse bar and lounge at Grand View Golf Club" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#2C1810]/80" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <Utensils className="w-8 h-8 text-[#C9A84C] mx-auto mb-4" />
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>The 19th Hole</p>
          <h2 className="text-3xl sm:text-4xl font-bold italic mb-3" style={{ fontFamily: pf }}>Asti&rsquo;s Italian Steakhouse</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
            On-site dining by Francis Asti. A renovated clubhouse bar and lounge with panoramic Mon Valley views. The perfect finish to any round at Grand View.
          </p>
          <a href="tel:4123515390" className="inline-flex items-center gap-2 border border-[#C9A84C]/40 text-[#C9A84C] hover:bg-[#C9A84C]/10 px-6 py-2.5 text-xs tracking-widest uppercase transition-colors" style={{ letterSpacing: "0.15em" }}>
            <Phone className="w-3.5 h-3.5" /> Reserve a Table
          </a>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white border-t border-[#1B4332]/10">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-6 text-center" style={{ letterSpacing: "0.3em" }}>History</p>
          <p className="text-xl sm:text-2xl text-[#1B4332] leading-relaxed" style={{ fontFamily: pf }}>
            <span className="text-6xl font-bold float-left mr-3 mt-1 leading-[0.8] text-[#C9A84C]" style={{ fontFamily: pf }}>I</span>
            n 1755, General Edward Braddock crossed the Monongahela River at this very site with a young George Washington serving as his aide-de-camp. Two and a half centuries later, Ferdinand Garbin of the American Society of Golf Course Architects carved 18 holes into 160 acres of the same hillside. Grand View Golf Club opened in 1996 and was immediately dubbed &ldquo;The Monster on the Mon&rdquo; by KDKA&rsquo;s John Cigna for its dramatic cliff drops and elevation changes. Today the course is owned by Bob Beam and managed by Ryan Schillinger, with Head Professional Josh Houser running the pro shop and lesson program. Below the fairways, US Steel&rsquo;s Edgar Thomson Works &mdash; the company&rsquo;s last operating mill &mdash; continues to pour steel as it has since 1875, providing a soundtrack unlike any other in golf.
          </p>
        </div>
      </section>

      {/* Events — banquet.jpg background */}
      <section className="relative text-white py-20 overflow-hidden">
        <img src="/sites/grand-view/banquet.jpg" alt="Grand View Golf Club banquet and event space" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1B4332]/75" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4" style={{ letterSpacing: "0.3em" }}>Events &amp; Banquets</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: pf }}>Host Your Event at Grand View</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Weddings, corporate outings, fundraiser tournaments, and private parties — all with panoramic views of the Mon Valley and Pittsburgh skyline. Full catering by Asti&rsquo;s available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:4123515390" className="bg-[#C9A84C] hover:bg-[#b8963e] text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-4 h-4" /> Plan Your Event
            </a>
            <a href="mailto:clubhouse@grandviewgolf.club" className="border border-white/30 hover:border-white/50 text-white px-6 py-3 text-xs tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Mail className="w-3.5 h-3.5" /> Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Lessons CTA */}
      <section className="bg-[#1B4332] text-white py-14">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-7 h-7 text-[#C9A84C]" />
            </div>
            <div>
              <h3 className="text-lg font-bold" style={{ fontFamily: pf }}>Lessons with Josh Houser</h3>
              <p className="text-white/50 text-sm mt-0.5">Head Professional &middot; $50 per 45-minute session</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:4123515390" className="bg-[#C9A84C] hover:bg-[#b8963e] text-white px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Phone className="w-3.5 h-3.5" /> Book a Lesson
            </a>
            <a href="mailto:clubhouse@grandviewgolf.club" className="border border-white/20 hover:border-white/40 text-white px-6 py-3 text-xs tracking-widest uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: "0.15em" }}>
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F2B1E] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img src="/sites/grand-view/logo.png" alt="Grand View Golf Club" width={80} height={48} className="opacity-70" />
                <div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: pf }}>Grand View Golf Club</h3>
                  <p className="text-white/30 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>The Monster on the Mon</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-white/60 mt-6">
                <a href="tel:4123515390" className="flex items-center gap-2.5 hover:text-[#C9A84C] transition-colors"><Phone className="w-4 h-4 text-[#C9A84C]" />(412) 351-5390</a>
                <a href="mailto:clubhouse@grandviewgolf.club" className="flex items-center gap-2.5 hover:text-[#C9A84C] transition-colors"><Mail className="w-4 h-4 text-[#C9A84C]" />clubhouse@grandviewgolf.club</a>
                <div className="flex items-start gap-2.5"><MapPin className="w-4 h-4 text-[#C9A84C] mt-0.5" /><span>1000 Clubhouse Drive<br />North Braddock, PA 15104</span></div>
                <div className="flex items-center gap-2.5"><Clock className="w-4 h-4 text-[#C9A84C]" /><span>Open daily &middot; Dawn to dusk</span></div>
              </div>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase text-white/30 mb-5" style={{ letterSpacing: "0.2em" }}>Course Details</h4>
              <div className="space-y-2.5 text-sm">
                {[["Holes", "18 — Par 70-71"], ["Yardage", "6,111"], ["Slope", "130"], ["Type", "Public"], ["Designer", "Ferdinand Garbin, ASGCA"], ["Established", "1996"], ["Head Pro", "Josh Houser"], ["Driving Range", "4 tees + 4,100 sq ft putting green"], ["On-Site Dining", "Asti's Italian Steakhouse"]].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40">{label}</span>
                    <span className="text-white/80 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <p>&copy; {new Date().getFullYear()} Grand View Golf Club. All rights reserved.</p>
            <p>Website by{" "}<a href="/" className="text-white/40 hover:text-[#C9A84C] transition-colors">KPT Designs</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

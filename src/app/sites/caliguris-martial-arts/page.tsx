import {
  Phone,
  Swords,
  ShieldCheck,
  Trophy,
  Users,
  Award,
  Flame,
  Calendar,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "Caliguri's Academy of Martial Arts | Lower Burrell, PA",
  description:
    "Training champions since 1971. Grand Master Frank Caliguri — 10th-degree black belt, 60+ years in martial arts. Birthplace of MMA in America. Shorin-Ryu Karate, Kobudo, Women's Self-Defense. Call (724) 335-9300.",
};

const disciplines = [
  {
    icon: Swords,
    title: "Shorin-Ryu Karate",
    desc: "The oldest Okinawan karate system, passed down through generations. Traditional kata, kumite, and self-defense taught by Grand Master Caliguri himself.",
  },
  {
    icon: Flame,
    title: "Washin-Ryu",
    desc: "Japanese hard-style karate emphasizing powerful strikes, disciplined stances, and combat effectiveness. A complete fighting system.",
  },
  {
    icon: ShieldCheck,
    title: "Kobudo (Traditional Weapons)",
    desc: "Bo staff, sai, tonfa, nunchaku, and kama. The ancient Okinawan weapons arts that complement empty-hand karate training.",
  },
  {
    icon: Users,
    title: "Women's Self-Defense",
    desc: "Practical, real-world self-defense designed specifically for women. Situational awareness, escape techniques, and effective striking.",
  },
  {
    icon: Trophy,
    title: "Competition Team",
    desc: "Train with a nationally ranked team. Our students compete at the USAMA World Championships and tournaments across the country.",
  },
];

const beltColors = [
  { color: "#FFFFFF", label: "White" },
  { color: "#E8D44D", label: "Yellow" },
  { color: "#E8872D", label: "Orange" },
  { color: "#2D8B2D", label: "Green" },
  { color: "#2D5FE8", label: "Blue" },
  { color: "#5C3A1E", label: "Brown" },
  { color: "#0A0A0A", label: "Black", border: true },
];

const imgBase = "/sites/caliguris";

export default function CaligurisMartialArts() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        backgroundColor: "#0A0A0A",
        color: "#F5F0E8",
      }}
    >
      {/* === HERO === */}
      <section className="relative flex flex-col items-center justify-center px-4" style={{ minHeight: "100vh" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, #F5F0E8 39px, #F5F0E8 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #F5F0E8 39px, #F5F0E8 40px)",
        }} />

        <div className="relative text-center z-10">
          <p className="text-xs tracking-[0.5em] uppercase mb-8" style={{ color: "#D4AF37" }}>
            Est. 1971 &mdash; Lower Burrell, Pennsylvania
          </p>

          <h1
            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[0.2em] uppercase"
            style={{ color: "#F5F0E8", letterSpacing: "0.25em" }}
          >
            CALIGURI&rsquo;S
          </h1>

          <p className="text-sm sm:text-base tracking-[0.4em] uppercase mt-4" style={{ color: "#F5F0E8" }}>
            Academy of Martial Arts
          </p>

          {/* Brush stroke divider */}
          <div className="mx-auto mt-10 mb-10" style={{
            width: "280px",
            height: "4px",
            background: "linear-gradient(90deg, transparent 0%, #8B0000 10%, #8B0000 30%, #6B0000 45%, #8B0000 55%, #8B0000 70%, #8B0000 90%, transparent 100%)",
            clipPath: "polygon(0% 40%, 5% 0%, 15% 80%, 25% 10%, 35% 60%, 45% 20%, 55% 90%, 65% 30%, 75% 70%, 85% 10%, 95% 80%, 100% 50%)",
            transform: "scaleY(2.5)",
          }} />

          <p className="text-lg sm:text-xl font-light max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(245,240,232,0.6)" }}>
            The Birthplace of MMA in America
          </p>
          <p className="text-sm mt-2" style={{ color: "rgba(245,240,232,0.4)" }}>
            60+ years of tradition. 10th-degree Grand Master. World champions.
          </p>

          <a
            href="tel:7243359300"
            className="inline-flex items-center gap-3 mt-12 px-8 py-4 text-sm tracking-[0.2em] uppercase font-semibold transition-colors"
            style={{
              border: "1px solid #8B0000",
              color: "#F5F0E8",
              backgroundColor: "transparent",
            }}
          >
            <Phone className="w-4 h-4" />
            (724) 335-9300
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-12" style={{ backgroundColor: "rgba(245,240,232,0.2)" }} />
        </div>
      </section>

      {/* === THE GRAND MASTER === */}
      <section className="py-24 sm:py-32 px-4" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.5em] uppercase mb-6" style={{ color: "#D4AF37" }}>
            The Grand Master
          </p>

          <div className="w-16 h-px mx-auto mb-8" style={{ backgroundColor: "#D4AF37" }} />

          {/* Frank Caliguri portrait */}
          <div className="mx-auto mb-10 w-40 h-40 sm:w-48 sm:h-48 overflow-hidden" style={{ borderRadius: "50%", border: "2px solid rgba(212,175,55,0.3)" }}>
            <img
              src={`${imgBase}/frank.jpg`}
              alt="Grand Master Frank Caliguri"
              className="w-full h-full object-cover"
              style={{ filter: "grayscale(30%) contrast(1.1) brightness(0.85)" }}
            />
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-wide mb-4" style={{ color: "#F5F0E8" }}>
            Frank Caliguri
          </h2>

          <p className="text-lg sm:text-xl tracking-wide mb-2" style={{ color: "#D4AF37" }}>
            10th-Degree Black Belt
          </p>

          <p className="text-sm tracking-[0.3em] uppercase mb-10" style={{ color: "rgba(245,240,232,0.4)" }}>
            Promoted November 13, 2021
          </p>

          <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(245,240,232,0.7)" }}>
            With over 60 years dedicated to martial arts, Grand Master Frank Caliguri
            is a living legend. Known as the &ldquo;Godfather of Mixed Martial Arts,&rdquo;
            he co-created the first regulated MMA competition in American history in 1980
            &mdash; a full 13 years before the UFC. His academy has trained champions
            for over five decades.
          </p>

          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-12">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold" style={{ color: "#D4AF37" }}>60+</p>
              <p className="text-xs tracking-[0.3em] uppercase mt-1" style={{ color: "rgba(245,240,232,0.4)" }}>Years</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold" style={{ color: "#D4AF37" }}>10th</p>
              <p className="text-xs tracking-[0.3em] uppercase mt-1" style={{ color: "rgba(245,240,232,0.4)" }}>Degree</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold" style={{ color: "#D4AF37" }}>1971</p>
              <p className="text-xs tracking-[0.3em] uppercase mt-1" style={{ color: "rgba(245,240,232,0.4)" }}>Founded</p>
            </div>
          </div>
        </div>
      </section>

      {/* === MMA ORIGINS === */}
      <section className="py-20 sm:py-24 px-4" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "#8B0000" }}>
              Before the UFC
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-wide mb-3" style={{ color: "#F5F0E8" }}>
              The Birthplace of MMA
            </h2>
            <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(245,240,232,0.5)" }}>
              In 1980, Frank Caliguri and CV Productions founder Bill Viola co-created
              the first regulated mixed martial arts competition in American history
              &mdash; the &ldquo;Tough Guys&rdquo; &mdash; 13 years before the UFC.
            </p>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Viola & Caliguri */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src={`${imgBase}/viola-caliguri.jpg`}
                alt="Bill Viola and Grand Master Frank Caliguri"
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(40%) contrast(1.05) brightness(0.75)" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%)" }} />
              <p className="absolute bottom-3 left-4 right-4 text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.6)" }}>
                Bill Viola &amp; Frank Caliguri
              </p>
            </div>

            {/* Stage / 30th anniversary */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src={`${imgBase}/stage.jpg`}
                alt="Viola and Caliguri on stage at the 30-year MMA anniversary"
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(40%) contrast(1.05) brightness(0.75)" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%)" }} />
              <p className="absolute bottom-3 left-4 right-4 text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.6)" }}>
                30-Year Anniversary Celebration
              </p>
            </div>

            {/* Tough Guys */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src={`${imgBase}/tough-guys.jpg`}
                alt="'Tough Guys' — the first regulated MMA competition in America"
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(50%) contrast(1.1) brightness(0.7)" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%)" }} />
              <p className="absolute bottom-3 left-4 right-4 text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.6)" }}>
                &ldquo;Tough Guys&rdquo; &mdash; 1980
              </p>
            </div>

            {/* Heinz History Center */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src={`${imgBase}/museum.jpg`}
                alt="Heinz History Center MMA exhibit featuring Caliguri's legacy"
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(40%) contrast(1.05) brightness(0.7)" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%)" }} />
              <p className="absolute bottom-3 left-4 right-4 text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.6)" }}>
                Heinz History Center Exhibit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === INSTRUCTORS === */}
      <section className="py-20 sm:py-24 px-4" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "#D4AF37" }}>
            Our Instructors
          </p>
          <div className="w-16 h-px mx-auto mb-10" style={{ backgroundColor: "#D4AF37" }} />

          {/* Nancy Caliguri photo */}
          <div className="relative mx-auto mb-10 max-w-md overflow-hidden" style={{ aspectRatio: "3/2" }}>
            <img
              src={`${imgBase}/nancy.webp`}
              alt="Sensei Nancy Caliguri with black belt students"
              className="w-full h-full object-cover"
              style={{ filter: "grayscale(25%) contrast(1.05) brightness(0.8)" }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 40%)" }} />
            <p className="absolute bottom-3 left-4 right-4 text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.6)" }}>
              Sensei Nancy Caliguri &amp; Black Belts
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm" style={{ color: "rgba(245,240,232,0.7)" }}>
            <span>Master Nancy Caliguri</span>
            <span style={{ color: "rgba(245,240,232,0.2)" }}>/</span>
            <span>Kelli Caliguri</span>
            <span style={{ color: "rgba(245,240,232,0.2)" }}>/</span>
            <span>Frank Dinsmore Jr.</span>
          </div>
          <p className="text-sm mt-4 max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(245,240,232,0.45)" }}>
            A family tradition of excellence. Our instructors carry forward
            Grand Master Caliguri&rsquo;s legacy with decades of combined experience.
          </p>
        </div>
      </section>

      {/* === DISCIPLINES === */}
      <section className="py-0">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center py-16">
            <p className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "#8B0000" }}>
              What We Teach
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-wide" style={{ color: "#F5F0E8" }}>
              Disciplines
            </h2>
          </div>
        </div>

        {disciplines.map((d, i) => (
          <div
            key={d.title}
            className="w-full"
            style={{ backgroundColor: i % 2 === 0 ? "#111111" : "#0A0A0A" }}
          >
            <div className="max-w-5xl mx-auto px-4 py-10 sm:py-12 flex items-start gap-6 sm:gap-10">
              <div className="shrink-0 w-12 h-12 flex items-center justify-center" style={{ color: "#8B0000" }}>
                <d.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-wide mb-2" style={{ color: "#F5F0E8" }}>
                  {d.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>
                  {d.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* === BELT PROGRESSION === */}
      <section className="py-20 sm:py-24 px-4" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.5em] uppercase mb-8" style={{ color: "rgba(245,240,232,0.4)" }}>
            The Path
          </p>

          <div className="flex justify-center items-center gap-1 sm:gap-2">
            {beltColors.map((belt) => (
              <div key={belt.label} className="flex flex-col items-center gap-2">
                <div
                  className="w-8 sm:w-12 h-14 sm:h-20"
                  style={{
                    backgroundColor: belt.color,
                    border: belt.border ? "1px solid rgba(245,240,232,0.2)" : "none",
                  }}
                />
                <span className="text-[9px] sm:text-[10px] tracking-[0.15em] uppercase" style={{ color: "rgba(245,240,232,0.35)" }}>
                  {belt.label}
                </span>
              </div>
            ))}
          </div>

          {/* Brush stroke divider */}
          <div className="mx-auto mt-10 mb-6" style={{
            width: "200px",
            height: "3px",
            background: "linear-gradient(90deg, transparent 0%, #8B0000 15%, #8B0000 85%, transparent 100%)",
            clipPath: "polygon(0% 50%, 8% 0%, 20% 80%, 30% 20%, 45% 70%, 55% 10%, 70% 90%, 80% 30%, 92% 80%, 100% 40%)",
            transform: "scaleY(2)",
          }} />

          <p className="text-sm tracking-[0.3em] uppercase" style={{ color: "#8B0000" }}>
            Begin Your Journey
          </p>
        </div>
      </section>

      {/* === COMPETITION & CHAMPIONSHIPS === */}
      <section className="py-20 sm:py-24 px-4" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "#D4AF37" }}>
              Competition
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-wide" style={{ color: "#F5F0E8" }}>
              Champions &amp; Championships
            </h2>
          </div>

          {/* Team 2025 photo */}
          <div className="relative mx-auto mb-14 max-w-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <img
              src={`${imgBase}/team-2025.webp`}
              alt="2025 Chicago USA World Championships team"
              className="w-full h-full object-cover"
              style={{ filter: "grayscale(20%) contrast(1.05) brightness(0.8)" }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(17,17,17,0.8) 0%, transparent 40%)" }} />
            <p className="absolute bottom-3 left-4 right-4 text-xs tracking-[0.2em] uppercase text-center" style={{ color: "rgba(245,240,232,0.6)" }}>
              2025 USA World Championships &mdash; Chicago
            </p>
          </div>

          {/* Mark Dinsmore feature */}
          <div className="text-center mb-16 py-10" style={{ borderTop: "1px solid rgba(245,240,232,0.08)", borderBottom: "1px solid rgba(245,240,232,0.08)" }}>
            <Trophy className="w-8 h-8 mx-auto mb-4" style={{ color: "#D4AF37" }} />
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#D4AF37" }}>
              2025 USAMA World Championships
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-wide mb-2" style={{ color: "#F5F0E8" }}>
              Mark Dinsmore
            </h3>
            <p className="text-base sm:text-lg" style={{ color: "rgba(245,240,232,0.6)" }}>
              Advanced Men&rsquo;s Grand Champion
            </p>
            <p className="text-sm mt-1" style={{ color: "rgba(245,240,232,0.35)" }}>
              Chicago, IL &mdash; 2025
            </p>
          </div>

          {/* PA Karate Championships */}
          <div className="flex items-start gap-6 sm:gap-10">
            <div className="shrink-0" style={{ color: "#8B0000" }}>
              <Calendar className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold tracking-wide mb-2" style={{ color: "#F5F0E8" }}>
                PA Karate Championships
              </h3>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>
                Host of the annual Pennsylvania Karate Championships &mdash; the oldest
                tournament in Pennsylvania and the 3rd-oldest in the United States,
                running continuously since 1972 for over 52 years.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 sm:gap-10 mt-8 pt-8" style={{ borderTop: "1px solid rgba(245,240,232,0.06)" }}>
            <div className="shrink-0" style={{ color: "#8B0000" }}>
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold tracking-wide mb-2" style={{ color: "#F5F0E8" }}>
                Hall of Fame
              </h3>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>
                Grand Master Caliguri is inducted into the US Karate Association Hall of Fame
                and the Alle-Kiski Valley Sports Hall of Fame. Recognized in the AMAA
                &ldquo;Who&rsquo;s Who in the Martial Arts&rdquo; Masters &amp; Pioneers Edition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="py-20 sm:py-24 px-4" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "rgba(245,240,232,0.4)" }}>
              Words from Students
            </p>
          </div>

          {/* Quote 1 */}
          <div className="py-10" style={{ borderTop: "1px solid rgba(245,240,232,0.1)", borderBottom: "1px solid rgba(245,240,232,0.1)" }}>
            <p className="text-base sm:text-lg leading-relaxed text-center italic" style={{ color: "rgba(245,240,232,0.7)" }}>
              &ldquo;Grand Master Caliguri has forgotten more about martial arts than most
              instructors will ever learn. Our whole family trains here &mdash; my kids, my
              wife, and me. The discipline and respect they teach goes far beyond the dojo.&rdquo;
            </p>
            <p className="text-center mt-4 text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(245,240,232,0.35)" }}>
              Chris W. &mdash; Lower Burrell
            </p>
          </div>

          {/* Quote 2 */}
          <div className="py-10" style={{ borderBottom: "1px solid rgba(245,240,232,0.1)" }}>
            <p className="text-base sm:text-lg leading-relaxed text-center italic" style={{ color: "rgba(245,240,232,0.7)" }}>
              &ldquo;My son has been training for 3 years and the transformation is incredible.
              His discipline, confidence, and respect for others has grown beyond what I ever
              expected. Master Nancy and Kelli make every student feel like family.&rdquo;
            </p>
            <p className="text-center mt-4 text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(245,240,232,0.35)" }}>
              Jennifer L. &mdash; New Kensington
            </p>
          </div>

          {/* Quote 3 */}
          <div className="py-10" style={{ borderBottom: "1px solid rgba(245,240,232,0.1)" }}>
            <p className="text-base sm:text-lg leading-relaxed text-center italic" style={{ color: "rgba(245,240,232,0.7)" }}>
              &ldquo;Training at the birthplace of MMA in America is something special.
              The history here is incredible, but the world-class instruction is what keeps
              you coming back. There is no place like this anywhere.&rdquo;
            </p>
            <p className="text-center mt-4 text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(245,240,232,0.35)" }}>
              Dan K. &mdash; Natrona Heights
            </p>
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="py-20 sm:py-24 px-4" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide mb-4" style={{ color: "#F5F0E8" }}>
            Train Under a Living Legend
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-10" style={{ color: "rgba(245,240,232,0.5)" }}>
            10th-degree Grand Master. Family-owned since 1971.
            World-class instruction in the Alle-Kiski Valley.
          </p>

          <a
            href="tel:7243359300"
            className="inline-flex items-center gap-3 px-10 py-5 text-sm tracking-[0.2em] uppercase font-semibold transition-colors"
            style={{
              backgroundColor: "#8B0000",
              color: "#F5F0E8",
              border: "none",
            }}
          >
            <Phone className="w-4 h-4" />
            (724) 335-9300
          </a>

          <p className="mt-6 text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>
            All ages welcome &mdash; call to schedule a trial class
          </p>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="py-10 px-4" style={{ backgroundColor: "#0A0A0A", borderTop: "1px solid rgba(245,240,232,0.06)" }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-[0.15em]" style={{ color: "rgba(245,240,232,0.3)" }}>
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            <span>Lower Burrell, PA 15068</span>
          </div>

          <a href="tel:7243359300" className="transition-colors" style={{ color: "rgba(245,240,232,0.3)" }}>
            (724) 335-9300
          </a>

          <p>
            Website by{" "}
            <a href="/" className="transition-colors" style={{ color: "rgba(245,240,232,0.5)" }}>
              KPT Designs
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

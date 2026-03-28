import {
  MapPin,
  Calendar,
  Users,
  Trophy,
  Star,
  Clock,
  Wine,
  Target,
  ChevronRight,
  Zap,
  ShoppingBag,
  GraduationCap,
  Mail,
  Instagram,
  Facebook,
  ArrowRight,
  CircleDollarSign,
  Crown,
  Shield,
} from "lucide-react";

const IMG = "/sites/three-rivers-pickleball";

export const metadata = {
  title: "Three Rivers Pickleball Club | Robinson Township, PA",
  description:
    "12 indoor pickleball courts, pro shop, craft beer lounge. Open play, leagues, lessons. No contracts. Robinson Township, PA.",
};

export default function ThreeRiversPickleball() {
  return (
    <div className="min-h-screen bg-white text-[#37474F]" style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif" }}>
      {/* ─── HEADER / NAV ─── */}
      <header className="sticky top-0 z-50 bg-[#00695C] shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src={`${IMG}/logo.jpg`} alt="Three Rivers Pickleball Club" className="h-10 w-auto rounded-full" />
            <div className="leading-tight">
              <span className="block text-xl font-extrabold tracking-tight text-white">
                Three Rivers
              </span>
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#FFC107]">
                Pickleball Club
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {["Facility", "Programs", "Membership", "Events"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-white/80 transition-colors hover:text-[#FFC107]"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#book"
            className="rounded-full bg-[#FFC107] px-6 py-2.5 text-sm font-bold text-[#00695C] shadow-md transition-all hover:bg-yellow-300 hover:shadow-lg"
          >
            Book a Court
          </a>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-[#00695C] pb-24 pt-20">
        {/* Hero background image */}
        <div className="pointer-events-none absolute inset-0">
          <img
            src={`${IMG}/hero.jpg`}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#00695C]/80" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 backdrop-blur-sm">
            <MapPin className="h-4 w-4 text-[#FFC107]" />
            <span className="text-sm font-medium text-white/90">
              Robinson Township, PA
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Smash it.
            <br />
            <span className="text-[#FFC107]">Sip it.</span>
            <br />
            Repeat.
          </h1>

          <p className="mx-auto mb-4 max-w-2xl text-xl text-white/80 md:text-2xl">
            Pittsburgh&apos;s court is always open.
          </p>

          <p className="mx-auto mb-10 max-w-xl text-base text-white/60">
            20,000 sq ft of pure pickleball energy — 12 regulation courts,
            a stocked pro shop, and a lounge with craft beer on tap.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFC107] px-8 py-4 text-lg font-bold text-[#00695C] shadow-xl transition-all hover:bg-yellow-300 hover:shadow-2xl"
            >
              Book a Court
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#membership"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-[#FFC107] hover:text-[#FFC107]"
            >
              View Memberships
            </a>
          </div>

          {/* Quick stats */}
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { num: "12", label: "Courts" },
              { num: "20K", label: "Sq Ft" },
              { num: "7", label: "Days/Week" },
              { num: "0", label: "Contracts" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-extrabold text-[#FFC107]">
                  {stat.num}
                </div>
                <div className="text-sm font-medium text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FACILITY ─── */}
      <section id="facility" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.15em] text-[#00695C]">
              Our Facility
            </span>
            <h2 className="text-4xl font-extrabold text-[#37474F] md:text-5xl">
              Everything under one roof
            </h2>
          </div>

          {/* Armstrong Park facility photo */}
          <div className="mb-16 overflow-hidden rounded-2xl shadow-xl">
            <img
              src={`${IMG}/armstrong-park.jpg`}
              alt="Armstrong Park — Three Rivers Pickleball Club facility"
              className="h-64 w-full object-cover md:h-96"
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: "12 Regulation Courts",
                desc: "Climate-controlled indoor courts with pro-grade surfaces, LED lighting, and dedicated warm-up zones.",
                color: "bg-[#00695C]",
              },
              {
                icon: ShoppingBag,
                title: "Pro Shop",
                desc: "Paddles, shoes, apparel, and accessories from top brands. Demo paddles available to try before you buy.",
                color: "bg-[#37474F]",
              },
              {
                icon: GraduationCap,
                title: "Lessons & Clinics",
                desc: "IPTPA-certified coaches for all levels. Drop-in clinics, group sessions, and 1-on-1 instruction.",
                color: "bg-[#00695C]",
              },
              {
                icon: Wine,
                title: "Lounge & Beer Garden",
                desc: "Craft beers on tap, local wines, snacks, and big screens. Watch the action from our mezzanine lounge.",
                color: "bg-[#37474F]",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.color}`}
                >
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#37474F]">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-[#37474F]/70">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROGRAMS ─── */}
      <section id="programs" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.15em] text-[#FFC107]">
              Programs
            </span>
            <h2 className="text-4xl font-extrabold text-[#37474F] md:text-5xl">
              Play your way
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#37474F]/60">
              Whether you&apos;re picking up a paddle for the first time or
              grinding for your next tournament medal, we&apos;ve got a program
              for you.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Open Play",
                time: "Daily, 6am – 10pm",
                desc: "Walk in anytime. We run rotating skill-level courts so you always get a good match.",
                tag: "Most Popular",
                tagColor: "bg-[#FFC107] text-[#00695C]",
              },
              {
                icon: Users,
                title: "Leagues",
                time: "Mon/Wed/Fri evenings",
                desc: "6-week seasons with round-robin and playoff formats. Singles, doubles, and mixed divisions.",
                tag: "Competitive",
                tagColor: "bg-[#00695C] text-white",
              },
              {
                icon: Trophy,
                title: "Tournaments",
                time: "Monthly",
                desc: "USAP-sanctioned and in-house tournaments. Cash prizes, trophies, and serious bragging rights.",
                tag: "All Levels",
                tagColor: "bg-[#37474F] text-white",
              },
              {
                icon: GraduationCap,
                title: "Private Coaching",
                time: "By appointment",
                desc: "1-on-1 sessions with certified pros. Video analysis, drill programs, and game strategy.",
                tag: "1-on-1",
                tagColor: "bg-[#FFC107] text-[#00695C]",
              },
              {
                icon: Star,
                title: "Youth Programs",
                time: "Sat mornings",
                desc: "Ages 8–17. Fun, fast-paced intro to the sport with skills challenges and mini-tournaments.",
                tag: "Ages 8–17",
                tagColor: "bg-[#00695C] text-white",
              },
            ].map((program) => (
              <div
                key={program.title}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition-all hover:border-[#00695C]/20 hover:shadow-lg"
              >
                <span
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${program.tagColor}`}
                >
                  {program.tag}
                </span>
                <program.icon className="mb-5 h-8 w-8 text-[#00695C]" />
                <h3 className="mb-1 text-xl font-bold text-[#37474F]">
                  {program.title}
                </h3>
                <p className="mb-4 flex items-center gap-1.5 text-sm text-[#00695C] font-medium">
                  <Clock className="h-3.5 w-3.5" />
                  {program.time}
                </p>
                <p className="leading-relaxed text-[#37474F]/70">
                  {program.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MEMBERSHIP ─── */}
      <section id="membership" className="bg-[#00695C] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.15em] text-[#FFC107]">
              Membership
            </span>
            <h2 className="text-4xl font-extrabold text-white md:text-5xl">
              No contracts. No gimmicks.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
              Play once or play every day — we keep it simple.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: CircleDollarSign,
                tier: "Drop-In",
                price: "$15",
                unit: "/session",
                desc: "Perfect for casual players and first-timers.",
                features: [
                  "Access to open play courts",
                  "Paddle rental included",
                  "Lounge access",
                  "No commitment",
                ],
                cta: "Walk In Anytime",
                featured: false,
              },
              {
                icon: Crown,
                tier: "Monthly",
                price: "$89",
                unit: "/mo",
                desc: "For regulars who play multiple times per week.",
                features: [
                  "Unlimited open play",
                  "League entry discounts (20%)",
                  "1 free guest pass/month",
                  "Pro shop discount (10%)",
                  "Cancel anytime",
                ],
                cta: "Start Monthly",
                featured: true,
              },
              {
                icon: Shield,
                tier: "Annual",
                price: "$899",
                unit: "/yr",
                desc: "Best value — save over $170 vs. monthly.",
                features: [
                  "Everything in Monthly",
                  "Priority court booking",
                  "2 free guest passes/month",
                  "Pro shop discount (15%)",
                  "Free clinic access",
                  "Exclusive member events",
                ],
                cta: "Go Annual",
                featured: false,
              },
            ].map((plan) => (
              <div
                key={plan.tier}
                className={`relative rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-2xl ${
                  plan.featured
                    ? "border-2 border-[#FFC107] bg-white shadow-xl scale-[1.02]"
                    : "bg-white/10 backdrop-blur-sm border border-white/10"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#FFC107] px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#00695C]">
                    Most Popular
                  </div>
                )}

                <plan.icon
                  className={`mb-4 h-8 w-8 ${
                    plan.featured ? "text-[#00695C]" : "text-[#FFC107]"
                  }`}
                />

                <h3
                  className={`mb-1 text-2xl font-bold ${
                    plan.featured ? "text-[#37474F]" : "text-white"
                  }`}
                >
                  {plan.tier}
                </h3>

                <div className="mb-4">
                  <span
                    className={`text-5xl font-extrabold ${
                      plan.featured ? "text-[#00695C]" : "text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-lg ${
                      plan.featured ? "text-[#37474F]/50" : "text-white/50"
                    }`}
                  >
                    {plan.unit}
                  </span>
                </div>

                <p
                  className={`mb-6 text-sm ${
                    plan.featured ? "text-[#37474F]/60" : "text-white/60"
                  }`}
                >
                  {plan.desc}
                </p>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-sm ${
                        plan.featured ? "text-[#37474F]" : "text-white/80"
                      }`}
                    >
                      <ChevronRight
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          plan.featured ? "text-[#00695C]" : "text-[#FFC107]"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#book"
                  className={`block w-full rounded-full py-3 text-center font-bold transition-all ${
                    plan.featured
                      ? "bg-[#00695C] text-white hover:bg-[#004D40]"
                      : "bg-[#FFC107] text-[#00695C] hover:bg-yellow-300"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UPCOMING EVENTS ─── */}
      <section id="events" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.15em] text-[#00695C]">
              Upcoming Events
            </span>
            <h2 className="text-4xl font-extrabold text-[#37474F] md:text-5xl">
              Get on the calendar
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                date: "April 12, 2026",
                day: "Saturday",
                title: "Steel City Smash Open",
                desc: "USAP-sanctioned doubles tournament. 3.5–5.0 divisions. $2,000 prize pool. Registration closes April 5.",
                tag: "Tournament",
                tagColor: "bg-[#FFC107] text-[#00695C]",
                spots: "24 spots left",
              },
              {
                date: "April 21, 2026",
                day: "Monday",
                title: "Spring League Kickoff",
                desc: "6-week mixed doubles league. Monday nights 6–9pm. All skill levels welcome. Teams of 2.",
                tag: "League",
                tagColor: "bg-[#00695C] text-white",
                spots: "8 teams left",
              },
              {
                date: "May 3, 2026",
                day: "Saturday",
                title: "Dink & Drink Social",
                desc: "Beginner-friendly round-robin mixer with craft beer tastings from local breweries. Paddles provided.",
                tag: "Social",
                tagColor: "bg-[#37474F] text-white",
                spots: "Open registration",
              },
            ].map((event) => (
              <div
                key={event.title}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Date banner */}
                <div className="bg-[#00695C] px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-white/60">
                        {event.day}
                      </p>
                      <p className="text-lg font-bold text-white">
                        {event.date}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${event.tagColor}`}
                    >
                      {event.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-[#37474F]">
                    {event.title}
                  </h3>
                  <p className="mb-4 leading-relaxed text-[#37474F]/70">
                    {event.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-sm font-medium text-[#00695C]">
                      <Calendar className="h-4 w-4" />
                      {event.spots}
                    </span>
                    <a
                      href="#book"
                      className="inline-flex items-center gap-1 text-sm font-bold text-[#00695C] transition-colors hover:text-[#FFC107]"
                    >
                      Register
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.15em] text-[#FFC107]">
              Member Love
            </span>
            <h2 className="text-4xl font-extrabold text-[#37474F] md:text-5xl">
              Don&apos;t take our word for it
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  "I signed up for drop-in on a whim and now I'm here four nights a week. The courts are pristine, the vibe is incredible, and the beer selection is no joke.",
                name: "Dave Kowalski",
                detail: "Member since 2024",
                rating: 5,
              },
              {
                quote:
                  "My kids and I started in the youth program and now we play leagues together. It's become our family's favorite thing to do. The coaches are amazing.",
                name: "Priya Chandrasekaran",
                detail: "Family Membership",
                rating: 5,
              },
              {
                quote:
                  "Best-run pickleball facility in western PA, hands down. The league nights are competitive but friendly, and the lounge is perfect for post-match hangs.",
                name: "Marcus Thompson",
                detail: "Annual Member",
                rating: 5,
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-8"
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#FFC107] text-[#FFC107]"
                    />
                  ))}
                </div>

                <p className="mb-6 leading-relaxed text-[#37474F]/80">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div>
                  <p className="font-bold text-[#37474F]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#37474F]/50">
                    {testimonial.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FUN CTA ─── */}
      <section
        id="book"
        className="relative overflow-hidden bg-[#FFC107] py-24"
      >
        {/* Decorative pickleball pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-24 w-24 rounded-full border-[6px] border-[#00695C]"
              style={{
                top: `${Math.floor(i / 5) * 30 - 5}%`,
                left: `${(i % 5) * 25 - 5}%`,
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-extrabold text-[#00695C] md:text-6xl">
            Grab a paddle.
            <br />
            Grab a beer.
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-xl text-[#00695C]/70">
            Your first drop-in is on us. Walk in, play a game, and see what
            all the fuss is about. No strings attached.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:play@3riverspickleball.com"
              className="inline-flex items-center gap-2 rounded-full bg-[#00695C] px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-[#004D40] hover:shadow-2xl"
            >
              <Mail className="h-5 w-5" />
              Contact Us
            </a>
            <a
              href="mailto:play@3riverspickleball.com"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#00695C] px-8 py-4 text-lg font-semibold text-[#00695C] transition-all hover:bg-[#00695C] hover:text-white"
            >
              play@3riverspickleball.com
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#37474F] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="mb-4 flex items-center gap-3">
                <img src={`${IMG}/logo.jpg`} alt="Three Rivers Pickleball Club" className="h-9 w-auto rounded-full" />
                <div className="leading-tight">
                  <span className="block text-lg font-bold text-white">
                    Three Rivers
                  </span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FFC107]">
                    Pickleball Club
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/50">
                Pittsburgh&apos;s premier indoor pickleball facility.
                20,000 sq ft of courts, community, and craft beer.
              </p>
            </div>

            {/* Location */}
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FFC107]">
                Location
              </h4>
              <div className="space-y-3 text-sm text-white/70">
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FFC107]" />
                  <span>
                    4200 Park Manor Blvd
                    <br />
                    Robinson Township, PA 15108
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#FFC107]" />
                  <a href="mailto:play@3riverspickleball.com" className="transition-colors hover:text-[#FFC107]">
                    play@3riverspickleball.com
                  </a>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FFC107]">
                Hours
              </h4>
              <div className="space-y-2 text-sm text-white/70">
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0 text-[#FFC107]" />
                  <span>
                    <strong className="text-white/90">Mon – Fri:</strong>{" "}
                    6:00am – 10:00pm
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0 text-[#FFC107]" />
                  <span>
                    <strong className="text-white/90">Saturday:</strong>{" "}
                    7:00am – 10:00pm
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0 text-[#FFC107]" />
                  <span>
                    <strong className="text-white/90">Sunday:</strong>{" "}
                    8:00am – 8:00pm
                  </span>
                </p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FFC107]">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: "Instagram" },
                  { icon: Facebook, label: "Facebook" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-[#FFC107] hover:text-[#00695C]"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              <p className="mt-6 text-sm text-white/40">
                Tag us{" "}
                <span className="font-medium text-[#FFC107]">
                  @3riverspickleball
                </span>
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-white/30">
              &copy; {new Date().getFullYear()} Three Rivers Pickleball Club.
              All rights reserved. Robinson Township, PA.
            </p>
            <p className="text-xs text-white/30 mt-2">
              Website by{" "}
              <a href="/" className="text-white/40 hover:text-white transition-colors">KPT Designs</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

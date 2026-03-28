import { Phone, Clock, Sparkles, Heart, Brain, Zap, Sun, Moon, Star, Users, Video, Home, Instagram, Youtube, ChevronRight, Mail } from "lucide-react";

export const metadata = {
  title: "FAB Quantum Harmony | Holistic Wellness & Quantum Healing | Phoenix, AZ",
  description:
    "Empowering individuals through holistic wellbeing. Virtual and in-home quantum healing sessions with Frances Archuleta-Bess. Discover balance, vitality, and harmony. Call (602) 644-1314.",
};

const services = [
  {
    icon: "Brain",
    title: "Quantum Healing",
    description:
      "Tap into the body's innate ability to heal through quantum energy alignment. Our sessions address energetic imbalances at their root, promoting deep restoration and cellular harmony.",
  },
  {
    icon: "Heart",
    title: "Holistic Wellbeing",
    description:
      "A whole-person approach integrating mind, body, and spirit. We provide resources, teaching, and support to help you achieve lasting balance in every dimension of your life.",
  },
  {
    icon: "Video",
    title: "Virtual Sessions",
    description:
      "Connect from anywhere with our guided virtual healing sessions. Available by appointment Tuesday through Sunday — experience the same transformative energy from the comfort of your home.",
  },
  {
    icon: "Home",
    title: "In-Home Sessions",
    description:
      "Personalized quantum healing in your own sacred space. Available weekends by request for a deeply immersive and private healing experience.",
  },
  {
    icon: "Sun",
    title: "Energy Balancing",
    description:
      "Restore your body's natural energetic flow through guided frequency work. Release blockages, reduce stress, and unlock a vibrant state of vitality and clarity.",
  },
  {
    icon: "Users",
    title: "Group Wellness",
    description:
      "Shared healing circles and group sessions that amplify collective energy. Perfect for families, friends, or wellness communities seeking transformation together.",
  },
];

const hours = [
  { day: "Tuesday", time: "4:00 PM - 5:30 PM" },
  { day: "Wednesday", time: "Closed" },
  { day: "Thursday", time: "4:00 PM - 5:30 PM" },
  { day: "Friday", time: "4:00 PM - 6:00 PM" },
  { day: "Saturday", time: "8:00 AM - 10:00 AM" },
  { day: "Sunday", time: "8:00 AM - 10:00 AM" },
  { day: "Monday", time: "Closed" },
];

const testimonials = [
  {
    quote:
      "Frances has a true gift. After just one session, I felt a shift in my energy that lasted for weeks. She creates such a safe and calming space.",
    name: "Maria S.",
    detail: "Virtual Session Client",
  },
  {
    quote:
      "I was skeptical at first, but the results speak for themselves. My chronic tension melted away and I feel more centered than I have in years.",
    name: "David R.",
    detail: "In-Home Session Client",
  },
  {
    quote:
      "The virtual sessions are just as powerful as in-person. Frances guided me through a healing that brought me to tears — in the best way possible.",
    name: "Jasmine T.",
    detail: "Virtual Session Client",
  },
];

const values = [
  { icon: "Sparkles", label: "Empowerment", description: "We equip you with tools and knowledge to sustain your own healing journey." },
  { icon: "Heart", label: "Compassion", description: "Every session is held in a space of unconditional love and non-judgment." },
  { icon: "Zap", label: "Transformation", description: "We believe in the body's quantum capacity for profound, lasting change." },
  { icon: "Star", label: "Harmony", description: "Balance between mind, body, and spirit is the foundation of true wellness." },
];

const iconMap: Record<string, typeof Phone> = { Brain, Heart, Video, Home, Sun, Users, Sparkles, Zap, Star };

const ff = "'Cormorant Garamond', serif";

export default function FabQuantumHarmony() {
  return (
    <div className="min-h-screen bg-[#0D0B1A]">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,700&display=swap');
            .fqh-glow { box-shadow: 0 0 60px rgba(139, 92, 246, 0.15), 0 0 120px rgba(45, 212, 191, 0.08); }
            .fqh-gradient-text { background: linear-gradient(135deg, #C4B5FD, #5EEAD4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
            .fqh-card { background: linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(45, 212, 191, 0.04)); border: 1px solid rgba(139, 92, 246, 0.15); }
            .fqh-card:hover { border-color: rgba(139, 92, 246, 0.35); box-shadow: 0 0 30px rgba(139, 92, 246, 0.1); }
            .fqh-divider { background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.4), rgba(45, 212, 191, 0.4), transparent); height: 1px; }
            .fqh-orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.15; pointer-events: none; }
          `,
        }}
      />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0D0B1A]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/sites/fab-quantum-harmony/logo.jpeg"
              alt="FAB Quantum Harmony"
              width={40}
              height={40}
              className="rounded-full opacity-90"
            />
            <span className="text-white/90 text-sm font-semibold tracking-wide" style={{ fontFamily: ff }}>
              FAB Quantum Harmony
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="tel:+16026441314"
              className="hidden sm:flex items-center gap-2 text-[#C4B5FD] hover:text-[#5EEAD4] transition-colors text-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              (602) 644-1314
            </a>
            <a
              href="tel:+16026441314"
              className="bg-gradient-to-r from-[#8B5CF6] to-[#2DD4BF] text-white px-5 py-2 text-xs font-bold tracking-widest uppercase rounded-full transition-all hover:shadow-lg hover:shadow-purple-500/20"
              style={{ letterSpacing: "0.12em" }}
            >
              Book Session
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <img
          src="/sites/fab-quantum-harmony/wellness-path.jpg"
          alt="Quantum healing energy and wellness"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0B1A]/70 via-[#0D0B1A]/50 to-[#0D0B1A]" />
        <div className="fqh-orb w-[500px] h-[500px] bg-purple-600 -top-40 -right-40" />
        <div className="fqh-orb w-[400px] h-[400px] bg-teal-500 -bottom-32 -left-32" />

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#C4B5FD]" />
            <span className="text-white/60 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>
              Holistic Quantum Wellness
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-8xl font-light leading-[0.95] tracking-tight text-white mb-6"
            style={{ fontFamily: ff }}
          >
            Embrace Your
            <br />
            <span className="fqh-gradient-text font-bold italic">Wellbeing Journey</span>
          </h1>

          <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: ff }}>
            Discover balance, vitality, and quantum healing. We empower individuals through holistic resources, teaching, and
            support to achieve a harmonious life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+16026441314"
              className="bg-gradient-to-r from-[#8B5CF6] to-[#2DD4BF] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase rounded-full transition-all hover:shadow-xl hover:shadow-purple-500/25 flex items-center gap-2"
              style={{ letterSpacing: "0.15em" }}
            >
              <Phone className="w-4 h-4" /> Book a Session
            </a>
            <a
              href="#services"
              className="border border-white/20 hover:border-[#C4B5FD]/40 text-white/70 hover:text-white px-8 py-4 text-sm tracking-widest uppercase rounded-full transition-all flex items-center gap-2"
              style={{ letterSpacing: "0.15em" }}
            >
              Explore Services <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Floating stats */}
          <div className="mt-16 inline-flex items-stretch divide-x divide-white/10 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
            {[
              { label: "Modality", value: "Quantum" },
              { label: "Sessions", value: "Virtual & In-Home" },
              { label: "Approach", value: "Holistic" },
            ].map((s) => (
              <div key={s.label} className="px-6 sm:px-10 py-5 text-center">
                <div className="text-lg sm:text-xl font-semibold text-white" style={{ fontFamily: ff }}>
                  {s.value}
                </div>
                <div className="text-[10px] tracking-widest uppercase text-white/30 mt-1" style={{ letterSpacing: "0.15em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="fqh-divider" />

      {/* Services */}
      <section id="services" className="py-24 relative overflow-hidden">
        <div className="fqh-orb w-[600px] h-[600px] bg-purple-700 top-1/2 -left-60" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <p
              className="text-[#5EEAD4] text-xs tracking-widest uppercase mb-4"
              style={{ letterSpacing: "0.3em" }}
            >
              What We Offer
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-white" style={{ fontFamily: ff }}>
              Discover Your <span className="fqh-gradient-text font-semibold italic">Wellness Path</span>
            </h2>
            <p className="text-white/40 text-sm mt-4 max-w-lg mx-auto leading-relaxed">
              From virtual sessions to in-home healing, every offering is designed to restore your natural energetic balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Sparkles;
              return (
                <div
                  key={service.title}
                  className="fqh-card rounded-2xl p-8 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6]/20 to-[#2DD4BF]/10 flex items-center justify-center mb-5 group-hover:from-[#8B5CF6]/30 group-hover:to-[#2DD4BF]/20 transition-all">
                    <Icon className="w-5 h-5 text-[#C4B5FD]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: ff }}>
                    {service.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="fqh-divider" />

      {/* About / Mission */}
      <section className="py-24 relative overflow-hidden">
        <div className="fqh-orb w-[500px] h-[500px] bg-teal-600 -top-40 right-0" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-[#5EEAD4] text-xs tracking-widest uppercase mb-4"
                style={{ letterSpacing: "0.3em" }}
              >
                Our Mission
              </p>
              <h2 className="text-4xl sm:text-5xl font-light text-white leading-tight mb-6" style={{ fontFamily: ff }}>
                Empowering Your
                <br />
                <span className="fqh-gradient-text font-semibold italic">Quantum Potential</span>
              </h2>
              <div className="space-y-5 text-white/50 text-sm leading-relaxed">
                <p>
                  At FAB Quantum Harmony, we believe every individual holds an extraordinary capacity for healing and
                  transformation. Founded by Frances Archuleta-Bess, our practice is built on the principle that true
                  wellness begins at the quantum level — where energy, intention, and consciousness converge.
                </p>
                <p>
                  Our mission is to provide resources, teaching, and support to allow all to achieve a balanced and
                  harmonious life. We meet you where you are — whether that is through a virtual session from your living
                  room or a deeply personalized in-home healing experience.
                </p>
                <p>
                  Based in Phoenix, Arizona, we serve clients locally and across the country through our virtual
                  offerings. Every session is crafted with intention, compassion, and a commitment to your highest good.
                </p>
              </div>

              {/* Values */}
              <div className="grid grid-cols-2 gap-4 mt-10">
                {values.map((v) => {
                  const VIcon = iconMap[v.icon] || Sparkles;
                  return (
                    <div key={v.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <VIcon className="w-4 h-4 text-[#C4B5FD]" />
                      </div>
                      <div>
                        <span className="text-white/80 text-sm font-medium block">{v.label}</span>
                        <span className="text-white/30 text-xs leading-relaxed">{v.description}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Image + overlay card */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden fqh-glow">
                <img
                  src="/sites/fab-quantum-harmony/harmony.jpg"
                  alt="Holistic wellness and quantum energy healing"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B1A] via-transparent to-transparent rounded-3xl" />
              </div>
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <img
                    src="/sites/fab-quantum-harmony/logo.jpeg"
                    alt="Frances Archuleta-Bess"
                    width={56}
                    height={56}
                    className="rounded-full ring-2 ring-[#8B5CF6]/30"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm" style={{ fontFamily: ff }}>
                      Frances Archuleta-Bess
                    </p>
                    <p className="text-[#5EEAD4] text-xs">Founder & Quantum Healing Practitioner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="fqh-divider" />

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="fqh-orb w-[500px] h-[500px] bg-purple-800 bottom-0 left-1/3" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <p
              className="text-[#5EEAD4] text-xs tracking-widest uppercase mb-4"
              style={{ letterSpacing: "0.3em" }}
            >
              Client Experiences
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-white" style={{ fontFamily: ff }}>
              Stories of <span className="fqh-gradient-text font-semibold italic">Transformation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="fqh-card rounded-2xl p-8 transition-all duration-300 flex flex-col">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#C4B5FD] fill-[#C4B5FD]" />
                  ))}
                </div>
                <blockquote className="text-white/60 text-sm leading-relaxed italic flex-1" style={{ fontFamily: ff }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 pt-5 border-t border-white/5">
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/30 text-xs mt-0.5">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="fqh-divider" />

      {/* Schedule / Hours with image background */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="/sites/fab-quantum-harmony/session.jpg"
          alt="Quantum healing session environment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0D0B1A]/85" />
        <div className="fqh-orb w-[400px] h-[400px] bg-teal-500 top-0 right-0" />

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p
            className="text-[#5EEAD4] text-xs tracking-widest uppercase mb-4"
            style={{ letterSpacing: "0.3em" }}
          >
            Session Hours
          </p>
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-4" style={{ fontFamily: ff }}>
            When We <span className="fqh-gradient-text font-semibold italic">Welcome You</span>
          </h2>
          <p className="text-white/40 text-sm mb-12 max-w-md mx-auto">
            Sessions available by appointment. Text or call to check availability and schedule your healing experience.
          </p>

          <div className="inline-block bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden w-full max-w-lg">
            {hours.map((h, i) => (
              <div
                key={h.day}
                className={`flex items-center justify-between px-8 py-4 ${
                  i < hours.length - 1 ? "border-b border-white/5" : ""
                } ${h.time === "Closed" ? "opacity-40" : ""}`}
              >
                <span className="text-white/70 text-sm font-medium">{h.day}</span>
                <span className="flex items-center gap-2 text-sm">
                  <Clock className="w-3.5 h-3.5 text-[#C4B5FD]" />
                  <span className={h.time === "Closed" ? "text-white/30" : "text-[#5EEAD4]"}>{h.time}</span>
                </span>
              </div>
            ))}
          </div>

          <p className="text-white/25 text-xs mt-6 italic">
            Closed major holidays, first Fridays, and first Sundays of each month.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="fqh-divider" />

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="fqh-orb w-[600px] h-[600px] bg-purple-700 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <div className="fqh-card rounded-3xl p-12 sm:p-16 fqh-glow">
            <Moon className="w-10 h-10 text-[#C4B5FD] mx-auto mb-6" />
            <h2 className="text-3xl sm:text-5xl font-light text-white mb-4" style={{ fontFamily: ff }}>
              Begin Your <span className="fqh-gradient-text font-semibold italic">Healing Journey</span>
            </h2>
            <p className="text-white/40 text-sm max-w-md mx-auto mb-10 leading-relaxed">
              Whether you are seeking relief, balance, or deeper self-understanding, Frances is here to guide you.
              Reach out today to schedule your first session.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+16026441314"
                className="bg-gradient-to-r from-[#8B5CF6] to-[#2DD4BF] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase rounded-full transition-all hover:shadow-xl hover:shadow-purple-500/25 flex items-center gap-2"
                style={{ letterSpacing: "0.15em" }}
              >
                <Phone className="w-4 h-4" /> Call (602) 644-1314
              </a>
              <span className="text-white/30 text-xs">or text to schedule</span>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <a
                href="https://www.instagram.com/fab_quantum_harmony"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-[#C4B5FD] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@fabquantumharmony"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-[#C4B5FD] transition-colors"
              >
                <Zap className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@francesarchuletabess"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-[#C4B5FD] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#080614]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/sites/fab-quantum-harmony/logo.jpeg"
                  alt="FAB Quantum Harmony"
                  width={48}
                  height={48}
                  className="rounded-full opacity-80"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white" style={{ fontFamily: ff }}>
                    FAB Quantum Harmony
                  </h3>
                  <p className="text-white/30 text-xs">Holistic Wellness &middot; Phoenix, AZ</p>
                </div>
              </div>
              <p className="text-white/30 text-sm leading-relaxed mt-4">
                Empowering individuals through quantum healing, holistic resources, and compassionate support for a
                balanced and harmonious life.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-xs tracking-widest uppercase text-white/30 mb-5"
                style={{ letterSpacing: "0.2em" }}
              >
                Contact
              </h4>
              <div className="space-y-3 text-sm">
                <a
                  href="tel:+16026441314"
                  className="flex items-center gap-3 text-white/50 hover:text-[#C4B5FD] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#8B5CF6]" />
                  (602) 644-1314
                </a>
                <div className="flex items-center gap-3 text-white/50">
                  <Mail className="w-4 h-4 text-[#8B5CF6]" />
                  <span>Text or call to schedule</span>
                </div>
                <div className="flex items-center gap-3 text-white/50">
                  <Clock className="w-4 h-4 text-[#8B5CF6]" />
                  <span>Tue-Sun &middot; See hours above</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="text-xs tracking-widest uppercase text-white/30 mb-5"
                style={{ letterSpacing: "0.2em" }}
              >
                Connect
              </h4>
              <div className="space-y-3 text-sm">
                <a
                  href="https://www.instagram.com/fab_quantum_harmony"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-[#C4B5FD] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#8B5CF6]" />
                  @fab_quantum_harmony
                </a>
                <a
                  href="https://www.tiktok.com/@fabquantumharmony"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-[#C4B5FD] transition-colors"
                >
                  <Zap className="w-4 h-4 text-[#8B5CF6]" />
                  @fabquantumharmony
                </a>
                <a
                  href="https://www.youtube.com/@francesarchuletabess"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-[#C4B5FD] transition-colors"
                >
                  <Youtube className="w-4 h-4 text-[#8B5CF6]" />
                  @francesarchuletabess
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/20">
            <p>&copy; {new Date().getFullYear()} FAB Quantum Harmony. All rights reserved.</p>
            <p>
              Website by{" "}
              <a href="/" className="text-white/30 hover:text-[#C4B5FD] transition-colors">
                KPT Designs
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

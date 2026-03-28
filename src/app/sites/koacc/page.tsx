import { Phone, Mail, MapPin, Clock, Heart, Brain, TreePine, Leaf, Shield, Sun, Sparkles, ChevronRight, Star, Users, Award, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Koa Counseling and Consulting | Trauma Therapy in Tempe, AZ | Kawena Seagle, LPC, SEP",
  description:
    "Koa Counseling and Consulting — trauma-focused therapy in Tempe, Arizona. Specializing in Somatic Experiencing, IFS, EMDR, Brainspotting, and Ketamine-Assisted Therapy. Kawena Seagle, MS, LPC, SEP, NCC. Call (480) 530-7301.",
};

const IMG = "/sites/koacc";

const services = [
  {
    title: "Somatic Experiencing",
    description: "A body-based approach to healing trauma by working with the nervous system. Rather than focusing solely on thoughts and emotions, we tune into the body's signals to release stored tension and restore natural regulation.",
    icon: "Heart",
    image: `${IMG}/service1.png`,
  },
  {
    title: "Internal Family Systems (IFS)",
    description: "A compassionate, evidence-based model that recognizes the multiplicity of the mind. IFS helps you connect with your inner parts — protectors, exiles, and managers — to heal wounds from the inside out.",
    icon: "Brain",
    image: `${IMG}/service2.png`,
  },
  {
    title: "EMDR Therapy",
    description: "Eye Movement Desensitization and Reprocessing helps the brain process traumatic memories that have become stuck. Through bilateral stimulation, EMDR reduces the emotional charge of painful experiences.",
    icon: "Sparkles",
    image: `${IMG}/service3.png`,
  },
  {
    title: "Brainspotting",
    description: "A powerful therapy that uses fixed eye positions to access the brain's deep processing capabilities. Brainspotting reaches areas of the brain that talk therapy alone cannot, unlocking profound healing.",
    icon: "Sun",
    image: `${IMG}/service4.png`,
  },
  {
    title: "Equine-Assisted Psychotherapy",
    description: "Working with horses as co-therapists offers a unique and embodied path to healing. Horses mirror our emotional states, helping us develop awareness, boundaries, and authentic connection.",
    icon: "TreePine",
    image: `${IMG}/service5.png`,
  },
  {
    title: "Ketamine-Assisted Therapy",
    description: "A carefully guided therapeutic experience that combines the neuroplasticity benefits of ketamine with psychotherapy. This integrative approach can accelerate healing for treatment-resistant trauma and depression.",
    icon: "Leaf",
    image: `${IMG}/service6.png`,
  },
];

const specialties = [
  "Complex Trauma",
  "PTSD",
  "Anxiety & Panic",
  "Depression",
  "Childhood Abuse",
  "Sexual Assault",
  "Domestic Violence",
  "Grief & Loss",
  "Life Transitions",
  "Chronic Pain",
  "Burnout",
  "Relationship Issues",
];

const credentials = [
  { label: "MS", full: "Master of Science in Mental Health" },
  { label: "LPC", full: "Licensed Professional Counselor" },
  { label: "SEP", full: "Somatic Experiencing Practitioner" },
  { label: "NCC", full: "National Certified Counselor" },
];

const hours = [
  { day: "Monday", time: "10:00 AM - 6:00 PM" },
  { day: "Tuesday", time: "8:00 AM - 1:00 PM" },
  { day: "Wednesday", time: "9:00 AM - 2:00 PM" },
  { day: "Thursday", time: "Closed" },
  { day: "Friday", time: "Closed" },
  { day: "Saturday", time: "Closed" },
];

const iconMap: Record<string, typeof Heart> = { Heart, Brain, Sparkles, Sun, TreePine, Leaf };

const ff = "'DM Serif Display', serif";
const fs = "'DM Sans', sans-serif";

export default function KoaCounseling() {
  return (
    <div className="min-h-screen bg-[#FDFAF6]" style={{ fontFamily: fs }}>
      <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=DM+Serif+Display:ital@0;1&display=swap');` }} />

      {/* Nav */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-[#D4C5A9]/30 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={`${IMG}/logo.png`} alt="Koa Counseling and Consulting" width={40} height={40} className="rounded-full" />
            <div>
              <span className="text-[#2C5F4B] font-bold text-sm tracking-wide" style={{ fontFamily: ff }}>Koa Counseling</span>
              <span className="text-[#8B7D6B] text-[10px] block leading-tight tracking-widest uppercase" style={{ letterSpacing: "0.12em" }}>& Consulting</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#5A6B5D]">
            <a href="#services" className="hover:text-[#2C5F4B] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#2C5F4B] transition-colors">About</a>
            <a href="#specialties" className="hover:text-[#2C5F4B] transition-colors">Specialties</a>
            <a href="#contact" className="hover:text-[#2C5F4B] transition-colors">Contact</a>
          </div>
          <a href="tel:4805307301" className="bg-[#2C5F4B] hover:bg-[#234D3C] text-white px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-colors rounded-full flex items-center gap-2" style={{ letterSpacing: "0.1em" }}>
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Book Consult</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={`${IMG}/hero.jpg`} alt="Serene natural landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A3C2E]/90 via-[#1A3C2E]/70 to-[#1A3C2E]/40" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <Leaf className="w-3.5 h-3.5 text-[#C5B882]" />
              <span className="text-white/80 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.15em" }}>Trauma Therapy in Tempe, AZ</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6" style={{ fontFamily: ff }}>
              Your body remembers.<br />
              <span className="text-[#C5B882] italic">Let it heal.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-lg mb-10">
              Somatic, body-based therapy for complex trauma. A safe space to reconnect with yourself, regulate your nervous system, and reclaim your life.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href="tel:4805307301" className="bg-[#C5B882] hover:bg-[#B5A872] text-[#1A3C2E] px-8 py-3.5 font-bold text-sm tracking-wider uppercase transition-colors rounded-full flex items-center gap-2" style={{ letterSpacing: "0.1em" }}>
                <Phone className="w-4 h-4" />
                Free 15-Minute Consultation
              </a>
              <a href="#services" className="border border-white/30 hover:border-white/50 text-white px-6 py-3.5 text-sm tracking-wider uppercase transition-colors rounded-full flex items-center gap-2" style={{ letterSpacing: "0.1em" }}>
                Explore Services <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-[#2C5F4B] text-white py-5">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-center">
          {[
            { value: "11+", label: "Years Experience" },
            { value: "6", label: "Therapy Modalities" },
            { value: "MS, LPC", label: "Licensed Counselor" },
            { value: "SEP", label: "Somatic Practitioner" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-xl sm:text-2xl font-bold text-[#C5B882]" style={{ fontFamily: ff }}>{stat.value}</div>
              <div className="text-[10px] tracking-widest uppercase text-white/50 mt-1" style={{ letterSpacing: "0.15em" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Intro / Philosophy */}
      <section className="py-20 bg-[#FDFAF6]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Leaf className="w-8 h-8 text-[#C5B882] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl text-[#2C5F4B] mb-6" style={{ fontFamily: ff }}>
            Healing happens in the body
          </h2>
          <p className="text-[#5A6B5D] text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            Traditional talk therapy can only take you so far. Trauma lives not just in your thoughts, but in your muscles, your breath, your nervous system. At Koa Counseling, we work with the whole person — mind and body — to help you move from survival mode to a life of genuine ease and connection.
          </p>
          <p className="text-[#8B7D6B] leading-relaxed max-w-2xl mx-auto">
            Kawena&rsquo;s approach is empathic, understanding, and non-judgmental. Every session is tailored to you — because your healing journey is uniquely yours.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C5B882] text-xs tracking-widest uppercase block mb-3" style={{ letterSpacing: "0.2em" }}>Therapeutic Modalities</span>
            <h2 className="text-3xl sm:text-4xl text-[#2C5F4B]" style={{ fontFamily: ff }}>
              Evidence-Based Healing Approaches
            </h2>
            <p className="text-[#8B7D6B] text-sm mt-3 max-w-lg mx-auto">
              Multiple pathways to recovery, each chosen to meet you exactly where you are.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div key={service.title} className="group bg-[#FDFAF6] border border-[#D4C5A9]/30 rounded-2xl overflow-hidden hover:border-[#2C5F4B]/30 hover:shadow-lg transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#2C5F4B]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#2C5F4B]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#2C5F4B]" style={{ fontFamily: ff }}>{service.title}</h3>
                    </div>
                    <p className="text-[#5A6B5D] text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="relative py-20 overflow-hidden">
        <img src={`${IMG}/nature1.jpg`} alt="Peaceful natural setting" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1A3C2E]/85" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <MessageCircle className="w-8 h-8 text-[#C5B882] mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl italic text-white leading-snug max-w-3xl mx-auto" style={{ fontFamily: ff }}>
            &ldquo;The goal is not to simply survive your past, but to learn to live with more ease in your present.&rdquo;
          </blockquote>
          <p className="text-[#C5B882] text-sm mt-8 tracking-wider uppercase" style={{ letterSpacing: "0.15em" }}>
            &mdash; Kawena Seagle, LPC, SEP
          </p>
        </div>
      </section>

      {/* About Kawena */}
      <section id="about" className="py-20 bg-[#FDFAF6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={`${IMG}/about-portrait.jpg`} alt="Kawena Seagle, MS, LPC, SEP, NCC — Koa Counseling and Consulting" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#2C5F4B] text-white rounded-2xl px-6 py-4 shadow-lg hidden sm:block">
                <div className="text-2xl font-bold" style={{ fontFamily: ff }}>11+</div>
                <div className="text-[10px] tracking-widest uppercase text-white/60" style={{ letterSpacing: "0.15em" }}>Years in Practice</div>
              </div>
            </div>
            <div>
              <span className="text-[#C5B882] text-xs tracking-widest uppercase block mb-3" style={{ letterSpacing: "0.2em" }}>About Your Therapist</span>
              <h2 className="text-3xl sm:text-4xl text-[#2C5F4B] mb-2" style={{ fontFamily: ff }}>
                Kawena Seagle
              </h2>
              <p className="text-[#8B7D6B] text-sm mb-6 tracking-wide">MS, LPC, SEP, NCC</p>
              <div className="space-y-4 text-[#5A6B5D] leading-relaxed">
                <p>
                  Kawena is a Licensed Professional Counselor and Somatic Experiencing Practitioner specializing in complex trauma treatment from a somatic framework. Her niche as a complex trauma therapist developed through years of dedicated work with clients navigating the deepest wounds of their lives.
                </p>
                <p>
                  Before opening Koa Counseling, Kawena worked at an addiction recovery center, a non-profit serving individuals with severe mental illness, and as the trauma therapist for the <strong>Claudia Black Center at The Meadows</strong> — a world-renowned treatment center for trauma and addiction recovery.
                </p>
                <p>
                  She received her Master&rsquo;s degree from Capella University in 2015 and holds certifications in Somatic Experiencing, Somatic Resilience and Regulation, and Somatic Skills for Trauma Therapists. She is trained in IFS (Level 2), EMDR (Levels 1 &amp; 2), Brainspotting (Levels 1 &amp; 2), ACT, DBT, and Pia Mellody&rsquo;s PIT model for codependence.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                {credentials.map((cred) => (
                  <div key={cred.label} className="bg-[#2C5F4B]/10 border border-[#2C5F4B]/20 rounded-full px-4 py-2">
                    <span className="text-[#2C5F4B] font-bold text-sm">{cred.label}</span>
                    <span className="text-[#5A6B5D] text-xs ml-1.5">{cred.full}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section id="specialties" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#C5B882] text-xs tracking-widest uppercase block mb-3" style={{ letterSpacing: "0.2em" }}>Areas of Focus</span>
            <h2 className="text-3xl sm:text-4xl text-[#2C5F4B]" style={{ fontFamily: ff }}>
              Specialties
            </h2>
            <p className="text-[#8B7D6B] text-sm mt-3 max-w-lg mx-auto">
              Kawena works with adults navigating a wide range of challenges rooted in trauma and life stress.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {specialties.map((specialty) => (
              <div key={specialty} className="bg-[#FDFAF6] border border-[#D4C5A9]/30 rounded-xl px-5 py-4 text-center hover:border-[#2C5F4B]/30 hover:bg-[#2C5F4B]/5 transition-all duration-200">
                <Shield className="w-5 h-5 text-[#C5B882] mx-auto mb-2" />
                <span className="text-[#2C5F4B] text-sm font-medium">{specialty}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-[#2C5F4B]/5 border border-[#2C5F4B]/15 rounded-2xl p-8 text-center">
            <Users className="w-7 h-7 text-[#2C5F4B] mx-auto mb-3" />
            <h3 className="text-xl text-[#2C5F4B] font-bold mb-2" style={{ fontFamily: ff }}>Who We Work With</h3>
            <p className="text-[#5A6B5D] text-sm leading-relaxed max-w-2xl mx-auto">
              Young adults (18-30), adults (31-64), and seniors (65+). Sessions are available both in-person in Tempe and via HIPAA-compliant video telehealth. Kawena is an LGBTQIA+ ally and welcomes clients of all backgrounds, identities, and life experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials / Training Gallery */}
      <section className="py-20 bg-[#FDFAF6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#C5B882] text-xs tracking-widest uppercase block mb-3" style={{ letterSpacing: "0.2em" }}>Education &amp; Training</span>
            <h2 className="text-3xl sm:text-4xl text-[#2C5F4B]" style={{ fontFamily: ff }}>
              Certifications &amp; Credentials
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { img: `${IMG}/credential1.png`, alt: "Somatic Experiencing certification" },
              { img: `${IMG}/credential2.png`, alt: "Clinical training credential" },
              { img: `${IMG}/credential3.png`, alt: "Professional certification" },
            ].map((cred) => (
              <div key={cred.img} className="bg-white border border-[#D4C5A9]/30 rounded-2xl overflow-hidden p-4 flex items-center justify-center">
                <img src={cred.img} alt={cred.alt} className="max-h-64 w-auto object-contain" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { title: "Capella University", detail: "MS in Mental Health Counseling, 2015", icon: Award },
              { title: "The Meadows / Claudia Black Center", detail: "Trauma Therapist — world-renowned treatment center", icon: Star },
              { title: "Arizona Board of Behavioral Health", detail: "License #17865 — Active & in good standing", icon: Shield },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-[#D4C5A9]/30 rounded-xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C5B882]/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#C5B882]" />
                </div>
                <div>
                  <h4 className="text-[#2C5F4B] font-bold text-sm" style={{ fontFamily: ff }}>{item.title}</h4>
                  <p className="text-[#8B7D6B] text-xs mt-1">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates & Session Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#C5B882] text-xs tracking-widest uppercase block mb-3" style={{ letterSpacing: "0.2em" }}>Investment in Your Healing</span>
            <h2 className="text-3xl sm:text-4xl text-[#2C5F4B]" style={{ fontFamily: ff }}>
              Session Information
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#FDFAF6] border border-[#D4C5A9]/30 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-[#2C5F4B]" style={{ fontFamily: ff }}>$200</div>
              <div className="text-[#C5B882] text-xs tracking-widest uppercase mt-1 mb-4" style={{ letterSpacing: "0.15em" }}>Per Session</div>
              <p className="text-[#5A6B5D] text-sm leading-relaxed">
                Individual therapy sessions. Payment via cash, check, credit/debit card, or health savings account.
              </p>
            </div>
            <div className="bg-[#2C5F4B] text-white rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold" style={{ fontFamily: ff }}>Free</div>
              <div className="text-[#C5B882] text-xs tracking-widest uppercase mt-1 mb-4" style={{ letterSpacing: "0.15em" }}>15-Min Consultation</div>
              <p className="text-white/70 text-sm leading-relaxed">
                Not sure if we are the right fit? Schedule a free phone consultation to ask questions and discuss your needs.
              </p>
            </div>
          </div>
          <div className="mt-8 bg-[#FDFAF6] border border-[#D4C5A9]/30 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#C5B882]/20 flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-[#C5B882]" />
              </div>
              <div>
                <h4 className="text-[#2C5F4B] font-bold text-sm" style={{ fontFamily: ff }}>In-Person &amp; Telehealth Available</h4>
                <p className="text-[#8B7D6B] text-sm mt-1">
                  Sessions offered in-person at the Tempe office or remotely via a HIPAA-compliant video platform — whichever feels most comfortable for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <img src={`${IMG}/about-bg.jpg`} alt="Healing environment" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1A3C2E]/85" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <Leaf className="w-8 h-8 text-[#C5B882] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: ff }}>
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-white/70 leading-relaxed max-w-xl mx-auto mb-10">
            You have already survived the hardest part. The next step is choosing to heal. Reach out today for a free 15-minute consultation — no pressure, no commitment, just a conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:4805307301" className="bg-[#C5B882] hover:bg-[#B5A872] text-[#1A3C2E] px-8 py-4 font-bold text-sm tracking-wider uppercase transition-colors rounded-full flex items-center gap-2" style={{ letterSpacing: "0.1em" }}>
              <Phone className="w-4 h-4" /> Call (480) 530-7301
            </a>
            <a href="mailto:kawena@koacc.com" className="border border-white/30 hover:border-white/50 text-white px-8 py-4 text-sm tracking-wider uppercase transition-colors rounded-full flex items-center gap-2" style={{ letterSpacing: "0.1em" }}>
              <Mail className="w-4 h-4" /> Email Kawena
            </a>
          </div>
        </div>
      </section>

      {/* Contact & Hours */}
      <section id="contact" className="py-20 bg-[#FDFAF6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#C5B882] text-xs tracking-widest uppercase block mb-3" style={{ letterSpacing: "0.2em" }}>Get in Touch</span>
            <h2 className="text-3xl sm:text-4xl text-[#2C5F4B]" style={{ fontFamily: ff }}>
              Contact &amp; Hours
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#D4C5A9]/30 rounded-2xl p-8">
              <h3 className="text-xl text-[#2C5F4B] font-bold mb-6" style={{ fontFamily: ff }}>Contact Information</h3>
              <div className="space-y-5">
                <a href="tel:4805307301" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#2C5F4B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2C5F4B]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[#2C5F4B]" />
                  </div>
                  <div>
                    <div className="text-[#2C5F4B] font-medium">(480) 530-7301</div>
                    <div className="text-[#8B7D6B] text-xs">Call or text</div>
                  </div>
                </a>
                <a href="mailto:kawena@koacc.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#2C5F4B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2C5F4B]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#2C5F4B]" />
                  </div>
                  <div>
                    <div className="text-[#2C5F4B] font-medium">kawena@koacc.com</div>
                    <div className="text-[#8B7D6B] text-xs">Email anytime</div>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#2C5F4B]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#2C5F4B]" />
                  </div>
                  <div>
                    <div className="text-[#2C5F4B] font-medium">Tempe, AZ 85282</div>
                    <div className="text-[#8B7D6B] text-xs">In-person &amp; telehealth</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#D4C5A9]/30 rounded-2xl p-8">
              <h3 className="text-xl text-[#2C5F4B] font-bold mb-6" style={{ fontFamily: ff }}>Office Hours</h3>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-2 border-b border-[#D4C5A9]/20 last:border-0">
                    <span className="text-[#5A6B5D] text-sm font-medium">{h.day}</span>
                    <span className={`text-sm font-medium ${h.time === "Closed" ? "text-[#8B7D6B]/50" : "text-[#2C5F4B]"}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 bg-[#C5B882]/10 border border-[#C5B882]/20 rounded-xl p-4">
                <Clock className="w-5 h-5 text-[#C5B882] flex-shrink-0" />
                <p className="text-[#5A6B5D] text-xs leading-relaxed">
                  Available for free 15-minute phone consultations during office hours. Reach out to schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A3C2E] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={`${IMG}/logo.png`} alt="Koa Counseling and Consulting" width={44} height={44} className="rounded-full opacity-80" />
                <div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: ff }}>Koa Counseling</h3>
                  <p className="text-white/40 text-xs tracking-wide">& Consulting</p>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mt-4">
                Trauma-focused therapy in Tempe, Arizona. Specializing in somatic, body-based healing for adults navigating complex trauma, PTSD, anxiety, and life transitions.
              </p>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase text-white/30 mb-5" style={{ letterSpacing: "0.2em" }}>Services</h4>
              <div className="space-y-2.5 text-sm text-white/60">
                {services.map((s) => (
                  <div key={s.title} className="hover:text-white/80 transition-colors cursor-default">{s.title}</div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase text-white/30 mb-5" style={{ letterSpacing: "0.2em" }}>Contact</h4>
              <div className="space-y-3 text-sm text-white/60">
                <a href="tel:4805307301" className="flex items-center gap-2.5 hover:text-[#C5B882] transition-colors">
                  <Phone className="w-4 h-4 text-[#C5B882]" />(480) 530-7301
                </a>
                <a href="mailto:kawena@koacc.com" className="flex items-center gap-2.5 hover:text-[#C5B882] transition-colors">
                  <Mail className="w-4 h-4 text-[#C5B882]" />kawena@koacc.com
                </a>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C5B882]" />Tempe, AZ 85282
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <p>&copy; {new Date().getFullYear()} Koa Counseling and Consulting, PLLC. All rights reserved.</p>
            <p>Website by{" "}<a href="/" className="text-white/40 hover:text-[#C5B882] transition-colors">KPT Designs</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Globe,
  Paintbrush,
  RefreshCw,
  ArrowRight,
  Monitor,
  Smartphone,
  Code2,
  Lightbulb,
  CheckCircle2,
  Users,
  Award,
  Clock,
  Zap,
  ChevronDown,
  Star,
  ShoppingCart,
  Server,
  ExternalLink,
  Rocket,
  Shield,
  Search,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, fadeIn, scaleUp, slideLeft, slideRight, stagger, staggerSlow } from "@/lib/animations";
import { cn } from "@/lib/utils";

/* ── Data ── */

const portfolio = [
  {
    name: "Pittsburgh North Golf Club",
    url: "pittsburghnorthgc.com",
    category: "Golf Course",
    desc: "Full course website with tee time integration and membership portal.",
    image: "/sites/pittsburgh-north/hero.jpg",
  },
  {
    name: "Cirigliano Plumbing",
    url: "ciriglianoplumbingllc.com",
    href: "/sites/cirigliano-plumbing",
    category: "Plumbing",
    desc: "Family-owned South Hills plumber. 24/7 emergency service, trenchless sewer repair, and honest pricing.",
    image: "/sites/cirigliano/crew-work.jpg",
    logo: "/sites/cirigliano/logo.png",
  },
  {
    name: "Nicholas Electric Co.",
    url: "nicholaselectric.com",
    href: "/sites/nicholas-electric",
    category: "Electrical",
    desc: "Old-home electrical specialists since 1978. Knob & tube rewiring, EV chargers, and 24/7 emergency service.",
    image: "/sites/nicholas-electric/hero.jpg",
    logo: "/sites/nicholas-electric/logo.png",
  },
  {
    name: "Zeke & Son Roofing",
    url: "zekeandsonroofing.com",
    href: "/sites/zeke-son-roofing",
    category: "Roofing",
    desc: "Three generations since 1949. Shingle, flat, and slate roofing. Post-Gazette Fan Favorites 1st Place.",
    image: "/sites/zeke-son/slide1.jpg",
    logo: "/sites/zeke-son/logo.png",
  },
  {
    name: "Patriot Pest Control",
    url: "patriotpestcontrol.net",
    href: "/sites/patriot-pest-control",
    category: "Pest Control",
    desc: "Family-owned since 1995. Termites, bed bugs, rodents, and humane wildlife removal. BBB A+.",
    image: "/sites/patriot-pest/termites.jpg",
    logo: "/sites/patriot-pest/logo.png",
  },
  {
    name: "Grand View Golf Club",
    url: "pittsburghgolf.com",
    href: "/sites/grand-view-golf",
    category: "Golf Course",
    desc: "\"The Monster on the Mon.\" Public 18-hole course with skyline views and on-site Italian steakhouse.",
    image: "/sites/grand-view/hole14.jpg",
    logo: "/sites/grand-view/logo.png",
  },
  {
    name: "Caliguri's Academy of Martial Arts",
    url: "academyofmartialarts.org",
    href: "/sites/caliguris-martial-arts",
    category: "Martial Arts",
    desc: "Birthplace of MMA in America. Grand Master Frank Caliguri, 10th-degree black belt. Training champions since 1971.",
    image: "/sites/caliguris/stage.jpg",
  },
  {
    name: "Three Rivers Pickleball Club",
    url: "3riverspickleball.com",
    href: "/sites/three-rivers-pickleball",
    category: "Sports & Rec",
    desc: "12 indoor courts, pro shop, and craft beer lounge. Open play, leagues, and tournaments.",
    image: "/sites/three-rivers-pickleball/hero.jpg",
    logo: "/sites/three-rivers-pickleball/logo.jpg",
  },
  {
    name: "D'n A Custom Home Builders",
    url: "dnaconstructioninc.com",
    href: "/sites/dna-custom-homes",
    category: "Home Builder",
    desc: "BuildZoom top 15%. Fully custom homes, owner-builder program, and design-build under one roof.",
    image: "/sites/dna-homes/completed-home.png",
    logo: "/sites/dna-homes/logo.png",
  },
  {
    name: "John C.R. Kelly Realty",
    url: "jcrkelly.com",
    href: "/sites/kelly-realty",
    category: "Property Mgmt",
    desc: "Multi-generational property management since 1960. 50+ active listings, in-house maintenance.",
    image: "/sites/kelly-realty/hero.jpg",
  },
  {
    name: "Inspirational Designs",
    url: "inspirationaldesignspgh.com",
    href: "/sites/inspirational-designs",
    category: "Interior Design",
    desc: "Kitchen & bath design specialist. 84+ projects, VIP styling experience. BBB A+.",
    image: "/sites/inspirational/kitchen1.jpg",
    logo: "/sites/inspirational/logo.png",
  },
  {
    name: "My Family Memory",
    url: "myfamilymemory.com",
    category: "Web Application",
    desc: "Digital platform for preserving and sharing family stories and memories.",
    image: "/sites/myfamilymemory/hero.png",
  },
  {
    name: "WeatherMin",
    url: "weathermin.org",
    category: "Non-Profit",
    desc: "Weather monitoring organization with real-time data visualization.",
    image: "/sites/weathermin/hero.png",
    logo: "/sites/weathermin/icon.png",
  },
  {
    name: "Rental Helper",
    url: "rental-helper.com",
    category: "SaaS",
    desc: "Property management tool for landlords and tenants.",
    image: "/sites/rental-helper/hero.png",
    logo: "/sites/rental-helper/logo.png",
  },
  {
    name: "Vote for Charlie",
    url: "voteforcharlie.org",
    category: "Campaign",
    desc: "Political campaign website with donor engagement and event scheduling.",
    image: "/sites/voteforcharlie/portrait.jpg",
  },
  {
    name: "107 Certified",
    url: "107certified.me",
    category: "Professional",
    desc: "FAA drone certification resources and training portal.",
    image: "/sites/107certified/hero.png",
  },
  {
    name: "Edgewood Monuments",
    url: "edgewoodmonuments.com",
    href: "/sites/edgewood-monuments",
    category: "Memorial",
    desc: "Family-owned since 1975. Custom granite headstones, in-house engraving, and 5 showroom locations across the West Coast.",
    image: "/sites/edgewood-monuments/hero.png",
    logo: "/sites/edgewood-monuments/logo.svg",
  },
  {
    name: "Varney Family Law",
    url: "varneyfamilylaw.com",
    href: "/sites/varney-family-law",
    category: "Law Firm",
    desc: "Mesa AZ family law attorney. Divorce, custody, grandparent rights, and juvenile cases. 30+ years combined legal and social work experience.",
    image: "/sites/varney-family-law/hero.jpg",
    logo: "/sites/varney-family-law/logo.png",
  },
  {
    name: "FAB Quantum Harmony",
    url: "fabquantumharmony.com",
    href: "/sites/fab-quantum-harmony",
    category: "Wellness",
    desc: "Quantum healing and wellness practice in Phoenix. Virtual and in-home sessions with founder Frances Archuleta-Bess.",
    image: "/sites/fab-quantum-harmony/hero.jpg",
    logo: "/sites/fab-quantum-harmony/logo.jpeg",
  },
  {
    name: "School Systems Alliance",
    url: "ssak12.com",
    href: "/sites/ssa-k12",
    category: "Education",
    desc: "Executive coaching, search, and leadership development for K-12 education leaders. Superintendent and cabinet-level consulting.",
    image: "/sites/ssa-k12/hero-bg.jpg",
    logo: "/sites/ssa-k12/logo.jpg",
  },
  {
    name: "Big Door Realty",
    url: "bigdoorrealty.com",
    href: "/sites/big-door-realty",
    category: "Real Estate",
    desc: "Tempe AZ real estate brokerage. Home search, flat fee listings, buyer representation, and investment advisory.",
    image: "/sites/big-door-realty/hero.jpg",
    logo: "/sites/big-door-realty/logo.png",
  },
  {
    name: "Palace Auto Detail",
    url: "palaceautodetail.com",
    href: "/sites/palace-auto-detail",
    category: "Auto Detail",
    desc: "Premium auto detailing in Tempe. Ceramic coating, paint correction, and full interior detail. Luxury vehicles a specialty.",
    image: "/sites/palace-auto-detail/hero-amg.jpg",
    logo: "/sites/palace-auto-detail/logo.png",
  },
  {
    name: "Vitesse Worldwide",
    url: "vitesseworldwide.com",
    href: "/sites/vitesse-worldwide",
    category: "Logistics",
    desc: "Global transportation since 1987. Aircraft charter, ground transport, and executive protection across 111 countries.",
    image: "/sites/vitesse-worldwide/charter-quote.jpg",
    logo: "/sites/vitesse-worldwide/logo-white.png",
  },
  {
    name: "ServPro Phoenix",
    url: "servprophoenix.com",
    href: "/sites/servpro-phoenix",
    category: "Restoration",
    desc: "24/7 emergency restoration. Water damage, fire damage, mold remediation, and commercial services across the Phoenix metro.",
    image: "/sites/servpro-phoenix/team-action.jpg",
  },
  {
    name: "MBA Real Estate",
    url: "mba-re.com",
    href: "/sites/mba-real-estate",
    category: "Property Mgmt",
    desc: "Tempe AZ property management since 2009. BBB A+ rated. Residential and commercial management with 30+ years combined experience.",
    image: "/sites/mba-real-estate/hero.jpg",
  },
  {
    name: "CMP Holdings",
    url: "cmpholdings.net",
    href: "/sites/cmp-holdings",
    category: "Holdings",
    desc: "Diversified holding company with divisions in real estate, technology, infrastructure, and professional services.",
  },
  {
    name: "MRI Software",
    url: "mrisoftware.com",
    href: "/sites/mri-software",
    category: "Enterprise SaaS",
    desc: "Real estate software for innovators. 45,000+ clients across 170+ countries. Property management, accounting, and investment platforms.",
    logo: "/sites/mri-software/logo-icon.png",
  },
  {
    name: "Harbor Counseling",
    url: "theharborcounseling.com",
    href: "/sites/harbor-counseling",
    category: "Therapy",
    desc: "Trauma-focused therapy practice. 3 clinicians specializing in anxiety, depression, PTSD, and relationship issues. Telehealth available.",
    image: "/sites/harbor-counseling/hero.jpg",
    logo: "/sites/harbor-counseling/logo.jpg",
  },
  {
    name: "Anderson's Nutrition",
    url: "andersonsnutrition.com",
    href: "/sites/andersons-nutrition",
    category: "Health",
    desc: "Dietitian nutritionist with 6 locations across Arizona and Pennsylvania. Nutrition counseling, meal planning, and metabolic testing.",
    image: "/sites/andersons-nutrition/hero.png",
    logo: "/sites/andersons-nutrition/logo.png",
  },
  {
    name: "Western Cleaning Solutions",
    url: "westerncleaningsolutions.com",
    href: "/sites/western-cleaning-solutions",
    category: "Cleaning",
    desc: "Commercial cleaning in Tempe AZ. BBB A+ rated, Green Business Bureau certified. Office, carpet, and post-construction cleaning.",
    image: "/sites/western-cleaning-solutions/hero.jpg",
    logo: "/sites/western-cleaning-solutions/logo.png",
  },
  {
    name: "Koa Counseling & Consulting",
    url: "koacc.com",
    href: "/sites/koacc",
    category: "Therapy",
    desc: "Trauma-focused therapy in Tempe. Somatic Experiencing, EMDR, IFS, and ketamine-assisted therapy with 11+ years experience.",
    image: "/sites/koacc/hero.jpg",
    logo: "/sites/koacc/logo.png",
  },
  {
    name: "LCR Law Office",
    url: "lcrlawoffice.com",
    href: "/sites/lcr-law-office",
    category: "Law Firm",
    desc: "The Law Offices of La-Zondra C. Randolph. Orlando FL practice covering family law, criminal defense, personal injury, and business litigation.",
    image: "/sites/lcr-law-office/attorney.png",
    logo: "/sites/lcr-law-office/logo.png",
  },
  {
    name: "LeBaron Carroll",
    url: "lebaroncarroll.com",
    href: "/sites/lebaron-carroll",
    category: "Insurance",
    desc: "Rethink how you buy insurance. 20+ products across business, personal, and employee benefits. 3 offices in Arizona and Utah.",
    image: "/sites/lebaron-carroll/poster-image.png",
    logo: "/sites/lebaron-carroll/logo-white.png",
  },
  {
    name: "Great Bell Inc",
    url: "greatbellinc.com",
    href: "/sites/great-bell-inc",
    category: "IT Services",
    desc: "Enterprise IT consulting and staffing. Data migration, system integration, and PMaaS for Fortune 100 clients. Global delivery model.",
  },
  {
    name: "East Valley Mediator",
    url: "eastvalleymediator.com",
    href: "/sites/east-valley-mediator",
    category: "Mediation",
    desc: "PK Jordan — 30+ years negotiation experience. Divorce, business disputes, real estate, and education advocacy mediation in Gilbert AZ.",
    image: "/sites/east-valley-mediator/pk-jordan-headshot.jpg",
  },
  {
    name: "The Marshall Law Firm",
    url: "themarshalllawfirmpllc.com",
    href: "/sites/marshall-law-firm",
    category: "Law Firm",
    desc: "Houston TX law firm. Family law, criminal defense, personal injury, and business litigation. Founded by Desir\u00e9e Flye Marshall.",
    image: "/sites/marshall-law-firm/about.jpg",
    logo: "/sites/marshall-law-firm/logo.jpg",
  },
  {
    name: "The Peterson Law Firm",
    url: "thepetersonlawfirm.com",
    href: "/sites/peterson-law-firm",
    category: "Law Firm",
    desc: "Tempe AZ family law and bankruptcy. 144+ Google reviews, 4.7 stars. Divorce, custody, Chapter 7 and Chapter 13 filings.",
    image: "/sites/peterson-law-firm/hero-bg.jpg",
    logo: "/sites/peterson-law-firm/logo.png",
  },
  {
    name: "Arizona Law Group",
    url: "arizonalawgroup.com",
    href: "/sites/arizona-law-group",
    category: "Law Firm",
    desc: "Family law, criminal defense, and personal injury. 12 attorneys, 10 Phoenix metro offices, 400+ reviews at 4.8 stars.",
    image: "/sites/arizona-law-group/hero.jpg",
  },
];

const services = [
  {
    icon: Paintbrush,
    title: "Web Design",
    desc: "Custom-built sites that look stunning and load instantly. No templates, no page builders — clean, hand-written code that sets you apart.",
    color: "text-qyellow",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    desc: "Stuck with an outdated site? We rebuild it from the ground up with modern tech, better UX, and a design that actually converts visitors.",
    color: "text-qyellow",
  },
  {
    icon: Server,
    title: "Managed Hosting",
    desc: "SSL, daily backups, DDoS protection, and uptime monitoring. We handle the infrastructure so you don't have to think about it.",
    color: "text-qyellow",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce",
    desc: "Online stores that convert. Product catalogs, payment processing, and inventory management — built to sell.",
    color: "text-qyellow",
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    desc: "Network, systems, cloud, and AI consulting. We help you plan, build, and optimize your technology infrastructure.",
    color: "text-qyellow",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "We start with a quick conversation to understand your goals, your audience, and what you need. No drawn-out meetings — just a focused chat that gets us moving.",
    icon: Users,
  },
  {
    step: "02",
    title: "Design & Build",
    desc: "We design and code your site from scratch using modern frameworks. You see progress early and often. A reasonable round of revisions is included.",
    icon: Paintbrush,
  },
  {
    step: "03",
    title: "Review & Launch",
    desc: "We iterate until you love it. Then we deploy, set up analytics, and make sure everything is running perfectly before we hand it off.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Ongoing Support",
    desc: "We don't disappear after launch. Hosting, updates, and support plans keep your site fast, secure, and always up to date.",
    icon: Zap,
  },
];

const stats = [
  { value: 20, suffix: "+", prefix: "", label: "Years in Business" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 1, prefix: "<", suffix: "s", label: "Avg Load Time" },
  { value: 100, suffix: "%", label: "Code Ownership" },
];

const faqs = [
  {
    q: "How long does a website take to build?",
    a: "Most projects take 1-4 weeks depending on complexity. A simple 3-5 page site can be done in a week. Larger projects with ecommerce or custom features take 2-4 weeks.",
  },
  {
    q: "Do I own the code when it's done?",
    a: "Yes, 100%. When your site is finished, we deliver the complete source code. It's yours — no lock-in, no proprietary platforms, no monthly fees unless you want hosting and support.",
  },
  {
    q: "What if I already have a website?",
    a: "We handle the full migration. We'll redesign and rebuild your site, move your content, and set up redirects so you don't lose any search engine rankings.",
  },
  {
    q: "Do you work with businesses outside your area?",
    a: "We work with businesses nationwide. Everything is done remotely — from the initial call to final delivery. Location is never a barrier.",
  },
  {
    q: "What technologies do you use?",
    a: "We use modern frameworks like Next.js, React, and Tailwind CSS. Your site will be fast, secure, and built with the same tools used by top tech companies.",
  },
  {
    q: "Can you help with SEO?",
    a: "Every site we build includes foundational SEO — proper meta tags, fast load times, mobile responsiveness, and clean code structure. We also offer ongoing SEO optimization as part of our Growth Plan.",
  },
];

const industries = [
  "Restaurants",
  "Real Estate",
  "Healthcare",
  "Construction",
  "E-Commerce",
  "Non-Profits",
  "Local Services",
  "Professional Services",
];

/* ── Hero Card Data ── */

const heroCards = [
  {
    icon: Code2,
    title: "Hand-crafted code",
    desc: "Every site built from scratch. No templates, no shortcuts.",
    stat: "0 templates used",
  },
  {
    icon: Rocket,
    title: "Lightning performance",
    desc: "Sub-second load times. Your site scores 95+ on Google PageSpeed.",
    stat: "95+ PageSpeed",
  },
  {
    icon: Shield,
    title: "You own everything",
    desc: "Full source code delivered. No lock-in, no proprietary platforms.",
    stat: "100% yours",
  },
  {
    icon: Search,
    title: "Built for SEO",
    desc: "Semantic HTML, structured data, and optimized meta — search engines love it.",
    stat: "Page 1 ready",
  },
  {
    icon: Smartphone,
    title: "Mobile first",
    desc: "Designed for phones first, then scaled up. 60%+ of traffic is mobile.",
    stat: "Every breakpoint",
  },
];

/* ── Hero Card Stack ── */

function HeroCardStack() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % heroCards.length);
  }, []);

  // Auto-rotate every 4s
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full aspect-[4/5] cursor-pointer" onClick={next}>
      {heroCards.map((card, i) => {
        const offset = (i - activeIndex + heroCards.length) % heroCards.length;
        const isActive = offset === 0;
        const isBehind1 = offset === 1 || offset === heroCards.length - 1;
        const isBehind2 = offset === 2 || offset === heroCards.length - 2;

        if (offset > 2 && offset < heroCards.length - 2) return null;

        return (
          <motion.div
            key={card.title}
            animate={{
              x: isActive ? 32 : isBehind1 ? 16 : 0,
              y: isActive ? 0 : isBehind1 ? 32 : 64,
              scale: isActive ? 1 : isBehind1 ? 0.95 : 0.9,
              opacity: isActive ? 1 : isBehind1 ? 0.6 : 0.3,
              zIndex: isActive ? 30 : isBehind1 ? 20 : 10,
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "absolute top-0 right-0 w-[85%] h-[75%] rounded-2xl border backdrop-blur-md p-8 flex flex-col justify-between",
              isActive
                ? "bg-gradient-to-br from-qwhite/8 to-qwhite/[0.02] border-qwhite/15"
                : "bg-qyellow/5 border-qwhite/8"
            )}
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-qyellow/20 flex items-center justify-center mb-6">
                <card.icon className="h-5 w-5 text-qyellow" />
              </div>
              <p className="font-serif text-qwhite/90 text-lg font-medium mb-2">{card.title}</p>
              <p className="text-qwhite/40 text-sm leading-relaxed">{card.desc}</p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs font-mono text-qyellow/70 tracking-wide uppercase">{card.stat}</span>
              <div className="flex gap-1.5">
                {heroCards.map((_, j) => (
                  <div
                    key={j}
                    className={cn(
                      "w-1.5 h-1.5 rounded-full transition-all duration-300",
                      j === activeIndex ? "bg-qyellow w-4" : "bg-qwhite/20"
                    )}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
      {/* Floating accent orb */}
      <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-qyellow/15 blur-xl animate-pulse-glow" />
    </div>
  );
}

/* ── Counter Component ── */

function AnimatedCounter({ value, suffix, prefix }: { value: number; suffix: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const steps = duration / 16;
    const increment = value / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

/* ── FAQ Item ── */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      className="border-b border-qwhite/10 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-medium text-qwhite group-hover:text-qwhite/80 transition-colors pr-4">
          {q}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-qwhite/40 shrink-0 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-muted-foreground text-sm leading-relaxed">
          {a}
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ── Page ── */

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-qblack-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(5,98,234,0.12)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(9,170,231,0.08)_0%,_transparent_40%)]" />
        <div className="absolute inset-0 bg-grid-pattern-light" />

        {/* EGO watermark */}
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block">
          <span className="font-serif text-[22rem] xl:text-[28rem] font-bold text-qwhite/[0.02] leading-none tracking-tighter">
            EGO
          </span>
        </div>

        {/* Vertical accent line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-6 md:left-12 lg:left-24 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-qyellow/40 to-transparent origin-top hidden md:block"
        />

        {/* Floating accent shapes */}
        <div className="absolute top-1/4 right-[20%] w-48 h-48 rounded-full bg-qyellow/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 left-[40%] w-64 h-64 rounded-full bg-qyellow/5 blur-3xl animate-float-reverse" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="lg:col-span-7"
            >
              <motion.h1
                variants={fadeUp}
                className="font-serif font-bold text-qwhite leading-[1.02] mb-8"
              >
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Your website is</span>
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-qyellow mt-1">losing you</span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-1">customers.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-qwhite/55 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
              >
                We build modern, lightning-fast websites that actually convert.
                No templates. No page builders. Just clean code that works.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#work"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-qyellow hover:bg-qyellow-light text-qblack-dark font-semibold text-base px-8 shadow-lg shadow-qyellow/20 hover:shadow-xl hover:shadow-qyellow/30 transition-all duration-300"
                  )}
                >
                  See Our Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center h-9 px-8 text-base font-medium rounded-lg border border-qwhite/30 text-qwhite hover:bg-qwhite/10 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 text-qwhite/30 text-sm"
              >
                <div className="flex items-center gap-2">
                  <Monitor className="h-4 w-4" />
                  <span>Custom Code</span>
                </div>
                <span className="hidden sm:inline text-qwhite/15">|</span>
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  <span>Mobile First</span>
                </div>
                <span className="hidden sm:inline text-qwhite/15">|</span>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  <span>Lightning Fast</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right column — interactive card stack */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotate: 2 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative">
                <HeroCardStack />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6 text-qwhite/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="py-16 bg-qblack relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleUp}
                className="text-center"
              >
                <div className="font-serif text-4xl md:text-5xl font-bold text-qyellow mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <p className="text-qwhite/50 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-24 bg-qblack relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-qwhite/[0.02] to-transparent" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-16"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-qyellow" />
              <p className="text-qyellow text-sm uppercase tracking-[0.25em] font-medium">
                What We Do
              </p>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl font-bold text-qwhite max-w-xl"
            >
              Everything your business needs online.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-qwhite/50 mt-4 max-w-2xl"
            >
              From initial design to ongoing support, we handle every aspect of
              your digital presence so you can focus on running your business.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className={cn(
                  i === 0 && "md:col-span-2 lg:col-span-2"
                )}
              >
                <div className={cn(
                  "group relative h-full rounded-xl border transition-all duration-500 overflow-hidden",
                  i === 0
                    ? "bg-qblack-dark text-qwhite border-qblack-dark hover:border-qblack-light"
                    : "bg-qblack-light border-qwhite/10 hover:border-qwhite/20 hover:shadow-lg hover:shadow-qwhite/5"
                )}>
                  {/* Large background number */}
                  <span className={cn(
                    "absolute -right-4 -top-6 font-serif text-[8rem] font-bold leading-none select-none pointer-events-none transition-opacity duration-500",
                    i === 0 ? "text-qwhite/[0.03]" : "text-qwhite/[0.03] group-hover:text-qwhite/[0.06]"
                  )}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Accent bar */}
                  <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-qyellow transition-all duration-500 rounded-full" />
                  <div className={cn("relative p-8", i === 0 && "md:p-10")}>
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300",
                      i === 0
                        ? "bg-qyellow/15 group-hover:bg-qyellow/20"
                        : "bg-qwhite/5 group-hover:bg-qwhite/10"
                    )}>
                      <service.icon className={cn("h-6 w-6", i === 0 ? "text-qyellow" : "text-qwhite")} />
                    </div>
                    <h3 className={cn(
                      "font-serif text-xl font-semibold mb-3",
                      i === 0 ? "text-qwhite md:text-2xl" : "text-qwhite"
                    )}>
                      {service.title}
                    </h3>
                    <p className={cn(
                      "text-sm leading-relaxed",
                      i === 0 ? "text-qwhite/60 md:max-w-md" : "text-qwhite/50"
                    )}>
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-12"
          >
            <Link
              href="/pricing"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-qwhite/20 text-qwhite hover:bg-qwhite/5"
              )}
            >
              View Pricing <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Industries Marquee ── */}
      <section className="py-8 bg-qblack-light border-y border-qwhite/10 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...industries, ...industries, ...industries, ...industries].map((ind, i) => (
            <span
              key={i}
              className="mx-8 text-sm uppercase tracking-[0.2em] text-qwhite/20 font-medium"
            >
              {ind}
            </span>
          ))}
        </div>
      </section>

      {/* ── Portfolio ── */}
      <section id="work" className="py-24 bg-qblack-dark text-qwhite relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-qyellow/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4 justify-center">
              <div className="h-px w-12 bg-qyellow/50" />
              <p className="text-qyellow text-sm uppercase tracking-[0.25em] font-medium">
                Our Work
              </p>
              <div className="h-px w-12 bg-qyellow/50" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl font-bold"
            >
              Sites we&apos;ve built.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-qwhite/50 mt-4 max-w-xl mx-auto"
            >
              Real projects for real businesses. Every site is hand-coded,
              mobile-responsive, and built to perform.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {portfolio.map((project) => (
              <motion.div key={project.url} variants={fadeUp}>
                <a
                  href={(project as { href?: string }).href ?? `https://${project.url}`}
                  {...((project as { href?: string }).href ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  className="block group"
                >
                  <Card className="card-shine group h-full border-qwhite/10 hover:border-qyellow/30 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-qblack/50 overflow-hidden">
                    <div
                      className="h-40 rounded-t-lg flex items-center justify-center border-b border-qwhite/10 relative overflow-hidden"
                      style={(project as { image?: string }).image ? {
                        backgroundImage: `url(${(project as { image?: string }).image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      } : {
                        background: "linear-gradient(135deg, rgba(5,98,234,0.08), rgba(9,170,231,0.12))",
                      }}
                    >
                      {(project as { image?: string }).image && (
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                      )}
                      {(project as { logo?: string }).logo ? (
                        <img
                          src={(project as { logo?: string }).logo}
                          alt={`${project.name} logo`}
                          className="relative z-10 max-h-16 max-w-[140px] object-contain drop-shadow-lg"
                          style={{ filter: (project as { image?: string }).image ? "brightness(1.1)" : "none" }}
                        />
                      ) : (
                        <div className="relative z-10 flex flex-col items-center gap-2">
                          <Globe className="h-8 w-8 text-white/70 group-hover:text-white/90 transition-colors drop-shadow" />
                          <span className="text-xs font-medium text-white/70 drop-shadow">{project.url}</span>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs uppercase tracking-wider text-qyellow font-medium bg-qyellow/10 px-2 py-1 rounded">
                          {project.category}
                        </span>
                        <ExternalLink className="h-3.5 w-3.5 text-qwhite/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-qwhite mb-2 group-hover:text-qyellow transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-qwhite/50 text-sm leading-relaxed">
                        {project.desc}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Process ── */}
      <section id="process" className="py-24 bg-qblack relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4 justify-center">
              <div className="h-px w-12 bg-qyellow/50" />
              <p className="text-qyellow text-sm uppercase tracking-[0.25em] font-medium">
                How It Works
              </p>
              <div className="h-px w-12 bg-qyellow/50" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl font-bold text-qwhite"
            >
              Simple. Fast. No runaround.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-qwhite/50 mt-4 max-w-xl mx-auto"
            >
              Tell us what you need and we build it. Four steps from idea to live site.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {processSteps.map((step, i) => (
              <motion.div key={step.step} variants={fadeUp}>
                <div className="group relative h-full p-8 rounded-xl bg-qblack-light border border-qwhite/10 hover:border-qyellow/30 hover:shadow-lg hover:shadow-qwhite/5 transition-all duration-500">
                  <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-qyellow transition-all duration-500 rounded-full" />
                  <span className="absolute -right-2 -top-4 font-serif text-[6rem] font-bold text-qwhite/[0.03] leading-none select-none pointer-events-none">
                    {step.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-qyellow/10 flex items-center justify-center mb-5 group-hover:bg-qyellow/20 transition-colors">
                    <step.icon className="h-6 w-6 text-qwhite" />
                  </div>
                  <span className="text-qyellow font-mono text-xs font-bold tracking-wider">
                    STEP {step.step}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-qwhite mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-qwhite/50 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-qblack-light">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4 justify-center">
              <div className="h-px w-12 bg-qyellow/50" />
              <p className="text-qyellow text-sm uppercase tracking-[0.25em] font-medium">
                FAQ
              </p>
              <div className="h-px w-12 bg-qyellow/50" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold text-qwhite"
            >
              Common questions.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="bg-qblack-dark/50 rounded-xl border border-qwhite/10 divide-y-0 px-6"
          >
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 bg-qblack-dark text-qwhite relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-qyellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-qyellow/5 rounded-full blur-3xl" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to <span className="text-qyellow">modernize</span>?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-qwhite/55 text-lg leading-relaxed mb-8 max-w-xl mx-auto"
            >
              Your competitors already have modern websites. Let&apos;s make sure
              yours is better. No commitment required — just a conversation.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-qyellow hover:bg-qyellow-light text-qblack-dark font-semibold text-base px-8 shadow-lg shadow-qyellow/20"
                )}
              >
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center h-9 px-8 text-base font-medium rounded-lg border border-qwhite/30 text-qwhite hover:bg-qwhite/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

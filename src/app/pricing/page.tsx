"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Shield,
  Clock,
  Code2,
  Star,
  ChevronDown,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "@/lib/animations";

/* ── Data ── */

const packages = [
  {
    name: "Starter",
    price: "$1,650",
    tagline: "3-5 page custom website",
    turnaround: "1 week",
    features: [
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form",
      "Full source code delivered",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$2,750",
    tagline: "5-10 page site with CMS & SEO",
    turnaround: "2 weeks",
    features: [
      "Custom design from scratch",
      "Content management system",
      "Content migration",
      "SEO optimization",
      "Analytics integration",
      "Full source code delivered",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$5,500",
    tagline: "10+ pages, ecommerce & integrations",
    turnaround: "4 weeks",
    features: [
      "Ecommerce integration",
      "Third-party integrations",
      "Brand strategy & consultation",
      "Advanced animations",
      "Performance optimization",
      "Full source code delivered",
    ],
    popular: false,
  },
];

const monthlyPlans = [
  {
    name: "Essential Hosting",
    price: "$49",
    tagline: "Managed hosting with enterprise-grade security",
    features: [
      "SSL/HTTPS (automatic)",
      "DDoS protection",
      "Web application firewall",
      "Global edge network",
      "Automated deployments",
      "Daily backups via Git",
      "Uptime monitoring",
    ],
  },
  {
    name: "Care Plan",
    price: "$99",
    tagline: "Hosting + edits + monthly reporting",
    popular: true,
    features: [
      "Everything in Essential",
      "30 min content edits per month",
      "Web analytics dashboard",
      "Monthly performance report",
      "Security updates & patches",
      "Priority email support",
    ],
  },
  {
    name: "Growth Plan",
    price: "$199",
    tagline: "Full support + dev time + speed insights",
    features: [
      "Everything in Care",
      "1 hr dev/design time per month",
      "Speed Insights monitoring",
      "Performance observability",
      "Quarterly strategy call",
      "48-hour priority response",
    ],
  },
];

/* ── Expandable Section ── */

function Expandable({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm text-qyellow hover:text-qyellow-light transition-colors"
      >
        <span>{open ? "Hide" : label}</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")} />
      </button>
      {open && <div className="mt-3">{children}</div>}
    </div>
  );
}

/* ── Page ── */

export default function PricingPage() {
  return (
    <>
      {/* Hero — compact */}
      <section className="pt-28 pb-10 bg-qblack-dark text-qwhite relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            >
              Pricing
            </motion.h1>
            <motion.p variants={fadeUp} className="text-qwhite/60 text-base max-w-lg mx-auto">
              Transparent, one-time pricing. You own the code. No lock-in.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Guarantees — inline row */}
      <section className="py-6 bg-qblack border-y border-qwhite/10">
        <div className="max-w-2xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-qwhite/70">
          <span className="flex items-center gap-1.5"><Code2 className="h-4 w-4 text-qyellow" /> You own the code</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-qyellow" /> On-time or hosting free</span>
          <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-qyellow" /> 30-day free support</span>
        </div>
      </section>

      {/* Design Packages — inline list */}
      <section className="py-12 bg-qblack">
        <div className="max-w-2xl mx-auto px-6 space-y-4">
          <h2 className="font-serif text-2xl font-bold text-qwhite mb-6">Web Design</h2>

          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={cn(
                "rounded-xl border p-5 transition-all",
                pkg.popular
                  ? "border-qyellow/40 bg-qblack-light ring-1 ring-qyellow/20"
                  : "border-qwhite/10 bg-qblack-light/50"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-qwhite text-lg">{pkg.name}</h3>
                    {pkg.popular && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-qyellow bg-qyellow/10 px-2 py-0.5 rounded-full">
                        <Star className="h-3 w-3" /> Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-qwhite/50 mt-1">{pkg.tagline}</p>
                  <p className="text-xs text-qwhite/30 mt-0.5">{pkg.turnaround} turnaround</p>
                </div>
                <span className="text-2xl font-bold text-qwhite shrink-0">{pkg.price}</span>
              </div>

              <div className="mt-3">
                <Expandable label="See what's included">
                  <ul className="space-y-2">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-qwhite/70">
                        <Check className="h-4 w-4 text-qyellow mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </Expandable>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Monthly Plans — inline list */}
      <section className="py-12 bg-qblack-dark border-t border-qwhite/10">
        <div className="max-w-2xl mx-auto px-6 space-y-4">
          <div className="mb-6">
            <h2 className="font-serif text-2xl font-bold text-qwhite">Monthly Plans</h2>
            <p className="text-sm text-qwhite/40 mt-1">Optional. Cancel anytime.</p>
          </div>

          {monthlyPlans.map((plan) => (
            <motion.div
              key={plan.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={cn(
                "rounded-xl border p-5 transition-all",
                (plan as { popular?: boolean }).popular
                  ? "border-qyellow/40 bg-qblack-light ring-1 ring-qyellow/20"
                  : "border-qwhite/10 bg-qblack-light/50"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-qwhite text-lg">{plan.name}</h3>
                    {(plan as { popular?: boolean }).popular && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-qyellow bg-qyellow/10 px-2 py-0.5 rounded-full">
                        <Star className="h-3 w-3" /> Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-qwhite/50 mt-1">{plan.tagline}</p>
                </div>
                <span className="text-2xl font-bold text-qwhite shrink-0">
                  {plan.price}<span className="text-sm font-normal text-qwhite/40">/mo</span>
                </span>
              </div>

              <div className="mt-3">
                <Expandable label="See what's included">
                  <ul className="space-y-2">
                    {(plan as { features?: string[] }).features?.map((f: string) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-qwhite/70">
                        <Check className="h-4 w-4 text-qyellow mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </Expandable>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* CTA */}
      <section className="py-16 bg-qblack-dark border-t border-qwhite/10">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-serif text-2xl sm:text-3xl font-bold text-qwhite mb-3">
              Not sure? Let&apos;s talk.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-qwhite/50 text-sm mb-6 max-w-md mx-auto">
              Every project is different. We&apos;ll give you an honest assessment
              and a custom quote — no commitment.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-qyellow hover:bg-qyellow-light text-qblack-dark font-semibold px-8"
                )}
              >
                Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

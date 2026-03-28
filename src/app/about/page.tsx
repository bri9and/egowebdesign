"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Heart,
  Award,
  Wrench,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { fadeUp, scaleUp, stagger } from "@/lib/animations";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Heart,
    title: "Craft Over Volume",
    desc: "We take on a limited number of projects so every client gets full attention and the best work.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    desc: "No bloated templates or page builders. Every site is written from scratch with modern, maintainable code.",
  },
  {
    icon: Wrench,
    title: "Honest Work",
    desc: "We tell you what you need, not what makes us the most money. If a simple site is right for you, that's what we'll build.",
  },
  {
    icon: Award,
    title: "Full Ownership",
    desc: "When it's done, it's yours. No lock-in, no proprietary platforms, no monthly surprises.",
  },
];

const techStack = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "UI Library" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Vercel", category: "Hosting" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-qblack-dark text-qwhite relative overflow-hidden grain-overlay carbon-fiber">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-[2px] bg-qyellow/10 blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="section-label text-qyellow/60 mb-3"
            >
              About Us
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl md:text-6xl font-bold mb-6"
            >
              Real code.
              <br />
              Real results.
              <br />
              <span className="text-qyellow">Zero BS.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-qwhite/60 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              KPT Designs exists because most web agencies overcharge and underdeliver.
              We build modern, hand-coded websites that actually convert —
              and we do it at a price that makes sense.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-qblack relative carbon-weave">
        <div className="absolute inset-0 bg-dot-pattern" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <div className="max-w-2xl">
              <motion.p
                variants={fadeUp}
                className="section-label text-qyellow/60 mb-3"
              >
                The Origin
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-serif text-3xl md:text-4xl font-bold text-qwhite mb-6"
              >
                Built different. On purpose.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-qwhite/60 leading-relaxed mb-4"
              >
                We&apos;ve been building websites since 2005. Hundreds of clients,
                two decades of experience, and one thing hasn&apos;t changed — most
                agencies still overcharge for underwhelming work.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-qwhite/60 leading-relaxed mb-4"
              >
                KPT Designs exists to do it differently. We write real code backed by
                state-of-the-art AI tools — the same modern frameworks powering
                billion-dollar tech companies — engineered for speed, SEO, and
                conversion. No WordPress. No page builders. No bloat.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-qwhite/60 leading-relaxed"
              >
                Twenty years in, the approach is the same: the person who plans your
                site is the same person who builds it. No account managers. No juniors
                learning on your dime. Just sharp work, delivered fast.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-qblack-light carbon-fiber">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="section-label text-qyellow/60 mb-3"
            >
              // VALUES
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold text-qwhite"
            >
              Our values drive every project.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp}>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-[2px] bg-qwhite/10 flex items-center justify-center shrink-0">
                    <v.icon className="h-6 w-6 text-qwhite" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-qwhite mb-2">
                      {v.title}
                    </h3>
                    <p className="text-qwhite/60 text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-qblack relative carbon-weave">
        <div className="absolute inset-0 bg-dot-pattern" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="section-label text-qyellow/60 mb-3"
            >
              // TECHNOLOGY
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold text-qwhite"
            >
              Built with the best tools.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-qwhite/60 mt-4 max-w-xl mx-auto"
            >
              We use enterprise-grade technology to build websites.
              The result? Sites that are faster, more secure, and more reliable
              than anything built with WordPress or Squarespace.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={scaleUp}
                className="text-center py-6 px-4 rounded-[2px] bg-qblack-light border border-qwhite/10 hover:border-qwhite/20 hover:shadow-md hover:shadow-black/20 transition-all duration-300"
              >
                <p className="font-semibold text-qwhite">{tech.name}</p>
                <p className="text-xs text-qwhite/50 mt-1 font-mono">
                  {tech.category}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-qblack-light carbon-fiber">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="section-label text-qyellow/60 mb-3"
            >
              // COMPARISON
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold text-qwhite"
            >
              KPT vs. the alternatives.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <div className="overflow-hidden rounded-[2px] border border-qwhite/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-qblack-dark text-qwhite">
                    <th className="text-left p-4 font-medium"></th>
                    <th className="p-4 font-semibold text-qyellow">KPT</th>
                    <th className="p-4 font-medium text-qwhite/60">Big Agency</th>
                    <th className="p-4 font-medium text-qwhite/60">DIY Builder</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Custom code", qwd: true, agency: true, diy: false },
                    { feature: "You own the code", qwd: true, agency: false, diy: false },
                    { feature: "Direct access to builder", qwd: true, agency: false, diy: false },
                    { feature: "Modern tech stack", qwd: true, agency: true, diy: false },
                    { feature: "Fast load times", qwd: true, agency: false, diy: false },
                    { feature: "No monthly lock-in", qwd: true, agency: false, diy: false },
                    { feature: "Nationwide service", qwd: true, agency: true, diy: true },
                    { feature: "Under $3,000", qwd: true, agency: false, diy: true },
                  ].map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i % 2 === 0 ? "bg-qblack-light/50" : "bg-qblack-light"}
                    >
                      <td className="p-4 font-medium text-qwhite">
                        {row.feature}
                      </td>
                      <td className="p-4 text-center">
                        {row.qwd ? (
                          <span className="text-qyellow font-bold">&#10003;</span>
                        ) : (
                          <span className="text-qwhite/30">&#8212;</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.agency ? (
                          <span className="text-qwhite/50">&#10003;</span>
                        ) : (
                          <span className="text-qwhite/30">&#8212;</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.diy ? (
                          <span className="text-qwhite/50">&#10003;</span>
                        ) : (
                          <span className="text-qwhite/30">&#8212;</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-qblack border-t border-qwhite/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-qwhite/40 font-mono">
            <div className="flex items-center gap-6">
              <span className="uppercase tracking-[0.2em] text-qwhite/60">KPT Designs</span>
              <span className="hidden sm:block w-px h-4 bg-qwhite/10" />
              <span>Nationwide — Remote First</span>
            </div>
            <div>
              <span className="text-qwhite/60">Corey</span>
              <span className="mx-2 text-qwhite/20">·</span>
              <span>CEO</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-qblack-dark text-qwhite relative overflow-hidden grain-overlay carbon-weave">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-qyellow/10 rounded-[2px] blur-3xl" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to work together?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-qwhite/60 text-lg leading-relaxed mb-8"
            >
              Whether you need a brand new website, a redesign, or ecommerce,
              we&apos;d love to hear from you. Every conversation starts with
              understanding your goals.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-qyellow hover:bg-qyellow-light text-qblack-dark font-semibold text-base px-8 shadow-lg shadow-qyellow/20 rounded-[2px] button-shine"
                )}
              >
                Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center h-9 px-8 text-base font-medium rounded-[2px] border border-qwhite/30 text-qwhite hover:bg-qwhite/10 transition-all duration-300 button-shine"
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

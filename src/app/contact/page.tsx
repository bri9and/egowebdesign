"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, scaleUp, stagger } from "@/lib/animations";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@kptdesigns.com",
    href: "mailto:hello@kptdesigns.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nationwide — Remote First",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

const nextSteps = [
  {
    step: "1",
    title: "We'll review your message",
    desc: "Within 24 hours, our team will reach out to discuss your project.",
  },
  {
    step: "2",
    title: "Free discovery call",
    desc: "A quick 15-minute call to understand your goals and timeline.",
  },
  {
    step: "3",
    title: "Custom proposal",
    desc: "You'll receive a detailed proposal with pricing and timeline.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      business: formData.get("business") as string,
      website: formData.get("website") as string,
      services: formData.getAll("services") as string[],
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Handle error silently for now
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-qblack-dark text-qwhite relative overflow-hidden grain-overlay carbon-fiber">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="absolute bottom-0 left-[10%] w-64 h-64 rounded-[2px] bg-qyellow/10 blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="section-label text-qyellow/60 mb-3"
            >
              // CONTACT
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl md:text-6xl font-bold mb-6"
            >
              Let&apos;s build
              <br />
              <span className="text-qyellow">something great.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-qwhite/60 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Tell us about your business and what you&apos;re looking for.
              We&apos;ll get back to you within 24 hours with honest advice —
              no sales pitch, no pressure.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-8 bg-qblack border-t border-qwhite/10">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            {contactInfo.map((info) => (
              <motion.div
                key={info.label}
                variants={fadeUp}
                className="flex items-center gap-3 text-qwhite"
              >
                <div className="w-8 h-8 rounded-[2px] bg-qwhite/10 flex items-center justify-center">
                  <info.icon className="h-4 w-4 text-qyellow" />
                </div>
                <div>
                  <p className="text-xs text-qwhite/40 font-mono">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm font-medium hover:text-qyellow transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-qblack relative carbon-weave">
        <div className="absolute inset-0 bg-dot-pattern" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Sidebar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <motion.h3
                  variants={fadeUp}
                  className="font-serif text-2xl font-bold text-qwhite mb-4"
                >
                  What happens next?
                </motion.h3>
                <motion.div variants={fadeUp} className="space-y-6">
                  {nextSteps.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="w-8 h-8 rounded-[2px] bg-qwhite/10 flex items-center justify-center shrink-0">
                        <span className="text-sm font-semibold text-qwhite">
                          {step.step}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium text-qwhite text-sm">
                          {step.title}
                        </h4>
                        <p className="text-muted-foreground text-xs mt-0.5">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div variants={fadeUp}>
                <Card className="border-qwhite/10 bg-qblack-light rounded-[2px]">
                  <CardContent className="p-6">
                    <MessageSquare className="h-5 w-5 text-qwhite mb-3" />
                    <p className="text-sm text-qwhite font-medium mb-1">
                      Prefer a quick chat?
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Send us an email at{" "}
                      <a
                        href="mailto:hello@kptdesigns.com"
                        className="text-qyellow hover:underline"
                      >
                        hello@kptdesigns.com
                      </a>{" "}
                      and we&apos;ll set up a call at a time that works for you.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="p-5 rounded-[2px] bg-qblack-light border border-qwhite/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-qwhite" />
                    <span className="text-sm font-medium text-qwhite">
                      Availability
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Monday - Friday, 9am - 6pm EST
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Weekend messages answered Monday morning
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-3"
            >
              {submitted ? (
                <Card className="border-qwhite/10 bg-qblack-light rounded-[2px]">
                  <CardContent className="p-12 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                      className="w-16 h-16 rounded-[2px] bg-qwhite/15 flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle2 className="h-8 w-8 text-qyellow" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="font-serif text-2xl font-bold text-qwhite mb-3">
                        Message sent!
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        Thanks for reaching out. We&apos;ll review your message and
                        get back to you within 24 hours.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        In the meantime, feel free to check out our{" "}
                        <a href="/pricing" className="text-qyellow hover:underline">
                          pricing
                        </a>
                        .
                      </p>
                    </motion.div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-qwhite/10 bg-qblack-light shadow-sm rounded-[2px]">
                  <CardContent className="p-8">
                    <h3 className="font-serif text-xl font-semibold text-qwhite mb-1">
                      Tell us about your project
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Fields marked with * are required.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            required
                            placeholder="Your name"
                            className="bg-qwhite/5"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="bg-qwhite/5"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            className="bg-qwhite/5"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="business">Business Name</Label>
                          <Input
                            id="business"
                            name="business"
                            placeholder="Your business"
                            className="bg-qwhite/5"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="website">
                          Current Website (if any)
                        </Label>
                        <Input
                          id="website"
                          name="website"
                          placeholder="www.example.com"
                          className="bg-qwhite/5"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Interested in</Label>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "New Website",
                            "Redesign",
                            "Ecommerce",
                            "Hosting & Support",
                            "IT Consulting",
                            "Brand & Logo",
                          ].map((service) => (
                            <label
                              key={service}
                              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] border border-qwhite/10 bg-qblack-light/50 hover:border-qwhite/20 cursor-pointer transition-colors text-sm text-qwhite/70 has-[:checked]:bg-qwhite/10 has-[:checked]:border-qwhite/20 has-[:checked]:text-qwhite"
                            >
                              <input
                                type="checkbox"
                                name="services"
                                value={service}
                                className="sr-only"
                              />
                              <span>{service}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">
                          Tell us about your project *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="What are you looking for? A new site, a redesign, ecommerce, something else?"
                          className="bg-qwhite/5"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-qyellow hover:bg-qyellow-light text-qblack-dark font-semibold shadow-md hover:shadow-lg transition-all rounded-[2px] button-shine"
                      >
                        {loading ? (
                          <>
                            <span className="animate-pulse">Sending...</span>
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        We respect your privacy. Your information is never shared
                        or sold.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import { useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Globe,
  Check,
  ArrowRight,
  Shield,
  Zap,
  Lock,
  Loader2,
  ShoppingCart,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "@/lib/animations";

interface DomainResult {
  domain: string;
  available: boolean;
  price: number;
  premium: boolean;
}

function DomainsContent() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<DomainResult[]>([]);
  const [suggestions, setSuggestions] = useState<DomainResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState("");
  const [checkingOut, setCheckingOut] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const cancelled = searchParams.get("cancelled");

  const handleCheckout = async (domain: string, price: number) => {
    setCheckingOut(domain);
    try {
      const res = await fetch("/api/domains/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain, wholesalePrice: price, years: 1 }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Checkout failed");
        setCheckingOut(null);
      }
    } catch {
      setError("Failed to start checkout");
      setCheckingOut(null);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;

    setLoading(true);
    setError("");
    setResults([]);
    setSuggestions([]);
    setSearched(true);

    try {
      const res = await fetch("/api/domains", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: q }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      setResults(data.results || []);
      setSuggestions(data.suggestions || []);
    } catch {
      setError("Failed to search. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const availableCount = results.length;

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-14 bg-qblack-dark text-qwhite relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-qyellow/8 blur-3xl" />
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-4">
              <Globe className="h-5 w-5 text-qyellow" />
              <span className="text-qyellow text-sm uppercase tracking-[0.2em] font-medium">
                Domain Search
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              Find your perfect domain
            </motion.h1>
            <motion.p variants={fadeUp} className="text-qwhite/60 text-base max-w-lg mx-auto mb-8">
              Search for available domains and register them instantly.
              Free WHOIS privacy included with every domain.
            </motion.p>

            {cancelled && (
              <motion.div
                variants={fadeUp}
                className="mb-4 px-4 py-3 rounded-lg bg-qyellow/5 border border-qyellow/20 text-sm text-qwhite/70"
              >
                Checkout cancelled. Your domain is still available — search again when you&apos;re ready.
              </motion.div>
            )}

            {/* Search bar */}
            <motion.form
              variants={fadeUp}
              onSubmit={handleSearch}
              className="relative max-w-xl mx-auto"
            >
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-qwhite/30" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="yourbusiness.com"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-qblack-light border border-qwhite/15 text-qwhite placeholder:text-qwhite/30 text-lg focus:outline-none focus:border-qyellow/50 focus:ring-1 focus:ring-qyellow/20 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading || !query.trim()}
                  className={cn(
                    "px-6 rounded-xl font-semibold text-base transition-all flex items-center gap-2 shrink-0",
                    "bg-qyellow hover:bg-qyellow-light text-qblack-dark",
                    "disabled:opacity-40 disabled:cursor-not-allowed"
                  )}
                >
                  {loading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>Search</>
                  )}
                </button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-qblack min-h-[40vh]">
        <div className="max-w-2xl mx-auto px-6">
          {/* Loading state */}
          {loading && (
            <div className="text-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-qyellow mx-auto mb-3" />
              <p className="text-qwhite/50 text-sm">Checking availability...</p>
            </div>
          )}

          {/* Error state */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-red-400 text-sm">{error}</p>
            </motion.div>
          )}

          {/* Results */}
          {!loading && searched && (results.length > 0 || suggestions.length > 0) && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              {/* Results header */}
              <motion.div variants={fadeUp} className="flex items-center justify-between mb-6">
                <p className="text-sm text-qwhite/50">
                  {availableCount > 0 ? (
                    <>
                      <span className="text-qyellow font-medium">{availableCount}</span> domain{availableCount !== 1 ? "s" : ""} available
                    </>
                  ) : (
                    "Not available — check out these alternatives"
                  )}
                </p>
                <button
                  onClick={() => { setResults([]); setSuggestions([]); setSearched(false); setQuery(""); inputRef.current?.focus(); }}
                  className="text-sm text-qwhite/40 hover:text-qwhite/70 transition-colors"
                >
                  New search
                </button>
              </motion.div>

              {/* Available domain cards */}
              {results.length > 0 && (
                <div className="space-y-3">
                  <AnimatePresence>
                    {results.map((result, i) => (
                      <motion.div
                        key={result.domain}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: i * 0.05 }}
                        className="rounded-xl border border-qyellow/30 bg-qblack-light hover:border-qyellow/50 p-4 transition-all"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-qyellow/10">
                              <Check className="h-4 w-4 text-qyellow" />
                            </div>
                            <div className="min-w-0">
                              <p className="font-medium truncate text-qwhite">
                                {result.domain}
                              </p>
                              {result.premium && (
                                <span className="text-xs text-qyellow/70">Premium domain</span>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-4 shrink-0">
                            <div className="text-right">
                              <p className="text-lg font-bold text-qwhite">
                                ${(result.price * 1.30).toFixed(2)}
                              </p>
                              <p className="text-xs text-qwhite/30">/year</p>
                            </div>
                            <button
                              onClick={() => handleCheckout(result.domain, result.price)}
                              disabled={checkingOut === result.domain}
                              className={cn(
                                buttonVariants({ size: "sm" }),
                                "bg-qyellow hover:bg-qyellow-light text-qblack-dark font-semibold disabled:opacity-50"
                              )}
                            >
                              {checkingOut === result.domain ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                              ) : (
                                <>
                                  <ShoppingCart className="h-3.5 w-3.5 mr-1.5" />
                                  Register
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}

              {/* Suggestions */}
              {suggestions.length > 0 && (
                <div className={results.length > 0 ? "mt-8" : ""}>
                  <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
                    <Zap className="h-4 w-4 text-qyellow/60" />
                    <p className="text-sm text-qwhite/50 font-medium">Similar names you might like</p>
                  </motion.div>
                  <div className="space-y-2">
                    <AnimatePresence>
                      {suggestions.map((sug, i) => (
                        <motion.div
                          key={sug.domain}
                          variants={fadeUp}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: (results.length + i) * 0.03 }}
                          className="rounded-lg border border-qwhite/10 bg-qblack-light/60 hover:border-qyellow/30 p-3 transition-all"
                        >
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 bg-qwhite/5">
                                <Globe className="h-3.5 w-3.5 text-qwhite/40" />
                              </div>
                              <p className="font-medium truncate text-qwhite/80 text-sm">
                                {sug.domain}
                              </p>
                            </div>

                            <div className="flex items-center gap-3 shrink-0">
                              <p className="text-sm font-semibold text-qwhite/70">
                                ${(sug.price * 1.30).toFixed(2)}<span className="text-xs text-qwhite/30 font-normal">/yr</span>
                              </p>
                              <button
                                onClick={() => handleCheckout(sug.domain, sug.price)}
                                disabled={checkingOut === sug.domain}
                                className={cn(
                                  buttonVariants({ size: "sm" }),
                                  "bg-qwhite/10 hover:bg-qyellow hover:text-qblack-dark text-qwhite/70 text-xs font-medium disabled:opacity-50 transition-all"
                                )}
                              >
                                {checkingOut === sug.domain ? (
                                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                                ) : (
                                  "Register"
                                )}
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* No results at all */}
          {!loading && searched && results.length === 0 && suggestions.length === 0 && !error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-qwhite/40 text-sm">No available domains found. Try a different name.</p>
            </motion.div>
          )}

          {/* Empty state — before search */}
          {!loading && !searched && results.length === 0 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-center py-12"
            >
              <motion.p variants={fadeUp} className="text-qwhite/30 text-sm mb-8">
                Enter a domain name or business name to get started
              </motion.p>
              <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
                {[
                  { icon: Shield, label: "Free WHOIS privacy" },
                  { icon: Zap, label: "Instant activation" },
                  { icon: Lock, label: "Full DNS control" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-2 py-4 px-3 rounded-xl bg-qblack-light/50 border border-qwhite/5">
                    <item.icon className="h-5 w-5 text-qyellow/60" />
                    <span className="text-xs text-qwhite/40">{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-qblack-dark border-t border-qwhite/10">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-serif text-2xl sm:text-3xl font-bold text-qwhite mb-3">
              Need a website to go with it?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-qwhite/50 text-sm mb-6 max-w-md mx-auto">
              We build custom websites from scratch. Domain, design, hosting — all handled.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/pricing"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-qyellow hover:bg-qyellow-light text-qblack-dark font-semibold px-8"
                )}
              >
                View Packages <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default function DomainsPage() {
  return (
    <Suspense>
      <DomainsContent />
    </Suspense>
  );
}

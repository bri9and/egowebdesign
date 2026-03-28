"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Loader2,
  Eye,
  Code,
  RotateCw,
  Check,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Rocket,
  AlertCircle,
  Pencil,
  ExternalLink,
} from "lucide-react";

type BuilderState =
  | "idle"
  | "generating"
  | "preview"
  | "committing"
  | "deployed"
  | "error";

export default function AIBuilderPage() {
  const params = useParams();
  const router = useRouter();
  const siteId = params.id as string;

  const [state, setState] = useState<BuilderState>("idle");
  const [prompt, setPrompt] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [domain, setDomain] = useState("");
  const [draftId, setDraftId] = useState<string | null>(null);
  const [generatedCode, setGeneratedCode] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [streamProgress, setStreamProgress] = useState(0);
  const [commitResult, setCommitResult] = useState<{
    commitSha: string;
    commitUrl: string | null;
  } | null>(null);

  const codeRef = useRef("");
  const abortRef = useRef<AbortController | null>(null);

  // Clean up abort controller on unmount
  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim() || !businessName.trim()) return;

    setState("generating");
    setError(null);
    setGeneratedCode("");
    setDraftId(null);
    setCommitResult(null);
    codeRef.current = "";
    setStreamProgress(0);

    abortRef.current = new AbortController();

    try {
      const res = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          siteId,
          prompt: prompt.trim(),
          businessName: businessName.trim(),
          domain: domain.trim() || undefined,
        }),
        signal: abortRef.current.signal,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Generation failed (${res.status})`);
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No response stream");

      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6);

          try {
            const event = JSON.parse(jsonStr);

            if (event.type === "draft_id") {
              setDraftId(event.draftId);
            } else if (event.type === "chunk") {
              codeRef.current += event.text;
              setStreamProgress((p) => Math.min(p + 1, 100));
              // Throttle state updates — update every 5 chunks
              if (codeRef.current.length % 200 < 50) {
                setGeneratedCode(codeRef.current);
              }
            } else if (event.type === "done") {
              setDraftId(event.draftId);
              setGeneratedCode(codeRef.current);
              setState("preview");
            } else if (event.type === "error") {
              throw new Error(event.message);
            }
          } catch (e) {
            if (e instanceof SyntaxError) continue;
            throw e;
          }
        }
      }

      // Final update in case last chunks weren't flushed
      if (state !== "preview") {
        setGeneratedCode(codeRef.current);
        setState("preview");
      }
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      setError(String((err as Error).message || err));
      setState("error");
    }
  }, [prompt, businessName, domain, siteId, state]);

  const handleCommit = useCallback(async () => {
    if (!draftId) return;

    setState("committing");
    setError(null);

    try {
      const res = await fetch("/api/ai/commit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ draftId, siteId }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Commit failed (${res.status})`);
      }

      const data = await res.json();
      setCommitResult({
        commitSha: data.commitSha,
        commitUrl: data.commitUrl,
      });
      setState("deployed");
    } catch (err) {
      setError(String((err as Error).message || err));
      setState("error");
    }
  }, [draftId, siteId]);

  const handleRegenerate = useCallback(() => {
    setState("idle");
    setGeneratedCode("");
    setDraftId(null);
    setError(null);
    setCommitResult(null);
  }, []);

  const handleEditPrompt = useCallback(() => {
    setState("idle");
    setError(null);
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Space Grotesk', system-ui, sans-serif",
        backgroundColor: "#0A0A0A",
        color: "#ffffff",
      }}
    >
      {/* Top bar */}
      <header
        className="border-b px-4 sm:px-6 py-4 flex items-center justify-between"
        style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "#000000" }}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/dashboard/sites")}
            className="flex items-center gap-2 text-sm transition-colors hover:text-white"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sites
          </button>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5" style={{ color: "#FF8000" }} />
          <span className="font-semibold text-sm tracking-wide">AI Site Builder</span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <AnimatePresence mode="wait">
          {/* ── IDLE: Prompt Form ────────────────────────────────────── */}
          {(state === "idle" || state === "error") && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-10">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase mb-6"
                  style={{
                    border: "1px solid rgba(255,128,0,0.3)",
                    color: "#FF8000",
                    backgroundColor: "rgba(255,128,0,0.08)",
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  AI-Powered
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                  Build Your Website
                </h1>
                <p style={{ color: "rgba(255,255,255,0.5)" }}>
                  Describe your business and we&apos;ll generate a professional website in seconds.
                </p>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-lg flex items-start gap-3"
                  style={{
                    backgroundColor: "rgba(220,38,38,0.1)",
                    border: "1px solid rgba(220,38,38,0.3)",
                  }}
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#ef4444" }} />
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#ef4444" }}>
                      Generation Failed
                    </p>
                    <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {error}
                    </p>
                  </div>
                </motion.div>
              )}

              <div className="space-y-5">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    Business Name *
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g., Acme Plumbing Co."
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                    style={{
                      backgroundColor: "#1A1A1A",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#ffffff",
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    Domain (optional)
                  </label>
                  <input
                    type="text"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="e.g., acmeplumbing.com"
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                    style={{
                      backgroundColor: "#1A1A1A",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#ffffff",
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    Describe Your Business *
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={`Tell us about your business. For example:\n\nWe're a family-owned plumbing company in Pittsburgh serving the South Hills area for 15 years. We specialize in emergency repairs, drain cleaning, and water heater installation. Our phone number is (412) 555-1234. We're licensed, insured, and BBB A+ rated.`}
                    rows={8}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all resize-none"
                    style={{
                      backgroundColor: "#1A1A1A",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#ffffff",
                    }}
                  />
                  <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                    Include your services, location, phone number, years in business, certifications, and any specific
                    content you want on the site.
                  </p>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || !businessName.trim()}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg font-bold text-base transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: "#FF8000",
                    color: "#ffffff",
                    boxShadow: "0 0 30px rgba(255,128,0,0.3)",
                  }}
                >
                  <Sparkles className="w-5 h-5" />
                  Generate My Website
                </button>
              </div>
            </motion.div>
          )}

          {/* ── GENERATING: Loading State ────────────────────────────── */}
          {state === "generating" && (
            <motion.div
              key="generating"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto text-center py-16"
            >
              <div className="relative inline-block mb-8">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(255,128,0,0.1)",
                    border: "1px solid rgba(255,128,0,0.3)",
                  }}
                >
                  <Loader2
                    className="w-10 h-10 animate-spin"
                    style={{ color: "#FF8000" }}
                  />
                </div>
                {/* Pulsing ring */}
                <div
                  className="absolute inset-0 rounded-2xl animate-ping"
                  style={{
                    backgroundColor: "transparent",
                    border: "2px solid rgba(255,128,0,0.2)",
                  }}
                />
              </div>

              <h2 className="text-2xl font-bold mb-3">
                Building Your Website...
              </h2>
              <p className="mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
                Claude is crafting your custom website. This usually takes 15-30 seconds.
              </p>

              {/* Progress bar */}
              <div className="max-w-sm mx-auto">
                <div
                  className="h-1.5 rounded-full overflow-hidden"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: "#FF8000" }}
                    initial={{ width: "0%" }}
                    animate={{ width: `${Math.min(streamProgress * 2, 95)}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {streamProgress < 10
                    ? "Analyzing your business..."
                    : streamProgress < 30
                      ? "Designing layout and sections..."
                      : streamProgress < 60
                        ? "Writing content and copy..."
                        : "Polishing final details..."}
                </p>
              </div>

              {/* Live code preview (faded) */}
              {generatedCode && (
                <div className="mt-10 text-left">
                  <div
                    className="rounded-lg p-4 max-h-32 overflow-hidden relative"
                    style={{
                      backgroundColor: "#000000",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <pre
                      className="text-xs leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.25)" }}
                    >
                      {generatedCode.slice(-500)}
                    </pre>
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent 0%, #000000 100%)",
                      }}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* ── PREVIEW: Draft Ready ─────────────────────────────────── */}
          {(state === "preview" || state === "committing") && draftId && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Action bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Eye className="w-6 h-6" style={{ color: "#FF8000" }} />
                    Your Draft is Ready
                  </h2>
                  <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Preview your website below. Approve it to deploy, or regenerate with changes.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleEditPrompt}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    <Pencil className="w-4 h-4" />
                    Edit Prompt
                  </button>
                  <button
                    onClick={handleRegenerate}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    <RotateCw className="w-4 h-4" />
                    Regenerate
                  </button>
                  <button
                    onClick={handleCommit}
                    disabled={state === "committing"}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all disabled:opacity-60"
                    style={{
                      backgroundColor: "#FF8000",
                      color: "#ffffff",
                      boxShadow: "0 0 20px rgba(255,128,0,0.3)",
                    }}
                  >
                    {state === "committing" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Deploying...
                      </>
                    ) : (
                      <>
                        <Rocket className="w-4 h-4" />
                        Approve & Deploy
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Preview iframe */}
              <div
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                {/* Browser chrome mock */}
                <div
                  className="flex items-center gap-2 px-4 py-3"
                  style={{
                    backgroundColor: "#000000",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f56" }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ffbd2e" }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#27c93f" }} />
                  </div>
                  <div
                    className="flex-1 mx-4 px-3 py-1 rounded text-xs"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {domain || "your-site.kptdesigns.vercel.app"}
                  </div>
                </div>
                <iframe
                  src={`/api/ai/preview/${draftId}`}
                  className="w-full bg-white"
                  style={{ height: "70vh", border: "none" }}
                  title="Site preview"
                  sandbox="allow-scripts"
                />
              </div>

              {/* Code viewer (collapsible) */}
              <div className="mt-6">
                <button
                  onClick={() => setShowCode(!showCode)}
                  className="flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  <Code className="w-4 h-4" />
                  {showCode ? "Hide" : "Show"} Generated Code
                  {showCode ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                <AnimatePresence>
                  {showCode && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="mt-3 rounded-lg p-4 max-h-96 overflow-auto"
                        style={{
                          backgroundColor: "#000000",
                          border: "1px solid rgba(255,255,255,0.05)",
                        }}
                      >
                        <pre
                          className="text-xs leading-relaxed"
                          style={{ color: "rgba(255,255,255,0.6)" }}
                        >
                          {generatedCode}
                        </pre>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* ── DEPLOYED: Success ───────────────────────────────────── */}
          {state === "deployed" && commitResult && (
            <motion.div
              key="deployed"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-2xl mx-auto text-center py-16"
            >
              <div
                className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(34,197,94,0.1)",
                  border: "2px solid rgba(34,197,94,0.3)",
                }}
              >
                <Check className="w-10 h-10" style={{ color: "#22C55E" }} />
              </div>

              <h2 className="text-3xl font-bold mb-3">
                Your Site is Deploying!
              </h2>
              <p
                className="text-lg mb-8 max-w-md mx-auto"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Your website has been committed and Vercel is deploying it now.
                It&apos;ll be live in about 30 seconds.
              </p>

              <div
                className="inline-block rounded-lg px-6 py-4 mb-8"
                style={{
                  backgroundColor: "#000000",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Commit SHA
                </p>
                <p className="font-mono text-sm" style={{ color: "#FF8000" }}>
                  {commitResult.commitSha.slice(0, 8)}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {commitResult.commitUrl && (
                  <a
                    href={commitResult.commitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View on GitHub
                  </a>
                )}
                <button
                  onClick={handleRegenerate}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  <RotateCw className="w-4 h-4" />
                  Generate Another Version
                </button>
                <button
                  onClick={() => router.push("/dashboard/sites")}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all"
                  style={{
                    backgroundColor: "#FF8000",
                    color: "#ffffff",
                  }}
                >
                  Back to Dashboard
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

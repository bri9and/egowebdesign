"use client";

import Link from "next/link";
import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/logo";
import { ArrowRight, Eye, EyeOff, Loader2 } from "lucide-react";

export default function SignInPage() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // 2FA state
  const [needs2FA, setNeeds2FA] = useState(false);
  const [totpCode, setTotpCode] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoaded) return;
    setError("");
    setLoading(true);

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
      } else if (result.status === "needs_second_factor") {
        setNeeds2FA(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err: unknown) {
      const clerkError = err as { errors?: { message: string }[] };
      setError(clerkError.errors?.[0]?.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  }

  async function handle2FA(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoaded) return;
    setError("");
    setLoading(true);

    try {
      const result = await signIn.attemptSecondFactor({
        strategy: "totp",
        code: totpCode,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
      } else {
        setError("Verification failed. Please try again.");
      }
    } catch (err: unknown) {
      const clerkError = err as { errors?: { message: string }[] };
      setError(clerkError.errors?.[0]?.message || "Invalid code.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-qblack flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <Link href="/" className="inline-block mb-6">
            <Logo variant="full" size="lg" />
          </Link>
          <h1 className="text-2xl font-serif font-bold text-qwhite">
            {needs2FA ? "Two-Factor Authentication" : "Sign in"}
          </h1>
          <p className="text-qwhite/50 mt-2 text-sm">
            {needs2FA
              ? "Enter the code from your authenticator app"
              : "Welcome back to Ego Web Design"}
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        {!needs2FA ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-qwhite/70 mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-lg bg-qblack-light border border-white/10 text-qwhite placeholder:text-qwhite/25 focus:outline-none focus:border-qyellow focus:ring-1 focus:ring-qyellow/30 transition-colors"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-qwhite/70">
                  Password
                </label>
                <Link
                  href="/sign-in#"
                  className="text-xs text-qyellow hover:text-qyellow-light transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-lg bg-qblack-light border border-white/10 text-qwhite placeholder:text-qwhite/25 focus:outline-none focus:border-qyellow focus:ring-1 focus:ring-qyellow/30 transition-colors pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-qwhite/30 hover:text-qwhite/60 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-qyellow hover:bg-qyellow-light text-qblack-dark font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  Sign In <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        ) : (
          <form onSubmit={handle2FA} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-qwhite/70 mb-1.5">
                Authenticator Code
              </label>
              <input
                type="text"
                value={totpCode}
                onChange={(e) => setTotpCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                required
                autoFocus
                placeholder="000000"
                maxLength={6}
                className="w-full px-4 py-3 rounded-lg bg-qblack-light border border-white/10 text-qwhite text-center text-2xl font-mono tracking-[0.5em] placeholder:text-qwhite/25 placeholder:tracking-[0.5em] focus:outline-none focus:border-qyellow focus:ring-1 focus:ring-qyellow/30 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading || totpCode.length !== 6}
              className="w-full py-3 rounded-lg bg-qyellow hover:bg-qyellow-light text-qblack-dark font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  Verify <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                setNeeds2FA(false);
                setTotpCode("");
                setError("");
              }}
              className="w-full text-sm text-qwhite/40 hover:text-qwhite/60 transition-colors"
            >
              Back to sign in
            </button>
          </form>
        )}

        <p className="text-center mt-8 text-sm text-qwhite/40">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="text-qyellow hover:text-qyellow-light transition-colors font-medium"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}

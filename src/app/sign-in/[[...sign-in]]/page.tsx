"use client";

import Link from "next/link";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/logo";
import { ArrowRight, Eye, EyeOff, Loader2, Shield } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "KPT Designs completely transformed our online presence. The site they built drives 3x more leads than our old one.",
    name: "James Mitchell",
    title: "Owner, Pittsburgh North GC",
  },
  {
    quote: "Professional, fast, and they actually listened. Best agency experience we've had.",
    name: "Sarah Chen",
    title: "Director, WeatherMin.org",
  },
  {
    quote: "They delivered the code and the repo — we actually own what we paid for. That's rare.",
    name: "Mike Torres",
    title: "Founder, 107 Certified",
  },
];

export default function SignInPage() {
  const { signIn, errors, fetchStatus } = useSignIn();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [testimonialIdx] = useState(() => Math.floor(Math.random() * testimonials.length));

  const loading = fetchStatus === "fetching";
  const needs2FA = signIn.status === "needs_second_factor";

  async function handleSubmit(formData: FormData) {
    const emailAddress = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await signIn.password({ emailAddress, password });
    if (error) return;

    if (signIn.status === "complete") {
      await signIn.finalize({
        navigate: ({ session, decorateUrl }) => {
          if (session?.currentTask) return;
          const url = decorateUrl("/dashboard");
          if (url.startsWith("http")) {
            window.location.href = url;
          } else {
            router.push(url);
          }
        },
      });
    }
  }

  async function handle2FA(formData: FormData) {
    const code = formData.get("code") as string;

    const { error } = await signIn.mfa.verifyTOTP({ code });
    if (error) return;

    if (signIn.status === "complete") {
      await signIn.finalize({
        navigate: ({ session, decorateUrl }) => {
          if (session?.currentTask) return;
          const url = decorateUrl("/dashboard");
          if (url.startsWith("http")) {
            window.location.href = url;
          } else {
            router.push(url);
          }
        },
      });
    }
  }

  const fieldError = (field: string) => {
    const err = errors?.fields?.[field as keyof typeof errors.fields];
    return err?.message ?? null;
  };

  const globalError =
    (errors?.global as { message?: string } | undefined)?.message ?? null;

  const t = testimonials[testimonialIdx];

  return (
    <div className="min-h-screen flex">
      {/* ── Left brand panel (hidden on mobile) ── */}
      <div className="hidden lg:flex lg:w-[55%] xl:w-[60%] relative overflow-hidden bg-qblack-dark items-center justify-center">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-qblack-dark via-qblack to-qblack-dark" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-qyellow/[0.07] blur-[120px] animate-pulse" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-qyellow-light/[0.05] blur-[100px] animate-pulse [animation-delay:2s]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-lg px-12">
          <Logo variant="full" size="lg" className="mb-16 opacity-80" />

          <blockquote className="mb-8">
            <p className="text-xl xl:text-2xl font-light text-qwhite/90 leading-relaxed tracking-wide">
              &ldquo;{t.quote}&rdquo;
            </p>
          </blockquote>

          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-qyellow/60" />
            <div>
              <p className="text-sm font-semibold text-qwhite">{t.name}</p>
              <p className="text-xs text-qwhite/40">{t.title}</p>
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-16 flex items-center gap-2 text-qwhite/25">
            <Shield className="h-3.5 w-3.5" />
            <span className="text-xs tracking-wider uppercase">256-bit encrypted &middot; SOC 2 compliant</span>
          </div>
        </div>
      </div>

      {/* ── Right auth panel ── */}
      <div className="flex-1 flex items-center justify-center bg-qblack px-6 py-12">
        <div className="w-full max-w-[400px] animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-10">
            <Link href="/">
              <Logo variant="full" size="lg" />
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-[28px] font-bold text-qwhite tracking-tight">
              {needs2FA ? "Two-factor authentication" : "Welcome back"}
            </h1>
            <p className="text-qwhite/40 mt-2 text-[15px]">
              {needs2FA
                ? "Enter the code from your authenticator app"
                : "Sign in to your KPT Designs account"}
            </p>
          </div>

          {globalError && (
            <div className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
              {globalError}
            </div>
          )}

          {!needs2FA ? (
            <>
              {/* SSO buttons first */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => signIn?.sso({ strategy: "oauth_google", redirectCallbackUrl: "/sign-in/sso-callback", redirectUrl: "/dashboard" })}
                  className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-qwhite text-sm font-medium hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-200"
                >
                  <svg className="h-[18px] w-[18px] shrink-0" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                  Google
                </button>
                <button
                  type="button"
                  onClick={() => signIn?.sso({ strategy: "oauth_apple", redirectCallbackUrl: "/sign-in/sso-callback", redirectUrl: "/dashboard" })}
                  className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-qwhite text-sm font-medium hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-200"
                >
                  <svg className="h-[18px] w-[18px] shrink-0" viewBox="0 0 24 24" fill="#ffffff"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                  Apple
                </button>
                <button
                  type="button"
                  onClick={() => signIn?.sso({ strategy: "oauth_microsoft", redirectCallbackUrl: "/sign-in/sso-callback", redirectUrl: "/dashboard" })}
                  className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-qwhite text-sm font-medium hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-200"
                >
                  <svg className="h-[18px] w-[18px] shrink-0" viewBox="0 0 24 24"><rect x="1" y="1" width="10" height="10" fill="#F25022"/><rect x="13" y="1" width="10" height="10" fill="#7FBA00"/><rect x="1" y="13" width="10" height="10" fill="#00A4EF"/><rect x="13" y="13" width="10" height="10" fill="#FFB900"/></svg>
                  Microsoft
                </button>
                <button
                  type="button"
                  onClick={() => signIn?.sso({ strategy: "oauth_github", redirectCallbackUrl: "/sign-in/sso-callback", redirectUrl: "/dashboard" })}
                  className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-qwhite text-sm font-medium hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-200"
                >
                  <svg className="h-[18px] w-[18px] shrink-0" viewBox="0 0 24 24" fill="#ffffff"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-white/[0.08]" />
                <span className="text-xs text-qwhite/25 uppercase tracking-widest font-medium">or</span>
                <div className="h-px flex-1 bg-white/[0.08]" />
              </div>

              {/* Email/password form */}
              <form action={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="signin-email" className="block text-[13px] font-medium text-qwhite/50 mb-2">
                    Email address
                  </label>
                  <input
                    id="signin-email"
                    type="email"
                    name="email"
                    required
                    autoFocus
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="w-full h-12 px-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-qwhite placeholder:text-qwhite/20 text-[15px] focus:outline-none focus:border-qyellow/60 focus:ring-2 focus:ring-qyellow/20 transition-all duration-200"
                  />
                  {fieldError("identifier") && (
                    <p className="mt-1.5 text-xs text-red-400">{fieldError("identifier")}</p>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="signin-password" className="block text-[13px] font-medium text-qwhite/50">
                      Password
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-xs text-qyellow/70 hover:text-qyellow transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      id="signin-password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      className="w-full h-12 px-4 pr-12 rounded-xl bg-white/[0.04] border border-white/[0.08] text-qwhite placeholder:text-qwhite/20 text-[15px] focus:outline-none focus:border-qyellow/60 focus:ring-2 focus:ring-qyellow/20 transition-all duration-200"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-qwhite/30 hover:text-qwhite/60 transition-colors p-1"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {fieldError("password") && (
                    <p className="mt-1.5 text-xs text-red-400">{fieldError("password")}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 rounded-xl bg-qyellow hover:bg-qyellow-light text-white font-semibold text-[15px] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-2 shadow-lg shadow-qyellow/20 hover:shadow-qyellow/30"
                >
                  {loading ? (
                    <Loader2 className="h-4.5 w-4.5 animate-spin" />
                  ) : (
                    <>
                      Sign in <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            <form action={handle2FA} className="space-y-5">
              <div>
                <label htmlFor="totp-code" className="block text-[13px] font-medium text-qwhite/50 mb-2">
                  Authenticator code
                </label>
                <input
                  id="totp-code"
                  type="text"
                  name="code"
                  required
                  autoFocus
                  placeholder="000000"
                  maxLength={6}
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  className="w-full h-14 px-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-qwhite text-center text-2xl font-mono tracking-[0.5em] placeholder:text-qwhite/15 placeholder:tracking-[0.5em] focus:outline-none focus:border-qyellow/60 focus:ring-2 focus:ring-qyellow/20 transition-all duration-200"
                />
                {fieldError("code") && (
                  <p className="mt-1.5 text-xs text-red-400">{fieldError("code")}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-xl bg-qyellow hover:bg-qyellow-light text-white font-semibold text-[15px] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-qyellow/20"
              >
                {loading ? (
                  <Loader2 className="h-4.5 w-4.5 animate-spin" />
                ) : (
                  <>
                    Verify <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => signIn.reset()}
                className="w-full text-sm text-qwhite/30 hover:text-qwhite/50 transition-colors"
              >
                Back to sign in
              </button>
            </form>
          )}

          <p className="text-center mt-8 text-sm text-qwhite/30">
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
    </div>
  );
}

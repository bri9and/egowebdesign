"use client";

import Link from "next/link";
import { useSignUp, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/logo";
import { ArrowRight, Eye, EyeOff, Loader2, Shield } from "lucide-react";
import { useState } from "react";

const features = [
  { label: "Custom design", detail: "Unique to your brand" },
  { label: "Full code ownership", detail: "You own everything" },
  { label: "AI-powered builder", detail: "Live preview as we build" },
  { label: "Domain & hosting", detail: "All-in-one platform" },
];

export default function SignUpPage() {
  const { signUp, errors, fetchStatus } = useSignUp();
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const loading = fetchStatus === "fetching";

  const pendingVerification =
    signUp.status === "missing_requirements" &&
    signUp.unverifiedFields?.includes("email_address") &&
    (signUp.missingFields?.length ?? 0) === 0;

  async function handleSubmit(formData: FormData) {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const emailAddress = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await signUp.password({
      emailAddress,
      password,
      firstName,
      lastName,
    });
    if (error) return;

    if (!error) await signUp.verifications.sendEmailCode();
  }

  async function handleVerification(formData: FormData) {
    const code = formData.get("code") as string;

    await signUp.verifications.verifyEmailCode({ code });

    if (signUp.status === "complete") {
      await signUp.finalize({
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

  const globalError = (errors?.global as { message?: string } | undefined)?.message ?? null;

  if (signUp.status === "complete" || isSignedIn) {
    return null;
  }

  return (
    <div className="min-h-screen flex">
      {/* ── Left brand panel (hidden on mobile) ── */}
      <div className="hidden lg:flex lg:w-[55%] xl:w-[60%] relative overflow-hidden bg-qblack-dark items-center justify-center">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-qblack-dark via-qblack to-qblack-dark" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-qyellow/[0.07] blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-qyellow-light/[0.05] blur-[100px] animate-pulse [animation-delay:2s]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-lg px-12">
          <Logo variant="full" size="lg" className="mb-16 opacity-80" />

          <h2 className="text-2xl xl:text-3xl font-bold text-qwhite/90 tracking-tight leading-snug mb-8">
            Everything you need to launch your website.
          </h2>

          <div className="space-y-5">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-0.5 h-6 w-6 rounded-full bg-qyellow/10 border border-qyellow/20 flex items-center justify-center shrink-0">
                  <svg className="h-3.5 w-3.5 text-qyellow" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-qwhite">{f.label}</p>
                  <p className="text-sm text-qwhite/35">{f.detail}</p>
                </div>
              </div>
            ))}
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
              {pendingVerification ? "Check your email" : "Create your account"}
            </h1>
            <p className="text-qwhite/40 mt-2 text-[15px]">
              {pendingVerification
                ? "We sent a 6-digit code to your email"
                : "Get started with KPT Designs"}
            </p>
          </div>

          {globalError && (
            <div className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
              {globalError}
            </div>
          )}

          {!pendingVerification ? (
            <>
              {/* SSO */}
              <button
                type="button"
                onClick={() => signUp?.sso({ strategy: "oauth_google", redirectCallbackUrl: "/sign-up/sso-callback", redirectUrl: "/dashboard" })}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-qwhite text-sm font-medium hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-200 mb-6"
              >
                <svg className="h-[18px] w-[18px] shrink-0" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Continue with Google
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-white/[0.08]" />
                <span className="text-xs text-qwhite/25 uppercase tracking-widest font-medium">or</span>
                <div className="h-px flex-1 bg-white/[0.08]" />
              </div>

              {/* Signup form */}
              <form action={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="signup-first" className="block text-[13px] font-medium text-qwhite/50 mb-2">
                      First name
                    </label>
                    <input
                      id="signup-first"
                      type="text"
                      name="firstName"
                      required
                      autoFocus
                      autoComplete="given-name"
                      placeholder="Jane"
                      className="w-full h-12 px-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-qwhite placeholder:text-qwhite/20 text-[15px] focus:outline-none focus:border-qyellow/60 focus:ring-2 focus:ring-qyellow/20 transition-all duration-200"
                    />
                    {fieldError("firstName") && (
                      <p className="mt-1.5 text-xs text-red-400">{fieldError("firstName")}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="signup-last" className="block text-[13px] font-medium text-qwhite/50 mb-2">
                      Last name
                    </label>
                    <input
                      id="signup-last"
                      type="text"
                      name="lastName"
                      required
                      autoComplete="family-name"
                      placeholder="Smith"
                      className="w-full h-12 px-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-qwhite placeholder:text-qwhite/20 text-[15px] focus:outline-none focus:border-qyellow/60 focus:ring-2 focus:ring-qyellow/20 transition-all duration-200"
                    />
                    {fieldError("lastName") && (
                      <p className="mt-1.5 text-xs text-red-400">{fieldError("lastName")}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="signup-email" className="block text-[13px] font-medium text-qwhite/50 mb-2">
                    Email address
                  </label>
                  <input
                    id="signup-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="w-full h-12 px-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-qwhite placeholder:text-qwhite/20 text-[15px] focus:outline-none focus:border-qyellow/60 focus:ring-2 focus:ring-qyellow/20 transition-all duration-200"
                  />
                  {fieldError("emailAddress") && (
                    <p className="mt-1.5 text-xs text-red-400">{fieldError("emailAddress")}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="signup-password" className="block text-[13px] font-medium text-qwhite/50 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="signup-password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      minLength={8}
                      autoComplete="new-password"
                      placeholder="At least 8 characters"
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
                      Create account <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-qwhite/20 text-center mt-3 leading-relaxed">
                  By creating an account, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </>
          ) : (
            <form action={handleVerification} className="space-y-5">
              <div>
                <label htmlFor="verify-code" className="block text-[13px] font-medium text-qwhite/50 mb-2">
                  Verification code
                </label>
                <input
                  id="verify-code"
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
                    Verify email <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              <div className="flex flex-col items-center gap-2">
                <button
                  type="button"
                  onClick={() => signUp.verifications.sendEmailCode()}
                  className="text-sm text-qyellow/70 hover:text-qyellow transition-colors"
                >
                  Resend code
                </button>
                <button
                  type="button"
                  onClick={() => signUp.reset()}
                  className="text-sm text-qwhite/30 hover:text-qwhite/50 transition-colors"
                >
                  Back to sign up
                </button>
              </div>
            </form>
          )}

          <p className="text-center mt-8 text-sm text-qwhite/30">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="text-qyellow hover:text-qyellow-light transition-colors font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

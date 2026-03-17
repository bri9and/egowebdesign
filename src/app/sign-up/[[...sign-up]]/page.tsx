"use client";

import Link from "next/link";
import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/logo";
import { ArrowRight, Eye, EyeOff, Loader2 } from "lucide-react";

export default function SignUpPage() {
  const { signUp, setActive, isLoaded } = useSignUp();
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Email verification state
  const [pendingVerification, setPendingVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoaded) return;
    setError("");
    setLoading(true);

    try {
      await signUp.create({
        firstName,
        lastName,
        emailAddress: email,
        password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setPendingVerification(true);
    } catch (err: unknown) {
      const clerkError = err as { errors?: { message: string }[] };
      setError(clerkError.errors?.[0]?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  async function handleVerification(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoaded) return;
    setError("");
    setLoading(true);

    try {
      const result = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
      } else {
        setError("Verification incomplete. Please try again.");
      }
    } catch (err: unknown) {
      const clerkError = err as { errors?: { message: string }[] };
      setError(clerkError.errors?.[0]?.message || "Invalid verification code.");
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
            {pendingVerification ? "Check your email" : "Create your account"}
          </h1>
          <p className="text-qwhite/50 mt-2 text-sm">
            {pendingVerification
              ? `We sent a verification code to ${email}`
              : "Get started with Ego Web Design"}
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        {!pendingVerification ? (
          <>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-qwhite/70 mb-1.5">
                  First name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  autoFocus
                  placeholder="Brian"
                  className="w-full px-4 py-3 rounded-lg bg-qblack-light border border-white/10 text-qwhite placeholder:text-qwhite/25 focus:outline-none focus:border-qyellow focus:ring-1 focus:ring-qyellow/30 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-qwhite/70 mb-1.5">
                  Last name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  placeholder="Smith"
                  className="w-full px-4 py-3 rounded-lg bg-qblack-light border border-white/10 text-qwhite placeholder:text-qwhite/25 focus:outline-none focus:border-qyellow focus:ring-1 focus:ring-qyellow/30 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-qwhite/70 mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-lg bg-qblack-light border border-white/10 text-qwhite placeholder:text-qwhite/25 focus:outline-none focus:border-qyellow focus:ring-1 focus:ring-qyellow/30 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-qwhite/70 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  placeholder="At least 8 characters"
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
              className="w-full py-3 rounded-lg bg-qyellow hover:bg-qyellow-light text-qblack-dark font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  Create Account <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            <p className="text-xs text-qwhite/30 text-center mt-3">
              By creating an account, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-qwhite/30 uppercase tracking-wider">or</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={() => signUp?.authenticateWithRedirect({ strategy: "oauth_google", redirectUrl: "/sign-up/sso-callback", redirectUrlComplete: "/dashboard" })}
              className="w-full py-3 px-4 rounded-lg bg-qblack-light border border-white/10 text-qwhite text-sm font-medium hover:bg-qwhite/10 transition-colors flex items-center justify-center gap-3"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Continue with Google
            </button>
            <button
              type="button"
              onClick={() => signUp?.authenticateWithRedirect({ strategy: "oauth_facebook", redirectUrl: "/sign-up/sso-callback", redirectUrlComplete: "/dashboard" })}
              className="w-full py-3 px-4 rounded-lg bg-qblack-light border border-white/10 text-qwhite text-sm font-medium hover:bg-qwhite/10 transition-colors flex items-center justify-center gap-3"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Continue with Facebook
            </button>
            <button
              type="button"
              onClick={() => signUp?.authenticateWithRedirect({ strategy: "oauth_microsoft", redirectUrl: "/sign-up/sso-callback", redirectUrlComplete: "/dashboard" })}
              className="w-full py-3 px-4 rounded-lg bg-qblack-light border border-white/10 text-qwhite text-sm font-medium hover:bg-qwhite/10 transition-colors flex items-center justify-center gap-3"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24"><rect x="1" y="1" width="10" height="10" fill="#F25022"/><rect x="13" y="1" width="10" height="10" fill="#7FBA00"/><rect x="1" y="13" width="10" height="10" fill="#00A4EF"/><rect x="13" y="13" width="10" height="10" fill="#FFB900"/></svg>
              Continue with Microsoft
            </button>
            <button
              type="button"
              onClick={() => signUp?.authenticateWithRedirect({ strategy: "oauth_apple", redirectUrl: "/sign-up/sso-callback", redirectUrlComplete: "/dashboard" })}
              className="w-full py-3 px-4 rounded-lg bg-qblack-light border border-white/10 text-qwhite text-sm font-medium hover:bg-qwhite/10 transition-colors flex items-center justify-center gap-3"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#ffffff"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
              Continue with Apple
            </button>
          </div>
          </>
        ) : (
          <form onSubmit={handleVerification} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-qwhite/70 mb-1.5">
                Verification Code
              </label>
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                required
                autoFocus
                placeholder="000000"
                maxLength={6}
                className="w-full px-4 py-3 rounded-lg bg-qblack-light border border-white/10 text-qwhite text-center text-2xl font-mono tracking-[0.5em] placeholder:text-qwhite/25 placeholder:tracking-[0.5em] focus:outline-none focus:border-qyellow focus:ring-1 focus:ring-qyellow/30 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading || verificationCode.length !== 6}
              className="w-full py-3 rounded-lg bg-qyellow hover:bg-qyellow-light text-qblack-dark font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  Verify Email <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                setPendingVerification(false);
                setVerificationCode("");
                setError("");
              }}
              className="w-full text-sm text-qwhite/40 hover:text-qwhite/60 transition-colors"
            >
              Back to sign up
            </button>
          </form>
        )}

        <p className="text-center mt-8 text-sm text-qwhite/40">
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
  );
}

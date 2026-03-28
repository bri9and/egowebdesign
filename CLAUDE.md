# KPT Designs

## Environment Variables

Required env vars in `.env.local` (never commit values):

| Variable | Purpose |
|----------|---------|
| `GOOGLE_API_KEY` | Google Gemini API access |
| `ANTHROPIC_API_KEY` | Claude AI site builder |
| `CLERK_SECRET_KEY` | Clerk auth (server-side) |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk auth (client-side) |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key (client-side) |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role (server-side) |
| `STRIPE_SECRET_KEY` | Stripe payments |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook verification |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe (client-side) |
| `GITHUB_TOKEN` | GitHub repo provisioning |
| `EWD_VERCEL_TOKEN` | Vercel project provisioning |
| `NAMESILO_API_KEY` | Domain registration |

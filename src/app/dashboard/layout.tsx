"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserMenu } from "@/components/user-menu";
import { useUser } from "@clerk/nextjs";
import {
  LayoutDashboard,
  Globe,
  Monitor,
  ShoppingCart,
  User,
  ArrowLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/dashboard/domains", label: "My Domains", icon: Globe, exact: false },
  { href: "/dashboard/sites", label: "My Sites", icon: Monitor, exact: false },
  { href: "/dashboard/orders", label: "Orders", icon: ShoppingCart, exact: false },
  { href: "/dashboard/account", label: "Account", icon: User, exact: false },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user } = useUser();

  const isActive = (href: string, exact: boolean) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-qblack">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-qblack-dark border-r border-white/10">
        {/* Logo / Back */}
        <div className="px-5 pt-5 pb-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to site</span>
          </Link>
        </div>

        {/* User info */}
        <div className="px-5 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <UserMenu size="md" />
            <div className="min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {user?.firstName
                  ? `${user.firstName}${user.lastName ? ` ${user.lastName}` : ""}`
                  : user?.emailAddresses?.[0]?.emailAddress ?? "Account"}
              </p>
              <p className="text-xs text-white/50 truncate">
                {user?.emailAddresses?.[0]?.emailAddress ?? ""}
              </p>
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const active = isActive(item.href, item.exact);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  active
                    ? "bg-qyellow/10 text-qyellow"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon className={cn("w-4.5 h-4.5", active ? "text-qyellow" : "text-white/40")} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-white/10">
          <p className="text-[10px] text-white/25 font-mono">
            Ego Web Design
          </p>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 md:ml-64 min-h-screen pb-20 md:pb-0">
        <div className="p-6 md:p-8 max-w-6xl mx-auto">{children}</div>
      </main>

      {/* Mobile Bottom Tabs */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-qblack-dark border-t border-white/10 z-50">
        <div className="flex items-center justify-around h-16 px-2">
          {navItems.map((item) => {
            const active = isActive(item.href, item.exact);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 px-3 py-1.5 rounded-lg transition-colors min-w-0",
                  active ? "text-qyellow" : "text-white/50"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-[10px] font-medium truncate">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

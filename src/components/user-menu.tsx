"use client";

import { useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

interface UserMenuProps {
  size?: "sm" | "md";
}

export function UserMenu({ size = "sm" }: UserMenuProps) {
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) return null;

  const initials = `${user.firstName?.charAt(0) ?? ""}${user.lastName?.charAt(0) ?? ""}`.toUpperCase();
  const sizeClasses = size === "md" ? "w-9 h-9" : "w-8 h-8";

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`${sizeClasses} rounded-full overflow-hidden flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-qyellow/50 transition-opacity hover:opacity-80`}
        aria-label="User menu"
      >
        {user.imageUrl ? (
          <img
            src={user.imageUrl}
            alt={user.fullName ?? "User avatar"}
            className={`${sizeClasses} rounded-full object-cover`}
          />
        ) : (
          <span className={`${sizeClasses} rounded-full bg-qyellow text-qblack-dark font-semibold flex items-center justify-center text-sm`}>
            {initials}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 rounded-lg bg-qblack-light border border-white/10 shadow-xl z-50 py-2">
          <div className="px-4 py-3">
            <p className="text-white font-bold text-sm truncate">
              {user.fullName}
            </p>
            <p className="text-white/50 text-xs truncate">
              {user.primaryEmailAddress?.emailAddress}
            </p>
          </div>

          <div className="border-t border-white/10" />

          <button
            onClick={() => {
              setOpen(false);
              router.push("/dashboard/account");
            }}
            className="w-full text-left px-4 py-2 text-sm text-white hover:bg-white/5 transition-colors"
          >
            Manage Account
          </button>

          <div className="border-t border-white/10" />

          <button
            onClick={() => signOut(() => router.push("/"))}
            className="w-full text-left px-4 py-2 text-sm text-white hover:text-red-400 hover:bg-white/5 transition-colors"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

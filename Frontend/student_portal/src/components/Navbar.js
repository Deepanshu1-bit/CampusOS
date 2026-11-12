"use client";

import { Bell, ChevronDown, GraduationCap, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {

  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // if (!mounted) return null;

  return (
    <header className="flex h-16 w-full items-center justify-between lg:justify-end gap-3 border-b border-[#e7eae3] dark:border-[#34443a] bg-[#f8f9f5] dark:bg-[#1c2921] px-3 sm:px-6 lg:px-8">
      {/* Logo */}
      <div className="flex justify-center items-center lg:hidden">
        <Link href="/Dashboard" className=" flex lg:mb-7 lg:hidden items-center gap-2 ">
          <GraduationCap size={21} fill="#17231b" color="#17231b" className="dark:fill-[#f3f5f1] dark:stroke-[#f3f5f1]" />
          <span className="text-[17px] font-bold text-[#17231b] dark:text-[#f3f5f1]">
            CampusHub
          </span>
        </Link>
      </div>

      <div className="flex shrink-0 items-center gap-3 sm:gap-5">
        <button onClick={() =>
          setTheme(resolvedTheme === "dark" ? "light" : "dark")
        }
          className="rounded-lg border border-[#e7eae3] dark:border-[#34443a] p-2 text-[#26352d] dark:text-[#f3f5f1] hover:bg-[#e3e9df] dark:hover:bg-[#26352d]"
          disabled={!mounted}>
          {mounted && resolvedTheme === "dark" ? (
            <Sun size={20} />
          ) : (
            <Moon size={20} />
          )}
        </button>
        <Link href='/Notices' className="text-[#71817a] hover:text-black dark:text-[#c1cec4] dark:hover:text-white">
          <Bell size={17} />
        </Link>

        <Link href={'/Profile'} className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-full bg-[#d7e8dc] dark:bg-[#344b3b] text-[10px] font-semibold text-[#47765c] dark:text-[#d1e5d5]">
            PS
          </div>

          <div className="hidden sm:block">
            <p className="text-[11px] font-semibold text-[#17231b] dark:text-[#f3f5f1]">
              Priya Sharma
            </p>
            <p className="text-[10px] text-[#87938c] dark:text-[#aab8ae]">
              B.Tech CSE
            </p>
          </div>
          <ChevronDown size={14} className="hidden text-[#71817a] dark:text-[#c1cec4] sm:block" />
        </Link>
      </div>
    </header>
  );
}
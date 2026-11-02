"use client";

import { Search, Bell, ChevronDown, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex h-16 w-full items-center justify-between gap-3 border-b border-[#e7eae3] bg-[#f8f9f5] px-3 sm:px-6 lg:px-8">

      {/* Logo */}
      <div className=" flex justify-center items-center lg:hidden">
        <Link href="/Dashboard" className=" flex lg:mb-7 lg:hidden items-center gap-2 ">
          <GraduationCap size={21} fill="#17231b" color="#17231b" />
          <span className="text-[17px] font-bold text-[#17231b]">
            CampusHub
          </span>
        </Link>      </div>
      {/* Search */}
      <div className="hidden lg:flex h-10 w-full max-w-sm items-center gap-3 rounded-lg border border-[#e7eae3] bg-white px-3">
        <Search size={16} className="shrink-0 text-[#9aa5a0]" />

        <input
          type="text"
          placeholder="Search anything..."
          className="w-full min-w-0 bg-transparent text-xs text-[#26352d] outline-none placeholder:text-[#9aa5a0]"
        />
      </div>

      {/* Right Section */}
      <div className="flex shrink-0 items-center gap-3 sm:gap-5">
        <Link href='/Notices' className="text-[#71817a] hover:text-black">
          <Bell size={17} />
        </Link>
        <Link href={'/Profile'} className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-full bg-[#d7e8dc] text-[10px] font-semibold text-[#47765c]">
            PS
          </div>

          <div className="hidden sm:block">
            <p className="text-[11px] font-semibold text-[#17231b]">
              Priya Sharma
            </p>
            <p className="text-[10px] text-[#87938c]">
              B.Tech CSE
            </p>
          </div>

          <ChevronDown size={14} className="hidden text-[#71817a] sm:block" />
        </Link>
      </div>
    </header>
  );
}
"use client";

import { useState } from "react";
import {
  GraduationCap,
  LayoutGrid,
  User,
  CalendarCheck,
  CreditCard,
  FileSpreadsheet,
  ClipboardPen,
  CalendarClock,
  Bell,
  Settings,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", icon: LayoutGrid, href: "/Dashboard" },
  { name: "My Profile", icon: User, href: "/Profile" },
  { name: "Attendance", icon: CalendarCheck, href: "/Attendance" },
  { name: "Fees", icon: CreditCard, href: "/Fees" },
  { name: "Examinations", icon: FileSpreadsheet, href: "/Examination" },
  { name: "Assignments", icon: ClipboardPen, href: "/Assignments" },
  { name: "Timetable", icon: CalendarClock, href: "/Timetable" },
  { name: "Notices", icon: Bell, href: "/Notices" },
  { name: "Settings", icon: Settings, href: "/Settings" },
];

export default function Sidebar() {
  const [showMore, setShowMore] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  const renderItem = (item) => {
    const Icon = item.icon;

    return (
      <Link
        key={item.name}
        href={item.href}
        onClick={() => setShowMore(false)}
        className={`flex h-12 w-auto shrink-0 flex-col items-center justify-center gap-1 rounded-lg px-2 text-[10px] transition-colors lg:h-auto lg:flex-row lg:justify-start lg:gap-3 lg:px-3 lg:py-3 lg:text-[13px]
          ${isActive(item.href)
            ? "bg-[#a4b49c] font-semibold text-[#17231b]"
            : "text-[#5c6a66] hover:bg-[#e3e9df] hover:text-black"
          }`}
      >
        <Icon size={17} className="shrink-0" />
        <span className="whitespace-nowrap">{item.name}</span>
      </Link>
    );
  };

  return (
    <aside className="fixed bottom-0 left-0 z-50 w-full border-t border-[#e4e8df] bg-[#f3f4ec] px-2 py-2 lg:sticky lg:top-0 lg:h-screen lg:w-52 lg:shrink-0 lg:border-r lg:border-t-0 lg:px-4 lg:py-7 xl:w-56">

      {/* Desktop Logo */}
      <Link
        href="/Dashboard"
        className="mb-7 hidden items-center gap-2 px-2 lg:flex"
      >
        <GraduationCap size={21} fill="#17231b" color="#17231b" />
        <span className="text-[17px] font-bold text-[#17231b]">
          CampusOS
        </span>
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden flex-col gap-1 lg:flex">
        {menuItems.map(renderItem)}
      </nav>

      {/* Mobile Menu */}
      <nav className="flex items-center justify-around gap-1 lg:hidden">
        {menuItems.slice(0, 3).map(renderItem)}

        {!showMore && (
          <button
            type="button"
            onClick={() => setShowMore(true)}
            className="flex h-12 w-auto flex-col items-center justify-center gap-1 rounded-lg text-[10px] text-[#5c6a66]"
          >
            <Menu size={17} />
            More
          </button>
        )}

        {showMore && (
          <button
            type="button"
            onClick={() => setShowMore(false)}
            className="flex h-12 w-auto flex-col items-center justify-center gap-1 rounded-lg text-[10px] text-[#5c6a66]"
          >
            <X size={17} />
            Less
          </button>
        )}
      </nav>

      {/* Mobile Expanded Menu */}
      {showMore && (
        <div className="absolute bottom-full left-0 grid w-full grid-cols-3 gap-2 border-t border-[#e4e8df] bg-[#f3f4ec] p-3 shadow-lg lg:hidden">
          {menuItems.slice(3).map(renderItem)}
        </div>
      )}
    </aside>
  );
}
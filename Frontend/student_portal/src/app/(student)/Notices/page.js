'use client'
import { ChevronDown, Volume2, BookOpen, FileText, CircleHelp, CalendarCheck } from "lucide-react";
import { useState } from "react";

export default function NoticesPage() {

    const Notice_Filters = [
        { value: "All", label: "All Notices", mobileLabel: "All" },
        { value: "Event", label: "Event", mobileLabel: "Event" },
        { value: "Important", label: "Important", mobileLabel: "Important" },
        { value: "Academic", label: "Academic", mobileLabel: "Academic" },
        { value: "Opportunity", label: "Opportunity", mobileLabel: "Opportunity" },
        { value: "Sports", label: "Sports", mobileLabel: "Sports" },
    ];

    const Notice_List = [
        {
            id: 1,
            title: "College Cultural Fest 2025",
            mobileTitle: "College Cultural Fest 2025",
            description: "Cultural events, competitions and more",
            mobileDescription: "Cultural events and competitions",
            date: "30 Apr 2025",
            mobileDate: "30 Apr",
            category: "Event",
            icon: Volume2,
            color: "bg-[#fbd9d5] text-[#c4473d]",
            badge: "bg-[#fbd9d5] text-[#b9382b]",
        },
        {
            id: 2,
            title: "Library Maintenance",
            mobileTitle: "Library Maintenance",
            description: "Library will remain closed on Apr 27, 2025.",
            mobileDescription: "Closed on Apr 27, 2025",
            date: "25 Apr 2025",
            mobileDate: "25 Apr",
            category: "Important",
            icon: BookOpen,
            color: "bg-[#e9e1ff] text-[#8061d6]",
            badge: "bg-[#fbd9d5] text-[#b9382b]",
        },
        {
            id: 3,
            title: "Semester Exam Schedule Released",
            mobileTitle: "Semester Exam Schedule",
            description: "End semester exam timetable is now available.",
            mobileDescription: "Exam timetable is now available",
            date: "20 Apr 2025",
            mobileDate: "20 Apr",
            category: "Academic",
            icon: FileText,
            color: "bg-[#e9e1ff] text-[#8061d6]",
            badge: "bg-[#dce7ff] text-[#3d5fa8]",
        },
        {
            id: 4,
            title: "Scholarship Applications Open",
            mobileTitle: "Scholarship Applications",
            description: "Apply before May 15, 2025.",
            mobileDescription: "Apply before May 15, 2025",
            date: "18 Apr 2025",
            mobileDate: "18 Apr",
            category: "Opportunity",
            icon: CircleHelp,
            color: "bg-[#dce7ff] text-[#5378c5]",
            badge: "bg-[#dce7ff] text-[#3d5fa8]",
        },
        {
            id: 5,
            title: "Sports Trials",
            mobileTitle: "Sports Trials",
            description: "Trials for inter-college sports teams.",
            mobileDescription: "Inter-college sports teams",
            date: "15 Apr 2025",
            mobileDate: "15 Apr",
            category: "Sports",
            icon: CalendarCheck,
            color: "bg-[#fff0d5] text-[#b47b20]",
            badge: "bg-[#fff0d5] text-[#a87522]",
        },
    ];

    const [activeFilter, setActiveFilter] = useState("All");
    const [isOpen, setIsOpen] = useState(false);

    const selectedFilter = Notice_Filters.find((filter) => filter.value === activeFilter);

    const filteredNotices = activeFilter === "All"
        ? Notice_List
        : Notice_List.filter((item) => item.category === activeFilter);

    return (
        <div className="min-h-screen bg-[#f3f5f1] flex flex-col gap-5 px-4 pt-7 pb-20 sm:px-6 lg:px-8 lg:py-7">

            {/* Heading */}
            <section className="flex items-start justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-bold text-[#111c16] sm:text-2xl">
                        Notices
                    </h1>

                    <p className="mt-1 text-sm text-[#849088]">
                        <span className="sm:hidden">Important announcements</span>
                        <span className="hidden sm:inline">Stay updated with important announcements</span>
                    </p>
                </div>

                {/* Filter Dropdown */}
                <div className="relative shrink-0">
                    <button
                        onClick={() => { setIsOpen(!isOpen) }}
                        className="flex items-center gap-6 rounded-lg border border-[#edf0e9] bg-white px-4 py-3 text-xs font-semibold text-[#17231b] shadow-sm sm:min-w-34 sm:justify-between"
                    >
                        <span className="sm:hidden">{selectedFilter.mobileLabel}</span>
                        <span className="hidden sm:inline">{selectedFilter.label}</span>
                        <ChevronDown size={14} className={`text-[#849088] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isOpen && (
                        <>
                            <div className="fixed inset-0 z-10" onClick={() => { setIsOpen(false) }} />
                            <div className="absolute right-0 top-full z-20 mt-2 w-40 rounded-lg border border-[#edf0e9] bg-white py-1 shadow-lg">
                                {Notice_Filters.map((filter) => {
                                    return (
                                        <button
                                            key={filter.value}
                                            onClick={() => { setActiveFilter(filter.value); setIsOpen(false) }}
                                            className={`block w-full px-4 py-2 text-left text-xs hover:bg-[#f3f5f1] ${activeFilter === filter.value ? "bg-[#f3f5f1] font-semibold text-[#17231b]" : "font-medium text-[#77847d]"}`}
                                        >
                                            {filter.label}
                                        </button>
                                    )
                                })}
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* Notices List */}
            <section className="min-w-0 rounded-xl border border-[#edf0e9] bg-white px-4 py-1 shadow-xl sm:px-5">
                {filteredNotices.length === 0 && (
                    <p className="py-8 text-center text-xs text-[#849088]">
                        No notices found
                    </p>
                )}

                {filteredNotices.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.id}
                            className={`flex items-center gap-3 py-3 sm:gap-4 sm:py-4 ${index !== filteredNotices.length - 1 ? "border-b border-[#edf0e9]" : ""}`}
                        >
                            {/* Icon */}
                            <div className={`shadow-xl flex size-8 shrink-0 items-center justify-center rounded-lg sm:size-9 ${item.color}`}>
                                <Icon size={15} />
                            </div>

                            {/* Title + Description */}
                            <div className="min-w-0 flex-1">
                                <h4 className="truncate text-sm font-semibold text-[#17231b] sm:text-[13px]">
                                    <span className="sm:hidden">{item.mobileTitle}</span>
                                    <span className="hidden sm:inline">{item.title}</span>
                                </h4>

                                <p className="mt-1 truncate text-[11px] text-[#849088]">
                                    <span className="sm:hidden">{item.mobileDescription}</span>
                                    <span className="hidden sm:inline">{item.description}</span>
                                </p>
                            </div>

                            {/* Date + Badge */}
                            <div className="flex shrink-0 flex-col items-end gap-1 sm:flex-row sm:items-center sm:gap-6">
                                <p className="text-[11px] text-[#77847d] sm:text-xs">
                                    <span className="sm:hidden">{item.mobileDate}</span>
                                    <span className="hidden sm:inline">{item.date}</span>
                                </p>

                                <div className={`shadow-xl flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ${item.badge}`}>
                                    <p className="size-1.5 rounded-full bg-current" />
                                    {item.category}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>

        </div>
    );
}
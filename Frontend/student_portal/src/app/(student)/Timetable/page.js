
'use client'

import { useState } from "react";

export default function Timetable() {

    const Days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

    const [activeTab, setActiveTab] = useState('Mon');

    const timetableData = [{
        time: "9:00 - 10:00",
        Mon: { subject: "DS", color: "bg-[#e2efe2]" },
        Tue: { subject: "DBMS", color: "bg-[#e5eaf8]" },
        Wed: { subject: "OS", color: "bg-[#fceedd]" },
        Thu: { subject: "CN", color: "bg-[#e2eef2]" },
        Fri: { subject: "DBMS", color: "bg-[#e5eaf8]" }
    },
    {
        time: "10:00 - 11:00",
        Mon: { subject: "OS", color: "bg-[#fceedd]" },
        Tue: { subject: "CN", color: "bg-[#e2eef2]" },
        Wed: { subject: "DS", color: "bg-[#e2efe2]" },
        Thu: { subject: "DBMS", color: "bg-[#e5eaf8]" },
        Fri: { subject: "SE", color: "bg-[#f6eed8]" }
    },
    {
        time: "11:00 - 12:00",
        Mon: { subject: "DBMS", color: "bg-[#e5eaf8]" },
        Tue: { subject: "SE", color: "bg-[#f6eed8]" },
        Wed: { subject: "CN", color: "bg-[#e2eef2]" },
        Thu: { subject: "OS", color: "bg-[#fceedd]" },
        Fri: { subject: "DS", color: "bg-[#e2efe2]" }
    },
    {
        time: "12:00 - 1:00",
        isBreak: true,
        subject: "Break"
    },
    {
        time: "1:00 - 2:00",
        Mon: { subject: "SE", color: "bg-[#f6eed8]" },
        Tue: { subject: "DS", color: "bg-[#e2efe2]" },
        Wed: { subject: "DBMS", color: "bg-[#e5eaf8]" },
        Thu: { subject: "CN", color: "bg-[#e2eef2]" },
        Fri: { subject: "OS", color: "bg-[#fceedd]" }
    },
    {
        time: "2:00 - 3:00",
        Mon: { subject: "CN", color: "bg-[#e2eef2]" },
        Tue: { subject: "OS", color: "bg-[#fceedd]" },
        Wed: { subject: "SE", color: "bg-[#f6eed8]" },
        Thu: { subject: "DS", color: "bg-[#e2efe2]" },
        Fri: { subject: "DBMS", color: "bg-[#e5eaf8]" }
    }
    ];

    return (

        <div className="min-h-screen bg-[#f3f5f1] flex flex-col gap-5 px-4 pt-7 pb-20 sm:px-6 lg:px-8 lg:py-7">

            {/* Main Heading */}
            <section className="flex items-start justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-bold text-[#111c16]">
                        Timetable
                    </h1>
                    <p className="mt-1 text-sm text-[#849088]">
                        Your class schedule for the week
                    </p>
                </div>
            </section>

            {/* Timetable Container */}
            <div className="border border-[#edf0e9] rounded-lg bg-[#f3f5f1] shadow-lg md:bg-white p-3">
                {/* Days Header */}
                <div className="flex justify-between rounded-lg gap-2 md:gap-0 bg-[#f3f4ec]">
                    {/* Time Heading - Desktop Only */}
                    <div className="hidden md:flex justify-center items-center w-full pl-10 p-2 text-sm font-semibold text-[#77847d]">
                        Time
                    </div>
                    {/* Days */}
                    {Days.map((day) => (
                        <button key={day} onClick={() => setActiveTab(day)} className={`flex justify-center items-center w-full p-2 rounded-lg md:rounded-none text-sm font-semibold transition-colors
                            ${activeTab === day
                                ? 'bg-[#dce9df] text-[#344b3c] md:text-[#77847d] md:bg-transparent'
                                : 'bg-white text-[#77847d] md:bg-transparent'
                            }`}>
                            {day}
                        </button>
                    ))}
                </div>

                {/* DESKTOP TIMETABLE */}
                <div className="hidden md:block mt-3">
                    {timetableData.map((item, index) => (
                        <div key={index} className="border-b border-[#edf0e9] flex justify-between py-2 gap-2">
                            {/* Time */}
                            <div className="w-full flex items-center pl-10 text-sm font-semibold text-[#77847d]">
                                {item.time}
                            </div>
                            {/* Break */}
                            {item.isBreak ? (
                                <div className="w-full min-h-16 flex justify-center items-center rounded-lg bg-[#f3f4ec] font-semibold text-sm text-[#77847d]">
                                    Break
                                </div>
                            ) : (
                                /* Subjects for all days */
                                Days.map((day) => (
                                    <div key={day} className={`w-full min-h-16 flex justify-center items-center rounded-lg font-semibold text-sm ${item[day].color}`}>
                                        {item[day].subject}
                                    </div>
                                ))
                            )}
                        </div>
                    ))}
                </div>
                {/* MOBILE TIMETABLE */}
                <div className="rounded-lg bg-white md:hidden mt-3 px-5">
                    {timetableData.map((item, index) => {
                        const selectedDay = item[activeTab];
                        return (
                            <div key={index} className="border-b border-[#edf0e9] flex items-center gap-3 py-3">
                                {/* Time */}
                                <div className="shrink-0 text-xs font-semibold text-[#77847d] w-24">
                                    {item.time}
                                </div>
                                {/* Break */}
                                {item.isBreak ? (
                                    <div className="w-full flex justify-center items-center rounded-lg bg-[#f3f4ec] py-4 text-sm font-semibold text-[#77847d]">
                                        Break
                                    </div>
                                ) : (
                                    // Selected Day Subject 
                                    <div className={`w-full flex justify-center items-center rounded-lg py-4 text-sm font-semibold ${selectedDay.color}`}>
                                        {selectedDay.subject}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
'use client'

export default function AttendancePage() {

    const Overall_Attendance = {
        percentage: "82",
        status: "Good Standing",
        message: "You are meeting the required attendance criteria.",
    };

    const Attendance_Stats = [
        { title: "Classes Attended", mobileTitle: "Attended", value: "98", color: "text-[#111c16]" },
        { title: "Total Classes", mobileTitle: "Total", value: "120", color: "text-[#111c16]" },
        { title: "Classes Missed", mobileTitle: "Missed", value: "22", color: "text-[#b9382b]" },
    ];

    const Subject_Attendance = [
        { subject: "Data Structures", attended: 18, total: 20, percentage: "90%", status: "Good" },
        { subject: "Database Management", attended: 18, total: 20, percentage: "90%", status: "Good" },
        { subject: "Operating Systems", attended: 15, total: 20, percentage: "75%", status: "Risk" },
        { subject: "Computer Networks", attended: 17, total: 20, percentage: "85%", status: "Good" },
        { subject: "Software Engineering", attended: 18, total: 20, percentage: "90%", status: "Good" },
    ];

    const Table_Headings = ["Subject", "Attended", "Total", "Percentage", "Status"];

    return (
        <div className="min-h-screen bg-[#f3f5f1] flex flex-col gap-5  px-4 pt-7 pb-20 sm:px-6 lg:px-8 lg:py-7">

            {/* Heading */}
            <section className="flex items-start justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-bold text-[#111c16] sm:text-2xl">
                        Attendance
                    </h1>

                    <p className="mt-1 text-sm text-[#849088]">
                        Track your class attendance
                    </p>
                </div>

                <div className="flex shrink-0 items-center gap-6 rounded-lg border border-[#edf0e9] bg-white px-4 py-3 text-xs font-semibold text-[#2c4a8a] shadow-sm sm:gap-8">
                    <select defaultValue="Semester 5" className="sm:hidden">
                        <option>Semester 1</option>
                        <option>Semester 2</option>
                        <option>Semester 3</option>
                        <option>Semester 4</option>
                        <option>Semester 5</option>
                        <option>Semester 6</option></select>
                    <select defaultValue="Semester 5" className="hidden sm:inline">
                        <option>Semester 1</option>
                        <option>Semester 2</option>
                        <option>Semester 3</option>
                        <option>Semester 4</option>
                        <option>Semester 5</option>
                        <option>Semester 6</option>
                    </select>
                </div>
            </section>

            {/* Overall + Stats */}
            <section className="flex flex-col gap-3 lg:flex-row">

                {/* Overall Attendance */}
                <div className="min-w-0 rounded-xl border border-[#edf0e9] bg-white p-4 shadow-lg sm:p-5 lg:flex-1">
                    <p className="text-[11px] text-[#77847d] sm:text-xs">
                        Overall Attendance
                    </p>

                    <h2 className="mt-3 text-5xl font-bold leading-none text-[#111c16] sm:text-6xl">
                        {Overall_Attendance.percentage}%
                    </h2>

                    <div className="mt-5 flex w-fit items-center gap-1.5 rounded-full bg-[#d9eee3] px-2.5 py-1 text-[10px] font-semibold text-[#347653]">
                        <p className="size-1.5 rounded-full bg-[#37815d]" />
                        {Overall_Attendance.status}
                    </div>

                    <p className="mt-3 text-[11px] text-[#77847d] sm:text-xs">
                        {Overall_Attendance.message}
                    </p>
                </div>

                {/* Small Stat Cards */}
                <div className=" grid grid-cols-3 gap-3 lg:flex">
                    {Attendance_Stats.map((item) => {
                        return (
                            <div
                                key={item.title}
                                className="flex flex-col gap-2 rounded-xl border border-[#edf0e9] bg-white p-3 shadow-lg sm:min-h-30 sm:justify-between sm:gap-0 sm:p-5 lg:min-h-0 lg:w-35"
                            >
                                <p className="text-[11px] leading-4 text-[#77847d] sm:text-xs">
                                    <span className="sm:hidden">{item.mobileTitle}</span>
                                    <span className="hidden sm:inline">{item.title}</span>
                                </p>

                                <h3 className={`text-xl font-bold leading-none sm:text-2xl ${item.color}`}>
                                    {item.value}
                                </h3>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* Subject-wise Attendance */}
            <section className="min-w-0 rounded-xl border border-[#edf0e9] bg-white p-4 shadow-sm sm:p-5">
                <h2 className="text-base font-semibold text-[#17231b] sm:text-sm">
                    Subject-wise<span className="hidden sm:inline"> Attendance</span>
                </h2>

                <div className="mt-2 overflow-x-auto sm:mt-4">
                    <div>

                        {/* Table Head - desktop only */}
                        <div className=" hidden grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center rounded-lg bg-[#f3f5f1] px-3 py-3 sm:grid sm:px-4">
                            {Table_Headings.map((heading) => {
                                return (
                                    <p key={heading} className="borde text-[11px] font-semibold text-[#77847d] sm:text-xs">
                                        {heading}
                                    </p>
                                )
                            })}
                        </div>

                        {/* Table Rows */}
                        {Subject_Attendance.map((item, index) => {
                            return (
                                <div
                                    key={item.subject}
                                    className={`flex items-center justify-between gap-3 py-3 sm:grid sm:grid-cols-[2fr_1fr_1fr_1fr_1fr] sm:px-4 sm:py-4 ${index !== Subject_Attendance.length - 1 ? "border-b border-[#edf0e9]" : ""}`}
                                >
                                    <div className="min-w-0">
                                        <p className="text-sm font-semibold text-[#17231b] sm:text-[13px] sm:font-normal">{item.subject}</p>
                                        <p className="mt-1 text-[11px] text-[#849088] sm:hidden">{item.attended}/{item.total} classes</p>
                                    </div>

                                    <p className="hidden text-xs text-[#17231b] sm:block sm:text-[13px]">{item.attended}</p>
                                    <p className="hidden text-xs text-[#17231b] sm:block sm:text-[13px]">{item.total}</p>

                                    <div className="flex shrink-0 items-center gap-3 sm:contents">
                                        <p className="w-10 text-right text-sm font-bold text-[#111c16] sm:w-auto sm:text-left sm:text-[13px] sm:font-normal sm:text-[#17231b]">{item.percentage}</p>

                                        <div
                                            className={`border flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ${item.status === "Good" ? "bg-[#d9eee3] text-[#347653]" : "bg-[#f7a38f] text-red-700"}`}
                                        >
                                            <p className={`size-1.5 rounded-full ${item.status === "Good" ? "bg-[#37815d]" : "bg-red-700"}`} />
                                            {item.status}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

        </div>
    );
}
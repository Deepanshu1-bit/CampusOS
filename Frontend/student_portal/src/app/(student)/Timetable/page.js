

export default function Timetable() {

    const Days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    const Timing = ['9:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 1:00', '1:00 - 2:00', '2:00 - 3:00']
    const timetableData = [
        {
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
            {/*Main Heading */}
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

            {/* Timetable */}
            <div className="border rounded-lg bg-white md:p-3">
                {/* Days */}
                <div className="border bg-[#f3f4ec] flex justify-between rounded-lg">
                    <div className="border w-full sm:p-2 text-sm font-semibold text-[#77847d]">Time</div>
                    {Days.map((item, index) => {
                        return (
                            <div key={index} className="border w-full sm:p-2 text-sm font-semibold text-[#77847d]">{item}</div>
                        )
                    })}
                </div>
                <div className="border ">
                    {timetableData.map((item, index) => {
                        return (
                            <div key={index} className="border border-green-500 flex  justify-between">
                                <div className={`border border-red-500  flex w-full ${item.color}`}>{item.time}</div>
                                {Days.map((day, index) => {
                                    return (
                                        (item.subject === 'Break' ? <p key={index} className={`border w-full bg-[#f3f4ec]`}>{item.subject}</p>
                                            : <p key={index} className={`border w-full ${item[day].color}`}>{item[day].subject}</p>)
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
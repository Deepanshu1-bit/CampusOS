'use client'
import { useState } from "react"
import { ChevronDown } from 'lucide-react'



export default function Examination() {
    const filterSem = [
        {
            semester: 'Semester 1',
            subjectNum: '7 Subjects'
        },
        {
            semester: 'Semester 2',
            subjectNum: '7 Subjects'
        },
        {
            semester: 'Semester 3',
            subjectNum: '6 Subjects'
        },
        {
            semester: 'Semester 4',
            subjectNum: '6 Subjects'
        },
        {
            semester: 'Semester 5',
            subjectNum: '5 Subjects'
        },
        {
            semester: 'Semester 6',
            subjectNum: '5 Subjects'
        }
    ]

    const result = [
        {
            subjectName: 'Data Structure',
            marks: '85',
            grade: 'A Grade'
        },
        {
            subjectName: 'Database Management',
            marks: '78',
            grade: 'B Grade'
        },
        {
            subjectName: 'Operating Systems',
            marks: '88',
            grade: 'C Grade'
        },
        {
            subjectName: 'Computer Networks',
            marks: '76',
            grade: 'D Grade'
        },
        {
            subjectName: 'Software Engineering',
            marks: '82',
            grade: 'A Grade'
        },
    ]

    const upcomingExamHeading = ['Date', 'Subject', 'Time', 'Venue', 'Status']
    const upcomingExam = [
        {
            Date: '28 Apr 2026',
            Subject: 'Database Management',
            Time: '10:00 AM',
            Venue: 'Block A, Room 101',
            Status: 'Upcoming'
        },
        {
            Date: '2 May 2026',
            Subject: 'Operating Systems',
            Time: '02:00 AM',
            Venue: 'Block B, Room 213',
            Status: 'Upcoming'
        },
        {
            Date: '28 Apr 2026',
            Subject: 'Computer Networks',
            Time: '10:00 AM',
            Venue: 'Block A, Room 105',
            Status: 'Upcoming'
        },
    ]
    const [activeFilter, setActiveFilter] = useState('Semester 5')
    const [isOpen, setIsOpen] = useState(false)

    let average = 0

    function findAverage() {
        let totalMarks = 0
        for (let i = 0; i < result.length; i++) {
            totalMarks += Number(result[i].marks)
        }
        average = totalMarks / result.length
    }
    findAverage()

    return (
        <div className="min-h-screen bg-[#f3f5f1] flex flex-col gap-5 px-4 pt-7 pb-20 sm:px-6 lg:px-8 lg:py-7">
            <section className="flex items-start justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-bold text-[#111c16] sm:text-2xl">
                        Examination
                    </h1>

                    <p className="mt-1 text-sm text-[#849088]">
                        Your exam Schedule and results
                    </p>
                </div>

                {/* Filter Dropdown */}
                <div className="relative shrink-0">
                    <button onClick={() => { setIsOpen(!isOpen) }}
                        className="flex items-center gap-6 rounded-lg border border-white bg-white px-4 py-3 text-xs font-semibold text-[#17231b] shadow-sm sm:min-w-34 sm:justify-between">
                        <span className="text-black">{activeFilter}</span>
                        <ChevronDown size={14} className={`text-[#849088] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isOpen && (
                        <>
                            <div className="fixed inset-0 z-10" onClick={() => { setIsOpen(false) }}></div>

                            <div className="absolute right-0 top-full z-20 mt-2 w-35 rounded-lg border border-white bg-white shadow-lg">
                                {filterSem.map((item, index) => {
                                    return (
                                        <button key={index}
                                            onClick={() => { setActiveFilter(item.semester), setIsOpen(false) }}
                                            className={`block py-1 w-full px-7 hover:bg-[#f3f5f1] ${item.semester === activeFilter ? "bg-[#f3f5f1] font-semibold text-[#17231b]" : "font-medium text-[#77847d]"}`}>
                                            {item.semester}{console.log(activeFilter)}
                                        </button>
                                    )
                                })}
                            </div>
                        </>
                    )}
                </div>
            </section>
            {/* Heading */}
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-5">
                    <div className="flex justify-between">
                        <span>
                            <h2 className="font-bold text-2xl">Result</h2>
                            <p className="mt-1 text-xs text-[#849088]">{activeFilter} · {filterSem.find((item) => Object.values(item).includes(activeFilter))?.subjectNum} · Average {average}/100</p>
                        </span>
                    </div>
                    {/* Result Cards */}
                    <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-5 sm:gap-10">
                        {result.map((item, index) => {
                            return (<div key={index} className="bg-white flex flex-col p-5 rounded-xl shadow-xl">
                                <div className="font-semibold text-xs text-[#5c6a66] mb-5">
                                    {item.subjectName}
                                </div>
                                <div className="flex items-end">
                                    <p className="text-4xl font-bold">
                                        {item.marks}
                                    </p>
                                    <p className="text-[#849088] text-xs pb-1">/100</p>
                                </div>
                                <div className={`w-fit py-1 px-2 rounded-xl gap-1 flex justify-center items-center font-semibold text-xs mt-2 ${item.grade === 'A Grade' ? 'bg-[#cbf2de] text-[#347653]'
                                    : item.grade === 'B Grade' ? 'bg-[#fff0d5] text-[#a87522]'
                                        : item.grade === 'C Grade' ? 'bg-blue-300 text-blue-500'
                                            : 'bg-red-300 text-red-500'
                                    }`}>
                                    <p className="border-3 rounded-full" /> {item.grade}
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex justify-between">
                        <span>
                            <h2 className="font-bold text-2xl">Upcoming Exams</h2>
                            <p className="mt-1 text-xs text-[#849088]">{upcomingExam.length} Scheduled · Next on {upcomingExam[0].Date}</p>
                        </span>
                    </div>
                    {/* upcoming Exam Heading */}
                    <div className="bg-white p-2 sm:p-5 rounded flex flex-col gap-2 shadow-xl">
                        <h1 className="rounded-xl px-2 py-1 bg-[#f3f5f1] flex justify-between font-semibold text-[#5c6a66]">{upcomingExamHeading.map((item, index) => {
                            return (<span key={index} className="sm:flex sm:w-full sm:py-1">{item}</span>
                            )
                        })}</h1>
                        <div>
                            {upcomingExam.map((item, index) => {
                                return (
                                    <div key={index} className={`ml-2 flex justify-between ${index !== upcomingExam.length - 1 ? "border-b-2 border-[#edf0e9]" : ""}`}>
                                        <div className="flex w-full text-[#37453d] text-[10px] font-medium sm:text-sm py-2">{item.Date}</div>
                                        <div className="flex w-full text-[#37453d] text-[10px] font-medium sm:text-sm py-2">{item.Subject}</div>
                                        <div className="flex w-full text-[#37453d] text-[10px] font-medium sm:text-sm py-2">{item.Time}</div>
                                        <div className="flex w-full text-[#37453d] text-[10px] font-medium sm:text-sm py-2">{item.Venue}</div>
                                        <div className="flex justify-center items-center w-full text-[#37453d] text-[8px] font-medium sm:justify-start sm:text-sm sm:py-2">
                                            <p className="w-fit rounded-2xl px-2 py-1 text-blue-800 bg-blue-200">
                                                {item.Status}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
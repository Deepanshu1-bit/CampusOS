
'use client'
import { useState } from "react"




export default function Assignments() {

    const filters = ['All', 'Pending', 'Completed']
    const assignmentHeading = ['Title', 'Subject', 'Due Date', 'Status', 'Action']

    const assignmentData = [
        {
            title: 'Binary Tree Implementation',
            subject: 'Data Structures',
            date: '26 Apr 2026',
            status: 'Pending',
            action: 'view'
        },
        {
            title: 'ER Diagram Design',
            subject: 'Database Management',
            date: '28 Apr 2026',
            status: 'Pending',
            action: 'view'
        },
        {
            title: 'CPU Scheduling Report',
            subject: 'Operating Systems',
            date: '30 Apr 2026',
            status: 'Completed',
            action: 'view'
        },
        {
            title: 'Network Topology Analysis',
            subject: 'Computer Networks',
            date: '02 May 2026',
            status: 'Pending',
            action: 'view'
        },
        {
            title: 'SRS Document',
            subject: 'Software Engineering',
            date: '26 May 2026',
            status: 'Completed',
            action: 'view'
        },
        {
            title: 'Linked List Operations',
            subject: 'Data Structures',
            date: '05 May 2026',
            status: 'Pending',
            action: 'view'
        },
        {
            title: 'Normalization Worksheet',
            subject: 'Database Management',
            date: '08 May 2026',
            status: 'Completed',
            action: 'view'
        },
        {
            title: 'Deadlock Handling Report',
            subject: 'Operating Systems',
            date: '10 May 2026',
            status: 'Pending',
            action: 'view'
        },
        {
            title: 'Subnetting Practice',
            subject: 'Computer Networks',
            date: '12 May 2026',
            status: 'Completed',
            action: 'view'
        },
        {
            title: 'UML Diagrams',
            subject: 'Software Engineering',
            date: '15 May 2026',
            status: 'Pending',
            action: 'view'
        }
    ]
    const [activeTab, setActiveTab] = useState('All')
    const [filteredData, setFilteredData] = useState(assignmentData);

    function filterAssignmentData(tab) {
        const result = assignmentData.filter((item) => {
            return tab === 'All' || item.status === tab;
        });

        setFilteredData(result);
    }

    return (
        <div className="min-h-screen bg-[#f3f5f1] dark:bg-[#111c16] flex flex-col gap-5 px-4 pt-7 pb-20 sm:px-6 lg:px-8 lg:py-7">
            {/*Main Heading */}
            <section className="flex items-start justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-bold text-[#111c16] dark:text-[#f3f5f1]">
                        Assignments
                    </h1>

                    <p className="mt-1 text-sm text-[#849088] dark:text-[#aab8ae]">
                        Track and submit your assignments
                    </p>
                </div>
            </section>

            {/* Filter and assignment table */}
            <div className="flex flex-col gap-5">
                {/* Filter tabs */}
                <div className="flex gap-5">{filters.map((item, index) => {
                    return (
                        <span key={index} onClick={() => { setActiveTab(item), filterAssignmentData(item) }} className={`rounded-t-xl py-1 px-4 font-semibold text-sm md:text-base hover:border-b-[#A8C2B3] ${item === activeTab ? 'border-b-2 border-[#A8C2B3] bg-[#d4e7db] dark:bg-[#344b3b] shadow-xl text-[#17231b] dark:text-[#f3f5f1]' : 'border-b-2 border-white dark:border-[#34443a] bg-white dark:bg-[#1c2921] text-[#77847d] dark:text-[#aab8ae] hover:border-b-[#A8C2B3]'}`}>
                            {item}
                        </span>
                    )
                })}
                </div>
                {/* Assignments Table */}
                <div className="rounded-lg bg-white dark:bg-[#1c2921] border border-transparent dark:border-[#34443a] flex flex-col gap-3 h-100 md:p-5">
                    {/* Assignment Heading */}
                    <div className="hidden md:flex justify-between rounded-lg bg-[#f3f5f1] dark:bg-[#26352d]">
                        {assignmentHeading.map((item, index) => {
                            return (
                                <h1 key={index} className="flex-1 p-3 text-xs font-semibold text-[#77847d] dark:text-[#aab8ae]">
                                    {item}
                                </h1>
                            )
                        })}
                    </div>

                    {/* Assignment Data */}
                    <div className="bg-[#f3f5f1] dark:bg-[#26352d] md:bg-white md:dark:bg-[#1c2921] p-2 rounded-lg md:p-0 flex flex-col gap-2 md:gap-0 overflow-y-scroll scrollbar-none">
                        {filteredData.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`grid grid-cols-[1fr_auto] gap-x-2 gap-y-1 rounded-xl bg-white dark:bg-[#1c2921] p-3 sm:p-4 md:grid-cols-5 md:items-center md:rounded-none md:bg-transparent md:gap-2 md:px-3 ${index !== assignmentData.length - 1
                                        ? 'md:border-b md:border-[#edf0e9] md:dark:border-[#34443a]'
                                        : ''
                                        }`}>
                                    <div className="col-start-1 row-start-1 md:col-auto md:row-auto">
                                        <p className="text-xs font-semibold text-[#17231b] dark:text-[#f3f5f1] md:font-normal md:text-xs md:text-[#37453d] md:dark:text-[#d0dbd2]">
                                            {item.title}
                                        </p>
                                    </div>

                                    <div className="col-start-1 row-start-2 md:col-auto md:row-auto">
                                        <p className="text-[11px] text-[#849088] dark:text-[#aab8ae] md:text-xs md:text-[#37453d] md:dark:text-[#d0dbd2]">
                                            {item.subject}
                                        </p>
                                    </div>

                                    <div className="col-start-2 row-start-2 text-right md:col-auto md:row-auto md:text-left">
                                        <p className="text-[11px] text-[#849088] dark:text-[#aab8ae] md:text-xs md:text-[#37453d] md:dark:text-[#d0dbd2]">
                                            Due {item.date}
                                        </p>
                                    </div>

                                    <div className="col-start-2 row-start-1 flex justify-end md:col-auto md:row-auto md:justify-start">
                                        <p className={`w-fit flex items-center py-1 px-2 gap-1.5 rounded-full text-[10px] md:text-xs font-semibold ${item.status === 'Completed'
                                            ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300'
                                            : item.status === 'Pending'
                                                ? 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300'
                                                : 'bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-300'
                                            }`}>
                                            <span className={`size-1.5 rounded-full ${item.status === 'Completed'
                                                ? 'bg-emerald-500'
                                                : item.status === 'Pending'
                                                    ? 'bg-amber-500'
                                                    : 'bg-red-500'
                                                }`} />
                                            {item.status}
                                        </p>
                                    </div>

                                    <div className="hidden md:flex md:col-auto md:row-auto md:items-center">
                                        <p className="border border-[#b8d8c5] dark:border-[#486b53] bg-[#d9eee3] dark:bg-[#344b3b] text-[#347653] dark:text-[#b8e0c3] hover:bg-[#cde6d7] dark:hover:bg-[#405b47] transition-colors cursor-pointer flex py-1 px-3 rounded-lg text-xs font-semibold">
                                            {item.action}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
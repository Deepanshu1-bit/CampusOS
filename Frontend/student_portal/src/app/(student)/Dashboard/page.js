import Image from "next/image";
import {
  CalendarCheck,
  ClipboardList,
  FileText,
  Bell,
  ArrowUpRight,
  BookOpen,
  Volume2,
} from "lucide-react";
import Link from "next/link";

const dashboardCards = [
  {
    title: "Attendance",
    value: "82",
    suffix: "%",
    subtitle: "Attendance",
    icon: CalendarCheck,
    color: "bg-[#d9eee3] text-[#37815d]",
    route:'/Attendance'
  },
  {
    title: "Pending Assignments",
    value: "3",
    suffix: "",
    subtitle: "Pending Assignments",
    icon: ClipboardList,
    color: "bg-[#fff0d5] text-[#b47b20]",
    route:'/Assignments'
  },
  {
    title: "Upcoming Exams",
    value: "2",
    suffix: "",
    subtitle: "Upcoming Exams",
    icon: FileText,
    color: "bg-[#e9e1ff] text-[#8061d6]",
    route:'/Examination'
  },
  {
    title: "New Notices",
    value: "5",
    suffix: "",
    subtitle: "New Notices",
    icon: Bell,
    color: "bg-[#dce7ff] text-[#5378c5]",
    route:'/Notices'
  },
];

const upcomingItems = [
  {
    title: "Data Structures Assignment",
    date: "Due Apr 26, 2025",
    type: "Assignment",
    icon: BookOpen,
    color: "bg-[#d9eee3] text-[#37815d]",
    badge: "bg-[#d9eee3] text-[#347653]",
  },
  {
    title: "Database Management Exam",
    date: "Apr 28, 2025 · 10:00 AM",
    type: "Exam",
    icon: FileText,
    color: "bg-[#f1f3ed] text-[#26352d]",
    badge: "bg-[#ffe0dc] text-[#bd554b]",
  },
  {
    title: "College Cultural Fest",
    date: "Apr 30, 2025",
    type: "Notice",
    icon: Volume2,
    color: "bg-[#fff0d5] text-[#b47b20]",
    badge: "bg-[#fff0d5] text-[#a87522]",
  },
];

function DashboardCard({ item }) {
  const Icon = item.icon;

  return (
    <Link href={item.route}>
    <div className="border  border-[#edf0e9] rounded-xl  bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-start justify-between">
        <div className={`flex size-8 items-center justify-center rounded-lg ${item.color}`}>
          <Icon size={16} />
        </div>

        <ArrowUpRight size={15} className="text-[#b8c2bb]" />
      </div>

      <div className="mt-3">
        <h3 className="text-2xl font-bold leading-none text-[#111c16]">
          {item.value}
          <span className="text-base">{item.suffix}</span>
        </h3>

        <p className="mt-2 text-[11px] text-[#77847d]">
          {item.subtitle}
        </p>
      </div>
    </div>
    </Link>
  );
}

function UpcomingItem({ item, index }) {
  const Icon = item.icon;

  return (
    <div className={`flex items-center gap-3 py-3 ${index !== 2 ? "border-b border-[#edf0e9]" : ""}`}>
      <div className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${item.color}`}>
        <Icon size={15} />
      </div>

      <div className=" min-w-0 flex-1">
        <h4 className="truncate text-xs font-semibold text-[#17231b]">
          {item.title}
        </h4>

        <p className="mt-1 text-[10px] text-[#849088]">
          {item.date}
        </p>
      </div>

      <span className={`hidden shrink-0 rounded-full px-3 py-1 text-[9px] font-medium sm:block ${item.badge}`}>
        ● {item.type}
      </span>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className=" min-h-screen bg-[#f3f5f1] px-4 pt-7 pb-20 sm:px-6 lg:px-8 lg:py-7">

      {/* Greeting */}
      <section className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-[#111c16] sm:text-2xl">
            Good morning, Priya!
          </h1>

          <p className="mt-1 text-xs text-[#849088]">
            Keep going — great things take time.
          </p>
        </div>

        <p className="hidden pt-1 text-[10px] text-[#849088] sm:block">
          Thu, 24 Apr 2025
        </p>
      </section>

      {/* Dashboard Cards */}
      <section className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 xl:grid-cols-4">
        {dashboardCards.map((item) => (
          <DashboardCard key={item.title} item={item} />
        ))}
      </section>

      {/* Upcoming Section */}
      <section className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_250px]">

        {/* Upcoming List */}
        <div className="min-w-0 rounded-xl border border-[#edf0e9] bg-white p-4 shadow-sm sm:p-5">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-[#17231b]">
              Upcoming This Week
            </h2>

            <button className="text-[10px] font-medium text-[#66816d] hover:underline">
              View all
            </button>
          </div>

          <div>
            {upcomingItems.map((item, index) => (
              <UpcomingItem
                key={item.title}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Campus Image Card */}
        <div className="overflow-hidden rounded-xl bg-[#d6e8dc]">
          <div className=" relative h-40 w-full sm:h-48 xl:h-40">
            <Image
              src="/cllgimg.png"
              alt="College campus"
              fill
              sizes="(max-width: 1280px) 100vw, 250px"
              className="object-cover"
            />
          </div>

          <div className="px-5 py-4">
            <h2 className="max-w-[190px] text-lg font-semibold leading-6 text-[#17231b]">
              Small steps
              <br />
              every day lead
              <br />
              to big results.
            </h2>

            <div className="mt-3 h-0.5 w-5 bg-[#879b8d]" />
          </div>
        </div>

      </section>
    </div>
  );
}
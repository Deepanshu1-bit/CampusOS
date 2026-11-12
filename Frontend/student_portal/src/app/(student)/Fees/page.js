
import { FileText } from "lucide-react";

export default function FeesPage() {

  const Fee_Summary = [
    { title: "Total Fee Amount", mobileTitle: "Total Fee", amount: 120000, color: "text-[#111c16] dark:text-[#f3f5f1]" },
    { title: "Amount Paid", mobileTitle: "Paid", amount: 90000, color: "text-[#111c16] dark:text-[#f3f5f1]" },
    { title: "Pending Amount", mobileTitle: "Pending", amount: 30000, color: "text-[#b9382b] dark:text-[#ff8b80]" },
  ];

  const Payment_Status = {
    title: "Payment Status",
    mobileTitle: "Status",
    status: "Partially Paid",
    mobileStatus: "Partial",
  };

  const Payment_History = [
    { id: 1, date: "10 Jan 2025", description: "Semester Fee (Sem 3)", amount: 30000, status: "Paid" },
    { id: 2, date: "12 Aug 2024", description: "Semester Fee (Sem 2)", amount: 30000, status: "Paid" },
    { id: 3, date: "15 Jul 2024", description: "Admission Fee", amount: 30000, status: "Paid" },
  ];

  const Table_Headings = ["Date", "Description", "Amount", "Status", "Receipt"];

  return (
    <div className="min-h-screen bg-[#f3f5f1] dark:bg-[#111c16] flex flex-col gap-5 px-4 pt-7 pb-20 sm:px-6 lg:px-8 lg:py-7">

      {/* Heading */}
      <section className="flex items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-[#111c16] dark:text-[#f3f5f1] sm:text-2xl">
            Fees &amp; Payments
          </h1>

          <p className="mt-1 text-sm text-[#849088] dark:text-[#aab8ae]">
            Manage your fee payments<span className="hidden sm:inline"> and view history</span>
          </p>
        </div>

        <button className="flex shrink-0 cursor-pointer items-center justify-center rounded-lg bg-transparent p-1 text-[#849088] dark:text-[#aab8ae] sm:border-2 sm:border-[#e3e6df] dark:sm:border-[#34443a] sm:bg-white dark:sm:bg-[#1c2921] sm:px-4 sm:py-3 sm:text-xs sm:font-semibold sm:text-[#111c16] dark:sm:text-[#f3f5f1] sm:shadow-sm">
          <FileText size={20} className="sm:hidden" />
          <span className="hidden sm:inline">View Fee Structure</span>
        </button>
      </section>

      {/* Fee Summary Cards */}
      <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {Fee_Summary.map((item) => {
          return (
            <div
              key={item.title}
              className="rounded-xl border border-[#edf0e9] dark:border-[#34443a] bg-white dark:bg-[#1c2921] p-4 shadow-xl sm:p-5"
            >
              <p className="text-[11px] text-[#77847d] dark:text-[#aab8ae] sm:text-xs">
                <span className="sm:hidden">{item.mobileTitle}</span>
                <span className="hidden sm:inline">{item.title}</span>
              </p>

              <h3 className={`mt-3 text-xl font-bold leading-none sm:text-2xl ${item.color}`}>
                ₹ {item.amount.toLocaleString("en-IN")}
              </h3>
            </div>
          )
        })}

        {/* Payment Status Card */}
        <div className="rounded-xl border border-[#edf0e9] dark:border-[#34443a] bg-white dark:bg-[#1c2921] p-4 shadow-xl sm:p-5">
          <p className="text-[11px] text-[#77847d] dark:text-[#aab8ae] sm:text-xs">
            <span className="sm:hidden">{Payment_Status.mobileTitle}</span>
            <span className="hidden sm:inline">{Payment_Status.title}</span>
          </p>

          <div className="mt-3 flex w-fit items-center gap-1.5 rounded-full bg-[#fff0d5] dark:bg-[#55452b] px-2.5 py-1 text-[10px] font-semibold text-[#a87522] dark:text-[#f2cf8d] sm:py-1.5">
            <p className="size-1.5 rounded-full bg-[#b47b20] dark:bg-[#e6b95f]" />
            <span className="sm:hidden">{Payment_Status.mobileStatus}</span>
            <span className="hidden sm:inline">{Payment_Status.status}</span>
          </div>
        </div>
      </section>

      {/* Payment History */}
      <section className="min-w-0 rounded-xl border border-[#edf0e9] dark:border-[#34443a] bg-white dark:bg-[#1c2921] p-4 shadow-xl sm:p-5">
        <h2 className="text-base font-semibold text-[#17231b] dark:text-[#f3f5f1] sm:text-sm">
          Payment History
        </h2>

        <div className="mt-2 overflow-x-auto sm:mt-4">
          <div className="borde">

            {/* Table Head - desktop only */}
            <div className="hidden grid-cols-[1fr_1.5fr_1fr_1fr_1fr] items-center rounded-lg bg-[#f3f5f1] dark:bg-[#26352d] px-3 py-3 sm:grid sm:px-4">
              {Table_Headings.map((heading) => {
                return (
                  <p key={heading} className="text-[11px] font-semibold text-[#77847d] dark:text-[#aab8ae] sm:text-sm">
                    {heading}
                  </p>
                )
              })}
            </div>

            {/* Table Rows */}
            {Payment_History.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`flex items-center justify-between gap-3 py-3 sm:grid sm:grid-cols-[1fr_1.5fr_1fr_1fr_1fr] sm:px-4 sm:py-4 ${index !== Payment_History.length - 1 ? "border-b border-[#edf0e9] dark:border-[#34443a]" : ""}`}
                >
                  {/* Date - desktop */}
                  <p className="hidden text-xs text-[#17231b] dark:text-[#f3f5f1] sm:block sm:text-[13px]">{item.date}</p>

                  {/* Description (+ date on mobile) */}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#17231b] dark:text-[#f3f5f1] sm:text-[13px] sm:font-normal">{item.description}</p>
                    <p className="mt-1 text-[11px] text-[#849088] dark:text-[#aab8ae] sm:hidden">{item.date}</p>
                  </div>

                  {/* Amount + Status */}
                  <div className="flex shrink-0 flex-col items-end gap-1.5 sm:contents">
                    <p className="text-base font-medium text-[#17231b] dark:text-[#f3f5f1] sm:text-[13px] sm:font-normal">
                      ₹ {item.amount.toLocaleString("en-IN")}
                    </p>

                    <div
                      className={`flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ${item.status === "Paid" ? "bg-[#d9eee3] text-[#347653] dark:bg-[#344b3b] dark:text-[#b8e0c3]" : "bg-[#fff0d5] text-[#a87522] dark:bg-[#55452b] dark:text-[#f2cf8d]"}`}
                    >
                      <p className={`size-1.5 rounded-full ${item.status === "Paid" ? "bg-[#37815d] dark:bg-[#80c99a]" : "bg-[#b47b20] dark:bg-[#e6b95f]"}`} />
                      {item.status}
                    </div>
                  </div>

                  {/* Receipt - desktop */}
                  <button className="hidden w-fit rounded-md bg-[#d9eee3] dark:bg-[#344b3b] px-3 py-1.5 text-[10px] font-semibold text-[#347653] dark:text-[#b8e0c3] transition-colors cursor-pointer hover:bg-[#cde6d7] dark:hover:bg-[#405b48] sm:block">
                    View
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

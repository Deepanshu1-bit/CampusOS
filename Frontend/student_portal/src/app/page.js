import Image from "next/image";
import { GraduationCap, User, Lock, Eye } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#e2e7e1] p-0 sm:p-4 lg:p-6">

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col overflow-hidden bg-white shadow-2xl sm:rounded-lg md:min-h-0 lg:flex-row">

        {/* LEFT PANEL */}
        <section className="flex w-full flex-col bg-[#ced8ca] lg:w-1/2">

          {/* Branding and heading */}
          <div className="px-6 pt-8 sm:px-10 sm:pt-10 md:px-12 md:pt-12 lg:px-[12%] lg:pt-12 xl:pt-15">

            <h1 className="mb-8 flex items-center gap-2 text-2xl font-bold text-black sm:mb-10 sm:gap-3 sm:text-[28px] md:mb-12 lg:mb-10 lg:text-[30px] xl:text-[32px]">
              <GraduationCap
                size={36}
                color="#111111"
                fill="#111111"
                className="shrink-0 sm:size-10"
              />
              CampusOS
            </h1>

            <h2 className="mb-3 text-xl font-bold leading-tight text-black sm:text-2xl md:text-[26px] xl:text-[27px]">
              Your College Journey
              <br />
              All in One Place
            </h2>

            <p className="text-sm text-[#687568]">
              Learn. Grow. Belong.
            </p>
          </div>

          {/* College image */}
          <div className="relative mt-6 h-45 w-full sm:mt-8 sm:h-55 md:h-65 lg:mt-6 lg:h-50 xl:h-55">

            <Image
              src="/cllgimg.png"
              alt="College campus"
              width={900}
              height={400}
              priority
              className="h-full w-full object-cover object-center"
            />

            {/* Image top shadow */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-12 sm:h-14"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(110, 150, 105, 0.52), transparent)",
              }}
            />
          </div>

          {/* Bottom message - desktop only */}
          <div className="hidden flex-1 items-start bg-[#9eaf96] px-6 py-8 sm:px-10 sm:py-10 md:px-12 lg:flex lg:px-[12%] lg:py-10 xl:py-12">

            <p className="text-lg font-bold leading-7 text-white sm:text-xl sm:leading-8">
              A brighter tomorrow
              <br />
              starts here.
            </p>
          </div>
        </section>

        {/* RIGHT PANEL */}
        <section className="relative z-10 -mt-5 w-full rounded-t-[28px] border border-[#edf0ed] bg-white px-6 py-9 shadow-[0_-8px_25px_rgba(50,70,50,0.08)] sm:-mt-6 sm:rounded-t-4xl sm:px-10 sm:py-12 md:px-12 lg:mt-0 lg:w-1/2 lg:rounded-none lg:border-0 lg:px-8 lg:py-12 lg:shadow-none xl:px-[5.5%] xl:pt-[70px]">

          {/* Heading */}
          <div>
            <h2 className="text-[28px] font-bold leading-tight text-black sm:text-[30px] xl:text-[34px]">
              Welcome Back
            </h2>

            <p className="mt-2 text-sm text-[#777777]">
              Sign in to access your student portal.
            </p>
          </div>

          {/* Login form */}
          <form method="post" className="mt-8 flex flex-col sm:mt-10 xl:mt-11">

            {/* Student ID */}
            <label
              htmlFor="studentId"
              className="mb-3 flex items-center gap-2 text-xs text-[#333333] sm:mb-4"
            >
              <User size={13} color="#a3afb3" />
              Student ID
            </label>

            <div className="border flex h-12 w-full items-center gap-3 rounded-lg  border-[#e5e9e8] px-3 shadow-sm transition-colors focus-within:border-[#8ba18a] sm:h-[54px] sm:px-4">

              <User size={16} color="#a3afb3" className="shrink-0" />

              <input
                id="studentId"
                name="studentId"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Enter your student ID"
                autoComplete="username"
                required
                className="h-full min-w-0 w-full bg-transparent text-[13px] text-black outline-none placeholder:text-[#9aa4ad]"
              />
            </div>

            {/* Password */}
            <label
              htmlFor="password"
              className="mb-3 mt-5 flex items-center gap-2 text-xs text-[#333333] sm:mb-4"
            >
              <Lock size={13} color="#a3afb3" />
              Password
            </label>

            <div className="flex h-12 w-full items-center gap-3 rounded-lg border border-[#e5e9e8] px-3 shadow-sm transition-colors focus-within:border-[#8ba18a] sm:h-[54px] sm:px-4">

              <Lock size={16} color="#a3afb3" className="shrink-0" />

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className="h-full min-w-0 w-full bg-transparent text-[13px] text-black outline-none placeholder:text-[#9aa4ad]"
              />

              <Eye
                size={16}
                color="#9aa4ad"
                className="shrink-0 cursor-pointer"
              />
            </div>

            {/* Remember me and forgot password */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs">

              <label className="flex cursor-pointer items-center gap-2 text-[#666666]">
                <input
                  type="checkbox"
                  name="rememberMe"
                  className="size-4 accent-[#819b80]"
                />
                Remember me
              </label>

              <a
                href="/forgotPass"
                className="text-[#64816b] hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Sign In button */}
            <Link href={'/Dashboard'}
              className="mt-8 h-12 w-full flex justify-center items-center rounded-lg bg-[#819b80] text-sm font-bold text-white transition-colors hover:bg-[#718b70] sm:mt-10 sm:h-14"
            >
              Sign In
            </Link>
          </form>

          {/* Bottom message */}
          <p className="mt-7 text-center text-xs leading-6 text-[#777777] sm:mt-8">
            <span className="font-medium text-[#444444]">
              New to CampusHub?
            </span>{" "}
            <a
              href="/contact"
              className="text-[#64816b] hover:underline"
            >
              Contact your institution
            </a>
          </p>
        </section>

      </div>
    </main>
  );
}

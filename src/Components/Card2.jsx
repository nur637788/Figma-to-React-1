import React from "react";

function Card2() {
  return (
    <section className="px-6 lg:px-20 py-16 bg-gradient-to-b bg-white via-blue-50 from-white">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-[28px] md:text-[40px] font-bold">
          Build for Everyone
        </h1>
        <p className="text-gray-500 mt-4 text-[15px] md:text-[18px]">
          Whether you're booking services, managing tasks, or running operations,
          we've designed the perfect experience for you.
        </p>
      </div>

      {/* Card 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-20">
        <div className="space-y-5">
          <h3 className="inline-block px-4 py-1 rounded-full text-green-500 border border-green-400 text-sm md:text-base">
            Users
          </h3>
          <h2 className="text-[22px] md:text-[26px] font-bold leading-snug">
            Book services, track progress <br /> and stay updated
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-500 max-w-md">
            Easily schedule appointments, get real-time updates, and enjoy a
            smooth, transparent service experience.
          </p>
          <div className="space-y-2">
            <h5 className="border-l-2 border-green-300 pl-3">
              Book services in seconds
            </h5>
            <h5 className="border-l-2 border-green-200 pl-3">
              Track real-time job updates
            </h5>
            <h5 className="border-l-2 border-green-100 pl-3">
              Schedule appointments at your convenience
            </h5>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/card2/phone 1.png"
            alt="user phone app"
            className="w-full max-w-sm md:max-w-md h-auto"
          />
        </div>
      </div>

      {/* Card 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-20">
        <div className="flex justify-center order-1 md:order-none">
          <img
            src="/card2/phone 2.png"
            alt="Business owners"
            className="w-full max-w-sm md:max-w-md h-auto"
          />
        </div>
        <div className="space-y-5">
          <h3 className="inline-block px-4 py-1 rounded-full text-green-500 border border-green-400 text-sm md:text-base">
            Business Owners
          </h3>
          <h2 className="text-[22px] md:text-[26px] font-bold leading-snug">
            Assign jobs, monitor performance, <br /> and streamline operations
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-500 max-w-md">
            Gain full control of your workforce with real-time tracking, smart
            scheduling, and service management in one app.
          </p>
          <div className="space-y-2">
            <h5 className="border-l-2 border-green-300 pl-3">
              Assign jobs to the right team member
            </h5>
            <h5 className="border-l-2 border-green-200 pl-3">
              Monitor performance in real time
            </h5>
            <h5 className="border-l-2 border-green-100 pl-3">
              Manage clients and services seamlessly
            </h5>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-20">
        <div className="space-y-5">
          <h3 className="inline-block px-4 py-1 rounded-full text-green-500 border border-green-400 text-sm md:text-base">
            Employees
          </h3>
          <h2 className="text-[22px] md:text-[26px] font-bold leading-snug">
            See tasks, track time, and navigate <br /> routes with ease
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-500 max-w-md">
            Everything you need to manage your workday from job assignments to
            optimized routes and time logging.
          </p>
          <div className="space-y-2">
            <h5 className="border-l-2 border-green-300 pl-3">
              Assign jobs to the right team member
            </h5>
            <h5 className="border-l-2 border-green-200 pl-3">
              Monitor performance in real time
            </h5>
            <h5 className="border-l-2 border-green-100 pl-3">
              Manage clients and services seamlessly
            </h5>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/card2/phone 1.png"
            alt="Employees App"
            className="w-full max-w-sm md:max-w-md h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Card2;

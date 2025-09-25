import React from "react";

const Card1 = () => {
  return (
    <section className="py-16 bg-white m-auto">
      <div className=" md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Card 1 */}
          <div className="w-60 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 m-auto">
            <div className="p-3 rounded-lg bg-green-50">
              <img src="/hero img/icon 1.png" alt="Easy Service Booking" className="card icon 1" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Easy Service Booking
            </h3>
            <p className="text-sm text-gray-600 leading-snug">
              Streamlined booking process for clients with service catalogs and availability.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-60 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 m-auto">
            <div className="p-3 rounded-lg bg-green-50">
              <img src="/hero img/icon 2.png" alt="Real-Time Tracking" className=" card icon 2" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Real-Time Tracking
            </h3>
            <p className="text-sm text-gray-600 leading-snug">
          Monitor job progress, employee hours, and project timelines with live updates.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-60  flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 m-auto">
            <div className="p-3 rounded-lg bg-green-50">
              <img src="/hero img/icon 3.png" alt="Performance Analytics" className="card icon 3" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Performance Analytics
            </h3>
            <p className="text-sm text-gray-600 leading-snug">
              Comprehensive reporting and insights to improve business operations and efficiency.
            </p>
          </div>

          {/* Cadr 4 */}
          <div className="w-60 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 m-auto">
            <div className="p-3 rounded-lg bg-green-50">
              <img src="/hero img/icon 4.png" alt="Secure & Reliable" className="card icon 4" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Secure & Reliable
            </h3>
            <p className="text-sm text-gray-600 leading-snug">
              Enterprise-grade security with 99.9% uptime guarantee and data protection.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Card1;

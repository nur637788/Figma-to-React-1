import React from "react";

function Hero() {
  return (
    <section className="px-6 lg:px-20 py-12 bg-gradient-to-l bg-green-50 via-white from-white">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between">
        
        <div className="max-w-xl space-y-6 m-auto">
          <h1 className="md:w-[665px]  text-4xl sm:text-5xl lg:text-[82px] font-bold md:leading-[80px] relative z-50">
            <img className="absolute ml-[80px] -mt-[50px] md:ml-[120px] md:mb-[10px] lg:ml-[250px] lg:-mt-[40px]" src="/hero img/text img.png" alt="home style image" />
            All Your Jobs One Smart App
            <img className="absolute lg:ml-[150px] lg:-mt-[3px]" src="hero img/line 1.png" alt="home line image" />
          </h1>
          <p className="text-gray-600 text-base sm:text-lg w-[300px] md:w-[600px]">
            Built for business owners, employees, and clients to streamline job
            scheduling, service tracking, and team management in one powerful app.</p>


          <div className="flex flex-wrap gap-4 pt-8">
            {/* App Store */}
            <div className="flex items-center gap-3 border rounded-lg px-4 py-2 w-[140px] sm:w-[160px] hover:shadow-md transition">
              <img
                className="w-6 h-7"
                src="/hero img/apple1.png"alt="App Store" />
              <div className="-space-y-1">
                <h5 className="text-[6px] md:text-[10px]">Download on the</h5>
                <h3 className="text-sm sm:text-base font-semibold">
                  App Store</h3>
              </div>
            </div>

            {/* Google Play */}
            <div className="flex items-center gap-3 border rounded-lg px-4 py-2 w-[160px] sm:w-[180px] hover:shadow-md transition">
              <img
                className="w-6 h-7"
                src="/hero img/Playstore.png"
                alt="Google Play"
              />
              <div className="-space-y-1">
                <h5 className="text-[6px] md:text-[10px] ">Download on the</h5>
                <h3 className="text-sm sm:text-base font-semibold">
                  Google Play
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 lg:mt-0 lg:w-[600px] xl:w-[720px]">
          <img
            src="/hero img/phone.png"
            alt="phone app"
            className="w-full max-w-md lg:max-w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

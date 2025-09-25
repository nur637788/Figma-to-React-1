import React from 'react'

function Footer() {
  return (
    <section className='bg-green-950 relative z-50'>
<img className='w-60 md:w-60 lg:w-80  absolute opacity-20 top-40 md:top-5 ml-10 md:ml-70 lg:ml-120' src="/footer/vector 1.png" alt="Footer BG image" />

{/* <img className='w-60 md:w-60 lg:w-80  absolute opacity-10 top-20 md:top-5 ml-59 md:ml-140 lg:ml-220' src="/footer/vector 2.png" alt="" /> */}

      <footer className='mx-6 md:mx-20 py-20 text-white'>
        <div className='grid grid-cols-2 md:grid-cols-3 justify-around gap-8'>

          {/* Logo + Social */}
          <div className=''>
            <img src="/footer/logo.png" alt="Footer Logo" />  
  
            <div className='flex gap-[22px] md:gap-[32px] mt-20'>
              <img src="/footer/youtub.png" alt="youtube logo" />
              <img src="/footer/twitter.png" alt="twitter logo" />
              <img src="/footer/facebook.png" alt="facebook logo" />
              <img src="/footer/instagram.png" alt="instagram logo" />
            </div>
          </div>

          {/* About */}
          <div className='text-gray-300'>
            <p>
              Your all-in-one platform for job scheduling, employee management, and client service built to keep your business running smoothly from anywhere.
            </p>
          </div>


          <div className='grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-35 md:gap-5'>
            {/* App Store */}
            <div className="flex items-center gap-3 border rounded-lg py-2 px-4 w-[140px] sm:w-[160px] md:h-12">
              <img className="" src="/footer/apple.png" alt="App Store" />
              <div className="-space-y-1">
                <h5 className="text-[6px] md:text-[10px] text-gray-300">Download on the</h5>
                <h3 className="text-sm sm:text-base font-semibold">App Store</h3>
              </div>
            </div>

            {/* Google Play */}
            <div className="flex items-center gap-3 border rounded-lg py-2 px-4 w-[160px] sm:w-[180px] md:h-12">
              <img className="" src="/footer/Playstore.png" alt="Google Play" />
              <div className="-space-y-1">
                <h5 className="text-[6px] md:text-[10px] text-gray-300">Download on the</h5>
                <h3 className="text-sm sm:text-base font-semibold">Google Play</h3>
              </div>
            </div>
          </div>

        </div>
      </footer>

      <hr className='border-gray-500'/>
      <div className='text-center text-gray-400 py-1'>
        <p>© 2021-2025, ScapeSync. All Rights Reserved.</p>
      </div>
    </section>
  )
}

export default Footer;

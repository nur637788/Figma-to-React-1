import React from 'react'

function Qusin() {
  return (
    <section>
        <div className='px-6 md:px-[200px]'>
            <div className='text-center'>
            <h1 className='text-[35px] md:text-[48px] font-bold'>Frequently Asked Questions</h1>
            <h3 className='text-gray-500 m-auto text-[15px] md:text-[14px] md:w-[400px]'>Quick answers to help you get the most out of our app.</h3>

                <div className='space-y-[16px] my-15'> 
                <div className='border border-green-200 rounded-[16px] pb-3'>
                    <div className='flex justify-between py-5 px-5'>
                        <h2 className='font-semibold text-[16px]'>Is the app free to use?</h2>
                        <button>_</button>
                    </div>
                    <p className='text-[14px]'>Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.</p>
                </div>
                <div className='flex justify-between py-5 px-5 border border-green-200 rounded-[16px]'>
                        <h2 className='font-semibold text-[16px]'>Can I assign multiple employees to one job?</h2>
                        <button>+</button>
                    </div>
                    <div className='flex justify-between py-5 px-5 border border-green-200 rounded-[16px]'>
                        <h2 className='font-semibold text-[16px]'>Does it work on both mobile and desktop?</h2>
                        <button>+</button>
                    </div>
                    <div  className='flex justify-between py-5 px-5 border border-green-200 rounded-[16px]'>
                        <h2></h2>
                        <button>+</button>
                    </div>
                </div>

        </div>
        </div>
    </section>
  )
}

export default Qusin

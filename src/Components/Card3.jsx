import React from 'react'

function Card3() {
  return (
    <section className='mx-5 md:mx-20 mt-10 mb-20'>

        <div className='text-center'>
            <h1 className='text-[35px] md:text-[48px] font-bold'>What Our Users Are Saying</h1>
            <h3 className='text-gray-500 m-auto text-[15px] md:text-[14px] md:w-[400px]'>Real stories from clients, employees, and business owners who use our app every day.</h3>
        </div>
        {/* Card 1 */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-15 '>
            <div className='w-[330px] h-[208px] bg-gray-50 rounded-xl p-5 m-auto'>
            <div className='flex gap-3'>
                <img className='w-[48px] h-[48px] rounded-full' src="/card3/image 1.png" alt="card image-1" />
                <div>
                    <h2 className='font-bold text-[16px]'>Farzana H.</h2>
                    <h3 className='text-gray-600'>Owner, CleanPro Services</h3>
                </div>
            </div>
            <p className='mt-5 text-gray-600'>This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.</p>
        </div>
        {/* Card 2 */}
        <div className='w-[330px] h-[208px] bg-gray-50 rounded-xl p-5 m-auto'>
            <div className='flex gap-3'>
                <img className='w-[48px] h-[48px] rounded-full' src="/card3/image 2.png" alt="card image-2" />
                <div>
                    <h2 className='font-bold text-[16px]'>Ahmed R.</h2>
                    <h3 className='text-gray-600'>Technician</h3>
                </div>
            </div>
            <p className='mt-5 text-gray-600'>I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.</p>
        </div>

        {/* Card 3 */}
        <div className='w-[330px] h-[208px] bg-gray-50 rounded-xl p-5 m-auto'>
            <div className='flex gap-3'>
                <img className='w-[48px] h-[48px] rounded-full' src="/card3/image 3.png" alt="card image-3" />
                <div>
                    <h2 className='font-bold text-[16px]'>Farzana H.</h2>
                    <h3 className='text-gray-600'>Rafiq M., Homeowner</h3>
                </div>
            </div>
            <p className='mt-5 text-gray-600'>As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.</p>
        </div>
        </div>
    </section>
  )
}

export default Card3

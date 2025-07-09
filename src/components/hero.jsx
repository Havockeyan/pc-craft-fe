import React from 'react'
import pc from '../assets/pc_img-removebg-preview.png'


const Hero = () => {
  return (
    <>
    <section className='min-h-[80vh] flex flex-col-reverse md:flex-row items-center px-20 py-16'>
    {/* Left: Text Section */}
    <div className="flex-1 text-center md:text-left opacity-0 animate-fade-in-left animation-delay-1050">

   
    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
  Build your{' '}
  <span className="text-orange-500 hover:text-orange-700 transition duration-300 cursor-pointer">
    Dream PC
  </span>
</h1>

        <p className='text-gray-300 mb-6'>
        Customize high-performance machines tailored to your needs with the best components.
        </p>
        <button className="bg-orange-500 hover:bg-orange-700 transition 
                           px-6 py-2 rounded-lg text-sm font-semibold">Start Building</button>

        </div>
        {/* Right PC Image */}
        <div className='flex-1 mb-10 md:mb-0 opacity-0 animate-fade-in-right animation-delay-1050'>
          <img src={pc} alt='pc' className='w-full max-w-md mx-auto drop-shadow-[0_0_40px_rgba(26,34,206,0.4)]'/>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-900/10 to-purple-800/20 pointer-events-none z-[-1]" />
        </div>
        

      </section>  
        </>
  )
}

export default Hero
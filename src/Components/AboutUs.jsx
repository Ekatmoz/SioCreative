import React from 'react';
import bg from '../assets/background-features.webp';
import company from '../assets/programer.jpg';

const AboutUs = () => {
  return (
    <section id='about' className='relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32'>
      <img
        alt=''
        loading='lazy'
        className='absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2'
        src={bg}
      />
      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl font-semibold mb-6 text-center text-white'>
          Everything you need to know about us/Rólunk
        </h2>
        <div className='flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-12'>
          <div className='mt-10 md:w-5/12 lg:w-5/12 flex justify-center w-full overflow-hidden rounded-xl'>
            <img src={company} alt='about_us' className='object-contain' />
          </div>
          <div className='md:w-7/12 lg:w-6/12 overflow-hidden rounded-xl shadow-xl shadow-blue-900/20 lg:mt-0 p-8'>
            <p className='max-w-2xl mx-auto mb-6 text-center text-white md:text-left'>
              A SioCreativeIT az egyedi webes megoldások szakértője. Tapasztalatunkkal és szakértelmünkkel segítjük
              vállalkozását online növekedni.
            </p>
            <p className='max-w-2xl mx-auto text-center text-white md:text-left'>
              Küldetésünk: személyre szabott, kreatív webes élményeket nyújtani, amelyek nemcsak hatékonyak, de egyedivé
              is teszik ügyfeleinket a versenytársak között.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

import hero from './../assets/hero.png';
// border-neutral-900
const Hero = () => {
  return (
    <div className='relative isolate px-6 pt-20 sm:pt-24 lg:pt-32 lg:px-8'>
      <div className=' pb-4 lg:mb-35'>
        <div
          aria-hidden='true'
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        >
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className='flex flex-wrap'>
          <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
              <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>WEBOLDALAKAT KÉSZÍTÜNK</h1>
              <span className='bg-gradient-to-r from-purple-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                Emelje vállalatát a következő szintre!
              </span>
              <p className='my-2 max-w-xl py-6'>
                Felhasználóközpontú, üzleti célú weboldalakat tervezünk, amelyek kiemelik márkáját és növelik bevételeit
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
              <img src={hero} alt="Company" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

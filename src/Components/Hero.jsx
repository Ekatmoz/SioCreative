import hero from './../assets/hero.png';
// border-neutral-900
//text-blue-600
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
              <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                WEBOLDALAKAT{' '}
                <span className='relative whitespace-nowrap'>
                  <svg
                    aria-hidden='true'
                    viewBox='0 0 418 42'
                    className='absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70'
                    preserveAspectRatio='none'
                  >
                    <path d='M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z'></path>
                  </svg>
                  <span className='relative'>KÉSZÍTÜNK</span>
                </span>
              </h1>
              <span className=' bg-gradient-to-r from-purple-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                Emelje vállalatát a következő szintre!
              </span>
              <p className='my-2 max-w-xl py-6'>
                Felhasználóközpontú, üzleti célú weboldalakat tervezünk, amelyek kiemelik márkáját és növelik bevételeit
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
              <img src={hero} alt='Company' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

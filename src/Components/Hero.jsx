import hero from './../assets/hero.png';

const Hero = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      {/* Top Decorative Blur */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-6xl py-24 sm:py-24 lg:py-32 flex flex-col sm:flex-row gap-y-12 sm:gap-y-0">
        {/* Left Text Section */}
        <div className="text-center basis-1/2">
        <h1>WEBOLDALAKAT KÉSZÍTÜNK</h1>
          <h2 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Emelje vállalatát a következő szintre!
          </h2>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Felhasználóközpontú, üzleti célú weboldalakat tervezünk, amelyek kiemelik márkáját és növelik bevételeit
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
            >
              Ingyenes konzultáció
            </a>
            <a href="#about" className="text-sm/6 font-semibold text-gray-900">
              Rólunk <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="basis-1/2">
          <img src={hero} alt="Hero image" className="w-full transform -translate-y-16" />
        </div>
      </div>

      {/* Bottom Decorative Blur */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
};

export default Hero;

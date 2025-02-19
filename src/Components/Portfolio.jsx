import bg from '../assets/background-features.webp';
import szikviz from '../assets/szikviz.png';
import sushi from '../assets/sushi.png';
import shop from '../assets/shop.png';
import beer from '../assets/beer.jpg';
import remont from '../assets/remont.png';

const Portfolio = () => {
  const images = [
    {
      src: shop,
      alt: 'Image 1',
    },
    {
      src: sushi,
      alt: 'Image 2',
    },
    {
      src: beer,
      alt: 'Image 3',
    },
    {
      src: szikviz,
      alt: 'Image 4',
    },
    {
      src: remont,
      alt: 'Image 5',
    },
  ];

  return (
    <section id='projects' className='relative overflow-hidden bg-blue-600 py-32'>
      <img
        alt='projects'
        loading='lazy'
        width='2347'
        height='1244'
        decoding='async'
        className='absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2'
        style={{ color: 'transparent' }}
        src={bg}
      />
      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg text-center'>
          <h2 className='font-display text-3xl tracking-tight text-white sm:text-4xl'>Ne várj tovább – kezdj bele az új weboldaladba még ma!</h2>
          <p className='mt-4 text-lg tracking-tight text-white'>
            Tekintse meg legújabb projektjeinket, és nézze meg, mit tehetünk Önért!
          </p>
        </div>
      </div>
      <div className='flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 ${
              index % 2 === 0 ? 'rotate-2' : '-rotate-2'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              layout='fill'
              className='absolute inset-0 h-full w-full object-cover'
              sizes='(min-width: 640px) 18rem, 11rem'
              priority="true"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

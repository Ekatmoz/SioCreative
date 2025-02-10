import bg from '../assets/background-features.webp';

const New = () => {
  const images = [
    { src: "https://img.freepik.com/free-photo/online-ticket-booking_53876-65475.jpg?t=st=1739203609~exp=1739207209~hmac=b24083df8db40cc23d88e1fc4b4ca045692fc6d52b3bf79fe9b0b194904ab825&w=1480", alt: "Image 1" },
    { src: "https://img.freepik.com/free-photo/web-design-online-technology-content-concept_53876-123927.jpg?t=st=1739203649~exp=1739207249~hmac=9ceb096b36ee08af2e2c209717d11c0dcb316ce8d93a284143c8c4306f9d2d6e&w=1480", alt: "Image 2" },
    { src: "https://img.freepik.com/free-vector/flat-design-white-party-landing-page-template_23-2149325234.jpg?t=st=1739203666~exp=1739207266~hmac=534a92d882e7ee6f57eb76be6e20d73164761831051214921a0aa424ee8ecdc0&w=1800", alt: "Image 3" },
    { src: "https://img.freepik.com/free-vector/gradient-ui-ux-landing-page-template_23-2149051558.jpg?t=st=1739203767~exp=1739207367~hmac=c9bb8edb159aca723e6d79da9ba844ebd7ef1b5e1c39800d0a1780a54c5373e8&w=1480", alt: "Image 4" },
    { src: "https://img.freepik.com/free-vector/gradient-ui-ux-landing-page-template_23-2149051558.jpg?t=st=1739203767~exp=1739207367~hmac=c9bb8edb159aca723e6d79da9ba844ebd7ef1b5e1c39800d0a1780a54c5373e8&w=1480", alt: "Image 5" },
  ];

  return (
    <section id="get-started-today" className="relative overflow-hidden bg-blue-600 py-32">
      <img
        alt=""
        loading="lazy"
        width="2347"
        height="1244"
        decoding="async"
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        style={{ color: 'transparent' }}
        src={bg}
      />

<div className="flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 ${
            index % 2 === 0 ? "rotate-2" : "-rotate-2"
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            layout="fill"
            className="absolute inset-0 h-full w-full object-cover"
            sizes="(min-width: 640px) 18rem, 11rem"
            priority
          />
        </div>
      ))}
    </div>
      {/* <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It’s time to take control of your books. Buy our software so you can feel like you’re doing something productive.
          </p>
          <a
            className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mt-10"
            href="/register"
          >
            Get 6 months free
          </a>
        </div>
      </div> */}
    </section>
  );
};

export default New;

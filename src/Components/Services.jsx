import image from '../assets/hero.png';

const Services = () => {
  const services = [
    {
      title: 'Webfejlesztés',
      description: 'Egyedi, reszponzív weboldalak, amelyek teljesítményt és skálázhatóságot biztosítanak.',
    },
    {
      title: 'Webdesign',
      description: 'Felhasználóbarát, vizuálisan lenyűgöző dizájnok, amelyek mély benyomást keltenek.',
    },
    {
      title: 'Grafikai tervezés',
      description: 'Logók, arculatok és vizuális elemek, amelyek megragadják az Ön vállalkozásának egyedi stílusát.',
    },
  ];

  return (
    <section id='sevices' className='bg-gray-100 py-16 px-8'>
      <h1 className='my-10 text-center text-4xl font-semibold'>Szolgáltatások</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {services.map((service, index) => (
          <div key={index} className='text-center p-6 bg-slate-100 rounded-xl shadow-xl'>
            <h3 className='text-xl font-bold mb-2'>{service.title}</h3>
            <p className='text-gray-700 mb-4'>{service.description}</p>
            {/* <button className='py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'>
              További részletek
            </button> */}
          </div>
        ))}
      </div>  
    </section>
  );
};

export default Services;


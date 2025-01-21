// File: src/components/Services.jsx
import React from "react";

const Services = () => {
  const services = [
    {
      title: "Webfejlesztés",
      description:
        "Egyedi, reszponzív weboldalak, amelyek teljesítményt és skálázhatóságot biztosítanak.",
    },
    {
      title: "Webdesign",
      description:
        "Felhasználóbarát, vizuálisan lenyűgöző dizájnok, amelyek mély benyomást keltenek.",
    },
    {
      title: "Grafikai tervezés",
      description:
        "Logók, arculatok és vizuális elemek, amelyek megragadják az Ön vállalkozásának egyedi stílusát.",
    },
  ];

  return (
    <section id='sevices' className="py-16 px-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Szolgáltatások</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="text-center p-6 border rounded shadow"
          >
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <button className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
              További részletek
            </button>
            
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default Services;

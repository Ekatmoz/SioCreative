import React, { useState } from "react";

const Form = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  const formData = new FormData(e.target);
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setStatus("Üzenet sikeresen elküldve!");
      e.target.reset(); // Reset the form
    } else {
      setStatus("Hiba történt az üzenet küldése során.");
    }
  } catch (error) {
    setStatus("Hiba történt az üzenet küldése során.");
  }
};

  return (
    <section id="#" aria-label="Contact-form" className="bg-slate-900 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <span className="relative">Simple pricing,</span>
            </span>{" "}
            for everyone.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            It doesn’t matter what size your business is, our software won’t work well for you.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Hidden Access Key */}
          <input
            type="hidden"
            name="access_key"
            value="e71e4e3f-06b6-4838-b4f6-5dc558a0b95d" // Replace with your actual access key
          />
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Név</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded"
              placeholder="Név"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">E-mail</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded"
              placeholder="E-mail"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Tárgy</label>
            <input
              type="text"
              name="subject"
              className="w-full p-2 border rounded"
              placeholder="Tárgy"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Üzenet</label>
            <textarea
              name="message"
              className="w-full p-2 border rounded"
              rows="4"
              placeholder="Üzenet"
              required
            ></textarea>
          </div>
          {/* Honeypot Field for Spam Protection */}
          <input
            type="text"
            name="honeypot"
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />
          <button
            type="submit"
            className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
          >
            Üzenet küldése
          </button>
        </form>
        {status && (
          <p className="mt-4 text-center text-lg font-medium">{status}</p>
        )}

        {/* <div className="mt-16 grid gap-y-10 sm:mx-auto lg:max-w-none lg:grid-cols-2 xl:gap-x-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8 ${plan.bgColor}`}
            >
              <p className={`order-first font-display text-5xl font-light tracking-tight ${plan.textColor}`}> {plan.price}</p>
              <h3 className={`mt-5 font-display text-lg ${plan.textColor}`}>{plan.title}</h3>
              <p className={`mt-2 text-base ${plan.textColor}`}>{plan.description}</p>
              <ul className={`order-last mt-10 flex flex-col gap-y-3 text-sm ${plan.textColor}`}>
                {plan.features.map((feature, i) => (
                  <li className="flex" key={i}>
                    <CheckCircle className="h-6 w-6 flex-none" />
                    <span className="ml-4">{feature}</span>
                  </li>
                ))}
              </ul>
             
            </Card>
          ))}
        </div> */}
      </div>
    </section>
  );

export default Form;

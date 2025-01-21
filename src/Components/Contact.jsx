import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    <section id="contact" className="bg-gray-100 py-16 px-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Kapcsolat</h2>
      <div className="max-w-xl mx-auto">
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
      </div>
    </section>
  );
};

export default Contact;

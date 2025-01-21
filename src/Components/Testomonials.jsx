// File: src/components/Testimonials.jsx
import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Vélemények</h2>
      <div className="max-w-3xl mx-auto">
        <blockquote className="mb-6">
          <p className="text-gray-700 italic">
            "A SioCreativeIT modern, felhasználóbarát weboldallá alakította az
            oldalunkat. Nagyon ajánlom!"
          </p>
          <cite className="text-gray-500 mt-2 block text-right">— Ügyfél neve</cite>
        </blockquote>
        <blockquote>
          <p className="text-gray-700 italic">
            "Nagyszerű csapat, kreatív megoldások. Az arculatunk új életre
            kelt!"
          </p>
          <cite className="text-gray-500 mt-2 block text-right">— Ügyfél neve</cite>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonials;

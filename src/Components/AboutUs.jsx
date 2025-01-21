// File: src/components/AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
    <section id='about' className="bg-gray-100 text-gray-800 py-16 px-8">
      
      <h2 className="text-3xl font-semibold text-center mb-6">Rólunk</h2>
      <p className="text-center max-w-2xl mx-auto mb-6">
        A SioCreativeIT az egyedi webes megoldások szakértője. Tapasztalatunkkal és szakértelmünkkel segítjük vállalkozását online növekedni.
      </p>
      <p className="text-center max-w-2xl mx-auto">
        Küldetésünk: személyre szabott, kreatív webes élményeket nyújtani, amelyek nemcsak hatékonyak, de egyedivé is teszik ügyfeleinket a versenytársak között.
      </p>
    </section>
  );
};

export default AboutUs;

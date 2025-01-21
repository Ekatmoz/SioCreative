import React from "react";
import me from "../assets/Me.jpg"

const AboutUs = () => {
  return (
    <section id='about' className="bg-gray-100 text-gray-800 py-16 px-8">
      <div className="container m-auto px-6 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
          <img src={me} alt="about_us" width={300} />
          </div>
          <div className="md:7/12 lg:w-6/12">
      <h2 className="text-3xl font-semibold text-center mb-6">Rólunk</h2>
      <p className="text-center max-w-2xl mx-auto mb-6">
        A SioCreativeIT az egyedi webes megoldások szakértője. Tapasztalatunkkal és szakértelmünkkel segítjük vállalkozását online növekedni.
      </p>
      <p className="text-center max-w-2xl mx-auto">
        Küldetésünk: személyre szabott, kreatív webes élményeket nyújtani, amelyek nemcsak hatékonyak, de egyedivé is teszik ügyfeleinket a versenytársak között.
      </p>
      </div>
      </div>
      </div>
    </section>
  );
};

export default AboutUs;

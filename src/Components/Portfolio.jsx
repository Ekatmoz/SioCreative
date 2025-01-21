// File: src/components/Portfolio.jsx
import React from "react";

const Portfolio = () => {
  return (
    <section id='projects' className="bg-gray-100 py-16 px-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Portfólió</h2>
      <p className="text-center mb-6">
        Tekintse meg legújabb projektjeinket, és nézze meg, mit tehetünk Önért!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 h-40 flex items-center justify-center rounded shadow">
          Projekt 1
        </div>
        <div className="bg-gray-200 h-40 flex items-center justify-center rounded shadow">
          Projekt 2
        </div>
        <div className="bg-gray-200 h-40 flex items-center justify-center rounded shadow">
          Projekt 3
        </div>
        
      </div>
    </section>
  );
};

export default Portfolio;

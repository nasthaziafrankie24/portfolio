import React from "react";
import CertificationCard from "./CertificationCard";

export default function Certification() {

  const certifications = [
    {
      imgSrc: "/moca.png",
      title: "Montreal Cognitive Assessment (MoCA) | Nov 2024 – Nov 2026 | MoCA Test Inc.",
      // link: "",
    },
    {
      imgSrc: "/ace.png",
      title: "Addenbrooks Cognitive Examination (ACE-III) | Nov 2024 | University of Glasgow",
      // link: "",
    },
    {
      imgSrc: "/deloitte.png",
      title: "Data Analytics Job Simulation | Jan 2026 | Deloitte",
      // link: "",
    },
  ];

  return (
    <section id="certifications" className="section">
      <div className="container mt-20 px-4 mx-auto lg:px-8 xl:max-w-6xl">

        <h2 className="headline-2 text-3xl lg:text-4xl lg:leading-tight font-semibold mb-6">
          Certifications
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {certifications.map((cert, key) => (
            <CertificationCard key={key} {...cert} />
          ))}
        </div>

      </div>
    </section>
  );
}
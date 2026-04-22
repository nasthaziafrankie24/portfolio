import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects(props) {
  // const projects = [
  //     {
  //       imgSrc: '/NIMHANS.jpeg',
  //       title: 'Impact of Music-Evoked Nostalgia on Cognitive Load and Emotion Regulation, Oral Presentation,1st International Conference on Clinical Neuropsychology and Cognitive Neuroscience (2026), National Institute of Mental Health and Neurosciences (NIMHANS), Bengaluru, Karnataka',
  //       tags: ['HTML' , 'SCSS' , "JavaScript" , 'ReactJS'],
  //       projectLink: 'https://nimhans.tiiny.site'
  //     },
  //     {
  //       imgSrc: '/project-2.png',
  //       title: 'Examining the Relationship of FoMO with Need for Affiliation,Need for Achievement, and Need for Power in Young Adults in the Digital Era, Oral Presentation, 2nd UG PG National Conference(2024), Christ (Deemed to be University), Delhi NCR Campus.',
  //       tags: ['HTML' , 'TailwindCSS' , "JavaScript" , 'ReactJS'],
  //       projectLink: 'https://ai-image-enhancer-five.vercel.app/'
  //     },
  //   ];

  const projects = [
    {
      imgSrc: "/NIMHANS.jpeg",
      title:
        "Impact of Music-Evoked Nostalgia on Cognitive Load and Emotion Regulation",
      type: "Oral Presentation",
      conference:
        "1st International Conference on Clinical Neuropsychology and Cognitive Neuroscience (2026)",
      organization: "NIMHANS, Bengaluru, Karnataka",
      projectLink: "https://nimhans.tiiny.site",
    },
    {
      imgSrc: "/christ.png",
      title:
        "Examining the Relationship of FoMO with Need for Affiliation, Need for Achievement, and Need for Power in Young Adults in the Digital Era",
      type: "Oral Presentation",
      conference: "2nd UG PG National Conference (2024)",
      organization: "Christ University, Delhi NCR Campus",
      projectLink: "https://pdflink.to/1433f1f0/",
    },
  ];

  return (
    <>
      <section id="projects" className="section">
        <div className="container mt-20 px-4 mx-auto lg:px-8 xl:max-w-6xl">
          <h2 className="headline-2 text-3xl lg:text-4xl lg:leading-tight font-semibold mb-6">
            My Reasearches & Conferences
          </h2>

          <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {projects.map((project, key) => (
              <ProjectCard key={key} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

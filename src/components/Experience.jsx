import React from 'react';
import Data from './Data';
import Card from './Card';

export default function Experience() {
  return (
    <section className="pt-20" id="experience">
      <div className="container px-4 mx-auto lg:px-8 xl:max-w-6xl">

        <h2 className="headline-2 text-3xl mb-5 mt-5 lg:text-4xl lg:leading-tight font-semibold">
          Experience
        </h2>

        <div className="experience-container grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">

          {/* Education */}
          <div className="timeline bg-zinc-800/50 rounded-2xl shadow-md p-7 w-full">
            <h3 className="text-white text-2xl font-semibold mb-4">Education</h3>

            {Data
              .filter(item => item.category === "education")
              .map((item) => (
                <Card key={item.id} {...item} />
              ))}
          </div>

          {/* Experience */}
          <div className="timeline bg-zinc-800/50 rounded-2xl shadow-md p-7 w-full">
            <h3 className="text-white text-2xl font-semibold mb-4">Experience</h3>

            {Data
              .filter(item => item.category === "experience")
              .map((item) => (
                <Card key={item.id} {...item} />
              ))}
          </div>

        </div>
      </div>
    </section>
  );
}
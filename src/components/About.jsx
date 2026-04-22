import React from 'react';

export default function About(props) {
  return (
    <>
      <section id="about" className="pt-20">
        <div className="container px-4 mx-auto lg:px-8 xl:max-w-6xl">
          <div className="flex items-start gap-6 bg-zinc-800/50 p-7 rounded-2xl md:p-12 w-full mx-auto">
            
            
            <figure className="hidden lg:block w-90 h-90 min-w-[300px] rounded-xl overflow-hidden border border-zinc-700 shadow-md">
              <img
                src="./nash.jpg"
                alt="Profile"
                className="w-full h-auto object-contain"
              />
            </figure>

            
            <p className="text-zinc-300 text-base md:text-xl leading-relaxed">
              Welcome! I&apos;m Nasthazia, a Neuropsychologist specializing in behavioral research and data analysis with a strong focus on neuromarketing and AI-driven consumer behavior. I have a solid foundation in experimental research design, statistical analysis, and interpreting behavioral data to understand how users think, decide, and interact in digital environments.
              <br /><br />
              I actively work on translating cognitive and behavioral science insights into practical, data-driven strategies for product development, marketing, and user experience improvement. My interests lie at the intersection of human cognition, behavioral science, human-computer interaction, and artificial intelligence, and I&apos;m always looking to apply these insights to create more meaningful and effective digital experiences.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";
import PropTypes from "prop-types";

// export default function ProjectCard({
//   imgSrc,
//   title,
//   projectLink,
//   classes,
// })
export default function ProjectCard({
  imgSrc,
  title,
  type,
  conference,
  organization,
  projectLink,
  classes,
}) {
  return (
    <>
      <div
        className={
          "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors" +
          classes
        }
      >
        <figure className="aspect-square rounded-lg mb-4 overflow-hidden">
          <img
            src={imgSrc}
            loading="lazy"
            className="w-full h-full object-cover"
            alt={title}
          />
        </figure>

        <div className="flex items-center justify-between gap-4 ">
          <div>
            {/* <h3 className="title-1 text-[15px] font-normal mb-3">
                            {title}
                        </h3> */}
            {/* <div className="flex flex-wrap items-center gap-2">
                            {tags.map((label, key) => (
                                <span 
                                key={key}
                                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                                >
                                    {label}
                                </span>
                            ))}
                        </div> */}

            <div>
              {/* 🔥 Paper Title */}
              <h3 className="text-[15px] font-semibold text-white mb-2 leading-snug">
                {title}
              </h3>

              {/* 🔹 Type */}
              <p className="text-xs text-zinc-400 mb-1">{type}</p>

              {/* 🔥 Conference */}
              <p className="text-sm font-medium text-white mb-1">
                {conference}
              </p>

              {/* 🔹 Organization */}
              <p className="text-xs text-zinc-400">{organization}</p>
            </div>
          </div>

          {/* <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0"> 
                        <span
                        className='material-symbols-rounded'
                        aria-hidden = 'true'
                        >
                            arrow_outward
                        </span>
                    </div> */}
        </div>

        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
        ></a>
      </div>
    </>
  );
}

// ProjectCard.propTypes = {
//     imgSrc: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     tags: PropTypes.array.isRequired,
//     projectLink: PropTypes.string,
//     classes: PropTypes.string,
// };

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  conference: PropTypes.string,
  organization: PropTypes.string,
  projectLink: PropTypes.string,
};

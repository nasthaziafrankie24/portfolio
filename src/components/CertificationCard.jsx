import React from "react";
import PropTypes from "prop-types";

export default function CertificationCard({
  imgSrc,
  title,
  link,
}) {
  return (
    <div className="relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 ring-1 ring-inset ring-zinc-50/5 transition-colors">

      <figure className="aspect-[16/9] rounded-lg mb-4 overflow-hidden">
        <img
          src={imgSrc}
          loading="lazy"
          className="w-full h-full object-cover"
          alt={title}
        />
      </figure>

      <h3 className="text-[15px] font-semibold text-white leading-snug">
        {title}
      </h3>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"
      ></a>
    </div>
  );
}

CertificationCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
};
import PropTypes from "prop-types";
import React from 'react';

const SkillCard = ({ imgSrc, label, classes }) => { 

    const isGitHub = label === 'GitHub';

    return (
        <div className={"flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group" + classes}>
            <figure className={`rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors ${isGitHub ? 'bg-white' : 'bg-zinc-700/50'}`}>
                <img 
                    src={imgSrc}
                    width={32}
                    height={32}
                    alt={label}
                />
            </figure>

            <div>
                <h3>{label}</h3>
            </div>

        </div>
    );
};

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    classes: PropTypes.string,
};

export default SkillCard;

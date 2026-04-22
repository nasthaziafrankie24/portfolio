import React from 'react'
import PropTypes from 'prop-types';

const ButtonPrimary = ({
    href,
    target ='_self',
    label,
    icon,
    classes,
    download
}) => {
    if(href){
        return(
            <>
                <a 
                href={href}
                target={target}
                className={"btn btn-primary flex items-center justify-center" + classes}
                download={download}
                rel='noopener noreferrer'
                >
                    {label}

                    {icon ? 
                        <span className='material-symbols-rounded'
                        aria-hidden="true">
                            {icon}
                        </span>
                        :
                        undefined
                    }
                </a>
            </>
        )
    }else{
        return(
            <>
                <button className={"btn btn-primary flex items-center gap-x-2" + classes}>
                    {label}

                    {icon ? 
                        <span className='material-symbols-rounded flex items-center gap-x-2'
                        aria-hidden="true">
                            {icon}
                        </span>
                        :
                        undefined
                    }                    
                </button>
            </>
        )
    }
}

ButtonPrimary.propTypes ={
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}


const ButtonOutline = ({
    href,
    target ='_self',
    label,
    icon,
    classes
}) => {
    if(href){
        return(
            <a 
            href={href}
            target={target}
            className={"btn btn-outline flex items-center gap-2" + classes}
            rel="noopener noreferrer"
            >
                {icon && (
                    <img 
                        src="./github.svg"
                        alt="GitHub"
                        className="w-5 h-5"
                    />
                )}
                {label}
            </a>
        )
    }else{
        return(
            <>
                <button className={"btn btn-outline flex items-center gap-x-2" + classes}>
                    {label}

                    {icon ? 
                        <span className='material-symbols-rounded flex items-center gap-x-2'
                        aria-hidden="true">
                            {icon}
                        </span>
                        :
                        undefined
                    }                    
                </button>
            </>
        )
    }
}

ButtonOutline.propTypes ={
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export {
    ButtonPrimary,
    ButtonOutline
}


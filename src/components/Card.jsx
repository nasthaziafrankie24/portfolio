// import React from 'react'

// export default function Card(props) {
//     return (
//         <div className='timeline_item'>
//             <i className={`fa ${props.icon}`}></i>
//             <span className='timeline_date' style={{ color: '#aaa' }}>{props.year}</span>
//             <h3 className='timeline_title' style={{ color: '#fff', fontWeight: 600 }}>{props.title}</h3>
//             <p className='timeline_text' style={{ color: '#aaa' }}>{props.desc}</p>
//         </div>
//     )
// }



import React from 'react';

export default function Card(props) {
  return (
    <div className='timeline_item mb-6'>
      <i className={`fa ${props.icon}`} style={{ color: '#fff' }}></i>

      <span className='timeline_date block text-sm mb-1' style={{ color: '#aaa' }}>
        {props.year}
      </span>

      <h3 className='timeline_title text-lg font-semibold mb-2' style={{ color: '#fff' }}>
        {props.title}
      </h3>

      
      {Array.isArray(props.desc) ? (
        <ul className="timeline_text list-disc ml-5 space-y-2 text-sm leading-relaxed text-zinc-300">
          {props.desc.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      ) : (
        <p className='timeline_text text-m leading-relaxed text-zinc-300'>
          {props.desc}
        </p>
      )}
    </div>
  );
}
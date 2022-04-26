import React from 'react';

const Curriculum = ({ title, items }) => {
  return (
    <div className='curriculum'>
      <h3>{title}</h3>
      {
        items.map((item, index) => {
          return (
            <div className='article-content' key={index}>
              <span className='date' key={item.date}>{item.date}</span>
              {
                item.url ? (
                  <a href={item.url} target="_blank" rel='noopener noreferrer'><span className='name' key={item.nom}>{item.nom}</span></a>
                ) : (
                  <span className='name' key={item.nom}>{item.nom}</span>
                )
              }
            </div>
          )
        })
      }
    </div>
  );
};

export default Curriculum;
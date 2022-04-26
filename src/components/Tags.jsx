import React from 'react';

const tags = [
  "Ostéopathie de la femme enceinte",
  "Ostéopathie pédiatrique",
  "Ostéopathie du sport",
  "Ostéopathie crânienne",
  "Ostéopathie viscérale",
  "Ostéopathie myofasciale",
  "Ostéopathie gynécologique",
  "Suivi du sportif"
]

const Tags = () => {
  return (
    <div className='tags'>
      {
        tags.map(tag => {
          return (
            <div className="tag" key={tag}>{tag}</div>
          )
        })
      }
    </div>
  );
};

export default Tags;
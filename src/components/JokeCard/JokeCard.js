import React from 'react';

const JokeCard = ({ jokeProp, unlaikeJoke, laikeJoke, index }) => {
  return (
    <div
      className='card rounded-0'
      style={{ marginBottom: '10px' }}
      id={`joke-${index}`}
    >
      <div className='card-body'>
        {jokeProp.categories.length > 0 ? (
          jokeProp.categories.map((cat) => (
            <span
              className='badge badge-pill badge-primary'
              key={cat}
              style={{ color: '#F7F7F7', background: 'crimson' }}
            >
              {cat}
            </span>
          ))
        ) : (
          <span
            className='badge badge-pill badge-primary'
            style={{ color: '#F7F7F7', background: '#3d6ad6' }}
          >
            regular
          </span>
        )}

        <p className='card-text' style={{ color: 'crimson' }}>
          {jokeProp.value}
        </p>
        <button
          type='button'
          className='btn btn-primary'
          style={{ marginRight: '10px' }}
          onClick={() => laikeJoke(jokeProp.id)}
        >
          <i className='fas fa-thumbs-up' />
        </button>
        <button
          type='button'
          className='btn btn-primary'
          onClick={() => unlaikeJoke(jokeProp.id)}
        >
          <i className='fas fa-thumbs-down' />
        </button>
      </div>
    </div>
  );
};

export default JokeCard;

import React from 'react';
import { FaTrophy } from 'react-icons/fa';

const Starship = ({ starship }) => {
    const starshipId = starship.url.match(/\d+/);
    const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`;
  return (
    <div className={`starship-container ${starship.mostFilms ? 'most-films' : ''}`}>
        <div className='starship-list-div-container'>
            <h2 className='startship-title'>{starship.name}
                <span className='starship-trophy'>{starship.mostFilms ? <FaTrophy className="star-icon" /> : null}</span>
            </h2>
            <p className='starship-model-title'>Model: {starship.model}</p>
            <p className='starship-films-title'>No. of Films: {starship.films.length}</p>
        </div>
        <div className='starship-img-container'>
            <img
                className='starship-img'
                src={imageUrl} 
                alt={starship.name}
            />
        </div>
    </div>
  );
};

export default Starship;

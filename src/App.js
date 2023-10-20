import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Starship from './components/Starship/Starship';
import { FaTrophy } from 'react-icons/fa';
import Video from './images/starwars.mp4';
import './App.scss';

const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/').then((response) => {
      const starshipsData = response.data.results
        .filter((starship) => starship.crew <= 10)
        .sort((a, b) => a.crew - b.crew);

      const mostFilmsStarship = starshipsData.reduce((prev, current) =>
        prev.films.length > current.films.length ? prev : current
      );

      setStarships(starshipsData.map((starship) => ({ ...starship, mostFilms: starship === mostFilmsStarship })));
    });
  }, []);

  return (
    <div className="starship-main-container">
        <video autoPlay loop muted playsInline className="starship-video">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <div className='starship-inner-container'>
        <div className='starship-logo-container'>
          <img src={require('./images/logo.png')} alt='logo' />
        </div>
        <p className='starship-content'>
          The starship that has featured in most films will show a <span className='starship-content-trophy'><FaTrophy className="star-icon" /></span>
        </p>
        <div className='starship-list-container'>
          {starships.map((starship, index) => (
            <Starship key={index} starship={starship} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Starship from './components/Starship/Starship';
import { FaTrophy } from 'react-icons/fa';
import './App.scss';

const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/').then((response) => {
      const starshipsData = response.data.results
        .filter((starship) => starship.crew <= 10)
        .sort((a, b) => a.crew - b.crew);
        console.log(response.data.results)

      const mostFilmsStarship = starshipsData.reduce((prev, current) =>
        prev.films.length > current.films.length ? prev : current
      );

      setStarships(starshipsData.map((starship) => ({ ...starship, mostFilms: starship === mostFilmsStarship })));
    });
  }, []);

  return (
    <div className="starship-main-container">
      <div className='starship-inner-container'>
        <div className='starship-logo-container'>
          <img src={require('./images/logo.png')} alt='logo' />
        </div>
        <p className='starship-content'>
          Results are  filtered to starships with a crew size less than 10 and sorted by crew size.
          <br />
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

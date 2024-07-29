import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import JokeCard from './components/JokeCard/JokeCard';
import Footer from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);
  const [likedJokes, setLikedJokes] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/random`)
      .then((res) => res.json())
      .then((data) => {
        setJokes([data]);
      })
      .catch((err) => console.log(err));

    const localJokes = localStorage.getItem('jokes');
    if (localJokes) {
      setLikedJokes(JSON.parse(localJokes));
    }
  }, [reload]);

  const likeJoke = (id) => {
    if (likedJokes.find((j) => j.id === id)) {
      return;
    }
    const likedJoke = jokes.find((j) => j.id === id);
    setLikedJokes([likedJoke, ...likedJokes]);
  };

  const unlikeJoke = (id) => {
    const newLikedJokes = likedJokes.filter((j) => j.id !== id);
    setLikedJokes(newLikedJokes);
  };

  //stores the liked jokes to local storage
  useEffect(() => {
    localStorage.setItem('jokes', JSON.stringify(likedJokes));
  });

  return (
    <>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link active'
                  id='pills-home-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-home'
                  type='button'
                  role='tab'
                  aria-controls='pills-home'
                  aria-selected='true'
                >
                  Home
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link position-relative'
                  id='pills-likes-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-likes'
                  type='button'
                  role='tab'
                  aria-controls='pills-likes'
                  aria-selected='false'
                >
                  Likes
                  <span className='position-absolute start-100 translate-middle badge rounded-pill bg-danger'>
                    {likedJokes.length > 0 ? likedJokes.length : null}
                  </span>
                </button>
              </li>
            </ul>

            <div className='tab-content' id='pills-tabContent'>
              <div
                className='tab-pane fade show active'
                id='pills-home'
                role='tabpanel'
                aria-labelledby='pills-home-tab'
                tabIndex='0'
              >
                <div>
                  {/* Joke cards */}
                  {jokes.map((joke, index) => (
                    <JokeCard
                      key={joke.id}
                      jokeProp={joke}
                      laikeJoke={likeJoke}
                      unlaikeJoke={unlikeJoke}
                      index={index}
                    />
                  ))}
                </div>
                <button
                  className='reload-button'
                  onClick={() => setReload((prev) => !prev)}
                >
                  New Joke
                </button>
              </div>

              <div
                className='tab-pane fade'
                id='pills-likes'
                role='tabpanel'
                aria-labelledby='pills-likes-tab'
                tabIndex='0'
              >
                <div>
                  {likedJokes.map((joke) => (
                    <JokeCard
                      key={joke.id}
                      jokeProp={joke}
                      laikeJoke={likeJoke}
                      unlaikeJoke={unlikeJoke}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

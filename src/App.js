import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import JokeCard from './components/JokeCard/JokeCard';
import Footer from './components/Footer/Footer';

import { Tab, Tabs, Form } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);
  const [jokesToShow, setJokesToShow] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterCat, setFilterCat] = useState([]);

  const [likedJokes, setLikedJokes] = useState([]);
  const [currentTab, setCurrentTab] = useState('home');

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://api.icndb.com/jokes/')
      .then(res => res.json())
      .then(data => {
        setJokes(data.value);
        setJokesToShow(data.value.slice(0, 10))

      }).catch(error => {
        console.log(error)
      })

    fetch(`https://api.icndb.com/categories`)
      .then(res => res.json())
      .then(res => {
        setCategories(res.value);
        setFilterCat(res.value);

      }).catch(err => console.log(err))
  }, [])

  const addMoreJokes = () => {
    setLoading(true);
    setTimeout(() => {
      setJokesToShow(jokes.slice(0, jokesToShow.length + 10));
    }, 500)
  }

  const observeElement = (bottomJoke) => {
    if (!bottomJoke) {
      return;
    }
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting === true) {
        addMoreJokes();
        observer.unobserve(bottomJoke);
      }
    }, { threshold: 1, })

    observer.observe(bottomJoke);
  }

  useEffect(() => {
    const bottomJokeEl = document.getElementById(`joke-${jokesToShow.length - 1}`);
    observeElement(bottomJokeEl);
  }, [jokesToShow])

  const likeJoke = (id) => {
    if (likedJokes.find(j => j.id === id)) { return; }
    const likedJoke = jokes.find(j => j.id === id)
    setLikedJokes([likedJoke, ...likedJokes])
  }
  const unlikeJoke = (id) => {
    const newLikedJokes = likedJokes.filter(j => j.id !== id)
    setLikedJokes(newLikedJokes)
    console.log(newLikedJokes)
  }
  const onChangeCategories = (e) => {
    const category = e.target.name;
    if (filterCat.includes(category)) {
      // if found then remove
      const filterCategoriesCopy = [...filterCat];
      const categoryIndex = filterCategoriesCopy.indexOf(category);
      filterCategoriesCopy.splice(categoryIndex, 1);
      setFilterCat(filterCategoriesCopy);
    } else {
      //else add it
      setFilterCat([...filterCat, category])
    }
  }

  const categoryMatch = (jokeCategories) => {
    for (let i = 0; i < jokeCategories.length; i++) {
      if (filterCat.includes(jokeCategories[i])) { return true; }
    }
    return false;
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-12">

            <Tabs activeKey={currentTab} onSelect={(k) => setCurrentTab(k)} >
              <Tab eventKey="home" title="Home" />
              <Tab eventKey="profile" title={<span>Likes
                <Badge pill
                  className="edited-badge-pill"
                  variant="primary">
                  {likedJokes.length > 0 ? likedJokes.length : null}
                </Badge></span>}
              />
            </Tabs>

            <div hidden={currentTab !== 'home'} >
              {/* Category filters */}
              <Form inline>
                {categories.map(cat => (
                  <div key={cat} className="mr-3 mb-3">
                    < Form.Check
                      label={cat}
                      type="checkbox"
                      name={cat}
                      checked={filterCat.includes(cat)}
                      onChange={onChangeCategories}
                    />
                  </div>
                ))}
              </Form>

              {/* Joke cards */}
              {jokesToShow.map((joke, index) => (
                joke.categories.length === 0 || categoryMatch(joke.categories) ?
                  <JokeCard
                    key={joke.id}
                    jokeProp={joke}
                    laikeJoke={likeJoke}
                    unlaikeJoke={unlikeJoke}
                    index={index}
                  /> : ""


              ))}
              {loading && <div className="spinner-grow text-dark" role="status">
                <span className="sr-only">Loading...</span>
              </div>}
            </div>

            <div hidden={currentTab === 'home'} >
              {likedJokes.map(joke => (
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
      <Footer />
    </>
  );
}

export default App;

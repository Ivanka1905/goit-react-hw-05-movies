// import React from 'react'

// export const HomePage = () => {
//   return (
//     <div>HomePage</div>
//   )
// }

import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { dataLoad } from 'services/MoviesApi';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  // const page = 1;
  const location = useLocation();

  useEffect(() => {
    fetchMovies();
  }, []);

  function fetchMovies() {
    dataLoad()
      .then(setMovies)
      .catch(err => console.log(err));
  }

  return (
    movies && (
      <>
        <h1>Trending today</h1>
        <ul>
          {movies.map(({ id, title, name }) => {
            return (
              <li key={id}>
                <NavLink
                  to={`movies/${id.toString()}`}
                  state={{ search: `${location.pathname}` }}
                >
                  {title ? title : name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <Outlet />
      </>
    )
  );
};

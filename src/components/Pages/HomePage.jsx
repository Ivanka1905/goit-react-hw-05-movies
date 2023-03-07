import React, { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { dataLoad } from 'services/MoviesApi';
import {
  Title,
  FilmList,
  FilmItem,
  FilmItemLink,
  FilmName,
} from './HomePage.styled';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
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
        <Title>Trending today</Title>
        <FilmList>
          {movies.map(({ id, title, name, poster_path }) => {
            return (
              <FilmItem key={id}>
                <FilmItemLink
                  to={`movies/${id.toString()}`}
                  state={{ from: `${location.pathname}` }}
                >
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : '../../public/pngwing.png'
                    }
                    alt={title}
                    width="200px"
                  />
                </FilmItemLink>
                <FilmName>{title ? title : name}</FilmName>
              </FilmItem>
            );
          })}
        </FilmList>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </>
    )
  );
};

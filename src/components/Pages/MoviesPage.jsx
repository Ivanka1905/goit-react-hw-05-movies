import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getSearchFilms } from 'services/MoviesApi';
import { Outlet } from 'react-router-dom';
import {
  Title,
  FilmList,
  FilmItem,
  FilmItemLink,
  FilmName,
  NoImg,
} from './MoviesPages.styled';


const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const getParams = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (getParams === null) {
      return;
    };
    getParams && getSearchFilms(getParams, 1).then(setMovies);
  }, [getParams]);

  function handleSubmit(e) {
    e.preventDefault();
    const query = e.currentTarget.inputEl.value;
    setSearchParams({ query });
    e.currentTarget.inputEl.value = '';
  }

  return (
    <>
      <Title onSubmit={handleSubmit}>
        <input name="inputEl" />
        <button type="submit">Search</button>
      </Title>
      {movies  &&(
        <>
          <FilmList>
            {movies.map(({ id, title, poster_path, backdrop_path }) => {
              return (
                <FilmItem key={id}>
                  <FilmItemLink
                    to={`${id.toString()}`}
                    state={{ from: `${location.pathname}${location.search}` }}
                  >{(poster_path !== null || backdrop_path !== null) ? <img
                      src={poster_path
                          ? `https://image.tmdb.org/t/p/w500${poster_path}`
                          : `https://image.tmdb.org/t/p/w500${backdrop_path}`
                      }
                      alt={title}
                      width="200px"
                    /> : <NoImg>{ title}</NoImg>}
                    
                    <FilmName>{title}</FilmName>
                  </FilmItemLink>
                </FilmItem>
              );
            })}
          </FilmList>
            <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        </>
      ) }
    </>
  );
};

export default MoviesPage;
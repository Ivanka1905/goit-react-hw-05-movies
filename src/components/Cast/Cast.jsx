import React, { useEffect, useRef, Suspense, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getCredits } from 'services/MoviesApi';
import { Title, FilmList, FilmItem, CardTitle } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
    getCredits(id)
      .then(setCredits)
      .catch(err => console.log(err));
  }, [id]);

  return (
    <>
      <FilmList>
        {credits.map(
          ({ cast_id, name, profile_path, character }) =>
            profile_path && (
              <FilmItem key={cast_id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  width="100px"
                />
                <CardTitle>
                  <Title>{name}</Title>
                  <p>Character: {character}</p>
                </CardTitle>
              </FilmItem>
            )
        )}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </FilmList>
    </>
  );
};

export default Cast;

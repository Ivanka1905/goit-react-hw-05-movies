import { Addition } from 'components/Addition/Addition';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getDetails } from 'services/MoviesApi';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getDetails(id)
      .then(setMovie)
      .catch(err => console.log(err));
  }, [id]);

  return (
    !!movie.id && (
      <><div>
        <button type="button" onClick={() => navigate(location.state.search)}>
          Go Back
        </button>
        <h1>
          {movie.title} ({movie.release_date && movie.release_date.slice(0, 4)})
        </h1>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "../../public/pngwing.png"
          }
          alt={movie.title}
          width="300px"
        />

        <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <ul>
          {movie.genres &&
            movie.genres.map(g => {
              return <li key={g.name}>{g.name}</li>;
            })}
        </ul></div>
        <div><Addition/></div>
      </>
    )
  );
};

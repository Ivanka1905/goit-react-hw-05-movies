import React, { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getDetails } from 'services/MoviesApi';
import {
  Title,
  NavLinkButton,
  Container,
  Text,
  Addition,
  AdditionUl,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();

  useEffect(() => {
    getDetails(id)
      .then(setMovie)
      .catch(err => console.log(err));
  }, [id]);

  const { title, release_date, poster_path, overview, vote_average, genres } =
    movie;
  return (
    !!movie.id && (
      <>
        <div>
          <NavLinkButton to={location.state?.from}>Go Back</NavLinkButton>
          <Title>
            {title} ({release_date && release_date.slice(0, 4)})
          </Title>
          <Container>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : '../../public/pngwing.png'
              }
              alt={title}
              width="300px"
            />
            <Text>
              <p>
                <b>User Score: </b>
                {Math.round(vote_average * 10)}%
              </p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h3>Genres</h3>
              <ul>
                {genres &&
                  genres.map(g => {
                    return <li key={g.name}>{g.name}</li>;
                  })}
              </ul>
            </Text>
          </Container>
        </div>
        <div>
          <Addition>Additional information</Addition>
          <AdditionUl>
            <NavLinkButton
              to="credits"
              state={{ from: `${location.state?.from}` }}
            >
              Cast
            </NavLinkButton>
            <NavLinkButton
              to="reviews"
              state={{ from: `${location.state?.from}` }}
            >
              Reviews
            </NavLinkButton>
          </AdditionUl>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </>
    )
  );
};

export default MovieDetails;

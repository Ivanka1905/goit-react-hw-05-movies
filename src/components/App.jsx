import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { Layout } from './Layout/Layout';

const MoviesPage = lazy(() => import('../components/Pages/MoviesPage'));
const MovieDetails = lazy(() => import('../components/Pages/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="credits" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

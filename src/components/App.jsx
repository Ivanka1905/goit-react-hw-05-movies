import { Routes, Route} from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { MoviesPage } from './Pages/MoviesPage';
import { Layout } from './Layout/Layout';
// import { MovieSubscription } from './Pages/MovieSubscription';
// import { SearchPage } from './Pages/SearchPage';
import { MovieDetails } from './Pages/MovieDetails';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          {/* <Route path="movies/:id" element={<MovieSubscription />} /> */}
          {/* </Route> */}
          {/* <Route path="search" element={<SearchPage />}> */}
          {/* </Route> */}
          <Route path="movies/:id" element={<MovieDetails />}>
            {/* <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews />} /> */}
          </Route>
        </Route>
      </Routes>
    </>
  );
};

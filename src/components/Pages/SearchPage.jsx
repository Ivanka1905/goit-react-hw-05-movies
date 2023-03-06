// import React, { useEffect, useState } from 'react';
// import { useSearchParams, useLocation } from 'react-router-dom';
// import { getSearchFilms } from 'services/MoviesApi';
// import { NavLink, Outlet } from 'react-router-dom';

// export const SearchPage = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const getParams = searchParams.get('query');
//   const location = useLocation();
  

//   useEffect(() => {
//     getParams && getSearchFilms(getParams, 1).then(setMovies);
//   }, [getParams]);

//   function handleSubmit(e) {
//     e.preventDefault();
//     const query = e.currentTarget.inputEl.value;
//     setSearchParams({ query });
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input name="inputEl" />
//         <button type="submit">Search</button>
//       </form>
//       {movies && (
//         <>
//           <ul>
//             {movies.map(({ id, title }) => {
//               return (
//                 <li key={id}>
//                   <NavLink to={`${id.toString()}/details`} state={{ search: `${location.pathname}${location.search}` }}>{title}</NavLink>
//                 </li>
//               );
//             })}
//           </ul>
//           <Outlet />
//         </>
//       )}
//     </>
//   );
// };

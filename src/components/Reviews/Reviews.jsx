import React, { useEffect } from 'react';
import { useState } from 'react';
import {  NavLink, useParams } from 'react-router-dom';
// import { Outlet } from 'react-router-dom'
import { getReviews } from 'services/MoviesApi';

export const Reviews = () => {
  const { id } = useParams();
  const [review, setReview] = useState('');

  useEffect(() => {
    getReviews(id)
      .then(setReview)
      .catch(err => console.log(err));
  }, [getReviews]);

  function handleOnClick() {
  useParams()
}
  return <><NavLink onClick={handleOnClick}>Review</NavLink>
    {review && <p >{review}</p>}</>;
};

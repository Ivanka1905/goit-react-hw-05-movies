import React, { useEffect, useRef, Suspense, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getReviews } from 'services/MoviesApi';
import { Title, Text } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [review, setReview] = useState({});
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
    getReviews(id)
      .then(setReview)
      .catch(err => console.log(err));
  }, [id]);

  return (
    <>
      {review.length > 0 ? (
        <ul>
          {review.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <Title>Author: {author}</Title>
                <Text>{content}</Text>
              </li>
            );
          })}
        </ul>
      ) : (
        <Text>We do not have any reviews for this mowie</Text>
      )}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Reviews;

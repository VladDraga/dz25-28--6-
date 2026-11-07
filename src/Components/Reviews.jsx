import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../services/api';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const results = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.error(error);
      }
    }
    getReviews();
  }, [movieId]);

  if (reviews.length === 0) {
    return (
      <p style={{ padding: '20px' }}>
        We don't have any reviews for this movie.
      </p>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h4>Author: {review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
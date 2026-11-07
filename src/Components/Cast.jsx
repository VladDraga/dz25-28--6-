import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../services/api';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      try {
        const results = await fetchMovieCast(movieId);
        setCast(results);
      } catch (error) {
        console.error(error);
      }
    }
    getCast();
  }, [movieId]);

  if (cast.length === 0) {
    return <p style={{ padding: '20px' }}>No cast information.</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <ul>
        {cast.map((actor) => (
          <li key={actor.cast_id || actor.credit_id}>
            <p>
              <b>{actor.name}</b> as {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
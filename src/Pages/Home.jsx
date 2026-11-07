import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from '../services/api';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getTrending() {
      try {
        const results = await fetchTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        console.error('Error fetching trending:', error);
      }
    }
    getTrending();
  }, []);

  return (
    <div style={{ padding: '0 20px' }}>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
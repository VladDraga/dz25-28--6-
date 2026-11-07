import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { fetchMoviesByQuery } from '../services/api';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const location = useLocation();

  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) return;

    async function getMovies() {
      try {
        const results = await fetchMoviesByQuery(searchQuery);
        setMovies(results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
    getMovies();
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setSearchParams({ query });
  };

  return (
    <div style={{ padding: '0 20px' }}>
      <h1>Search Movies</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {movies.map((movie) => (
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
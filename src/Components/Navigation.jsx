import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav style={{ padding: '20px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
      <NavLink
        to="/"
        style={{ marginRight: '15px', textDecoration: 'none', fontWeight: 'bold' }}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        style={{ textDecoration: 'none', fontWeight: 'bold' }}
      >
        Movies
      </NavLink>
    </nav>
  );
}
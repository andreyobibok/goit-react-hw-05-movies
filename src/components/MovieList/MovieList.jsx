import { Link } from 'react-router-dom';

import css from './MovieList.module.css';

const MovieList = ({ movies, location }) => {
  const elements = movies.map(({ id, title }) => (
    <li key={id} className={css.item}>
      <Link
        state={{ from: location }}
        to={`/movies/${id}}`}
        className={css.link}
      >
        {title}
      </Link>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default MovieList;

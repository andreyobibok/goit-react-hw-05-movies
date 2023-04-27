import { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

import { searchMovie } from 'shared/Api';

import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, SetSearchParams] = useSearchParams({
    page: 1,
    query: '',
  });

  const location = useLocation();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const page = Number(params.page || 1);
  const { query } = params;

  const [inputValue, setInputValue] = useState(query || '');

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await searchMovie(query, page);
        setMovies(data.results);
        setLoading(false);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [query, page]);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const searchQuery = e.target.elements.search.value.trim();
    if (!searchQuery) {
      e.target.reset();
      return;
    }
    SetSearchParams({ query: searchQuery, page: 1 });
  };

  return (
    <>
      <div className={css.wrapper}>
        <h2 className={css.title}>Search movie by name:</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={inputValue}
            onChange={handleChange}
            name="search"
            type="text"
            placeholder="Type here"
            className={css.input}
          />
          <button type="submit" className={css.button}>
            Search
          </button>
        </form>
      </div>
      <ul>
        {query ? (
          loading ? (
            'Loading...'
          ) : movies?.length > 0 ? (
            movies.map(({ title, id }) => (
              <li key={id} className={css.item}>
                <Link
                  state={{ from: location }}
                  to={`/movies/${id}`}
                  className={css.link}
                >
                  {title}
                </Link>
              </li>
            ))
          ) : (
            <p>
              No movies with this title were found. Try entering another title
            </p>
          )
        ) : (
          <p className={css.descr}></p>
        )}
      </ul>
    </>
  );
};
export default Movies;

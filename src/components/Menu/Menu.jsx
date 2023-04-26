import { NavLink } from 'react-router-dom';

import css from './Menu.module.css';

const Menu = () => {
  return (
    <div className={css.wrapper}>
      <NavLink className={css.navigation} to="/">
        Home
      </NavLink>
      <NavLink className={css.navigation} to="/movies">
        Movies
      </NavLink>
    </div>
  );
};

export default Menu;

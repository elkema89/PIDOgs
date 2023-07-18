import SearchBar from '../SearchBar/SearchBar';
import SortDogs from '../sortDogs/sortDogs';
import style from './nav.module.css';


const Nav = ({ onSearch }) => {

  return (
      <nav className={style.navbar}>
        <div>
        <SortDogs />
        </div>
        <div>
        <SearchBar onSearch={onSearch}/>
        </div>
      </nav>
  );
};

export default Nav;



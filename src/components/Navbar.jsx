import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';

const Navbar = ({ setDarkTheme, darkTheme }) => {
  return (
    <nav className="max-w-screen-2xl mx-auto px-5 py-3 flex flex-wrap justify-center items-center sm-justify-between border-b border-gray-200 dark:border-gray-500">
      <div className="flex justify-between items-center space-x-5 w-screen">
        {/* logo */}
        <Link to="/">
          <p className="text-2xl font-bold bg-blue-500 text-white py-1 px-2 rounded dark:bg-blue-600">
            Google
          </p>
        </Link>

        {/* theme btn */}
        <button
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl bg-white dark:bg-gray-50 border rounded-full px-2 py-1 shadow-sm hover:shadow-md transition-shadow"
        >
          {darkTheme ? '🌞' : '🌙'}
        </button>
      </div>

      <SearchBox />
    </nav>
  );
};

export default Navbar;


import { FiSearch } from 'react-icons/fi';

function SearchBar({ placeholder, onSearch }) {
  return (
    <form className="search-bar" onSubmit={(e) => {
      e.preventDefault();
      onSearch(e.target.elements.query.value);
      e.target.reset();
    }}>
      <input
        type="text"
        name="query"
        placeholder={placeholder}
      />
      <button type="submit"><FiSearch className="w-5 h-5" /></button>
      
    </form>
  );
}

export default SearchBar;

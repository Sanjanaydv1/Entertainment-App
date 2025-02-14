
function SearchBar({ placeholder, onSearch }) {
  return (
    <form className="search-bar" onSubmit={(e) => {
      e.preventDefault();
      onSearch(e.target.elements.query.value);
    }}>
      <button type="submit">🔍</button> 
      <input
        type="text"
        name="query"
        placeholder={placeholder}
      />
      
    </form>
  );
}

export default SearchBar;

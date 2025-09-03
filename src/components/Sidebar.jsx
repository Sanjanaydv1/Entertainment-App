import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilm, faTv, faBookmark, faUser  } from '@fortawesome/free-solid-svg-icons';

function Sidebar({ selectedFilter, onFilterChange }) {
    return (
      <aside className="sidebar">
        <div className="logo">
          <FontAwesomeIcon icon={faFilm} size="2x" alt="Logo" />
        </div>
        <div className="nav-icons">
          <FontAwesomeIcon
            icon={faHome}
            alt="Home"
            className={`nav-icon ${selectedFilter === 'all' ? 'active' : ''}`}
            onClick={() => onFilterChange('all')}
          />
          <FontAwesomeIcon
            icon={faFilm}
            alt="Movies"
            className={`nav-icon ${selectedFilter === 'movies' ? 'active' : ''}`}
            onClick={() => onFilterChange('movies')}
          />
          <FontAwesomeIcon
            icon={faTv}
            alt="TV Series"
            className={`nav-icon ${selectedFilter === 'tv' ? 'active' : ''}`}
            onClick={() => onFilterChange('tv')}
          />
          <FontAwesomeIcon
            icon={faBookmark}
            alt="Bookmarks"
            className={`nav-icon ${selectedFilter === 'bookmarks' ? 'active' : ''}`}
            onClick={() => onFilterChange('bookmarks')}
          />
        </div>
        <div className="profile">
          <FontAwesomeIcon icon={faUser } size="2x" alt="Profile" className="profile-icon" />
        </div>
      </aside>
    );
}
export default Sidebar;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilm, faTv, faBookmark, faUser  } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    return (
      <aside className="sidebar">
        <div className="logo">
          <FontAwesomeIcon icon={faFilm} size="2x" alt="Logo" />
        </div>
        <div className="nav-icons">
          <FontAwesomeIcon icon={faHome} alt="Home" />
          <FontAwesomeIcon icon={faFilm} alt="Movies" />
          <FontAwesomeIcon icon={faTv} alt="TV Series" />
          <FontAwesomeIcon icon={faBookmark} alt="Bookmarks" />
        </div>
        <div className="profile">
          <FontAwesomeIcon icon={faUser } size="2x" alt="Profile" className="profile-icon" />
        </div>
      </aside>
    );
}

export default Sidebar;
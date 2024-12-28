import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';

function MediaCard({
  title,
  year,
  category,
  rating,
  thumbnail,
  isBookmarked,
  onBookmark,
}) {
  return (
    <div className="media-card">
      <img src={thumbnail} alt={title} className="media-thumbnail" />
      <div className="media-card-info">
        <span className="media-category">
          {year} • {category} • {rating}
        </span>
        
        <h3 className="media-title">{title}</h3>
       
      </div>
      <button className="bookmark-btn" onClick={onBookmark}>
        <FontAwesomeIcon icon={isBookmarked ? solidBookmark : regularBookmark} />
      </button>
    </div>
  );
}

export default MediaCard;
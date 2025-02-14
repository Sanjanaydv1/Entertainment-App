import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import MediaCard from "../components/MediaCard";

function Home() {
  const [trendingMedia, setTrendingMedia] = useState([]);
  const [bookmarks, setBookmarks] = useState(new Set());
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrendingMedia();
  }, []);

  const fetchTrendingMedia = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/all/week?api_key=e2dc77d3c8882f5544e121827fa5f47b"
      );
      if (!response.ok) throw new Error("Failed to fetch trending media");
      const data = await response.json();
      setTrendingMedia(data.results);
    } catch (err) {
      setError("Failed to fetch trending media");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (query) => {
    if (!query.trim()) return setSearchResults([]);
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=e2dc77d3c8882f5544e121827fa5f47b&query=${query}`
      );
      if (!response.ok) throw new Error("Search failed");
      const data = await response.json();
      setSearchResults(data.results);
    } catch (err) {
      setError("Search failed");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleBookmark = (id) => {
    setBookmarks((prev) => {
      const updated = new Set(prev);
      updated.has(id) ? updated.delete(id) : updated.add(id);
      return updated;
    });
  };

  const mediaToDisplay = searchResults.length ? searchResults : trendingMedia;

  if (isLoading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="container">
      <SearchBar placeholder="Search for movies or TV series" onSearch={handleSearch} />
      <h2 className="section-title">
        {searchResults.length ? "Search Results" : "Trending"}
      </h2>
      <div className="media-grid">
        {mediaToDisplay.map((item) => (
          <MediaCard
            key={item.id}
            title={item.title || item.name || "Untitled"}
            year={(item.release_date || item.first_air_date || "").split("-")[0]}
            category={item.media_type === "movie" ? "Movie" : "TV Series"}
            rating={`${(item.vote_average || 0).toFixed(1)}/10`}
            thumbnail={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            isBookmarked={bookmarks.has(item.id)}
            onBookmark={() => toggleBookmark(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
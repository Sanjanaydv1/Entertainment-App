import "./App.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div>
      <Sidebar selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />
      <Home selectedFilter={selectedFilter} />
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Favorites from "./components/Favorites.jsx";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [favorite, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem("nasa-favorites");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("nasa-favorites", JSON.stringify(favorite));
  }, [favorite]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  function addToFavorites(data) {
    const newItem = {
      title: data.title,
      url: data.url,
      hdurl: data.hdurl,
      explanation: data.explanation,
      date: data.date,
      media_type: data.media_type,
    };
    setFavorites((prev) => {
      const exists = prev.find((item) => item.date === newItem.date);
      if (exists) return prev;
      return [...prev, newItem];
    });
  }

  return (
    <div className="App" data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home addToFavorites={addToFavorites} />} />
        <Route path="/favorites" element={<Favorites favorites={favorite} />} />
      </Routes>
    </div>
  );
}

export default App;

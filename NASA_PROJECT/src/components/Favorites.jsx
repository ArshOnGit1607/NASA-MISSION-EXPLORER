import { useState } from "react";
import Card from "./Card.jsx";

function Favorites({ favorites }) {
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("a-z");

  const list = favorites
    .filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (order === "a-z") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

  return (
    <div className="Favorites">
      <h2>⭐ Favorites</h2>

      {favorites.length > 0 && (
        <div className="FavoritesControls">
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="a-z">A - Z</option>
            <option value="z-a">Z - A</option>
          </select>
        </div>
      )}

      {list.length === 0 ? (
        <div className="FavoritesEmpty">
          {favorites.length === 0 ? "No favorites yet" : "Nothing here yet"}
        </div>
      ) : (
        list.map((item) => (
          <Card
            key={item.date}
            url={item.url}
            title={item.title}
            explanation={item.explanation}
          />
        ))
      )}
    </div>
  );
}

export default Favorites;// Favorites page with search and filter functionality

import SearchBar from "./SearchBar.jsx";
import Card from "./Card.jsx";
import { useState } from "react";

function Home({ addToFavorites }) {
  const [date, setDate] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const API = "seESAi8BatV1S5mzEGTu08ruAQwyMh6Vnegk67Vg";

  const fetchAPI = async (selectedDate) => {
    if (!selectedDate) return alert("Please select a date");
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API}&date=${selectedDate}`
      );
      if (!res.ok) {
        throw new Error(`NASA API returned ${res.status} ${res.statusText}`);
      }
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error(err);
      alert(`Something went wrong: ${err.message || "Failed to fetch data from NASA API."}`);
    }
    setLoading(false);
  };

  return (
    <div className="Home">
      <SearchBar date={date} setDate={setDate} fetchAPI={fetchAPI} />
      {loading && <div>🚀loading....</div>}
      {data && (
        <Card
          addToFavorites={() => addToFavorites(data)}
          key={data.url}
          url={data.url}
          title={data.title}
          explanation={data.explanation}
        />
      )}
    </div>
  );
}

export default Home;
// Create Home page component

import Header from "./components/Header.jsx"
import SearchBar from "./components/SearchBar.jsx"
import Card from "./components/Card.jsx"
import Loader from "./components/loading.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

function App(){
    const [date, setDate] = useState("");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const API="seESAi8BatV1S5mzEGTu08ruAQwyMh6Vnegk67Vg"

    const fetchAPI = async (selectedDate) => {
    if (!selectedDate) return alert("Please select a date");
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API}&date=${selectedDate}`
      );
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
    setLoading(false);
  }
return (
<div className="App">
   <Header/>
   <SearchBar setDate={setDate} fetchAPI={fetchAPI}/>
   {loading && <Loader />}
   {data && <Card url={data.url} title={data.title} explanation={data.explanation}/>}
   <Footer/>
</div>
)
}
export default App


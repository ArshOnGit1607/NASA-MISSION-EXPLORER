function SearchBar({ setDate, fetchAPI }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedDate = e.target.date.value;
        fetchAPI(selectedDate);
    };

    return (
        <div className="Search">
            <form onSubmit={handleSubmit} className="SearchBox">
                <input
                    type="date"
                    name="date"
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;
function Card({ url, title, explanation, addToFavorites }) {
    return (
        <div className="Card">
            <img src={url} alt={title} />
            <div className="CardContent">
                <h2>{title}</h2>
                <p>{explanation}</p>
                <div style={{display:"flex",justifyContent:"center"}}>
                <button onClick={addToFavorites} id="saveButton">⭐️ save</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
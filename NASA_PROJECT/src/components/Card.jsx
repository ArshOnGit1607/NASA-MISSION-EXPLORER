function Card({ url, title, explanation }) {
    return (
        <div className="Card">
            <img src={url} alt={title} />
            <div className="CardContent">
                <h2>{title}</h2>
                <p>{explanation}</p>
            </div>
        </div>
    );
}

export default Card;
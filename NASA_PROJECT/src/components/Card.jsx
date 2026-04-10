import { useState } from "react";

function Card({ url, hdurl, title, explanation, addToFavorites }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="Card">
                <div className="CardImgWrapper" onClick={() => setOpen(true)}>
                    <img src={url} alt={title} />
                    <span className="HdHint">🔍 View HD</span>
                </div>
                <div className="CardContent">
                    <h2>{title}</h2>
                    <p>{explanation}</p>
                    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                        {addToFavorites && (
                            <button onClick={addToFavorites} id="saveButton">⭐️ save</button>
                        )}
                        <button onClick={() => setOpen(true)} id="hdButton">📸 View HD</button>
                    </div>
                </div>
            </div>

            {open && (
                <div className="Lightbox" onClick={() => setOpen(false)}>
                    <button className="LightboxClose" onClick={() => setOpen(false)}>✕</button>
                    <img
                        src={hdurl || url}
                        alt={title}
                        className="LightboxImg"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}

export default Card;
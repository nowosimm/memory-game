import "../styles/Card.css"

export function Card({ src, label }) {
    return (
        <figure className="card__Component">
            <img src={src} />
            <figcaption>{label}</figcaption>
        </figure>
    );
}
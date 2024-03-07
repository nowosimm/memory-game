import Bianca from "../images/Bianca.jpg"
import Bob from "../images/Bob.jpg"
import Brewster from "../images/Brewster.jpg"
import Grizzly from "../images/Grizzly.png"
import Isabella from "../images/Isabella.jpg"
import KKSlider from "../images/KKSlider.png"
import Marshal from "../images/Marshal.jpg"
import Merengue from "../images/Merengue.jpg"
import Prince from "../images/Prince.jpg"
import Raymond from "../images/Raymond.jpg"
import Rosie from "../images/Rosie.jpg"
import TomNook from "../images/TomNook.jpg"

import { Card } from "./Card"

import "../styles/CardElements.css"

export function CardData() {
    let cardData = [
        { id: 1, label: "Bianca", src: Bianca },
        { id: 2, label: "Bob", src: Bob },
        { id: 3, label: "Brewster", src: Brewster },
        { id: 4, label: "Grizzly", src: Grizzly },
        { id: 5, label: "Isabella", src: Isabella },
        { id: 6, label: "K.K. Slider", src: KKSlider },
        { id: 7, label: "Marshal", src: Marshal },
        { id: 8, label: "Merengue", src: Merengue },
        { id: 9, label: "Prince", src: Prince },
        { id: 10, label: "Raymond", src: Raymond },
        { id: 11, label: "Rosie", src: Rosie },
        { id: 12, label: "Tom Nook", src: TomNook },
    ]

    return (
        <div className="card__Container">
            {cardData.map((card) => (
                <Card key={card.id} src={card.src} label={card.label} />
            ))}
        </div>

    )
}
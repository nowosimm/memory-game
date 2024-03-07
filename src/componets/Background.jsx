import BackgroundImage from "../images/Background.jpg"
import "../styles/Background.css"
import { CardData } from './CardData'


export function Background() {
    return (
        <div>
            <div className="background__Image" style={{ backgroundImage: `url(${BackgroundImage})`, position: 'absolute' }}>
                <CardData />
            </div>
        </div >

    )
}


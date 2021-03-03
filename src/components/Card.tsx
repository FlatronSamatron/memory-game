import {Row,Image} from 'react-bootstrap'
import Win from './Win'

type Props ={
    flipHandler: (x: number, y: number, cardNumber: number) => void,
    cards: any[],
}

interface props {
    card: number;
    flip: boolean;
    match: boolean;
}

const Card: React.FC<Props> = ({flipHandler, cards}) => {

    let win = cards.flat().filter( el => !el.match).length

    let fieldCard = cards.map( (el,x) => {
        return <Row key = {el+x}>
        {el.map( ({card, flip, match}:props, y:number) => {
            let cardNumber = card
            return <div className="cards" key = {el+y} onClick={()=>flipHandler(x,y,cardNumber)}>
                {/* <div className={!flip ? 'card flipped' : 'card'}> */}
                <div className={flip || match ? 'card' : 'card flipped'}>
                    <div className="front">
                        <Image src={require(`../images/${card}.svg`).default} thumbnail />
                    </div>
                    <div className="back"></div>
                    </div>
                </div>
        })}
        </Row>
    })
    
    return (
        <div>
            {win === 0 ? <Win/> : fieldCard}
        </div>
    )
}

export default Card

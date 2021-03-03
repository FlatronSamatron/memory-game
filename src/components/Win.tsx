import { Button } from 'react-bootstrap'
import img from '../images/unnamed.png'

type props ={
  score:number,
  newGame: () => void
}

const Win:React.FC<props> = ({score, newGame}) => {

    return (
        <div className='win-block'>
            <img src={img} alt=""/>
            <p className="score">Your score: {score}</p>
            <Button variant="info" onClick={newGame}>New Game</Button>
        </div>
    )
}

export default Win

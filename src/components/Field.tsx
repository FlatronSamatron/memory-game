import React,{useState, useEffect} from 'react'
import {Container} from 'react-bootstrap'
import Card from './Card'


type FieldCountProps ={
    fieldCount: number,
    timer: boolean,
    score: number,
    changeScore: (scores: number) => void
}

type arrType = {
    card: number;
    flip: boolean;
    match: boolean;
}[][]

type objType = {x: number,y: number, cardNumber:number} | null



const Field: React.FC<FieldCountProps> = ({fieldCount,timer, score, changeScore}) => {

    const [cards, setCards] = useState<arrType>([])
    const [match, setMatchCard] = useState<objType>(null)

    const createField = () => {
        let numbers = Array.from(Array(fieldCount).keys())
        .concat(Array.from(Array(fieldCount).keys()))

        let number = numbers.map( el => {
            return {card: el, flip: true, match: false}
        })

        number.sort(()=> Math.random() - 0.5)

        let cnt = -1

        let width = fieldCount === 4 ? 2 : fieldCount === 6 ? 3 : 4 
        let height = fieldCount < 10 ? 4 : fieldCount/2

        let arr = Array.from({ length: width }, 
            () => Array.from({ length: height }, 
              () => {
                cnt++
                return number[cnt]
              }
            )
        );
        setCards(arr)
    }

    useEffect(() => {
        createField()
        if(timer){
            let flipCard = cards.map( el => el.map( card => {
                return {...card, flip: false}
            }))
            setCards(flipCard)
        }
    },[fieldCount,timer])

    React.useMemo(()=>createField(),[fieldCount])

    const flipHandler = (x: number,y: number, cardNumber:number) => {
    
        let newCards = cards.map( (el, cardX) => el.map( (card, cardY) => {
            if(cardX === x && cardY === y){
                return {...card, flip: !card.flip}
            } else {
                return {...card}
            }
        }))

        setCards(newCards)

        setMatchCard({x,y,cardNumber})

        let t = setTimeout(()=>{
            if(match){
            if((match.cardNumber !== cardNumber) || (match.x === x && match.y === y)){
                let flipCard = cards.map( el => el.map( card => {
                    return {...card, flip: false}
                }))
                changeScore(score - 5)
                setCards(flipCard)
                setMatchCard(null)
            } else {
                changeScore(score + 10)
                let newCards = cards.map( (el, cardX) => el.map( (card, cardY) => {
                    if((cardX === match.x) && (cardY === match.y)){
                        return {...card, match: true}
                    } else {
                        return {...card}
                    }
                })).map( (el, cardX) => el.map( (card, cardY) => {
                    if((cardX === x) && (cardY === y)){
                        return {...card, match: true}
                    } else {
                        return {...card}
                    }
                }))
                setCards(newCards)
                setMatchCard(null)
            }
        }
        },1000)
    }

    return (
        <Container>
            <Card 
            flipHandler={flipHandler}
            cards={cards}
            />
        </Container>
    )
}

export default Field

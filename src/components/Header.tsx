import {Dropdown, DropdownButton, Alert} from 'react-bootstrap'

type headerProps = {
    fieldCount: number;
    difficult:(num:string | null)=>void;
    score: number
}

const Header:React.FC<headerProps> = ({fieldCount, difficult, score}) => {

    let difficulty = `Difficulty: ${fieldCount}`

    return (
        <header>
            <div>
                <Alert variant='success'>
                    Score: {score}
                </Alert>
            </div>
            <div className="select">
                <DropdownButton onSelect={(e)=>{difficult(e)}}
                    title={difficulty}
                    variant='success'
                    >
                    <Dropdown.Item eventKey="4">4</Dropdown.Item>
                    <Dropdown.Item eventKey="6">6</Dropdown.Item>
                    <Dropdown.Item eventKey="8">8</Dropdown.Item>
                    <Dropdown.Item eventKey="10">10</Dropdown.Item>
                    <Dropdown.Item eventKey="12">12</Dropdown.Item>
                    <Dropdown.Item eventKey="14">14</Dropdown.Item>
                </DropdownButton>
            </div>
        </header>       
    )
}

export default Header

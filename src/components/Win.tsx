import { Card, Button } from 'react-bootstrap'
import img from '../images/congrat.webp'

const Win = () => {

    // const blockStyle = {
    //     width:'100%',
    //     height: '100vh',
    //     backgroundImage: `${}`
    // }

    return (
        <div className='win-block'>
            <Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Win

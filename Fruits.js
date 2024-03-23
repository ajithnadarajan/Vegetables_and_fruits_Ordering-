import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Cart.css';
import Navigationbar from '../navfolder/Navigationbar';
export default function Fruits() {
  return (
    <div>
      
          <Navigationbar/>
   <div className='inputbg'>     <input className='searchbar' placeholder='search...'/></div>
    <div className='cartbg'>
         <Container className='container'>
      <Row className='padding'>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='./fruitsimage/mango.jpg' alt="mango" width={200}   height={200} />
      <Card.Body>
        <Card.Title>Mango   <Button variant="outline-success">Available</Button></Card.Title>
        <Card.Text>
        <i class="bi bi-currency-rupee"></i><span>30/-</span>
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
        <Button className='buy'  variant="success">Buy</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='./fruitsimage/apple.jpg' alt="apple"  width={200}   height={200}/>
      <Card.Body>
        <Card.Title>Apple   <Button variant="outline-success">Available</Button></Card.Title>
        <Card.Text>
        <i class="bi bi-currency-rupee"></i><span>50/-</span>
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
        <Button className='buy'  variant="success">Buy</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='./fruitsimage/banana.jpg' alt="banana"  width={200}   height={200}/>
      <Card.Body>
        <Card.Title>Banana   <Button variant="outline-success">Available</Button></Card.Title>
        <Card.Text>
        <i class="bi bi-currency-rupee"></i><span>20/-</span>
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
        <Button className='buy'  variant="success">Buy</Button>
      </Card.Body>
    </Card></Col>
      </Row>
      <Row className='padding'>
        <Col><Card style={{ width: '18rem' }}>
     <Card.Img src='./fruitsimage/orange.jpg' alt="orange"width={200}   height={200} />
      <Card.Body>
        <Card.Title>Orange   <Button variant="outline-success">Available</Button></Card.Title>
        <Card.Text>
        <i class="bi bi-currency-rupee"></i><span>10/-</span>
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
        <Button className='buy'  variant="success">Buy</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img src='./fruitsimage/jackfruit.jpg'   alt="jackfruit"  width={200}   height={200}/>
      <Card.Body>
        <Card.Title>JackFruit   <Button variant="outline-danger">Unavailable</Button></Card.Title>
        <Card.Text>
        <i class="bi bi-currency-rupee"></i><span>50/-</span>
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
        <Button className='buy'  variant="success">Buy</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img src='./fruitsimage/red grapes.jpg'   alt="red grapes"  width={200}   height={200}/>
      <Card.Body>
        <Card.Title>Red Grape's   <Button variant="outline-success">Available</Button></Card.Title>
        <Card.Text>
        <i class="bi bi-currency-rupee"></i><span>80/-</span>
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
        <Button className='buy'  variant="success">Buy</Button>
      </Card.Body>
    </Card></Col>
      </Row>
      <Row className='padding'>
        <Col><Card style={{ width: '18rem' }}>
     <Card.Img src='./fruitsimage/pomegranate.jpg' alt="pomegranate"width={200}   height={200} />
      <Card.Body>
        <Card.Title>Pomegranate  <Button variant="outline-success">Available</Button></Card.Title>
        <Card.Text>
        <i class="bi bi-currency-rupee"></i><span>10/-</span>
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
        <Button className='buy'  variant="success">Buy</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img src='./fruitsimage/dragonfruit.jpg'   alt="dragonfruit"  width={200}   height={200}/>
      <Card.Body>
        <Card.Title>DragonFruit   <Button variant="outline-success">Available</Button></Card.Title>
        <Card.Text>
        <i class="bi bi-currency-rupee"></i><span>50/-</span>
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
        <Button className='buy'  variant="success">Buy</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img src='./fruitsimage/papaya.jpg'   alt="papaya"  width={200}   height={200}/>
      <Card.Body>
        <Card.Title>Papaya  <Button variant="outline-danger">Unavailable</Button></Card.Title>
        <Card.Text>
        <i class="bi bi-currency-rupee"></i><span>40/-</span>
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
        <Button className='buy'  variant="success">Buy</Button>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>
    </div>
    </div>
  )
}

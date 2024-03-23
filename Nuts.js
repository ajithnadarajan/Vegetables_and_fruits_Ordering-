import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Cart.css';
import Navigationbar from '../navfolder/Navigationbar';
export default function Carts() {
  return (

    <div>
        
    <Navigationbar/>
    <div className='cartbg'>
      <div className='inputbg'>     <input className='searchbar' placeholder='search...'/></div>
         <Container className='container'>
      <Row className='padding'>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-photo/tomatoes-wooden-table-with-water-droplets_771703-16057.jpg" width={200}   height={200} />
      <Card.Body>
        <Card.Title>Tomato    <Button variant="outline-success">Available</Button></Card.Title>
        <Card.Text>
        <i class="bi bi-currency-rupee"></i><span>30/-</span>
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
        <Button className='buy'  variant="success">Buy</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='./image/carrot.jpg' alt="carrot"  width={200}   height={200}/>
      <Card.Body>
        <Card.Title>Carrot   <Button variant="outline-success">Available</Button></Card.Title>
        <Card.Text>
        <i class="bi bi-currency-rupee"></i><span>50/-</span>
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
        <Button className='buy'  variant="success">Buy</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='./image/brinjal.jpg' alt="brinjal"  width={200}   height={200}/>
      <Card.Body>
        <Card.Title>Brinjal   <Button variant="outline-success">Available</Button></Card.Title>
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
     <Card.Img src='./image/chilli1.jpg' alt="chilli"width={200}   height={200} />
      <Card.Body>
        <Card.Title>Chilli   <Button variant="outline-success">Available</Button></Card.Title>
        <Card.Text>
        <i class="bi bi-currency-rupee"></i><span>10/-</span>
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
        <Button className='buy'  variant="success">Buy</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img src='./image/ladysfinger.jpg'   alt="ladysfinger"  width={200}   height={200}/>
      <Card.Body>
        <Card.Title>Lady's Finger   <Button variant="outline-danger">Unavailable</Button></Card.Title>
        <Card.Text>
        <i class="bi bi-currency-rupee"></i><span>50/-</span>
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
        <Button className='buy'  variant="success">Buy</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img src='./image/pumpkin.jpg'   alt="pumpkin"  width={200}   height={200}/>
      <Card.Body>
        <Card.Title>Pumpkin   <Button variant="outline-success">Available</Button></Card.Title>
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
     <Card.Img src='./image/beetroot.jpg' alt="beetroot"width={200}   height={200} />
      <Card.Body>
        <Card.Title>Beetroot   <Button variant="outline-success">Available</Button></Card.Title>
        <Card.Text>
        <i class="bi bi-currency-rupee"></i><span>10/-</span>
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
        <Button className='buy'  variant="success">Buy</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img src='./image/potato.jpg'   alt="potato"  width={200}   height={200}/>
      <Card.Body>
        <Card.Title>Potato   <Button variant="outline-success">Available</Button></Card.Title>
        <Card.Text>
        <i class="bi bi-currency-rupee"></i><span>50/-</span>
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
        <Button className='buy'  variant="success">Buy</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img src='./image/stick.jpg'   alt="pumpkin"  width={200}   height={200}/>
      <Card.Body>
        <Card.Title>Drumstick   <Button variant="outline-danger">Unavailable</Button></Card.Title>
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

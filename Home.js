import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';
import Navigationbar from './Navigationbar';
import WebFooter from './WebFooter';
const Home = () => {
  return (
    <div>
   <Navigationbar/>

      <div className='caro'>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div className='off1clr'>
        <img
          className="offer1"
          src='./about/offer2.jpg'
          alt="First slide"
        />
        </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='off2clr'>
        <img
          className="offer2"
          src='./about/bestfruit.jpeg'
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div>
      <video className='ad'
      autoPlay 
      loop
      show all controls >
        <source src='./ads/advideo.mp4'   />
      </video>
      </div>
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='offerbutton'>
     
     <div>  <button className='bt1' style={{color:'black'}}>Allium</button></div> 
     <div>   <button className='bt2' style={{color:'brown'}}>Roots</button></div> 
     <div>   <button className='bt3' style={{color:'white'}}>Leafs Green</button></div> 
     <div>    <button className='bt4' style={{color:'white'}}>Fleshy Fruits</button></div> 
     <div>     <button className='bt5' style={{color:'gold'}}>New Offers</button></div>  
    
    </div>
    <h4>Top Selling</h4>
    <div className='homecart'>
    
      <Row >
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='./fruitsimage/mango.jpg' alt="mango" width={200}   height={200} />
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

       
      </Row>
      
      <Row >
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='./fruitsimage/mango.jpg' alt="mango" width={200}   height={200} />
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
      </Row>
    </div>
    <div>
      <h4>Best Offers</h4>
         <div className='offercard'>
          <div className='dealbg'>
      <Card style={{ width: '10rem', height:'10rem'}} >
      <Card.Body className='deals' >
        <Card.Title><span style={{color:'white'}} className='topdeal'>DEALS OF</span> <span className='bestoffer1'style={{color:'black'}}>THE WEEK</span></Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        
      </Card.Body>
    </Card>
    </div>
    <Card style={{ width: '10rem' }}>
      <Card.Body className='deals'>
        <Card.Title><span style={{color:'white'}} className='topdeal'>COMBOS</span><span className='bestoffer1'style={{color:'black'}}>YOU CAN'T MISS</span></Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>   
          
      </Card.Body>
    </Card>

    <Card style={{ width: '10rem' }}>
      <Card.Body className='deals'>
        <Card.Title><span style={{color:'white'}} className='topdeal'>BIG PACK</span><span className='bestoffer1' style={{color:'black'}}> BIGGER DISCOUNT</span></Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          
      </Card.Body>
    </Card>

    <Card style={{ width: '10rem' }}>
      <Card.Body className='deals'>
        <Card.Title><span style={{color:'white'}} className='topdeal'>THE</span><span className='bestoffer1'style={{color:'black'}}> <i class="bi bi-currency-rupee"></i>20 CORNER</span></Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        
      </Card.Body>
    </Card>
    </div>
    <WebFooter/>
    </div>
    
      
       



























       </div>
      
  )
}

export default Home;
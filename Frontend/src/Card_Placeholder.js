import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';


function Card_Placeholder(props) {
  return (
  
     
     <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${props.data.imgURL}` }/>
        <Card.Body>
          <Card.Title>{props.data.name} ({props.data.subService}) </Card.Title>
          <Card.Text>
           Contact No:{props.data.contactNumber} <br/>
           Email:{props.data.mail} <br/>
           Address:{props.data.address} <br/>
          
          </Card.Text>
          <Button variant="primary"> {props.data.URL?<b>URL:{props.data.URL}</b>:null}</Button>
        </Card.Body>
      </Card>
    
  );
}

export default Card_Placeholder;
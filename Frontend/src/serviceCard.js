import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
// import image from './edu.jpg'

function serviceCard(props) {
    const navigate = useNavigate;   
 
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={props.image} alt={props.service.toUpperCase()} />
      <Card.Body>
        <Card.Title>{props.name.toUpperCase()}</Card.Title>
        <Card.Text>
          {props.subservice}
        </Card.Text>
        <Button variant="primary" onClick={()=> navigate(`/${props.title}`,{state:props.title})}>Go to {props.title.toUpperCase()}</Button>
        {/* <Button variant="primary" onClick={()=> navigate('/search',{state:props.title})}>Go to {props.title.toUpperCase()}</Button> */}
      </Card.Body>
    </Card>
  );
}

export default serviceCard;

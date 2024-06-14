import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate} from 'react-router-dom' ;
// import image from './edu.jpg'
import { useLocation } from 'react-router-dom';

function CardBody(props) {
    const navigate = useNavigate();
    const loc=useLocation();
   console.warn("use",loc)
 
  return (
    <Card style={{ width: '20rem',textAlign:'center' }}>
      <Card.Img variant="top" src={props.image} alt={props.title.toUpperCase()} />
      <Card.Body>
        <Card.Title>{props.title.toUpperCase()}</Card.Title>
        <Card.Text>
          {props.message}
        </Card.Text>
        <Button variant="primary" onClick={()=> navigate(`/${props.title}`,{state:props.title})}>Go to {props.title.toUpperCase()}</Button>
        {/* <Button variant="primary" onClick={()=> navigate(`/${loc.state}`,{state:loc.state})}>Go to {props.title.toUpperCase()}</Button> */}
      </Card.Body>
    </Card>
  );
}

export default CardBody;

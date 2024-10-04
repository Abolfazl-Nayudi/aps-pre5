import { Card } from "react-bootstrap";
import Button from "./Button";
export default function CardComponent({ data }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.imageSrc} alt={data.alt} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <Button text="click me" background="bisque" color="red"></Button>
      </Card.Body>
    </Card>
  );
}

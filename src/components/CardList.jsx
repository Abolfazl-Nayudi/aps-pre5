// import React from "react";
// import { Card, Col, Container, Row } from "react-bootstrap";
// import Button from "./Button";
// import card1 from "/cards/card1.jpg";
// import card2 from "/cards/card2.jpg";
// import card3 from "/cards/card3.jpg";
// import card4 from "/cards/card4.jpg";
// import card5 from "/cards/card5.jpg";
// import card6 from "/cards/card6.jpg";

// const cards = [
//   {
//     title: "Mountain Adventure",
//     description: "Explore the scenic mountains and enjoy breathtaking views.",
//     imageSrc: card1,
//     alt: "Mountain landscape",
//   },
//   {
//     title: "City Lights",
//     description:
//       "Experience the vibrant nightlife and bustling streets of the city.",
//     imageSrc: card2,
//     alt: "City skyline at night",
//   },
//   {
//     title: "Tropical Paradise",
//     description:
//       "Relax on the beach and soak up the sun in a tropical paradise.",
//     imageSrc: card3,
//     alt: "Tropical beach with palm trees",
//   },
//   {
//     title: "Desert Safari",
//     description:
//       "Join a thrilling desert safari and discover the beauty of the dunes.",
//     imageSrc: card4,
//     alt: "Desert with sand dunes",
//   },
//   {
//     title: "Forest Retreat",
//     description: "Unwind in a peaceful forest retreat surrounded by nature.",
//     imageSrc: card5,
//     alt: "Dense forest with tall trees",
//   },
//   {
//     title: "Snowy Peaks",
//     description: "Enjoy skiing and snowboarding on snowy mountain peaks.",
//     imageSrc: card6,
//     alt: "Snow-covered mountain peaks",
//   },
// ];

// export default function Cards() {
//   return (
//     <Container style={{ marginTop: "2rem" }}>
//       <Row>
//         {cards.map((card, i) => {
//           return (
//             <Col
//               key={i}
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 margin: "2rem 0",
//               }}
//             >
//               <Card style={{ width: "18rem" }}>
//                 <Card.Img variant="top" src={card.imageSrc} alt={card.alt} />
//                 <Card.Body>
//                   <Card.Title>{card.title}</Card.Title>
//                   <Card.Text>{card.description}</Card.Text>
//                   <Button variant="primary">click here</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           );
//         })}
//       </Row>
//     </Container>
//   );
// }

import { Col, Container, Row } from "react-bootstrap";
import card1 from "/cards/card1.jpg";
import card2 from "/cards/card2.jpg";
import card3 from "/cards/card3.jpg";
import card4 from "/cards/card4.jpg";
import card5 from "/cards/card5.jpg";
import card6 from "/cards/card6.jpg";
import CardComponent from "./Card";

const cards = [
  {
    title: "Mountain Adventure",
    description: "Explore the scenic mountains and enjoy breathtaking views.",
    imageSrc: card1,
    alt: "Mountain landscape",
  },
  {
    title: "City Lights",
    description:
      "Experience the vibrant nightlife and bustling streets of the city.",
    imageSrc: card2,
    alt: "City skyline at night",
  },
  {
    title: "Tropical Paradise",
    description:
      "Relax on the beach and soak up the sun in a tropical paradise.",
    imageSrc: card3,
    alt: "Tropical beach with palm trees",
  },
  {
    title: "Desert Safari",
    description:
      "Join a thrilling desert safari and discover the beauty of the dunes.",
    imageSrc: card4,
    alt: "Desert with sand dunes",
  },
  {
    title: "Forest Retreat",
    description: "Unwind in a peaceful forest retreat surrounded by nature.",
    imageSrc: card5,
    alt: "Dense forest with tall trees",
  },
  {
    title: "Snowy Peaks",
    description: "Enjoy skiing and snowboarding on snowy mountain peaks.",
    imageSrc: card6,
    alt: "Snow-covered mountain peaks",
  },
];

export default function CardList() {
  return (
    <Container style={{ marginTop: "2rem" }}>
      <Row>
        {cards.map((card, i) => {
          return (
            <Col
              key={i}
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "2rem 0",
              }}
            >
              <CardComponent data={card} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

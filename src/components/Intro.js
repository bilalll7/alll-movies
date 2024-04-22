import { Button, Col, Container, Row } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">Nonton gratis</div>
            <div className="title">gapake karcis</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark">Lihat Semua list</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Intro;

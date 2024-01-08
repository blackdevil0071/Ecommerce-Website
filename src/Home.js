import { Card, Container, Table, Row, Col, Button } from "react-bootstrap";
import "./Home.css"; // Import your custom CSS file

const Home = () => {
  return (
    <>
      <Card
        className="bg-secondary text-white border-0 rounded-0 w-100 "
        style={{ height: "200px" }}
      >
            <Card.Body  className="d-flex  justify-content-center align-items-center">
          <Card
            className="bg-secondary text-white"
            style={{
              width: "fit-content",
              border: "1px solid lightblue",
              borderRadius: 0,
            }}
          >
            <Container className="p-3 h2">
              Get our latest Album
            </Container>
          </Card>
        </Card.Body>
      </Card>

      <h3>Tours</h3>

      <Row className="justify-content-center">
        <Col xs={12} md={9}>
          <Table className="mx-10 mr-5 table-sm custom-table" borderless>
            <tbody>
              <tr>
                <td>JUL 16</td>
                <td>DETROIT, MI</td>
                <td>DTE ENERGY MUSIC THEATRE</td>
                <td>
                  <Button variant="info" className="text-white">
                    Buy Tickets
                  </Button>
                </td>
              </tr>
              <tr>
                <td>JUL 16</td>
                <td>DETROIT, MI</td>
                <td>DTE ENERGY MUSIC THEATRE</td>
                <td>
                  <Button variant="info" className="text-white">
                    Buy Tickets
                  </Button>
                </td>
              </tr>

              <tr>
                <td>JUL 16</td>
                <td>DETROIT, MI</td>
                <td>DTE ENERGY MUSIC THEATRE</td>
                <td>
                  <Button variant="info" className="text-white">
                    Buy Tickets
                  </Button>
                </td>
              </tr>
              <tr>
                <td>JUL 16</td>
                <td>DETROIT, MI</td>
                <td>DTE ENERGY MUSIC THEATRE</td>
                <td>
                  <Button variant="info" className="text-white">
                    Buy Tickets
                  </Button>
                </td>
              </tr>
              <tr>
                <td>JUL 16</td>
                <td>DETROIT, MI</td>
                <td>DTE ENERGY MUSIC THEATRE</td>
                <td>
                  <Button variant="info" className="text-white">
                    Buy Tickets
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default Home;

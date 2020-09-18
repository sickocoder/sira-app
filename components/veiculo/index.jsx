import { Form, Col, Button } from 'react-bootstrap';
import { Container, Header } from '../carta/styles';

const Veiculo = () => (
  <Container>
    <Header>Cadastrar Veículo</Header>
    <div style={{ padding: '1.5rem' }}>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridImportador">
            <Form.Label>Marca</Form.Label>
            <Form.Control type="text" placeholder="Marca do veículo" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridMatricula" sm={12} md={6}>
            <Form.Label>Modelo</Form.Label>
            <Form.Control type="text" placeholder="Modelo do veículo" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridImportador" sm={12} md={6}>
            <Form.Label>Classe</Form.Label>
            <Form.Control as="select" defaultValue="Selecione a classe">
              <option>Trator</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridMatricula" sm={12} md={6}>
            <Form.Label>Número do Quadro</Form.Label>
            <Form.Control type="text" placeholder="Número do Quadro" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridMatricula" sm={12} md={6}>
            <Form.Label>Número DU</Form.Label>
            <Form.Control type="text" placeholder="Número DU" />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" style={{ marginTop: '2rem' }}>
          Concluir Cadastro
        </Button>
      </Form>
    </div>
  </Container>
);

export default Veiculo;

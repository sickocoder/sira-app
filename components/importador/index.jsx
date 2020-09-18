import { Form, Col, Button } from 'react-bootstrap';
import { Container, Header } from '../carta/styles';

const Importador = () => (
  <Container>
    <Header>Cadastrar Importador</Header>
    <div style={{ padding: '1.5rem' }}>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridImportador" sm={12} md={6}>
            <Form.Label>Nome do Importador</Form.Label>
            <Form.Control type="text" placeholder="Inserir Importador" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridImportador" sm={12} md={6}>
            <Form.Label>Tipo de importador</Form.Label>
            <Form.Control as="select" defaultValue="Selecione a Província">
              <option>Particular</option>
              <option>Empresa</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridProvincia">
            <Form.Label>Tipo de Documento</Form.Label>
            <Form.Control as="select" defaultValue="Selecione a Província">
              <option>BI</option>
              <option>Passaporte</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridMatricula" sm={12} md={6}>
            <Form.Label>Numero do Documento</Form.Label>
            <Form.Control type="text" placeholder="Numero do BI/Passaporte" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridData">
            <Form.Label>Data de Registro</Form.Label>
            <Form.Control type="date" placeholder="Selecionar data" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridMatricula" sm={12} md={6}>
            <Form.Label>Residencia</Form.Label>
            <Form.Control type="text" placeholder="Residencia" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridMatricula" sm={12} md={6}>
            <Form.Label>Contacto</Form.Label>
            <Form.Control type="text" placeholder="Numero de telefone" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridMatricula">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Endereco de email" />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" style={{ marginTop: '2rem' }}>
          Concluir Cadastro
        </Button>
      </Form>
    </div>
  </Container>
);

export default Importador;

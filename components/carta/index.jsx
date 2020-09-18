import { Form, Col, Button } from 'react-bootstrap';
import { Container, Header } from './styles';

const Carta = () => (
  <Container>
    <Header>Cadastrar Novo Livrete</Header>
    <div style={{ padding: '1.5rem' }}>
      <Form>
        <Form.Group controlId="formGridImportador">
          <Form.Label>Importador</Form.Label>
          <Form.Control type="text" placeholder="Inserir Importador" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridMatricula" sm={12} md={6}>
            <Form.Label>Matrícula</Form.Label>
            <Form.Control type="text" placeholder="Inserir Matrícula" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDataRegistro">
            <Form.Label>Data do Primerio Registro</Form.Label>
            <Form.Control type="date" placeholder="Inserir Data" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridProvincia">
            <Form.Label>Província</Form.Label>
            <Form.Control as="select" defaultValue="Selecione a Província">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridMunicipio">
            <Form.Label>Município</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridBairro">
            <Form.Label>Bairro</Form.Label>
            <Form.Control type="text" placeholder="Inserir Bairro" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCasa">
            <Form.Label>Casa</Form.Label>
            <Form.Control type="text" placeholder=" Inserir nº da casa" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridMarca" sm={12} md={6}>
            <Form.Label>Marca do Veículo</Form.Label>
            <Form.Control type="text" placeholder="Inserir Marca" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridModelo">
            <Form.Label>Modelo do Veículo</Form.Label>
            <Form.Control type="text" placeholder="Inserir modelo" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridNumMotor">
            <Form.Label>Número do Motor</Form.Label>
            <Form.Control type="text" placeholder="Inserir Número do Motor" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridNumQuadro">
            <Form.Label>Número do Quadro</Form.Label>
            <Form.Control type="text" placeholder="Inserir Número do Quadro" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCor">
            <Form.Label>Cor do veículo</Form.Label>
            <Form.Control as="select" defaultValue="Selecione a Cor">
              <option>Escolher..</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridLotacao">
            <Form.Label>Lotação</Form.Label>
            <Form.Control type="number" placeholder="Inserir Lotação" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPeso">
            <Form.Label>Peso Bruto</Form.Label>
            <Form.Control type="number" placeholder="Inserir peso" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTara">
            <Form.Label>Tara</Form.Label>
            <Form.Control type="number" placeholder=" Inserir Tara" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridMedPneus">
            <Form.Label>Medida dos Pneus</Form.Label>
            <Form.Control type="number" placeholder=" Inserir Medida" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCombustivel">
            <Form.Label>Combustível</Form.Label>
            <Form.Control as="select" defaultValue="Selecione a Cor">
              <option>Escolher..</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCilindrada">
            <Form.Label>Cilindrada</Form.Label>
            <Form.Control type="text" placeholder="Inserir Cilindrada" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDistanciamento">
            <Form.Label>Distanciamento dos eixos</Form.Label>
            <Form.Control type="number" placeholder="Inserir Distanciamento" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridNumCilindros">
            <Form.Label>Nº de Cilindros</Form.Label>
            <Form.Control type="number" placeholder=" Inserir Colindros" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridTipoDoc">
            <Form.Label>Tipo Documento</Form.Label>
            <Form.Control as="select" defaultValue="Selecionar Tipo">
              <option>Bilhete De Identidade</option>
              <option>Cartão de Contribuinte</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridNumDoc">
            <Form.Label>Número do documento</Form.Label>
            <Form.Control type="text" placeholder="Inserir Número" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridData">
            <Form.Label>Data de Emissão</Form.Label>
            <Form.Control type="date" placeholder="Selecionar data" />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" style={{ marginTop: '2rem' }}>
          Concluir Cadastro
        </Button>
      </Form>
    </div>
  </Container>
);

export default Carta;

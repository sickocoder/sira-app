import { useState, useEffect } from 'react';

import { Table, Button } from 'react-bootstrap';
import { MdAdd } from 'react-icons/md';
import { SearchBar, SiraModal } from '..';
import { Veiculo } from '../../components';

const SiraTable = () => {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/veiculos')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <SiraModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        form={<Veiculo />}
      />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '1rem',
          paddingRight: 0,
        }}
      >
        <Button
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
          onClick={() => setModalShow(true)}
        >
          <MdAdd size={22} style={{ marginRight: '1rem' }} /> Novo Registro
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
          marginBottom: '1rem',
          borderRadius: 8,
          border: '0.01rem solid rgba(0, 0, 0, 0.1)',
        }}
      >
        <span style={{ fontSize: '1.2rem' }}>Lista de Veículos</span>
        <SearchBar />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Importador</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Classe Do Veiculo</th>
            <th>Nº Quadro</th>
            <th>Nº BI</th>
            <th>Nº DU</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.ID}>
              <td>{item.Importador}</td>
              <td>{item.Marca}</td>
              <td>{item.Modelo}</td>
              <td>{item.Classe_Veiculo}</td>
              <td>{item.Num_Quadro}</td>
              <td>{item.Num_BI}</td>
              <td>{item.Num_DU}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default SiraTable;

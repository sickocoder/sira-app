import { useState, useEffect } from 'react';

import { Table, Button } from 'react-bootstrap';
import { MdAdd } from 'react-icons/md';
import { SearchBar, SiraModal } from '..';
import { Carta } from '../../components';

const SiraTableMatricula = () => {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/livretes')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <SiraModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        form={<Carta />}
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
        <span style={{ fontSize: '1.2rem' }}>Lista de Matrículas/Livretes</span>
        <SearchBar />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Importador</th>
            <th>Matrícula</th>
            <th>Cor</th>
            <th>Combustível</th>
            <th>Lotação</th>
            <th>Data de Emissão</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.ID}>
              <td>{item.Nome_Importador}</td>
              <td>{item.Matricula}</td>
              <td>{item.Cor}</td>
              <td>{item.Combustivel}</td>
              <td>{item.Lotacao}</td>
              <td>{item.DataEmiss}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default SiraTableMatricula;

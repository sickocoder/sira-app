import { useState, useEffect } from 'react';

import { Table, Button } from 'react-bootstrap';
import { MdAdd } from 'react-icons/md';
import { SearchBar, SiraModal } from '..';
import { Importador } from '../../components';

const SiraTableImportador = () => {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/importadores')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <SiraModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        form={<Importador />}
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
        <span style={{ fontSize: '1.2rem' }}>Lista de Importadores</span>
        <SearchBar />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Nome</th>
            <th>Tipo de Doc.</th>
            <th>Nº Documento</th>
            <th>Data Registro</th>
            <th>Residência</th>
            <th>Email</th>
            <th>Contacto</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.ID}>
              <td>Particular</td>
              <td>{item.Nome_Importador}</td>
              <td>{item.Tipo_Documento}</td>
              <td>{item.Num_Documento}</td>
              <td>{item.Data_Registro}</td>
              <td>{item.Residencia}</td>
              <td>{item.Email}</td>
              <td>{item.Contacto}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default SiraTableImportador;

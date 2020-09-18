import { useState } from 'react';
import Head from 'next/head';
import { Button } from 'react-bootstrap';
import { MdAdd } from 'react-icons/md';

import { Layout } from '../components';

import { SiraTable, SiraModal } from '../elements';

export default function Home() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <SiraModal show={modalShow} onHide={() => setModalShow(false)} />
      <div>
        <Head>
          <title>SIRA</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
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
          <SiraTable />
        </Layout>
      </div>
    </>
  );
}

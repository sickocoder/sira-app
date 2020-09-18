import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Form, Col, Button, Alert } from 'react-bootstrap';

import { Container, LoginWrapper } from './styles';

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    if (user === 'teste' && pass === 'teste1234') {
      setError(false);
      router.push('/');
    } else {
      setError(true);
      setUser('');
      setPass('');
    }
  };

  return (
    <>
      <Head>
        <title>SIRA - Entrar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <LoginWrapper>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2rem',
            }}
          >
            <img
              src="/svg/logo_blue.svg"
              alt="logo blue"
              style={{ width: '60%' }}
            />
          </div>
          {error && <Alert variant="danger">Credencias erradas!</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Control
                  type="text"
                  placeholder="Nome de usuario"
                  onChange={(event) => setUser(event.target.value)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Control
                  type="password"
                  placeholder="Palavra Passe"
                  onChange={(event) => setPass(event.target.value)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '2rem',
              }}
            >
              <Button type="submit" style={{ minWidth: '12rem' }}>
                ENTRAR
              </Button>
            </Form.Row>
          </Form>
        </LoginWrapper>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1rem',
            color: '#fff',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          Esqueci a palavra passe
        </div>
      </Container>
    </>
  );
};

export default Login;

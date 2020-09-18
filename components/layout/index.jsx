import { useState } from 'react';

import LayoutNav from './layout.nav';
import { Container, ContentWrapper } from './styles';

import {
  SiraTable,
  SiraTableImportador,
  SiraTableMatricula,
} from '../../elements';

const Layout = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('importador');
  console.log(currentPage);
  return (
    <Container>
      <LayoutNav
        onPageChange={(page) => setCurrentPage(page)}
        current={currentPage}
      />
      <ContentWrapper>
        {(() => {
          if (currentPage === 'importador') return <SiraTableImportador />;
          if (currentPage === 'matricula') return <SiraTableMatricula />;
          else return <SiraTable />;
        })()}
      </ContentWrapper>
    </Container>
  );
};

export default Layout;

import { useRouter } from 'next/router';

import {
  SideNavWrapper,
  MainNavWrapper,
  LogoSection,
  MenuSection,
  MenuSectionLabel,
  MenuSectionItem,
} from './styles';

import {
  AiFillCar,
  AiOutlineUser,
  AiFillFile,
  AiOutlinePoweroff,
} from 'react-icons/ai';

const LayoutNav = ({ onPageChange, current = '' }) => {
  const router = useRouter();

  return (
    <>
      <SideNavWrapper>
        <LogoSection>
          <img src="/svg/logo.svg" alt="logo" />
        </LogoSection>
        <div style={{ padding: '1rem' }}>
          <MenuSection>
            <MenuSectionLabel>agt</MenuSectionLabel>
            <MenuSectionItem
              active={current === 'importador'}
              onClick={() => onPageChange('importador')}
            >
              <AiOutlineUser size={20} />
              <div>Registro de Importador</div>
            </MenuSectionItem>
            <MenuSectionItem
              active={current === 'veiculo'}
              onClick={() => onPageChange('veiculo')}
            >
              <AiFillCar size={20} />
              <div>Registro de Veículo</div>
            </MenuSectionItem>
          </MenuSection>

          <MenuSection>
            <MenuSectionLabel>DTSER/PNA</MenuSectionLabel>
            <MenuSectionItem
              active={current === 'matricula'}
              onClick={() => onPageChange('matricula')}
            >
              <AiFillFile size={20} />
              <div>Matrícula/Livrete</div>
            </MenuSectionItem>
          </MenuSection>

          <MenuSection>
            <MenuSectionLabel>cra/MINJUS</MenuSectionLabel>
            <MenuSectionItem>
              <AiFillFile size={20} />
              <div>Título de Propriedade</div>
            </MenuSectionItem>
          </MenuSection>

          <MenuSectionItem onClick={() => router.push('/login')}>
            <AiOutlinePoweroff size={20} />
            <div>SAIR</div>
          </MenuSectionItem>
        </div>
      </SideNavWrapper>
      <MainNavWrapper>
        <div style={{ fontSize: '1.2rem' }}>
          Solução de Controlo e Registo de Automóvel
        </div>
        <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>
          José Augusto | CRA/MINFIN
        </div>
        {/* <SearchBar /> */}
      </MainNavWrapper>
    </>
  );
};
export default LayoutNav;

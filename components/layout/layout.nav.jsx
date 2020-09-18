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

const LayoutNav = () => (
  <>
    <SideNavWrapper>
      <LogoSection>
        <img src="/svg/logo.svg" alt="logo" />
      </LogoSection>
      <div style={{ padding: '1rem' }}>
        <MenuSection>
          <MenuSectionLabel>agt</MenuSectionLabel>
          <MenuSectionItem style={{ fontWeight: 600, opacity: 1 }}>
            <AiOutlineUser size={20} />
            <div>Registro de Importador</div>
          </MenuSectionItem>
          <MenuSectionItem>
            <AiFillCar size={20} />
            <div>Registro de Veículo</div>
          </MenuSectionItem>
        </MenuSection>

        <MenuSection>
          <MenuSectionLabel>DTSER/PNA</MenuSectionLabel>
          <MenuSectionItem>
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

        <MenuSectionItem>
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
export default LayoutNav;

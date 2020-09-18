import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f7f8fb;

  display: flex;
  flex-direction: row;
`;

export const SideNavWrapper = styled.div`
  width: 14rem;
  height: 100vh;
  /* padding: 1rem; */

  color: #fff;
  background-color: #4e73df;
  background-image: linear-gradient(180deg, #4e73df 10%, #224abe 100%);
  background-size: cover;

  display: flex;
  flex-direction: column;
`;

export const LogoSection = styled.div`
  width: calc(100% - 2rem);
  height: 4rem;
  margin: 0 1rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-bottom: 0.01rem solid rgba(255, 255, 255, 0.3);

  img {
    width: 80%;
  }
`;

export const MenuSection = styled.ul`
  width: 100%;
  padding: 1rem 0;
  padding-top: 0;

  display: flex;
  flex-direction: column;

  border-bottom: 0.01rem solid rgba(255, 255, 255, 0.3);
`;

export const MenuSectionLabel = styled.label`
  text-transform: uppercase;
  font-size: 0.65rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.5);
`;

export const MenuSectionItem = styled.li`
  width: 100%;
  padding: 0.6rem 0;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  /* opacity: 0.5; */
  font-size: 0.9rem;

  font-weight: ${(props) => (props.active ? 600 : 'regular')};
  opacity: ${(props) => (props.active ? 1 : 0.5)};

  display: flex;
  flex-direction: row;
  align-items: center;

  & > div {
    margin-left: 0.5rem;
  }

  &:hover {
    opacity: 1;
  }
`;

// main content
export const MainNavWrapper = styled.nav`
  width: calc(100% - 14rem);
  height: 4rem;
  padding: 1rem 3rem;
  background-color: #fff;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);

  position: fixed;
  top: 0;
  left: 14rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  margin-top: 4rem;
  padding: 1rem 3rem;
  padding-top: 3rem;
`;

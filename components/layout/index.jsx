import LayoutNav from './layout.nav';
import { Container, ContentWrapper } from './styles';
const Layout = ({ children }) => (
  <Container>
    <LayoutNav />
    <ContentWrapper>{children}</ContentWrapper>
  </Container>
);

export default Layout;

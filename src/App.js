import Pages from "./pages/Pages";
import {BrowserRouter, Link} from "react-router-dom";
import { Category } from './components/Category';
import { Search } from "./components/Search";
import { GiKnifeFork } from "react-icons/gi";
import Styled from 'styled-components';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <Logo to={'/'}><GiKnifeFork /> Food App</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}
const Logo = Styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  color: #313131;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }

`;

const Nav = Styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg{
    font-size: 2rem;
  }
`;
export default App;

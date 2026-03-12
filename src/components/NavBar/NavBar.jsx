import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/">Página Inicial</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/cadastrar">Cadastrar Séries</Link></li>
        <li><Link to="/series">Lista de Séries</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;

import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Box } from '@mui/material';
import './NavBar.css';

function NavBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', mb: 3 }}>
      <Toolbar>
        <Box className="navbar-links">
          <NavLink to="/" end className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
            Página Inicial
          </NavLink>

          <NavLink to="/sobre" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
            Sobre
          </NavLink>

          <NavLink to="/cadastrar" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
            Cadastrar Séries
          </NavLink>

          <NavLink to="/series" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
            Lista de Séries
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

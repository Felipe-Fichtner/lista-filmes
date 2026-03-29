import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Box } from '@mui/material';
import './NavBar.css';

function NavBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f5db8', mb: 3 }}>
      <Toolbar>
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
        <li>
          <NavLink to="/" end>
            Página Inicial
          </NavLink>
        </li>
        <li>
          <NavLink to="/sobre">Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/cadastrar">Cadastrar Séries</NavLink>
        </li>
        <li>
          <NavLink to="/series">Lista de Séries</NavLink>
        </li>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

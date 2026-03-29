import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Box } from '@mui/material';
import './NavBar.css';

function NavBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f5db8', mb: 3 }}>
      <Toolbar>
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
          <NavLink to="/" end>
            Página Inicial
          </NavLink>

          <NavLink to="/sobre">Sobre</NavLink>

          <NavLink to="/cadastrar">Cadastrar Séries</NavLink>

          <NavLink to="/series">Lista de Séries</NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

describe('NavBar Component', () => {
  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Página Inicial')).toBeInTheDocument();
    expect(screen.getByText('Sobre')).toBeInTheDocument();
    expect(screen.getByText('Cadastrar Séries')).toBeInTheDocument();
    expect(screen.getByText('Lista de Séries')).toBeInTheDocument();
  });
});

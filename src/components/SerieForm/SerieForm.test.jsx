import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SerieForm from './SerieForm';

describe('SerieForm Component', () => {
  it('renders form fields', () => {
    const mockOnSubmit = vi.fn();
    
    render(
      <SerieForm
        onSubmit={mockOnSubmit}
        isSubmitting={false}
        submitLabel="Cadastrar"
        title="Teste"
      />
    );

    expect(screen.getByLabelText('Título')).toBeInTheDocument();
    expect(screen.getByLabelText('Número de Temporadas')).toBeInTheDocument();
    expect(screen.getByLabelText('Diretor')).toBeInTheDocument();
  });

  it('calls onSubmit with form data', async () => {
    const mockOnSubmit = vi.fn().mockResolvedValue(true);

    render(
      <SerieForm
        onSubmit={mockOnSubmit}
        isSubmitting={false}
        submitLabel="Cadastrar"
        title="Teste"
      />
    );

    fireEvent.change(screen.getByLabelText('Título'), {
      target: { value: 'Breaking Bad' },
    });
    fireEvent.change(screen.getByLabelText('Número de Temporadas'), {
      target: { value: '5' },
    });
    fireEvent.change(screen.getByLabelText('Data de Lançamento da Temporada'), {
      target: { value: '2008-01-20' },
    });
    fireEvent.change(screen.getByLabelText('Diretor'), {
      target: { value: 'Vince Gilligan' },
    });
    fireEvent.change(screen.getByLabelText('Produtora'), {
      target: { value: 'AMC' },
    });
    fireEvent.change(screen.getByLabelText('Categoria'), {
      target: { value: 'Drama' },
    });
    fireEvent.change(screen.getByLabelText('Data em que assistiu'), {
      target: { value: '2023-03-10' },
    });

    const button = screen.getByRole('button', { name: /Cadastrar/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });
  });
});

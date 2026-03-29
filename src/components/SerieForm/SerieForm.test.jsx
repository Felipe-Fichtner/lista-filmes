import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SerieForm from '../components/SerieForm/SerieForm';

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

    expect(screen.getByText('Título:')).toBeInTheDocument();
    expect(screen.getByText('Número de Temporadas:')).toBeInTheDocument();
    expect(screen.getByText('Diretor:')).toBeInTheDocument();
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

    const inputs = screen.getAllByRole('textbox');
    fireEvent.change(inputs[0], { target: { value: 'Breaking Bad' } });

    const button = screen.getByRole('button', { name: /Cadastrar/i });
    fireEvent.click(button);

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});

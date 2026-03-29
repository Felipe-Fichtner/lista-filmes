import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SerieList from './SerieList';

describe('SerieList Component', () => {
  const mockSeries = [
    {
      id: 1,
      title: 'Breaking Bad',
      seasons: 5,
      releaseDate: '2008-01-20',
      director: 'Vince Gilligan',
      production: 'AMC',
      category: 'Drama',
      watchedAt: '2023-03-10',
    },
  ];

  it('renders series list when data is provided', () => {
    const mockOnDelete = vi.fn();
    const mockOnEdit = vi.fn();

    render(
      <BrowserRouter>
        <SerieList
          series={mockSeries}
          onDelete={mockOnDelete}
          onEdit={mockOnEdit}
        />
      </BrowserRouter>
    );

    expect(screen.getByText('Breaking Bad')).toBeInTheDocument();
    expect(screen.getByText('Vince Gilligan')).toBeInTheDocument();
  });

  it('renders empty message when no series', () => {
    const mockOnDelete = vi.fn();
    const mockOnEdit = vi.fn();

    render(
      <BrowserRouter>
        <SerieList
          series={[]}
          onDelete={mockOnDelete}
          onEdit={mockOnEdit}
        />
      </BrowserRouter>
    );

    expect(screen.getByText('Nenhuma série cadastrada.')).toBeInTheDocument();
  });
});

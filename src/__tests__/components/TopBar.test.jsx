import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TopBar from '../../components/Layout/TopBar';

const mockFirma = {
  nazwa: 'Test Firma',
  podtytul: 'Test Podtytuł',
};

describe('TopBar', () => {
  it('renderuje nazwę i podtytuł firmy', () => {
    render(<TopBar firma={mockFirma} />);

    expect(screen.getByText('Test Podtytuł')).toBeInTheDocument();
    expect(screen.getByText('Test Firma')).toBeInTheDocument();
  });

  it('renderuje wszystkie linki nawigacyjne', () => {
    render(<TopBar firma={mockFirma} />);

    expect(screen.getByText('Sklep')).toBeInTheDocument();
    expect(screen.getByText('Ubezpieczenia')).toBeInTheDocument();
    expect(screen.getByText('O nas')).toBeInTheDocument();
    expect(screen.getByText('Kontakt')).toBeInTheDocument();
    expect(screen.getByText('Opinie')).toBeInTheDocument();
  });

  it('linki mają prawidłowe atrybuty href', () => {
    render(<TopBar firma={mockFirma} />);

    expect(screen.getByText('Sklep').closest('a')).toHaveAttribute('href', '#sklep');
    expect(screen.getByText('Ubezpieczenia').closest('a')).toHaveAttribute('href', '#ubezpieczenia');
    expect(screen.getByText('O nas').closest('a')).toHaveAttribute('href', '#o-nas');
    expect(screen.getByText('Kontakt').closest('a')).toHaveAttribute('href', '#kontakt');
    expect(screen.getByText('Opinie').closest('a')).toHaveAttribute('href', '#opinie');
  });
});

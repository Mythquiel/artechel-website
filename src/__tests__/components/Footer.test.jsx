import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../../components/Layout/Footer';

const mockFirma = {
  nazwa: 'Test Firma',
  podtytul: 'Test Podtytuł',
};

describe('Footer', () => {
  it('renderuje stopkę z nazwą firmy', () => {
    render(<Footer firma={mockFirma} />);

    expect(screen.getByText(/Test Firma/)).toBeInTheDocument();
    expect(screen.getByText(/Test Podtytuł/)).toBeInTheDocument();
  });

  it('renderuje bieżący rok', () => {
    const currentYear = new Date().getFullYear();
    render(<Footer firma={mockFirma} />);

    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });
});

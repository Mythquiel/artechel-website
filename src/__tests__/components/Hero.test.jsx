import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../../components/Hero/Hero';

const mockFirma = {
  nazwa: 'Test Firma',
  podtytul: 'Test Podtytuł',
  telefon: '123 456 789',
  email: 'test@example.com',
  adres: 'ul. Testowa 1',
  godziny: [
    ['Pon–Pt', '8:00–16:00'],
    ['Sobota', '9:00–13:00'],
  ],
};

describe('Hero', () => {
  it('renderuje główny nagłówek', () => {
    render(<Hero firma={mockFirma} />);
    expect(screen.getByText('Rodzinny sklep z tradycją od 35 lat')).toBeInTheDocument();
  });

  it('renderuje przycisk z numerem telefonu', () => {
    render(<Hero firma={mockFirma} />);
    const phoneButton = screen.getByText(/Zadzwoń:/);
    expect(phoneButton).toBeInTheDocument();
    expect(phoneButton.closest('a')).toHaveAttribute('href', 'tel:123456789');
  });

  it('renderuje godziny otwarcia', () => {
    render(<Hero firma={mockFirma} />);
    expect(screen.getByText('Zajrzyj do nas')).toBeInTheDocument();
    expect(screen.getByText('Pon–Pt')).toBeInTheDocument();
    expect(screen.getByText('8:00–16:00')).toBeInTheDocument();
    expect(screen.getByText('Sobota')).toBeInTheDocument();
    expect(screen.getByText('9:00–13:00')).toBeInTheDocument();
  });

  it('renderuje przycisk kontaktu', () => {
    render(<Hero firma={mockFirma} />);
    const contactButton = screen.getByText('Skontaktuj się z nami');
    expect(contactButton).toBeInTheDocument();
    expect(contactButton.closest('a')).toHaveAttribute('href', '#kontakt');
  });
});

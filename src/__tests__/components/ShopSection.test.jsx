import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ShopSection from '../../components/sections/ShopSection';

const mockSklep = [
  {
    t: 'Artykuły elektryczne',
    d: 'Opis artykułów elektrycznych',
    emoji: '💡',
  },
  {
    t: 'Baterie',
    d: 'Opis baterii',
    emoji: '🔋',
  },
];

describe('ShopSection', () => {
  it('renderuje nagłówek sekcji', () => {
    render(<ShopSection sklep={mockSklep} />);
    expect(screen.getByText('Nasza oferta')).toBeInTheDocument();
  });

  it('renderuje opis wiodący', () => {
    render(<ShopSection sklep={mockSklep} />);
    expect(screen.getByText(/Dysponujemy bogatym asortymentem/)).toBeInTheDocument();
  });

  it('renderuje wszystkie karty produktów', () => {
    render(<ShopSection sklep={mockSklep} />);

    expect(screen.getByText('Artykuły elektryczne')).toBeInTheDocument();
    expect(screen.getByText('Opis artykułów elektrycznych')).toBeInTheDocument();
    expect(screen.getByText('Baterie')).toBeInTheDocument();
    expect(screen.getByText('Opis baterii')).toBeInTheDocument();
  });

  it('ma prawidłowy ID dla nawigacji', () => {
    const { container } = render(<ShopSection sklep={mockSklep} />);
    expect(container.querySelector('#sklep')).toBeInTheDocument();
  });
});

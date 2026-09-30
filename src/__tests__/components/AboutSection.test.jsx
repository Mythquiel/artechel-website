import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutSection from '../../components/sections/AboutSection';

describe('AboutSection', () => {
  it('renderuje nagłówek sekcji', () => {
    render(<AboutSection />);
    expect(screen.getByText('O nas')).toBeInTheDocument();
  });

  it('renderuje główny tekst opisowy', () => {
    render(<AboutSection />);
    expect(screen.getByText(/Od ponad 35 lat obsługujemy/)).toBeInTheDocument();
  });

  it('renderuje listę zalet', () => {
    render(<AboutSection />);
    expect(screen.getByText('Dlaczego warto nas odwiedzić?')).toBeInTheDocument();
    expect(screen.getByText(/Ponad 35 lat doświadczenia/)).toBeInTheDocument();
    expect(screen.getByText(/Rodzinna firma/)).toBeInTheDocument();
    expect(screen.getByText(/Fachowe doradztwo/)).toBeInTheDocument();
  });

  it('ma prawidłowy ID dla nawigacji', () => {
    const { container } = render(<AboutSection />);
    expect(container.querySelector('#o-nas')).toBeInTheDocument();
  });
});

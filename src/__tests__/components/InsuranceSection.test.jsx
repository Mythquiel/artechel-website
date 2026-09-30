import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import InsuranceSection from '../../components/sections/InsuranceSection';

const mockUbezp = [
  {
    t: 'Ubezpieczenia komunikacyjne',
    d: 'Opis ubezpieczeń komunikacyjnych',
    emoji: '🚙',
  },
  {
    t: 'Ubezpieczenia majątkowe',
    d: 'Opis ubezpieczeń majątkowych',
    emoji: '🏡',
  },
];

describe('InsuranceSection', () => {
  it('renderuje nagłówek sekcji', () => {
    render(<InsuranceSection ubezpieczenia={mockUbezp} />);
    expect(screen.getByText('Ubezpieczenia')).toBeInTheDocument();
  });

  it('renderuje opis wiodący', () => {
    render(<InsuranceSection ubezpieczenia={mockUbezp} />);
    expect(screen.getByText(/Jako agent ubezpieczeniowy/)).toBeInTheDocument();
  });

  it('renderuje wszystkie karty ubezpieczeń', () => {
    render(<InsuranceSection ubezpieczenia={mockUbezp} />);

    expect(screen.getByText('Ubezpieczenia komunikacyjne')).toBeInTheDocument();
    expect(screen.getByText('Opis ubezpieczeń komunikacyjnych')).toBeInTheDocument();
    expect(screen.getByText('Ubezpieczenia majątkowe')).toBeInTheDocument();
    expect(screen.getByText('Opis ubezpieczeń majątkowych')).toBeInTheDocument();
  });

  it('ma klasę ins dla stylowania', () => {
    const { container } = render(<InsuranceSection ubezpieczenia={mockUbezp} />);
    expect(container.querySelector('.ins')).toBeInTheDocument();
  });
});

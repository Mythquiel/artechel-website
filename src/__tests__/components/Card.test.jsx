import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../../components/Card/Card';

describe('Card', () => {
  it('renderuje kartę z poprawną treścią', () => {
    const props = {
      emoji: '💡',
      title: 'Test tytuł',
      description: 'Test opis',
    };

    render(<Card {...props} />);

    expect(screen.getByText('💡')).toBeInTheDocument();
    expect(screen.getByText('Test tytuł')).toBeInTheDocument();
    expect(screen.getByText('Test opis')).toBeInTheDocument();
  });

  it('renderuje komponent z klasą card', () => {
    const props = {
      emoji: '🔋',
      title: 'Baterie',
      description: 'Opis baterii',
    };

    const { container } = render(<Card {...props} />);
    expect(container.querySelector('.card')).toBeInTheDocument();
  });

  it('renderuje ikonę w elemencie card-icon', () => {
    const { container } = render(
      <Card emoji="🚴" title="Akcesoria" description="Opis" />
    );

    const icon = container.querySelector('.card-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveTextContent('🚴');
  });
});

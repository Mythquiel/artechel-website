import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Gate from '../../components/Gate/Gate';

describe('Gate', () => {
  it('renderuje formularz bramki', () => {
    const onOpen = vi.fn();
    render(<Gate onOpen={onOpen} />);

    expect(screen.getByText('Artechel')).toBeInTheDocument();
    expect(screen.getByText(/Strona w przygotowaniu/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Hasło')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Wejdź' })).toBeInTheDocument();
  });

  it('pokazuje błąd przy nieprawidłowym haśle', async () => {
    const onOpen = vi.fn();
    render(<Gate onOpen={onOpen} />);

    const input = screen.getByPlaceholderText('Hasło');
    const button = screen.getByRole('button', { name: 'Wejdź' });

    await userEvent.type(input, 'wrongpassword');
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Nieprawidłowe hasło')).toBeInTheDocument();
    });
    expect(onOpen).not.toHaveBeenCalled();
  });

  it('czyści komunikat błędu po zmianie wartości', async () => {
    const onOpen = vi.fn();
    render(<Gate onOpen={onOpen} />);

    const input = screen.getByPlaceholderText('Hasło');
    const button = screen.getByRole('button', { name: 'Wejdź' });

    await userEvent.type(input, 'wrong');
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Nieprawidłowe hasło')).toBeInTheDocument();
    });

    await userEvent.type(input, 'x');
    expect(screen.queryByText('Nieprawidłowe hasło')).not.toBeInTheDocument();
  });
});

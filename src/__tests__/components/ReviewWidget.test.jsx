import { describe, it, expect, vi } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import ReviewWidget from '../../components/ReviewWidget/ReviewWidget';

describe('ReviewWidget', () => {
  it('renderuje kontener dla widżetu', () => {
    const { container } = render(<ReviewWidget widgetId="test-widget-id" />);
    expect(container.querySelector('.grw')).toBeInTheDocument();
  });

  it('dodaje skrypt widżetu z prawidłowym ID', async () => {
    const { container } = render(<ReviewWidget widgetId="test-id-123" />);

    await waitFor(() => {
      const grwDiv = container.querySelector('.grw');
      const script = grwDiv?.querySelector('script');
      expect(script).toBeInTheDocument();
      expect(script?.dataset.widgetId).toBe('test-id-123');
    });
  });

  it('ustawia atrybut loaded po załadowaniu', async () => {
    const { container } = render(<ReviewWidget widgetId="test-id" />);

    await waitFor(() => {
      const grwDiv = container.querySelector('.grw');
      expect(grwDiv?.dataset.loaded).toBe('1');
    });
  });
});

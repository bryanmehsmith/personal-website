import { renderHook } from '@testing-library/react';
import usePageTitle from './usePageTitle';

describe('usePageTitle', () => {
  test('sets a scoped document title when given a title', () => {
    renderHook(() => usePageTitle('Skills'));
    expect(document.title).toBe('Bryan Smith - Skills');
  });

  test('falls back to the plain site name when no title is given', () => {
    renderHook(() => usePageTitle());
    expect(document.title).toBe('Bryan Smith');
  });
});

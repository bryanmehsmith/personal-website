import React from 'react';
import { render, screen } from '@testing-library/react';
import DownloadCVButton from './DownloadCVButton';

describe('DownloadCVButton component', () => {
  test('links directly to the resume PDF', () => {
    render(<DownloadCVButton />);
    const link = screen.getByRole('link', { name: /download cv/i });
    expect(link).toHaveAttribute('href', '/resume.pdf');
    expect(link).toHaveAttribute('download');
  });
});

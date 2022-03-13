import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SectorSelected from './SectorSelected';

describe('<SectorSelected />', () => {
  test('it should mount', () => {
    render(<SectorSelected />);
    
    const sectorSelected = screen.getByTestId('SectorSelected');

    expect(sectorSelected).toBeInTheDocument();
  });
});
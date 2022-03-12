import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DaySelect from './DaySelect';

describe('<DaySelect />', () => {
  test('it should mount', () => {
    render(<DaySelect />);
    
    const daySelect = screen.getByTestId('DaySelect');

    expect(daySelect).toBeInTheDocument();
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RoadSelect from './RoadSelect';

describe('<RoadSelect />', () => {
  test('it should mount', () => {
    render(<RoadSelect />);
    
    const roadSelect = screen.getByTestId('RoadSelect');

    expect(roadSelect).toBeInTheDocument();
  });
});
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('Componente principal', () => {
  it('Mostrar o nome do banco', () => {
    render(<App/>);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
  })
})

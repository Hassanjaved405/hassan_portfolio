import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/Navigation/Navigation', () => () => <div>Navigation</div>);
jest.mock('./components/Hero/Hero', () => () => <div>Hero</div>);
jest.mock('./components/About/About', () => () => <div>About</div>);
jest.mock('./components/Experience/Experience', () => () => <div>Experience</div>);
jest.mock('./components/Skills/Skills', () => () => <div>Skills</div>);
jest.mock('./components/Projects/Projects', () => () => <div>Projects</div>);
jest.mock('./components/Contact/Contact', () => () => <div>Contact</div>);

test('renders portfolio sections and footer', () => {
  render(<App />);
  expect(screen.getByText('Navigation')).toBeInTheDocument();
  expect(screen.getByText('Projects')).toBeInTheDocument();
  expect(screen.getByText(/Hassan Javed/i)).toBeInTheDocument();
});

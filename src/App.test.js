// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RoughRap title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RoughRap/i);
    expect(titleElement).toBeInTheDocument();
});

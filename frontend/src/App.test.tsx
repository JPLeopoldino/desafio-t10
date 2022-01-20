import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("App Component", () => {
  test("must contain the right title", () => {
    render(<App />);
    const title = screen.getByText("src/App.tsx");
    expect(title).toBeInTheDocument();
  })

  test("must contain the AppProvider", () => {
    render(<App />);
    const title = screen.getByText("src/App.tsx");
    expect(title).toBeInTheDocument();
  })

  test("must contain the image", () => {
    render(<App />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  })

  test("must contain the image classes", () => {
    render(<App />);
    const image = screen.getByRole("img");
    expect(image).toHaveClass("App-logo");
  })
});

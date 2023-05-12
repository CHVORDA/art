import { render, screen } from '@testing-library/react';
import App from './App';

test('renders all gallery images with correct alt text', () => {
  const altTexts = ['Image 0', 'Image 1', 'Image 2', 'Image 3', 'Image 4', 'Image 5', 'Image 6', 'Image 7', 'Image 8', 'Image 9'];

  render(<App />);
  altTexts.forEach((altText, index) => {
    const imageElement = screen.getByAltText(`Image ${index}`);
    expect(imageElement).toBeInTheDocument();
  });
});

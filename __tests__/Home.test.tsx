// __tests__/home.test.ts
import { render, screen } from '@testing-library/react';
import Home from '@/app/page'
import Hero from '@/components/Hero'

describe('Home', () => {
  it('should be home test', () => {
      render(<Home />)
      const hero = screen.getByText('Home')
      expect(hero).toBeInTheDocument()
  
      
  })

  it('should contain an h2 element', () => {
    render(<Hero />);
    const heading2 = screen.getByRole('heading', { level: 2 });
    expect(heading2).toBeInTheDocument();
  });
  
})
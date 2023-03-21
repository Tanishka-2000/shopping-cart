import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './components/Home';

it('render home component', () => {

    render(<Home />);
    expect(screen.getByText(/nine looks in paris/i)).toBeInTheDocument();
    expect(screen.getByText(/women's collection/i)).toBeInTheDocument();
    expect(screen.getByText(/women's collection/i).parentElement).toHaveClass('section1');

})

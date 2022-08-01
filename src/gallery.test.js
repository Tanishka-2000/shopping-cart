import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Gallery from './components/Gallery';

it('render image gallery', () => {
    const images = ['./images/girl1.jpg','./images/girl2'];
    const details = [
        {
        title:'Title1',
        para: 'Para1'
        },
        {
        title:'title2',
        para: 'para2',
        },
    ];
    render(<Gallery images={images} details={details}/>);
    expect(screen.getAllByAltText('girl').length).toBe(2);

    expect(screen.getAllByRole('heading').length).toBe(2);
    expect(screen.getByText(/title1/i)).toBeInTheDocument();
    expect(screen.getByText(/title2/i)).toBeInTheDocument();
    
});

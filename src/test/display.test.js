import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Display from '../components/Display';

it('render display component', () => {
    const images = ['./images/girl1','./images/girl2','./images/girl3'];
    const name = "DisplayTitle";
    const classes = "class1 class2";

    render(<Display images={images} name={name} classes={classes}/>);

    expect(screen.getAllByAltText('girl').length).toBe(3);
    expect(screen.getByText(/DisplayTitle/i)).toBeInTheDocument();
    // expect(screen.getByText(/DisplayTitle/i).parentElement).toHaveClass('class1');
});

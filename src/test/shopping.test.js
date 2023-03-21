import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Shopping from './components/Shopping';

it("render shopping component", () => {

    render(<Shopping />);

    expect(screen.getByText("shopping_cart")).toBeInTheDocument();
    expect(screen.getByRole("heading",{name:"Choose your Style"})).toBeInTheDocument();    

});

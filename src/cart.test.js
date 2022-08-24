import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Cart from './components/Cart';

describe('render Cart component', () => {
    const cartData = [ {
            item: {
                id:1,
                name:'product1',
                image:'./products-image/clothes1.jpg',
                price:20,
            },
            quantity:2,
        },
        {
            item: {
                id:2,
                name:'product2',
                image:'./products-image/clothes2.jpg',
                price:40,
            },
            quantity:3,

        },
        {
            item: {
                id:3,
                name:'product3',
                image:'./products-image/clothes3.jpg',
                price:35,
            },
            quantity:1,

        }
    ];

    it("render close button", () => {
        const switchCartMock = jest.fn();
        render(<Cart list={[]} switchCart={switchCartMock}/>);

        const icon = screen.getByText('close');
        const iconDiv = screen.getByText('close').parentElement;

        expect(icon).toBeInTheDocument();
        expect(iconDiv).toHaveClass('cart-icon');

        userEvent.click(icon);
        expect(switchCartMock).toHaveBeenCalled();
    });

    it('render all products on the page', () => {
        render(<Cart list={cartData} />);

        expect(screen.getAllByRole('img').length).toBe(3);
        expect(screen.getAllByText(/Product: /).length).toBe(3);
        expect(screen.getAllByText(/Price: /).length).toBe(3);
        expect(screen.getAllByText(/Quantity: /).length).toBe(3);
        expect(screen.getAllByText(/Total Amount: /).length).toBe(3);

    });

    it("render each product correctly", () => {
        render(<Cart list={[cartData[0]]}/>)

        expect(screen.getByText("Product: product1")).toBeInTheDocument();
        expect(screen.getByText("Price: $20")).toBeInTheDocument();
        expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
        expect(screen.getByText("Total Amount: $40")).toBeInTheDocument();
        expect(screen.getAllByRole('button').length).toBe(2);
    });

    it('each have correct classes', () => {
        render(<Cart list={[cartData[0]]}/>);

        const image = screen.getByRole('img');
        const productDetails = screen.getByText('Product: product1').parentElement;
        const productDiv = productDetails.parentElement;

        expect(image).toHaveClass('cart-image');
        expect(productDetails).toHaveClass('data');
        expect(productDiv).toHaveClass('cart-product');
    });
});

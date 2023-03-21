import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Product from '../components/Product';

describe('render Product Component', () => {
    const productData = {
        id:1,
        name:'Beautiful sweater and jeans',
        price:30,
        image:'./products-images/clothes1.jpg'
    };

    it('render each element in Product', () => {
        render(<Product info={productData} />);

        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getByText('Beautiful sweater and jeans')).toBeInTheDocument();
        expect(screen.getByText('Price: $30')).toBeInTheDocument();
        expect(screen.getByLabelText('Quantity:')).toBeInTheDocument();
        expect(screen.getByRole('button', {name:'Increment'})).toBeInTheDocument();
        expect(screen.getByRole('button', {name:'Decrement'})).toBeInTheDocument();
    });

    it('each element rendered with correct class', () => {
        render(<Product info={productData} />);

        const imageDiv = screen.getByRole('img').parentElement;
        const productDiv = imageDiv.parentElement;
        const productName = screen.getByText('Beautiful sweater and jeans');
        const btnDiv = screen.getByRole('button',{name:'Increment'}).parentElement;

        expect(imageDiv).toHaveClass('image');
        expect(productDiv).toHaveClass('product');
        expect(productName).toHaveClass('product-name');
        expect(btnDiv).toHaveClass('btn-group');
    });

    it('update quantity on btn click', () => {
        render(<Product info={productData}/>);

        const incrementBtn = screen.getByRole('button', {name:'Increment'});
        const decrementBtn = screen.getByRole('button', {name:'Decrement'});
        const input = screen.getByLabelText('Quantity:');

        expect(input.value).toBe('1');

        userEvent.click(incrementBtn);
        expect(input.value).toBe('2');

        userEvent.click(decrementBtn);
        expect(input.value).toBe('1');

        userEvent.click(decrementBtn);
        expect(input.value).toBe('1');
    });

    it("add product to cart with correct data", () => {
        const addToCartMock = jest.fn();
        render(<Product info={productData} addToCart={addToCartMock}/>);

        const incrementBtn = screen.getByRole('button', {name:'Increment'});
        const addToCartBtn = screen.getByRole('button', {name:'Add to cart'});

        userEvent.click(incrementBtn);
        userEvent.click(addToCartBtn);

        expect(addToCartMock).toHaveBeenCalled();
        expect(addToCartMock.mock.calls[0][0].item).toEqual(productData);
        expect(addToCartMock.mock.calls[0][0].quantity).toEqual(2);

    });
});

function Product(props){
    return(
        <div key={props.id} class="product">
            <img src={props.info.image} alt="" />
            <h1>{props.info.name}</h1>
            <h2>Price: ${props.info.price}</h2>
            <input type='tel' />
            <div>
                <button>Increment</button>
                <button>Decrement</button>
            </div>
            <button type="button">Add to cart</button>
        </div>
    );
}
export default Product;

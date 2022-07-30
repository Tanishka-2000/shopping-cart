import products from './productsData';
import Product from './Product';
import '../shopping.css';

function Shopping(){
    return(<div className='products-list'>
        {products.map(product => <Product info={product}/>)}
        </div>
    )
}
export default Shopping;

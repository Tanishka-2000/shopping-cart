import Gallery from './Gallery';
import Display from './Display';
import data from './data';
import '../home.css';
function Home(){
    return(
        <>
        <div className="section1">
            <p>nine looks in paris</p>
            <p>women's collection</p>
        </div>
        <Gallery images={data[0].images} details={data[0].info} classes=''/>
        <Display images={['./shopping-cart/images/girl1.jpg','./shopping-cart/images/girl3.jpg', './shopping-cart/images/girl2.jpg']} name='costumes' classes=''/>
        <Gallery images={data[1].images} details={data[1].info} classes='coloured'/>
        <div className="section2"></div>
        <Gallery images={data[2].images} details={data[2].info} classes=''/>
        <Display images={['./shopping-cart/images/men.jpg','./shopping-cart/images/kids.jpg']} name='men, boys & girls' classes='coloured'/>
        </>
    );
}

export default Home;

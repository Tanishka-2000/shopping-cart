function Gallery(props){
    return(
        <div className={`grid-gallery ${props.classes}`}>
            <div className='image1'><img src={props.images[0]} alt='girl'/></div>
            <div className='image2'><img src={props.images[1]} alt='girl'/></div>
            <div className='detail1'>
                <h1>{props.details[0].title}</h1>
                <p>{props.details[0].para}</p>
            </div>
            <div className='detail2'>
                <h1>{props.details[1].title}</h1>
                <p>{props.details[1].para}</p>
            </div>
        </div>
    );
}
export default Gallery;

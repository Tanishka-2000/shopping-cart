function Display(props){
    return(
        <div className={`display ${props.classes}`}>
            <p>{props.name}</p>
            <div className='costume-images'>
                {props.images.map((image,i) =>
                    <img key={i} src= {image} alt='girl'/>
                )}
            </div>
        </div>
    );
}
export default Display;

function Display(props){
    return(
        <div className={`display ${props.classes}`}>
            <p>{props.name}</p>
            <div className='costume-images'>
                {props.images.map(image =>
                    <img src= {image} alt='girl'/>
                )}
            </div>
        </div>
    );
}
export default Display;

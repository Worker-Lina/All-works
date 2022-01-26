import React, { useState } from 'react'
import "./slider.css"

const Slider = ({images}) => {
    const [current, setCurrent] = useState(0)
    const length = images.length

    const nextSlide = ()=>{
        setCurrent(current === length-1 ? 0 : current+1)
    }

    const prevSlide = ()=>{
        setCurrent(current === 0 ? length -1 : current-1)
    }

    if(!Array.isArray(images) || images.length<=0){
        return null
    }
    
    const getPagesArray = (length) =>{
        let result = [];
        for(let i=0; i<length; i++){
            result.push(i+1);
        }
        return result;
    }

    let pagesArray = getPagesArray(length);

    return (
        <div>
            <div className="slider">
                <div className="left-ico" onClick={prevSlide}>&#10094;</div>
                {images.map((image, index) => {
                    return (
                        <div className={index===current ? 'slide active' : 'slide'} key = {index}>
                            {index ===current && (
                                <img src={image} alt="travel" className="slider-img"/>) 
                            }

                        </div>
                    )
                    
                })}
                <span className="right-ico"onClick={nextSlide}>&#10095;</span>
            </div>
            <div className="page__wrapper">
                {pagesArray.map(p =>
                    <span 
                        onClick={()=> setCurrent(p-1)}
                        key={p} 
                        className={current === p-1 ? 'page page__current' :'page'}
                        >{p}
                    </span>
                )}
            </div>
        </div>
    )
}

export default Slider

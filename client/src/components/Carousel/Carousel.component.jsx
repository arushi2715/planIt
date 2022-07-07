import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.styles.css";

const ImageCarousel=({images})=>{
    const settings={
        infinite:true,
        dots:true,
        slidesToShow:1,
        lazyLoad:true,
        autoplay:true,
        autoplaySpeed:1000,
    };
    return(
        <div>
            <div className="image-carousel">
                <Slider {...settings}>
                    {images.map((item)=>(
                        <div key={item.id}>
                            <img src={item.src} alt={item.alt} />
                            <div className="caption">{item.caption}</div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default ImageCarousel;
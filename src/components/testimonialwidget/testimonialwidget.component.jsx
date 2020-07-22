import React from "react";
import defaultdata from './defaultdata.json';
import OwlCarousel from 'react-owl-carousel'; 
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


class TestimonialWidgetComponent extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    

    render(){
    const { title, ...otherprops } = this.props;

    const options = {
        //singleItem: true,
        loop: true,
        autoplay: true,
        //        rtl: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    };
    //console.log(options);
    return( 
    <div {...otherprops } >
        <OwlCarousel {...options} >
        { defaultdata.map( testimonial =>  (
            <div className="item" key={testimonial.id}>
                <div className="testimonial-content">
                    <img className="testimonial-author-img" src={ require(`../../${testimonial.authorImg}`) } alt="" />
                    <div className="testimonial-author">{testimonial.name}</div>
                    <div className="testimonial-author-position">{testimonial.position}</div>

                    <div className="testimonial-text">
                        <i className="fa fa-quote-left"></i>{ testimonial.testimonialText }<i className="fa fa-quote-right"></i>
                    </div>
                </div>
            </div>)
        )}
        </OwlCarousel>
    </div>)
    }
}

export default TestimonialWidgetComponent;
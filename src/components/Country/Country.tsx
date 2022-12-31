import {NavLink} from "react-router-dom";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import USA from '../../assets/country/USA.svg'
import Italy from '../../assets/country/Italy.svg'
import France from '../../assets/country/France.svg'
import Japan from '../../assets/country/Japan.svg'
import China from '../../assets/country/China.svg'
import India from '../../assets/country/India.svg'


const Country = () => {
    function SampleNextArrow(props: { className: string; style: any; onClick: any; }) {
        const {className, style, onClick} = props;
        return (
            <div
                className={className}
                style={{...style, display: 'block', background: '#474747'}}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props: { className: string; style: any; onClick: any; }) {
        const {className, style, onClick} = props;
        return (
            <div
                className={className}
                style={{...style, display: 'block', background: '#474747'}}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        slidesToShow: 4,
        slidesToScroll: 2,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <h3 className="country__title">Choose Cuisine</h3>
            <div className="country__container">
                <Slider {...settings}>
                    <div className="country__name">
                        <NavLink to={'/cuisine/American'}>
                            <img src={USA} alt="USA's flag" className="country__card"/>
                            <p>American</p>
                        </NavLink>
                    </div>
                    <div className="country_name">
                        <NavLink to={'/cuisine/Italian'}>
                            <img src={Italy} alt="Italy's flag" className="country__card"/>
                            <p>Italian</p>
                        </NavLink>
                    </div>
                    <div className="country_name">
                        <NavLink to={'/cuisine/French'}>
                            <img src={France} alt="France's flag" className="country__card"/>
                            <p>French</p>
                        </NavLink>
                    </div>
                    <div className="country_name">
                        <NavLink to={'/cuisine/Japanese'}>
                            <img src={Japan} alt="Japan's flag" className="country__card"/>
                            <p>Japanese</p>
                        </NavLink>
                    </div>
                    <div className="country_name">
                        <NavLink to={'/cuisine/Chinese'}>
                            <img src={China} alt="Chinese flag" className="country__card"/>
                            <p>Chinese</p>
                        </NavLink>
                    </div>
                    <div className="country_name">
                        <NavLink to={'/cuisine/Indian'}>
                            <img src={India} alt="India's flag" className="country__card"/>
                            <p>Indian</p>
                        </NavLink>
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default Country;
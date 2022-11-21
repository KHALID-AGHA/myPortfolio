import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ransom from '../img/ransom.png'
import area from '../img/area-service.png'
import erp from '../img/erp.png'
import km from '../img/km.png'
import food from '../img/food.png'
import ciel from '../img/atelierenciel.png'


export default function Projects() {
    const projectSliders = [
        { id: 1, title: 'Ransom', link: "https://ransom-website.herokuapp.com/", Img: ransom },
        { id: 2, title: 'Area-Service', link: "https://area-service.vercel.app/", Img: area },
        { id: 3, title: 'ERP', link: 'https://www.youtube.com/watch?v=DSBKuvX2XEc', Img: erp },
        { id: 4, title: 'KM-almajdal', link: "https://kmalmajdal-tailwindcss.vercel.app/", Img: km },
        { id: 5, title: 'Foodoption', link: "https://foodoption-with-tailwindcss.vercel.app/", Img: food },
        { id: 6, title: 'Atelierenciel', link: "https://atelierenciel.com/", Img: ciel },
    ]
    //---------------Slider
    var settings = {
        pauseOnFocus: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 5000,
        autoplaySpeed: true,
        autoplay: true,
        slidesToShow: 3.5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    pauseOnFocus: true,
                    autoplaySpeed: true,
                    autoplay: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    pauseOnFocus: true,
                    autoplaySpeed: true,
                    autoplay: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    pauseOnFocus: true,
                    autoplaySpeed: true,
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div name="projects_section" id="projects_section" className='projects w-full h-screen flex flex-col '>

            {/********************************* Heading **********************************/}
            <div className='w-full flex flex-col h-1/2 items-center justify-center pb-4'>
                <span className="py-1 text-black font-bold text-5xl md:text-2xl">Recent Projects</span>
                <span className="py-1 text-heavyTeal font-bold text-4xl md:text-lg">Protfolio</span>
            </div>

            {/********************************* Slider **********************************/}
            <Slider {...settings}>
                {projectSliders.map((singleProjectSlider) => (
                    <div className='px-3 '
                        key={singleProjectSlider.id}>
                        <img className="h-52" title={singleProjectSlider.title}
                            src={singleProjectSlider.Img}
                            alt={singleProjectSlider.title}
                        />
                    </div>))
                }
            </Slider>

        </div>
    )
}


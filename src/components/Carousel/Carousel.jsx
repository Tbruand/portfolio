import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Kasa",
    description: "Application web de location immobilière avec React.",
    imageUrl: "/assets/img/responsive_kasa.png",
    link: "https://github.com/BruandT/P_Kasa.git",
  },
  {
    title: "Dofus Match",
    description: "Application web de jeu de mémoire.",
    imageUrl: "/assets/img/dofus_match.png",
    link: "https://github.com/BruandT/dofus-match.git",
  },
];

function SampleNextArrow(props) {
  const { style } = props;
  return <div style={{ ...style, display: "none" }} />;
}

function SamplePrevArrow(props) {
  const { style } = props;
  return <div style={{ ...style, display: "none" }} />;
}

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div style={{}}>
        <ul className='dotUl'>{dots}</ul>
      </div>
    ),
    customPaging: (i) => <div className='dotCarousel'>{i + 1}</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };

  return (
    <>
      <div className='carouselContainer'>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className='carouselSlide'>
              <img
                src={project.imageUrl}
                alt={project.title}
                className='carouselImage'
              />
              <div className='carouselContent'>
                <h3 className='textColor'>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  className='textColor'
                  target='_blank'
                  rel='noreferrer'
                  href={project.link}
                >
                  Info +
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Carousel;

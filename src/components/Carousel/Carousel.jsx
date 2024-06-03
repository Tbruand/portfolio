import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Projet 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    imageUrl: "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg",
  },
  {
    title: "Projet 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    imageUrl: "https://wharferj.files.wordpress.com/2015/11/bio_north.jpg",
  },
  {
    title: "Projet 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    imageUrl: "https://images7.alphacoders.com/878/878663.jpg",
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
        <ul className="dotUl">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="dotCarousel"
      >
        {i + 1}
      </div>
    ),
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
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Carousel;

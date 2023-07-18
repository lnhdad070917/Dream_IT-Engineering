import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import image1 from "./../assets/img/image1.png";
import image2 from "./../assets/img/image2.png";
import image3 from "./../assets/img/image3.png";
import image4 from "./../assets/img/image4.png";
import image5 from "./../assets/img/image5.png";

export default class CarouselComponent extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
    goToSlideDelay: 200,
  };

  slides = [
    {
      key: uuidv4(),
      content: (
        <div>
          <img className="w-[500px]" src={image1} alt="1" />
          <p className="text-center pt-5 font-normal">Person Portfolio</p>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div>
          <img className="w-[500px]" src={image2} alt="2" />
          <p className="text-center pt-5 font-normal">Project Portfolio</p>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div>
          <img className="w-[500px]" src={image3} alt="3" />
          <p className="text-center pt-5 font-normal">Person 2 Portfolio</p>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div>
          <img className="w-[500px]" src={image4} alt="4" />
          <p className="text-center pt-5 font-normal">Project 2 Portfolio</p>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div>
          <img className="w-[500px]" src={image5} alt="5" />
          <p className="text-center pt-5 font-normal">Template Portfolio</p>
        </div>
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  render() {
    return (
      <div
        className="absolute pl-0 ml-0"
        style={{ width: "90%", height: "400px" }}
      >
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          //   showNavigation={this.state.showNavigation}
          goToSlideDelay={this.state.goToSlideDelay}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}

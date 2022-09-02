import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/FoodAddict.png";
import profilePic2 from "../../img/dbank_logo.png";
import profilePic3 from "../../img/smartETH.png";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic3,
      title:"smartETH",
      description:"This is a Web 3.0 app developed to transfer Ethereum on a blockchain network using Metamask. Solidity language is used to write the smart-contracts.Ethers JS is used to interact with the Ethereum Blockchain",
      link:"https://sanuchakraborty.github.io/smartETH/",
      github:"https://github.com/sanuchakraborty/smartETH"
    },
    {
      img: profilePic2,
      title:"Defi-DBank",
      description:
        "This is a decentralised banking web-app having facilities like deposite and withdrawl involving compound interest. Smart-contracts as canisters are programmed for ICP with Motoko language.",
      // link:"",
      github:"https://github.com/sanuchakraborty/Defi-DBank"
      },
      {
        img: profilePic1,
        title:"Food-Addict",
        description:"This is responsive restaurant website using React and Styled Components. Scrollreveal and React-icon are used for animation and icons.There is a facility  introduced to add items to cart as a backend work.",
        link: "https://sanuchakraborty.github.io/Food-Addict-Restaurant-Website/",
        github:"https://github.com/sanuchakraborty/Food-Addict-Restaurant-Website"
      },
    
    // {
    //   img: profilePic4,
    //   title:"",
    //   description:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    // },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Swipe to see the </span>
        <span>Projects </span>
        <span>I have made...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.title}</span>
                <span>{client.description}</span>
                <span><a href={client.link}>Website Link</a></span>
                <span><a href={client.github}>Source Code</a></span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;

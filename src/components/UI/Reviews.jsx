// ReviewsSection.jsx
import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import ReviewCard from './ReviewCard';
import '../CSS/Reviews.css'
const ReviewsSection = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
        swiperRef.current  = new Swiper('.slide-content', {
          grabCursor: true,
          mousewheel: true,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            600: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          },
        });
    
        // Clean up Swiper instance on component unmount
        return () => {
            if(swiperRef.current){
          swiperRef.current.destroy();
            }
        };
      }, []); // Empty dependency array means this effect will only run once after initial render
    

  // Sample data for reviews
  const reviewsData = [
    {
      image: '../User_avatar.jpg',
      matter: 'Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      name: 'Ramesh',
      region: 'India',
    },
    {
        image: '../User_avatar.jpg',
        matter: 'Another review text goes here. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        name: 'Ramesh',
        region: 'United States',
      },
      {
        image: '../User_avatar.jpg',
        matter: 'A third review with some meaningful content. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        name: 'John',
        region: 'Canada',
      },
      {
        image: '../User_avatar.jpg',
        matter: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis tristique sem, sit amet malesuada augue vestibulum vitae.',
        name: 'Ramesh',
        region: 'Spain',
      },
      {
        image: '../User_avatar.jpg',
        matter: 'Fifth review content. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        name: 'Ahmed',
        region: 'Egypt',
      },
    // Add more review data as needed
  ];

  return (
    <section id="reviews" className="reviews">
      <div className="mb-7 text-center">
        <h2 className="services-header">Reviews</h2>
      </div>
      <div className="slide-container swiper">
        <div className="slide-content">
          <div className="swiper-wrapper">
            {reviewsData.map((review, index) => (
              <ReviewCard
                key={index}
                image={review.image}
                matter={review.matter}
                name={review.name}
                region={review.region}
              />
            ))}
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
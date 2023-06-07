import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png";
import {AiFillStar} from "react-icons/ai";
const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subuheading'>Testimonial</p>
            <h1 className='primary-heading'>
                What They Are Saying
            </h1>

            <p className="primary-text">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Facere dolore quae pariatur alias commodi fuga recusandae cupiditate! 
            </p>
        </div>

        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Accusantium, quam. Rerum alias, voluptate laudantium repellendus similique tempore nesciunt.
            </p>

            <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>

            <h2>John Doe</h2>
        </div>
    </div>
  )
}

export default Testimonial;

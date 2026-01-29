import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";


const maxRating = 5;
const Star = ({ avgRating , totalReviews}) => {
    if (avgRating < 0 || avgRating > 5) {
        return "Invalid Star";
    }
    console.log(avgRating)

    const halfStar  = !Number.isInteger(avgRating);
    const fullStar = Math.floor(avgRating);
    const emptyStar = maxRating - fullStar - (halfStar ? 1 : 0)
    console.log(fullStar, halfStar, emptyStar)
    
    const showStars = [];
    for(let i =0; i < fullStar; i++){
        showStars.push(<FaStar className="text-warning"/>)
    }

    if(halfStar )showStars.push(<FaStarHalfAlt className='text-warning' />)

        for(let i=0; i < emptyStar; i++) {
            showStars.push(  <CiStar />)
        }
  return (
    <div>
        {showStars}
        {totalReviews && totalReviews + "Reviews"}
    </div>
  )
}

export default Star
import React from "react";
import { AiFillStar,AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style }) => {
  return(<>
    {[...Array(5)].map((_, i) => {
      return (
        <span key={i} onClick={()=> onClick(i)}>
        {rating > i ?<AiFillStar fontSize="12px" /> : <AiOutlineStar fontSize="12px" />}
          
        </span>
      );
    })}
  </>)
  ;
};

export default Rating;

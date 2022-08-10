import React from "react";
import Review from "./Review";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


function ReviewsContent({reviews, setReviews}){


    return(
        <div>
            
               {
                reviews.map((review )=>{
                    return <div key={review.id}><Review key={review.id} image={review.image} name={review.name} job={review.job} comment={review.comment}/></div>
                  })
               }     
            
            
               

            <div>
                <FaAngleLeft className="prevbtn"/>
                <FaAngleRight className="nextbtn" />
            </div>
        </div>
    )
}

export default ReviewsContent
import React from "react";



function Review({id, image,name, job, comment}){
    return(
        
           <article>
              <div className="imgcontainer">
                <img src={image} alt="user"/>
              </div> 
              <h4 id="author">{name}</h4>
              <p id="job">{job}</p>
              <p>{comment}</p>
              
           </article>
        
    )
}

export default Review
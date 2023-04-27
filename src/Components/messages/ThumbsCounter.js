//Created by Kiersten White
// Creates the counter for like and dislike buttons for each individual message; does not save count when the page is refreshed or associate it with any user

import { useState } from "react";

export const ThumbsCounter = () => {

    let [likes, setLikes] = useState(0)
    let [dislikes, setDislikes] = useState(0)

    const handleLike = () => {
        setLikes(likes + 1)
    };

    const handleDislikes = () => {
        setDislikes(dislikes +1)
    };

    return ( <>
        <div className="thumbsCounter">
        <button onClick={()=> {handleLike()}}>👍 {likes}</button>
        </div>
        <div className="thumbsCounter">
        <button onClick={()=> {handleDislikes()}}>👎 {dislikes}</button>  
        </div>
        </>
    )
}



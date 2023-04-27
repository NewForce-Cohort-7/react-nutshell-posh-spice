import { useState } from "react"
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
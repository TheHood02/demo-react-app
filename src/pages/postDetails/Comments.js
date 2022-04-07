import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Comments = () => {

    const [ comments, setComments] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(response => response.json())
            .then(resultJSON => setComments(resultJSON))
    }, [id])

    return (
        <div>
            <h3>Comments</h3>
            <div class="comments shadow">
                {comments.map(comment => {
                    return(
                        <div key={comment.id} className="comment">
                            <h4>{comment.name}</h4>
                            <p>{comment.body}</p>
                        </div>
                    )
            })}
            </div>
        </div>
    )
}

export default Comments
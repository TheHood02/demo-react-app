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
            Comments
            {comments.map(comment => {
                return(
                    <div key={comment.id}>
                        <h5>{comment.name}</h5>
                        <p>{comment.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Comments
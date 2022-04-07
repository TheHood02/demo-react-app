import { useEffect, useState } from "react"
import { useParams, Link, Routes, Route } from "react-router-dom"

import Comments from "./Comments"

const PostDetails = () => {
  const [postDetails, setPostDetails] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const { id } = useParams();
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(resultJSON => setPostDetails(resultJSON))
  }, [id])

  return (
    <div className="content">
      <h3>PostDetails</h3>
      <div className="post shadow">
        <h4>{postDetails.title}</h4>
        <p>{postDetails.body}</p>
        <p>by userID: {postDetails.userId}</p>
      </div>
      <Link to='comments'>
        <button>show comments</button>
      </Link>
      <Routes>
        <Route path='comments' element={<Comments />} />
      </Routes>
    </div>
  )
}

export default PostDetails
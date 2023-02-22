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
  }, [])

  const toggleShowComments = () => {
    setShowComments(prevState => !prevState);
  }

  return (
    <div className="content">
      <h3>PostDetails</h3>
      <div className="post shadow">
        <h4>{postDetails.title}</h4>
        <p style={{fontSize: "1.15rem"}}>{postDetails.body}</p>
        <p style={{fontSize: "1rem"}}>by userID: {postDetails.userId}</p>
      </div>
      {showComments ? (
            <Link to=''>
              <button className="link shadow shadow-hover" style={{float: "left"}} onClick={toggleShowComments}>hide comments</button>
            </Link>
          ) : (
            <Link to='comments'>
              <button className="link shadow shadow-hover" style={{float: "left"}} onClick={toggleShowComments}>show comments</button>
            </Link>
          )
      }
      <Routes>
        <Route path='comments' element={<Comments />} />
      </Routes>
    </div>
  )
}

export default PostDetails
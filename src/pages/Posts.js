import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10')
            .then(response => response.json())
            .then(resultJSON => setPosts(resultJSON))
    }, [])

  return (
    <div className="content">
        <h3>Posts</h3>
        {posts.map(post => {
            return(
                <Link to={`/posts/${post.id}`} className="post shadow post-hover" key={post.id}>
                    <h5>{post.title}</h5>
                </Link>
            )
        })}
    </div>
  )
}

export default Posts
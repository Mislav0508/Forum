import React, {useState, useEffect} from 'react'
import "../App.css"
import SinglePost from "../components/SinglePost"
import useFetchPosts from "../utils/useFetchPosts"

const PostsPage = () => {
  const {posts,loading} = useFetchPosts()
  const [page, setPage] = useState(0)
  const [individualPosts, setIndividualPosts] = useState([])

  useEffect(() => {
    if(loading) return
    setIndividualPosts(posts[page])
  },[loading,page])

  const handlePage = (index) => {
    setPage(index)
  }

  const handlePrev = () => {
    if(page > 0){
      setPage(page - 1)
    }    
  }
  const handleNext = () => {
    if(page < posts.length - 1){
      setPage(page + 1)
    }else{
      setPage(0)
    }
    
  }

  return (
    <section className="posts-section">
      {loading ? <h1>Loading...</h1> : <h1>FORUM</h1> }
      {individualPosts.map((post) => {
        return <SinglePost key={post.id} {...post} />
      })}
      <div className="btn-container">
        <button onClick={()=>handlePrev()}>Prev</button>
        {posts.map((post,index) => {
          return <button className={index === page && "active-btn"} key={index} onClick={()=>handlePage(index)}>{index + 1}</button>
        })}
        <button onClick={()=>handleNext()}>Next</button>
      </div>
    </section>
  )
}

export default PostsPage

import { useState, useEffect } from 'react'
import paginate from "./paginate"

const useFetchPosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const result = await response.json()
    setPosts(paginate(result))
    setLoading(false)
  }
  useEffect(() => {
    getPosts()
  },[])
  return {posts,loading}
}

export default useFetchPosts

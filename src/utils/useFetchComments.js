import { useState, useEffect } from 'react'

const useFetchComments = () => {
  const [comments, setComments] = useState([])
  const getComments = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments")
    const result = await response.json()
    setComments(result)
  }
  useEffect(() => {
    getComments()
  },[])
  return {comments}
}

export default useFetchComments

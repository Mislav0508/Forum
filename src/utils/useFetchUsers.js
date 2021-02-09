import { useState, useEffect } from 'react'

const useFetchUsers = () => {
  const [users, setUsers] = useState([])
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const result = await response.json()
    setUsers(result)
  }
  useEffect(() => {
    getUsers()
  },[])
  return {users}
}

export default useFetchUsers

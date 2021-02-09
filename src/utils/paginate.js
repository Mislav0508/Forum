const paginate = (posts) => {
  const itemsPerPage = 9
  const pages = Math.ceil(posts.length / itemsPerPage)
  const newPosts = Array.from({length:pages},(_,index) => {
    const start = index * itemsPerPage
    return posts.slice(start, start + itemsPerPage)
  })
  return newPosts
}

export default paginate

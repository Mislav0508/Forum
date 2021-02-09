import React, {useState} from 'react'
import "./SinglePost.css"
import {photos} from "../user_photos/photos"
import useFetchComments from "../utils/useFetchComments"
import useFetchUsers from "../utils/useFetchUsers"
import {AiFillCloseCircle} from "react-icons/ai"

const SinglePost = ({id,userId ,title, body}) => {
  const [modal, setModal] = useState(false)
  const {comments} = useFetchComments()
  const {users} = useFetchUsers()
  return (
    <>
      <div className="single-post">
        <div className="post_number">
          <h4>#{id}</h4>
          {photos.map((photo) => {
            const {photoId,img} = photo
            if(photoId === userId){
              return (
                <>
                  <img key={photoId} src={img} alt="#"/>
                  {users.map((user) => {
                    const {id,username} = user
                    if(photoId === id){
                      return (
                        <>
                          <p key={user.id}>{username}</p>
                        </>
                      )
                    }else{
                      return null
                    }
                    
                  })}
                </>
              )
              
            }else{
              return null
            }
          })}
        </div>
        <div className="post-info">
          <div className="post-info-title">
            <h4>Title: </h4> 
            <p>{title}</p>
          </div>        
          <div className="post-info-buttons">
            <button onClick={() => setModal(!modal)}>Details</button>  
          </div> 
        </div>
      </div>
      {modal ? <div className="modal">
        <AiFillCloseCircle className="close-btn"
        onClick={() => setModal(!modal)}/>
        <h3>Post body: </h3>
        <p>{body}</p>
        <h3>Comments: </h3>
        {comments.map((comment) => {
          if(id === comment.postId){
            return (
              <>
                <p key={comment.id}>{comment.body}</p>
              </>
            )
          }else{
            return null
          }
          
        })}        
      </div> : null}
    </>
  )
}

export default SinglePost

import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className="post">
        <div className="postContainer">
            <div className="postTop">
                <img src="./images/2.jpg" alt="Couple Dance" className="postImage" />
                <span className="postUN">Hana Fernando</span>
                <br></br>
                <span className="postTime">5 mins ago</span>
            </div>
            <div className="postCenter">
                <div className="postCaption">
                    <p className="postText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptas. 😇❤️</p>
                </div>
                <img src="/images/3.jpg" alt="" className="postedImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/images/like.jpg" alt="" className="likeIcon" />
                    <img src="/images/heart.jpg" alt="" className="likeIcon" />
                    <img src="/images/haha.jpg" alt="" className="likeIcon" />
                    <span className="likeCount">Chamika Fernado 327 people </span>
                </div>
                <div className="postBottomRight">
                    <span className="commentCount">100 comments</span>
                </div>
                
            </div>
        </div>
    </div>
  )
}

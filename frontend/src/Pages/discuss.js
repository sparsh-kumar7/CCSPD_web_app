import React, { useEffect } from "react";
import "./discuss.css";
import { useState } from "react";
import axios from 'axios';  
import { getAuth} from "firebase/auth";

const array = [
    {
        id : null,
        discussion_title : "Welcome to Discuss Section",
        discussion_text : "You can post about any topic you want to have a discussion on",
        like_count : 0,
        replies: [],
    },
];





function discuss() {
    const[favorites,setFavorites] = useState([]);
    const [reply, setReply] = useState("");
  const [selectedFavorite, setSelectedFavorite] = useState([]);
  

  const displayReply = (favoriteId) => {
    axios.get(`http://localhost:8000/api/Discussions/${favoriteId}/replies/`)
      .then(res => {
        const favorite = favorites.find((fav) => fav.id === favoriteId);
        const result = Object.values(res);
        if (favorite) {
          favorite.replies = [...result[0]];
          setReply("");
          setSelectedFavorite(favorite);
          console.log(favorite);
          
        }
      })
      .catch(error => {
        console.error("Error fetching replies:", error);
      });
  };
  

  const postReply = (favoriteId, event) => {
    const auth = getAuth();
    const user = auth.currentUser;
    if(user === null){
      var myObj = {
        username : "Anonymous",
        reply_text : reply,
        discuss : favoriteId
      }}else{
        var myObj = {
        username : user.displayName,
        reply_text : reply,
        discuss : favoriteId
      }}
      axios
      .post(`http://localhost:8000/api/Discussions/${favoriteId}/replies/`,myObj)
      .then(displayReply(favoriteId))
      .catch(error => console.log(error));
      setReply("");

      
      let newElement = document.createElement("div")
      newElement.setAttribute("class","reply-single user-info")
      if (!user.displayName){
        user.displayName = "Anonymous"
      }
      newElement.innerHTML = '<span class="user-name">'+user.displayName+'</span><p class="reply-content">'+reply+'</p>'
      event.srcElement.parentElement.parentElement.parentElement.appendChild(newElement)
  };

    function publishBlog(event){
      const auth = getAuth();
    const user = auth.currentUser;
    
        var title = event.target.parentNode.children[0].value
        var body = event.target.parentNode.children[1].value
        var myObj = {
            discussion_title: title,
            discussion_text: body,
            username : user.displayName
        }
        console.log(myObj)
        axios
        .post("http://localhost:8000/api/Discussions/",myObj)
        .then(refreshlist)
        .catch((err)=>{console.log(err)})
    }
    function refreshlist() {
    axios
        .get("http://localhost:8000/api/Discussions/")
        .then(res => {
          const result = Object.values(res)
          setFavorites([...result[0]])
        })
        .catch(error => console.log(error));
      }
    function likeUpdate(id,event){
      axios
      .get(`http://localhost:8000/api/Discussions/${id}`)
      .then(refreshlist)
    }
     useEffect(() => {
        axios
        .get("http://localhost:8000/api/Discussions/")
        .then(res => {
          const result = Object.values(res)
          setFavorites([...result[0]])
        })
        .catch(error => console.log(error));

    }, []);

    

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <input
            type="text"
            className="form-control titleClass"
            placeholder="Give a Title"
          />
          <textarea
            className="form-control typingArea"
            rows="5"
            aria-label="With textarea"
            placeholder="Write something ......"
          ></textarea>
          <button type="button" className="btn btn-primary" onClick={(event)=>publishBlog(event)}>
            Publish
          </button>
        </div>
      </div>
      <div className="discussionTrack" id="discussion">
        
        {favorites.map((favorite) =>{
        return (
        <div className="panel panel-success" key={favorite.id}>
          <div className="panel-heading">
            <h3 className="panel-title">{favorite.discussion_title}</h3>
          </div>
          <div className="panel-body">
            {favorite.discussion_text}
          </div>
          <div className="panel-footer" style={{display: "flex",flexDirection : "column"}}>
            <div style={{ display: "flex" }}>
              <span style={{ marginRight: "5px" }}></span>
              <svg
                style={{ height: "20px", fill: "blue" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                onClick={() => likeUpdate(favorite.id,event)}
              >
                <path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.1s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z" />
              </svg>
              <span style={{ marginRight: "2px" }}></span>
              {favorite.like_count}
            <div
                    style={{
                      marginLeft: "20px",
                      display: "flex",
                      cursor: "pointer",
                    }}
                    onClick={() => displayReply(favorite.id)}
                  >              <svg
                style={{ height: "20px", fill: "blue" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z" />
              </svg>

              <p style={{marginLeft: "8px"}}>Reply</p>
            </div>
            </div>
            {selectedFavorite.id === favorite.id && (
                  <div className="reply">
                    <div className="input">
                      <input
                        placeholder="Reply..."
                        type="text"
                        value={reply}
                        onChange={(e) => {
                          setReply(e.target.value);
                        }}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        style={{
                          height: "20px",
                          fill: "blue",
                          cursor: "pointer",
                        }}
                        onClick={()=>postReply(favorite.id, event)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                        />
                      </svg>
                    </div>
                    <div className="reply-container">
                    {selectedFavorite.replies.map((v) => (
                        <div className="reply-single user-info" key={v.id}>
                          <span className="user-name">{v.username}</span>
                          <p className="reply-content">{v.reply_text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
          </div>
        </div>
        )})}
      </div>
    </div>
  );
}

export default discuss;

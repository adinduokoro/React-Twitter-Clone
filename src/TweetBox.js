import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@mui/material'
import { useEffect , useState } from 'react';
import db from './firebase';

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault()

    db.collection('posts').add({
      displayName: "Snoop Dogg",
      username: "snoopdogg",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
      "https://pbs.twimg.com/profile_images/1564375315526275072/7Xnua7BM_400x400.jpg",
    })

    setTweetMessage("")
    setTweetImage("")
  }

  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1564375315526275072/7Xnua7BM_400x400.jpg" />
          <input className='tweetBox__imageInput' placeholder='Whats happening?' type="text" value={tweetMessage} onChange={e => setTweetMessage(e.target.value)}/>
        </div>
        <input className='tweetBox__imageInput' placeholder="Optional: Enter Image Url" type="text" value={tweetImage} onChange={e => setTweetImage(e.target.value)}/>
        <Button className='tweetBox__tweetButton' onClick={sendTweet}>Tweet</Button>
      </form>

    </div>
  )
}

export default Tweetbox
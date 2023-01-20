import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@mui/material'

function Tweetbox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1564375315526275072/7Xnua7BM_400x400.jpg" />
          <input className='tweetBox__imageInput' placeholder='Whats happening?' type="text" />
        </div>
        <input className='tweetBox__imageInput' placeholder="Optional: Enter Image Url" type="text" />
        <Button className='tweetBox__tweetButton'>Tweet</Button>
      </form>

    </div>
  )
}

export default Tweetbox
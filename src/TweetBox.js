import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@mui/material'

function Tweetbox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <input className='tweetBox__imageInput' placeholder='Whats happening?' type="text" />
        </div>
        <input className='tweetBox__imageInput' placeholder="Optional: Enter Image Url" type="text" />
        <Button className='tweetBox__tweetButton'>Tweet</Button>
      </form>

    </div>
  )
}

export default Tweetbox
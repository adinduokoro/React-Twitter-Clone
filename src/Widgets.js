import React from 'react'
import './Widgets.css'
import { TwitterTimelineEmbed , TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'
import SearchIcon from '@mui/icons-material/Search';


function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets__input">
        <SearchIcon className='widgets__searchIcon'/>
        <input placeholder='Search Twitter' type='text' />
      </div>
      <div className="widgets__widgetContainer">
        <h2>Whats Happening</h2>
        <TwitterTweetEmbed tweetId={'1616295692787658756'} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="snoopdogg"
          options={{height: 400}}
        />
        <TwitterShareButton
          url={'https://facebook.com/snoopdogg'}
          options={{ text: '#reactjs is awesome', via: 'twitter' }}
        />
      </div>
    </div>
  )
}

export default Widgets
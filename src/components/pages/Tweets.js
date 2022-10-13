// import React, { useState, useEffect } from "react";
import "./Tweets.css";
// import { TwitterTweetEmbed } from "react-twitter-embed";

// import TweetEmbed from 'react-tweet-embed'

// const Tweets = () => {
//   return <TweetEmbed tweetId="692527862369357824" />
// }

// default export Tweets;
import React from 'react'

import TweetEmbed from 'react-tweet-embed'

export const Tweet1 = () => {
  return <TweetEmbed tweetId="1577391735226781696" />
}

export const Tweet2 = () => {
  return <TweetEmbed tweetId="1507043024047464454" />
}


function Tweets() {
  return (
<div className='Tweets'>
        {/* <h1>Memes </h1>  */}
        <div className='Tweets__container'>
            <div className='Tweets__wrapper'>
                <ul className='Tweets__items'>
                    <Tweet1 />
                    <Tweet2 />
                    <Tweet2 />
                    <Tweet2 />
                    <Tweet2 />
                    <Tweet2 />
                </ul>
                <ul className='Tweets__items'>
                    <Tweet2 
                    />

                </ul>
            </div>
        </div>

    </div>

      )
}

export default Tweets

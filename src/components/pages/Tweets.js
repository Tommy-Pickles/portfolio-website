// import React, { useState, useEffect } from "react";
import "./Tweets.css";
import ClipLoader from "react-spinners/ClipLoader";
import { TwitterTweetEmbed } from "react-twitter-embed";

// import TweetEmbed from 'react-tweet-embed'

// const Tweets = () => {
//   return <TweetEmbed tweetId="692527862369357824" />
// }

// default export Tweets;
import React from 'react'

import TweetEmbed from 'react-tweet-embed'
import { useState } from "react";
import { useEffect } from "react";

export const Tweet1 = () => {
  return <TweetEmbed tweetId="1577391735226781696" />
}

export const Tweet2 = () => {
  return <TweetEmbed tweetId="1507043024047464454" />
}
export const Tweet3 = () => {
  return <TweetEmbed tweetId="1481480216124207106" />
}
export const Tweet4 = () => {
  return <TweetEmbed tweetId="1481835812627300352" />
}
export const Tweet5 = () => {
  return <TweetEmbed tweetId="1470154750368698372" />
}
export const Tweet6 = () => {
  return <TweetEmbed tweetId="1473595229630447621" />
}
export const Tweet7 = () => {
  return <TweetEmbed tweetId="1462311560789905414" />
}
export const Tweet8 = () => {
  return <TweetEmbed tweetId="1582035484494409728" />
}
export const Tweet9 = () => {
  return <TweetEmbed tweetId="1482312534174666752" />
}
export const Tweet10 = () => {
  return <TweetEmbed tweetId="1561541070357671936" />
}


function Tweets() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true)
      setTimeout(()=> {
        setLoading(false)

      }, 1000)
  },[])

  return (
<div className='Tweets'>
  {
    loading ? 

      <h1>Loading, Please wait </h1>
    


      :
    
  

        <div className='Tweets__container'>
            <div className='Tweets__wrapper'>
                <ul className='Tweets__items'>
                    <Tweet1 />
                    <Tweet2 />
                    <Tweet3 />
                    <Tweet4 />
                    <Tweet5 />
                    <Tweet6 />
                    <Tweet7 />
                    <Tweet8 />
                    <Tweet9 />
                    <Tweet10 />
                </ul>
                <ul className='Tweets__items'>
                    <Tweet2 />
                     <Tweet4 />
                    <Tweet5 />
                    <Tweet6 />
  
                </ul>
                    
            </div>
        </div>
 }
    </div>

      )
}

export default Tweets

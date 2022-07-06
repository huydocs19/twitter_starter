import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  const handleOnTweetTextChange = (event) => {
    props.setTweetText(event.target.value)
  }
  const handleOnSubmit = () => {    
    let newTweet = {
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
      id: props.tweets.length
    }    
    props.setTweets(currentTweets => [...currentTweets, newTweet])    
    props.setTweetText("")
  }
  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount characterCount={props.tweetText.length}/>
        <TweetSubmitButton characterCount={props.tweetText.length} handleOnSubmit={handleOnSubmit}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  const maxCharacterCount = 140    
  return <span className={props.characterCount > 140 ? "red":""}>{props.characterCount > 0 ? maxCharacterCount - props.characterCount: ""}</span> 
  
}

export function TweetSubmitButton(props) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={props.handleOnSubmit} disabled={props.characterCount == 0 || props.characterCount > 140}>Tweet</button>
    </div>
  )
}

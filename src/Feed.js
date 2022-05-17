import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />
      {/* Post */}
      <Post
        displayName="Ramshankar"
        userName="Ramshankar_01"
        verified={true}
        text="This a test post"
        image="https://media.giphy.com/media/q4YtZsDOUUzfoLYjFQ/giphy-downsized-large.gif"
        avatar="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
      />
    </div>
  );
}

export default Feed;

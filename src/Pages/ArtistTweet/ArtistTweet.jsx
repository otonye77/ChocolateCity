import React, { useState } from "react";
import { CreateTweets } from "../../Services/Api";
import "./ArtistTweet.css";

const ArtistTweet = ({ artistId }) => {
  const [tweet, setTweet] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setTweet(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!tweet.trim()) {
      setError("Tweet cannot be empty");
      return;
    }

    try {
      await CreateTweets(artistId, tweet);
      setTweet("");
      setError("");
      alert("Tweet posted successfully!");
    } catch (error) {
      console.error("Error posting tweet:", error);
      setError("Failed to post tweet. Please try again later.");
    }
  };

  return (
    <div className="artist-tweet-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post your tweet"
          value={tweet}
          onChange={handleInputChange}
        />
        <button style={{marginLeft: '10px'}} type="submit">Submit Tweet</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ArtistTweet;

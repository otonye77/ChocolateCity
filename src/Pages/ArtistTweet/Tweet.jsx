// Tweets.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTweets } from '../../Services/Api';

const Tweets = () => {
  const { artistId } = useParams();
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchArtistTweets = async () => {
      try {
        const allTweets = await fetchTweets();
        const artistTweets = allTweets.filter(tweet => tweet.postId.toString() === artistId);
        setTweets(artistTweets);
      } catch (error) {
        console.error('Error fetching tweets:', error);
      }
    };

    fetchArtistTweets();
  }, [artistId]);

  console.log(tweets)

  return (
    <div>
      <h1>Tweets</h1>
      <ul>
        {tweets.map(tweet => (
          <li key={tweet.id}>
            <p><strong>{tweet.name}:</strong> {tweet.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tweets;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTweets, deleteTweet, updateTweet } from '../../Services/Api';
import './Tweet.css';

const Tweets = () => {
  const { artistId } = useParams();
  const [tweets, setTweets] = useState([]);
  const [editingTweet, setEditingTweet] = useState(null);
  const [editedText, setEditedText] = useState('');

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

  const handleEdit = (tweet) => {
    setEditingTweet(tweet);
    setEditedText(tweet.body);
  };

  const handleUpdate = async () => {
    try {
      const updatedTweet = await updateTweet(editingTweet.id, { ...editingTweet, body: editedText });
      setTweets(tweets.map(tweet => tweet.id === updatedTweet.id ? updatedTweet : tweet));
      setEditingTweet(null);
      setEditedText('');
    } catch (error) {
      console.error('Error updating tweet:', error);
    }
  };

  const handleDelete = async (tweetId) => {
    const confirmed = window.confirm('Are you sure you want to delete this tweet?');
    if (confirmed) {
      try {
        await deleteTweet(tweetId);
        setTweets(tweets.filter(tweet => tweet.id !== tweetId));
      } catch (error) {
        console.error('Error deleting tweet:', error);
      }
    }
  };

  return (
    <div className="tweets-container">
      <h1>Tweets</h1>
      <ul className="tweets-list">
        {tweets.map(tweet => (
          <li key={tweet.id} className="tweet-item">
            {editingTweet && editingTweet.id === tweet.id ? (
              <div className="editing-area">
                <textarea value={editedText} onChange={(e) => setEditedText(e.target.value)}></textarea>
                <button className="save-button" onClick={handleUpdate}>Save</button>
                <button className="cancel-button" onClick={() => setEditingTweet(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <p><strong>{tweet.name}:</strong> {tweet.body}</p>
                <button className="edit-button" onClick={() => handleEdit(tweet)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(tweet.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tweets;

import { Link, useNavigate } from "react-router-dom";
import "./ArtistList.css";
import ArtistTweet from "../../Pages/ArtistTweet/ArtistTweet";
import { useState } from "react";

const ArtistList = ({ artist }) => {
    const [showTweetForm, setShowTweetForm] = useState(false);

    const navigate = useNavigate();
    const { id, name, username, email, phone, address: {city} } = artist;

    const GoToArtistAlbum = (id) => {
        navigate(`/albums/${id}`)
    }

    const ShowForm = () => {
        setShowTweetForm(!showTweetForm);
    }

    return (
        <div className="artist-card">
            <h2 style={{cursor: 'pointer'}} onClick={() => GoToArtistAlbum(id)}>{name}</h2>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>City:</strong> {city}</p>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
               <Link onClick={ShowForm}>Create Tweet</Link>
                <Link to={`/tweets/${id}`}>See Tweets</Link>
            </div>
            {showTweetForm && <ArtistTweet artistId={id} />}
        </div>
    );
};

export default ArtistList;

import { useNavigate } from "react-router-dom";
import "./ArtistList.css";

const ArtistList = ({ artist }) => {
    const navigate = useNavigate();
    const { id, name, username, email, phone, address: {city} } = artist;

    const GoToArtistAlbum = (id) => {
        navigate(`/albums/${id}`)
    }

    return (
        <div onClick={() => GoToArtistAlbum(id)} className="artist-card">
            <h2>{name}</h2>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>City:</strong> {city}</p>
        </div>
    );
};

export default ArtistList;

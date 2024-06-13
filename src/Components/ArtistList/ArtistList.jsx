import "./ArtistList.css";

const ArtistList = ({ artist }) => {
    const { name, username, email, phone, address: {city} } = artist;

    return (
        <div className="artist-card">
            <h2>{name}</h2>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>City:</strong> {city}</p>
        </div>
    );
};

export default ArtistList;

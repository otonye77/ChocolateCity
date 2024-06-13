import { useState } from "react";
import { fetchArtist } from "../../Services/Api";
import { useEffect } from "react";
import ArtistList from "../../Components/ArtistList/ArtistList";
import "./Artist.css";

const Artist = () => {
    const [artists, setArtists] = useState([]);
    useEffect(() => {
        const getArtistsData = async () => {
            const data = await fetchArtist();
            setArtists(data);
        }
        getArtistsData();
    }, [])
   
    return (
        <div>
            <div className="artist-container">
                {
                    artists.map((artist) => (
                        <div key={artist?.id}>
                           <ArtistList artist={artist} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Artist;
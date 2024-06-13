import { useState } from "react";
import "./AlbumList";
import { fetchAlbumsPhotos } from "../../Services/Api";
import { useEffect } from "react";

const AlbumList = ({album}) => {
    const {id, userId, title} = album;
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const getAlbumPhotos = async () => {
            const data = await fetchAlbumsPhotos(id);
            setPhotos(data)
        }
        getAlbumPhotos();
    }, [])

    console.log(photos);

    return (
        <div className="album-card">
            <p><strong>Title:</strong> {title}</p>
        </div>
    )
}

export default AlbumList;

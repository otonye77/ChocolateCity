import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAlbums, fetchAlbumsPhotos } from "../../Services/Api";
import AlbumList from "../../Components/AlbumList/AlbumList";
import "./ArtistAlbum.css"; 

const ArtistAlbum = () => {
  const { artistId } = useParams();
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState({});

  useEffect(() => {
    const fetchAlbumsAndPhotos = async () => {
      try {
        const albumsData = await fetchAlbums(artistId);
        setAlbums(albumsData);

        const photoRequests = albumsData.map((album) => fetchAlbumsPhotos(album.id));
        const photosData = await Promise.all(photoRequests);

        const photosByAlbum = photosData.reduce((acc, photos, index) => {
          acc[albumsData[index].id] = photos;
          return acc;
        }, {});

        setPhotos(photosByAlbum);
      } catch (error) {
        console.error("Error fetching albums or photos:", error);
      }
    };

    fetchAlbumsAndPhotos();
  }, [artistId]);

  return (
    <div className="albums-container">
      <h1>Albums</h1>
      <div>
        {albums.map((album) => (
          <div key={album.id} className="album">
            <h2>{album?.title}</h2>
            {photos[album?.id] && (
              <div>
                {photos[album?.id].map((photo) => (
                  <div key={photo?.id}>
                    <img src={photo?.thumbnailUrl} alt={photo?.title} />
                    <p>{photo?.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistAlbum;

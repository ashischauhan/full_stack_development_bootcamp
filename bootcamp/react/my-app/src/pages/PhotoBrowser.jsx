import { useEffect, useState } from "react";
import { getPhotos } from "../actions/photoActions";
import { getCollections } from "../actions/photoActions";
import { getCollectionPhotos } from "../actions/photoActions";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Adjust the import path as necessary

export default function PhotoBrowser() {
  const [photos, setPhotos] = useState([]);
  const [index, setIndex] = useState(-1);
  const [collections, setCollections] = useState([]);

  // This is a placeholder for the photo browser functionality
  // You can implement fetching and displaying photos here
  useEffect(() => {
    (async () => {
      const data = await getPhotos();
      setPhotos(data);
      // If you want to fetch collections, you can uncomment the next line
      const collectionsData = await getCollections();
      setCollections(collectionsData);
    })();
  }, []);
  // Simulate fetching photos
  async function loadCollection(collectionId) {
    const data = await getCollectionPhotos(collectionId);
    setPhotos(data);
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Photo Browser</h1>
      <div>
        <h2 className="text-xl font-bold mb-2">Collections</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          {collections.map((collection) => (
            <button
              onClick={() => loadCollection(collection.id)}
              className="bg-amber-500 rounded-md p-3"
              key={collection.id}
            >
              {collection.title}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div key={photo.id}>
            <img
              src={photo.urls.small}
              alt={photo.alt_description || "Photo"}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      <RowsPhotoAlbum
        photos={photos.map((photo) => ({
          src: photo.urls.small,
          width: 300,
          height: 300,
          alt: photo.alt_description || "Photo",
        }))}
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos.map((photo) => ({
          src: photo.urls.full,
          alt: photo.alt_description || "Photo",
        }))}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
}

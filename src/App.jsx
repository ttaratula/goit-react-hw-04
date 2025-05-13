import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn";
const [selectedImage, setSelectedImage] = useState(null);


export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=oTG1UQTDb3rhIQFAjY8e3g1kFp-1USRYBVYRFwF2yyM`
      );

      const data = await response.json();
      setImages(data.results);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleImageClick = (imageData) => {
    setSelectedImage(imageData);
  };

  {selectedImage && (
    <ImageModal
      isOpen={!!selectedImage}
      onClose={() => setSelectedImage(null)}
      image={selectedImage}
    />
  )}
  

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {!loading && images.length > 0 && !error && (
        <LoadMoreBtn onClick={loadMore} />
      )}
    </>
  );
}

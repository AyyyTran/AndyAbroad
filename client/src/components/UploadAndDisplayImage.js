import React, {useState, useEffect} from 'react';

const UploadAndDisplayImage = ({onFileSelect, resetImage}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    onFileSelect(file ? file.name : null);
  };

  useEffect(() => {
    if (resetImage) {
      setSelectedImage(null);
    }
  }, [resetImage]);

  useEffect(() => {
    if (selectedImage) {
      console.log('Selected Image:', selectedImage);
      const imageUrl = URL.createObjectURL(selectedImage);
      console.log('Image URL:', imageUrl);
    }
  }, [selectedImage]);

  return (
    <div>
      {selectedImage && (
        <div>
          <img
            alt="CoverImage"
            width={'250px'}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Delete</button>
        </div>
      )}

      <br />
      <br />

      <label htmlFor="coverImage">Choose a cover image: </label>
      <br />
      <input
        type="file"
        id="coverImage"
        name="coverImage"
        accept="image/png, image/jpeg, image/jpg"
        onChange={handleImageSelect}
      />
    </div>
  );
};

export default UploadAndDisplayImage;

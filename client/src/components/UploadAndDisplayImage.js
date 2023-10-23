import React, {useState} from 'react';

const UploadAndDisplayImage = ({onFileSelect}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSendClick = () => {
    if (selectedImage) {
      onFileSelect(selectedImage.name);
      setSelectedImage(null);
    }
  };

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
      <form>
        <label htmlFor="coverImage">Choose a cover image: </label>
        <input
          type="file"
          name="coverImage"
          accept="image/*"
          onChange={handleImageSelect}
        />
        <button type="button" onClick={handleSendClick}>
          Send
        </button>
      </form>
    </div>
  );
};

export default UploadAndDisplayImage;

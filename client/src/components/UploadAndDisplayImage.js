import React, {useState} from 'react';

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
      <form action="/api/upload" method="POST" enctype="multipart/form-data">
        <label htmlFor="coverImage">Choose a cover image: </label>
        <input type="file" name="coverImage" accept="image/*" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default UploadAndDisplayImage;

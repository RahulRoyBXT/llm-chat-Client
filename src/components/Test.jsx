import React from 'react';
import { useSelector } from 'react-redux';
import { selectProfilePic } from '../features/selectors/userSelector';

const Base64ToImage = () => {
  // Get the profilePic from Redux store
  const profilePic = useSelector(selectProfilePic);
  console.log(profilePic);

  // Return loading state if profilePic is not available
  if (!profilePic || !profilePic.data) {
    return <div>Loading...</div>;
  }

  // Convert the array into a binary string
  const byteArray = new Uint8Array(profilePic.data);

  // Convert binary data to Base64
  function arrayBufferToBase64(arrayBuffer) {
    let binary = '';
    const bytes = new Uint8Array(arrayBuffer);
    const length = bytes.byteLength;
    for (let i = 0; i < length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  // Create a Base64 string
  const base64String = arrayBufferToBase64(byteArray);

  // Adjust MIME type based on the image type
  const imageUrl = `data:image/png;base64,${base64String}`;

  return (
    <div>
      <img src={imageUrl} alt="Profile" />
    </div>
  );
};

export default Base64ToImage;

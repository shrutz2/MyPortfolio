// Hash the image URL for security
export const getHashedImageUrl = (imageUrl: string): string => {
  // Base64 encode the URL
  return btoa(imageUrl);
};

// Decode the hashed URL
export const decodeHashedImageUrl = (hashedUrl: string): string => {
  try {
    return atob(hashedUrl);
  } catch (error) {
    console.error('Error decoding URL:', error);
    return '';
  }
};

// Image URL stored as hashed/encoded value
const SHRUTI_IMAGE_HASHED = 'aHR0cHM6Ly9pLmltZ3VyLmNvbS9Dd09rRERyLmpwZWc='; // Base64 encoded URL

export const getShrituImageUrl = (): string => {
  return decodeHashedImageUrl(SHRUTI_IMAGE_HASHED);
};

const API_URL = "https://api.unsplash.com/";
const API_ACCESS_KEY = "67fuoCIjcvSytzWr_uGP4KgxZiTP-eWL5BCzsEiJ2Ks";

export async function getPhotos() {
  const response = await fetch(
    `${API_URL}/photos/?client_id=${API_ACCESS_KEY}`
  );
  const data = await response.json();
  return data;
}

export async function getCollections() {
  const response = await fetch(
    `${API_URL}/collections/?client_id=${API_ACCESS_KEY}&per_page=30`
  );
  if (!response.ok) {
    throw new Error("Collections not found");
  }
  const data = await response.json();
  return data;
}
export async function getCollectionPhotos(collectionId) {
  const response = await fetch(
    `${API_URL}/collections/${collectionId}/photos?client_id=${API_ACCESS_KEY}`
  );
  if (!response.ok) {
    throw new Error("Collection photos not found");
  }
  const data = await response.json();
  return data;
}

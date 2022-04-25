import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";

// 'file' comes from the Blob or File API
export const uploadImage = (
  image: File,
  userId: string,
  currentDate: string,
  currentGroup: string,
  caption: string
) => {
  const storage = getStorage();
  const storageRef = ref(
    storage,
    `userAssets/${userId}/proofs/${currentGroup}/${currentDate}`
  );
  const metadata = {
    contentType: "image/jpeg",
    public: true,
    customMetadata: {
      imgCaption: caption,
    },
  };
  return uploadBytes(storageRef, image, metadata);
};

export const getImageUrl = (
  userId: string,
  currentDate: string,
  currentGroup: string
) => {
  const storage = getStorage();
  const storageRef = ref(
    storage,
    `userAssets/${userId}/proofs/${currentGroup}/${currentDate}`
  );

  return getDownloadURL(storageRef);
};

export const getImageCaption = (
  userId: string,
  currentDate: string,
  currentGroup: string
) => {
  const storage = getStorage();
  const storageRef = ref(
    storage,
    `userAssets/${userId}/proofs/${currentGroup}/${currentDate}`
  );

  return getMetadata(storageRef);
};

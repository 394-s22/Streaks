import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// 'file' comes from the Blob or File API
export const uploadImage = (
  image: File,
  userId: string,
  currentDate: string,
  currentGroup: string
) => {
  const storage = getStorage();
  const storageRef = ref(
    storage,
    `userAssets/${userId}/proofs/${currentGroup}/${currentDate}`
  );
  const metadata = {
    contentType: "image/jpeg",
    public: true,
  };
  console.log("test");
  uploadBytes(storageRef, image, metadata).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
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

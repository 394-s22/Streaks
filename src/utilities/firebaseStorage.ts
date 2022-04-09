import { getStorage, ref, uploadBytes } from "firebase/storage";

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
  console.log("test");
  uploadBytes(storageRef, image).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
};

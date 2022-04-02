import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { useState, useEffect } from "react";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNJb5Lz7J5-9GZYJ8Gz1JJiMRbD1DrDKs",
  authDomain: "cs394-streaks.firebaseapp.com",
  databaseURL: "https://cs394-streaks-default-rtdb.firebaseio.com",
  projectId: "cs394-streaks",
  storageBucket: "cs394-streaks.appspot.com",
  messagingSenderId: "413536786664",
  appId: "1:413536786664:web:cb1f0532671359f584d15d",
};

const firebase = initializeApp(firebaseConfig);
// const database = getDatabase(firebase);

// export const useData = (path, transform) => {
//   const [data, setData] = useState();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const dbRef = ref(database, path);
//     const devMode =
//       !process.env.NODE_ENV || process.env.NODE_ENV === "development";
//     if (devMode) {
//       console.log(`loading ${path}`);
//     }

//     return onValue(
//       dbRef,
//       (snapshot) => {
//         const val = snapshot.val();
//         if (devMode) {
//           console.log(val);
//         }
//         setData(transform ? transform(val) : val);
//         setLoading(false);
//         setError(null);
//       },
//       (error) => {
//         setData(null);
//         setLoading(false);
//         setError(error.message);
//       }
//     );
//   }, [path, transform]);

//   return [data, loading, error];
// };

// export const setData = (path, value) => set(ref(database, path), value);

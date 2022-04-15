import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { child, get, ref, set } from "firebase/database";
import React from "react";
import { Link } from "react-router-dom";
import { auth, database } from "../utilities/firebase";

interface LogInPageProps {
  currentUser: string;
}

const LogInPage: React.FunctionComponent<LogInPageProps> = ({
  currentUser,
}) => {
  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>

      <button
        onClick={async () => {
          const provider = new GoogleAuthProvider();

          const result = await signInWithPopup(auth, provider);

          const path = `users/${result.user.uid}`;

          const userDoc = await get(child(ref(database), path));

          if (!userDoc.exists()) {
            await set(ref(database, path), {
              name: result.user.displayName,
              email: result.user.email,
              avatarUrl: result.user.photoURL,
              id: result.user.uid,
            });
          }
        }}
      >
        Login with Google
      </button>
    </div>
  );
};

export default LogInPage;

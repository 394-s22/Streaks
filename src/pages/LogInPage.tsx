import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { child, get, ref, set } from "firebase/database";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, database } from "../utilities/firebase";
import { useCurrentUser } from "../utilities/useCurrentUser";


interface LogInPageProps {
  currentUser: string;
}

const LogInPage: React.FunctionComponent<LogInPageProps> = ({
  currentUser,
}) => {

  const { user, loading } = useCurrentUser();

  let navigate = useNavigate();

  if (user) {
    navigate("/groups");
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>

      <div>{JSON.stringify(user, null, 2)}</div>

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

      <button
        onClick={async () => {
          signOut(auth);
        }}
      >
        Logout

      </button>
    </div>
  );
};

export default LogInPage;

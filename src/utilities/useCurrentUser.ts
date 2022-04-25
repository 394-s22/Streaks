import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { UserInfo } from "../lib/types";
import { auth, useData } from "../utilities/firebase";

export const useCurrentUser = (): {
  user: UserInfo | undefined;
  loading: boolean;
} => {
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const [user] = useData<UserInfo>(`users/${userId}`);

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
      setLoading(false);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  return { user, loading };
};

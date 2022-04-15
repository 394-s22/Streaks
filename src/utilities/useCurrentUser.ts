import {useEffect, useState} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { child, get, ref} from "firebase/database";
import { auth, database, useData } from "../utilities/firebase";


export const useCurrentUser = () => {
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState<string | null>(null);
    const [user, setUser] = useData(`users/${userId}`);

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, async (user) => {
            setLoading(true)
            if (user) {
                setUserId(user.uid)
            }
            else {
                setUserId(null)
            }
            setLoading(false)
        })
        return () => {unsubscribed()}
    }, [])
    return { user, loading };
}

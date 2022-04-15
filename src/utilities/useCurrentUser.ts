import {useEffect, useState} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { child, get, ref} from "firebase/database";
import { auth, database } from "../utilities/firebase";


export const useCurrentUser = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, async (user) => {
            setLoading(true)
            if (user) {
                const userDoc = await get(child(ref(database), `users/${user.uid}`));
                setUser(userDoc.val())
            }
            else {
                setUser(null)
            }
            setLoading(false)
        })
        return () => {unsubscribed()}
    }, [])
    return { user, loading };
}


import { useEffect, useState } from "react";
import { database, useData } from "../utilities/firebase";

export const useCurrentUser = () => {
  const [loading, setLoading] = useState(true);
    const [groups, setGroups] = useData(`groups/`);

  useEffect(() => {

  }, []);
  return { groups };
};

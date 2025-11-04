"use client";

import { SyncUser } from "@/lib/actions/users";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

function UserSync() {
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    const handleUsersync = async () => {
      if (isLoaded && isSignedIn) {
        try {
          await SyncUser();
        } catch (error) {
          console.log("Error in syncing User:", error);
        }
      }
    };
    handleUsersync();
  },[isLoaded,isSignedIn]);
  return null;
}

export default UserSync;
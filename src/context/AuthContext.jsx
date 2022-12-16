import React, { createContext, useEffect, useState } from "react";
import { userObserver } from "../auth/firebase";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(true);
  const [open, setOpen] = useState(false);
  const [uid, setUid] = useState("");
  console.log(currentUser);

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, open, setOpen, uid, setUid }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

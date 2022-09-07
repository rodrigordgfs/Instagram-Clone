import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user] = useState({
    username: "mr_shinodaa",
    name: "Rodrigo Shinoda",
    image: "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/user.jpg",
    posts: []
  });
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

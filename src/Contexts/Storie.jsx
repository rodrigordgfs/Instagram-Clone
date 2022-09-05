import { createContext, useState } from "react";

export const StorieContext = createContext();

export const StorieProvider = ({ children }) => {
  const [stories] = useState([
    {
      id: 1,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/1.jpg",
      username: "burdenfrig",
    },
    {
      id: 2,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/2.jpg",
      username: "burdenwhi",
    },
    {
      id: 3,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/3.jpg",
      username: "kvintetts",
    },
    {
      id: 4,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/4.jpg",
      username: "melvinsar",
    },
    {
      id: 5,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/5.jpg",
      username: "capplebar",
    },
    {
      id: 6,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/6.jpg",
      username: "burdenma",
    },
    {
      id: 7,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/7.jpg",
      username: "excludeds",
    },
    {
      id: 8,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/8.jpg",
      username: "scarisdal",
    },
    {
      id: 9,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/9.jpg",
      username: "knockrowe",
    },
    {
      id: 10,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/10.jpg",
      username: "carnedd",
    },
  ]);
  return (
    <StorieContext.Provider value={{ stories }}>
      {children}
    </StorieContext.Provider>
  );
};

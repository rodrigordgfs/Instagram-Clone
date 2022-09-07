import { createContext, useState } from "react";

export const StorieContext = createContext();

export const StorieProvider = ({ children }) => {
  const [stories] = useState([
    {
      id: 1,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/1.jpg",
      username: "burdenfrig",
      stories: [
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-1.jpg",
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-2.png",
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-3.png",
      ],
    },
    {
      id: 2,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/2.jpg",
      username: "burdenwhi",
      stories: [
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-1.jpg",
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-2.png",
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-3.png",
      ],
    },
    {
      id: 3,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/3.jpg",
      username: "kvintetts",
      stories: [
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-1.jpg",
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-2.png",
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-3.png",
      ],
    },
    {
      id: 4,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/4.jpg",
      username: "melvinsar",
      stories: [
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-1.jpg",
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-2.png",
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-3.png",
      ],
    },
    {
      id: 5,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/5.jpg",
      username: "capplebar",
      stories: [
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-1.jpg",
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-2.png",
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-3.png",
      ],
    },
    {
      id: 6,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/6.jpg",
      username: "burdenma",
      stories: [
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-1.jpg",
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-2.png",
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-3.png",
      ],
    },
    {
      id: 7,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/7.jpg",
      username: "excludeds",
      stories: [
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-1.jpg",
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-2.png",
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-3.png",
      ],
    },
    {
      id: 8,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/8.jpg",
      username: "scarisdal",
      stories: [
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-1.jpg",
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-2.png",
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-3.png",
      ],
    },
    {
      id: 9,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/9.jpg",
      username: "knockrowe",
      stories: [
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-1.jpg",
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-2.png",
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-3.png",
      ],
    },
    {
      id: 10,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/10.jpg",
      username: "carnedd",
      stories: [
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-1.jpg",
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-2.png",
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/storie-3.png",
      ],
    },
  ]);
  return (
    <StorieContext.Provider value={{ stories }}>
      {children}
    </StorieContext.Provider>
  );
};

import { createContext, useState } from "react";

export const FeedContext = createContext();

export const FeedProvider = ({ children }) => {
  const [feed] = useState([
    {
      id: 1,
      images: [
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/post-1.jpg",
      ],
      description:
        "Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh.",
      user: {
        username: "scarisdal",
        verified: true,
        image:
          "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/10.jpg",
      },
      location: "Long Beach, Califórnia",
      likes: [
        {
          id: 1,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/6.jpg",
          username: "melvinsar",
        },
        {
          id: 2,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/4.jpg",
          username: "burdenma",
        },
      ],
      comments: [
        {
          id: 1,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/6.jpg",
          username: "burdenma",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.",
          createdAt: "2022-01-01T00:02:00.000",
        },
      ],
      createdAt: "2022-09-06T10:35:00.000",
    },
    {
      id: 2,
      images: [
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/post-2.jpg",
      ],
      description:
        "Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh.",
      user: {
        username: "carnedd",
        verified: false,
        image:
          "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/8.jpg",
      },
      location: null,
      likes: [
        {
          id: 1,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/6.jpg",
          username: "melvinsar",
        },
        {
          id: 2,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/4.jpg",
          username: "burdenma",
        },
        {
          id: 3,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/2.jpg",
          username: "scarisdal",
        },
        {
          id: 4,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/9.jpg",
          username: "knockrowe",
        },
      ],
      comments: [
        {
          id: 1,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/6.jpg",
          username: "burdenma",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.",
          createdAt: "2022-01-01T00:02:00.000",
        },
        {
          id: 2,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/6.jpg",
          username: "burdenma",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.",
          createdAt: "2022-01-01T00:02:00.000",
        },
      ],
      createdAt: "2022-09-06T06:14:20.000",
    },
    {
      id: 3,
      images: [
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/post-3.jpg",
      ],
      description:
        "Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh.",
      user: {
        username: "burdenfrig",
        verified: false,
        image:
          "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/6.jpg",
      },
      location: "Long Beach, Califórnia",
      likes: [
        {
          id: 1,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/6.jpg",
          username: "melvinsar",
        }
      ],
      comments: [
        {
          id: 1,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/6.jpg",
          username: "burdenma",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.",
          createdAt: "2022-01-01T00:02:00.000",
        },
        {
          id: 2,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/6.jpg",
          username: "burdenma",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.",
            createdAt: "2022-09-01T01:14:20.000",
        },
        {
          id: 3,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/6.jpg",
          username: "burdenma",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.",
          createdAt: "2022-01-01T00:02:00.000",
        },
        {
          id: 4,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/6.jpg",
          username: "burdenma",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.",
          createdAt: "2022-01-01T00:02:00.000",
        },
        {
          id: 5,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/6.jpg",
          username: "burdenma",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.",
          createdAt: "2022-01-01T00:02:00.000",
        },
        {
          id: 6,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/6.jpg",
          username: "burdenma",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.",
          createdAt: "2022-01-01T00:02:00.000",
        },
      ],
      createdAt: "2022-09-01T01:14:20.000",
    },
    {
      id: 4,
      images: [
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/post-4.jpg",
      ],
      description:
        "Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh.",
      user: {
        username: "excludeds",
        verified: true,
        image:
          "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/4.jpg",
      },
      location: "Long Beach, Califórnia",
      likes: [
        {
          id: 1,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/6.jpg",
          username: "melvinsar",
        },
      ],
      comments: [
        {
          id: 1,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/6.jpg",
          username: "burdenma",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.",
          createdAt: "2022-01-01T00:02:00.000",
        },
      ],
      createdAt: "2022-08-01T00:02:00.000",
    },
    {
      id: 5,
      images: [
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/post-5.jpg",
      ],
      description:
        "Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh.",
      user: {
        username: "melvinsar",
        verified: false,
        image:
          "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/9.jpg",
      },
      location: null,
      likes: [
        {
          id: 1,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/6.jpg",
          username: "melvinsar",
        },
        {
          id: 2,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/4.jpg",
          username: "burdenma",
        },
        {
          id: 3,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/2.jpg",
          username: "scarisdal",
        },
        {
          id: 4,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/9.jpg",
          username: "knockrowe",
        },
      ],
      comments: [
        {
          id: 1,
          image:
            "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/6.jpg",
          username: "burdenma",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.",
          createdAt: "2022-01-01T00:02:00.000",
        },
      ],
      createdAt: "2022-01-01T00:02:00.000",
    },
  ]);
  return (
    <FeedContext.Provider value={{ feed }}>{children}</FeedContext.Provider>
  );
};

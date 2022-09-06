import { createContext, useState } from "react";

export const SuggestUsersContext = createContext();

export const SuggestUsersProvider = ({ children }) => {
  const [users] = useState([
    {
      id: 1,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/1.jpg",
      username: "burdenfrig",
      description: "Seguido(a) por burdenwhi e mais 8 pessoas em comum",
    },
    {
      id: 2,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/2.jpg",
      username: "burdenwhi",
      description: "Você curtiu esta Página no Facebook",
    },
    {
      id: 3,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/3.jpg",
      username: "kvintetts",
      description: "Segue você",
    },
    {
      id: 4,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/4.jpg",
      username: "melvinsar",
      description: "Sugestões para você",
    },
    {
      id: 5,
      image:
        "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/5.jpg",
      username: "capplebar",
      description: "Seguido(a) por scarisdal e mais 4 pessoas",
    },
  ]);
  return (
    <SuggestUsersContext.Provider value={{ users }}>
      {children}
    </SuggestUsersContext.Provider>
  );
};

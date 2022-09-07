import { useState } from "react";

export default function Actions() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  return (
    <div className="flex flex-row justify-between items-center py-4 px-3">
      <div className="flex flex-row items-center gap-3">
        <img
          onClick={() => {
            setLiked((prev) => !prev);
          }}
          className="w-6 h-6 cursor-pointer"
          src={
            liked
              ? "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/liked.svg"
              : "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/like.svg"
          }
          alt="Like Icone"
        />
        <img
          className="w-6 h-6 cursor-pointer"
          src="https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/comment.svg"
          alt="Like Icone"
        />
        <img
          className="w-6 h-6 cursor-pointer"
          src="https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/send.svg"
          alt="Send Icone"
        />
      </div>
      <img
        onClick={() => {
          setSaved((prev) => !prev);
        }}
        className="w-6 h-6 cursor-pointer"
        src={
          saved
            ? "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/saved.svg"
            : "https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/save.svg"
        }
        alt="Save Icone"
      />
    </div>
  );
}

import { useState } from "react";
import Comment from "../../../assets/icons/comment.svg";
import Like from "../../../assets/icons/like.svg";
import Liked from "../../../assets/icons/liked.svg";
import Save from "../../../assets/icons/save.svg";
import Saved from "../../../assets/icons/saved.svg";
import Send from "../../../assets/icons/send.svg";

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
          src={liked ? Liked : Like}
          alt="Like Icone"
        />
        <img
          className="w-6 h-6 cursor-pointer"
          src={Comment}
          alt="Like Icone"
        />
        <img className="w-6 h-6 cursor-pointer" src={Send} alt="Send Icone" />
      </div>
      <img
        onClick={() => {
          setSaved((prev) => !prev);
        }}
        className="w-6 h-6 cursor-pointer"
        src={saved ? Saved : Save}
        alt="Save Icone"
      />
    </div>
  );
}

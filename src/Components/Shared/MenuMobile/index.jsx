import React from "react";

export default function MenuMobile() {
  return (
    <div className="flex flex-row justify-evenly items-center lg:hidden bg-white py-3 border-t border-zinc-200 sticky bottom-0 z-9998 shadow-sm">
      <a href="/">
        <img
          src="https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/home.svg"
          alt="Home"
        />
      </a>
      <a href="/">
        <img
          src="https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/find.svg"
          alt="Find"
        />
      </a>
      <a href="/">
        <img
          src="https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/new.svg"
          alt="New"
        />
      </a>
      <a href="/">
        <img
          src="https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/like.svg"
          alt="Like"
        />
      </a>
      <a href="/">
        <img
            className="w-6 h-6 rounded-full"
          src="https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/user.jpg"
          alt="User"
        />
      </a>
    </div>
  );
}
